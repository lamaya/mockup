import React, { Component } from 'react';
import ProjNav from './ProjNav';
import { Nav, Navbar,NavItem,MenuItem,NavDropdown } from 'react-bootstrap';
import { tabsInstance, Modal, Tab, Tabs, Button, Well, Collapse, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Completed extends Component {
 render(){
    return (
      <div>
        <div id="">
        <img style={{"width":"5%"}} src="yes.svg"/>
           Project Completed
          </div>
      </div>
     );
  }
}

export default Completed;
