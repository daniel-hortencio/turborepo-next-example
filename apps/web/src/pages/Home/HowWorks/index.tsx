import { Icon } from 'shared/components/elements'

import { Box, Text, Wrapper } from 'ui'

export const WebsiteHowWorks = () => {
  return (
    <Wrapper className="relative pt-11 md:pt-16">
      <div id="como-funciona" className="absolute -z-10 -translate-y-36" />

      <h2 className="mx-auto mb-8 max-w-3xl text-center text-2xl font-extrabold text-custom-gray-500 md:mb-14 md:text-28px">
        Somos a API mais rápida do mercado para consultar informações de
        Processos Judiciais através dos tribunais
      </h2>

      <Box className="mb-9 grid gap-8 md:mb-14 md:gap-12 lg:grid-cols-3">
        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pl-2 pt-2">
            <Box className="absolute -left-0.5 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="FolderSimpleLock" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text
              as="h2"
              className="mb-2 text-lg font-bold text-custom-gray-500 md:text-xl"
            >
              Busca completa
            </Text>
            <Text className="text-custom-gray-400">
              Realize consultas e monitoramentos de Processos Judiciais ao PJ-E,
              E-PROC, E-SAJ, PROJUDI, E-STF, E-STJ, Creta, Apolo e Tucujuris.
            </Text>
          </Box>
        </Box>

        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pl-2 pt-2">
            <Box className="absolute -left-0.5 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="Cpu" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text
              as="h2"
              className="mb-2 text-lg font-bold text-custom-gray-500 md:text-xl"
            >
              Processos sob sigilo
            </Text>
            <Text className="text-custom-gray-400">
              Com as credenciais do Advogado, você tem acesso aos processos sob
              sigilo. Resultados em tela em apenas 5 segundos.
            </Text>
          </Box>
        </Box>

        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pl-2 pt-2">
            <Box className="absolute -left-0.5 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="Database" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text
              as="h2"
              className="mb-2 text-lg font-bold text-custom-gray-500 md:text-xl"
            >
              Arquivos físicos
            </Text>
            <Text className="text-custom-gray-400">
              Trazemos todos os arquivos físicos do processo, inclusive a
              Inicial para que você possa entender todos os passos do processo
              como um todo.
            </Text>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  )
}
