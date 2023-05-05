import { Box, Icon, Text } from '../../../../shared/components/elements'

export const ModalSendEmailRecoverConfirmation = () => {
  return (
    <Box className="flex flex-col items-center mt-2 mb-3">
      <Box className="bg-primary-light fill-primary mb-12 w-36 h-36 rounded-full flex items-center justify-center">
        <Icon name="EnvelopeOpen" size={68} />
      </Box>

      <Text className="font-extrabold text-custom-gray-500 text-center mb-4 text-28px">
        Confira sua caixa de entrada
      </Text>

      <Text className="text-custom-gray-400 text-center mb-5">
        Caso o seu e-mail exista em nossa base, você receberá uma mensagem com
        instruções de como redefinir sua senha. Se não encontrar o e-mail na sua
        caixa de entrada, verifique a lixeira ou a pasta de spam.
      </Text>

      <Text className="text-custom-gray-400 text-center">
        Se você não tem mais acesso ao e-mail{' '}
        <strong className="font-semibold">fulado@gmail.com</strong>,{' '}
        <a href="#" className="underline text-primary hover:text-primary-dark">
          entre em contato
        </a>{' '}
        conosco.
      </Text>
    </Box>
  )
}
