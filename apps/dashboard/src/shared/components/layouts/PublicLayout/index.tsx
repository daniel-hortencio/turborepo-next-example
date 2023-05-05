'use client'

import { useSelector } from 'react-redux'
import { Box } from '../../elements'
import Image from 'next/image'
import { useEffect } from 'react'
import { useAuthenticateUser } from 'shared/store'
import { useRouter } from 'next/navigation'
import { useCookies } from 'shared/utils/cookies'

export default function PublicLayout({ children }) {
  const user = useSelector(useAuthenticateUser)
  const router = useRouter()

  useEffect(() => {
    const { access_token, refresh_token } = useCookies().getUserAuth()

    if (access_token || refresh_token) {
      router.push('/dashboard')
    }
  }, [user])

  return (
    <Box className="bg-custom-gray-600 flex items-center w-full min-h-screen overflow-x-hidden overflow-y-auto">
      <Box className="w-screen h-screen fixed top-0 left-0 z-0">
        <Image
          src={`/images/pictures/background-public-layout-gradient.png`}
          alt="Background text"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'left bottom'
          }}
        />
      </Box>
      <Box className="w-screen h-screen fixed top-0 left-0 z-0">
        <Image
          src={`/images/pictures/background-public-layout.svg`}
          alt="Background text"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'left bottom'
          }}
        />
      </Box>

      <Box className="min-h-full w-full max-w-6xl p-5 mx-auto flex flex-col justify-center relative z-10">
        <Box className="sm:w-2/3 md:w-1/2 mx-auto lg:ml-auto lg:mr-0 mt-28 mb-24">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
