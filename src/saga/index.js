import {all, takeLatest} from 'redux-saga/effects';
import {
    loginAction
} from './sagas';
 import * as types from '../actions/types'


function* watchLoginAction(){
    yield takeLatest(types.API_CALL_REQUEST, loginAction)
}

function* rootSaga() {
    yield all(
        [
            watchLoginAction()
        ]
    )
}

export default rootSaga;