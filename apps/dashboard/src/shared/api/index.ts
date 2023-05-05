/* eslint-disable prefer-const */
import axios, { AxiosError } from 'axios'
import { Environments } from 'shared/constants/environments'
import { ApiResponse } from './types'
import { useCookies } from 'shared/utils/cookies'
import { IAuthLoginResponse } from 'modules/Access/types'

export const api = axios.create({
  baseURL: Environments.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

let is_refreshing_token = false
let pending_requests_queue: any = []

const api_public_routes = ['/auth/login', '/auth/register']

api.interceptors.request.use(
  async config => {
    const { access_token, token_type, refresh_token } =
      useCookies(null).getUserAuth()

    if (api_public_routes.some(route => route === config.url)) {
      return config
    }

    if (access_token) {
      config.headers.Authorization = `${token_type} ${access_token}`

      return config
    } else if (refresh_token) {
      if (!is_refreshing_token) {
        is_refreshing_token = true

        fetch(`${Environments.API_URL}/auth/refresh`, {
          method: 'POST',
          headers: {
            Authorization: `${token_type} ${refresh_token}`
          }
        })
          .then(res => res.json())
          .then((new_token: IAuthLoginResponse) => {
            useCookies().saveUserAuth(new_token)

            is_refreshing_token = false
            pending_requests_queue.forEach((request: any) =>
              request.onSuccess(new_token.access_token)
            )
            pending_requests_queue = []
          })
          .catch(refresh_token_err => {
            is_refreshing_token = false
            pending_requests_queue.forEach((request: any) =>
              request.onFailure(refresh_token_err)
            )
            pending_requests_queue = []
          })
      }
    }

    return new Promise((resolve, reject) => {
      pending_requests_queue.push({
        onSuccess: (new_token: string) => {
          config.headers.Authorization = `${token_type} ${new_token}`

          return resolve(api(config))
        },
        onFailure: (err: any) => {
          const { status } = err.response
          const { message } = err.response.data

          return reject({
            status,
            message,
            isError: true
          })
        }
      })
    })
  },
  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (onSuccess): any => {
    const { data } = onSuccess

    return {
      data
    } as ApiResponse<any>
  },
  (onError: AxiosError) => {
    return Promise.reject({
      status: onError.status,
      message: onError.response.data
    })
  }
)
