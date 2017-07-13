import React, { Component } from 'react';
import ProjNav from './ProjNav';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Modal, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Completed extends Component {
  constructor() {
    super();
    this.state = {
      checked: true,
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

export default Completed;
