import {all, fork, call, put, take, takeEvery, takeLatest, throttle, delay} from "redux-saga/effects"
import axios from "axios";


function addPostAPI(data){
    return axios.post("/api/addpost", data);
}

function* addPost(action){
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
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

function* watchAddPost(){
    yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* postSaga(){

    yield all([
        fork(watchAddPost),
    ])
}