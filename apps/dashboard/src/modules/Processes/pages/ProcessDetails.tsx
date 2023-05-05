'use client'

import { useCallback, useState } from 'react'

import { Box, Text, Wrapper, Button, Icon } from 'shared/components/elements'
import { DashboardLayoutHeader } from 'shared/components/layouts/DashboardLayout/Header'

import { TimeLine } from '../components/TimeLine'
import { ModalProcessDocument } from '../components/ModalProcessDocument'
import { MenuProcessDocumentOptions } from '../components/MenuProcessDocumentOptions'
import { ModalCancelMonitoring } from '../components/ModalCancelMonitoring'
import { MenuPartiesInvolved } from '../components/MenuPartiesInvolved'
import { WhiteSection } from 'shared/components/layouts/DashboardLayout/WhiteSection'
import { useModal } from 'shared/contexts/Modal'

interface Props {
  isMonitoring: boolean
}

export default function ProcessDetails({ isMonitoring }: Props) {
  const [isOpenMenuPartiesInvolved, setIsOpenMenuPartiesInvolved] =
    useState(false)

  const { createModal, closeModal } = useModal()

  const createModalDocuments = useCallback(() => {
    createModal({
      header: {
        title: 'Documentos do processo',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sagittis pharetra. Proin pellentesque urna arcu, ut feugiat tellus porttitor vel.'
      },
      body: <ModalProcessDocument />
    })
  }, [])

  const createModalCancelMonitoringConfirmation = useCallback(() => {
    createModal({
      header: {
        title: 'Tem certeza que deseja continuar?',
        subtitle:
          'Você está prestes a cancelar o monitoramento automático deste Processo Judicial, antes de continuar avalie o histórico do período monitorado:',
        align: 'center'
      },
      body: <ModalCancelMonitoring />,
      showButtonClose: false,
      footer: (
        <Box className="grid gap-3 md:gap-5 md:grid-cols-2 md:w-3/4 mx-auto">
          <Button
            text="Manter monitoramento"
            size="large"
            onClick={closeModal}
          />
          <Button text="Cancelar monitoramento" size="large" color="danger" />
        </Box>
      )
    })
  }, [])

  const createModalActiveMonitoringConfirmation = useCallback(() => {
    createModal({
      header: {
        title: 'Tem certeza que deseja continuar?',
        subtitle:
          'Você está prestes a ativar o monitoramento automático deste Processo Judicial, essa ação irá consumir 1 consulta a cada 24h para manter as movimentações processuais sincronizadas com todos os tribunais e Diários Oficiais.',
        align: 'center'
      },
      body: <ModalCancelMonitoring />,
      showButtonClose: false,
      footer: (
        <Box className="grid gap-3 md:gap-5 md:grid-cols-2 md:w-3/5 mx-auto">
          <Button text="Manter desativado" size="large" onClick={closeModal} />
          <Button text="Ativar monitoramento" size="large" color="primary" />
        </Box>
      )
    })
  }, [])

  return (
    <Box className="flex-auto">
      <DashboardLayoutHeader />

      <WhiteSection>
        <Box className="mb-9 lg:flex">
          <Box className="flex-auto mb-5 lg:mb-0">
            <Box className="md:flex md:items-center mb-5 md:flex-wrap">
              {isMonitoring ? (
                <Text className="uppercase p-1 rounded bg-custom-gray-600 text-white text-xs font-medium mr-2 whitespace-nowrap w-min mb-3 md:mb-0">
                  Em monitoramento
                </Text>
              ) : (
                <Text className="uppercase p-1 rounded bg-custom-gray-300 text-white text-xs font-medium mr-2 whitespace-nowrap w-min mb-3 md:mb-0">
                  MONITORAMENTO DESATIVADO
                </Text>
              )}
              <Text className="text-custom-gray-400 mt-0.5 md:mt-0">
                Processo nº 0136156-24.2023.8.09.0001
              </Text>
            </Box>

            <Text as="h1" className="text-3xl font-bold">
              CESAR SANTOS x VOLVO BRASIL LTDA
            </Text>
          </Box>

          <Box className="hidden lg:flex">
            <Box className="w-48">
              <Button
                text="Documentos anexos"
                color="primary"
                size="large"
                onClick={createModalDocuments}
              />
            </Box>
            <Box className="ml-5">
              <Button text={<Icon name="ArrowsClockwise" size={24} />} />
            </Box>
            <Box className="ml-5">
              <MenuProcessDocumentOptions
                isMonitoring={isMonitoring}
                cancelMonitoring={createModalCancelMonitoringConfirmation}
                activeMonitoring={createModalActiveMonitoringConfirmation}
                button={
                  <Button text={<Icon name="DotsThreeOutline" size={26} />} />
                }
              />
            </Box>
          </Box>
        </Box>

        <Box className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-center mb-8 xl:mb-0">
          <Text className="flex items-center md:mr-8 text-custom-gray-400">
            <Box className="mr-2 fill-custom-gray-300">
              <Icon name="Bank" size={24} />
            </Box>{' '}
            PJE · Rio de Janeiro, RJ
          </Text>
          <Text className="flex items-center md:mr-8 text-custom-gray-400">
            <Box className="mr-2 fill-custom-gray-300">
              <Icon name="Scales" size={24} />
            </Box>{' '}
            [CÍVEL] EXECUÇÃO FISCAL
          </Text>
          <Text className="flex items-center md:mr-8 text-custom-gray-400">
            <Box className="mr-2  fill-custom-gray-300">
              <Icon name="CurrencyCircleDollar" size={24} />
            </Box>{' '}
            Valor da causa: R$ 5.978,19
          </Text>

          <MenuPartiesInvolved
            onChange={setIsOpenMenuPartiesInvolved}
            button={
              <Text className="flex items-center md:mr-8 text-left text-custom-gray-400">
                <Box className="opacity-60 mr-2 fill-custom-gray-300">
                  <Icon name="UsersThree" size={24} />
                </Box>{' '}
                5 partes envolvidas
                <Box
                  className={`ml-2 fill-custom-gray-300 transition-all ${
                    isOpenMenuPartiesInvolved && 'rotate-180'
                  }`}
                >
                  <Icon name="CaretDown" />
                </Box>
              </Text>
            }
          />
        </Box>

        <Box className="flex lg:hidden">
          <Box className="w-48 mr-5">
            <Button
              text="Documentos anexos"
              color="primary"
              size="large"
              onClick={closeModal}
            />
          </Box>
          <Box className="mr-5">
            <Button text={<Icon name="ArrowsClockwise" size={20} />} />
          </Box>
          <Box>
            <MenuProcessDocumentOptions
              isMonitoring={isMonitoring}
              cancelMonitoring={closeModal}
              button={
                <Button text={<Icon name="DotsThreeOutline" size={26} />} />
              }
            />
          </Box>
        </Box>
      </WhiteSection>

      <Wrapper>
        <Box className="mb-8 mt-8 ">
          <Text as="h2" className="font-extrabold text-2xl mb-4">
            Movimentação processual
          </Text>
          {isMonitoring ? (
            <Text className="text-custom-gray-400">
              Processo monitorado e sincronizado automaticamente a cada 24h com
              todos os tribunais e Diários Oficiais.
            </Text>
          ) : (
            <Text className="text-custom-gray-400">
              Este processo teve seu{' '}
              <Text as="strong" className="font-semibold text-custom-gray-400">
                monitoramento desativado em 18/02/23 às 18h45,
              </Text>{' '}
              por esse motivo as movimentações não estão sincronizadas com todos
              os tribunais e Diários Oficiais.
            </Text>
          )}
        </Box>

        <TimeLine isMonitoring={isMonitoring} activeMonitoring={closeModal} />
      </Wrapper>
    </Box>
  )
}
