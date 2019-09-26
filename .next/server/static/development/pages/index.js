module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var _src_store_reducers_sandwichBuilderReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store/reducers/sandwichBuilderReducer */ "./src/store/reducers/sandwichBuilderReducer.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  sandwichBuilder: _src_store_reducers_sandwichBuilderReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a));
class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_src_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoc/Layout/Layout */ "./src/hoc/Layout/Layout.js");
/* harmony import */ var _containers_SandwichBuilder_SandwichBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/SandwichBuilder/SandwichBuilder */ "./src/containers/SandwichBuilder/SandwichBuilder.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(_containers_SandwichBuilder_SandwichBuilder__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/axios-orders.js":
/*!*****************************!*\
  !*** ./src/axios-orders.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://sandwich-builder.firebaseio.com/'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/components/Sandwich/BuildControls/BuildControl/BuildControl.js":
/*!****************************************************************************!*\
  !*** ./src/components/Sandwich/BuildControls/BuildControl/BuildControl.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/BuildControls/BuildControl/BuildControl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledBuildControl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BuildControl__StyledBuildControl",
  componentId: "sc-1bnmzui-0"
})(["display:flex;justify-content:space-between;align-items:center;margin:5px auto;"]);

const BuildControl = props => __jsx(StyledBuildControl, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, props.label), __jsx("button", {
  onClick: props.added,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Add"), __jsx("button", {
  onClick: props.removed,
  disabled: props.disabled,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Remove"));

/* harmony default export */ __webpack_exports__["default"] = (BuildControl);

/***/ }),

/***/ "./src/components/Sandwich/BuildControls/BuildControls.js":
/*!****************************************************************!*\
  !*** ./src/components/Sandwich/BuildControls/BuildControls.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuildControl/BuildControl */ "./src/components/Sandwich/BuildControls/BuildControl/BuildControl.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/BuildControls/BuildControls.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledBuildControls = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BuildControls__StyledBuildControls",
  componentId: "sc-193qhml-0"
})(["width:100%;background-color:#cf8f2e;display:flex;flex-flow:column;align-items:center;box-shadow:0 2px 1px #ccc;margin:auto;padding:10px 0;"]);
const controls = [{
  label: "Beef",
  type: "beef"
}, {
  label: "Turkey",
  type: "turkey"
}, {
  label: "Cheese",
  type: "cheese"
}, {
  label: "Lettuce",
  type: "lettuce"
}, {
  label: "Tomato",
  type: "tomato"
}];

const BuildControls = props => __jsx(StyledBuildControls, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Price: $", props.price.toFixed(2)), controls.map(ctrl => __jsx(_BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: ctrl.label,
  label: ctrl.label,
  added: () => props.ingredientAdded(ctrl.type),
  removed: () => props.ingredientRemoved(ctrl.type),
  disabled: props.disabled[ctrl.type],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
})), __jsx("button", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Order Now"));

/* harmony default export */ __webpack_exports__["default"] = (BuildControls);

/***/ }),

/***/ "./src/components/Sandwich/OrderSummary/OrderSummary.js":
/*!**************************************************************!*\
  !*** ./src/components/Sandwich/OrderSummary/OrderSummary.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/OrderSummary/OrderSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const orderSummary = props => {
  const ingredientSummary = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.ingredients).map(igKey => {
    return __jsx("li", {
      key: igKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, __jsx("span", {
      style: {
        textTransform: 'capitalize'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, igKey), ": ", props.ingredients[igKey]);
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Your order"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Yummy sandwich with:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, ingredientSummary), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Continue To Checkout"));
};

/* harmony default export */ __webpack_exports__["default"] = (orderSummary);

/***/ }),

/***/ "./src/components/Sandwich/Sandwich.js":
/*!*********************************************!*\
  !*** ./src/components/Sandwich/Sandwich.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SandwichIngredient_SandwichIngredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SandwichIngredient/SandwichIngredient */ "./src/components/Sandwich/SandwichIngredient/SandwichIngredient.js");

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/Sandwich.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const StyledSandwich = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Sandwich__StyledSandwich",
  componentId: "sc-1ap7ejq-0"
})(["width:100%;margin:auto;height:250px;overflow:scroll;text-align:center;font-weight:bold;font-size:1.2rem;@media (min-width:500px) and (min-height:400px){width:350px;height:300px;}@media (min-width:500px) and (min-height:401px){width:450px;height:400px;}@media (min-width:1000px) and (min-height:700px){width:700px;height:600px;}"]);

const sandwich = props => {
  console.log("this is before transformation ", props.ingredients);

  let transformedIngredients = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return __jsx(_SandwichIngredient_SandwichIngredient__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: igKey + i,
        type: igKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      });
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, "Please start adding ingredients!");
  }

  console.log("this is inside sandwich js transformed one: ", transformedIngredients);
  return __jsx(StyledSandwich, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_SandwichIngredient_SandwichIngredient__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "top-bread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), transformedIngredients, __jsx(_SandwichIngredient_SandwichIngredient__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "bottom-bread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (sandwich);

/***/ }),

