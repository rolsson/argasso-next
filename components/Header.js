// flow
import Container from 'react-bulma-components/lib/components/container'
import Breadcrumb from './Breadcrumb'
import Navbar from './Navbar'

export default () => (
  <header>
    <Navbar />
    <Container>
        <Breadcrumb />
    </Container>
  </header>
)