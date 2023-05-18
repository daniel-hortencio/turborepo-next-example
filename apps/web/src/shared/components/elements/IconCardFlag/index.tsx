import Image from 'next/image'
import { Box } from 'ui'

interface Props {
  flag: 'Mastercard'
}

export const IconCardFlag = ({ flag }: Props) => {
  const card_flag_src = {
    Mastercard: '/images/icons/Mastercard.svg'
  }

  return (
    <Box className="relative h-12 w-12">
      <Image
        src={card_flag_src[flag]}
        alt={`${flag}`}
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </Box>
  )
}
