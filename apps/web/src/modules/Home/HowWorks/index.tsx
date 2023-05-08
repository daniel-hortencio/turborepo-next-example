import { Box, Icon, Text } from 'shared/components/elements'

export const WebsiteHowWorks = () => {
  return (
    <Box>
      <h2>
        Somos uma API ágil para consultar informações de processos através dos
        tribunais
      </h2>

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
    </Box>
  )
}
