import { Box, Button } from 'shared/components/elements'

export const WebsiteApi = () => {
  return (
    <Box>
      <h2>Integrando a Judit ao seu sistema</h2>
      <p>
        Além da documentação técnica, também disponibilizamos a sessão de
        perguntas frequentes, para entender como a API da Judit pode ajudar a
        sua empresa a automatizar a consulta e monitoração de dados judiciais.
      </p>
      <p>Temos suporte para as principais linguagens do mercado.</p>

      <Box>
        <Button size="large" color="primary" text="Ver documentação" />
        <a>Perguntas frequentes</a>
      </Box>

      <Box>
        <h3>Benefícios em utilizar a Judit</h3>

        <p>
          Somos a API mais rápida e eficaz do mercado onde trazemos não só o
          andamento do processo, mas também os arquivos físicos que o
          acompanham, inclusive aqueles sob sigilo.
        </p>
        <a>Criar minha conta</a>
      </Box>

      <Box>
        <p>Resultados em apenas 5 segundos</p>
        <p>Acesso a todos os Tribunais</p>
        <p>Acesso a Processos sob sigilo</p>
        <p>Acesso a todos os arquivos físicos</p>
      </Box>
    </Box>
  )
}
