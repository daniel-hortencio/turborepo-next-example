'use client'

import { Box, Button, Text } from '../../../../shared/components/elements'

import './styles.css'

export const ModalCancelMonitoring = () => {
  return (
    <Box>
      <Box className="bg-custom-gray-100 p-5 rounded-lg mb-6 md:mb-9">
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-custom-gray-300 md:text-right">
            PROCESSO Nº
          </Text>
          <Text className="text-custom-gray-400">
            0136156-24.2023.8.09.0001
          </Text>
        </Box>
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-custom-gray-300 md:text-right">
            MONITORANDO DESDE
          </Text>
          <Text className="text-custom-gray-400">15/12/2022</Text>
        </Box>
        <Box className="mb-2 md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-custom-gray-300 md:text-right">
            RESULTADOS DO MONITORAMENTO
          </Text>
          <Text className="text-custom-gray-400">
            174 movimentações e 25 documentos
          </Text>
        </Box>
        <Box className="md:grid md:gap-5 ModalCancelMonitoring__Row">
          <Text className="text-custom-gray-300 md:text-right">
            TOTAL DE CONSUMO
          </Text>
          <Text className="text-custom-gray-400">
            590 consultas · Sendo 48 manuais
          </Text>
        </Box>
      </Box>

      <Text className="text-custom-gray-400 text-center">
        Após o cancelamento, as movimentações processuais não serão mais
        sincronizadas com todos os tribunais e Diários Oficiais.
      </Text>
    </Box>
  )
}
