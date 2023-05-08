import { Box } from 'shared/components/elements'

export const WebsitePlans = () => {
  return (
    <Box>
      <h1>Escolha o plano ideal</h1>
      <p>
        Diversas opções disponíveis, uma solução completa para escalar o seu
        negócio sem causar impacto no financeiro da empresa.{' '}
      </p>

      <h4>
        Independente do plano desejado, nossos clientes tem acesso a todos os
        benefícios da plataforma:
      </h4>

      <Box>
        <h5>Consulta automática de processos judiciais</h5>
        <p>
          Via painel web ou API, diretamente conectado aos sistemas do PJE,
          EPROC, ESAJ e PROJUDI.
        </p>
      </Box>

      <Box>
        <h5>Monitoramento inteligente de processos por e-mail e webhook</h5>
        <p>
          Notificamos em tempo real no momento em que o processo registrar um
          andamento (atualização).
        </p>
      </Box>

      <Box>
        <h5>Visualização dos autos do processo</h5>
        <p>Veja de forma completa os anexos relacionados ao processo.</p>
      </Box>

      <Box>
        <h5>Quantidade de instâncias ilimitadas</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          facilisis lacus. Duis vitae libero posuere, commodo turpis at,
          facilisis ipsum.
        </p>
      </Box>

      <Box>
        <h5>Processos em segredo de justiça</h5>
        <p>Opção de acessar utilizando um token de advogado.</p>
      </Box>
    </Box>
  )
}
