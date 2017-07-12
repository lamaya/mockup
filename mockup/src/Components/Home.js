import React, { Component } from 'react';
import projects from '../projects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';



class Home extends Component {
constructor(){
  super();
  this.state = {
    all_data: [],
    name: [],
    info: [],
    i: 0,
  }
}
componentDidMount(){
  let i = this.state.i
    this.setState({
      all_data: projects[i],
      name: projects[i].project_name,
      info: projects[i].text,
      })
  }

  render() {
    let title = this.state.name
    let info = this.state.info
    const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
     <Tab eventKey={1} title="My Projects">Tab 1 content</Tab>
      <Tab eventKey={2} title="Manage Applicants">Tab 2 content</Tab>
      <Tab eventKey={3} title="Invoice Center" >Tab 3 content</Tab>
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
