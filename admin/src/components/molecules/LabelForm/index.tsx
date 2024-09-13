import { Text } from '@chakra-ui/react'
import React from 'react'
import { TLabelFormProps } from '@src/components/molecules/LabelForm/types'

export const LabelForm = (props: TLabelFormProps) => {
  const { id, children, isRequired, ...rest } = props

  return (
    <Text
      _before={
        isRequired
          ? {
              marginRight: '4px',
              color: '#F66D4F',
              content: '"*"',
            }
          : undefined
      }
      as={'label'}
      color={'black.1000'}
      fontSize={'md'}
      fontWeight={'medium'}
      htmlFor={id}
      lineHeight={'none'}
      mb={1}
      {...rest}
    >
      {children}
    </Text>
  )
}
