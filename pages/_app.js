import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { msTheme, dnTheme } from '../ms_ui/src/themes'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={dnTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
