import * as actionTypes from "../actions/actionTypes"


const initialState = {
    posts: null
}

const reducer = (state = initialState, action) => {
switch  (action.type){
    case (actionTypes.POSTS):
        return {
           
            
        }
        
       

    default:
       return state
}
}

export default reducer