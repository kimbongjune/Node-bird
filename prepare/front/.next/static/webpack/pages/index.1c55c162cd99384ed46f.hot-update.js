webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Loginform.js":
/*!*********************************!*\
  !*** ./components/Loginform.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\Loginform.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();












var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top : 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding : 10px;\n"])));
_c2 = FormWrapper;

var Loginform = function Loginform() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useInput = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading,
      logInError = _useSelector.logInError;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_9__["loginRequestAction"])({
      email: email,
      password: password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(FormWrapper, {
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-email",
          type: "email",
          value: email,
          onChange: onChangeEmail,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          onChange: onChangePassword,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: logInLoading,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Loginform, "XfFSznffgj2dUqr2Juq7WDgRHw4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c3 = Loginform;
/* harmony default export */ __webpack_exports__["default"] = (Loginform);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "Loginform");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbmZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luZm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwibG9naW5SZXF1ZXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHlLQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBRCxDQUFULHdLQUFqQjtNQUFNRCxXOztBQUlOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUs7QUFBQTs7QUFDbkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxrQkFBK0JDLCtEQUFRLENBQUMsRUFBRCxDQUF2QztBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLGFBQWQ7O0FBQ0EsbUJBQXFDRiwrREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsZ0JBQWpCOztBQUNBLHFCQUFtQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUE5QztBQUFBLE1BQU9DLFlBQVAsZ0JBQU9BLFlBQVA7QUFBQSxNQUFxQkMsVUFBckIsZ0JBQXFCQSxVQUFyQjs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0QsVUFBSCxFQUFjO0FBQ1ZFLFdBQUssQ0FBQ0YsVUFBRCxDQUFMO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxNQUFNRyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBSztBQUNsQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVosRUFBa0JFLFFBQWxCO0FBQ0FMLFlBQVEsQ0FBQ2tCLHlFQUFrQixDQUFDO0FBQUNmLFdBQUssRUFBTEEsS0FBRDtBQUFRRSxjQUFRLEVBQVJBO0FBQVIsS0FBRCxDQUFuQixDQUFSO0FBQ0gsR0FIK0IsRUFHN0IsQ0FBQ0YsS0FBRCxFQUFPRSxRQUFQLENBSDZCLENBQWhDO0FBS0Esc0JBQ0k7QUFBQSwyQkFDSSxzRUFBQyxXQUFEO0FBQWEsY0FBUSxFQUFFUyxZQUF2QjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxpQkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0ksc0VBQUMsMENBQUQ7QUFBTyxjQUFJLEVBQUMsWUFBWjtBQUF5QixjQUFJLEVBQUMsT0FBOUI7QUFBc0MsZUFBSyxFQUFFWCxLQUE3QztBQUFvRCxrQkFBUSxFQUFFQyxhQUE5RDtBQUE2RSxrQkFBUTtBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxzRUFBQywwQ0FBRDtBQUFPLGNBQUksRUFBQyxlQUFaO0FBQTRCLGNBQUksRUFBQyxVQUFqQztBQUE0QyxlQUFLLEVBQUVDLFFBQW5EO0FBQTZELGtCQUFRLEVBQUVDLGdCQUF2RTtBQUF5RixrQkFBUTtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBV0ksc0VBQUMsYUFBRDtBQUFBLGdDQUNJLHNFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBTyxFQUFFSSxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHNFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FBcUI7QUFBQSxtQ0FBRyxzRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW9CSCxDQXRDRDs7R0FBTVgsUztVQUNlRSx1RCxFQUNjQyx1RCxFQUNNQSx1RCxFQUNGSyx1RDs7O01BSmpDUixTO0FBd0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzU1YzE2MmNkOTkzODRlZDQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b24sIEZvcm0sIElucHV0fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dpbkFjdGlvbiwgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gICAgcGFkZGluZyA6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbmZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAgIGNvbnN0IHtsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3J9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcilcclxuXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9nSW5FcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0gLFtsb2dJbkVycm9yXSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCxwYXNzd29yZCk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHtlbWFpbCwgcGFzc3dvcmR9KSk7XHJcbiAgICB9LCBbZW1haWwscGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItZW1haWxcIj7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luZm9ybTsiXSwic291cmNlUm9vdCI6IiJ9