import { combineReducers } from 'redux';
import latestReducer from './latestReducer';
import otherReducer from './otherReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
    latest: latestReducer,
    other: otherReducer,
    gallery: galleryReducer
});