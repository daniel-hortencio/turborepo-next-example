'use client'

import { ReactNode, SetStateAction, Dispatch } from 'react'
import Link from 'next/link'

import { Menu } from '@headlessui/react'
import {
  Box,
  MenuDropDown,
  menuDropDownClassNames as classNames
} from '../../../../shared/components/elements'
import { Text } from '../../../../shared/components/elements/Text'

interface Props {
  button: ReactNode
  onChange: Dispatch<SetStateAction<boolean>>
}

export const MenuPartiesInvolved = ({ button, onChange }: Props) => {
  return (
    <MenuDropDown button={button} onChange={onChange}>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-80 max-w-full md:max-w-none origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
        <Box className="border-b-1">
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 text-sm text-custom-gray-300">
              Polo Ativo
            </Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    Caixa de Previdencia dos Funcionarios do Banco do Brasil
                    Previ (Exequente)
                  </Text>
                </Link>
              )}
            </Menu.Item>
          </Box>
        </Box>

        <Box className="border-b-1">
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 text-sm text-custom-gray-300">
              POLO passivo
            </Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    Sergio Mauricio Carneiro (Executado)
                  </Text>
                </Link>
              )}
            </Menu.Item>
          </Box>
        </Box>

        <Box>
          <Menu.Item>
            <Text className="uppercase px-4 pt-3 text-sm text-custom-gray-300">
              OUTRAS PARTES
            </Text>
          </Menu.Item>

          <Box className=" py-2">
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    Alexandre Ghazi
                  </Text>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    Erica Carla Silva de Sousa Andrade
                  </Text>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    Rodrigo Lessa Pereira
                  </Text>
                </Link>
              )}
            </Menu.Item>
          </Box>
        </Box>
      </Menu.Items>
    </MenuDropDown>
  )
}
