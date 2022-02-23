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
        //const result = yield call(logOutAPI);
        yield delay(1000);
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

//take는 한번 실행되면 사라짐
//takeEvery는 while(true)와 동일함 여러번의 이벤트가 동시에 실행(더블클릭)되면 이벤트를 입력받은 만큼 실행
//takeLatest는 여러번의 이벤트가 동시에 실행 되어도 마지막에 발생한 이벤트 한번만 실행 서버로 요청은 여러번 가지만 응답을 한번만 받음 새로고침하면 서버에는 두번의 요청이 들어갔기 때문에 서버에서 
//반영을 해줘야한다.
//throttle은 시간을 줘서 이벤트를 제어한다. 

function* watchLogin(){
    yield takeEvery("LOG_IN_REQUEST", logIn);
}

function* watchLogout(){
    yield takeEvery("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost(){
    yield takeEvery("ADD_POST_REQUEST", addPost);
}


export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ])
}