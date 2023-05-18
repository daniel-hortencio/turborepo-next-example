'use client'

import { useCallback } from 'react'

import { Logo, PrivacyPolicy, TermsOfUse } from 'shared/components/elements'
import { Box, LinkExternal, Text, Wrapper } from 'ui'
import { useModal } from 'shared/contexts/Modal'
import { WhatsappLink } from '../WhatsappLink'
import { Environments } from 'shared/constants/environments'

export const WebsiteFooter = () => {
  const { createModal } = useModal()

  const createModalPolicy = useCallback(() => {
    createModal({
      header: {
        title: 'POLÍTICA DE PRIVACIDADE DA JUDIT',
        subtitle: 'Esta versão foi atualizada em Abril de 2023.'
      },
      body: <PrivacyPolicy />
    })
  }, [])

  const createModalTerms = useCallback(
    () =>
      createModal({
        header: {
          title: 'TERMOS DE USO DA JUDIT',
          subtitle: 'Esta versão foi atualizada em Abril de 2023.'
        },
        body: <TermsOfUse />
      }),
    []
  )

  const Link = ({ children, href }) => (
    <a className="mb-1 block text-white" href={href}>
      {children}
    </a>
  )

  return (
    <Wrapper className="bg-[#353535] py-8 md:py-14">
      <Box className="mb-5 flex justify-center md:mb-20 md:justify-between">
        <Box className="">
          <Logo color="gray" />
        </Box>
        <Box className="hidden md:flex">
          <Box className="mr-12 lg:mr-24">
            <Text className="mb-3 uppercase text-white opacity-25">
              Empresa
            </Text>
            <Link href="/#como-funciona">· Como funciona</Link>
            <Link href="/#planos">· Planos</Link>
            <Link href="#">· Carreira</Link>
          </Box>
          <Box className="mr-12 lg:mr-24">
            <Text className="mb-3 uppercase text-white opacity-25">
              UTILIDADES
            </Text>
            <button
              className="mb-1 block text-white"
              onClick={createModalTerms}
            >
              · Termos de Uso
            </button>
            <button
              className="mb-1 block text-white"
              onClick={createModalPolicy}
            >
              · Políticas de Privacidade
            </button>
          </Box>
          <Box>
            <Text className="mb-3 uppercase text-white opacity-25">
              ATENDIMENTO
            </Text>
            <LinkExternal
              className="mb-1 block text-white"
              href="mailto:suporte@judit.io"
            >
              · suporte@judit.io
            </LinkExternal>
            <LinkExternal
              className="mb-1 block text-white"
              href={Environments.LINK_TO_WHATSAPP}
              target="_blank"
              rel="no"
            >
              · WhatsApp
            </LinkExternal>
          </Box>
        </Box>
      </Box>

      <Text className="mb-6 text-center text-sm text-white opacity-50">
        Av. Churchill, 109, Sala 1202, Rio de Janeiro - CEP 20020-500
      </Text>
      <Text className="mb-3 text-center text-sm text-white opacity-25">
        A JUDIT TECNOLOGIA DA INFORMAÇÃO LTDA é uma empresa de tecnologia
        registrada no CNPJ: 50.535.760/0001-71 que disponibiliza para advogados
        o acesso e o entendimento fácil ao andamento do processo judicial.
      </Text>
      <Text className="text-center text-sm text-white opacity-25">
        2023 © Judit.io
      </Text>

      <WhatsappLink />
    </Wrapper>
  )
}
