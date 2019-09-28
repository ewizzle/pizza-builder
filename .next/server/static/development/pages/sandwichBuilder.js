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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./pages/sandwichBuilder.js":
/*!**********************************!*\
  !*** ./pages/sandwichBuilder.js ***!
  \**********************************/
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
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _src_components_Sandwich_Sandwich__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Sandwich/Sandwich */ "./src/components/Sandwich/Sandwich.js");
/* harmony import */ var _src_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/UI/Spinner */ "./src/components/UI/Spinner.js");
/* harmony import */ var _src_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _src_components_Sandwich_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Sandwich/OrderSummary/OrderSummary */ "./src/components/Sandwich/OrderSummary/OrderSummary.js");
/* harmony import */ var _src_components_Sandwich_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Sandwich/BuildControls/BuildControls */ "./src/components/Sandwich/BuildControls/BuildControls.js");


var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/pages/sandwichBuilder.js";
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

    let sandwich = this.props.error ? "Something went wrong" : __jsx(_src_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
    let orderSummary = null;

    if (this.props.ings) {
      sandwich = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Sandwich_Sandwich__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ingredients: this.props.ings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(_src_components_Sandwich_BuildControls_BuildControls__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      orderSummary = __jsx(_src_components_Sandwich_OrderSummary_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }, __jsx(_src_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    onIngredientsInitialize: () => dispatch(_src_store_actions__WEBPACK_IMPORTED_MODULE_4__["ingredientsInitialize"]()),
    onIngredientAdd: ing => dispatch(_src_store_actions__WEBPACK_IMPORTED_MODULE_4__["addIngredient"](ing)),
    onIngredientRemove: ing => dispatch(_src_store_actions__WEBPACK_IMPORTED_MODULE_4__["removeIngredient"](ing))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SandwichBuilder));

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



const StyledTopBread = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledTopBread",
  componentId: "sc-452j8r-0"
})(["height:15%;width:85%;background-color:#fbae25;border-radius:35px 35px 10px 10px;margin:1% auto;"]);
const StyledBottomBread = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledBottomBread",
  componentId: "sc-452j8r-1"
})(["height:16%;width:85%;background-color:#fbae25;border-radius:10px 10px 25px 25px;margin:1% auto;"]);
const StyledLettuce = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledLettuce",
  componentId: "sc-452j8r-2"
})(["height:4%;width:95%;background:linear-gradient(#b1d45f,#70961d);margin:1% auto;border-radius:6px;"]);
const StyledBeef = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledBeef",
  componentId: "sc-452j8r-3"
})(["height:9%;width:90%;margin:1% auto;background:linear-gradient(#4c2500,#814308);border-radius:10px;"]);
const StyledTurkey = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledTurkey",
  componentId: "sc-452j8r-4"
})(["height:8%;width:90%;margin:1% auto;background:linear-gradient(#efcadc,#814308);border-radius:10px;"]);
const StyledTomato = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledTomato",
  componentId: "sc-452j8r-5"
})(["height:5%;width:90%;background:linear-gradient(#ff3939,#ff7575);margin:1% auto;border-radius:8px;"]);
const StyledCheese = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SandwichIngredient__StyledCheese",
  componentId: "sc-452j8r-6"
})(["height:4%;width:92%;background:linear-gradient(#ffcb00,#ffd42c);margin:1% auto;border-radius:6px;"]);

class SandwichIngredient extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "top-bread":
        ingredient = __jsx(StyledTopBread, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        });
        break;

      case "bottom-bread":
        ingredient = __jsx(StyledBottomBread, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
        break;

      case "cheese":
        ingredient = __jsx(StyledCheese, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        });
        break;

      case "beef":
        ingredient = __jsx(StyledBeef, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        });
        break;

      case "turkey":
        ingredient = __jsx(StyledTurkey, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        });
        break;

      case "lettuce":
        ingredient = __jsx(StyledLettuce, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        });
        break;

      case "tomato":
        ingredient = __jsx(StyledTomato, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
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

/***/ "./src/store/actions/actionTypes.js":
/*!******************************************!*\
  !*** ./src/store/actions/actionTypes.js ***!
  \******************************************/
/*! exports provided: ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED, INGREDIENTS_INITIALIZE, PURCHASE_SANDWICH_START, PURCHASE_SANDWICH_SUCCESS, PURCHASE_SANDWICH_FAIL, PURCHASE_INIT, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_INGREDIENT", function() { return REMOVE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_INGREDIENTS", function() { return SET_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INGREDIENTS_FAILED", function() { return FETCH_INGREDIENTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENTS_INITIALIZE", function() { return INGREDIENTS_INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_SANDWICH_START", function() { return PURCHASE_SANDWICH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_SANDWICH_SUCCESS", function() { return PURCHASE_SANDWICH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_SANDWICH_FAIL", function() { return PURCHASE_SANDWICH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_INIT", function() { return PURCHASE_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_START", function() { return FETCH_ORDERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_SUCCESS", function() { return FETCH_ORDERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDERS_FAIL", function() { return FETCH_ORDERS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_REDIRECT_PATH", function() { return SET_AUTH_REDIRECT_PATH; });
const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const SET_INGREDIENTS = "SET_INGREDIENTS";
const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";
const INGREDIENTS_INITIALIZE = "INGREDIENTS_INITIALIZED";
const PURCHASE_SANDWICH_START = "PURCHASE_SANDWICH_START";
const PURCHASE_SANDWICH_SUCCESS = "PURCHASE_SANDWICH_SUCCESS";
const PURCHASE_SANDWICH_FAIL = "PURCHASE_SANDWICH_FAIL";
const PURCHASE_INIT = "PURCHASE_INIT";
const FETCH_ORDERS_START = "FETCH_ORDERS_START";
const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";

/***/ }),

