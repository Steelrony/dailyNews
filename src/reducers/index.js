import { combineReducers } from 'redux';
import latestReducer from './latestReducer';
import otherReducer from './otherReducer';

export default combineReducers({
    latest: latestReducer,
    other: otherReducer
});