import Image from "next/image";
import { Box, Button, Icon, Text, Wrapper } from "shared/components/elements";

import S from "./styles.module.css";

export const WebsiteApi = () => {
  return (
    <Wrapper className="test">
      <Box
        className={`${S.IntegratingToApi} mb-4 rounded-[32px] bg-primary-light px-12 py-9`}
      >
        <Box className="grid w-72 grid-cols-3 gap-7 ">
          {[
            { src: "swift", width: 28, height: 28 },
            { src: "js", width: 28, height: 28 },
            { src: "python", width: 28, height: 28 },
            { src: "java", width: 28, height: 28 },
            { src: "php", width: 28, height: 28 },
            { src: "ruby", width: 28, height: 28 },
            { src: "react", width: 28, height: 28 },
            { src: "c", width: 28, height: 28 },
          ].map((logo) => (
            <Box
              key={logo.src}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
            >
              <Image
                src={`/images/logos/${logo.src}.svg`}
                alt={logo.src}
                width={logo.width}
                height={logo.height}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
          <Box className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <Text className="font-bold">+ 7</Text>
          </Box>
        </Box>

        <Box className="flex-auto">
          <Text className="mb-5 text-28px font-extrabold text-custom-gray-500">
            Integrando a API ao seu sistema
          </Text>
          <Text className="mb-5 text-custom-gray-400">
            Além da documentação técnica, também disponibilizamos a sessão de
            perguntas frequentes, para entender como a API da Judit pode ajudar
            a sua empresa a automatizar a consulta de dados judiciais.
          </Text>
          <Text className="mb-8 text-custom-gray-400">
            Aproveite, temos suporte para as principais linguagens do mercado.
          </Text>

          <Box className="flex items-center">
            <Box className="mr-8 w-44">
              <Button text="Ver documentação" size="large" color="primary" />
            </Box>
            <a
              href="#"
              className="flex whitespace-nowrap fill-primary font-semibold text-primary hover:fill-primary-dark hover:text-primary-dark"
            >
              <span className="mr-2">Perguntas frequentes </span>

              <Icon name="ArrowRight" />
            </a>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
