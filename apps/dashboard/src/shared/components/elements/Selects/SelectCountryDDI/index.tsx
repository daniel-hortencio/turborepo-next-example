import { CircleFlag as CountryFlag } from 'react-circle-flags'
import { countries_ddi_phone_code } from '../../../../constants/countriesPhoneCode'
import { Text } from '../../Text'
import { Box } from '../../Box'
import { Select } from '../Select'
import { Dispatch } from 'react'

interface Props {
  selected: any
  onSelect: (value: any) => void | Dispatch<any>
}

export const SelectCountryDDI = ({ selected, onSelect }: Props) => {
  const DisplayComponent = selected => (
    <Box className="flex items-center">
      <Box className="hidden md:flex mr-2 w-6 h-6 rounded-full items-center relative">
        <CountryFlag countryCode={selected?.code?.toLowerCase()} />
      </Box>
      <Text>+{selected.ddi}</Text>
    </Box>
  )

  const OptionComponent = country => (
    <div className="flex">
      <Box className="w-6 h-6">
        <CountryFlag countryCode={country.code.toLowerCase()} />
      </Box>
      <Text className="text-custom-gray-500 mx-2 truncate">{country.name}</Text>
      <Text className="text-custom-gray-300 whitespace-nowrap">
        (+{country.ddi})
      </Text>
    </div>
  )

  return (
    <Select
      selected={selected}
      onSelect={onSelect}
      options={countries_ddi_phone_code.sort((a, b) =>
        a.name.localeCompare(b.name)
      )}
      components={{
        option: OptionComponent,
        display: DisplayComponent
      }}
      customClassNames={{
        list: 'max-w-xs'
      }}
      defaultValue={{
        name: 'Brasil',
        code: 'BR',
        ddi: '55'
      }}
    />
  )
}
