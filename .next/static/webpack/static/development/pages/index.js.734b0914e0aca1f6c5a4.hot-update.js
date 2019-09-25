webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_SandwichBuilder_SandwichBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/SandwichBuilder/SandwichBuilder */ "./src/containers/SandwichBuilder/SandwichBuilder.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var _src_store_reducers_sandwichBuilderReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store/reducers/sandwichBuilderReducer */ "./src/store/reducers/sandwichBuilderReducer.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import thunk from "redux-thunk";


 // const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  sandwichBuilder: _src_store_reducers_sandwichBuilderReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(rootReducer // composeEnhancers(applyMiddleware(thunk))
);

var app = __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_src_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (app); // export default class index extends Component {
//   render() {
//     return <SandwichBuilder />;
//     return <div>Temporary fix</div>;
//   }
// }

/***/ })

})
//# sourceMappingURL=index.js.734b0914e0aca1f6c5a4.hot-update.js.map