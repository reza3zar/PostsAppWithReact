
import React, { Component } from 'react';
import PostItem from './Post'
import Loader from "../common/Loader";
import Api from "../../service/Post.service"
import { LOAD_POSTS_LOADING } from '../../actions/Actions';
import toastr from 'toastr'
class PostCollection extends Component {
 
    constructor(props){
      super(props)
       this.state = {  postCollection:[], isLoading:false, error:undefined };
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      };

      error=undefined;
  
    async componentDidMount() {
        this.setState({ postCollection:[],  isLoading:true });
        await this.sleep(2000);
 
        const response = await Api.getPosts()
        .then(response => response.json()).catch(err=>{
          toastr.error(err);

            this.setState({ postCollection:[],  isLoading:false,error:err });

        })
         this.setState({ postCollection:response,  isLoading:false });
    }

      mapDispatchToProps = dispatch => {
        return {
          refresh: () => dispatch(      
            innerDispatch => innerDispatch({ type: LOAD_POSTS_LOADING })      
          ),
        }
      };

      

    render() {
        if(this.state.error) return (<h1 className='error'>Load data has error, please try again!</h1>);
        if (this.state.isLoading) return <Loader />;
        return (
            
        <div className="container spaceTop">
             <div className="row  "  >
                {this.state.postCollection.map((post, index) => (
                <PostItem  key={index} postItem={post}  ></PostItem>
                ))}
            </div>
        </div>
        
        );
    }

  }

    export default PostCollection;