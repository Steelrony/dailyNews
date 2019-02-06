import { GET_LATESTS, DELETE_LATEST, ADD_LATEST } from './types';
import axios from 'axios';

export const getLatests = () => async dispatch => {
    const res = await axios.get('http://localhost:3004/articles');
    dispatch({
        type: GET_LATESTS,
        payload: res.data
    });
}

export const deleteLatest = (id) => async dispatch => {
    await axios.delete('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: DELETE_LATEST,
        payload: id
    });
}

export const addLatest = (latest) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: ADD_LATEST,
        payload: res.data
    });
}

