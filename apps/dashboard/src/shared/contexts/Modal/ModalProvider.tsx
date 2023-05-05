import { ReactNode, useCallback, useState } from 'react'

import { ModalContext } from './ModalContext'
import { IModal, Modal } from '../../components/elements/Modal'

interface Props {
  children: ReactNode
}

const init_modal_props: Omit<IModal, 'onClose'> = {
  isOpen: false,
  body: null,
  footer: null
}

export const ModalProvider = ({ children }: Props) => {
  const [params, setParams] = useState<Omit<IModal, 'onClose'>>({
    ...init_modal_props
  })

  const closeModal = useCallback(() => {
    setParams(() => ({ ...params, isOpen: false }))
  }, [params])

  const createModal = useCallback(
    (params: Omit<IModal, 'onClose' | 'isOpen'>) => {
      setParams(() => ({ ...params, isOpen: true }))
    },
    [params]
  )

  return (
    <ModalContext.Provider value={{ closeModal, createModal }}>
      {children}
      <Modal isOpen={params.isOpen} onClose={closeModal} {...params} />
    </ModalContext.Provider>
  )
}
