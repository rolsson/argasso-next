// @flow
import Link from 'next/link'
import Head from 'next/head'
import Navbar from 'react-bulma-components/lib/components/navbar'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
    <Navbar>
    <Navbar.Brand>
      <Link href="/">
        <Navbar.Item>Grå förlag</Navbar.Item>
      </Link>
      <Navbar.Burger
        // active={open}
        // onClick={() =>
            // this.setState(state => {
            // open: !state.open;
            // })
        // }
      />
    </Navbar.Brand>
    <Navbar.Menu>
        <Navbar.Container>
        <Link href="/books" passHref>
          <Navbar.Item>Böcker</Navbar.Item>
        </Link>
        <Link href="/about" passHref>
          <Navbar.Item>Om Oss</Navbar.Item>
        </Link>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>Docs</Navbar.Link>  
            <Navbar.Dropdown>
              <Navbar.Item>Overview</Navbar.Item>
              <Navbar.Item>Elements</Navbar.Item>
              <Navbar.Item>Components</Navbar.Item>
              <hr className="navbar-divider" />
              <Navbar.Item>Version 0.7.2</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
</header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)