import { useEffect } from 'react'
import {
  Box,
  Icon,
  Text,
  InputSearch,
  Wrapper
} from '../../../shared/components/elements'
import { DashboardLayoutHeader } from '../../../shared/components/layouts/DashboardLayout/Header'
import { useToast } from '../../../shared/contexts/Toast/UseToast'
import { dashboardServices } from '../services'

export default function SearchProcess() {
  useEffect(() => {
    dashboardServices
      .dashboard()
      .then(res_dashboard => console.log({ res_dashboard }))
  }, [])

  return (
    <Box className="flex-auto flex items-center justify-center">
      <DashboardLayoutHeader />

      <Wrapper
        as="section"
        className="flex flex-col justify-center items-center pt-8 md:pt-16 pb-20"
      >
        <Box className="text-center mb-8 md:mb-12">
          <Text
            as="h1"
            className="font-extrabold text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-8 max-w-lg mx-auto"
          >
            Consulta processual
          </Text>

          <Text className="max-w-3xl mx-auto text-custom-gray-400">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Duis vehicula lacinia turpis et maximus.
          </Text>
        </Box>

        <Box className="mb-12 md:mb-20 max-w-lg mx-auto">
          <InputSearch
            placeholder="Pesquisar por número do processo"
            onSubmit={e => {}}
          />
        </Box>

        <Box className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <Box className="flex items-start">
            <Box className="pt-2 w-10 fill-primary relative">
              <Box className="absolute w-9 h-9 bg-primary-light -top-1 -left-3 rounded-full" />
              <Box className="relative z-10">
                <Icon name="FolderSimpleLock" size={36} />
              </Box>
            </Box>

            <Box className="w-full pl-4 sm:pl-6">
              <Text as="h2" className="font-bold text-lg md:text-xl mb-2 ">
                Fusce faucibus sodales tellusitt amet
              </Text>
              <Text className="text-custom-gray-400">
                Mauris sed luctus justo, rhoncus mollis libero. Quisque sed
                gravida lectus iaculis sapien in arcu.
              </Text>
            </Box>
          </Box>

          <Box className="flex items-start">
            <Box className="pt-2 w-10 fill-primary relative">
              <Box className="absolute w-9 h-9 bg-primary-light -top-1 -left-3 rounded-full" />
              <Box className="relative z-10">
                <Icon name="Cpu" size={36} />
              </Box>
            </Box>

            <Box className="w-full pl-4 sm:pl-6">
              <Text as="h2" className="font-bold text-lg md:text-xl mb-2">
                Vestibulum maximus laoreet sapien, sed convallis
              </Text>
              <Text className="text-custom-gray-400">
                Etiam nec bibendum nisl. Duis lorem felis, porttitor eu
                condimentum eu, vestibulum et lectus.
              </Text>
            </Box>
          </Box>

          <Box className="flex items-start">
            <Box className="pt-2 w-10 fill-primary relative">
              <Box className="absolute w-9 h-9 bg-primary-light -top-1 -left-3 rounded-full" />
              <Box className="relative z-10">
                <Icon name="Database" size={36} />
              </Box>
            </Box>

            <Box className="w-full pl-4 sm:pl-6">
              <Text as="h2" className="font-bold text-lg md:text-xl mb-2">
                Duis eros orci, blandit nec dolor ac, fringilla
              </Text>
              <Text className="text-custom-gray-400">
                Maecenas molestie, dolor id eleifend volutpat, elit odio dictum
                lectus, ut laoreet diam ipsum at mauris.
              </Text>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}
