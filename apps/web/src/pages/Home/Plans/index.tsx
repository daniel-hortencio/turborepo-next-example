import { Icon } from 'shared/components/elements'
import { Text, Wrapper, Box } from 'ui'

import S from './styles.module.css'

export const WebsitePlans = () => {
  return (
    <Wrapper className="relative bg-custom-gray-100 pb-7 pt-12 md:pb-12 md:pt-16">
      <div id="planos" className="absolute -z-10 -translate-y-36" />

      <Box className="mx-auto max-w-3xl pb-11 md:pb-16">
        <Text className="mb-4 text-center text-28px font-extrabold text-custom-gray-500 md:mb-5">
          Escolha o plano ideal
        </Text>
        <Text className="text-center text-custom-gray-400">
          Diversas opções disponíveis, uma solução completa para escalar o seu
          negócio sem causar impacto no financeiro da empresa.{' '}
        </Text>
      </Box>

      <Box className={`hidden md:grid ${S.TablePlansRow} mb-3`}>
        {/*         <Text className="flex justify-end text-right text-sm uppercase text-custom-gray-300">
          LIMITE DE CONSULTAS
        </Text> */}
        <Text className="pl-6 text-sm uppercase text-custom-gray-300 ">
          CONSUMO MÍNIMO
        </Text>
        {/*         <Text className="flex justify-center text-center text-sm uppercase text-custom-gray-300">
          DESCONTO
        </Text> */}
        <Text className="flex text-sm uppercase text-custom-gray-300">
          POR CONSULTA
        </Text>
        {/*         <Text className="text-sm uppercase text-custom-gray-300">
          MÍNIMO MENSAL
        </Text> */}
      </Box>

      <Box className="mb-14">
        {[
          {
            limit: '0 - 1.000',
            consumption: '100',
            discount: '0',
            by_consultation: '0,59',
            monthly_payment: '59,90'
          },
          {
            limit: '1.000 - 10.000',
            consumption: '1.000',
            discount: '15',
            by_consultation: '0,50',
            monthly_payment: '501,50'
          },
          {
            limit: '10.000 - 50.000',
            consumption: '30.000',
            discount: '35',
            by_consultation: '0,38',
            monthly_payment: '11.505,00'
          },
          {
            limit: '50.000 - 100.000',
            consumption: '50.000',
            discount: 'F0',
            by_consultation: '0,30',
            monthly_payment: '14.750,00'
          },
          {
            limit: '100.000 - 150.000',
            consumption: '100.000',
            discount: '60',
            by_consultation: '0,24',
            monthly_payment: '23.600,00'
          },
          {
            limit: '150.000 - 500.000',
            consumption: '150.000',
            discount: '70',
            by_consultation: '0,18',
            monthly_payment: '26.550,00'
          },
          {
            limit: '+ 500.000',
            consumption: '500.000',
            discount: '80',
            by_consultation: '0,12',
            monthly_payment: '59.000,00'
          }
        ].map(item => (
          <Box key={item.limit}>
            <Box
              className={`mb-5 hidden rounded-lg bg-white p-1 shadow-md md:grid ${S.TablePlansRow}`}
            >
              {/*               <Text className="flex items-center pl-6 text-sm text-custom-gray-400 lg:text-base">
                {item.limit}
              </Text> */}
              <Text className="flex items-center pl-6 text-sm text-custom-gray-400 lg:text-base">
                {item.consumption} consultas
              </Text>
              {/*               <Text className="flex items-center justify-center text-sm text-custom-gray-400 lg:text-base">
                {item.discount} %
              </Text> */}
              <Text className="flex items-center text-sm text-custom-gray-400 lg:text-base">
                + R${' '}
                <span className="font-semibold">{item.by_consultation}</span>
              </Text>
              {/*               <Text className="flex items-center text-sm text-custom-gray-500 lg:text-base">
                R$
                <strong className="ml-1 block font-bold">
                  {item.monthly_payment}
                </strong>
              </Text> */}
              <button className="rounded-md bg-primary-light transition-all hover:bg-primary ">
                <Box className="flex h-[52px] w-full items-center justify-center fill-primary text-primary transition-all hover:fill-white hover:text-white">
                  <Icon name="ShoppingCartSimple" />{' '}
                  <Text className="ml-3">Contratar</Text>
                </Box>
              </button>
            </Box>

            <Box className="mb-5 rounded-lg bg-white px-5 py-6 shadow-md md:hidden">
              <Text className="mb-3 text-lg text-custom-gray-500">
                R${' '}
                <strong className="font-bold">
                  {item.monthly_payment} mínimo mensal
                </strong>
              </Text>
              {/*               <Text className="text-sm text-custom-gray-400">
                · Limite de 1.000 consultas
              </Text> */}
              <Text className="text-sm text-custom-gray-400">
                · Consumo mínimo de 100 consultas
              </Text>
              <Text className="mb-6 text-sm text-custom-gray-400">
                · + R$ 0,59 por consulta
              </Text>
              <button className="w-full rounded-md bg-primary-light transition-all hover:bg-primary">
                <Box className="flex h-[52px] w-full items-center justify-center fill-primary text-primary transition-all hover:fill-white hover:text-white">
                  <Icon name="ShoppingCartSimple" />{' '}
                  <Text className="ml-3">Contratar</Text>
                </Box>
              </button>
            </Box>
          </Box>
        ))}
      </Box>

      <Text className="mx-auto mb-8 w-3/4 text-center text-2xl font-extrabold text-custom-gray-500 md:mb-11 md:max-w-2xl md:text-xl md:font-bold">
        Independente do plano desejado, nossos clientes tem acesso a todos os
        benefícios da plataforma:
      </Text>

      {[
        {
          title: 'Consulta automática de processos judiciais',
          description:
            'Via painel web ou API, diretamente conectado aos sistemas do PJE, EPROC, ESAJ e PROJUDI.'
        },
        {
          title: 'Monitoramento inteligente de processos por e-mail e webhook',
          description:
            'Notificamos em tempo real no momento em que o processo registrar um andamento (atualização).'
        },
        {
          title: 'Visualização dos autos do processo',
          description:
            'Veja de forma completa os anexos relacionados ao processo.'
        },
        {
          title: 'Quantidade de instâncias ilimitadas',
          description:
            'Não importa em quantas instâncias o processo se encontra, nós trazemos todas as informações.'
        },
        {
          title: 'Processos em segredo de justiça',
          description: 'Opção de acessar utilizando um token de advogado.'
        }
      ].map((item, index) => (
        <Box key={item.title} className="mb-6 flex fill-primary">
          <Box className="translate-y-1">
            <Icon name="Checks" size={20} />
          </Box>
          <Box
            className={`ml-4 border-custom-gray-200 pb-6 ${
              index < 4 && 'border-b-[1px]'
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
  )
}
