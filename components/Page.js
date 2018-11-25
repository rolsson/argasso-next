// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

type Props = {
  children: Node,
  title?: string
}

export default ({ children, title = 'This is the default title' }: Props) => (
  <main>
    <Head>
      <title>{title}</title>
    </Head>
    <Container>
      {children}
    </Container>
  </main>
)
