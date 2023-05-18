'use client'

import { Box } from 'ui'
import { WebsiteFooter } from './Footer'
import { WebsiteLayoutHeader } from './Header'

export default function WebsiteLayout({ children }) {
  return (
    <Box className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-20 lg:pt-28">
      <Box className="fixed left-0 top-0 -z-20 h-full w-full" />
      <WebsiteLayoutHeader />
      {children}
      <WebsiteFooter />
    </Box>
  )
}
