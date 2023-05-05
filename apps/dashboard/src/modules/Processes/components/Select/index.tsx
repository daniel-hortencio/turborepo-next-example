import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Box, Icon } from '../../../../shared/components/elements'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  options: number[]
}

export default function Select({ options }: Props) {
  const [selected, setSelected] = useState<number | null>(options[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 py-0">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent pr-5 text-right sm:text-sm sm:leading-6">
              <span className="block truncate font-bold transition-all text-primary hover:text-primary-dark md:hidden">
                {selected} D
              </span>
              <span className="truncate font-bold transition-all text-primary hover:text-primary-dark hidden md:block">
                {selected} dias
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-2 flex items-center text-primary">
                <Box className={`transition-all fill-primary`}>
                  <Icon name="CaretDown" />
                </Box>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                {options.map(option => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-primary font-semibold' : 'text-gray-900',
                        'relative cursor-default select-none py-2'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center justify-center">
                          <span
                            className={classNames(
                              active
                                ? 'text-white bg-primary'
                                : selected
                                ? 'text-primary font-bold'
                                : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {option}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
