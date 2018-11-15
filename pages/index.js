// @flow
import React from 'react'
import Head from 'next/head'
import Page from '../components/Page'

import Carousel from 'react-bootstrap/lib/Carousel'

type Props = {
  banners: Array<string>,
}

const Index = ({ banners }: Props) => (
  <Page>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/banners/Tilly.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/banners/Forstafemman.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  </Page>
)

Index.getInitialProps = async ({ req }) => {
  const banners = []
  return { banners }
}

export default Index

