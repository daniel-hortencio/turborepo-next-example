import { Box } from 'ui'

export interface IRadio {
  value: string
  checked?: boolean
  onChange?: (value: string) => void
}

export const Radio = ({ checked, value, onChange }: IRadio) => {
  return (
    <div
      className={`relative flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-1 border-custom-gray-100 shadow-md`}
    >
      {checked && (
        <Box className={`left-1 top-1 h-3 w-3 rounded-full bg-primary`} />
      )}

      <input
        type="radio"
        value={value}
        checked={checked}
        className={`absolute left-0 top-0 h-full w-full cursor-pointer opacity-0`}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
