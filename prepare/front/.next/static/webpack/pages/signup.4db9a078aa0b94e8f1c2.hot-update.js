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
      signUpDone = _useSelector.signUpDone,
      signUpError = _useSelector.signUpError;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
    }
  }, []);

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
        lineNumber: 65,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-email",
          type: "email",
          value: email,
          required: true,
          onChange: onChangeEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-nick",
          children: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-nick",
          value: nickname,
          required: true,
          onChange: onChangenickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "password",
          name: "user-password",
          value: password,
          required: true,
          onChange: onChangePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-password-check",
          children: "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-password-check",
          type: "password",
          value: passwordCheck,
          required: true,
          onChange: onChangePasswordCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this), passWordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          style: {
            color: "red"
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 39
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uD68C\uC6D0\uAC00\uC785 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 94,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, _this);
};

_s(Signup, "P3UYdfk32zOZO9rNEMf8VkZJLg8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiYWxlcnQiLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIm5pY2tuYW1lIiwib25DaGFuZ2VuaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJwYXNzV29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVRlcm0iLCJjaGVja2VkIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIlNJR05fVVBfUkVRVUVTVCIsImRhdGEiLCJjb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGlLQUFsQjtLQUFNRixZOztBQUlOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUs7QUFBQTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBbURDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtB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QUNNQSx1RCxFQUNBQSx1RDs7O01BakJuQ2IsTTtBQXNGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjRkYjlhMDc4YWEwYjk0ZThmMWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9BcHBsYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIENoZWNrYm94ICxCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlaW5wdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgIFJvdXRlciAgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOnJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBzaWduVXBMb2FkaW5nLCBzaWduVXBEb25lLCBzaWduVXBFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgaWYoc2lnblVwRG9uZSl7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaWduVXBEb25lXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGlmKHNpZ25VcEVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoc2lnblVwRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAgIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VuaWNrbmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzV29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LCBbcGFzc3dvcmRdKTtcclxuXHJcbiAgICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpZihwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjayl7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGVybSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YSA6IHsgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2VtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcGxheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLWVtYWlsJz7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1uaWNrJz7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLW5pY2tcIiB2YWx1ZT17bmlja25hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZW5pY2tuYW1lfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1wYXNzd29yZC1jaGVjayc+67mE67CA67KI7Zi47LK07YGsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZENoZWNrfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXNzV29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2Ugc3R5bGU9e3tjb2xvciA6IFwicmVkXCJ9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2VyLXRlcm1cIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT7tmozsm5DqsIDsnoUg7JW96rSA7JeQIOuPmeydmO2VqeuLiOuLpC48L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW87ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHRtbFR5cGU9J3N1Ym1pdCcgbG9hZGluZz17c2lnblVwTG9hZGluZ30+6rCA7J6F7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQXBwbGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=