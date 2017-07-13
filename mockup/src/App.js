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
        <NavItem eventKey={1} href="#">Please Help</NavItem>
        <NavItem eventKey={2} href="#">Things Lawers Love</NavItem>
        <NavItem eventKey={2} href="#">Who Are These People</NavItem>
        <NavItem eventKey={2} href="#">Can I Have Yo Number?</NavItem>
        </Nav>
      </Navbar>
      </div>
    );
  }
}

export default App;
