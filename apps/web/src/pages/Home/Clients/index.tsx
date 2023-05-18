import Image from 'next/image'

import { Wrapper, Box } from 'ui'

export const WebsiteClients = () => {
  const clients = [
    {
      name: 'ebanx',
      size: 100
    },
    {
      name: 'olx',
      size: 80
    },
    {
      name: 'captalys',
      size: 100
    },
    {
      name: 'loggi',
      size: 100
    },
    {
      name: 'quinto-andar',
      size: 180
    },
    {
      name: 'ifood',
      size: 80
    },
    {
      name: 'movida',
      size: 100
    }
  ]

  return (
    <Wrapper className="flex h-32 items-center bg-[#151515] lg:h-44">
      <Box className="flex items-center justify-between">
        {clients.map(partner => (
          <Image
            key={partner.name}
            src={`/images/logos/${partner.name}.svg`}
            alt="Logo Judit"
            width={partner.size}
            height={partner.size}
            style={{
              objectFit: 'cover'
            }}
          />
        ))}
      </Box>
    </Wrapper>
  )
}
