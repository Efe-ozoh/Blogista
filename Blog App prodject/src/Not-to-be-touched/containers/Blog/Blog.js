import React, { Component } from 'react';
import Posts from '../Posts/Posts';
// import NewPost from '../../components/NewPost/NewPost';
// import FullPost from "../FullPost/FullPost"
import {Route, NavLink, Switch, Redirect} from "react-router-dom";

// import FullPost from '../FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import asyncComponent from '../../components/hoc/asyncComponent';
import './Blog.css';

const asyncNewPost = asyncComponent(() => {
    return import('../../components/NewPost/NewPost')
});

class Blog extends Component {
    

    render () {
      
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts">Home</NavLink></li>
                            <li><NavLink to={{pathname: "/new-post"}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
             <Switch>
                 <Route path="/new-post" exact component={asyncNewPost} />
                 <Route path="/posts" component={Posts} /> 
                 <Redirect from="/" to="/posts"/>
                 <Route render={() => <h1>Page Not Found</h1>} />
                
            </Switch>
                    
                
                {/* <section>
                    <FullPost id={this.state.seletedPostID} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;