/***/ "./src/components/Sandwich/SandwichIngredient/SandwichIngredient.js":
/*!**************************************************************************!*\
  !*** ./src/components/Sandwich/SandwichIngredient/SandwichIngredient.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/SandwichIngredient/SandwichIngredient.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledSandwichIngredient = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledSandwichIngredient",
  componentId: "sc-452j8r-0"
})([".topBread{height:15%;width:85%;background-color:#fbae25;border-radius:35px 35px 10px 10px;margin:1% auto;}.bottomBread{height:16%;width:85%;background-color:#fbae25;border-radius:10px 10px 25px 25px;margin:1% auto;}.lettuce{height:4%;width:95%;background:linear-gradient(#b1d45f,#70961d);margin:1% auto;border-radius:6px;}.beef{height:9%;width:90%;margin:1% auto;background:linear-gradient(#4c2500,#814308);border-radius:10px;}.turkey{height:8%;width:90%;margin:1% auto;background:linear-gradient(#efcadc,#814308);border-radius:10px;}.tomato{height:5%;width:90%;background:linear-gradient(#ff3939,#ff7575);margin:1% auto;border-radius:8px;}.cheese{height:4%;width:92%;background:linear-gradient(#ffcb00,#ffd42c);margin:1% auto;border-radius:6px;}"]);

class SandwichIngredient extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "top-bread":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "topBread",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        });
        break;

      case "bottom-bread":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "bottomBread",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        });
        break;

      case "cheese":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "cheese",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
        break;

      case "beef":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "beef",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        });
        break;

      case "turkey":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "turkey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        });
        break;

      case "lettuce":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "lettuce",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
        break;

      case "tomato":
        ingredient = __jsx(StyledSandwichIngredient, {
          className: "tomato",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        });
        break;

      default:
        ingredient = null;
    }

    return ingredient;
  }

}

SandwichIngredient.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SandwichIngredient);

/***/ }),

/***/ "./src/components/UI/Backdrop/Backdrop.js":
/*!************************************************!*\
  !*** ./src/components/UI/Backdrop/Backdrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/UI/Backdrop/Backdrop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Backdrop__StyledBackdrop",
  componentId: "sc-1h4ilvj-0"
})(["width:100%;height:100%;position:fixed;z-index:100;left:0;top:0;background-color:rgba(0,0,0,0.5);"]);

const backdrop = props => props.show ? __jsx(StyledBackdrop, {
  onClick: props.clicked,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}) : null;

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./src/components/UI/Modal/Modal.js":
/*!******************************************!*\
  !*** ./src/components/UI/Modal/Modal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/UI/Modal/Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Modal__StyledModal",
  componentId: "sc-8fder1-0"
})(["position:fixed;z-index:500;background-color:white;width:80%;box-shadow:1px 1px 1px black;padding:16px;border:1px solid #ccc;left:15%;top:30%;box-sizing:border-box;transition:all 0.3s ease-out;@media (min-width:600px){width:500px;left:calc(50% - 250px);}"]);

class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: this.props.show,
      clicked: this.props.modalClosed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(StyledModal, {
      style: {
        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: this.props.show ? "1" : "0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/UI/Spinner.js":
/*!**************************************!*\
  !*** ./src/components/UI/Spinner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/UI/Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledSpinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Spinner__StyledSpinner",
  componentId: "k4jkyw-0"
})(["display:inline-block;position:relative;width:100px;height:100px;:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:50px solid #fff;border-color:#407f7f transparent #003333 transparent;animation:Hourglass 1.2s infinite;}@keyframes Hourglass{0%{transform:rotate(0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}50%{transform:rotate(900deg);animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);}100%{transform:rotate(1800deg);}}"]);

const Spinner = () => __jsx(StyledSpinner, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Loading...");

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/containers/SandwichBuilder/SandwichBuilder.js":
/*!***********************************************************!*\
  !*** ./src/containers/SandwichBuilder/SandwichBuilder.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _components_Sandwich_Sandwich__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Sandwich/Sandwich */ "./src/components/Sandwich/Sandwich.js");
/* harmony import */ var _components_UI_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Spinner */ "./src/components/UI/Spinner.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_Sandwich_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Sandwich/OrderSummary/OrderSummary */ "./src/components/Sandwich/OrderSummary/OrderSummary.js");
/* harmony import */ var _components_Sandwich_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Sandwich/BuildControls/BuildControls */ "./src/components/Sandwich/BuildControls/BuildControls.js");


