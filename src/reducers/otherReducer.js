import { GET_OTHER } from '../actions/types';

const initialState = {
    others: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_OTHER:
        return {
            ...state,
            others: action.payload
        }
        default:
        return state;
    }
}