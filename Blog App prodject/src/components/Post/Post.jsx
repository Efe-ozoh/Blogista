import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import * as bodyTypes from '../../store/actions/body';
import Spinner from '../UI/Spinner/Spinner';
import './Post.css'



const FullPost = props => {
  const {id} = useParams()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  


  
  useEffect(() => {
    
    axios.get(`https://blogista-b03e9-default-rtdb.firebaseio.com/UserPost/${id}.json`)
    .then(response => {
      setTitle(response.data.title)
      setContent(response.data.content)
    }
    ).catch(err => props.error(err.message))
  
  }, [])


  let post = title ? <div><h2>{title}</h2>
      <p>{content}</p></div> : <Spinner className='Spinner'>Please wait</Spinner>


  return (
        <div style={props.darkMode ? {color: 'gold'} : null} className='Post'>
          {post}
            
       </div>
    )
}

const mapStateToProps = state => {
  return {
    post: state.body.fullPost,
    darkMode: state.body.darkMode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    error: (data) => dispatch(bodyTypes.Failed(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (FullPost);