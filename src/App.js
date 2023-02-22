import logo from './logo.svg'
import './App.css'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import NavNavbar from './components/Navbar'
import CustomerInfo from './components/CustomerInfo'
import MainButtons from './components/MainButtons'
import ProductsInfo from './components/ProductsInfo'
import Summary from './components/Summary'
import { ProductProvider } from './Contexts/ProductContext'
import WaitingSpinner from './components/WaitingSpinner'

function App() {
  return (
    <Container fluid className="p-0" style={{ position: 'relative' }}>
      <WaitingSpinner />
      <NavNavbar />
      <Container>
        <CustomerInfo />
        <ProductProvider>
          <ProductsInfo />
        </ProductProvider>
        <Summary />
        <MainButtons />
      </Container>
    </Container>
  )
}

export default App
