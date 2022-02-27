import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";
import { ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST } from "../reducers/post";


function addPostAPI(data){
    return axios.post("/api/addpost", data);
}

function addCommentAPI(data){
    return axios.post("/api/addpost", data);
}

function* addPost(action){
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type : ADD_POST_SUCCESS,
            //data : result.data,
            data : action.data,
        });
    } catch (err) {
        yield put({
            type : ADD_POST_FAILURE,
            error : err.response.data,
        });
    }
}

function* addComment(action){
    try {
        //const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type : ADD_COMMENT_SUCCESS,
            //data : result.data,
            data : action.data,
        });
    } catch (err) {
        yield put({
            type : ADD_COMMENT_FAILURE,
            error : err.response.data,
        });
    }
}

function* watchAddPost(){
    yield takeEvery(ADD_POST_REQUEST, addPost);
}

function* watchAddComment(){
    yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga(){

    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ])
}