webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NickNameEditForm.js":
/*!****************************************!*\
  !*** ./components/NickNameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\NickNameEditForm.js",
    _this = undefined,
    _s = $RefreshSig$();









var NickNameEditForm = function NickNameEditForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  var style = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px"
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      value: nickname,
      onChange: onChangeNickname,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(NickNameEditForm, "WWSXYapHomVONQ+JoEUC/m/b47E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NickNameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NickNameEditForm);

var _c;

$RefreshReg$(_c, "NickNameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrTmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tOYW1lRWRpdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImRhdGEiLCJzdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFLO0FBQUE7O0FBQzFCLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esa0JBQXFDQywrREFBUSxDQUFDLENBQUFELEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFRSxRQUFKLEtBQWdCLEVBQWpCLENBQTdDO0FBQUE7QUFBQSxNQUFPQSxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDL0JILFlBQVEsQ0FBQztBQUNMSSxVQUFJLEVBQUdDLHNFQURGO0FBRUxDLFVBQUksRUFBR1I7QUFGRixLQUFELENBQVI7QUFJSCxHQUwyQixFQUt6QixDQUFDQSxRQUFELENBTHlCLENBQTVCO0FBT0EsTUFBTVMsS0FBSyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTTtBQUN6QkMsa0JBQVksRUFBRyxNQURVO0FBRXpCQyxZQUFNLEVBQUcsbUJBRmdCO0FBR3pCQyxhQUFPLEVBQUc7QUFIZSxLQUFOO0FBQUEsR0FBRCxDQUFyQjtBQU1BLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFSixLQUFiO0FBQUEsMkJBQ0kscUVBQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsV0FBSyxFQUFFVCxRQUFyQjtBQUErQixjQUFRLEVBQUVDLGdCQUF6QztBQUEyRCxpQkFBVyxFQUFDLG9CQUF2RTtBQUE2RSxpQkFBVyxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXZCRDs7R0FBTVAsZ0I7VUFDYUMsdUQsRUFDc0JJLHVELEVBQ3BCSSx1RDs7O0tBSGZULGdCO0FBeUJTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjZjZTRiNDFhOGY4ODdkYmZlODM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm0sIElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IE5pY2tOYW1lRWRpdEZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8IFwiXCIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhIDogbmlja25hbWUsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtuaWNrbmFtZV0pO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9Pih7XHJcbiAgICAgICBtYXJnaW5Cb3R0b20gOiBcIjIwcHhcIixcclxuICAgICAgIGJvcmRlciA6IFwiMXB4IHNvbGlkICNkOWQ5ZDlcIixcclxuICAgICAgIHBhZGRpbmcgOiBcIjIwcHhcIlxyXG4gICAgfSkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgPElucHV0LlNlYXJjaCB2YWx1ZT17bmlja25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfSBhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiIGVudGVyQnV0dG9uPVwi7IiY7KCVXCIvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlja05hbWVFZGl0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9