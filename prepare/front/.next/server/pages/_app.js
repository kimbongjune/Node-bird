module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\nodeBird\\prepare\\front\\pages\\_app.js";







const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

App.prototype = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "kim"
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "kim"
  }
});

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(V => V.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = {...state.mainPosts[postIndex]};
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return{
          //     ...state,
          //     mainPosts,
          //     addCommentLoading : false,
          //     addCommentDone : true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  followLoading: false,
  followDone: false,
  followError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
    data
  };
};

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: "kim",
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: "kim"
  }, {
    nickname: "lee"
  }, {
    nickname: "park"
  }],
  Followers: [{
    nickname: "kim"
  }, {
    nickname: "lee"
  }, {
    nickname: "park"
  }]
});

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unFollowLoading = true;
        draft.unFollowDone = false;
        draft.unFollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unFollowLoading = false;
        draft.unFollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unFollowLoading = false;
        draft.unFollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.me = null;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me = null;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3060"; //take는 한번 실행되면 사라짐
//takeEvery는 while(true)와 동일함 여러번의 이벤트가 동시에 실행(더블클릭)되면 이벤트를 입력받은 만큼 실행
//takeLatest는 여러번의 이벤트가 동시에 실행 되어도 마지막에 발생한 이벤트 한번만 실행 서버로 요청은 여러번 가지만 응답을 한번만 받음 새로고침하면 서버에는 두번의 요청이 들어갔기 때문에 서버에서 
//반영을 해줘야한다.
//throttle은 시간을 줘서 이벤트를 제어한다. 

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);








function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/addpost", data);
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/loadpost", data);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/removepost", data);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/addcomment", data);
}

function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      //data : result.data,
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadPost(action) {
  try {
    //const result = yield call(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      //data : result.data,
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* removePost(action) {
  try {
    //const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      //data : result.data,
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    //const result = yield call(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      //data : result.data,
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/logout");
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/follow", data);
}

function* follow(action) {
  try {
    //const result = yield call(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/unFollow", data);
}

function* unFollow(action) {
  try {
    //const result = yield call(unFollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      //data : result.data,
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleWare = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middleWares = [sagaMiddleWare, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middleWares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleWare.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvdG90eXBlIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIlYiLCJwb3N0SWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dEb25lIiwidW5Gb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInB1c2giLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwibG9hZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwiYWRkQ29tbWVudEFQSSIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJsb2FkUG9zdCIsInJlbW92ZVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlRXZlcnkiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsInJlc3VsdCIsImNhbGwiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJjb25zb2xlIiwibG9nIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxlV2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxlV2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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Q1osY0FBRCxFQUFpQjtBQUMxQ2EsT0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllekwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50fSkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCc+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvdG90eXBlID17XHJcbiAgICBDb21wb25lbnQgOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXggOihzdGF0ZSA9IHt9LCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW10sXHJcbiAgICBpbWFnZVBhdGhzIDpbXSxcclxuICAgIGhhc01vcmVQb3N0IDogdHJ1ZSxcclxuICAgIGxvYWRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9Pih7XHJcbiAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXIgOntcclxuICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZSA6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmMgOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50cyA6IFt7XHJcbiAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWUgOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPShkYXRhKSA9PiAoe1xyXG4gICAgaWQgOiBkYXRhLmlkLFxyXG4gICAgY29udGVudCA6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXIgOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzIDogW10sXHJcbiAgICBDb21tZW50cyA6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQgOiBkYXRhLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbVwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKFYpID0+IFYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZm9sbG93TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3IgOiBudWxsLFxyXG4gICAgdW5Gb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1bkZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICAgIHVuRm9sbG93RXJyb3IgOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3IgOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZSA6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3IgOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmUgOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YSA6IHt9LFxyXG4gICAgbG9naW5EYXRhIDoge30sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9KGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlIDogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0oKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+KHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZSA6IFwia2ltXCIsXHJcbiAgICBpZCA6IDEsXHJcbiAgICBQb3N0cyA6IFt7aWQgOiAxfV0sXHJcbiAgICBGb2xsb3dpbmdzIDogW3tuaWNrbmFtZSA6IFwia2ltXCJ9LHtuaWNrbmFtZSA6IFwibGVlXCJ9LHtuaWNrbmFtZSA6IFwicGFya1wifV0sXHJcbiAgICBGb2xsb3dlcnMgOiBbe25pY2tuYW1lIDogXCJraW1cIn0se25pY2tuYW1lIDogXCJsZWVcIn0se25pY2tuYW1lIDogXCJwYXJrXCJ9XSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIGRlbGF5fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2MFwiO1xyXG5cclxuXHJcblxyXG4vL3Rha2XripQg7ZWc67KIIOyLpO2WieuQmOuptCDsgqzrnbzsp5BcclxuLy90YWtlRXZlcnnripQgd2hpbGUodHJ1ZSnsmYAg64+Z7J287ZWoIOyXrOufrOuyiOydmCDsnbTrsqTtirjqsIAg64+Z7Iuc7JeQIOyLpO2WiSjrjZTruJTtgbTrpq0p65CY66m0IOydtOuypO2KuOulvCDsnoXroKXrsJvsnYAg66eM7YG8IOyLpO2WiVxyXG4vL3Rha2VMYXRlc3TripQg7Jes65+s67KI7J2YIOydtOuypO2KuOqwgCDrj5nsi5zsl5Ag7Iuk7ZaJIOuQmOyWtOuPhCDrp4jsp4Drp4nsl5Ag67Cc7IOd7ZWcIOydtOuypO2KuCDtlZzrsojrp4wg7Iuk7ZaJIOyEnOuyhOuhnCDsmpTssq3snYAg7Jes65+s67KIIOqwgOyngOunjCDsnZHri7XsnYQg7ZWc67KI66eMIOuwm+ydjCDsg4jroZzqs6DsuajtlZjrqbQg7ISc67KE7JeQ64qUIOuRkOuyiOydmCDsmpTssq3snbQg65Ok7Ja06rCU6riwIOuVjOusuOyXkCDshJzrsoTsl5DshJwgXHJcbi8v67CY7JiB7J2EIO2VtOykmOyVvO2VnOuLpC5cclxuLy90aHJvdHRsZeydgCDsi5zqsITsnYQg7KSY7IScIOydtOuypO2KuOulvCDsoJzslrTtlZzri6QuIFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHthbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZSwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgZGVsYXl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIGdlbmVyYXRlRHVtbXlQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9GQUlMVVJFIH0gZnJvbSAnLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvYWRkcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9hZHBvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcmVtb3ZlcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvYWRkY29tbWVudFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy9kYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBpZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvL2RhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgZGF0YSA6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy9kYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvL2RhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlLCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIHRocm90dGxlLCBkZWxheX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBMT0dfSU5fRkFJTFVSRSwgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUgfSBmcm9tICcuLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvZm9sbG93XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5Gb2xsb3dcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bkZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy9kYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PihuZXh0KSA9PiAoYWN0aW9uKSA9PntcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+e1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZVdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxlV2FyZXMgPSBbc2FnYU1pZGRsZVdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxlV2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGVXYXJlcykpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGVXYXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==