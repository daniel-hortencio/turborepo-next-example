import { Accordion, Box, Text, Wrapper } from "shared/components/elements";

export const WebsiteCommonQuestions = () => {
  return (
    <Wrapper className="test pb-20 pt-16">
      <Box className="mb-3 flex flex-col items-center">
        <Text className="mb-5 text-xl font-bold text-custom-gray-500">
          Perguntas Frequentes
        </Text>
        <Text className="mb-16 max-w-3xl text-center text-custom-gray-400">
          Quisque eget mauris tempus, tempor dui eu, eleifend turpis. Integer
          bibendum nulla vitae mi interdum, ac bibendum lacus pulvinar.
        </Text>
      </Box>

      <Box className="mb-5">
        <Accordion
          title="Duis elementum erat non tortor posuere?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elit, eu sagittis leo tincidunt ut. Mauris condimentum risus non velit vehicula feugiat."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="Phasellus efficitur, felis eget accumsan iaculis?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elit, eu sagittis leo tincidunt ut. Mauris condimentum risus non velit vehicula feugiat."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="Donec sed dui bibendum?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elit, eu sagittis leo tincidunt ut. Mauris condimentum risus non velit vehicula feugiat."
        />
      </Box>
      <Box className="mb-5">
        <Accordion
          title="Pellentesque diam tortor, congue a tortor at?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elit, eu sagittis leo tincidunt ut. Mauris condimentum risus non velit vehicula feugiat."
        />
      </Box>
      <Accordion
        title="Suspendisse eget risus risus?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elit, eu sagittis leo tincidunt ut. Mauris condimentum risus non velit vehicula feugiat."
      />
    </Wrapper>
  );
};
