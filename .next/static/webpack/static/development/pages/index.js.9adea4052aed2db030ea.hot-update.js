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



var composeEnhancers =  true ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined;
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

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoc/Layout/Layout */ "./src/hoc/Layout/Layout.js");
/* harmony import */ var _containers_SandwichBuilder_SandwichBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/SandwichBuilder/SandwichBuilder */ "./src/containers/SandwichBuilder/SandwichBuilder.js");





var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return __jsx(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx(_containers_SandwichBuilder_SandwichBuilder__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/hoc/Layout/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import classes from './Layout.css';

var StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__StyledLayout",
  componentId: "sc-1ds8jnj-0"
})(["margin-top:18px;"]);

var Layout = function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Toolbar, sidebar, backdrop"), __jsx(StyledLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/shared/utility.js":
/*!*******************************!*\
  !*** ./src/shared/utility.js ***!
  \*******************************/
/*! exports provided: updateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObject", function() { return updateObject; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var updateObject = function updateObject(oldObject, updatedProperties) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldObject, updatedProperties);
};

/***/ }),

/***/ "./src/store/reducers/sandwichBuilderReducer.js":
/*!******************************************************!*\
  !*** ./src/store/reducers/sandwichBuilderReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");



var INITIAL_STATE = {
  ingredients: null,
  totalPrice: 6,
  error: false,
  building: false
};
var INGREDIENT_PRICES = {
  lettuce: 0.6,
  beef: 2.5,
  turkey: 2.0,
  cheese: 0.5,
  tomato: 0.3
};

var addIngredient = function addIngredient(state, action) {
  var updatedIngredient = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.ingredientName, state.ingredients[action.ingredientName] + 1);

  var updatedIngredients = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state.ingredients, updatedIngredient);
  var updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, updatedState);
};

var removeIngredient = function removeIngredient(state, action) {
  var updatedIngredient = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.ingredientName, state.ingredients[action.ingredientName] - 1);

  var updatedIngredients = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state.ingredients, updatedIngredient);
  var updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, updatedState);
};

var setIngredients = function setIngredients(state, action) {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    ingredients: {
      cheese: action.ingredients.cheese,
      beef: action.ingredients.beef,
      turkey: action.ingredients.turkey,
      lettuce: action.ingredients.lettuce,
      tomato: action.ingredients.tomato
    },
    totalPrice: 6,
    error: false,
    building: false
  });
};

var fetchIngredientsFailed = function fetchIngredientsFailed(state, action) {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    error: true
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
      return addIngredient(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["REMOVE_INGREDIENT"]:
      return removeIngredient(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_INGREDIENTS"]:
      return setIngredients(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_INGREDIENTS_FAILED"]:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=index.js.9adea4052aed2db030ea.hot-update.js.map