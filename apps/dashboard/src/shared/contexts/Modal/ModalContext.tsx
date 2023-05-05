import { createContext } from 'react'
import { IModal } from '../../components/elements/Modal'

export interface IModalContext {
  closeModal: () => void
  createModal: (params: Omit<IModal, 'onClose' | 'isOpen'>) => void
}

export const ModalContext = createContext({} as IModalContext | null)
