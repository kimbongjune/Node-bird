webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      commentText = _useInput2[0],
      setCommentText = _useInput2[1];

  var onChangeCommentText = function onChangeCommentText() {};

  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Textarea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(CommentForm, "/kIsd8zoAAhDPmXMZv00ID9lumU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = CommentForm;
CommentForm.protoType = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwcm90b1R5cGUiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFXO0FBQUE7O0FBQUEsTUFBVEMsSUFBUyxRQUFUQSxJQUFTOztBQUMzQixrQkFBc0NDLCtEQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT0MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQUssQ0FFaEMsQ0FGRDs7QUFHQSxNQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBSztBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQUksQ0FBQ1MsRUFBakIsRUFBcUJQLFdBQXJCO0FBQ0gsR0FGa0MsRUFFaEMsQ0FBQ0EsV0FBRCxDQUZnQyxDQUFuQztBQUdBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFRyxlQUFoQjtBQUFBLDJCQUNJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLDhCQUNJLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixhQUFLLEVBQUVILFdBQXZCO0FBQW9DLGdCQUFRLEVBQUVFLG1CQUE5QztBQUFtRSxZQUFJLEVBQUU7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsMkNBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixnQkFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FoQkQ7O0dBQU1MLFc7VUFDb0NFLHVEOzs7S0FEcENGLFc7QUFrQk5BLFdBQVcsQ0FBQ1csU0FBWixHQUF1QjtBQUNuQlYsTUFBSSxFQUFFVyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURKLENBQXZCO0FBSWVkLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NzE4MmI5OTEyN2Q5MjY1ZDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7cG9zdH0pID0+e1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ29tbWVudFRleHQgPSAoKSA9PntcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0LmlkLCBjb21tZW50VGV4dCk7XHJcbiAgICB9LCBbY29tbWVudFRleHRdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0YXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3dzPXs0fS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7sgpDslb08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5Db21tZW50Rm9ybS5wcm90b1R5cGUgPXtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=