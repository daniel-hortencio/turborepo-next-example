import { Dispatch, SetStateAction } from 'react'

import { MenuMobileIcon } from '../../../elements'

import { Box, Text } from 'ui'
import Link from 'next/link'
import { website_routes } from '../../../../constants/routes'

interface Props {
  isOpen: boolean
  onChange: Dispatch<SetStateAction<boolean>>
}

const MenuBackDrop = ({ isOpen, onChange }: Props) => {
  return (
    <button
      className={`t-0 l-0 fixed h-screen w-full ${!isOpen && 'hidden'}`}
      onClick={() => onChange(false)}
    />
  )
}

export const MenuMobileButton = ({ isOpen, onChange }: Props) => {
  return (
    <Box className="flex lg:hidden">
      <Box className="z-10 fill-primary hover:fill-primary-dark ">
        <MenuMobileIcon isOpen={isOpen} onChange={onChange} />
      </Box>
    </Box>
  )
}

export const MenuMobile = ({ isOpen, onChange }: Props) => {
  const getClassName = () =>
    `flex items-center w-full justify-center h-12 border-b-1 border-primary-dark bg-primary text-white hover:bg-primary-dark`

  return (
    <>
      <MenuBackDrop isOpen={isOpen} onChange={onChange} />

      <Box
        className={`b-0 absolute top-20 w-full overflow-hidden transition-all lg:hidden ${
          isOpen ? 'h-72 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {website_routes().map((item: any) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              onClick={() => onChange(false)}
            >
              <Text className={getClassName()}>{item.label}</Text>
            </a>
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
        {/*  <Link href="/">
          <Text className={getClassName()}>Entrar</Text>
        </Link>
        <Link href="/">
          <Text className={getClassName()}>Criar conta</Text>
        </Link> */}
      </Box>
    </>
  )
}
