import React, { ReactNode } from 'react'
import { Wrapper } from 'ui'

interface Props {
  children: ReactNode
}

export const WhiteSection = ({ children }: Props) => {
  return (
    <Wrapper
      as="section"
      className="justify-center bg-white pb-10 pt-6 xl:pb-12"
    >
      {children}
    </Wrapper>
  )
}
