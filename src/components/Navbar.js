import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavNavbar() {
  return (
    <Navbar bg="light" expand="md" className="justify-content-center">
        <Navbar.Brand href="#home">Invoice App</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
    </Navbar>
  )
}

export default NavNavbar
