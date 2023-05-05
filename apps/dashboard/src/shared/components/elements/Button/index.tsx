import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import { PulseLoader } from 'react-spinners'

export interface IButton {
  text: string | JSX.Element
  type?: 'submit' | 'reset' | 'button'
  size?: 'small' | 'large'
  height?: 'low' | 'high'
  color?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
  className?: string
  as?: 'button' | 'link'
  href?: string
  loading?: boolean
}

export const Button = ({
  text,
  type = 'button',
  size = 'small',
  color = 'secondary',
  height = 'high',
  onClick,
  className,
  as = 'button',
  href = '/',
  loading
}: IButton) => {
  function getClassName() {
    const color_schemes = {
      primary:
        'bg-primary hover:bg-primary-dark text-white fill-white stroke-white',
      secondary:
        'bg-primary-light text-primary fill-primary hover:bg-primary-dark hover:fill-white hover:text-white',
      danger: 'bg-danger hover:bg-danger-dark text-white fill-white'
    }

    let classNameScheme =
      'relative rounded-full flex justify-center items-center transition-all flex-nowrap '

    classNameScheme += ` ${color_schemes[color]}`
    classNameScheme += ` ${height === 'high' ? 'h-12' : 'h-10 text-sm'}`
    classNameScheme += ` ${size === 'small' ? 'w-12' : 'w-full'}`
    classNameScheme += ` ${className && ''}`

    return classNameScheme
  }

  return as === 'button' ? (
    <button
      type={type}
      className={getClassName()}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <PulseLoader color="white" size={12} /> : text}
    </button>
  ) : (
    <Link href={href}>
      <button className={getClassName()}>{text}</button>
    </Link>
  )
}
