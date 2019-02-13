import { GET_GALLERY } from '../actions/types';


const initialState = {
    galleries: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_GALLERY:
        return {
            ...state,
            galleries: action.payload
        };
        default:
        return state;
    }
}
