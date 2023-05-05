'use client'

import { useForm, useFormContext } from 'react-hook-form'
import {
  Box,
  Button,
  CheckboxGroup,
  Icon,
  RadioGroup,
  Select,
  Text
} from '../../../../shared/components/elements'

import S from './styles.module.css'
import { FormEvent, useEffect, useState } from 'react'

/* interface Props {
  filters: any
  orderBy: any
  setOrderBy: Dispatch<SetStateAction<number>>
  handleCheck: (param: any) => void
} */

const init_filters = {
  civil: false,
  penal: false,
  tributário: false,
  trabalhista: false,
  contratual: false,
  ambiental: false,
  empresarial: false,
  consumidor: false,
  order_by: ''
}

export const ModalSearchFilters = () => {
  const [filters, setFilters] = useState(init_filters)

  const resetFilters = () => {
    setFilters({ ...init_filters })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log({ filters })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        className={`${S.ModalSearchFilters__Content} overflow-y-auto mt-6 pl-5`}
      >
        <Text className={`font-bold text-2xl mb-4`}>Filtros</Text>

        <Box className="mb-7 md:mb-8">
          <Text className="font-bold md:text-lg mb-2">Ordenação</Text>

          <Box className="mb-3">
            <RadioGroup
              value="consultas_mais_recentes"
              checked={filters.order_by === 'consultas_mais_recentes'}
              onChange={value => setFilters({ ...filters, order_by: value })}
              label="Consultas mais recentes"
            />
          </Box>
          <Box className="mb-3">
            <RadioGroup
              value="consultas_mais_antigas"
              checked={filters.order_by === 'consultas_mais_antigas'}
              onChange={value => setFilters({ ...filters, order_by: value })}
              label="Consultas mais antigas"
            />
          </Box>
          <Box className="mb-3">
            <RadioGroup
              value="movimentacoes_mais_recentes"
              checked={filters.order_by === 'movimentacoes_mais_recentes'}
              onChange={value => setFilters({ ...filters, order_by: value })}
              label="Movimentações mais recentes"
            />
          </Box>
          <Box className="mb-3">
            <RadioGroup
              value="movimentacoes_mais_antigas"
              checked={filters.order_by === 'movimentacoes_mais_antigas'}
              onChange={value => setFilters({ ...filters, order_by: value })}
              label="Movimentações mais antigas"
            />
          </Box>
        </Box>

        <Box className="mb-7 md:mb-8 pr-5">
          <Text className="font-bold md:text-lg mb-2 ">Por tribunal</Text>
          <Select
            className="shadow-md"
            options={[
              { name: 'Todos' },
              { name: 'Tribunal 1' },
              { name: 'Tribunal 2' },
              { name: 'Tribunal 3' },
              { name: 'Tribunal 4' }
            ].sort((a, b) => a.name.localeCompare(b.name))}
            defaultValue="Todos"
          />
        </Box>

        <Box className="mb-7 md:mb-8">
          <Text className="font-bold md:text-lg mb-2">Por competência</Text>

          <Box className="mb-3">
            <CheckboxGroup
              label="Civil"
              checked={filters.civil}
              onChange={e => setFilters({ ...filters, civil: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Penal"
              checked={filters.penal}
              onChange={e => setFilters({ ...filters, penal: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Tributário"
              checked={filters.tributário}
              onChange={e => setFilters({ ...filters, tributário: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Trabalhista"
              checked={filters.trabalhista}
              onChange={e => setFilters({ ...filters, trabalhista: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Contratual"
              checked={filters.contratual}
              onChange={e => setFilters({ ...filters, contratual: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Ambiental"
              checked={filters.ambiental}
              onChange={e => setFilters({ ...filters, ambiental: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Empresarial"
              checked={filters.empresarial}
              onChange={e => setFilters({ ...filters, empresarial: e })}
            />
          </Box>
          <Box className="mb-3">
            <CheckboxGroup
              label="Consumidor"
              checked={filters.consumidor}
              onChange={e => setFilters({ ...filters, consumidor: e })}
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex justify-end p-8 border-t-1 border-custom-gray-200">
        <Box className="hidden md:block md:w-28">
          <Button
            text="Limpar"
            size="large"
            onClick={resetFilters}
            height="low"
          />
        </Box>
        <Box className="md:hidden">
          <Button
            text={<Icon name="TrashSimple" />}
            onClick={resetFilters}
            height="low"
          />
        </Box>

        <Box className="ml-5 w-full md:w-40">
          <Button
            text="Filtrar processos"
            type="submit"
            size="large"
            color="primary"
            height="low"
          />
        </Box>
      </Box>
    </form>
  )
}
