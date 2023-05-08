'use client'

import { Fragment, ReactNode, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Box } from '../Box'
import { Text } from '../Text'
import Icon from '../Icon'

type ModalHeader = {
  title?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export interface IModal {
  header?: ModalHeader
  showButtonClose?: boolean
  isOpen: boolean
  onClose: () => void
  body?: ReactNode
  footer?: ReactNode
  wrapper?: () => JSX.Element
  positionX?: 'left' | 'center' | 'right'
  className?: string
  isCustom?: boolean
}

export const Modal = ({
  header,
  showButtonClose = true,
  isOpen,
  onClose,
  body,
  footer,
  positionX = 'center',
  className = '',
  isCustom = false
}: IModal) => {
  const cancelButtonRef = useRef(null)

  const getStyle = () => {
    const positions_x = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    }

    return `flex min-h-full items-end ${positions_x[positionX]} p-4 text-center items-center md:p-5`
  }

  const getClassName = () => {
    return `relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-screen-md rounded-3xl ${className}`
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity backdrop-blur-xs" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className={getStyle()}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={getClassName()}>
                {isCustom ? (
                  <Box>
                    {body}
                    {showButtonClose && (
                      <button
                        type="button"
                        className="absolute top-5 right-5 p-0.5 fill-custom-gray-300 hover:fill-primary transition-all"
                        onClick={onClose}
                        ref={cancelButtonRef}
                      >
                        <Icon name="X" />
                      </button>
                    )}
                  </Box>
                ) : (
                  <Box className="px-8">
                    <Dialog.Title as="h3">
                      {showButtonClose && (
                        <button
                          type="button"
                          className="absolute top-5 right-5 p-0.5 fill-custom-gray-300 hover:fill-primary transition-all"
                          onClick={onClose}
                          ref={cancelButtonRef}
                        >
                          <Icon name="X" />
                        </button>
                      )}
                      {(header?.title || header?.subtitle) && (
                        <Box as="header" className="pt-8">
                          {header.title && (
                            <Text
                              className={`font-bold text-2xl mb-4 ${
                                header.align && `text-${header.align}`
                              }`}
                            >
                              {header.title}
                            </Text>
                          )}

                          {header.subtitle && (
                            <Text
                              className={`${
                                header.align && `text-${header.align}`
                              } text-custom-gray-400`}
                            >
                              {header.subtitle}
                            </Text>
                          )}
                        </Box>
                      )}
                    </Dialog.Title>

                    {body && <Box className="py-6 h-full">{body}</Box>}
                  </Box>
                )}
                {footer && (
                  <Box
                    as="footer"
                    className="p-8 border-t-1 border-custom-gray-200"
                  >
                    {footer}
                  </Box>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
