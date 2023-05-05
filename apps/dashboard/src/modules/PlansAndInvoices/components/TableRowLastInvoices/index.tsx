import { Box, Card, Icon, Text } from '../../../../shared/components/elements'

import './styles.css'
import { TableHeader } from '../../../../shared/components/elements/Table/TableHeader'

interface Props {
  id: string
  vencimento: string
  periodo: string
  plano: string
  consumo: string
  forma_de_pagamento: string
  valor: string
  status: 'success' | 'pending' | 'error'
}

export const TableHeaderLastInvoices = () => {
  return (
    <TableHeader
      titles={[
        'Vencimento',
        'Periodo',
        'Plano',
        'Consumo',
        'Forma de Pagamento',
        'Valor'
      ]}
      className="TableHeaderLastInvoices"
    />
  )
}

export const TableRowLastInvoices = ({
  id,
  vencimento,
  periodo,
  plano,
  consumo,
  forma_de_pagamento,
  valor,
  status
}: Props) => {
  const BoxIcon = ({ className, children }) => {
    return (
      <Box
        className={`rounded-md flex items-center justify-center h-full transition-all TableRow__IconFolder ${className}`}
      >
        {children}
      </Box>
    )
  }

  const status_icons = {
    success: (
      <BoxIcon className="bg-primary-light fill-primary">
        <Icon name="FileText" size={24} />
      </BoxIcon>
    ),
    pending: (
      <BoxIcon className="bg-warning-light fill-warning">
        <Icon name="Receipt" size={24} />
      </BoxIcon>
    ),
    error: (
      <BoxIcon className="bg-danger-light fill-danger">
        <Icon name="ReceiptX" size={24} />
      </BoxIcon>
    )
  }

  return (
    <Card className="TableRowLastInvoices rounded-lg overflow-hidden p-1 md:pl-4 md:h-14 hover:ring-2 ring-primary transition-all text-custom-gray-400">
      <Box className="hidden TableRowLastInvoicesData md:grid p-4 md:p-0">
        <Box className="flex items-center ">
          <Text>{vencimento}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{periodo}</Text>
        </Box>
        <Box className="flex items-center">
          <Text className="font-bold">{plano}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>{consumo}</Text>
        </Box>
        <Box className="flex items-center">
          <Text>
            {status === 'pending' && 'Previsto: '}
            {status === 'error' && 'Recusado: '}
            {forma_de_pagamento}
          </Text>
        </Box>
        <Box className="flex items-center">
          <Text>{valor}</Text>
        </Box>
      </Box>

      <Box as="ul" className="md:hidden p-4">
        <Text className="flex items-center text-custom-gray-500 font-bold text-lg mb-2">
          {valor}
        </Text>

        <Box className="text-sm">
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-500 mr-2 rounded-full" />
            Plano "{plano}"
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-500 mr-2 rounded-full" />
            Vencimento em {vencimento}
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-500 mr-2 rounded-full" />
            Periodo "{periodo}"
          </Text>
          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-500 mr-2 rounded-full" />
            {consumo} realizadas
          </Text>

          <Text className="flex items-center">
            <Box className="w-1 h-1 bg-custom-gray-500 mr-2 rounded-full" />
            Pgto. {status === 'pending' && 'previsto '}
            {status === 'error' && 'recusado '}
            {forma_de_pagamento}
          </Text>
        </Box>
      </Box>

      {status_icons[status]}
    </Card>
  )
}
