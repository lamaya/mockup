import React, { Component } from 'react';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';

class NavBar extends Component {

render(){
const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>

      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">How It Works</NavItem>
        <NavItem eventKey={2} href="#">Browse Projects</NavItem>
        <Navbar.Brand>
        <a href="#">W</a>
      </Navbar.Brand>
        <NavItem eventKey={2} href="#">Create A Project</NavItem>

      <Nav pullRight>
        <NavDropdown eventKey={3} title="+" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>My Projects</MenuItem>
          <MenuItem eventKey={3.2}>View Applications</MenuItem>
          <MenuItem eventKey={3.3}>Manage Invoices</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Edit Profile</MenuItem>
          <MenuItem eventKey={3.3}>View Profile</MenuItem>
          <MenuItem eventKey={3.3}>Log Out</MenuItem>
        </NavDropdown>
      </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
return(
  <div>
  {navbarInstance}
  </div>
  )
}
}

export default NavBar ;
