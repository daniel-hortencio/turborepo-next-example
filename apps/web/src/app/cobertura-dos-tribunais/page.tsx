import { WebsiteCourtCoveragePage } from 'pages/CourtCoverage'

export default async function WebsiteCoverage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <WebsiteCourtCoveragePage />
    </>
  )
}
