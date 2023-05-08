'use client'

import { Box } from 'shared/components/elements'
import { WebsiteLayoutHeader } from './Header'

export default function WebsiteLayout({ children }) {
  return (
    <Box>
      <WebsiteLayoutHeader />

      {children}
    </Box>
  )
}
