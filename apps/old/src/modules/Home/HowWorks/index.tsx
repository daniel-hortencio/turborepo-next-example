import { Box, Icon, Text, Wrapper } from "shared/components/elements";

export const WebsiteHowWorks = () => {
  return (
    <Wrapper className="test">
      <h2 className="mx-auto mb-14 max-w-3xl text-center text-28px font-extrabold text-custom-gray-500">
        Somos uma API ágil para consultar informações de processos através dos
        tribunais
      </h2>

      <Box className="mb-14 grid gap-8 md:gap-12 lg:grid-cols-3">
        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pt-2">
            <Box className="absolute -left-3 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="FolderSimpleLock" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text as="h2" className="mb-2 text-lg font-bold md:text-xl ">
              Fusce faucibus sodales tellusitt amet
            </Text>
            <Text className="text-custom-gray-400">
              Mauris sed luctus justo, rhoncus mollis libero. Quisque sed
              gravida lectus iaculis sapien in arcu.
            </Text>
          </Box>
        </Box>

        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pt-2">
            <Box className="absolute -left-3 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="Cpu" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text as="h2" className="mb-2 text-lg font-bold md:text-xl">
              Vestibulum maximus laoreet sapien, sed convallis
            </Text>
            <Text className="text-custom-gray-400">
              Etiam nec bibendum nisl. Duis lorem felis, porttitor eu
              condimentum eu, vestibulum et lectus.
            </Text>
          </Box>
        </Box>

        <Box className="flex items-start">
          <Box className="relative w-10 fill-primary pt-2">
            <Box className="absolute -left-3 -top-1 h-9 w-9 rounded-full bg-primary-light" />
            <Box className="relative z-10">
              <Icon name="Database" size={36} />
            </Box>
          </Box>

          <Box className="w-full pl-4 sm:pl-6">
            <Text as="h2" className="mb-2 text-lg font-bold md:text-xl">
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
  );
};
