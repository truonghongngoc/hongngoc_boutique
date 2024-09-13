import {
  InputGroup,
  InputProps as InputChakraProps,
  InputRightElement,
  forwardRef,
  Input,
} from '@chakra-ui/react'
import React from 'react'
import { IconEye } from '@src/components/atoms/icons/IconEye'
import { IconEyeOpen } from '@src/components/atoms/icons/IconEyeOpen'

export const InputPassword = forwardRef<InputChakraProps, 'input'>(
  (props, ref): JSX.Element => {
    const [isShow, setIsShow] = React.useState<boolean>(false)
    const handleShow = React.useCallback(() => setIsShow(!isShow), [isShow])

    return (
      <InputGroup>
        <Input ref={ref} {...props} type={isShow ? 'text' : 'password'} />
        <InputRightElement h={'full'} onClick={handleShow}>
          {isShow ? (
            <IconEyeOpen fontSize={'xl'} />
          ) : (
            <IconEye fontSize={'xl'} />
          )}
        </InputRightElement>
      </InputGroup>
    )
  },
)
