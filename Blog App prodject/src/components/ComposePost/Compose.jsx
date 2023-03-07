import React, {useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './Compose.css'
import * as bodyTypes from '../../store/actions/body';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';

const Compose = props => {

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postError, setPostError] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  const postHandler = (event) => {
    event.preventDefault()
    const postData = {
      title: postTitle,
      content: postContent
    };
    if(postData.title && postData.content){
      setIsLoading(true)
      axios.post('https://blogista-b03e9-default-rtdb.firebaseio.com//UserPost.json', postData)
    .then(response => {
      setIsLoading(false)
       props.history.push('/')
    })
    .catch(error => {
      setIsLoading(false)
      props.failed(error.message)
    })
    }else{
       setPostError('Please input Title and Content')
    }
    
  };


  

    return (
      <div className='Compose'>
       
        <form className='inputs'>
          <h3 className='inputError'>{postError}</h3>

          
            {/* title input */}
            <div className='InputItem inputTitle'>
               <b className='DesktopText'>Title:   </b>
                <b className='MobileText'>Title</b>
               <input 
               onChange={event => {
                const title = event.target.value;
                setPostTitle(title)

               }}
               className='title'
                type="text" 
                placeholder='Title' />
             </div>

             {/* content input */}
             <div className='InputItem'>
               <b className='DesktopText'>Compose:   </b>
               <b className='MobileText'>Compose</b>
               <textarea 
               onChange={event => {
                const content = event.target.value;
                setPostContent(content)

               }}
               type="text"
               className='content'  
               name="content" 
               placeholder="write your post"
               cols="30" rows="10"></textarea>
            </div>


            {/* loading button */} 
            <div className='button'>
            {!isLoading ? <Button clicked={postHandler } >POST</Button> : <Spinner></Spinner>}
            </div>
            
        </form>
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
      failed: (error) => dispatch(bodyTypes.Failed(error))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Compose);