import React from 'react'
import {Navbar,Nav,Container, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
              <Navbar.Brand>
                <img src={logo} alt="ProShop" />
                ProShop
                </Navbar.Brand>
                </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <NavbarCollapse id='baisc-navbar-nav'>
                <Nav className='ms-auto'>
                  <LinkContainer to='/cart'>
                  <NavLink><FaShoppingCart/>Cart</NavLink> 
                  </LinkContainer>
                  <LinkContainer to='/login'>
                  <NavLink><FaUser/>Sign In</NavLink>
                  </LinkContainer>
                </Nav>
              </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header