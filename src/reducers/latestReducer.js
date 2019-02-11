import { GET_LATESTS } from '../actions/types';

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
    
  }    
}

