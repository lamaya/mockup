import React, { Component } from 'react';

function MyProjects(props){
  const label = props.title;
  // same as:
  // const {to, label} = props.details;

return(
  <div>
    <h4>hi {props.namee}</h4>
  </div>)

}

export default MyProjects;
