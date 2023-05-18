import React from 'react'
import { Text } from '../Text'

export const SubTitle = ({ children }) => (
  <Text as="h2" className="text-lg font-bold mb-5 text-custom-gray-500">
    {children}
  </Text>
)

export const Paragraph = ({ children }) => (
  <Text className="mb-5 text-custom-gray-400">{children}</Text>
)

export { PrivacyPolicy } from './PrivacyPolicy'
export { TermsOfUse } from './TermsOfUse'
