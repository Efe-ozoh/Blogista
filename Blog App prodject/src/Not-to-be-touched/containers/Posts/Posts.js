import React, {Component} from "react";
import axios from '../../axios';
import { Route} from "react-router-dom";

import Post from '../../components/Post/Post';
import FullPost from "../FullPost/FullPost";
import "./Posts.css";

class Posts extends Component {
        state = {
            posts: [],
            seletedPostID: null,
            postError: false
        };

        componentDidMount(){
            axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                 return { ...post,
                    author: "Max"
                 }
                })
            this.setState({posts: updatedPost})
            }).catch(error => {
                this.setState({postError: true})
                // console.log(error);
            })
        };
    
       

        postSeletedHandler = (id) => {
            this.props.history.push({pathname: "/posts/" + id})
        };

    render(){
        let posts = <p style={{textAlign: "center"}}>Something went Wrong</p>
        if(!this.state.postError){
         posts = this.state.posts.map(post => {
             
            return  <Post title={post.title} 
                key={post.id}
            author={post.author}
             clicked={() => this.postSeletedHandler(post.id)} />
           
        });
        };

        return <div>
                <section className="Posts">
             {posts}
              </section>
            
              <Route path="/posts/:id" exact component={FullPost} />
            </div>
    }
};

export default Posts;