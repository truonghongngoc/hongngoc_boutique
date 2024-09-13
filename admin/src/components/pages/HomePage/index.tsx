import * as React from 'react'
import { SideFilter } from '@src/components/molecules/SideFilter'
import { Box } from '@chakra-ui/react'
import { TabsDate } from '@src/components/molecules/TabsDate'
import { SearchResult } from '@src/components/molecules/SearchResult'
import styled from '@emotion/styled'

export const Wrapper = styled(Box)`
  display: grid;
  grid-template:
    'filter  tabs'
    'filter  result';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  width: 100%;
  gap: 8px;
`

export const HomePage = () => {
  return (
    <Wrapper>
      <Box gridArea={'filter'}>
        <SideFilter></SideFilter>
      </Box>
      <Box gridArea={'tabs'}>
        <TabsDate />
      </Box>
      <Box gridArea={'result'}>
        <SearchResult></SearchResult>
      </Box>
    </Wrapper>
  )
}
