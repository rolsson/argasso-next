// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

// import Moment from 'react-moment'
import Markdown from 'react-markdown'

export type Book = {
    title: string,
    content: string,
}

type Props = {
  book: Book,
}

export default ({ book }: Props) => (
  <section>
    <Head>
      <title>{book.title}</title>
    </Head>
    <h3>{book.title}</h3>
    <Markdown source={book.content} escapeHtml={false} />
  </section>
)
