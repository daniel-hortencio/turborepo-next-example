'use client'

import PageProcessDetails from '../../../../modules/Processes/pages/ProcessDetails'
import { FC } from 'react'

interface Props {
  params: {
    id: string
  }
}

const ProcessDetails: FC<Props> = ({ params }) => {
  return <PageProcessDetails isMonitoring={params.id === '1'} />
}
export default ProcessDetails
