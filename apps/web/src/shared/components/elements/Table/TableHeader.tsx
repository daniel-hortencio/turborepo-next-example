import { Box } from '..'

interface Props {
  titles: string[]
  className?: string
}

export const TableHeader = ({ titles, className }: Props) => {
  return (
    <Box className={`p-1 md:pl-4 ${className}`}>
      {titles.map(title => (
        <Box
          key={title}
          className="uppercase text-custom-gray-300 text-sm pb-4 tracking-widest"
        >
          {title}
        </Box>
      ))}
    </Box>
  )
}
