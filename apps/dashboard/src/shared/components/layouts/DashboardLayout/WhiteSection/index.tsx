import React, { ReactNode } from 'react'
import { Wrapper } from '../../../elements'

interface Props {
  children: ReactNode
}

export const WhiteSection = ({ children }: Props) => {
  return (
    <Wrapper
      as="section"
      className="justify-center pt-6 pb-10 xl:pb-12 bg-white"
    >
      {children}
    </Wrapper>
  )
}
