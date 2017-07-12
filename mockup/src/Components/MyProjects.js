import React, { Component } from 'react';
import ProjNav from './ProjNav';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col } from 'react-bootstrap';


function MyProjects(props){

    var paid = props.paid
    var completed = props.completed
    var paidID = "";
    var compID = "";
    var received = "";
    if ( paid === "yes"){
      paidID = "green"
      received = "true"
    } if ( completed === "yes") {
        compID = "green"
    } if ( paid !== "yes"){
        paidID = "red"
    } if ( completed !== "yes"){
        compID = "red"
    }

return(
<div className="MyProjects">
   <ProjNav />
   <div className="project-info">
      <Grid>
         <Row className="show-grid">
            <Col style={{"marginTop": "8%"}} md={6} mdPush={6}>
            <p>{props.hours}</p>
            <p>{props.rate}</p>
            </Col>
            <Col style={{"textAlign": "left"}} md={6} mdPull={6}>
            <h2>{props.project_name}</h2>
            <h5>{props.applicants} | {props.date}</h5>
            <a>View full listing</a>
            <p> {props.description}</p>
            <p> {props.skills} </p>
            <p id={paidID}> Invoice Not Received <button hidden={received}>Request Invoice</button></p>
            <p id={compID}> Project Completed </p>
            <p>Icon and name of person(s) who completed project</p>
            </Col>
         </Row>
      </Grid>
   </div>
</div>
  )
}


export default MyProjects;
