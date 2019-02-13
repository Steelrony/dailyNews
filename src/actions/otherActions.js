import { GET_OTHER } from './types';
import axios from 'axios';


const URL = "http://localhost:3004";

export const getOthers = () => async dispatch => {
    const res =  await axios.get(`${URL}/articles/?_order=desc&_start=3&_end=10`);
    dispatch({
        type: GET_OTHER,
        payload: res.data
    });
}