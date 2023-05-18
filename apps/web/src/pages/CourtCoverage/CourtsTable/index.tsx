'use client'

import { Text, Box, Wrapper, Card, Table } from 'ui'
import { Element } from 'react-scroll'

import S from './styles.module.css'
import { EnumStatesName } from 'shared/types'
import { getCourtStatus } from './getStatus'
import {
  IGetCourtsCoverageData,
  IGetCourtsCoverageDataByCourts
} from 'shared/services/types/CourtsCoverage'
/* import { apiFetch } from 'shared/services' */

interface Props {
  data: IGetCourtsCoverageDataByCourts
}

export const CourtsTable = ({ data }: Props) => {
  // revalidar a cada 5 minutos

  const Header = () => (
    <Box
      className={`hidden md:grid ${S.CourtsTable__Header} mb-4 px-7 text-sm text-custom-gray-300`}
    >
      <p>ESTADO</p>
      <p>SISTEMA(S)</p>
      <p>INSTÂNCIA</p>
      <p>STATUS</p>
      <p>IMPORTANTE</p>
    </Box>
  )

  const Row = source => (
    <Card
      className={`${S.CourtsTable} mb-5 rounded-lg px-7 py-4 text-custom-gray-400 md:grid`}
    >
      <div className="flex justify-between">
        <p className="mb-5 md:mb-0">
          <strong className="font-bold">{source.state}</strong> ·{' '}
          {EnumStatesName[source.state]}
        </p>
        {source.crawlers.length === 0 && (
          <Box className="w-40 md:hidden"> {getCourtStatus()}</Box>
        )}
      </div>
      {source.crawlers.length === 0 && (
        <Box className={`${S.CourtsTable__Crawler} hidden md:grid`}>
          <Box />
          <Box className={`${S.CourtsTable__InstanceStatusImportant} mb-4 `}>
            <Box />
            {getCourtStatus()}
          </Box>
        </Box>
      )}
      <Box>
        {source.crawlers.map(crawler => (
          <Box key={crawler.name} className={`${S.CourtsTable__Crawler} grid`}>
            <p className="w- uppercase">{crawler.name}</p>
            <Box>
              {crawler.data.map(item => (
                <Box
                  key={item.instance}
                  className={`${S.CourtsTable__InstanceStatusImportant} mb-4 `}
                >
                  <p className="mr-5">
                    {item.instance ? `${item.instance}ª` : '-'}
                  </p>
                  {getCourtStatus(item.auth)}
                  <p className="hidden md:block">-</p>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  )

  return (
    <Box>
      {data.map(court => (
        <Element
          key={court.label}
          name={court.label}
          className="relative mb-20"
        >
          <div id={court.label} className="absolute -z-10 -translate-y-96" />

          <h1 className="mb-11 text-center text-[28px] font-extrabold text-custom-gray-500">
            {court.name}
          </h1>
          <Table
            data={court.data}
            HeaderComponent={Header}
            RowComponent={Row}
          />
        </Element>
      ))}
    </Box>
  )
}
