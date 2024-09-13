import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export const LayoutStyled = styled(Box)`
  display: grid;
  grid-template:
    'sidebar  header'
    'sidebar  main'
    'sidebar  footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  width: 100%;
`
