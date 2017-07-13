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
            {props.date}<Applicants /> </h5>
            <p> {props.description}</p>
            <h4 style={{paddingTop: "5%"}}> {props.skills} </h4>
            <div >
            {props.completed ? <CheckCompleted/> : <Completed />}
            </div>
            <div >
            {props.paid ? (<div>
            <Button disabled={true}
              bsStyle="success"
              bsSize="medium"
              >
              An invoice has been received
              </Button>
              <ViewInvoice />
              </div> ): <RequestInvoice/>}
            </div>
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
        <a style={{"textDecoration": "underline"}} onClick={ ()=> this.setState({ open: !this.state.open })}>
          (2) Applicants
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
class CheckCompleted extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
     }
    this.onCheck = this.onCheck.bind(this)
  }
  onCheck(e) {
  this.setState({
    checked: e.target.checked,
     });
}
 render(){
  var checked = this.state.checked
    return (
      <div>
      <div className="control-group">
        <label className="control control-checkbox">
            {checked ? "Project Completed" : "Project Not Yet Completed" }
        <input type="checkbox" checked={checked} onChange={this.onCheck} />
        <div className="control_indicator"></div>
        </label>
      </div>
    </div>
     );
  }
}
class ViewInvoice extends Component {
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
       });
   }
  open(){
    this.setState({
      showModal: true
    })
  }
  render() {
    return (
      <div>
        <a onClick={this.open}>view invoice</a>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Invoice For Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Invoice for this project</h4>
            <img style={{"width":"95%"}} src="invoice.png"/>
          </Modal.Body>
          <Modal.Footer>
            <a onClick={this.close}>View All Invoices</a>
          </Modal.Footer>
        </Modal>
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
    this.hide = this.hide.bind(this)
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
  hide() {
  this.setState({
    showModal: false,
     });
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
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title >Request Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Click submit to send the Laura the developer/designer a request</h4>
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