var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/containers/SandwichBuilder/SandwichBuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class SandwichBuilder extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      purchasing: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "purchaseHandler", () => {
      this.setState({
        purchasing: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "purchaseCancelHandler", () => {
      this.setState({
        purchasing: false
      });
    });
  }

  componentDidMount() {
    this.props.onIngredientsInitialize();
  }

  render() {
    const disabledInfo = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.ings);

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let sandwich = this.props.error ? "Something went wrong" : __jsx(_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
    let orderSummary = null;

    if (this.props.ings) {
      sandwich = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Sandwich_Sandwich__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ingredients: this.props.ings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(_components_Sandwich_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ingredientAdded: this.props.onIngredientAdd,
        ingredientRemoved: this.props.onIngredientRemove,
        disabled: disabledInfo,
        price: this.props.price,
        ordered: this.purchaseHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
      orderSummary = __jsx(_components_Sandwich_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ingredients: this.props.ings,
        purchaseCancelled: this.purchaseCancelHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      show: this.state.purchasing,
      modalClosed: this.purchaseCancelHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, orderSummary), sandwich);
  }

}

const mapStateToProps = state => {
  return {
    ings: state.sandwichBuilder.ingredients,
    error: state.sandwichBuilder.error,
    price: state.sandwichBuilder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientsInitialize: () => dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["ingredientsInitialize"]()),
    onIngredientAdd: ing => dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["addIngredient"](ing)),
    onIngredientRemove: ing => dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["removeIngredient"](ing))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SandwichBuilder));

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/hoc/Layout/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__StyledLayout",
  componentId: "sc-1ds8jnj-0"
})(["margin-top:18px;"]);

const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Toolbar, sidebar, backdrop"), __jsx(StyledLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
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

const updateObject = (oldObject, updatedProperties) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldObject, updatedProperties);
};

/***/ }),

/***/ "./src/store/actions/actionTypes.js":
/*!******************************************!*\
  !*** ./src/store/actions/actionTypes.js ***!
  \******************************************/
/*! exports provided: ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED, INGREDIENTS_INITIALIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_INGREDIENT", function() { return REMOVE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_INGREDIENTS", function() { return SET_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INGREDIENTS_FAILED", function() { return FETCH_INGREDIENTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENTS_INITIALIZE", function() { return INGREDIENTS_INITIALIZE; });
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
const SET_INGREDIENTS = 'SET_INGREDIENTS';
const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';
const INGREDIENTS_INITIALIZE = 'INGREDIENTS_INITIALIZED';

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: addIngredient, removeIngredient, setIngredients, fetchIngredientsFailed, ingredientsInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandwichBuilderAction */ "./src/store/actions/sandwichBuilderAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIngredient", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["addIngredient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIngredient", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["removeIngredient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIngredients", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["setIngredients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchIngredientsFailed", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["fetchIngredientsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ingredientsInitialize", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["ingredientsInitialize"]; });



/***/ }),

/***/ "./src/store/actions/sandwichBuilderAction.js":
/*!****************************************************!*\
  !*** ./src/store/actions/sandwichBuilderAction.js ***!
  \****************************************************/
/*! exports provided: addIngredient, removeIngredient, setIngredients, fetchIngredientsFailed, ingredientsInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIngredient", function() { return addIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIngredient", function() { return removeIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIngredients", function() { return setIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIngredientsFailed", function() { return fetchIngredientsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientsInitialize", function() { return ingredientsInitialize; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios-orders */ "./src/axios-orders.js");


const addIngredient = name => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_INGREDIENT"],
    ingredientName: name
  };
};
const removeIngredient = name => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_INGREDIENT"],
    ingredientName: name
  };
};
const setIngredients = ingredients => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_INGREDIENTS"],
    ingredients
  };
};
const fetchIngredientsFailed = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_INGREDIENTS_FAILED"],
    error
  };
};
const ingredientsInitialize = () => {
  return dispatch => {
    _axios_orders__WEBPACK_IMPORTED_MODULE_1__["default"].get("https://sandwich-builder.firebaseio.com/ingredients.json").then(response => {
      dispatch(setIngredients(response.data));
    }).catch(error => {
      dispatch(fetchIngredientsFailed());
    });
  };
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
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");


const INITIAL_STATE = {
  ingredients: null,
  totalPrice: 6,
  error: false,
  building: false
};
const INGREDIENT_PRICES = {
  lettuce: 0.6,
  beef: 2.5,
  turkey: 2.0,
  cheese: 0.5,
  tomato: 0.3
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngredients = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, updatedState);
};

const setIngredients = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
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

const fetchIngredientsFailed = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    error: true
  });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_INGREDIENT"]:
      return addIngredient(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_INGREDIENT"]:
      return removeIngredient(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_INGREDIENTS"]:
      return setIngredients(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_INGREDIENTS_FAILED"]:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Taivnaa/Desktop/github/sandwich-builder/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map