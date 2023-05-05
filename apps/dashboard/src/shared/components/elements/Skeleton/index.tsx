interface Props {
  className: string
  rounded?: 'none' | '-sm' | '-md' | '-lg' | '-xl' | '-2xl' | '-3xl' | '-full'
}

export const Skeleton = ({ className, rounded }: Props) => {
  const getClassName = () => {
    return `${
      rounded ? `rounded-${rounded}` : 'rounded'
    } animate-pulse bg-custom-gray-200 ${className}`
  }

  return <div className={getClassName()} />
}
