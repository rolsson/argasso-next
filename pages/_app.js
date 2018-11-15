import App, {Container} from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react'
import BootstrapContainer from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'

const HEADER_HEIGHT = 56
const FOOTER_HEIGHT = 220

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
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content=""/>
          <meta name="author" content=""/>
          <link rel="icon" href="../../../../favicon.ico"/>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        </Head>
        <header>
          <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Link href='/' passHref><Navbar.Brand>Grå bokförlag</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href='/books' passHref><Nav.Link>Books</Nav.Link></Link>
                <Link href='/about' passHref><Nav.Link>About</Nav.Link></Link>
                <Link href='/contact' passHref><Nav.Link>Contact</Nav.Link></Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <BootstrapContainer as="main">
          <Component {...pageProps} />
        </BootstrapContainer>

        <footer>
          <Breadcrumb listProps={{ className: 'container' }}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <section>
            <BootstrapContainer>
              <Row>
                <Col md={3}>
                  <h5>Grå bokförlag</h5>
                  <address>
                    Gatangatan 123<br/>
                    123 12 Ort<br/>
                    010 - 12 34 56<br/>
                    info@domain.domain
                  </address>
                </Col>
                <Col md={3}>
                  Column 2
                </Col>
                <Col md={3}>
                  Column 3
                </Col>
                <Col md={3}>
                  Column 4
                </Col>
              </Row>
            </BootstrapContainer>
          </section>

          <footer>
            <BootstrapContainer>
              <p>Copyright © 2018 Grå bokförlag. Alla rättigheter reserverade. </p>
            </BootstrapContainer>
          </footer>
        </footer>

        <style global jsx>{`
          html {
            position: relative;
            min-height: 100%;
          }
          body { 
            background: #edebda;
            padding-top: ${HEADER_HEIGHT}px;
            padding-bottom: ${FOOTER_HEIGHT}px;
          }
          div > footer {
            color: #999;
            position: absolute;
            bottom: 0;
            width: 100%;
            /* Set the fixed height of the footer here */
            height: ${FOOTER_HEIGHT}px;
            /* line-height: 60px; */ /* Vertically center the text there */
            font-size: .8rem;
          }
          footer > nav, ol.breadcrumb {
            background: #4e5a6b;
          }
          footer > section {
            background: #323a45;
          }
          footer > footer {
            background: #292f38;
          }
          ol.breadcrumb {
            margin-bottom: 0;
          }
          .breadcrumb-wrapper {

          }
        `}</style>
      </Container>

    )
  }
}
