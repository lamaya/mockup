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
      </div>
    );
  }
}

export default App;
