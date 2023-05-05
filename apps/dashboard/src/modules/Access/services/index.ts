import { AxiosInstance } from 'axios'
import { api } from 'shared/api'
import {
  IAuthLoginRequestDTO,
  IAuthLoginResponse,
  IRegisterUserRequestDTO
} from '../types'
import { ApiResponse } from 'shared/api/types'

class AccessServices {
  private readonly api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  async login(
    dto: IAuthLoginRequestDTO
  ): Promise<ApiResponse<IAuthLoginResponse>> {
    return this.api.post('/auth/login', dto)
  }

  async register(dto: IRegisterUserRequestDTO): Promise<ApiResponse<any>> {
    return this.api.post('/auth/register', dto)
  }
}

export const accessServices = new AccessServices(api)
