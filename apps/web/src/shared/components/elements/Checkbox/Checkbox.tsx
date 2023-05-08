import React from 'react'
import { Box } from '../Box'
import Icon from '../Icon'

export interface ICheckbox {
  checked?: boolean
  onChange: (check: boolean) => void
}

export const Checkbox = ({ checked, onChange }: ICheckbox) => {
  return (
    <div className="relative border-1 border-custom-gray-100 rounded w-5 h-5 shadow-md cursor-pointer">
      {checked && (
        <Box className="flex items-center justify-center fill-primary w-full h-full absolute top-0 left-0">
          <Icon name="Check" size={12} />
        </Box>
      )}

      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="w-full h-full absolute top-0 left-0 cursor-pointer opacity-0"
      />
    </div>
  )
}
