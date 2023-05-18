import { Accordion } from 'shared/components/elements'

import { Box, Text, Wrapper } from 'ui'

export const WebsiteCommonQuestions = () => {
  return (
    <Wrapper className="relative pb-16 pt-11 md:pb-20 md:pt-16">
      <div
        id="perguntas-frequentes"
        className="absolute -z-10 -translate-y-36"
      />
      <Box className="mb-7 flex flex-col items-center md:mb-3">
        <Text className="mb-0 text-2xl font-bold text-custom-gray-500 md:mb-5 md:text-[28px]">
          Perguntas Frequentes
        </Text>
      </Box>

      <Box className="mb-5">
        <Accordion
          title="Vocês tem acesso a todos os tribunais?"
          description="Sim, todos os Tribunais do Brasil."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="Posso enviar consultas em massa via API?"
          description="Sim, e responderemos todas em poucos segundos."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="Posso consultar processos aqui mesmo pelo site de vocês?"
          description="Sim, temos uma solução completa para você consultar e monitorar seus processos."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="E como eu contrato o serviço de vocês? Posso testar antes?"
          description="Sim, você pode testar antes, basta fazer o seu cadastro aqui mesmo no site e você receberá 5 créditos para testar gratuitamente."
        />
      </Box>
      <Accordion
        title="Sou Advogado, eu preciso ter uma empresa para contratar vocês?"
        description="Não, você como Advogado, pessoa física pode contratar o serviço sem a necessidade de uma empresa pra isso."
      />
    </Wrapper>
  )
}