/***/ "./src/store/actions/auth.js":
/*!***********************************!*\
  !*** ./src/store/actions/auth.js ***!
  \***********************************/
/*! exports provided: authStart, authSuccess, authFail, logout, checkAuthTimeout, auth, setAuthRedirectPath, authCheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStart", function() { return authStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFail", function() { return authFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthTimeout", function() { return checkAuthTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthRedirectPath", function() { return setAuthRedirectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return authCheckState; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");


const authStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_START"]
  };
};
const authSuccess = (token, userId) => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_SUCCESS"],
    idToken: token,
    userId: userId
  };
};
const authFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_FAIL"],
    error: error
  };
};
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGOUT"]
  };
};
const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";

    if (!isSignup) {
      url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, authData).then(response => {
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", response.data.localId);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    }).catch(err => {
      dispatch(authFail(err.response.data.error));
    });
  };
};
const setAuthRedirectPath = path => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH_REDIRECT_PATH"],
    path: path
  };
};
const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: addIngredient, removeIngredient, setIngredients, fetchIngredientsFailed, ingredientsInitialize, purchaseSandwich, purchaseInit, fetchOrders, auth, logout, setAuthRedirectPath, authCheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandwichBuilderAction */ "./src/store/actions/sandwichBuilderAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIngredient", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["addIngredient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIngredient", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["removeIngredient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIngredients", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["setIngredients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchIngredientsFailed", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["fetchIngredientsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ingredientsInitialize", function() { return _sandwichBuilderAction__WEBPACK_IMPORTED_MODULE_0__["ingredientsInitialize"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/store/actions/order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseSandwich", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["purchaseSandwich"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseInit", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["purchaseInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return _order__WEBPACK_IMPORTED_MODULE_1__["fetchOrders"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/store/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["auth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAuthRedirectPath", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["setAuthRedirectPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["authCheckState"]; });





/***/ }),

/***/ "./src/store/actions/order.js":
/*!************************************!*\
  !*** ./src/store/actions/order.js ***!
  \************************************/
/*! exports provided: purchaseSandwichSuccess, purchaseSandwichFail, purchaseSandwichStart, purchaseSandwich, purchaseInit, fetchOrdersSuccess, fetchOrdersFail, fetchOrdersStart, fetchOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseSandwichSuccess", function() { return purchaseSandwichSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseSandwichFail", function() { return purchaseSandwichFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseSandwichStart", function() { return purchaseSandwichStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseSandwich", function() { return purchaseSandwich; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseInit", function() { return purchaseInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersSuccess", function() { return fetchOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersFail", function() { return fetchOrdersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrdersStart", function() { return fetchOrdersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return fetchOrders; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../axios-orders */ "./src/axios-orders.js");



const purchaseSandwichSuccess = (id, orderData) => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_SANDWICH_SUCCESS"],
    orderId: id,
    orderData: orderData
  };
};
const purchaseSandwichFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_SANDWICH_FAIL"],
    error: error
  };
};
const purchaseSandwichStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_SANDWICH_START"]
  };
};
const purchaseSandwich = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseSandwichStart());
    _axios_orders__WEBPACK_IMPORTED_MODULE_2__["default"].post("/orders.json?auth=" + token, orderData).then(response => {
      dispatch(purchaseSandwichSuccess(response.data.name, orderData));
    }).catch(error => {
      dispatch(purchaseSandwichFail(error));
    });
  };
};
const purchaseInit = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["PURCHASE_INIT"]
  };
};
const fetchOrdersSuccess = orders => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_SUCCESS"],
    orders: orders
  };
};
const fetchOrdersFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_FAIL"],
    error: error
  };
};
const fetchOrdersStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDERS_START"]
  };
};
const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    _axios_orders__WEBPACK_IMPORTED_MODULE_2__["default"].get("/orders.json" + queryParams).then(res => {
      const fetchedOrders = [];

      for (let key in res.data) {
        fetchedOrders.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, res.data[key], {
          id: key
        }));
      }

      dispatch(fetchOrdersSuccess(fetchedOrders));
    }).catch(err => {
      dispatch(fetchOrdersFail(err));
    });
  };
};

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

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/sandwichBuilder.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Taivnaa/Desktop/github/sandwich-builder/pages/sandwichBuilder.js */"./pages/sandwichBuilder.js");


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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=sandwichBuilder.js.map