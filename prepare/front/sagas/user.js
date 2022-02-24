import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";


function logInAPI(data){
    return axios.post("/api/login", data);
}

function* logIn(action){
    try {
        //const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type : "LOG_IN_SUCCESS",
            //data : result.data,
            data : action.data,
        });
    } catch (error) {
        yield put({
            type : "LOG_IN_FAILURE",
            data : error.response.data,
        });
    }
}

function logOutAPI(){
    return axios.post("/api/logout");
}

function* logOut(){
    try {
        //const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type : "LOG_OUT_SUCCESS",
        });
    } catch (error) {
        yield put({
            type : "LOG_OUT_FAILURE",
            data : error.response.data,
        });
    }
}

function* watchLogin(){
    yield takeEvery("LOG_IN_REQUEST", logIn);
}

function* watchLogout(){
    yield takeEvery("LOG_OUT_REQUEST", logOut);
}
export default function* userSaga(){

    yield all([
        fork(watchLogin),
        fork(watchLogout),
    ])
}