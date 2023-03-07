import React from 'react';
import { Route} from 'react-router-dom';

import Layout from '../Layout/Layout'
import FullPost from '../../Post/Post';
import Compose from '../../ComposePost/Compose';
import './Blog.css'
import Body from '../Body/Body';



const Blog = () => {

    return (
        <Layout>
            <Route exact path='/' component={Body} />
            <Route path='/full-post/:id' component={FullPost} />
            <Route path='/add-post' component={Compose} />
        </Layout>
    )

};

export default Blog;