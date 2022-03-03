import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";
import { ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, REMOVE_POST_SUCCESS, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, generateDummyPost } from "../reducers/post";
import { ADD_POST_TO_ME } from "../reducers/user";
import shortId from "shortid";
import { REMOVE_POST_REQUEST, REMOVE_POST_FAILURE } from './../reducers/post';
import { REMOVE_POST_OF_ME } from './../reducers/user';


function addPostAPI(data){
    return axios.post("/api/addpost", data);
}

function loadPostAPI(data){
    return axios.post("/api/loadpost", data);
}

function removePostAPI(data){
    return axios.post("/api/removepost", data);
}


function addCommentAPI(data){
    return axios.post("/api/addcomment", data);
}

function* addPost(action){
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type : ADD_POST_SUCCESS,
            //data : result.data,
            data : {
                id,
                content : action.data,
            },
        });
        yield put({
            type : ADD_POST_TO_ME,
            data : id,
        });
    } catch (err) {
        yield put({
            type : ADD_POST_FAILURE,
            error : err.response.data,
        });
    }
}

function* loadPost(action){
    try {
        //const result = yield call(loadPostAPI, action.data);
        yield delay(1000);
        yield put({
            type : LOAD_POST_SUCCESS,
            //data : result.data,
            data : generateDummyPost(10),
        });
    } catch (err) {
        yield put({
            type : LOAD_POST_FAILURE,
            error : err.response.data,
        });
    }
}

function* removePost(action){
    try {
        //const result = yield call(removePostAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type : REMOVE_POST_SUCCESS,
            //data : result.data,
            data : action.data,
        });
        yield put({
            type : REMOVE_POST_OF_ME,
            data : action.data,
        });
    } catch (err) {
        yield put({
            type : REMOVE_POST_FAILURE,
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

function* watchLoadPost(){
    yield takeEvery(LOAD_POST_REQUEST, loadPost);
}


function* watchRemovePost(){
    yield takeEvery(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment(){
    yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga(){

    yield all([
        fork(watchAddPost),
        fork(watchLoadPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}