import { Icon } from 'shared/components/elements'

import { Box, Text, Wrapper } from 'ui'

import S from './styles.module.css'

export const WebsiteBenefits = () => {
  return (
    <Wrapper>
      {' '}
      <Box className={`${S.Benefits} gap-10`}>
        <Box>
          <Text className="mb-4 text-center text-2xl font-extrabold text-custom-gray-500 md:mb-5 md:text-left md:text-28px">
            Benefícios em utilizar a API da Judit
          </Text>
          <Text className="mb-10 text-custom-gray-400 md:mb-5">
            Somos a API mais rápida e eficaz do mercado onde trazemos não só o
            andamento do processo, mas também os arquivos físicos que o
            acompanham, inclusive aqueles sob sigilo.
          </Text>
          <a
            href="#"
            className="hidden whitespace-nowrap fill-primary font-semibold text-primary hover:fill-primary-dark hover:text-primary-dark md:flex"
          >
            <span className="mr-2">Criar minha conta </span>

            <Icon name="ArrowRight" />
          </a>
        </Box>

        <Box>
          <Box className="mb-4 flex fill-primary">
            <Box>
              <Box className="translate-y-0.5">
                <Icon name="ArrowCircleRight" />
              </Box>
            </Box>
            <Text className="ml-4 w-full border-b-1 pb-4 text-lg font-bold text-custom-gray-500 md:pb-6 md:text-xl">
              Resultados em apenas 5 segundos
            </Text>
          </Box>
          <Box className="mb-4 flex fill-primary">
            <Box>
              <Box className="translate-y-0.5">
                <Icon name="ArrowCircleRight" />
              </Box>
            </Box>
            <Text className="ml-4 w-full border-b-1 pb-4 text-lg font-bold text-custom-gray-500 md:pb-6 md:text-xl">
              Acesso a todos os Tribunais
            </Text>
          </Box>
          <Box className="mb-4 flex fill-primary">
            <Box>
              <Box className="translate-y-0.5">
                <Icon name="ArrowCircleRight" />
              </Box>
            </Box>
            <Text className="ml-4 w-full border-b-1 pb-4 text-lg font-bold text-custom-gray-500 md:pb-6 md:text-xl">
              Acesso a Processos sob sigilo
            </Text>
          </Box>
          <Box className="mb-4 flex fill-primary">
            <Box>
              <Box className="translate-y-0.5">
                <Icon name="ArrowCircleRight" />
              </Box>
            </Box>
            <Text className="ml-4 w-full border-b-1 border-b-transparent pb-4 text-lg font-bold text-custom-gray-500 md:pb-6 md:text-xl">
              Acesso a todos os arquivos físicos
            </Text>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  )
}
