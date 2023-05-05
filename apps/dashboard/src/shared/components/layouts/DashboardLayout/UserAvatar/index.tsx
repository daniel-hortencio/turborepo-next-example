import Image from 'next/image'
import { Box } from '../../../elements'

interface Props {
  src: string
}

export const UserAvatar = ({ src }: Props) => {
  return (
    <Box className="border-2 transition-all rounded-full w-12 h-12 mr-4 border-transparent UserAvatar">
      <Box className="flex items-center justify-center w-full h-full  rounded-full overflow-hidden border-1 border-white ">
        <Image
          src={src}
          alt="User avatar"
          width={80}
          height={80}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
    </Box>
  )
}
