webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUMsQ0FETTtBQUVUQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFDLENBREQ7QUFFRkUsY0FBUSxFQUFDO0FBRlAsS0FGRztBQU1UQyxXQUFPLEVBQUMsdUJBTkM7QUFPVEMsVUFBTSxFQUFHLENBQ0w7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QWUsRUFBRztBQUp0Qjs7QUFNSixTQUFLUSxtQkFBTDtBQUF5QjtBQUNyQixZQUFNWSxTQUFTLEdBQUdILEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0J3QyxTQUFoQixDQUEwQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBU29DLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZWSxNQUE1QjtBQUFBLFNBQTFCLENBQWxCOztBQUNBLFlBQU1DLElBQUkscUJBQU9QLEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0J1QyxTQUFoQixDQUFQLENBQVY7O0FBQ0FJLFlBQUksQ0FBQ2xDLFFBQUwsSUFBaUJ5QixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZMUIsT0FBYixDQUE3QixzR0FBdUR1QyxJQUFJLENBQUNsQyxRQUE1RDs7QUFDQSxZQUFNVCxTQUFTLEdBQUcsNkZBQUlvQyxLQUFLLENBQUNwQyxTQUFiLENBQWY7O0FBQ0FBLGlCQUFTLENBQUN1QyxTQUFELENBQVQsR0FBdUJJLElBQXZCO0FBQ0EsK0NBQ09QLEtBRFA7QUFFSXBDLG1CQUFTLEVBQVRBLFNBRko7QUFHSWlCLDJCQUFpQixFQUFHLEtBSHhCO0FBSUlDLHdCQUFjLEVBQUc7QUFKckI7QUFNSDs7QUFDRCxTQUFLVSxtQkFBTDtBQUNJLGFBQU07QUFDRlgseUJBQWlCLEVBQUcsS0FEbEI7QUFFRkUsdUJBQWUsRUFBR2tCLE1BQU0sQ0FBQ0M7QUFGdkIsT0FBTjs7QUFJSjtBQUNJLGFBQU9GLEtBQVA7QUFqRVI7QUFtRUgsQ0FwRUQ7O0FBc0VlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE3N2Y5NjEzZTRmNDY0YzYwNDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyIDp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Olwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgICAgSW1hZ2VzIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly9zY3JpYmVtZWRpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvMC1TaG91bGQtWW91LVdyaXRlLWEtQm9vay03MDB4NDA2LmpwZ1wiLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3QxLmRhdW1jZG4ubmV0L2NmaWxlL3Rpc3RvcnkvMjQyODNDMzg1OEY3NzhDQTJFXCIsXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6W3tcclxuICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwicmVlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIjEyMzEyMzEyMzEyM1wiLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJwYXJrXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiY29udGVudFwiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzIDpbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9KGRhdGEpID0+ICh7XHJcbiAgICBpZCA6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50IDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlciA6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6XCJraW1cIixcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudCA6IGRhdGEsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6IFwia2ltXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOltkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6W2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvciA6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=