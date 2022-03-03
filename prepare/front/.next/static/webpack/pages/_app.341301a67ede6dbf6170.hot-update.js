webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);









function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/addpost", data);
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/loadpost", data);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/removepost", data);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/addcomment", data);
}

function addPost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate();
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            //data : result.data,
            data: {
              id: id,
              content: action.data
            }
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: id
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function loadPost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate();
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            //data : result.data,
            data: {
              id: id,
              content: action.data
            }
          });

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: id
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function removePost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate();
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            //data : result.data,
            data: action.data
          });

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function addComment(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            //data : result.data,
            data: action.data
          });

        case 5:
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwibG9hZFBvc3QiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9hZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwiYWRkQ29tbWVudEFQSSIsImFjdGlvbiIsImRlbGF5IiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VTUyIsImNvbnRlbnQiLCJBRERfUE9TVF9UT19NRSIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiQUREX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0EwQlVBLE87bUdBeUJBQyxRO21HQXlCQUMsVTttR0FzQkFDLFU7bUdBaUJBQyxZO21HQUlBQyxhO21HQUtBQyxlO21HQUlBQyxlO21HQUllQyxROztBQXBJekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBeUI7QUFDckIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkJGLElBQTNCLENBQVA7QUFDSDs7QUFFRCxTQUFTRyxX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QUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU0yQixvRUFBUyxDQUFDSSxrRUFBRCxFQUFzQm5DLFVBQXRCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUssUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWCxpQkFBTStCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3BDLFlBQUQsQ0FERSxFQUVOb0MsK0RBQUksQ0FBQ25DLGFBQUQsQ0FGRSxFQUdObUMsK0RBQUksQ0FBQ2xDLGVBQUQsQ0FIRSxFQUlOa0MsK0RBQUksQ0FBQ2pDLGVBQUQsQ0FKRSxDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNDEzMDFhNjdlZGU2ZGJmNjE3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZSwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgZGVsYXl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9GQUlMVVJFIH0gZnJvbSAnLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvYWRkcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9hZHBvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcmVtb3ZlcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvYWRkY29tbWVudFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy9kYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBpZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhIDogaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy9kYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvL2RhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9