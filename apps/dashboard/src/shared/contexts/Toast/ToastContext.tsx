import { createContext } from 'react'
import { IToast } from '../../components/elements/Toast'

export interface IToastContext {
  clearToast: () => void
  createToast: (params: IToast) => void
}

export const ToastContext = createContext({} as IToastContext | null)
