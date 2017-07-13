import React, { Component } from 'react';
import organizations from '../organizations';
import NavBar from './NavBar';
import MyProjects from './MyProjects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown, Row, Grid, Col } from 'react-bootstrap';

class ProjNav extends Component {
  render(){
    return(
    <div className="MyProjects-header">
        <Navbar style={{"backgroundColor": "red", "border": "none", "borderRadius": "0"}}inverse collapseOnSelect id="main-nav">
          <Nav>
            <NavItem eventKey={1} href="#">Live Projects</NavItem>
            <NavItem eventKey={2} href="#">Saved Projects</NavItem>
            <NavItem eventKey={2} href="#">In Progress</NavItem>
            <NavItem eventKey={2} href="#">Archive</NavItem>
          </Nav>
      </Navbar>
      <div className="my-proj-header"  style={{marginTop: "4%"}}  >


      </div>
      </div>
      )
  }
}
export default ProjNav ;
