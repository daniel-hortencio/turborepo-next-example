import Image from 'next/image'

import { InputSearch } from 'shared/components/elements'

import { Box, LinkExternal, Text, Wrapper } from 'ui'

import S from './styles.module.css'

export const WebsiteHomeBanner = () => {
  return (
    <Box id="inicio" className="relative h-screen w-full">
      <Box className="absolute -z-10 hidden h-full w-full md:block">
        <Image
          src={`/images/pictures/background-home-banner.png`}
          alt="Background text"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'left center',
            zIndex: -10
          }}
        />
      </Box>
      <Box className="absolute -z-10 h-full w-full md:hidden">
        <Image
          src={`/images/pictures/background-home-banner.png`}
          alt="Background text"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            zIndex: -10
          }}
        />
      </Box>
      <Wrapper className="relative flex h-full w-full items-center pt-20 lg:pt-28">
        <Box className="md:w-1/2 md:max-w-xl md:pr-9">
          <Text className="mb-7 text-lg font-extralight text-white sm:text-4xl md:mb-10 lg:text-[64px]">
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              2
            </span>
            .
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              8
            </span>
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              7
            </span>
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              5
            </span>
            .
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              4
            </span>
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              3
            </span>
            <span className="mr-1 rounded-lg bg-[#0C0C0C] px-2 py-3 sm:px-3">
              1
            </span>
          </Text>
          <Text
            className={`mb-6 text-4xl font-extrabold text-white md:mb-7 md:text-5xl ${S.BannerHomeTitle}`}
          >
            + 2 milhões de processos monitorados somente neste mês.
          </Text>
          <Text className="mb-10 text-white opacity-60 md:mb-12">
            API para consulta e monitoramento de Processos Judiciais ao PJ-E,
            E-PROC, E-SAJ, PROJUDI, E-STF, E-STJ, Creta, Apolo e Tucujuris.
          </Text>

          <InputSearch onSubmit={() => {}} />

          <Text className="mt-[30px] hidden text-white md:block">
            <span className="opacity-60">Mais pesquisados:</span>{' '}
            <a
              href="#"
              className="text-primary transition-all hover:text-primary-dark"
            >
              Testar API
            </a>{' '}
            ·{' '}
            <LinkExternal
              href="https://api.judit.io/docs"
              className="text-primary transition-all hover:text-primary-dark"
            >
              Documentação
            </LinkExternal>{' '}
            ·{' '}
            <a
              href="#"
              className="text-primary transition-all hover:text-primary-dark"
            >
              Planos disponíveis
            </a>
          </Text>
        </Box>

        <Box className="absolute right-0 top-20 hidden h-[calc(100%-5rem)] w-2/5 max-w-2xl md:block lg:top-28 lg:h-[calc(100%-7rem)]">
          <Image
            src={`/images/pictures/tablet.svg`}
            alt="Background text"
            fill
          />
        </Box>
      </Wrapper>
    </Box>
  )
}
