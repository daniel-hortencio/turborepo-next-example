import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  id: 'toast'
}

export const Portal = ({ children, id }: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${id}`)
    setMounted(true)
  }, [])

  return mounted && ref.current
    ? createPortal(<div>{children}</div>, ref.current)
    : null
}
