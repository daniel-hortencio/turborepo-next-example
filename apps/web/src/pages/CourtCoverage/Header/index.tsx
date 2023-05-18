import Image from 'next/image'
import { Box, Card, Text, Wrapper } from 'ui'

export const CourtCoverageHeader = () => {
  return (
    <Wrapper className="test bg- bg-[#181818] pt-20 lg:pt-28">
      <Box className="md:flex">
        <Box className="mb:mb-0 mb-8 mr-8 md:mr-36">
          <Text className="mb-5 text-5xl text-white">
            Cobertura dos Tribunais
          </Text>
          <Text className="text-lg text-white opacity-60 ">
            Veja em tempo real o status da cobertura de cada Tribunal em todos
            os estados brasileiros.
          </Text>
        </Box>
        {/*

        // SERÁ HABILITADO FUTURAMENTE

       <Card className="h-36 w-full max-w-[440px] rounded-lg px-7 py-8 text-custom-gray-500">
          <Box className="mb-5 flex justify-between">
            <Text>
              <strong className="text-lg font-bold">API</strong> · Uptime de 96%
            </Text>
            <Box className="flex items-center rounded-5xl border-1 border-custom-gray-200 px-3 py-1">
              <Box className="mr-2 h-1 w-1 rounded-full bg-warning" />
              <Text className="text-sm">Instabilidades</Text>
            </Box>
          </Box>

          <Box>
            <Box className="relative mb-1 h-5 w-full">
              <Image
                src="/images/pictures/chart.svg"
                fill
                alt="Chart"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box className="relative h-5 w-full">
              <Image src="/images/pictures/calendar.svg" fill alt="Calendar" />
            </Box>
          </Box>
        </Card> */}
      </Box>
    </Wrapper>
  )
}
