import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';

function Header() {
    const [products] = useContext(ProductContext);
    const {totalItems} = useCart();
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >Best Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
            <Nav.Link >Shop({products.length})</Nav.Link>
          </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
          <Button variant='warning'><i  className="fa-solid fa-cart-shopping"></i>({totalItems})</Button>
          </LinkContainer>
          <LinkContainer to="/search">
          <Button className='ms-4' variant='info'><i class="fa-solid fa-magnifying-glass"></i></Button>

          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;