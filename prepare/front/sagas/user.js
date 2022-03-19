import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";
import { CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST, FOLLOW_FAILURE, FOLLOW_REQUEST, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_SUCCESS } from "../reducers/user";
import { UNFOLLOW_REQUEST, FOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_USER_SUCCESS, CHANGE_NICKNAME_SUCCESS, LOAD_FOLLOWINGS_REQUEST, REMOVE_FOLLOWER_SUCCESS } from './../reducers/user';


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
        console.error(err);
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
    return axios.patch(`/user/${data}/follow`);
}

function* follow(action){
    try {
        const result = yield call(followAPI, action.data);
        yield put({
            type : FOLLOW_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type : FOLLOW_FAILURE,
            error : err.response.data,
        });
    }
}

function unFollowAPI(data){
    return axios.delete(`/user/${data}/follow`);
}

function* unFollow(action){
    try {
        const result = yield call(unFollowAPI, action.data);
        yield put({
            type : UNFOLLOW_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        console.error(err);
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

function changeNicknameAPI(data){
    return axios.patch("/user/nickname",{nickname : data});
}

function* changeNickname(action){
    try {
        const result = yield call(changeNicknameAPI, action.data);
        yield put({
            type : CHANGE_NICKNAME_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : CHANGE_NICKNAME_FAILURE,
            error : err.response.data,
        });
    }
}

function followingsAPI(data){
    return axios.get("/user/followings", data);
}

function* followings(action){
    try {
        const result = yield call(followingsAPI, action.data);
        yield put({
            type : LOAD_FOLLOWINGS_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : LOAD_FOLLOWINGS_FAILURE,
            error : err.response.data,
        });
    }
}

function followersAPI(data){
    return axios.get("/user/followers", data);
}

function* followers(action){
    try {
        const result = yield call(followersAPI, action.data);
        yield put({
            type : LOAD_FOLLOWERS_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        yield put({
            type : LOAD_FOLLOWERS_FAILURE,
            error : err.response.data,
        });
    }
}

function removeFollowerAPI(data){
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action){
    try {
        const result = yield call(removeFollowerAPI, action.data);
        yield put({
            type : REMOVE_FOLLOWER_SUCCESS,
            data : result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type : REMOVE_FOLLOWER_FAILURE,
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

function* watchChangeNickname(){
    yield takeEvery(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchFollowings(){
    yield takeEvery(LOAD_FOLLOWINGS_REQUEST, followings);
}

function* watchFollowers(){
    yield takeEvery(LOAD_FOLLOWERS_REQUEST, followers);
}

function* watchRemoveFollower(){
    yield takeEvery(REMOVE_FOLLOWER_REQUEST, removeFollower);
}
export default function* userSaga(){

    yield all([
        fork(watchRemoveFollower),
        fork(watchFollowings),
        fork(watchFollowers),
        fork(watchChangeNickname),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
    ])
}