import { Fragment, ReactNode, Dispatch, SetStateAction } from 'react'

import { Menu, Transition } from '@headlessui/react'

interface Props {
  button: ReactNode
  children: ReactNode
  onChange?: Dispatch<SetStateAction<boolean>>
}

export function menuDropDownClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const MenuDropDown = ({ button, onChange, children }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex">{button}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        beforeEnter={() => onChange && onChange(true)}
        beforeLeave={() => onChange && onChange(false)}
      >
        {children}
      </Transition>
    </Menu>
  )
}
