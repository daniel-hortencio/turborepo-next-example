"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Box, Button } from "../../../elements";

import "./styles.css";
import { website_routes } from "shared/constants/routes";

export const MenuDesktop = () => {
  const path = usePathname();

  return (
    <Box className="hidden lg:flex lg:items-center">
      <Box className="mr-16">
        <Box as="nav" className="flex items-center">
          {website_routes(path).map((item, index) => (
            <Box
              key={item.href}
              className={`flex h-28 border-spacing-2 items-center border-b-2 ${
                item.isActive() ? "border-primary" : "border-transparent"
              } ${index > 0 && "ml-10"}`}
            >
              <Link href={item.href} className="text-white">
                {item.label}
              </Link>
            </Box>
          ))}

          <Box className="ml-14 w-24">
            <Button text="Entrar" size="large" color="transparent" />
          </Box>
          <Box className="ml-5 w-32">
            <Button text="Criar conta" size="large" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
