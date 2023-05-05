import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectBase } from '../SelectBase'
import Icon from '../../Icon'
import { Text } from '../../Text'
import { Box } from '../../Box'

import S from './styles.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  className?: string
  options: any[]
  defaultValue?: any
  customClassNames?: {
    list?: string
    display?: string
  }
  components?: {
    option?: (props: any) => JSX.Element
    display?: (props: any) => JSX.Element
  }
  selected?: any
  onSelect?: (value: any) => void
}

export const Select = ({
  className,
  options,
  // defaultValue,
  components,
  customClassNames,
  selected,
  onSelect
}: Props) => {
  // const [selected, setSelected] = useState(defaultValue)

  const getClassName = `border-1 border-custom-gray-100 w-full ${className}`

  const defaultDisplay = (props: any) => <Text>{props.name}</Text>
  const Display = components?.display || defaultDisplay

  const defaultOption = (props: any) => (
    <Text className="text-custom-gray-500 mx-2 truncate">{props.name}</Text>
  )
  const Option = components?.option || defaultOption

  return (
    <SelectBase className={getClassName}>
      <Listbox value={selected} onChange={onSelect}>
        {({ open }) => (
          <>
            <div className="relative h-full w-full">
              <Listbox.Button
                className={`${S.SelectSimple__ListBoxButton} flex items-center justify-between relative w-full cursor-default rounded-full px-6 h-full text-left text-custom-gray-500 `}
              >
                <Display {...selected} />
                <Box
                  className={`transition-all fill-custom-gray-300 ${
                    S.SelectSimple__ListBoxButtonArrow
                  } ${open && 'rotate-180'}`}
                >
                  <Icon name="CaretDown" size={20} />{' '}
                </Box>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute z-10 mt-1 max-h-56 max-w-xs overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${customClassNames?.list}`}
                >
                  {options.map(option => (
                    <Listbox.Option
                      key={option.name}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'bg-custom-gray-200 text-white'
                            : 'text-gray-900',
                          'relative select-none py-2 pl-3 pr-9 cursor-pointer'
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => <Option {...option} />}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </SelectBase>
  )
}
