webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
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
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST,
    data: data
  };
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
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
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInDone: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true,
        me: null
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true,
        me: null
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    case ADD_POST_TO_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (v) {
            return v.id !== action.data;
          })
        })
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImR1bW15VXNlciIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MEJBQWtCLEVBQUcsS0FIN0I7QUFJUUMsMkJBQW1CLEVBQUc7QUFKOUI7O0FBTUosU0FBS2MsdUJBQUw7QUFDSSw2Q0FDV3FCLEtBRFg7QUFFUXJDLDZCQUFxQixFQUFHLEtBRmhDO0FBR1FDLDBCQUFrQixFQUFHLElBSDdCO0FBSVFFLFVBQUUsRUFBRztBQUpiOztBQU1KLFNBQUtjLHVCQUFMO0FBQ0ksNkNBQ1dvQixLQURYO0FBRVFyQyw2QkFBcUIsRUFBRyxLQUZoQztBQUdRRSwyQkFBbUIsRUFBR29DLE1BQU0sQ0FBQ0M7QUFIckM7O0FBS0osU0FBS2YsY0FBTDtBQUNJLDZDQUNPYSxLQURQO0FBRUlsQyxVQUFFLGtDQUNLa0MsS0FBSyxDQUFDbEMsRUFEWDtBQUVFOEIsZUFBSyxHQUFJO0FBQUNELGNBQUUsRUFBR00sTUFBTSxDQUFDWDtBQUFiLFdBQUosc0dBQTJCVSxLQUFLLENBQUNsQyxFQUFOLENBQVM4QixLQUFwQztBQUZQO0FBRk47O0FBT0osU0FBS1IsaUJBQUw7QUFDSSw2Q0FDT1ksS0FEUDtBQUVJbEMsVUFBRSxrQ0FDS2tDLEtBQUssQ0FBQ2xDLEVBRFg7QUFFRThCLGVBQUssRUFBR0ksS0FBSyxDQUFDbEMsRUFBTixDQUFTOEIsS0FBVCxDQUFlTyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDVCxFQUFGLEtBQVNNLE1BQU0sQ0FBQ1gsSUFBdkI7QUFBQSxXQUF0QjtBQUZWO0FBRk47O0FBT0o7QUFDSSxhQUFPVSxLQUFQO0FBakdSO0FBbUdILENBcEdEOztBQXNHZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYTYzZTNlNjdhMTM5NzYxODVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yIDogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvZ091dERvbmUgOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yIDogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHNpZ25VcERvbmUgOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yIDogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yIDogbnVsbCxcclxuICAgIG1lIDogbnVsbCxcclxuICAgIHNpZ25VcERhdGEgOiB7fSxcclxuICAgIGxvZ2luRGF0YSA6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPShkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZSA6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9KCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWUgOiBcImtpbVwiLFxyXG4gICAgaWQgOiAxLFxyXG4gICAgUG9zdHMgOiBbe2lkIDogMX1dLFxyXG4gICAgRm9sbG93aW5ncyA6IFt7bmlja25hbWUgOiBcImtpbVwifSx7bmlja25hbWUgOiBcImxlZVwifSx7bmlja25hbWUgOiBcInBhcmtcIn1dLFxyXG4gICAgRm9sbG93ZXJzIDogW3tuaWNrbmFtZSA6IFwia2ltXCJ9LHtuaWNrbmFtZSA6IFwibGVlXCJ9LHtuaWNrbmFtZSA6IFwicGFya1wifV0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5FcnJvciA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbkRvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lIDogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luRXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ091dEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dPdXRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ091dEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25VcERvbmUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduVXBFcnJvciA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnblVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25VcERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnblVwRXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lIDp7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdHMgOiBbe2lkIDogYWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS5tZS5Qb3N0c11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZSA6e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RzIDogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==