'use client'

import { InputBase, InputBaseProps } from './InputBase'

type Props = InputBaseProps

export const InputText = ({
  placeholder,
  value,
  onChange,
  name,
  required,
  type = 'text'
}: Props) => {
  return (
    <InputBase
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
