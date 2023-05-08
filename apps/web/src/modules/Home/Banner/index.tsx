import { Box, InputSearch } from 'shared/components/elements'

export const WebsiteHomeBanner = () => {
  return (
    <Box>
      <h1>2 Milhões de processos monitorados somente neste mês.</h1>
      <h2>
        API para consulta e monitoramento de Processos Judiciais ao PJ-E,
        E-PROC, E-SAJ, PROJUDI, E-STF, E-STJ, Creta, Apolo e Tucujuris.
      </h2>

      <InputSearch onSubmit={() => {}} />

      <p>Mais pesquisados: Testar API · Documentação · Planos disponíveis</p>
    </Box>
  )
}
