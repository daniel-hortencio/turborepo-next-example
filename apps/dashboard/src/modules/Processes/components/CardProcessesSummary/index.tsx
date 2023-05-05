import { Box, Text } from '../../../../shared/components/elements'
import Select from '../Select'

interface Props {
  label: string
  filterDays?: number[]
  data: number
}

export const CardProcessesSummary = ({ label, filterDays, data }: Props) => {
  return (
    <Box className="bg-primary-light p-7 rounded-lg flex flex-col h-32">
      <Box className="p-[1px]">
        <Box as="header" className="flex flex-auto justify-between mb-3 h-8 ">
          <Text className="mr-4 text-custom-gray-400 leading-5">{label}</Text>
          {/* <Text>{filterDays}</Text> */}

          {filterDays && (
            <Box className="transform -translate-y-2">
              <Select options={filterDays} />
            </Box>
          )}
        </Box>
        <Text className="text-4xl">{data}</Text>
      </Box>
    </Box>
  )
}
