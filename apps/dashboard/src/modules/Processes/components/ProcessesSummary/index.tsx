'use client'

import { Box, Wrapper } from '../../../../shared/components/elements'
import { CardProcessesSummary } from '../CardProcessesSummary'

import 'keen-slider/keen-slider.min.css'
import './styles.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState, useEffect } from 'react'

export default function ProcessesSummary() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 1.25
      }
    },
    [
      // add plugins here
    ]
  )
  const [sliderIsMounting, setSliderIsMounting] = useState(true)

  useEffect(() => {
    setSliderIsMounting(false)
  }, [])

  return (
    <Box className="justify-center pt-6 pb-12  bg-white">
      <Wrapper as="section">
        <Box className="hidden md:grid md:grid-cols-3 gap-8">
          <CardProcessesSummary label="Em monitoramento" data={100592} />
          <CardProcessesSummary
            label="Consultas realizadas"
            data={19437}
            filterDays={[30, 60, 90]}
          />
          <CardProcessesSummary
            label="Movimentações"
            data={286195}
            filterDays={[30, 60, 90]}
          />
        </Box>
      </Wrapper>

      <Box className="md:hidden">
        <div
          ref={sliderRef}
          className="keen-slider ProcessSummary_KeenSlider relative"
        >
          <div
            className={`keen-slider__slide px-4 cursor-grab ${
              sliderIsMounting && 'hidden'
            }`}
          >
            <CardProcessesSummary
              label="Consultas realizadas"
              data={19437}
              filterDays={[30, 60, 90]}
            />
          </div>

          <div
            className={`keen-slider__slide pr-4 cursor-grab ${
              sliderIsMounting && 'hidden'
            }`}
          >
            <CardProcessesSummary label="Em monitoramento" data={100592} />
          </div>

          <div
            className={`keen-slider__slide pr-4 cursor-grab ${
              sliderIsMounting && 'hidden'
            }`}
          >
            <CardProcessesSummary
              label="Movimentações"
              data={286195}
              filterDays={[30, 60, 90]}
            />
          </div>
          {sliderIsMounting && (
            <Box className="absolute h-full w-full top-0 right-0 z-10 opacity-40 px-5 -translate-x-1">
              <div className="animate-pulse">
                <div className="rounded-lg bg-custom-gray-300 h-32 w-full " />
              </div>
            </Box>
          )}
        </div>
      </Box>
    </Box>
  )
}
