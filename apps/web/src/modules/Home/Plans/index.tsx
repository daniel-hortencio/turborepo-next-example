import { Box, Icon, Text, Wrapper } from "shared/components/elements";

export const WebsitePlans = () => {
  return (
    <Wrapper className="test bg-custom-gray-100">
      <Box className="mx-auto mb-16 max-w-3xl">
        <Text className="mb-5 text-center text-28px font-extrabold text-custom-gray-500">
          Escolha o plano ideal
        </Text>
        <Text className="text-center text-custom-gray-400">
          Diversas opções disponíveis, uma solução completa para escalar o seu
          negócio sem causar impacto no financeiro da empresa.{" "}
        </Text>
      </Box>

      <Text className="mx-auto max-w-2xl text-center text-xl font-bold text-custom-gray-500">
        Independente do plano desejado, nossos clientes tem acesso a todos os
        benefícios da plataforma:
      </Text>

      <Box>
        <Text>Consulta automática de processos judiciais</Text>
        <Text>
          Via painel web ou API, diretamente conectado aos sistemas do PJE,
          EPROC, ESAJ e PROJUDI.
        </Text>
      </Box>

      <Box className="flex fill-primary">
        <Icon name="Checks" />
        <Box className="ml-4">
          <Text>
            Monitoramento inteligente de processos por e-mail e webhook
          </Text>
          <Text>
            Notificamos em tempo real no momento em que o processo registrar um
            andamento (atualização).
          </Text>
        </Box>
      </Box>

      <Box className="flex fill-primary">
        <Icon name="Checks" />
        <Box className="ml-4">
          <Text>Visualização dos autos do processo</Text>
          <Text>
            Veja de forma completa os anexos relacionados ao processo.
          </Text>
        </Box>
      </Box>

      <Box className="flex fill-primary">
        <Icon name="Checks" />
        <Box className="ml-4">
          <Text>Quantidade de instâncias ilimitadas</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
            facilisis lacus. Duis vitae libero posuere, commodo turpis at,
            facilisis ipsum.
          </Text>
        </Box>
      </Box>

      <Box className="flex fill-primary">
        <Icon name="Checks" />
        <Box className="ml-4">
          <Text>Processos em segredo de justiça</Text>
          <Text>Opção de acessar utilizando um token de advogado.</Text>
        </Box>
      </Box>
    </Wrapper>
  );
};
