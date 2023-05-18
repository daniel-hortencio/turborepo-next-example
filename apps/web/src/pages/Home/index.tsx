'use client'

import { Box } from 'ui'
import { WebsiteHomeBanner } from './Banner'
import { WebsiteHowWorks } from './HowWorks'
import { WebsiteApi } from './Api'
import { WebsiteBenefits } from './Benefits'
import { WebsitePlans } from './Plans'
import { WebsiteCommonQuestions } from './CommonQuestions'
/* import { WebsiteClients } from './Clients' */

export const WebsiteHomePage = () => {
  return (
    <Box>
      <WebsiteHomeBanner />
      <WebsiteHowWorks />
      <WebsiteApi />
      <WebsiteBenefits />
      <WebsitePlans />
      <WebsiteCommonQuestions />
    </Box>
  )
}
