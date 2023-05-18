'use client'

import { ReactNode } from 'react'

export interface InputBaseProps {
  name?: string
  placeholder?: string
  type?: 'text' | 'password' | 'number'
  icon?: ReactNode
  className?: string
  value?: string
  onChange?: (value: string) => void
  required?: boolean
}

export const InputBase = ({
  placeholder,
  type = 'text',
  icon,
  className,
  value,
  onChange,
  name,
  required = false
}: InputBaseProps) => {
  return (
    <div
      className={`bg-white flex items-center h-12 justify-between rounded-full overflow-hidden relative ${className}`}
    >
      <input
        name={name}
        placeholder={placeholder}
        type={type === 'number' ? 'tel' : type}
        className={`w-full placeholder-custom-gray-400 pl-6 pr-14 h-full text-custom-gray-500 `}
        value={value}
        onChange={e =>
          type === 'number'
            ? onChange(e.target.value.replace(/\D/g, ''))
            : onChange(e.target.value)
        }
        required={required}
      />
      {icon && (
        <div className="absolute h-full right-0 flex items-center">{icon}</div>
      )}
    </div>
  )
}
