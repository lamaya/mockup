import React, { Component } from 'react';
import ProjNav from './ProjNav';
import Completed from './Completed';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Modal, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col, Thumbnail } from 'react-bootstrap';


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
            <a href="" target="_blank">View full listing</a>

            <h5>
            <Applicants />
            <a style={{"textDecoration":"underline"}} href="#">{props.applicants} Applicants </a>| {props.date}</h5>
            <p> {props.description}</p>
            <h4 style={{paddingTop: "5%"}}> {props.skills} </h4>
            <div >
            {props.completed ? <NotCompleted /> : <Completed />}
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
class Applicants extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }
  render() {
    const thumbnailInstance = (
  <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="laura-pic.png" alt="242x200">
        <h5>Laura Amaya</h5>
        <p>Developer</p>
        <p>
          <Button style={{
            position: "absolute",
            left: "130%",
            top: "28%",
          }} bsStyle="primary" bsSize="small">View Profile</Button>
        </p>
      </Thumbnail>
    </Col>

    </Row>
  </Grid>
  )
    return (
      <div>
        <a onClick={ ()=> this.setState({ open: !this.state.open })}>
          View All Applicants
        </a>
        <Collapse in={this.state.open}>
          <div>
            <Well>
            {thumbnailInstance}
            </Well>
           <Well>
            {thumbnailInstance}

            </Well>
          </div>

        </Collapse>
      </div>
    );
  }
}
class NotCompleted extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
      status: "Project Not Completed",
     }
    this.onCheck = this.onCheck.bind(this)
  }
  onCheck() {
  this.setState({
    disable: true,
    status: "Project Completed",
     });
}
 render(){
  var disable = this.state.disable
  var status = this.state.status
    return (
      <div>
        <div id="">
          <input onChange={this.onCheck} type="checkbox" disabled={disable}/>
           {status}
          </div>
      </div>
     );
  }
}

class RequestInvoice extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      request: "Request Invoice",
      disable: false,
      status: "No invoices have been received",
     }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  close() {
    this.setState({
      showModal: false,
      request: "Invoice Request Submitted",
      disable: true,
      status: "Invoice pending",
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
    var status = this.state.status
    return (
      <div>
        <p>{status}</p>

        <Button disabled={disable}
          bsStyle="danger"
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
