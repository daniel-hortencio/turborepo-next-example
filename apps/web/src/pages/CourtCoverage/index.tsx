import { Box, Wrapper } from 'ui'
import { CourtsTable } from './CourtsTable'

import { NavigationCourts } from './NavigationCourts'
import { apiFetch } from 'shared/services'

export const WebsiteCourtCoveragePage = async () => {
  const court_coverage = await apiFetch.getCourtCoverage()

  return (
    <Box>
      <NavigationCourts />
      <Wrapper className="pt-16 ">
        <CourtsTable data={court_coverage} />
      </Wrapper>
    </Box>
  )
}
