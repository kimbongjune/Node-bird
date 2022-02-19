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
    _templateObject4,
    _templateObject5,
    _this = undefined,
    _s = $RefreshSig$();






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position : fixed;\n    z-index : 5000;\n    top : 0;\n    bottom : 0;\n    right : 0;\n    left : 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height : 44px;\n    background : white;\n    position : relative;\n    padding : 0;\n    text-align : center;\n    \n    & h1 {\n        margin : 0;\n        font-size : 17px;\n        color : #333;\n        line-height : 44px;\n    }\n\n    & button {\n        position : absolute;\n        right : 0;\n        top : 0;\n        botton : 0;\n        left : 0;\n        padding : 15px;\n        line-height : 14px;\n        cursor : pointer;\n    }\n"])));
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height : calc(100% - 44px);\n    background : #090909;\n"])));
_c3 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding : 32px;\n    text-align : center;\n\n    & img {\n        margin : 0 auto;\n        max-height : 750px;\n    }\n"])));
_c4 = ImgWrapper;
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align : center;\n\n    & > div {\n        width : 75px;\n        height : 30px;\n        line-height : 30px;\n        border-radius : 15px;\n        background : #313131;\n        display : inline-block;\n        text-align : center;\n    }\n"])));

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
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SlickWrapper, {
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
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ImgWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c5 = ImagesZoom;
ImagesZoom.protTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImgWrapper");
$RefreshReg$(_c5, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJTdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3RUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsMlBBQWI7S0FBTUYsTztBQVNOLElBQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csTUFBVix5bEJBQVo7TUFBTUQsTTtBQTBCTixJQUFNRSxZQUFZLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsK01BQWxCO01BQU1HLFk7QUFLTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsK1FBQWhCO01BQU1JLFU7QUFVTixJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsOFlBQWY7O0FBY0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0I7QUFBQTs7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsT0FBWSxRQUFaQSxPQUFZOztBQUNyQyxrQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esc0JBQ0kscUVBQUMsT0FBRDtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxlQUFPLEVBQUVILE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0k7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUNJLHNCQUFZLEVBQUUsQ0FEbEI7QUFFSSxxQkFBVyxFQUFFLHFCQUFDSSxLQUFEO0FBQUEsbUJBQVdELGVBQWUsQ0FBQ0MsS0FBRCxDQUExQjtBQUFBLFdBRmpCO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGdCQUFNLEVBQUUsS0FKWjtBQUtJLHNCQUFZLEVBQUUsQ0FMbEI7QUFNSSx3QkFBYyxFQUFFLENBTnBCO0FBQUEsb0JBUUtMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxnQ0FDUixxRUFBQyxVQUFEO0FBQUEscUNBQ0k7QUFBSyxtQkFBRyxFQUFFQSxDQUFDLENBQUNDLEdBQVo7QUFBaUIsbUJBQUcsRUFBRUQsQ0FBQyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBaUJELENBQUMsQ0FBQ0MsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVg7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQTVCRDs7R0FBTVQsVTs7TUFBQUEsVTtBQThCTkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ25CVCxRQUFNLEVBQUdVLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUQxQjtBQUVuQlosU0FBTyxFQUFHUyxpREFBUyxDQUFDSSxJQUFWLENBQWVEO0FBRk4sQ0FBdkI7QUFJZWQseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFhZDk5ZDkxODk1MDdhMDY4ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFNsaWNrIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbiA6IGZpeGVkO1xyXG4gICAgei1pbmRleCA6IDUwMDA7XHJcbiAgICB0b3AgOiAwO1xyXG4gICAgYm90dG9tIDogMDtcclxuICAgIHJpZ2h0IDogMDtcclxuICAgIGxlZnQgOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gU3R5bGVkLmhlYWRlcmBcclxuICAgIGhlaWdodCA6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kIDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZyA6IDA7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgXHJcbiAgICAmIGgxIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE3cHg7XHJcbiAgICAgICAgY29sb3IgOiAjMzMzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogNDRweDtcclxuICAgIH1cclxuXHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodCA6IDA7XHJcbiAgICAgICAgdG9wIDogMDtcclxuICAgICAgICBib3R0b24gOiAwO1xyXG4gICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgIHBhZGRpbmcgOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMTRweDtcclxuICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpY2tXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICAgIGhlaWdodCA6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgYmFja2dyb3VuZCA6ICMwOTA5MDk7XHJcbmA7XHJcblxyXG5jb25zdCBJbWdXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmcgOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgICAgbWFyZ2luIDogMCBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQgOiA3NTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEluZGljYXRvciA9IFN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoIDogNzVweDtcclxuICAgICAgICBoZWlnaHQgOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kIDogIzMxMzEzMTtcclxuICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsIG9uQ2xvc2V9KSA9PntcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8T3ZlcmxheT5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFNsaWNrV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2xpY2tXcmFwcGVyPlxyXG4gICAgICAgIDwvT3ZlcmxheT5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2VzWm9vbS5wcm90VHlwZXMgPSB7XHJcbiAgICBpbWFnZXMgOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZSA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=