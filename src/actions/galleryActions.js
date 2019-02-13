import { GET_GALLERY } from './types';
import axios from 'axios';

const URL = "http://localhost:3004";

export const getGallery = () => async dispatch => {
    const res = await axios.get(`${URL}/galleries/?_order=desc&_limit=2`);
    dispatch({
        type: GET_GALLERY,
        payload: res.data
    })
}