import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { LayoutStyled } from '@src/components/organisms/Layout/styled'

type Props = {
  children?: ReactNode
}

export const Layout = (props: Props) => {
  return <LayoutStyled>{props.children}</LayoutStyled>
}

export const LayoutSidebar = (props: Props) => {
  return (
    <Box
      gridArea={'sidebar'}
      h={'full'}
      left={0}
      maxH={'100vh'}
      position={'sticky'}
      top={0}
    >
      {props.children}
    </Box>
  )
}

export const LayoutFooter = (props: BoxProps) => {
  return (
    <Box gridArea={'footer'} {...props}>
      {props.children}
    </Box>
  )
}

export const LayoutMain = (props: Props) => {
  return (
    <Box as={'main'} bg={'theme.50'} gridArea={'main'} overflow={'hidden'}>
      {props.children}
    </Box>
  )
}
