"use client";

import * as PhosphorIcons from "@phosphor-icons/react";
import React from "react";

import { IconName } from "./types";

interface IconTest {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 20, color = "" }: IconTest) => {
  const PhIcon: any =
    PhosphorIcons[name as keyof typeof PhosphorIcons] || PhosphorIcons.XSquare;

  return <PhIcon size={size} color={color} />;
};
