webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\ImagesZoom\\index.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _this = undefined,
    _s = $RefreshSig$();






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position : fixed;\n    z-index : 5000;\n    top : 0;\n    bottom : 0;\n    right : 0;\n    left : 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height : 44px;\n    background : white;\n    position : relative;\n    padding : 0;\n    text-align : center;\n    \n    &h1 {\n        margin : 0;\n        font-size : 17px;\n        color : #333;\n        line-height : 44px;\n    }\n"])));
_c2 = Header;
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"])));
_c3 = CloseButton;

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(CloseButton, {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          afterChange: function afterChange(slide) {
            return setCurrentSlide(slide);
          },
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(function (v) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c4 = ImagesZoom;
ImagesZoom.protTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "CloseButton");
$RefreshReg$(_c4, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJTdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsIm1hcCIsInYiLCJzcmMiLCJwcm90VHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBViwyUEFBYjtLQUFNRixPO0FBU04sSUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxNQUFWLGtZQUFaO01BQU1ELE07QUFlTixJQUFNRSxXQUFXLEdBQUdKLHlEQUFNLENBQUNLLE1BQVYscUpBQWpCO01BQU1ELFc7O0FBSU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsT0FBWSxRQUFaQSxPQUFZOztBQUNyQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esc0JBQ0kscUVBQUMsT0FBRDtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsV0FBRDtBQUFhLGVBQU8sRUFBRUgsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJO0FBQUEsNkJBQ0k7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUNJLHNCQUFZLEVBQUUsQ0FEbEI7QUFFSSxxQkFBVyxFQUFFLHFCQUFDSSxLQUFEO0FBQUEsbUJBQVdELGVBQWUsQ0FBQ0MsS0FBRCxDQUExQjtBQUFBLFdBRmpCO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGdCQUFNLEVBQUUsS0FKWjtBQUtJLHNCQUFZLEVBQUUsQ0FMbEI7QUFNSSx3QkFBYyxFQUFFLENBTnBCO0FBQUEsb0JBUUtMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxnQ0FDUjtBQUFBLHFDQUNJO0FBQUssbUJBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFaO0FBQWlCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQVVELENBQUMsQ0FBQ0MsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBWDtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBNUJEOztHQUFNVCxVOztNQUFBQSxVO0FBOEJOQSxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDbkJULFFBQU0sRUFBR1UsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRDFCO0FBRW5CWixTQUFPLEVBQUdTLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGTixDQUF2QjtBQUllZCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNmVlNzIwZDY1NjRhMGE0ODU0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICB6LWluZGV4IDogNTAwMDtcclxuICAgIHRvcCA6IDA7XHJcbiAgICBib3R0b20gOiAwO1xyXG4gICAgcmlnaHQgOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBTdHlsZWQuaGVhZGVyYFxyXG4gICAgaGVpZ2h0IDogNDRweDtcclxuICAgIGJhY2tncm91bmQgOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nIDogMDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICZoMSB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBmb250LXNpemUgOiAxN3B4O1xyXG4gICAgICAgIGNvbG9yIDogIzMzMztcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDQ0cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IFN0eWxlZC5idXR0b25gXHJcblxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7aW1hZ2VzLCBvbkNsb3NlfSkgPT57XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE92ZXJsYXk+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Yuc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvT3ZlcmxheT5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2VzWm9vbS5wcm90VHlwZXMgPSB7XHJcbiAgICBpbWFnZXMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=