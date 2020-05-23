
import {
    API_CALL_REQUEST
} from './types';

export const loginAction = (data) => {
    return{
        type:API_CALL_REQUEST,
        payload: data

    }
}