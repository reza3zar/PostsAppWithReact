import   '../style/homePage.css'
import toastr from 'toastr'

 
import React, { Component } from 'react';

class HomePage extends Component{
     constructor(){
       super()
      toastr.success('Welcome to my blog!');
     }
  render(){
    return (
      <div className="hero">
      <div className="hero__content">
        <h1>HomePage.</h1>
      </div>
    </div>
    )
  };
    
}

export default HomePage;