import { all, takeLatest, put } from 'redux-saga/effects';
import * as types from "../actions/types";
import {getFormDataFromObject} from '../common/formData'


const callApis = async (action) => {
    console.log("action::--",action);
    try {
        let data = getFormDataFromObject(action.payload)
         let response = await  fetch(action.type, { method: 'POST', body: data})
         let responseJson = await response.json();
         console.log("responseJson::--",responseJson);

         return responseJson;
    } catch (error) {
        console.log(error)
    }
}


export function* loginAction(action) {
    try {
        const data = yield callApis(action);
        yield put({ type: types.API_CALL_SUCCESS, payload: data })
    } catch (error) {
        alert("Server Error")
        yield put({ type: types.API_CALL_FAILURE })
    }
}


