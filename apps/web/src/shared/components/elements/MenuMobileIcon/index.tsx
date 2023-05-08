import { Dispatch, SetStateAction } from 'react'
import Icon from '../Icon'

interface Props {
  isOpen: boolean
  onChange: Dispatch<SetStateAction<boolean>>
}

export const MenuMobileIcon = ({ isOpen, onChange }: Props) => {
  return (
    <button
      className="h-full flex items-center"
      onClick={() => onChange(!isOpen)}
    >
      <Icon name={isOpen ? 'X' : 'List'} size={32} />
    </button>
  )
}
