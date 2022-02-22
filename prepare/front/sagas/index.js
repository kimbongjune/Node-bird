import {all, fork, call, put, take} from "redux-saga/effects"
import axios from "axios";

function logInAPI(data){
    return axios.post("/api/login", data);
}

function* logIn(action){
    try {
        const result = yield call(logInAPI, action.data);
        yield put({
            type : "LOG_IN_SUCCESS",
            data : result.data,
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
        const result = yield call(logOutAPI);
        yield put({
            type : "LOG_OUT_SUCCESS",
            data : result.data,
        });
    } catch (error) {
        yield put({
            type : "LOG_OUT_FAILURE",
            data : error.response.data,
        });
    }
}

function addPostAPI(data){
    return axios.post("/api/addpost", data);
}

function* addPost(action){
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type : "ADD_POST_SUCCESS",
            data : result.data,
        });
    } catch (error) {
        yield put({
            type : "ADD_POST_FAILURE",
            data : error.response.data,
        });
    }
}

function* watchLogin(){
    yield take("LOG_IN_REQUEST", logIn);
}

function* watchLogout(){
    yield take("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost(){
    yield take("ADD_POST_REQUEST", addPost);
}


export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ])
}