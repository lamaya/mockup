import React, { Component } from 'react';

function MyProjects(props){
  const label = props.title;
  // same as:
  // const {to, label} = props.details;

return(
  <div>
    <h2>hi {props.namee}</h2>
    <h5>applicants(link) | Date</h5>
    <h5>View full listing (link)</h5>
    <p> project description </p>
    <p> Skills needed </p>

    <p> total hours</p>
    <p> Flat Rate</p>
    <p>project completed checkbox</p>
    <p>Icon and name of person(s) who completed project</p>
    <button>Request Invoice</button>

  </div>)

}

export default MyProjects;
