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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "kim"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://scribemedia.com/wp-content/uploads/2018/11/0-Should-You-Write-a-Book-700x406.jpg"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "ree"
      },
      content: "123123123123"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
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
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
    }],
    Comments: [{
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));
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
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
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
          var post = draft.mainPosts.find(function (V) {
            return V.id === action.data.postId;
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJpbWFnZVVybCIsInNlbnRlbmNlIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsIlYiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFLLENBQUNyQyxpQkFBTixHQUEwQixLQUExQjtBQUNBcUMsYUFBSyxDQUFDbkMsZUFBTixHQUF3QmlDLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFDSixXQUFLZixtQkFBTDtBQUNJYSxhQUFLLENBQUNsQyxpQkFBTixHQUEwQixJQUExQjtBQUNBa0MsYUFBSyxDQUFDakMsY0FBTixHQUF1QixLQUF2QjtBQUNBaUMsYUFBSyxDQUFDaEMsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNKLFdBQUtvQixtQkFBTDtBQUF5QjtBQUNyQixjQUFNaUIsSUFBSSxHQUFHTCxLQUFLLENBQUNuRCxTQUFOLENBQWdCeUQsSUFBaEIsQ0FBcUIsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPQSxDQUFDLENBQUN6RCxFQUFGLEtBQVNnRCxNQUFNLENBQUNQLElBQVAsQ0FBWWlCLE1BQTVCO0FBQUEsV0FBckIsQ0FBYjtBQUNBSCxjQUFJLENBQUMvQyxRQUFMLENBQWMyQyxPQUFkLENBQXNCTixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZdEMsT0FBYixDQUFsQztBQUNBK0MsZUFBSyxDQUFDbEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtDLGVBQUssQ0FBQ2pDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQSxnQkFMcUIsQ0FNckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUtzQixtQkFBTDtBQUNJVyxhQUFLLENBQUNsQyxpQkFBTixHQUEwQixLQUExQjtBQUNBa0MsYUFBSyxDQUFDaEMsZUFBTixHQUF3QjhCLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBekRSO0FBMkRILEdBNURhLENBQWQ7QUE2REgsQ0E5REQ7O0FBZ0VlTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEyMjM2ZjE1ZWRmMWY3YWE5ODQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyIDp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Olwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgICAgSW1hZ2VzIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly9zY3JpYmVtZWRpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvMC1TaG91bGQtWW91LVdyaXRlLWEtQm9vay03MDB4NDA2LmpwZ1wiLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3QxLmRhdW1jZG4ubmV0L2NmaWxlL3Rpc3RvcnkvMjQyODNDMzg1OEY3NzhDQTJFXCIsXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6W3tcclxuICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwicmVlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIjEyMzEyMzEyMzEyM1wiLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJwYXJrXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiY29udGVudFwiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzIDpbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxufVxyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gICAgQXJyYXkoMjApLmZpbGwoKS5tYXAoKCkgPT4oe1xyXG4gICAgICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIFVzZXIgOntcclxuICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgICAgICBzcmMgOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDogW3tcclxuICAgICAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgICAgICB9XSxcclxuICAgIH0pKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9KGRhdGEpID0+ICh7XHJcbiAgICBpZCA6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50IDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlciA6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6XCJraW1cIixcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIGlkIDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudCA6IGRhdGEsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6IFwia2ltXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoVikgPT4gVi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9