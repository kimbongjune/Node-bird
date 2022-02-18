webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "kim"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbookriot.com%2Fthumb-book-holder%2F&psig=AOvVaw3Tp2CRyxxipZw5CdRSKYbS&ust=1645279470980000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiNs-W1ifYCFQAAAAAdAAAAABAI"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      User: {
        nickname: "ree"
      },
      content: "123123123123"
    }, {
      User: {
        nickname: "park"
      },
      content: "content"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "kim"
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUMsQ0FETTtBQUVUQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFDLENBREQ7QUFFRkUsY0FBUSxFQUFDO0FBRlAsS0FGRztBQU1UQyxXQUFPLEVBQUMsdUJBTkM7QUFPVEMsVUFBTSxFQUFHLENBQUM7QUFDTkMsU0FBRyxFQUFHO0FBREEsS0FBRCxFQUVIO0FBQ0VBLFNBQUcsRUFBRztBQURSLEtBRkcsRUFJSDtBQUNFQSxTQUFHLEVBQUc7QUFEUixLQUpHLENBUEE7QUFjVEMsWUFBUSxFQUFFLENBQUM7QUFDUEwsVUFBSSxFQUFDO0FBQ0RDLGdCQUFRLEVBQUc7QUFEVixPQURFO0FBSVBDLGFBQU8sRUFBRztBQUpILEtBQUQsRUFLUjtBQUNFRixVQUFJLEVBQUM7QUFDREMsZ0JBQVEsRUFBRztBQURWLE9BRFA7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FMUTtBQWRELEdBQUQsQ0FEWTtBQTJCeEJJLFlBQVUsRUFBRSxFQTNCWTtBQTRCeEJDLFdBQVMsRUFBRztBQTVCWSxDQUFyQjtBQStCUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBR0Y7QUFEWSxDQUFoQjtBQUlQLElBQU1HLFNBQVMsR0FBRztBQUNkWixJQUFFLEVBQUMsQ0FEVztBQUVkRyxTQUFPLEVBQUMsT0FGTTtBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFDLENBREQ7QUFFRkUsWUFBUSxFQUFDO0FBRlAsR0FIUTtBQU9kRSxRQUFNLEVBQUcsRUFQSztBQVFkRSxVQUFRLEVBQUc7QUFSRyxDQUFsQjs7QUFXQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFpQztBQUFBLE1BQWhDQyxLQUFnQyx1RUFBeEJoQixZQUF3QjtBQUFBLE1BQVZpQixNQUFVOztBQUM3QyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSWYsaUJBQVMsR0FBRWEsU0FBRixzR0FBZ0JFLEtBQUssQ0FBQ2YsU0FBdEIsRUFGYjtBQUdJUyxpQkFBUyxFQUFDO0FBSGQ7O0FBS0o7QUFDSSxhQUFPTSxLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOTUwM2VjMWNkNGU5YTc2MjE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyIDp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Olwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgICAgSW1hZ2VzIDogW3tcclxuICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRmJvb2tyaW90LmNvbSUyRnRodW1iLWJvb2staG9sZGVyJTJGJnBzaWc9QU92VmF3M1RwMkNSeXh4aXBadzVDZFJTS1liUyZ1c3Q9MTY0NTI3OTQ3MDk4MDAwMCZzb3VyY2U9aW1hZ2VzJmNkPXZmZSZ2ZWQ9MENBc1FqUnhxRndvVENKaU5zLVcxaWZZQ0ZRQUFBQUFkQUFBQUFCQUlcIixcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnXCIsXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDpbe1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJyZWVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwiMTIzMTIzMTIzMTIzXCIsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcInBhcmtcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogXCJjb250ZW50XCIsXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHMgOltdLFxyXG4gICAgcG9zdEFkZGVkIDogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGUgOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQ6MixcclxuICAgIGNvbnRlbnQ6XCLrjZTrr7jrjbDsnbTthLBcIixcclxuICAgIFVzZXIgOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOlwia2ltXCIsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzIDogW10sXHJcbiAgICBDb21tZW50cyA6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOnRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=