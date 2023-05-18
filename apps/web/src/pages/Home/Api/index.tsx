import Image from 'next/image'
import { Icon } from 'shared/components/elements'

import { Button, Box, Text, Wrapper, LinkExternal } from 'ui'

import S from './styles.module.css'

export const WebsiteApi = () => {
  return (
    <Wrapper className="relative">
      <div id="api" className="absolute -z-10 -translate-y-36" />
      <Box
        className={`${S.IntegratingToApi} mb-4 rounded-5xl bg-primary-light px-8 py-5 lg:px-12 lg:py-9`}
      >
        <Box className="hidden w-72 grid-cols-3 gap-7 lg:grid ">
          {[
            { src: 'swift', width: 28, height: 28 },
            { src: 'js', width: 28, height: 28 },
            { src: 'python', width: 28, height: 28 },
            { src: 'java', width: 28, height: 28 },
            { src: 'php', width: 28, height: 28 },
            { src: 'ruby', width: 28, height: 28 },
            { src: 'react', width: 28, height: 28 },
            { src: 'c', width: 28, height: 28 }
          ].map(logo => (
            <Box
              key={logo.src}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
            >
              <Image
                src={`/images/logos/${logo.src}.svg`}
                alt={logo.src}
                width={logo.width}
                height={logo.height}
                style={{
                  objectFit: 'contain'
                }}
              />
            </Box>
          ))}
          <Box className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <Text className="font-bold">+ 7</Text>
          </Box>
        </Box>

        <Box className="flex-auto">
          <Text className="mb-5 text-center text-2xl font-extrabold text-custom-gray-500 md:text-left md:text-28px">
            Integrando a API ao seu sistema
          </Text>
          <Text className="mb-5 text-custom-gray-400">
            Além da documentação técnica, também disponibilizamos a sessão de
            perguntas frequentes, para entender como a API da Judit pode ajudar
            a sua empresa a automatizar a consulta de dados judiciais.
          </Text>
          <Text className="mb-8 text-custom-gray-400">
            Aproveite, temos suporte para as principais linguagens do mercado.
          </Text>

          <Box className="items-center md:flex">
            <Box className="mb-6 md:mb-0 md:mr-8 md:w-44">
              <LinkExternal href="https://api.judit.io/docs">
                <Button text="Ver documentação" size="large" color="primary" />
              </LinkExternal>
            </Box>
            <a
              href="/#perguntas-frequentes"
              className="mx-auto flex w-48 whitespace-nowrap fill-primary font-semibold text-primary hover:fill-primary-dark hover:text-primary-dark md:mx-0 md:w-auto"
            >
              <span className="mr-2">Perguntas frequentes </span>

              <Icon name="ArrowRight" />
            </a>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  )
}
