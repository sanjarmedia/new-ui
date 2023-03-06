import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

export function InputField(props) {
  const { control, name, placeholder, inputClassName, rules, error } = props

  const inputErrorClassName = 'border-red-color dark:border-red-color'

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <input
              id={name}
              type='text'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`${inputClassName} ${error && inputErrorClassName}`}
              placeholder={placeholder}
            />
          )
        }}
        rules={rules}
      />

      {error && <span className='text-xs text-red-color'>* Please fill out this field</span>}
    </>
  )
}

InputField.defaultProps = {
  inputClassName:
    'mt-2 py-3 px-4 w-full border border-input-border-color rounded-2xl bg-background-color' +
    ' placeholder:text-placeholder-color',
}

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
}
