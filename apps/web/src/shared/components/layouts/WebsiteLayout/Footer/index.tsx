import { Box, Logo, Text, Wrapper } from "shared/components/elements";

export const WebsiteFooter = () => {
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
            <a className="mb-1 block text-white" href="#">
              · Como funciona
            </a>
            <a className="mb-1 block text-white" href="#">
              · Planos
            </a>
            <a className="mb-1 block text-white" href="#">
              · Carreira
            </a>
          </Box>
          <Box className="mr-12 lg:mr-24">
            <Text className="mb-3 uppercase text-white opacity-25">
              UTILIDADES
            </Text>
            <a className="mb-1 block text-white" href="#">
              · Termos de Uso
            </a>
            <a className="mb-1 block text-white" href="#">
              · Uso de Cookies
            </a>
            <a className="mb-1 block text-white" href="#">
              · Políticas de Privacidade
            </a>
          </Box>
          <Box>
            <Text className="mb-3 uppercase text-white opacity-25">
              ATENDIMENTO
            </Text>
            <a className="mb-1 block text-white" href="#">
              · suporte@judit.io
            </a>
            <a className="mb-1 block text-white" href="#">
              · WhatsApp
            </a>
          </Box>
        </Box>
      </Box>

      <Text className="mb-6 text-center text-sm text-white opacity-50">
        Av. Churchill, 109, Sala 1202, Rio de Janeiro - CEP 20020-500
      </Text>
      <Text className="mb-3 text-center text-sm text-white opacity-25">
        A MEUCASO PONTOCOM LTDA é uma empresa de tecnologia registrada no CNPJ:
        48.340.874/0001-14 que disponibiliza para advogados o acesso e o
        entendimento fácil ao andamento do processo judicial.
      </Text>
      <Text className="text-center text-sm text-white opacity-25">
        2023 © Judit.io
      </Text>
    </Wrapper>
  );
};
