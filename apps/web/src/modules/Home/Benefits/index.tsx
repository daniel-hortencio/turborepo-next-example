import { Box, Icon, Text, Wrapper } from "shared/components/elements";

import S from "./styles.module.css";

export const WebsiteBenefits = () => {
  return (
    <Wrapper>
      {" "}
      <Box className={`${S.Benefits} gap-10`}>
        <Box>
          <Text className="mb-5 text-28px font-extrabold text-custom-gray-500">
            Benefícios em utilizar a API da Judit
          </Text>
          <Text className="mb-5 text-custom-gray-400">
            Duis et purus ut elit ullamcorper commodo in ac sapien. In ornare
            risus at sem cursus mattis. Fusce ligula risus.
          </Text>
          <a
            href="#"
            className="flex whitespace-nowrap fill-primary font-semibold text-primary hover:fill-primary-dark hover:text-primary-dark"
          >
            <span className="mr-2">Criar minha conta </span>

            <Icon name="ArrowRight" />
          </a>
        </Box>

        <Box>
          <Box className="mb-10 flex items-center fill-primary">
            <Icon name="ArrowCircleRight" />
            <Text className="ml-4 font-bold text-custom-gray-500">
              Praesent efficitur, est at sagittis sodales
            </Text>
          </Box>
          <Box className="mb-10 flex items-center fill-primary">
            <Icon name="ArrowCircleRight" />
            <Text className="ml-4 font-bold text-custom-gray-500">
              Curabitur suscipit consectetur dui vestibulum
            </Text>
          </Box>
          <Box className="mb-10 flex items-center fill-primary">
            <Icon name="ArrowCircleRight" />
            <Text className="ml-4 font-bold text-custom-gray-500">
              Donec vehicula nisi a ipsum finibus
            </Text>
          </Box>
          <Box className="mb-10 flex items-center fill-primary">
            <Icon name="ArrowCircleRight" />
            <Text className="ml-4 font-bold text-custom-gray-500">
              Etiam commodo, nisi tristique rhoncus sodales
            </Text>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
