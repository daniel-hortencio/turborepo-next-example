'use client'

import {
  Box,
  Button,
  Card,
  Icon,
  Text
} from '../../../../shared/components/elements'

interface Props {
  isMonitoring: boolean
  activeMonitoring?: () => void
}

export const TimeLine = ({ isMonitoring, activeMonitoring }: Props) => {
  return (
    <Box>
      <Box className="mb-7">
        {!isMonitoring && (
          <>
            <Box className="flex items-center mb-5">
              <Box className="w-1 h-1 mr-5 bg-custom-gray-300 rounded-full" />
              <Text className="text-custom-gray-300 uppercase text-sm">
                01/04/2023 · HOJE
              </Text>
            </Box>
            <Box className="border-l-2 pl-5 border-dotted border-gray-300">
              <Card className="rounded-lg p-4 md:p-6 mb-5">
                <Text as="h3" className="text-lg font-bold mb-2">
                  Podem existir novas movimentações
                </Text>
                <Text className="mb-6 text-custom-gray-400">
                  Atualize ou volte a monitorar este processo para verificar se
                  há novas informações em todos os tribunais e Diários Oficiais.
                </Text>

                <Box className="md:flex">
                  <Box className="w-52 max-w-full mr-5 mb-2 md:mb-0">
                    <Button
                      className="text-sm h-30px md:text-base md:h-12"
                      text={
                        <Box className="flex items-center">
                          <Icon name="ArrowsClockwise" />
                          <span className="ml-3">Atualizar processo</span>
                        </Box>
                      }
                      size="large"
                    />
                  </Box>
                  <Box className="w-60 max-w-full">
                    <Button
                      className="text-sm h-30px md:text-base md:h-12"
                      onClick={activeMonitoring}
                      text={
                        <Box className="flex items-center">
                          <Icon name="Broadcast" />{' '}
                          <span className="ml-3">Ativar Monitoramento</span>
                        </Box>
                      }
                      size="large"
                    />
                  </Box>
                </Box>
              </Card>
            </Box>
          </>
        )}

        <Box className="flex items-center mb-5">
          <Box className="w-1 h-1 mr-5 bg-custom-gray-300 rounded-full" />
          <Text className="text-custom-gray-300 uppercase text-sm tracking-2px">
            24/02/2023 · há 13 dias
          </Text>
        </Box>
        <Box className="border-l-2 pl-5 border-dotted border-gray-300">
          <Card className="p-4 md:p-6 mb-5">
            <Text as="h3" className="text-lg font-bold mb-2">
              Andamento
            </Text>
            <Text className="text-custom-gray-400">
              Cumpra-se o despacho no apenso, sem prejuízo junte o exequente
              cópia da certidão junto ao Registro de Imóveis do bem que pretende
              ver penhorado.
            </Text>
          </Card>
          <Card className="rounded-lg p-6">
            <Text as="h3" className="text-lg font-bold mb-2">
              Publicação
            </Text>
            <Text>Comarca da Capital</Text>
            <Text className="font-bold">Varas Cíveis</Text>
            <Text>6ª Vara Cível</Text>
            <Text className="font-bold">
              Juiz Titular: Luciana de Oliveira Leal Halbritter
            </Text>
            <Text className="font-bold">
              Chefe de Serventia: Marcia Teixeira Amaral
            </Text>
            <Text>Expediente do Dia: 26/01/2023</Text>
            <Text>Execução de Título Extrajudicial - Cpc</Text>
            <Text className="text-custom-gray-400">
              <Text as="strong" className="font-bold">
                Proc.
              </Text>{' '}
              <span className="font-bold hover:text-primary-dark underline text-primary">
                0101014-15.2006.8.19.000
              </span>{' '}
              <Text as="strong" className="font-bold">
                (2XXX.001.1XX005-5)
              </Text>{' '}
              -{' '}
              <span className="text-primary hover:text-primary-dark underline">
                CAIXA DE PREVIDENCIA DOS FUNCIONARIOS DO BANCO DO BRASIL PREVI{' '}
              </span>{' '}
              (Adv(s). Dr(a).{' '}
              <span className="text-primary hover:text-primary-dark underline">
                ALEXANDRE GHAZI
              </span>{' '}
              (OAB/RJ-070771) X{' '}
              <span className="text-primary hover:text-primary-dark underline">
                SERGIO MAURICIO CARNEIRO
              </span>{' '}
              (Adv(s). Dr(a). ERICA CARLA SILVA DE SOUSA ANDRADE
              (OAB/RJ-116306), Dr(a).{' '}
              <span className="text-primary hover:text-primary-dark underline">
                RODRIGO LESSA PEREIRA
              </span>{' '}
              (OAB/RJ-131983) Despacho: Cumpra-se o despacho no apenso, sem
              prejuízo junte o exequente cópia da certidão junto ao Registro de
              Imóveis do bem que pretende ver penhorado.
            </Text>
          </Card>
        </Box>
      </Box>

      <Box className="mb-7">
        <Box className="flex items-center mb-5">
          <Box className="w-1 h-1 mr-5 bg-custom-gray-300 rounded-full" />
          <Text className="text-custom-gray-400 uppercase text-sm tracking-2px">
            18/01/2023 · mês passado
          </Text>
        </Box>
        <Box className="border-l-2 pl-5 border-dotted border-gray-300">
          <Card className="rounded-lg p-4 md:p-6 mb-5">
            <Text as="h3" className="text-lg font-bold mb-2">
              Andamento
            </Text>
            <Text className="mb-5 text-custom-gray-400">
              Certifico, que trasladei cópias conforme determinado no despacho
              de fls. 944 dos autos em apenso. 0059693-63/2007, bem como
              desapensei o mencionado processo para remete-los ao arquivo.
            </Text>

            <Box className="w-52 max-w-full">
              <Button
                size="large"
                className="text-sm h-30px md:text-base md:h-12"
                text={
                  <>
                    <Box className="flex items-center font-semibold">
                      <Box className="mr-2">
                        <Icon name="FilePdf" />
                      </Box>
                      Despacho.pdf
                    </Box>
                  </>
                }
                color="secondary"
              />
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
