import { api } from 'shared/api'
import { ApiResponse } from 'shared/api/types'
import { AxiosInstance } from 'axios'

class DashboardServices {
  private readonly api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  async dashboard(): Promise<ApiResponse<any>> {
    return this.api.get('/dashboard')
  }
}

export const dashboardServices = new DashboardServices(api)
