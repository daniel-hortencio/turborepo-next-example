import { Dispatch, SetStateAction } from 'react'

import { Box, Text, MenuMobileIcon } from '../../../elements'
import { UserAvatar } from '../UserAvatar'
import Link from 'next/link'
import { dashboard_routes } from '../../../../constants/routes'
import { useDispatch } from 'react-redux'
import { logout } from 'shared/store'

interface Props {
  isOpen: boolean
  onChange: Dispatch<SetStateAction<boolean>>
}

const MenuBackDrop = ({ isOpen, onChange }: Props) => {
  return (
    <button
      className={`fixed t-0 l-0 w-full h-screen ${!isOpen && 'hidden'}`}
      onClick={() => onChange(false)}
    />
  )
}

export const MenuMobileButton = ({ isOpen, onChange }: Props) => {
  return (
    <Box className="flex lg:hidden">
      <UserAvatar src="data:image/jpeg;base64,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" />
      <Box className="fill-primary hover:fill-primary-dark z-10 ">
        <MenuMobileIcon isOpen={isOpen} onChange={onChange} />
      </Box>
    </Box>
  )
}

export const MenuMobile = ({ isOpen, onChange }: Props) => {
  const dispatch = useDispatch()

  const getClassName = () =>
    `flex items-center w-full justify-center h-12 border-b-1 border-primary-dark bg-primary text-white hover:bg-primary-dark`

  return (
    <>
      <MenuBackDrop isOpen={isOpen} onChange={onChange} />

      <Box
        className={`absolute b-0 lg:hidden top-20 w-full transition-all overflow-hidden ${
          isOpen ? 'h-72 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {[
          ...dashboard_routes(),
          {
            label: 'Alterar senha',
            href: '/'
          },
          {
            label: 'Alterar e-mail',
            href: '/'
          },
          {
            label: 'Sair',
            onClick: () => dispatch(logout())
          }
        ].map((item: any) =>
          item.href ? (
            <Link key={item.label} href={item.href}>
              <Text className={getClassName()}>{item.label}</Text>
            </Link>
          ) : (
            <button
              key={item.label}
              onClick={item.onClick}
              className={getClassName()}
            >
              {item.label}
            </button>
          )
        )}
      </Box>
    </>
  )
}
