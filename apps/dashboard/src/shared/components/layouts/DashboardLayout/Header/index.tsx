import { Suspense, useEffect, useState } from 'react'

import { Box, Logo } from '../../../elements'
import { MenuMobile, MenuMobileButton } from '../MenuMobile'
import { MenuDesktop } from '../MenuDesktop'

import './styles.css'

export const DashboardLayoutHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  return (
    <Box>
      <Box className="DashboardLayoutHeader fixed flex top-0 left-0 w-full h-20 lg:h-28 z-20 backdrop-blur-md">
        <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between border-b-1 border-custom-gray-100">
          <Logo color="black" />

          <MenuDesktop />
          <MenuMobileButton
            isOpen={isOpenMobileMenu}
            onChange={setIsOpenMobileMenu}
          />
        </Box>

        <MenuMobile isOpen={isOpenMobileMenu} onChange={setIsOpenMobileMenu} />
      </Box>
      <Box className="fixed bg-white w-full h-20 lg:h-28 top-0 left-0 -z-10" />
    </Box>
  )
}
