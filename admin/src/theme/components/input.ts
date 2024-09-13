import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    borderRadius: '4px',
    h: 10,
    px: 2,
  },
})

export const inputTheme = defineMultiStyleConfig({ baseStyle })
