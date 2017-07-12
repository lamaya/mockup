import React, { Component } from 'react';
import organizations from '../organizations';
import NavBar from './NavBar';
import MyProjects from './MyProjects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';

class Home extends Component {
constructor(){
  super();
  this.state = {
    organizations: organizations,
    all_data: [],
    i: 0,
  }
}
componentDidMount(){
  let i = this.state.i
    this.setState({
      all_data: organizations[i],
      title: organizations[i].projects[i].title,
      })
  }
  render() {
    let i = this.state.i
    let data = this.state.all_data
    const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
     <Tab eventKey={1} title="My Projects">
      <MyProjects project_name={data.text} /></Tab>
      <Tab eventKey={2} title="Manage Applicants">Manage Applicants</Tab>
      <Tab eventKey={3} title="Invoice Center" >Invoice Center</Tab>
    </Tabs>
);
    return (
      <div className="Home">
      <section>
        <div className="project-header">
         </div>
         <div className="tabs">
          {tabsInstance}
          {data.project_name}
         </div>
      </section>
      </div>
    );
  }
}
export default Home ;
