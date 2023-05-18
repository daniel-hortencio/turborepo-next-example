import React from 'react'
import { Box } from 'ui'
import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from 'ui'

interface Props extends ICheckbox {
  label: string
}

export const CheckboxGroup = (props: Props) => {
  return (
    <Box className="flex items-center">
      <Checkbox {...props} />
      <Text
        as="label"
        className="ml-4 text-sm text-custom-gray-400 md:text-base"
      >
        {props.label}
      </Text>
    </Box>
  )
}
