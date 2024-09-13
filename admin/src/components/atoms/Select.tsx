import React, { useCallback } from 'react'
import ReactSelect, { components, Props as SelectProps } from 'react-select'

export interface IOption {
  value: string
  label: string
}

import { IconArrowDown } from '@src/components/atoms/icons/IconArrowDown'

export interface IStyleProps {
  isInvalid?: boolean
}

const controlBorderColor = ({
  isFocused,
  isInvalid,
}: {
  isFocused?: boolean
  isInvalid?: boolean
}) => {
  if (isFocused) {
    return '#65CCC9'
  }
  if (isInvalid) {
    return '#F66D4F'
  }
  return '#D5D5D5'
}

const customStyle: (props: IStyleProps) => SelectProps['styles'] = ({
  isInvalid,
}) => ({
  control: (provided, { isFocused }) => ({
    ...provided,
    width: '100%',
    borderRadius: '4px',
    borderColor: controlBorderColor({ isFocused, isInvalid }),
    boxShadow: isFocused ? '0 0 0 1px #65CCC9' : 'none',
    height: '40px',
    minHeight: '40px',
    '&:hover': {
      borderColor: controlBorderColor({ isFocused, isInvalid }),
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: '#ACACAC',
    fontSize: '16px',
    lineHeight: '150%',
  }),
  option: provided => ({
    ...provided,
    textOverflow: 'ellipsis',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: '6px 8px 6px 12px',
  }),
  container: provided => ({
    ...provided,
    width: '100%',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 12px',
  }),
  singleValue: provided => ({
    ...provided,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px',
    paddingRight: '12px',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    marginLeft: '-8px',
  }),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <IconArrowDown h={'24px'} w={'24px'} />
  </components.DropdownIndicator>
)

export interface ISelectProps {
  isInvalid?: boolean
  value?: string
  options: IOption[]
  onChange?: (value?: string) => void
  id?: string
}

export const Select: React.FC<ISelectProps> = ({
  onChange = () => {},
  value,
  options,
  isInvalid,
  id = 'id-select',
}): JSX.Element => {
  const handleChange = useCallback(
    (newValue?: IOption) => {
      onChange && onChange(newValue?.value)
    },
    [onChange],
  )

  const currentValue = options.find(
    item => String(item.value) === String(value),
  )

  return (
    <ReactSelect
      isClearable
      className="basic-single"
      classNamePrefix="select"
      components={{ DropdownIndicator }}
      id={`react-select-${id}-listbox`}
      instanceId={id ?? 'id-select'}
      options={options}
      styles={customStyle({ isInvalid })}
      value={currentValue ?? ''}
      onChange={value => handleChange(value as IOption)}
    />
  )
}
