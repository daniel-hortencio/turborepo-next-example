'use client'

import { useRef, useState } from 'react'

import { InputBaseProps } from './InputBase'
import Icon from '../Icon'
import { Box } from '../Box'
import { Card } from '../Card'
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
    <Box className={`relative flex justify-end flex-auto`}>
      <Card
        className={`flex items-center h-12 justify-between rounded-full overflow-hidden relative text-custom-gray-400 fill-primary focus-within:fill-primary-dark transition-all ${
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
          className={`w-full placeholder-custom-gray-400 pl-6 pr-14 h-full text-custom-gray-500 `}
          autoComplete="off"
        />
        <div className="absolute h-full right-0 flex items-center">
          <button
            type={getRefValue(input_search_ref) === '' ? 'button' : 'submit'}
            className="p-1.5 m-2  transition-all "
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
