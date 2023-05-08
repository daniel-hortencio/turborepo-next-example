import { Box } from '../Box'

export interface IRadio {
  value: string
  checked?: boolean
  onChange?: (value: string) => void
}

export const Radio = ({ checked, value, onChange }: IRadio) => {
  return (
    <div
      className={`relative border-1 border-custom-gray-100 rounded-full w-5 h-5 shadow-md cursor-pointer flex items-center justify-center`}
    >
      {checked && (
        <Box className={`bg-primary w-3 h-3 top-1 left-1 rounded-full`} />
      )}

      <input
        type="radio"
        value={value}
        checked={checked}
        className={`w-full h-full cursor-pointer absolute top-0 left-0 opacity-0`}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
