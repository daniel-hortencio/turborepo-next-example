import Image from 'next/image'

interface Props {
  color: 'white' | 'black'
}

export const Logo = ({ color }: Props) => {
  return (
    <Image
      src={`/images/logos/logo-judit-${color}.svg`}
      alt="Logo Judit"
      width={108}
      height={108}
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
