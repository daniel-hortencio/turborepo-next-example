import React from 'react'
import { Box } from '../Box'
import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from '../Text'

interface Props extends ICheckbox {
  label: string
}

export const CheckboxGroup = (props: Props) => {
  return (
    <Box className="flex items-center">
      <Checkbox {...props} />
      <Text
        as="label"
        className="ml-4 text-sm md:text-base text-custom-gray-400"
      >
        {props.label}
      </Text>
    </Box>
  )
}
