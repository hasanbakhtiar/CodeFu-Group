import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
    <Container>
      <LinkContainer to="/">
      <Navbar.Brand>Blog App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blogs">
          <Nav.Link >Blogs</Nav.Link>
          </LinkContainer>
          
        </Nav>
       <LinkContainer to='/dashboard'>
       <Button>Admin Dashboard</Button>
       </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header