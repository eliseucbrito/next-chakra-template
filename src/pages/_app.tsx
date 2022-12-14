import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { defaultTheme } from '../styles/themes/defaultTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
