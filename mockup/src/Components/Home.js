import React, { Component } from 'react';
import organizations from '../organizations';
import NavBar from './NavBar';
import MyProjects from './MyProjects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';

class Home extends Component {
constructor(){
  super();
  this.state = {
    all_data: [],
    name: [],
    info: [],
    projects: [],
    label: [],
    i: 0,
  }
}
componentDidMount(){
  let i = this.state.i
    this.setState({
      all_data: organizations[i],
      name: organizations[i].project_name,
      info: organizations[i].text,
      projects: organizations[i].projects[i],
      label: organizations[i].projects[i].label,
      })
  }
  render() {
    let all_proj_data = this.state.all_data
    let title = this.state.name
    let info = this.state.info
    let label = this.state.label
    const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
     <Tab eventKey={1} title="My Projects"><MyProjects namee={label} /></Tab>
      <Tab eventKey={2} title="Manage Applicants">Manage Applicants</Tab>
      <Tab eventKey={3} title="Invoice Center" >Invoice Center</Tab>
    </Tabs>
);
    return (
      <div className="Home">
      <section>
        <div className="project-header">
          <h1>{title}</h1>
          <h1>{info}</h1>
         </div>
         <div className="tabs">
          {tabsInstance}
         </div>
      </section>
      </div>
    );
  }
}
export default Home ;
