webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showImageZoom = _useState[0],
      setShowImageZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImageZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        src: images[0].src,
        art: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 35
      }, _this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "50%",
          display: "inline-block"
        },
        src: images[0].src,
        art: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "50%",
          display: "inline-block"
        },
        src: images[0].src,
        art: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 35
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          width: "50%"
        },
        src: images[0].src,
        art: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle"
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), images.length - 1, " \uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this), showImageZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 31
    }, _this)]
  }, void 0, true);
};

_s(PostImages, "jGJAmWSrkCKEauXyly55t7iAgro=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZVpvb20iLCJzZXRTaG93SW1hZ2Vab29tIiwib25ab29tIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwibGVuZ3RoIiwic3JjIiwid2lkdGgiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFhO0FBQUE7O0FBQUEsTUFBWEMsTUFBVyxRQUFYQSxNQUFXOztBQUM1QixrQkFBMENDLHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUFBLE1BQU9DLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQzVCRixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0gsR0FGeUIsRUFFdkIsRUFGdUIsQ0FBMUI7QUFHQSxNQUFNRyxPQUFPLEdBQUdELHlEQUFXLENBQUMsWUFBSztBQUM3QkYsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEdBRjBCLEVBRXhCLEVBRndCLENBQTNCOztBQUlBLE1BQUdILE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUFyQixFQUF1QjtBQUNuQix3QkFDSTtBQUFBLDhCQUNJO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXhDO0FBQTZDLFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUE1RDtBQUFpRSxlQUFPLEVBQUVKO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLRixhQUFhLGlCQUFJLHFFQUFDLG1EQUFEO0FBQVksY0FBTSxFQUFFRixNQUFwQjtBQUE0QixlQUFPLEVBQUVNO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGdEI7QUFBQSxvQkFESjtBQU1IOztBQUNELE1BQUdOLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUFyQixFQUF1QjtBQUNuQix3QkFDSTtBQUFBLDhCQUNJO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsYUFBSyxFQUFFO0FBQUNFLGVBQUssRUFBRyxLQUFUO0FBQWdCQyxpQkFBTyxFQUFHO0FBQTFCLFNBQWhDO0FBQTJFLFdBQUcsRUFBRVYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUExRjtBQUErRixXQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBOUc7QUFBbUgsZUFBTyxFQUFFSjtBQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFDSyxlQUFLLEVBQUcsS0FBVDtBQUFnQkMsaUJBQU8sRUFBRztBQUExQixTQUFoQztBQUEyRSxXQUFHLEVBQUVWLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBMUY7QUFBK0YsV0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQTlHO0FBQW1ILGVBQU8sRUFBRUo7QUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBR0tGLGFBQWEsaUJBQUkscUVBQUMsbURBQUQ7QUFBWSxjQUFNLEVBQUVGLE1BQXBCO0FBQTRCLGVBQU8sRUFBRU07QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUh0QjtBQUFBLG9CQURKO0FBT0g7O0FBQ0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsYUFBSyxFQUFFO0FBQUNHLGVBQUssRUFBRztBQUFULFNBQWhDO0FBQWlELFdBQUcsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUFoRTtBQUFxRSxXQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBcEY7QUFBeUYsZUFBTyxFQUFFSjtBQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFDTSxpQkFBTyxFQUFHLGNBQVg7QUFBMkJELGVBQUssRUFBRyxLQUFuQztBQUEwQ0UsbUJBQVMsRUFBRyxRQUF0RDtBQUFnRUMsdUJBQWEsRUFBRztBQUFoRixTQUFoQztBQUEySCxlQUFPLEVBQUVSLE1BQXBJO0FBQUEsZ0NBQ0kscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHS0osTUFBTSxDQUFDTyxNQUFQLEdBQWUsQ0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFTS0wsYUFBYSxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLFlBQU0sRUFBRUYsTUFBcEI7QUFBNEIsYUFBTyxFQUFFTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVHRCO0FBQUEsa0JBREo7QUFhSCxDQXZDRDs7R0FBTVAsVTs7S0FBQUEsVTtBQXlDTkEsVUFBVSxDQUFDYyxTQUFYLEdBQXFCO0FBQ2pCYixRQUFNLEVBQUdjLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRFEsQ0FBckI7QUFJZWpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI5MzFiNDMyOTBiNjc0NzFkZjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gXCIuL0ltYWdlc1pvb21cIjtcclxuY29uc3QgUG9zdEltYWdlcyA9ICh7aW1hZ2VzfSkgPT57XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlWm9vbSwgc2V0U2hvd0ltYWdlWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBzZXRTaG93SW1hZ2Vab29tKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIHNldFNob3dJbWFnZVpvb20oZmFsc2UpO1xyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIGlmKGltYWdlcy5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYXJ0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW1hZ2Vab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfS8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoID09PSAyKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoIDogXCI1MCVcIiwgZGlzcGxheSA6IFwiaW5saW5lLWJsb2NrXCJ9fSBzcmM9e2ltYWdlc1swXS5zcmN9IGFydD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoIDogXCI1MCVcIiwgZGlzcGxheSA6IFwiaW5saW5lLWJsb2NrXCJ9fSBzcmM9e2ltYWdlc1swXS5zcmN9IGFydD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0ltYWdlWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoIDogXCI1MCVcIn19IHNyYz17aW1hZ2VzWzBdLnNyY30gYXJ0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7ZGlzcGxheSA6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoIDogXCI1MCVcIiwgdGV4dEFsaWduIDogXCJjZW50ZXJcIiwgdmVydGljYWxBbGlnbiA6IFwibWlkZGxlXCJ9fSBvbkNsaWNrPXtvblpvb219PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggLTF9IOqwnOydmCDsgqzsp4Qg642U67O06riwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW1hZ2Vab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfS8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXM9e1xyXG4gICAgaW1hZ2VzIDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==