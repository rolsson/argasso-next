// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

type Props = {
  children: Node,
  title?: string
}

export default ({ children, title = 'This is the default title' }: Props) => (
  <section>
    <Head>
      <title>{title}</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    </Head>
    {children}
  </section>
)
