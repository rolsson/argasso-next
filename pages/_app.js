// @flow
import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../src/styles.scss'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content="TODO, fill with metaDescription from CMS"/>
          <meta name="author" content=""/>
          <link rel="icon" href="../../../../favicon.ico"/>
        </Head>

        <Header />

        <Component {...pageProps} />

        <Footer />

        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Container>

    )
  }
}
