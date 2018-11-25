// @flow
import React from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import Layout from '../components/Layout'

type Props = {
  banners: Array<string>,
}

const Index = ({ banners }: Props) => (
  <Page>
    <h2>Kommande utgivning</h2>
    <h2>Nyheter</h2>
  </Page>
)

Index.getInitialProps = async ({ req }) => {
  const banners = []
  return { banners }
}

export default Index

