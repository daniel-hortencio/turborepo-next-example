import { FormEvent } from 'react'
import { Box, InputSearch, Text } from '../../../../shared/components/elements'

interface Props {
  onSubmit: (e: string) => void
  searched: string
}

export const SearchEmpty = ({ onSubmit, searched }: Props) => {
  return (
    <Box className="flex flex-col items-center text-center">
      <Text className="mb-7 font-extrabold text-4xl md:text-5xl text-custom-gray-500">
        Nenhum processo encontrado
      </Text>
      <Text className="mb-12 max-w-3xl text-custom-gray-400">
        Não existem processos referente ao termo{' '}
        <strong className="font-semibold tracking-wide">”{searched}”</strong>.
        Refaça sua busca verificando termo digitado ou busque por CPF/CNPJ das
        partes.
      </Text>

      <Box className="w-full max-w-lg mb-5">
        <InputSearch
          placeholder="Pesquisar por número do processo"
          onSubmit={onSubmit}
        />
      </Box>

      <Box className="flex">
        <button className="text-primary hover:text-primary-dark">Todos</button>
        <Text className="mx-4 text-custom-gray-400">·</Text>
        <button className="text-primary hover:text-primary-dark">
          Recentes
        </button>
        <Text className="mx-4 text-custom-gray-400">·</Text>
        <button className="text-primary hover:text-primary-dark">
          Últimas movimentações
        </button>
      </Box>
    </Box>
  )
}
