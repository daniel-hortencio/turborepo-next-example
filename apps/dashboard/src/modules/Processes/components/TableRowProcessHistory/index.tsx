import Link from 'next/link'
import { Box, Card, Icon, Text } from '../../../../shared/components/elements'

import './styles.css'
import { TableHeader } from '../../../../shared/components/elements/Table/TableHeader'

interface Props {
  id: string
  updated_at: string
  number: string
  processo: string
  tribunal: string
  tipo: string
}

export const TableHeaderProcessHistory = () => {
  return (
    <TableHeader
      titles={['Atualizado em', 'Número', 'Processo', 'Tribunal', 'Tipo']}
      className="TableHeaderProcessHistory"
    />
  )
}

export const TableRowProcessHistory = ({
  id,
  updated_at,
  number,
  processo,
  tribunal,
  tipo
}: Props) => {
  return (
    <Link href={`/dashboard/processos/${id}`}>
      <Card className="TableRowProcessHistory rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary transition-all">
        <Box className="hidden TableRowProcessHistoryData md:grid p-4 md:p-0">
          <Box className="flex items-center">
            <Text>{updated_at}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{number}</Text>
          </Box>
          <Box className="flex items-center">
            <Text className="font-bold">{processo}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{tribunal}</Text>
          </Box>
          <Box className="flex items-center">
            <Text>{tipo}</Text>
          </Box>
        </Box>

        <Box as="ul" className="md:hidden p-4">
          <Text className="font-bold mb-2 text-lg">{processo}</Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-400 mr-2 rounded-full" />
            Atualizado em {updated_at}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-400 mr-2 rounded-full" />
            Nº {number}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-400 mr-2 rounded-full" />
            Tribunal {tribunal}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-400 mr-2 rounded-full" />
            Consulta {tipo}
          </Text>
        </Box>

        <Box className="bg-primary-light fill-primary rounded-md flex items-center justify-center h-full transition-all TableRow__IconFolder">
          <Icon name="FolderSimple" size={24} />
        </Box>
      </Card>
    </Link>
  )
}
