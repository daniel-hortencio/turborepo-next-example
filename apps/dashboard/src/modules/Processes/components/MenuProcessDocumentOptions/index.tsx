'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

import { Menu } from '@headlessui/react'
import { Box, MenuDropDown } from '../../../../shared/components/elements'
import { Text } from '../../../../shared/components/elements/Text'
import Icon from '../../../../shared/components/elements/Icon'

interface Props {
  button: ReactNode
  isMonitoring: boolean
  cancelMonitoring: () => void
  activeMonitoring?: () => void
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const MenuProcessDocumentOptions = ({
  button,
  isMonitoring,
  cancelMonitoring,
  activeMonitoring
}: Props) => {
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
                  <Icon name="CodeBlock" />
                  <span className="ml-2">Exportar JSON</span>
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
                    'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                  )}
                >
                  <Icon name="FilePdf" />
                  <span className="ml-2">Exportar PDF</span>
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
                    'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                  )}
                >
                  <Icon name="Printer" />
                  <span className="ml-2">Imprimir</span>
                </Text>
              </Link>
            )}
          </Menu.Item>
        </Box>

        <Box className="border-t-2 border-custom-gray-100 py-2">
          <Menu.Item>
            {({ active }) =>
              isMonitoring ? (
                <button
                  onClick={cancelMonitoring}
                  className={classNames(
                    active ? 'bg-gray-100 ' : '',
                    'flex items-center px-4 py-2 text-sm w-full text-danger hover:text-red-600 fill-danger hover:fill-danger-dark'
                  )}
                >
                  <Icon name="Broadcast" size={22} />
                  <span className="ml-2">Cancelar monitoramento</span>
                </button>
              ) : (
                <button
                  onClick={activeMonitoring}
                  className={classNames(
                    active ? 'bg-gray-100 ' : '',
                    'flex items-center px-4 py-2 text-sm w-full text-primary hover:text-primary-dark fill-primary hover:fill-primary-dark'
                  )}
                >
                  <Icon name="Broadcast" />
                  <span className="ml-2 text-left">Ativar monitoramento</span>
                </button>
              )
            }
          </Menu.Item>
        </Box>
      </Menu.Items>
    </MenuDropDown>
  )
}
