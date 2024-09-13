import * as React from 'react'
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { pathname } from '@src/routers/pathname'
import { useVerifyPage } from './hooks'

type Props = ReturnType<typeof useVerifyPage>

const Component = (props: Props) => {
  const { isLoading, isVerify } = props

  return (
    <Box
      alignItems={'center'}
      bg={'theme.50'}
      display={'flex'}
      justifyContent={'center'}
      minH={'100vh'}
      w={'full'}
    >
      <Flex
        alignItems={'center'}
        bg={'white'}
        borderRadius={'md'}
        boxShadow="base"
        justifyContent={'center'}
        maxW={'500px'}
        px={10}
        py={16}
        w={'100%'}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isVerify ? (
              <Box>
                <Text>Xác thực email thành công</Text>

                <Link to={pathname.login.path}>
                  <Button>Về trang đăng nhập</Button>
                </Link>
              </Box>
            ) : (
              <div>Xác thực email lỗi</div>
            )}
          </>
        )}
      </Flex>
    </Box>
  )
}

export const VerifyPage = () => <Component {...useVerifyPage()} />
