import React, { Component } from 'react';
import ProjNav from './ProjNav';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Modal, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col } from 'react-bootstrap';


function MyProjects(props){
    var paid = props.paid
    var completed = props.completed
    var paidID = "";
    var compID = "";
    var received = "";
    var submit = !props.paid ? "" : "Request An Invoice";
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
  <div className="t">
   </div>
   <div className="project-info">
      <Grid>
         <Row className="show-grid">

            <Col style={{"marginTop": "8%"}} md={6} mdPush={6}>
            <Row className="show-grid">
            <Col md={6}>
            <h5 style={{"fontSize":"16px", "textTransform": "uppercase"}}>Total Hours <br/></h5>
            <h2>{props.hours}</h2>
            </Col>
            <Col md={6}>
            <h5 style={{"fontSize":"16px", "textTransform": "uppercase"}}>Flat Rate <br/></h5>
            <h2>{props.rate}</h2>
            </Col>
            </Row>
            </Col>
            <Col style={{"textAlign": "left"}} md={6} mdPull={6}>
            <h2>{props.project_name}</h2>
            <a >View full listing</a>

            <h5><a style={{"textDecoration":"underline"}} href="#">{props.applicants} Applicants </a>| {props.date}</h5>
            <p> {props.description}</p>
            <h4 style={{paddingTop: "5%"}}> {props.skills} </h4>
            <div id={compID}><img style={{"width":"5%"}} src="yes.svg"/>
            <p> Project Completed </p>
            </div>
            <div >
            {props.paid ? "An invoice has been submitted - click to view" : <RequestInvoice/>}
            </div>

            <p> Completed by: Name of Person</p>
            </Col>
         </Row>
      </Grid>
   </div>
</div>
  )
}
class Request extends Component {

  constructor() {
    super();
    this.state = {
      request: "request"
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(){

    // this.setState({
    //     request: "submitted"
    //   });
  }
  render(){
   var request = this.state.request
    return(
    <div className="inv">
      No invoice has been submitted -
      <button onClick={this.handleClick}>click</button>
      </div>
      )
  }
}

class RequestInvoice extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      request: "Request Invoice",
      disable: false
     }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  close() {
    this.setState({
      showModal: false,
      request: "Invoice Request Submitted",
      disable: true
       });
  }
  open(){
    this.setState({
      showModal: true
    })
  }

  render() {
    var request = this.state.request
    var disable = this.state.disable
    return (
      <div>
        <p>No invoices have been received</p>

        <Button disabled={disable}
          bsStyle="primary"
          bsSize="medium"
          onClick={this.open}
        >
          {request}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title >Request Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Click submit to send the Ana the developer/designer a request</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default MyProjects;
