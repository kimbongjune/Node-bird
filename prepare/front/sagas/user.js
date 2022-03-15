import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";
import { FOLLOW_FAILURE, FOLLOW_REQUEST, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_SUCCESS } from "../reducers/user";
import { UNFOLLOW_REQUEST, FOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_USER_SUCCESS } from './../reducers/user';


function logInAPI(data){
    return axios.post("/user/login", data);
}

function* logIn(action){
    try {
        const result = yield call(logInAPI, action.data);
        yield put({
            type : LOG_IN_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : LOG_IN_FAILURE,
            error : err.response.data,
        });
    }
}

function logOutAPI(){
    return axios.post("/user/logout");
}

function* logOut(){
    try {
        yield call(logOutAPI);
        yield put({
            type : LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type : LOG_OUT_FAILURE,
            error : err.response.data,
        });
    }
}

function signUpAPI(data){
    return axios.post("/user", data);
}

function* signUp(action){
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type : SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type : SIGN_UP_FAILURE,
            error : err.response.data,
        });
    }
}

function followAPI(data){
    return axios.post("/api/follow", data);
}

function* follow(action){
    try {
        //const result = yield call(followAPI, action.data);
        yield delay(1000);
        yield put({
            type : FOLLOW_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : FOLLOW_FAILURE,
            error : err.response.data,
        });
    }
}

function unFollowAPI(data){
    return axios.post("/api/unFollow", data);
}

function* unFollow(action){
    try {
        //const result = yield call(unFollowAPI, action.data);
        yield delay(1000);
        yield put({
            type : UNFOLLOW_SUCCESS,
            //data : result.data,
            data : action.data,
        });
    } catch (err) {
        yield put({
            type : UNFOLLOW_FAILURE,
            error : err.response.data,
        });
    }
}

function loadUserAPI(){
    return axios.get("/user");
}

function* loadUser(action){
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type : LOAD_USER_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : LOAD_USER_FAILURE,
            error : err.response.data,
        });
    }
}

function* watchLoadUser(){
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function* watchFollow(){
    yield takeEvery(FOLLOW_REQUEST, follow);
}

function* watchUnFollow(){
    yield takeEvery(UNFOLLOW_REQUEST, unFollow);
}

function* watchLogin(){
    yield takeEvery(LOG_IN_REQUEST, logIn);
}

function* watchLogout(){
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga(){

    yield all([
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
    ])
}