import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routers } from '@src/routers'
import { theme } from '@src/theme'
import { ThemeProvider } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'

export const App: React.FC = () => {
  const elements = useRoutes(routers)

  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider resetCSS theme={theme}>
        {elements}
      </ChakraProvider>
    </ThemeProvider>
  )
}
