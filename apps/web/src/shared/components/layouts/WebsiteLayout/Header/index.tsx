import { Suspense, useEffect, useState } from "react";

import { Box, Logo } from "../../../elements";
import { MenuMobile, MenuMobileButton } from "../MenuMobile";
import { MenuDesktop } from "../MenuDesktop";

import "./styles.css";

export const WebsiteLayoutHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <Box>
      <Box className="WebsiteLayoutHeader fixed left-0 top-0 z-20 flex h-20 w-full backdrop-blur-md lg:h-28">
        <Box className="mx-auto flex w-full max-w-6xl items-center justify-between border-b-1 border-custom-gray-100 p-5">
          <Logo color="black" />

          <MenuDesktop />
          <MenuMobileButton
            isOpen={isOpenMobileMenu}
            onChange={setIsOpenMobileMenu}
          />
        </Box>

        <MenuMobile isOpen={isOpenMobileMenu} onChange={setIsOpenMobileMenu} />
      </Box>
      <Box className="fixed left-0 top-0 -z-10 h-20 w-full bg-custom-gray-600 lg:h-28" />
    </Box>
  );
};
