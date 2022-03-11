webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_Applayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Applayout */ "./components/Applayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "D:\\nodeBird\\prepare\\front\\pages\\signup.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();











var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color:red;\n"])));
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpLoading = _useSelector.signUpLoading,
      signUpDone = _useSelector.signUpDone;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
    }
  }, [signUpDone]);

  var _useInput = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangenickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      passWordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(email, nickname, password);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
  }, [email, password, passwordCheck, term]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Applayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-email",
          type: "email",
          value: email,
          required: true,
          onChange: onChangeEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-nick",
          children: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-nick",
          value: nickname,
          required: true,
          onChange: onChangenickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "password",
          name: "user-password",
          value: password,
          required: true,
          onChange: onChangePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-password-check",
          children: "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-password-check",
          type: "password",
          value: passwordCheck,
          required: true,
          onChange: onChangePasswordCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), passWordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          style: {
            color: "red"
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 39
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uD68C\uC6D0\uAC00\uC785 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          marginTop: 10
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: signUpLoading,
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s(Signup, "/F3BxGFrgjkapBpWEhzIGBdsQqw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZW5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3NXb3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsImNvbG9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsaUtBQWxCO0tBQU1GLFk7O0FBSU4sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUFzQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdB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d0Usa0JBQVEsTUFBaEY7QUFBaUYsa0JBQVEsRUFBRUk7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixFQUlLRixhQUFhLGlCQUFJLHNFQUFDLFlBQUQ7QUFBYyxlQUFLLEVBQUU7QUFBQ21CLGlCQUFLLEVBQUc7QUFBVCxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKLGVBc0JJO0FBQUEsZ0NBQ0ksc0VBQUMsNkNBQUQ7QUFBVSxjQUFJLEVBQUMsV0FBZjtBQUEyQixpQkFBTyxFQUFFWixJQUFwQztBQUEwQyxrQkFBUSxFQUFFSSxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVLRixTQUFTLGlCQUFJLHNFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCSixlQTBCSTtBQUFLLGFBQUssRUFBRTtBQUFDVyxtQkFBUyxFQUFDO0FBQVgsU0FBWjtBQUFBLCtCQUNJLHNFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBTyxFQUFFbkMsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBOUVEOztHQUFNTixNO1VBQ2VFLHVELEVBQ3FCQyx1RCxFQU9QUSx1RCxFQUNNQSx1RCxFQUNBQSx1RDs7O01BWG5DWCxNO0FBZ0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZGMzMThlNDk1MjVjM2NlOTM0NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBsYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0FwcGxheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtGb3JtLCBJbnB1dCwgQ2hlY2tib3ggLEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VpbnB1dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFNJR05fVVBfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAgUm91dGVyICBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6cmVkO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT57XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHNpZ25VcExvYWRpbmcsIHNpZ25VcERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGlmKHNpZ25VcERvbmUpe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2lnblVwRG9uZV0pXHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlbmlja25hbWVdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc1dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gICAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRlcm0pe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGEgOiB7IGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBsYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPu2ajOybkOqwgOyehSB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1lbWFpbCc+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItbmljayc+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrXCIgdmFsdWU9e25pY2tuYW1lfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VuaWNrbmFtZX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1wYXNzd29yZCc+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlci1wYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItcGFzc3dvcmQtY2hlY2snPuu5hOuwgOuyiO2YuOyytO2BrDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja30+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7cGFzc1dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlIHN0eWxlPXt7Y29sb3IgOiBcInJlZFwifX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+7ZqM7JuQ6rCA7J6FIOyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MTB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGh0bWxUeXBlPSdzdWJtaXQnIGxvYWRpbmc9e3NpZ25VcExvYWRpbmd9PuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0FwcGxheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9