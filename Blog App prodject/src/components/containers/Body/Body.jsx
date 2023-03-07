import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as bodyTypes from '../../../store/actions/body';

import Card from '../../Card/Card';
import AddUI from './AddUI/AddUI';
import Spinner from '../../UI/Spinner/Spinner';
import DarkMode from '../../UI/DarkMode/DarkMode';
import './Body.css'

const Body = props => {
    
    useEffect(() =>{
       props.post()
    },[]);

    const posts = props.allPosts ? props.allPosts.map(posts => (
     <Card key={posts.id}
      id={posts.id}
       title={posts.title} 
       content={posts.content}/>
    )
     ) : props.error ?  null : <Spinner>Please wait...</Spinner>


    return (
        <div className='Body'>
            <DarkMode />
            <h2 className='PostLine'>Latests Posts</h2>
            <div className={props.allPosts ? 'Cards' : 'Spinner'}>
                 {posts}
        </div> 
         <AddUI />
        </div>
    )
};



const mapStateToProps = state => {
    return {
        allPosts: state.body.posts,
        error: state.body.error
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        post: () => dispatch(bodyTypes.getPost()),
        // postId: (id) => dispatch(bodyTypes.getFullPost(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);