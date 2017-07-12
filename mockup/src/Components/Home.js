import React, { Component } from 'react';
import organizations from '../organizations';
import NavBar from './NavBar';
import ProjNav from './ProjNav';
import MyProjects from './MyProjects';
import { tabsInstance, Tab, Tabs } from 'react-bootstrap';

class Home extends Component {
constructor(){
  super();
  this.state = {
    data: [],
    all_orgs: [],
    all_data: [],
    projs: [],
    proj2: [],
    i: 0,
  }
}
componentDidMount(){
  let i = this.state.i
    this.setState({
      data: organizations,
      all_data: organizations[i],
      projs: organizations[i].projects[i],
      proj2: organizations[i].projects[1],
      })
  }

  renderAllProjects(){
    let dataa = this.state.all_data.projects
    dataa.map(function(choice,i){
      console.log(dataa[i])
    })
  }
  render() {
    let i = this.state.i
    let data = this.state.all_data
    let projects = this.state.projs
    let projects2 = this.state.proj2
    const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
     <Tab eventKey={1} title="My Projects">
     <ProjNav />
      <MyProjects project_name={projects.title} applicants={projects.applicants} date={projects.date} rate={projects.rate} skills={projects.skills} desciption={projects.desciption} hours={projects.hours} paid={projects.paid} completed={projects.completed}  />
      <MyProjects project_name={projects2.title} applicants={projects2.applicants} date={projects2.date} rate={projects2.rate} skills={projects2.skills} desciption={projects2.desciption} hours={projects2.hours} paid={projects2.paid} completed={projects2.completed}  />
      </Tab>
      <Tab eventKey={2} title="Manage Applicants">Manage Applicants</Tab>
      <Tab eventKey={3} title="Invoice Center" >Invoice Center</Tab>
    </Tabs>
);
    return (
      <div className="Home">
      <section>
        <div className="project-header">
        <img id="logo" src="projOrphas.png"/>
        <div className="projHeader">
        <h1>{data.project_name}</h1>
        <h2>{data.text}</h2>
        <button className="websiteBut">View Website</button>
        </div>
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
