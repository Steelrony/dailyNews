import { combineReducers } from 'redux';
import latestReducer from './latestReducer';

export default combineReducers({
    latest: latestReducer
});