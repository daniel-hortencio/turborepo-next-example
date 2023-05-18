"use client";

import { ReactNode } from "react";

export interface InputBaseProps {
  name?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  icon?: ReactNode;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export const InputBase = ({
  placeholder,
  type = "text",
  icon,
  className,
  value,
  onChange,
  name,
  required = false,
}: InputBaseProps) => {
  return (
    <div
      className={`relative flex h-12 items-center justify-between overflow-hidden rounded-full bg-white ${className}`}
    >
      <input
        name={name}
        placeholder={placeholder}
        type={type === "number" ? "tel" : type}
        className={`h-full w-full pl-6 pr-14 text-custom-gray-500 placeholder-custom-gray-400 `}
        value={value}
        onChange={(e) => {
          if (onChange) {
            type === "number"
              ? onChange(e.target.value.replace(/\D/g, ""))
              : onChange(e.target.value);
          }
        }}
        required={required}
      />
      {icon && (
        <div className="absolute right-0 flex h-full items-center">{icon}</div>
      )}
    </div>
  );
};
