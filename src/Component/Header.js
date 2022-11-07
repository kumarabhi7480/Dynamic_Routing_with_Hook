import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
<Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/service" >Service</Link>
            <Link to="/product">Products</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;
