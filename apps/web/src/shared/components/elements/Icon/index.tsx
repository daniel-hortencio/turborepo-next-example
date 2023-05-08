'use client'

import * as PhosphorIcons from '@phosphor-icons/react'
import React from 'react'

import { IconName } from './types'

interface IconTest {
  name: IconName
  size?: number
  color?: string
}

const Icon = ({ name, size = 20, color = '' }: IconTest) => {
  const PhIcon = PhosphorIcons[name] || PhosphorIcons.XSquare

  return <PhIcon size={size} color={color} />
}

export default Icon
