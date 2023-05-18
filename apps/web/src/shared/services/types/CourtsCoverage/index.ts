
export type IGetCourtsCoverageApiResponse = {
  created_at: string
  updated_at: string
  code: string
  name: string
  description: string
  url: string
  justice: string
  tribunal: string
  instance: string
  judgeship: any
  state: string
  crawler: string
  auth: {
    noauth: {
      enabled: boolean
      url: string
      session: any
      stats: {
        attempts: number
        errors: number
        last_runtime: any
        success_rate: number
        average_execution_time: any
        average_data_transfer: any
        last_executions: any[]
      }
    }
    http: {
      enabled: boolean
      url: string
      credentials: any[]
      session: any
      stats: {
        attempts: number
        errors: number
        last_runtime: any
        success_rate: number
        average_execution_time: any
        average_data_transfer: any
        last_executions: any[]
      }
    }
    captcha: {
      enabled: false
      services: any[]
      type: any
      url: any
      session: any
      stats: {
        attempts: number
        errors: number
        last_runtime: any
        success_rate: number
        average_execution_time: any
        average_data_transfer: any
        last_executions: any[]
      }
    }
    token: {
      enabled: false
      services: any[]
      tokens: any[]
      applications: any[]
      session: any
      stats: {
        attempts: number
        errors: number
        last_runtime: any
        success_rate: number
        average_execution_time: any
        average_data_transfer: any
        last_executions: any[]
      }
    }
  }
  stats: {
    attempts: number
    errors: number
    last_runtime: any
    success_rate: number
    average_execution_time: any
    average_data_transfer: any
    last_executions: any[]
  }
  settings: {
    country: string // 'br'
    language: string // 'pt_BR'
    timezone: string // 'America/Sao_Paulo'
    encode: string // 'utf-8'
  }
}

export type IGetCourtsCoverageAuth = {
  noauth?: {
    enabled: boolean
  }
  http?: {
    enabled: boolean
  }
  captcha?: {
    enabled: boolean
  }
  token?: {
    enabled: boolean
  }
}

type Crawler = {
  name: string,
  data: {
    instance: string,
    auth: IGetCourtsCoverageAuth
  }[]
}

export type IGetCourtsCoverageData = {
  state: string
  crawlers: Crawler[]
}

export type ICourt = {
  name: string;
  label: string;
  data: IGetCourtsCoverageData[]
}

export type IGetCourtsCoverageDataByCourts = ICourt[]
