"use client";

import { useState } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import Icon from "../Icon";

interface Props {
  title: string;
  description;
}

export const Accordion = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="rounded-lg px-8 py-4 shadow-md md:py-8"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Box className="flex justify-between fill-primary">
        <Text className="mr-5 text-left text-lg font-bold text-custom-gray-500">
          {title}
        </Text>

        <Icon name={isOpen ? "MinusCircle" : "PlusCircle"} size={24} />
      </Box>
      <Box
        className={`overflow-hidden ${isOpen ? "h-auto pt-2 md:pt-4" : "h-0"}`}
      >
        <Text className="mr-10 text-left text-custom-gray-400">
          {description}
        </Text>
      </Box>
    </button>
  );
};
