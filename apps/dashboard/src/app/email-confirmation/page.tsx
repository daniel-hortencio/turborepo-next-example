'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Box, Icon, Text } from 'shared/components/elements'
import { useModal } from 'shared/contexts/Modal'
import { useCookies } from 'shared/utils/cookies'

export default function EmailConfirmation() {
  const router = useRouter()
  const params = useSearchParams()
  const { createModal } = useModal()

  const id = params.get('id')

  const { access_token, refresh_token } = useCookies().getUserAuth()

  useEffect(() => {
    createModal({
      body: (
        <Box className="flex flex-col items-center mt-2 mb-3">
          <Box className="bg-primary-light fill-primary mb-12 w-36 h-36 rounded-full flex items-center justify-center">
            <Icon name="Checks" size={68} />
          </Box>

          <Text className="font-extrabold text-custom-gray-500 text-center mb-4 text-28px">
            E-mail confirmado com sucesso!
          </Text>

          <Text className="text-custom-gray-400 text-center mb-5">
            Confirmamos o seu cadastro no sistema, agora você pode utilizar
            nossa plataforma de consulta e monitoramento de Processos Judiciais
            sem limitações.
          </Text>
        </Box>
      )
    })

    if (access_token || refresh_token) {
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  }, [])

  return (
    <div className="text-white">
      <h1>Confirmação de Email</h1>
      <p>Código de confirmação: {id}</p>
    </div>
  )
}
