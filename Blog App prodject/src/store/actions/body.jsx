import axios from 'axios';
import * as actionTypes from './actionTypes';


export const Post = (data) => {
    
    
    return {
        type: actionTypes.POSTS,
        posts: data

    }

};

export const FullPost = (data) => {
    console.log(data.content)
    return {
        type: actionTypes.FULLPOST,
        post: data
    }
}

export const Failed = errorData => {
    return {
        type: actionTypes.FAILEDREQUEST,
        errorData: errorData
    }
}

export const clearError = (data) => {
    return {
        type: actionTypes.CLEARERROR
    }
};

export const darkMode = (data) => {
    return {
        type: actionTypes.DARKMODE,
        darkMode: data
    }
};


export const getPost = () => {
    return dispatch => {
        axios.get('https://blogista-b03e9-default-rtdb.firebaseio.com//UserPost.json')
        .then(response => {
            // console.log(response.data)
            const responseData = []

            for(let key in response.data){
                responseData.push({
                    ...response.data[key],
                    id: key
                })
            }
            // console.log(responseData)
            dispatch(Post(responseData))
        })
        .catch(err => {
            // console.log(err.message)
            dispatch(Failed(err.message))
        })
    }
};


