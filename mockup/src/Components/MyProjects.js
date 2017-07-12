import React, { Component } from 'react';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col } from 'react-bootstrap';


function MyProjects(props){
  const title = props.title;
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
  <Grid>
    <Row className="show-grid">
      <Col style={{"marginTop": "8%"}} md={6} mdPush={6}>
      <p> total hours</p>
    <p> Flat Rate</p></Col>
      <Col style={{"textAlign": "left"}} md={6} mdPull={6}>
      <h2>{props.project_name}</h2>
    <h5>{props.applicants}</h5>
    <h5>View full listing (link)</h5>
    <p> project description</p>
    <p> Skills needed </p>

    <Completion/>
    <Invoice/>
    <p>Icon and name of person(s) who completed project</p></Col>
    </Row>
  </Grid>

  </div>
  </div>
  )
}
class Invoice extends Component {
  constructor() {
    super();
    this.state = {};
    this.renderProject = this.renderProject.bind(this)
  }
  renderProject() {
    var word = "Invoice Receivedd"
    var classType = "";
    var received = "";
    if (word === "Invoice Received"){
      classType = "green"
      received = "true"
      } else {
      classType = "red"
      }
    return (
      <div className="quizContainer">
      <p className={classType}>{word} <button hidden={received}>request invoice</button></p>

      <p></p>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderProject()}
      </div>
    );
  }
}
class Completion extends Component {
  constructor() {
    super();
    this.state = {};
    this.renderProject = this.renderProject.bind(this)
  }
  renderProject() {
    var word = "Project Completed"
    var classType = "";
    if (word === "Project Completed"){
      classType = "green"
      } else {
      classType = "red"
      }
    return (
      <div className="quizContainer">
      <p className={classType}>{word}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderProject()}
      </div>
    );
  }
}

export default MyProjects;
