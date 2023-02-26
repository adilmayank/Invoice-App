import logo from './logo.svg'
import './App.css'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import NavNavbar from './components/Navbar'
import CustomerInfo from './components/CustomerInfo'
import CustomerInfoReify from './components/CustomerInfo-Reify'
import MainButtons from './components/MainButtons'
import ProductsInfo from './components/ProductsInfo'
import ProductsInfoReify from './components/ProductsInfo-Reify'
import Summary from './components/Summary'
import SummaryReify from './components/Summary-Reify'
import { ProductProvider } from './Contexts/ProductContext'
import WaitingSpinner from './components/WaitingSpinner'

function App() {
  return (
    <Container fluid className="p-0" style={{ position: 'relative' }}>
      <WaitingSpinner />
      <NavNavbar />
      <Container className="my-3 parent-container">
        <CustomerInfoReify />
        <ProductProvider>
          <ProductsInfoReify />
        </ProductProvider>
        <SummaryReify />
        <MainButtons />
      </Container>
    </Container>
  )
}

export default App
