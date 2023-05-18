import { ReactNode } from "react";
import { Text } from "ui";

interface Props {
  children: ReactNode;
}

export const SubTitle = ({ children }: Props) => (
  <Text as="h2" className="mb-5 text-lg font-bold text-custom-gray-500">
    {children}
  </Text>
);

export const Paragraph = ({ children }: Props) => (
  <Text className="mb-5 text-custom-gray-400">{children}</Text>
);

export { PrivacyPolicy } from "./PrivacyPolicy";
export { TermsOfUse } from "./TermsOfUse";
