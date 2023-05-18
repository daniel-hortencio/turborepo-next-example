'use client'

import { useState } from 'react'
import { InputBase, InputBaseProps } from './InputBase'
import Icon from '../Icon'

type Props = InputBaseProps

export const InputPassword = ({
  placeholder,
  value,
  onChange,
  name,
  required
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputBase
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={showPassword ? 'text' : 'password'}
      required={required}
      icon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="p-2 m-2 hover:fill-primary transition-all"
        >
          <Icon name={showPassword ? 'Eye' : 'EyeSlash'} size={24} />
        </button>
      }
    />
  )
}
