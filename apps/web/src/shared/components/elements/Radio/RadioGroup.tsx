import { Box } from 'ui'
import { Radio, IRadio } from './Radio'
import { Text } from 'ui'

interface Props extends IRadio {
  label: string
}

export const RadioGroup = (props: Props) => {
  return (
    <Box className="flex items-center">
      <Radio {...props} />
      <Text
        as="label"
        className="ml-4 text-sm text-custom-gray-400 md:text-base"
      >
        {props.label}
      </Text>
    </Box>
  )
}
