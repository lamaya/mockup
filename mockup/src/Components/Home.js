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
    active: "",
    activee: "active",
    activeTab: 1,
  }
  this.handleA = this.handleA.bind(this)
}
componentDidMount(){
  let i = this.state.i
    this.setState({
      data: organizations,
      all_data: organizations[i],
      tab: 3,
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
  handleA(){
    this.setState({
      active: "active",
      activee: "",
      activeTab: 3,
      })
    console.log("Sda")
  }
  render() {
    let i = this.state.i
    let data = this.state.all_data
    let projects = this.state.projs
    let projects2 = this.state.proj2
    const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
     <Tab eventKey={1} className={this.state.activee} title="My Projects">
     <ProjNav />
      <MyProjects project_name={projects.title} applicants={projects.applicants} date={projects.date} rate={projects.rate} skills={projects.skills} description={projects.description} hours={projects.hours} paid={projects.paid} completed={projects.completed}  />
      <MyProjects project_name={projects2.title} applicants={projects2.applicants} date={projects2.date} rate={projects2.rate} skills={projects2.skills} description={projects2.description} hours={projects2.hours} paid={projects2.paid} completed={projects2.completed} />
      </Tab>
      <Tab eventKey={2} title="Manage Applicants"><section className="manage-applicants"></section></Tab>
      <Tab eventKey={3} title="Invoice Center"><section className="manage-applicants"></section>
      </Tab>
    </Tabs>
);
    return (
      <div className="Home">
      <section>
        <div className="project-header">
        <img id="logo" src="projOrphas.png"/>
        <div className="projHeader">
        <h1 style={{"textTransform": "uppercase"}}>{data.project_name}</h1>
        <h3>{data.text}</h3>
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

