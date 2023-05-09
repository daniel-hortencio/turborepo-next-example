import { Box, Button, Icon, Text, Wrapper } from "shared/components/elements";

import S from "./styles.module.css";

export const WebsitePlans = () => {
  return (
    <Wrapper className="test bg-custom-gray-100 pb-12">
      <Box className="mx-auto mb-16 max-w-3xl">
        <Text className="mb-5 text-center text-28px font-extrabold text-custom-gray-500">
          Escolha o plano ideal
        </Text>
        <Text className="text-center text-custom-gray-400">
          Diversas opções disponíveis, uma solução completa para escalar o seu
          negócio sem causar impacto no financeiro da empresa.{" "}
        </Text>
      </Box>

      <Box className={`${S.TablePlansRow} mb-3`}>
        <Text className="flex justify-end text-sm uppercase text-custom-gray-300">
          LIMITE DE CONSULTAS
        </Text>
        <Text className="text-sm uppercase text-custom-gray-300">
          CONSUMO MÍNIMO
        </Text>
        <Text className="flex justify-center text-sm uppercase text-custom-gray-300">
          DESCONTO
        </Text>
        <Text className="flex justify-center text-sm uppercase text-custom-gray-300">
          POR CONSULTA
        </Text>
        <Text className="text-sm uppercase text-custom-gray-300">
          MÍNIMO MENSAL
        </Text>
      </Box>

      <Box className="mb-14">
        {[
          {
            limit: "0 - 1.000",
            consumption: "100",
            discount: "0",
            by_consultation: "0,59",
            monthly_payment: "59,90",
          },
          {
            limit: "1.000 - 10.000",
            consumption: "1.000",
            discount: "15",
            by_consultation: "0,50",
            monthly_payment: "501,50",
          },
          {
            limit: "10.000 - 50.000",
            consumption: "30.000",
            discount: "35",
            by_consultation: "0,38",
            monthly_payment: "11.505,00",
          },
          {
            limit: "50.000 - 100.000",
            consumption: "50.000",
            discount: "F0",
            by_consultation: "0,30",
            monthly_payment: "14.750,00",
          },
          {
            limit: "100.000 - 150.000",
            consumption: "100.000",
            discount: "60",
            by_consultation: "0,24",
            monthly_payment: "23.600,00",
          },
          {
            limit: "150.000 - 500.000",
            consumption: "150.000",
            discount: "70",
            by_consultation: "0,18",
            monthly_payment: "26.550,00",
          },
          {
            limit: "+ 500.000",
            consumption: "500.000",
            discount: "80",
            by_consultation: "0,12",
            monthly_payment: "59.000,00",
          },
        ].map((item) => (
          <Box
            key={item.limit}
            className={`mb-5 rounded-lg bg-white p-1 shadow-md ${S.TablePlansRow}`}
          >
            <Text className="flex items-center justify-end font-bold text-custom-gray-400">
              {item.limit}
            </Text>
            <Text className="flex items-center text-custom-gray-400">
              {item.consumption} consultas
            </Text>
            <Text className="flex items-center justify-center text-custom-gray-400">
              {item.discount} %
            </Text>
            <Text className="flex items-center justify-center text-custom-gray-400">
              + R$ {item.by_consultation}
            </Text>
            <Text className="flex items-center text-custom-gray-500">
              R$
              <strong className="ml-1 block font-bold">
                {item.monthly_payment}
              </strong>
            </Text>
            <button className="rounded-md bg-primary-light transition-all hover:bg-primary ">
              <Box className="flex h-[52px] w-full items-center justify-center fill-primary text-primary transition-all hover:fill-white hover:text-white">
                <Icon name="ShoppingCartSimple" />{" "}
                <Text className="ml-3">Contratar</Text>
              </Box>
            </button>
          </Box>
        ))}
      </Box>

      <Text className="mx-auto mb-11 max-w-2xl text-center text-xl font-bold text-custom-gray-500">
        Independente do plano desejado, nossos clientes tem acesso a todos os
        benefícios da plataforma:
      </Text>

      {[
        {
          title: "Consulta automática de processos judiciais",
          description:
            "Via painel web ou API, diretamente conectado aos sistemas do PJE, EPROC, ESAJ e PROJUDI.",
        },
        {
          title: "Monitoramento inteligente de processos por e-mail e webhook",
          description:
            "Notificamos em tempo real no momento em que o processo registrar um andamento (atualização).",
        },
        {
          title: "Visualização dos autos do processo",
          description:
            "Veja de forma completa os anexos relacionados ao processo.",
        },
        {
          title: "Quantidade de instâncias ilimitadas",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in facilisis lacus. Duis vitae libero posuere, commodo turpis at, facilisis ipsum.",
        },
        {
          title: "Processos em segredo de justiça",
          description: "Opção de acessar utilizando um token de advogado.",
        },
      ].map((item, index) => (
        <Box key={item.title} className="mb-6 flex fill-primary">
          <Icon name="Checks" />
          <Box
            className={`ml-4 border-custom-gray-200 pb-6 ${
              index < 4 && "border-b-[1px]"
            }`}
          >
            <Text className="mb-1 text-lg font-bold text-custom-gray-500">
              {item.title}
            </Text>
            <Text className="text-custom-gray-400">{item.description}</Text>
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};
