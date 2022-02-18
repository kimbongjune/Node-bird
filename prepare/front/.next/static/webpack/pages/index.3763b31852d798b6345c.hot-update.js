webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\CommentForm.js",
    _this = undefined;




var CommentForm = function CommentForm(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    children: "\uD3FC"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = CommentForm;
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

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar/avatar */ "./node_modules/antd/lib/avatar/avatar.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();












var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  console.log("test");

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFromOpened = _useState2[0],
      setCommentFromOpened = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFromOpened(function (prev) {
      return !prev;
    });
  });
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: [post.Images]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 43
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 26
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 26
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 37
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 31
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 30
        }, _this),
        title: post.User.nickname,
        description: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), commentFromOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 22
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "JGtbUf5uQX8ABN1bAP8l16QhS7s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
PostCard.PropTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJQb3N0Q2FyZCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50RnJvbU9wZW5lZCIsInNldENvbW1lbnRGcm9tT3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVc7QUFBQSxNQUFUQyxJQUFTLFFBQVRBLElBQVM7QUFDM0Isc0JBQ0kscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBTkQ7O0tBQU1ELFc7QUFRU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBVztBQUFBOztBQUFBLE1BQVRELElBQVMsUUFBVEEsSUFBUzs7QUFDeEIsa0JB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T0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUTtBQU1uQlYsVUFBTSxFQUFHTyxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQU5VLEdBQWhCLEVBT0pJO0FBUmEsQ0FBcEI7QUFXZWhDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3NjNiMzE4NTJkNzk4YjYzNDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm19IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7cG9zdH0pID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICDtj7xcclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFBvcG92ZXIsIExpc3QsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7UmV0d2VldE91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0VHdvVG9uZX0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiYW50ZC9saWIvYXZhdGFyL2F2YXRhclwiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PntcclxuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGcm9tT3BlbmVkLCBzZXRDb21tZW50RnJvbU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZyb21PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0pXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b20gOiAyMH19PlxyXG4gICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgIGNvdmVyID17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtbcG9zdC5JbWFnZXNdfS8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPzxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPixcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6PEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIgPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGcm9tT3BlbmVkICYmKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICA8Q29tbWVudHMvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcblBvc3RDYXJkLlByb3BUeXBlcyA9e1xyXG4gICAgcG9zdCA6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFVzZXIgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdCA6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgQ29tbWVudHMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=