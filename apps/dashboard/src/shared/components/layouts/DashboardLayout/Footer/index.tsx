import { useCallback } from 'react'
import { useModal } from '../../../../contexts/Modal'
import {
  Box,
  PrivacyPolicy,
  TermsOfUse,
  Text,
  Wrapper
} from '../../../elements'

export const DashboardLayoutFooter = () => {
  const { createModal } = useModal()

  const createModalPolicy = useCallback(
    () =>
      createModal({
        header: {
          title: 'POLÍTICA DE PRIVACIDADE DA JUDIT',
          subtitle: 'Esta versão foi atualizada em Abril de 2023.'
        },
        body: <PrivacyPolicy />
      }),
    []
  )

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

  return (
    <Wrapper as="footer" className="mt-auto">
      <Box className="flex flex-col-reverse md:flex-row items-center justify-between">
        <Text className="text-sm text-custom-gray-300">
          2023 © Judit.io
          <span className="hidden md:inline">
            {' '}
            · Todos os direitos reservados
          </span>
        </Text>
        <Box className="flex items-center">
          <button
            className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline"
            onClick={createModalTerms}
          >
            Termos de uso
          </button>
          <span className="mx-4 text-custom-gray-400">·</span>
          <button
            className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline"
            onClick={createModalPolicy}
          >
            Política de privacidade
          </button>
          <span className="mx-4 text-custom-gray-400">·</span>
          <button className="text-sm text-custom-gray-400 text-center mb-2 md:mb-0 hover:underline">
            Cookies
          </button>
        </Box>
      </Box>
    </Wrapper>
  )
}
