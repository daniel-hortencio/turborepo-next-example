'use client'

import { ReactNode } from 'react'

export interface InputBaseProps {
  children: ReactNode
  className?: string
}

export const SelectBase = ({ children, className }: InputBaseProps) => {
  const getClassName = () =>
    `bg-white flex items-center h-12 justify-between rounded-full ${className}`

  return <div className={getClassName()}>{children}</div>
}
