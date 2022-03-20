webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["addPost"])(text));
  }, [text]);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log("images", e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        style: {
          "float": "right"
        },
        htmlType: "submit",
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: imagePaths.map(function (v) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            display: "inline-block"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: v,
            style: {
              width: "200px"
            },
            art: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(PostForm, "1fK3Hh+kKJEWk+lsrzS21MLQL44=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUlucHV0IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiYWRkUG9zdCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsImYiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm1hcmdpbiIsIm1hcCIsInYiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUVsQixxQkFBa0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTdDO0FBQUEsTUFBT0MsVUFBUCxnQkFBT0EsVUFBUDtBQUFBLE1BQW1CQyxXQUFuQixnQkFBbUJBLFdBQW5COztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0Esa0JBQXNDQywrREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxZQUFiO0FBQUEsTUFBMkJDLE9BQTNCOztBQUVBQyx5REFBUyxDQUFDLFlB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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBcEREOztHQUFNdEMsUTtVQUVnQ0MsdUQsRUFDakJNLHVELEVBQ3FCQyx1RDs7O0tBSnBDUixRO0FBc0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzgwNjU1NzhkN2I3YTA2YjcyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgYWRkUG9zdERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGlmKGFkZFBvc3REb25lKXtcclxuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFBvc3QodGV4dCkpO1xyXG4gICAgfSwgW3RleHRdKVxyXG5cclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlc1wiLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGEgOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3ttYXJnaW4gOiBcIjEwcHggMCAyMHB4XCJ9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+IFxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIi8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdCA6IFwicmlnaHRcIn19IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PntcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9e3Z9IHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZSA9e3t3aWR0aCA6IFwiMjAwcHhcIn19IGFydD17dn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9