import { useState } from 'react'

import { Logo } from '../../../elements'
import { Box } from 'ui'
import { MenuMobile, MenuMobileButton } from '../MenuMobile'
import { MenuDesktop } from '../MenuDesktop'

import S from './styles.module.css'

export const WebsiteLayoutHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  return (
    <Box className="-mb-20 lg:-mb-28">
      <Box
        className={`${S.WebsiteLayoutHeader} fixed left-0 top-0 z-20 flex h-20 w-full backdrop-blur-md lg:h-28`}
      >
        <Box className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
          <Logo color="white" />

          <MenuDesktop />
          <MenuMobileButton
            isOpen={isOpenMobileMenu}
            onChange={setIsOpenMobileMenu}
          />
        </Box>

        <MenuMobile isOpen={isOpenMobileMenu} onChange={setIsOpenMobileMenu} />
      </Box>
      {/* <Box className="fixed left-0 top-0 z-0 h-20 w-full bg-[#353535] lg:h-28" /> */}
    </Box>
  )
}
