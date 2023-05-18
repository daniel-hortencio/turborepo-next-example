'use client'

import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Box, Wrapper, Text, Icon } from 'ui'

export const NavigationCourts = () => {
  const [scrollTopDistance, setScrollTopDistance] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Obtém a distância do scroll em relação ao topo da página
      const distance = window.pageYOffset
      setScrollTopDistance(distance)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box className="min-h-[88px]">
      <Wrapper
        noPaddingY
        className={`bg-custom-gray-100 ${
          scrollTopDistance > 135 &&
          'fixed left-0 top-20 z-10 w-full shadow-lg lg:top-28'
        }`}
      >
        <Box as="nav" className={`flex items-center`}>
          <Text className="mr-6">Cobertura por Tribunal:</Text>
          {['TJ', 'TJM', 'TRF', 'TRE', 'TRT'].map(link => (
            <LinkScroll
              offset={-250}
              activeClass="border-b-2 border-primary pt-[2px]"
              spy={true}
              className={`mr-6 flex h-[86px] cursor-pointer items-center text-custom-gray-500 transition-all`}
              to={link}
              key={link}
            >
              {link}
            </LinkScroll>
          ))}
          <span className="mr-6">·</span>
          {['STF', 'CJF', 'STM', 'TST', 'CSJT', 'TSE', 'CNJ'].map(link => (
            <LinkScroll
              offset={-250}
              activeClass="border-b-2 border-primary pt-[2px]"
              spy={true}
              className={`mr-6 flex h-[86px] cursor-pointer items-center text-custom-gray-500 transition-all`}
              to={link}
              key={link}
            >
              {link}
            </LinkScroll>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            /* href="/cobertura-dos-tribunais#inicio" */
            className="ml-auto flex cursor-pointer whitespace-nowrap fill-primary text-primary hover:fill-primary-dark hover:text-primary-dark"
          >
            Ir para o topo <Icon name="ArrowUp" />
          </button>
        </Box>
      </Wrapper>
    </Box>
  )
}
