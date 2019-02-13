import { GET_LATESTS, GET_SELECTED_NEWS, CLEAR_SELECTED_NEWS } from '../actions/types';

const initialState = {
    latests: [],
    selected: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_LATESTS:
    return{
        ...state,
        latests: action.payload
    };
    case GET_SELECTED_NEWS:
    return{
      ...state,
      selected: action.payload
    }
    case CLEAR_SELECTED_NEWS:
    return{
      ...state,
      selected: action.payload
    }
    default:
    return state;
    
  }    
}

