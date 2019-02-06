import { GET_LATESTS, DELETE_LATEST, ADD_LATEST } from '../actions/types';

const initialState = {
    latests: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_LATESTS:
    return{
        ...state,
        latests: action.payload
    };
    default:
    return state;
    // case DELETE_LATEST:
    // return{
    //     ...state
    // }
  }
    
    
}