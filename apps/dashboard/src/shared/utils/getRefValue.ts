import { MutableRefObject } from 'react'

export const getRefValue = (ref: MutableRefObject<HTMLInputElement>) =>
  ref?.current?.value
