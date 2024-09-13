import {
  InputProps as InputChakraProps,
  forwardRef,
  Input,
} from '@chakra-ui/react'
import React, { useCallback, useMemo } from 'react'
import numeral from 'numeral'

export const InputNumber = forwardRef<InputChakraProps, 'input'>(
  (props, ref): JSX.Element => {
    const { value, onChange, ...rest } = props

    const currentValue = useMemo(() => {
      if (!value && value !== 0) {
        return ''
      }
      const newValue = numeral(value)

      return newValue.format('0,0')
    }, [value])

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = numeral(e.target.value)

        if (newValue.value() === null) {
          e.target.value = ''
        } else {
          e.target.value = newValue.value() + ''
        }

        onChange && onChange(e)
      },
      [onChange],
    )

    return (
      <Input
        ref={ref}
        bg={'white'}
        value={currentValue}
        onChange={handleChange}
        {...rest}
        type={'text'}
      />
    )
  },
)
