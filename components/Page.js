// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

import BootstrapContainer from 'react-bootstrap/lib/Container'

type Props = {
  children: Node,
  title?: string
}

export default ({ children, title = 'This is the default title' }: Props) => (
  <BootstrapContainer as="main">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </BootstrapContainer>
)
