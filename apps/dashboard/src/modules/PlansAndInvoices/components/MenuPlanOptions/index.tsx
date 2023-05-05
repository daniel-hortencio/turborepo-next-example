'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

import { Menu } from '@headlessui/react'
import {
  Box,
  MenuDropDown,
  menuDropDownClassNames as classNames
} from '../../../../shared/components/elements'
import { Text } from '../../../../shared/components/elements/Text'
import Icon from '../../../../shared/components/elements/Icon'

interface Props {
  button: ReactNode
  isCanceled?: boolean
}

export const MenuPlanOptions = ({ button, isCanceled }: Props) => {
  return (
    <MenuDropDown button={button}>
      <Menu.Items className="absolute w-60 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          <Text className="uppercase px-4 pt-3 pb-2 text-sm text-custom-gray-300">
            Opções
          </Text>
        </Menu.Item>

        <Box className=" py-2">
          <Menu.Item>
            {({ active }) => (
              <Link href="#">
                <Text
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                  )}
                >
                  <Icon name="FilePdf" />
                  <span className="ml-2">Exportar todas as faturas</span>
                </Text>
              </Link>
            )}
          </Menu.Item>
          {!isCanceled && (
            <Menu.Item>
              {({ active }) => (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                    )}
                  >
                    <Icon name="SmileySad" />
                    <span className="ml-2">Reduzir meu plano</span>
                  </Text>
                </Link>
              )}
            </Menu.Item>
          )}
        </Box>

        {!isCanceled && (
          <Box className="border-t-2 border-custom-gray-100 py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 ' : '',
                    'flex items-center px-4 py-2 text-sm w-full text-danger hover:text-danger-dark fill-danger hover:fill-danger-dark'
                  )}
                >
                  <Icon name="XCircle" size={22} />
                  <span className="ml-2">Cancelar assinatura</span>
                </button>
              )}
            </Menu.Item>
          </Box>
        )}
      </Menu.Items>
    </MenuDropDown>
  )
}
