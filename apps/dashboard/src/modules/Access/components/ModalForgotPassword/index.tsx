import {
  Box,
  InputGroup,
  InputText,
  Text
} from '../../../../shared/components/elements'

export const ModalForgotPassword = () => {
  return (
    <Box>
      <Box className="bg-custom-gray-100 p-8 rounded-lg mb-8">
        <InputGroup label="E-mail">
          <InputText placeholder="Insira seu e-mail de cadastro" />
        </InputGroup>
      </Box>

      <Text className="text-center">
        Enviaremos um e-mail com instruções de como redefinir sua senha.
      </Text>
    </Box>
  )
}
