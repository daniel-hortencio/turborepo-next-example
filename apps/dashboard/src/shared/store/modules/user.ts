import { createSlice } from '@reduxjs/toolkit'
import { IAuthLoginResponse } from 'modules/Access/types'
import { useCookies } from 'shared/utils/cookies'
import { redirect } from 'next/navigation'

export const userSlice = createSlice({
  name: 'user',
  initialState: null as any | null,
  reducers: {
    authenticateUser: (state, { payload }: { payload: IAuthLoginResponse }) => {
      const { access_token, expires_in, refresh_token, scope, token_type } =
        payload

      useCookies(null).saveUserAuth({
        access_token,
        expires_in,
        refresh_token,
        scope,
        token_type
      })

      return {
        ...payload
      }
    },
    getUserByCookies: () => {
      const { access_token } = useCookies(null).getUserAuth()

      if (access_token) {
        return {
          access_token
        }
      }
    },
    logout: () => {
      useCookies().destroyAuthCookies()

      return null
    }
  }
})
