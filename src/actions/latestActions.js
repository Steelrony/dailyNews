import { GET_LATESTS, GET_SELECTED_NEWS, CLEAR_SELECTED_NEWS } from './types';
import axios from 'axios';

const URL = "http://localhost:3004";

export const getLatests = () => async dispatch => {
    const res = await axios.get(`${URL}/articles/?_order=desc&_end=3`);
    dispatch({
        type: GET_LATESTS,
        payload: res.data
    });
}

export const getSelectedNews = (id) => async dispatch => {
    const res = await axios.get(`${URL}/articles/?id=${id}`);
    dispatch({
        type: GET_SELECTED_NEWS,
        payload: res.data
    })
}

export const clearSelectedNews = () => async dispatch => {
    dispatch({
        type: CLEAR_SELECTED_NEWS,
        payload: []
    })
}