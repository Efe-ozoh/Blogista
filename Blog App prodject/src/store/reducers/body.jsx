import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from './utility/utility';

const initialState = {
    posts: null,
    fullPost: null,
    darkMode: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POSTS:
            return { 
                ...state,
            posts: action.posts
            }
        case actionTypes.FAILEDREQUEST:
            return {
                ...state,
                error: action.errorData
            }
        case actionTypes.CLEARERROR:
            return {
                ...state,
                error: null
            }
        case actionTypes.FULLPOST:
            return {
                ...state,
                fullPost: action.post
            }
        case actionTypes.DARKMODE:
            return {
                ...state,
                darkMode: action.darkMode
            }
            
           
        default: return state;
    }

};

export default reducer;