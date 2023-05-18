'use client'

import { useRef, useState } from 'react'

import { InputBaseProps } from './InputBase'
import Icon from '../Icon'
import { Box } from 'ui'
import { Card } from 'ui'
import { getRefValue } from 'shared/utils'

interface Props extends Omit<InputBaseProps, 'text' | 'value' | 'onChange'> {
  variant?: 'fixed' | 'collapsible'
  onSubmit: (e: string) => void
}

export const InputSearch = ({
  placeholder,
  variant = 'fixed',
  onSubmit
}: Props) => {
  const [collapsed, setCollapsed] = useState(true)
  const input_search_ref = useRef<HTMLInputElement>(null)

  return (
    <Box className={`relative flex flex-auto justify-end`}>
      <Card
        className={`relative flex h-12 items-center justify-between overflow-hidden rounded-full fill-primary text-custom-gray-400 transition-all focus-within:fill-primary-dark ${
          variant === 'collapsible' && collapsed ? 'w-12' : 'w-full'
        }`}
      >
        <input
          ref={input_search_ref}
          placeholder={placeholder}
          onBlur={() => {
            if (
              variant === 'collapsible' &&
              getRefValue(input_search_ref) === ''
            )
              setCollapsed(true)
          }}
          className={`h-full w-full pl-6 pr-14 text-custom-gray-500 placeholder-custom-gray-400 `}
          autoComplete="off"
        />
        <div className="absolute right-0 flex h-full items-center">
          <button
            type={getRefValue(input_search_ref) === '' ? 'button' : 'submit'}
            className="m-2 p-1.5  transition-all "
            onClick={() => {
              getRefValue(input_search_ref) === ''
                ? setCollapsed(false)
                : onSubmit(getRefValue(input_search_ref))
            }}
          >
            <Icon name="MagnifyingGlass" size={24} />
          </button>
        </div>
      </Card>
    </Box>
  )
}
