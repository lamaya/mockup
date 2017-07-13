import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Home />
      <Navbar stickyBottom >
        <Nav>
        <NavItem eventKey={1} href="#">FOOTER ONE</NavItem>
        <NavItem eventKey={2} href="#">FOOTER TWO</NavItem>
        <NavItem eventKey={2} href="#">FOOTER THREE</NavItem>
        <NavItem eventKey={2} href="#">FOOTER FOUR</NavItem>
        </Nav>
      </Navbar>
      </div>
    );
  }
}

export default App;
