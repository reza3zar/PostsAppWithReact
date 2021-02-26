 
import React, { Component } from 'react';

class Post extends Component{
     
  render(){
    return(
      <div className=" cardCustomize marginCard"   >
      <div className="card text-center">
      <div className="card-header">
      {this.props?.postItem?.title?.substring(0,20) ?this.props?.postItem?.title?.substring(0,20).toUpperCase():this.props?.postItem?.title.toUpperCase()}
      </div>
      <div className="card-body maxCardBody">
        <h5 className="card-title"></h5>
        <p className="card-text text-wrap">{this.props?.postItem?.body}</p>
      </div>
      <div className="card-footer text-muted">
        {Math.floor(Math.random() * Math.floor(4)) + 1} days ago
      </div>
    </div>
    </div>
 
    )
    
  }
}

export default Post;