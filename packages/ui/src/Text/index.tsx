"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "strong"
    | "small"
    | "span"
    | "label";
}

export const Text = ({ children, className = "", as = "p" }: Props) => {
  const element = {
    p: <p className={className}>{children}</p>,
    h1: <h1 className={className}>{children}</h1>,
    h2: <h2 className={className}>{children}</h2>,
    h3: <h3 className={className}>{children}</h3>,
    h4: <h4 className={className}>{children}</h4>,
    h5: <h5 className={className}>{children}</h5>,
    h6: <h6 className={className}>{children}</h6>,
    strong: <strong className={className}>{children}</strong>,
    small: <small className={className}>{children}</small>,
    span: <span className={className}>{children}</span>,
    label: <label className={className}>{children}</label>,
  };

  return element[as];
};
