import React, { Component } from 'react';
import projects from '../projects';


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
    return (
      <div className="Home">
      <section>
      <div className="project-header">
      <h1>{title}</h1>
      <h1>{info}</h1>
      </div>
      </section>
      </div>
    );
  }
}
export default Home ;
