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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\nodeBird\\prepare\\front\\components\\ImagesZoom\\index.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _this = undefined,
    _s = $RefreshSig$();







var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position : fixed;\n    z-index : 5000;\n    top : 0;\n    bottom : 0;\n    right : 0;\n    left : 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height : 44px;\n    background : white;\n    position : relative;\n    padding : 0;\n    text-align : center;\n    \n    & h1 {\n        margin : 0;\n        font-size : 17px;\n        color : #333;\n        line-height : 44px;\n    }\n"])));
_c2 = Header;
var CloseButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CloseOutlined"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position : ab\n"])));
_c3 = CloseButton;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height : calc(100% - 44px);\n    background : #090909;\n"])));
_c4 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding : 32px;\n    text-align : center;\n\n    & img {\n        margin : 0 auto;\n        max-height : 750px;\n    }\n"])));
_c5 = ImgWrapper;
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6 || (_templateObject6 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align : center;\n\n    & > div {\n        width : 75px;\n        height : 30px;\n        line-height : 30px;\n        border-radius : 15px;\n        background : #313131;\n        display : inline-block;\n        text-align : center;\n        color : white;\n        font-size : 15px;\n    }\n"])));
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject7 || (_templateObject7 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    .slick-slide{\n        display: inline-block;\n    }\n"])));
_c6 = Global;

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(CloseButton, {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(SlickWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          afterChange: function afterChange(slide) {
            return setCurrentSlide(slide);
          },
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(function (v) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ImgWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c7 = ImagesZoom;
ImagesZoom.protTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "CloseButton");
$RefreshReg$(_c4, "SlickWrapper");
$RefreshReg$(_c5, "ImgWrapper");
$RefreshReg$(_c6, "Global");
$RefreshReg$(_c7, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJTdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDbG9zZUJ1dHRvbiIsIkNsb3NlT3V0bGluZWQiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvdFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLDJQQUFiO0tBQU1GLE87QUFTTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLE1BQVYsbVlBQVo7TUFBTUQsTTtBQWVOLElBQU1FLFdBQVcsR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVCxzS0FBakI7TUFBTUQsVztBQUlOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ0MsR0FBViwrTUFBbEI7TUFBTUssWTtBQUtOLElBQU1DLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBViwrUUFBaEI7TUFBTU0sVTtBQVVOLElBQU1DLFNBQVMsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVixpY0FBZjtBQWdCQSxJQUFNUSxNQUFNLEdBQUdDLDJFQUFILDZNQUFaO01BQU1ELE07O0FBTU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsT0FBWSxRQUFaQSxPQUFZOztBQUNyQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esc0JBQ0kscUVBQUMsT0FBRDtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsTUFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyxXQUFEO0FBQWEsZUFBTyxFQUFFSCxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBTUkscUVBQUMsWUFBRDtBQUFBLDZCQUNJO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFDSSxzQkFBWSxFQUFFLENBRGxCO0FBRUkscUJBQVcsRUFBRSxxQkFBQ0ksS0FBRDtBQUFBLG1CQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxXQUZqQjtBQUdJLGtCQUFRLE1BSFo7QUFJSSxnQkFBTSxFQUFFLEtBSlo7QUFLSSxzQkFBWSxFQUFFLENBTGxCO0FBTUksd0JBQWMsRUFBRSxDQU5wQjtBQUFBLG9CQVFLTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsZ0NBQ1IscUVBQUMsVUFBRDtBQUFBLHFDQUNJO0FBQUssbUJBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFaO0FBQWlCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQWlCRCxDQUFDLENBQUNDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFYO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyQkgsQ0E3QkQ7O0dBQU1ULFU7O01BQUFBLFU7QUErQk5BLFVBQVUsQ0FBQ1UsU0FBWCxHQUF1QjtBQUNuQlQsUUFBTSxFQUFHVSxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0MsVUFEMUI7QUFFbkJaLFNBQU8sRUFBR1MsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRDtBQUZOLENBQXZCO0FBSWVkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0NmNiNmM5MmVhODMwNjliZjEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICB6LWluZGV4IDogNTAwMDtcclxuICAgIHRvcCA6IDA7XHJcbiAgICBib3R0b20gOiAwO1xyXG4gICAgcmlnaHQgOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBTdHlsZWQuaGVhZGVyYFxyXG4gICAgaGVpZ2h0IDogNDRweDtcclxuICAgIGJhY2tncm91bmQgOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nIDogMDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICYgaDEge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTdweDtcclxuICAgICAgICBjb2xvciA6ICMzMzM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiA0NHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBTdHlsZWQoQ2xvc2VPdXRsaW5lZClgXHJcbiAgICBwb3NpdGlvbiA6IGFiXHJcbmA7XHJcblxyXG5jb25zdCBTbGlja1dyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0IDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgICBiYWNrZ3JvdW5kIDogIzA5MDkwOTtcclxuYDtcclxuXHJcbmNvbnN0IEltZ1dyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZyA6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICAgICYgaW1nIHtcclxuICAgICAgICBtYXJnaW4gOiAwIGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodCA6IDc1MHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5kaWNhdG9yID0gU3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGggOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodCA6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQgOiAjMzEzMTMxO1xyXG4gICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5zbGljay1zbGlkZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsIG9uQ2xvc2V9KSA9PntcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8T3ZlcmxheT5cclxuICAgICAgICAgICAgPEdsb2JhbC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltZ1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPC9PdmVybGF5PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbWFnZXNab29tLnByb3RUeXBlcyA9IHtcclxuICAgIGltYWdlcyA6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlIDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207Il0sInNvdXJjZVJvb3QiOiIifQ==