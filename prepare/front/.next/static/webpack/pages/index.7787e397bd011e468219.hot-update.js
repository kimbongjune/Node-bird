webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Applayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/Applayout */ "./components/Applayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\nodeBird\\prepare\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();












var Home = function Home() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostLoading = _useSelector2.loadPostLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_USER_REQUEST"]
    }); // dispatch({
    //     type : LOAD_POST_REQUEST,
    // });
  }, [hasMorePost, loadPostLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POST_REQUEST"]
          }, [hasMorePost, loadPostLoading]);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePost, loadPostLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Applayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 24
      }, _this), mainPosts.map(function (post, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 49
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Home, "a63BsuJoqIxg8Ik6/cr4QZfODiU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwib25TY3JvbGwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImluZGV4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQUE7O0FBQ2QscUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBa0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQTdEO0FBQUEsTUFBT0MsU0FBUCxpQkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxXQUFsQixpQkFBa0JBLFdBQWxCO0FBQUEsTUFBK0JDLGVBQS9CLGlCQUErQkEsZUFBL0I7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQUs7QUFDWEYsWUFBUSxDQUFDO0FBQ0xHLFVBQUksRUFBR0MsZ0VBQWlCQTtBQURuQixLQUFELENBQVIsQ0FEVyxDQUlYO0FBQ0E7QUFDQTtBQUNILEdBUFEsRUFPTixDQUFDTixXQUFELEVBQWNDLGVBQWQsQ0FQTSxDQUFUO0FBU0FHLHlEQUFTLENBQUMsWUFBSztBQUNYLGFBQVNHLFFBQVQsR0FBbUI7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsT0FBbkIsRUFBNEJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBckQsRUFBbUVGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBNUY7O0FBQ0EsVUFBR0wsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQXlERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXNDLEdBQWxHLEVBQXNHO0FBQ2xHLFlBQUdmLFdBQVcsSUFBSSxDQUFDQyxlQUFuQixFQUFtQztBQUMvQkMsa0JBQVEsQ0FBQztBQUNMRyxnQkFBSSxFQUFHVyxnRUFBaUJBO0FBRG5CLFdBQUQsRUFFTCxDQUFDaEIsV0FBRCxFQUFjQyxlQUFkLENBRkssQ0FBUjtBQUdIO0FBQ0o7QUFDSjs7QUFDRFMsVUFBTSxDQUFDTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsUUFBbEM7QUFDQSxXQUFPLFlBQUs7QUFDUkcsWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1gsUUFBckM7QUFDSCxLQUZEO0FBR0gsR0FmUSxFQWVOLENBQUNQLFdBQUQsRUFBY0MsZUFBZCxDQWZNLENBQVQ7QUFrQkEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUkscUVBQUMsNkRBQUQ7QUFBQSxpQkFDS0osRUFBRSxpQkFBSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFgsRUFFS0UsU0FBUyxDQUFDb0IsR0FBVixDQUFjLFVBQUNyQixJQUFELEVBQU9zQixLQUFQO0FBQUEsNEJBQWlCLHFFQUFDLDREQUFEO0FBQXdCLGNBQUksRUFBRXRCO0FBQTlCLFdBQWVBLElBQUksQ0FBQ3VCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWpCO0FBQUEsT0FBZCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFXSCxDQTNDRDs7R0FBTTVCLEk7VUFDV0MsdUQsRUFDcUNBLHVELEVBQ2pDUyx1RDs7O0tBSGZWLEk7QUE2Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3ODdlMzk3YmQwMTFlNDY4MjE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9BcHBsYXlvdXQnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PntcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGUgOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sIFtoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodC0zMDApe1xyXG4gICAgICAgICAgICAgICAgaWYoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlIDogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgW2hhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+e1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nXSlcclxuXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEFwcGxheW91dD5cclxuICAgICAgICAgICAgICAgIHttZSAmJiA8UG9zdEZvcm0vPn1cclxuICAgICAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9XHJcbiAgICAgICAgICAgIDwvQXBwbGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==