import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';
function Header() {
  const [mode,setMode] = useContext(ThemeContext);
  const [lang,setLang] = useContext(LangContext);
  useEffect(()=>{
   if(localStorage.getItem('mode')===null){
    localStorage.setItem('mode','light')
   }
   if(localStorage.getItem('lang')===null){
    localStorage.setItem('lang','az')
   }
  },[])
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
            <Nav.Link >Contact</Nav.Link>
            </LinkContainer>
           
          </Nav>
          <Button variant='warning' onClick={()=>{
            mode==='light' ? setMode('dark')  : setMode('light') 
            mode==='light' ? localStorage.setItem('mode','dark')  : localStorage.setItem('mode','light') 
          }}>{mode === "light"? "dark":"light"}</Button>


            <Button variant='warning' onClick={()=>{
            lang==='az' ? setLang('en')  : setLang('az') 
            lang==='az' ? localStorage.setItem('lang','en')  : localStorage.setItem('lang','az') 
          }}>{lang === "az"? "en":"az"}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;