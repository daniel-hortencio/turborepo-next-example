import { ReactNode, useCallback, useState } from 'react'

import { ToastContext } from './ToastContext'
import { IToast, Toast } from '../../components/elements'

interface Props {
  children: ReactNode
}

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<IToast | null>(null)

  const clearToast = useCallback(() => {
    setToast(null)
  }, [])

  function createToast({ message, status }: IToast) {
    setToast({ message, status })
  }

  return (
    <ToastContext.Provider value={{ clearToast, createToast }}>
      {toast && (
        <Toast
          message={toast.message}
          status={toast.status}
          onClose={clearToast}
        />
      )}
      {children}
    </ToastContext.Provider>
  )
}
