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
      className="rounded-lg p-8 shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Box className="flex items-center justify-between fill-primary">
        <Text className="text-lg font-bold text-custom-gray-500">{title}</Text>

        <Icon name={isOpen ? "MinusCircle" : "PlusCircle"} size={24} />
      </Box>
      <Box className={`overflow-hidden ${isOpen ? "h-auto pt-8" : "h-0"}`}>
        <Text className="text-left text-custom-gray-400">{description}</Text>
      </Box>
    </button>
  );
};
