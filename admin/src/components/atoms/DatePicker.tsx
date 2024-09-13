import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import React, { useCallback, useMemo } from 'react'
import styled from '@emotion/styled'
import { Input } from '@chakra-ui/react'
import moment from 'moment'

const Wrapper = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }
`

type DateTimePickerProps = {
  value?: number
  onChange: (value?: number) => void
  isInvalid?: boolean
}

export const DateTimePicker = (props: DateTimePickerProps) => {
  const { value, onChange, isInvalid } = props

  const handleChange = useCallback(
    (date: Date | null) => {
      if (date) {
        const minutes = date.getMinutes()
        const hours = date.getHours()

        const newValue = hours * 60 + minutes

        onChange(newValue)
      } else {
        onChange(undefined)
      }
    },
    [onChange],
  )

  const selected = useMemo(() => {
    if (value) {
      try {
        const hour = Math.floor(value / 60)
        const minute = value % 60

        return moment()
          .set({
            hour,
            minute,
          })
          .toDate()
      } catch (e) {
        console.error('ERROR_DATE_PICKER', e)
        return new Date()
      }
    }

    return new Date()
  }, [value])

  return (
    <Wrapper>
      <ReactDatePicker
        showTimeSelect
        showTimeSelectOnly
        customInput={<Input isInvalid={isInvalid} />}
        dateFormat="h:mm aa"
        selected={selected}
        timeCaption="Time"
        timeIntervals={15}
        onChange={handleChange}
      />
    </Wrapper>
  )
}
