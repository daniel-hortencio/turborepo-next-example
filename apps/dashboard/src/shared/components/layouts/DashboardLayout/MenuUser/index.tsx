import { ReactNode, Dispatch, SetStateAction } from 'react'

import { Menu } from '@headlessui/react'
import { Box } from '../../../elements/Box'
import { Text } from '../../../elements/Text'
import Icon from '../../../elements/Icon'
import Link from 'next/link'
import {
  MenuDropDown,
  menuDropDownClassNames as classNames
} from '../../../elements'
import { useDispatch } from 'react-redux'
import { logout } from 'shared/store'

interface Props {
  button: ReactNode
  onChange: Dispatch<SetStateAction<boolean>>
}

export const MenuUser = ({ button, onChange }: Props) => {
  const dispatch = useDispatch()

  return (
    <MenuDropDown button={button} onChange={onChange}>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          <Text className="uppercase px-4 pt-3 pb-2 text-sm text-custom-gray-300">
            Configuração de Conta
          </Text>
        </Menu.Item>

        <Box className=" py-2">
          <Menu.Item>
            {({ active }) => {
              return (
                <Link href="#">
                  <Text
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-sm fill-custom-gray-300'
                    )}
                  >
                    <Icon name="LockSimple" />
                    <span className="ml-2">Alterar senha</span>
                  </Text>
                </Link>
              )
            }}
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
                  <Icon name="At" />
                  <span className="ml-2">Alterar email</span>
                </Text>
              </Link>
            )}
          </Menu.Item>
        </Box>

        <Box className="border-t-2 border-custom-gray-100 py-2">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => dispatch(logout())}
                className={classNames(
                  active ? 'bg-gray-100 ' : '',
                  'flex items-center px-4 py-2 text-sm w-full text-danger hover:text-danger-dark fill-danger hover:fill-danger-dark'
                )}
              >
                <Box className="mr-2">
                  <Icon name="SignOut" />
                </Box>
                Sair
              </button>
            )}
          </Menu.Item>
        </Box>
      </Menu.Items>
    </MenuDropDown>
  )
}
