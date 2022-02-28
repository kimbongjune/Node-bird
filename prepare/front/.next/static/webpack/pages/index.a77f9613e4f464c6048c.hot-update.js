webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "kim"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: "https://scribemedia.com/wp-content/uploads/2018/11/0-Should-You-Write-a-Book-700x406.jpg"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: "ree"
      },
      content: "123123123123"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: "park"
      },
      content: "content"
    }]
  }],
  imagePaths: [],
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
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "kim"
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "kim"
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return {
        addPostLoading: false,
        addPostError: action.error
      };

    case REMOVE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: true,
        removePostDone: false,
        removePostError: null
      });

    case REMOVE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        removePostLoading: false,
        removePostDone: true
      });

    case REMOVE_POST_FAILURE:
      return {
        removePostLoading: false,
        removePostError: action.error
      };

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      {
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });

        var post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: mainPosts,
          addCommentLoading: false,
          addCommentDone: true
        });
      }

    case ADD_COMMENT_FAILURE:
      return {
        addCommentLoading: false,
        addCommentError: action.error
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUMsQ0FETTtBQUVUQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFDLENBREQ7QUFFRkUsY0FBUSxFQUFDO0FBRlAsS0FGRztBQU1UQyxXQUFPLEVBQUMsdUJBTkM7QUFPVEMsVUFBTSxFQUFHLENBQ0w7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QWUsRUFBRztBQUp0Qjs7QUFNSixTQUFLUSxtQkFBTDtBQUF5QjtBQUNyQixZQUFNWSxTQUFTLEdBQUdILEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0J3QyxTQUFoQixDQUEwQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBU29DLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZWSxNQUE1QjtBQUFBLFNBQTFCLENBQWxCOztBQUNBLFlBQU1DLElBQUkscUJBQU9QLEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0J1QyxTQUFoQixDQUFQLENBQVY7O0FBQ0FJLFlBQUksQ0FBQ2xDLFFBQUwsSUFBaUJ5QixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZMUIsT0FBYixDQUE3QixzR0FBdUR1QyxJQUFJLENBQUNsQyxRQUE1RDs7QUFDQSxZQUFNVCxTQUFTLEdBQUcsNkZBQUlvQyxLQUFLLENBQUNwQyxTQUFiLENBQWY7O0FBQ0FBLGlCQUFTLENBQUN1QyxTQUFELENBQVQsR0FBdUJJLElBQXZCO0FBQ0EsK0NBQ09QLEtBRFA7QUFFSXBDLG1CQUFTLEVBQVRBLFNBRko7QUFHSWlCLDJCQUFpQixFQUFHLEtBSHhCO0FBSUlDLHdCQUFjLEVBQUc7QUFKckI7QUFNSDs7QUFDRCxTQUFLVSxtQkFBTDtBQUNJLGFBQU07QUFDRlgseUJBQWlCLEVBQUcsS0FEbEI7QUFFRkUsdUJBQWUsRUFBR2tCLE1BQU0sQ0FBQ0M7QUFGdkIsT0FBTjs7QUFJSjtBQUNJLGFBQU9GLEtBQVA7QUFqRVI7QUFtRUgsQ0FwRUQ7O0FBc0VlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNzdmOTYxM2U0ZjQ2NGM2MDQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTpcImtpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDpcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFwiLFxyXG4gICAgICAgIEltYWdlcyA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vc2NyaWJlbWVkaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExLzAtU2hvdWxkLVlvdS1Xcml0ZS1hLUJvb2stNzAweDQwNi5qcGdcIixcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly90MS5kYXVtY2RuLm5ldC9jZmlsZS90aXN0b3J5LzI0MjgzQzM4NThGNzc4Q0EyRVwiLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjIDogXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGdcIixcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHMgOlt7XHJcbiAgICAgICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcInJlZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCIxMjMxMjMxMjMxMjNcIixcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwicGFya1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBcImNvbnRlbnRcIixcclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRocyA6W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPShkYXRhKSA9PiAoe1xyXG4gICAgaWQgOiBkYXRhLmlkLFxyXG4gICAgY29udGVudCA6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXIgOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzIDogW10sXHJcbiAgICBDb21tZW50cyA6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQgOiBkYXRhLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbVwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOltkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9