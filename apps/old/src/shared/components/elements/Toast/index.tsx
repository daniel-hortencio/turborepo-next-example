import Icon from '../Icon'
import { Portal } from '../Portal'
import { Wrapper } from '../Wrapper'
import { Text } from '../Text'
import { useEffect, useState } from 'react'

import S from './styles.module.css'

export interface IToast {
  status: 'success' | 'danger' | 'warning'
  message: string
}

export interface Props extends IToast {
  onClose: () => void
}

export const Toast = ({ status, message, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  let timer = null
  let timer_close_in_5_seconds = null

  const closeToast = () => {
    setIsVisible(false)

    timer = setTimeout(() => {
      onClose()
    }, 500)
  }

  useEffect(() => {
    timer_close_in_5_seconds = setTimeout(() => {
      closeToast()
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer_close_in_5_seconds)
    }
  }, [])

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 10

  const onTouchStart = e => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    const isUpSwipe = distance > minSwipeDistance
    // const isDownSwipe = distance < -minSwipeDistance
    if (isUpSwipe) {
      closeToast()
    }
  }

  const getClassNameStyles = () => {
    const status_styles = {
      success: 'bg-primary text-white fill-white',
      danger: 'bg-danger text-white fill-white'
    }

    return `${
      isVisible ? S.Toast__SlideIn : S.Toast__SlideOut
    } fixed top-0 z-20 w-full opacity-90 ${status_styles[status]}`
  }

  return (
    <Portal id="toast">
      <div
        className={getClassNameStyles()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Wrapper noPaddingY className={`flex items-center py-3`}>
          <div className="relative flex items-center justify-center">
            <Text className="md:mx-6 text-center">{message}</Text>
            <button
              onClick={closeToast}
              className="hidden md:flex opacity-50 absolute right-0 top-0 h-full w-6 items-center justify-center"
            >
              <Icon name="X" />
            </button>
          </div>
        </Wrapper>
      </div>
    </Portal>
  )
}
