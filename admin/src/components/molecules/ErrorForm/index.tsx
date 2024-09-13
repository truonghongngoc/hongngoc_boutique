import { Text } from '@chakra-ui/react'
import React from 'react'
import { TErrorFormProps } from '@src/components/molecules/ErrorForm/types'

export const ErrorForm = (props: TErrorFormProps) => {
  const { children, ...rest } = props

  return (
    <Text
      {...rest}
      as={'p'}
      color="#F66D4F"
      fontSize={'12px'}
      lineHeight={'none'}
      minH={'12px'}
      mt={1}
    >
      {children}
    </Text>
  )
}
