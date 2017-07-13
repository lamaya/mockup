import React, { Component } from 'react';
import organizations from '../organizations';
import NavBar from './NavBar';
import MyProjects from './MyProjects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';

class ProjNav extends Component {
  render(){
    return(
    <div className="MyProjects-header">
        <Navbar style={{"backgroundColor": "red", "border": "none", "borderRadius": "0"}}inverse collapseOnSelect>
          <Nav>
            <NavItem eventKey={1} href="#">Live Projects</NavItem>
            <NavItem eventKey={2} href="#">Saved Projects</NavItem>
            <NavItem eventKey={2} href="#">In Progress</NavItem>
            <NavItem eventKey={2} href="#">Archive</NavItem>
          </Nav>
      </Navbar>
      <div className="my-proj-header"  style={{marginTop: "4%"}}  >
        <h2>My Projects</h2>
        <p style={{"fontSize": "12px", "padding": "0 20%"}}>Lorem ipsum dolor sit amet, ius paulo iuvaret vituperata ei, nec ea deleniti dissentiunt. Sea erant suscipit ad. Aeterno viderer complectitur quo cu. Ei nec nibh viris verear. His nibh indoctum accommodare te, id falli erroribus sed, duo illud exerci fabulas ea.
        </p>
      </div>
      </div>
      )
  }
}
export default ProjNav ;
