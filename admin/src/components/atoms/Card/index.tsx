import { Box, BoxProps } from '@chakra-ui/layout'
import React from 'react'

export const Card: React.FC<BoxProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Box bg={'white'} borderRadius={'4px'} m={2} {...props}>
      {children}
    </Box>
  )
}
