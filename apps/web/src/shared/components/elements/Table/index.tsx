import { Box } from '..'

import { TableHeader } from './TableHeader'

type TableColumn = {
  title: string
}

interface TableColumnsDefinition {
  data: any
  HeaderComponent: () => JSX.Element
  RowComponent: (data: any) => JSX.Element
}

export const Table = ({
  data,
  HeaderComponent,
  RowComponent
}: TableColumnsDefinition) => {
  return (
    <Box className="w-full ">
      <HeaderComponent />

      {data?.map(row_data => (
        <RowComponent key={row_data.id} {...row_data} />
      ))}
    </Box>
  )
}
