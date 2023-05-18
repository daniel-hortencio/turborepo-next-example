import React from 'react'
import { Box } from 'ui'
import Icon from '../Icon'

export interface ICheckbox {
  checked?: boolean
  onChange: (check: boolean) => void
}

export const Checkbox = ({ checked, onChange }: ICheckbox) => {
  return (
    <div className="relative h-5 w-5 cursor-pointer rounded border-1 border-custom-gray-100 shadow-md">
      {checked && (
        <Box className="absolute left-0 top-0 flex h-full w-full items-center justify-center fill-primary">
          <Icon name="Check" size={12} />
        </Box>
      )}

      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  )
}
