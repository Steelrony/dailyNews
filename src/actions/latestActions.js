import { GET_LATESTS } from './types';
import axios from 'axios';

const URL = "http://localhost:3004";

export const getLatests = () => async dispatch => {
    const res = await axios.get(`${URL}/articles/?_order=desc&_end=3`);
    console.log('actions', res.data)
    dispatch({
        type: GET_LATESTS,
        payload: res.data
    });
}
