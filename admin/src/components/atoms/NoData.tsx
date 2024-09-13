import { Box } from '@chakra-ui/layout'
import { IconNoData } from '@src/components/atoms/icons/IconNoData'
import { Text } from '@chakra-ui/react'
import React from 'react'

export const NoData = () => {
  return (
    <Box p={4}>
      <Box textAlign={'center'}>
        <IconNoData />
      </Box>
      <Text color={'gray.600'} fontSize={'sm'} textAlign={'center'}>
        Không có dữ liệu
      </Text>
    </Box>
  )
}
