import React, { Component } from 'react';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';


function MyProjects(props){
  const label = props.title;
  // same as:
  // const {to, label} = props.details;

return(
  <div className="MyProjects">
    <Navbar style={{"backgroundColor": "red", "border": "none"}}inverse collapseOnSelect>
      <Nav>
        <NavItem eventKey={1} href="#">Live Projects</NavItem>
        <NavItem eventKey={2} href="#">Saved Projects</NavItem>
        <NavItem eventKey={2} href="#">In Progress</NavItem>
        <NavItem eventKey={2} href="#">Archive</NavItem>
      </Nav>
  </Navbar>
  <div className="my-proj-header">
    <h2>My Projects</h2>
    <p style={{"fontSize": "12px", "padding": "0 20%"}}>Lorem ipsum dolor sit amet, ius paulo iuvaret vituperata ei, nec ea deleniti dissentiunt. Sea erant suscipit ad. Aeterno viderer complectitur quo cu. Ei nec nibh viris verear. His nibh indoctum accommodare te, id falli erroribus sed, duo illud exerci fabulas ea.
    </p>
    <hr />
  </div>
  <div className="project-info">
    <h2>hi {props.namee}</h2>
    <h5>applicants(link) | Date</h5>
    <h5>View full listing (link)</h5>
    <p> project description </p>
    <p> Skills needed </p>

    <p> total hours</p>
    <p> Flat Rate</p>
    <p>project completed checkbox</p>
    <p>Icon and name of person(s) who completed project</p>
    <button>Request Invoice</button>
  </div>
  </div>
  )

}

export default MyProjects;
