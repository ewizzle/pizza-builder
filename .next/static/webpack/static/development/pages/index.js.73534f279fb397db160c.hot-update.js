webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Sandwich/SandwichIngredient/SandwichIngredient.js":
/*!**************************************************************************!*\
  !*** ./src/components/Sandwich/SandwichIngredient/SandwichIngredient.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Sandwich/SandwichIngredient/SandwichIngredient.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  .topBread {\n    height: 15%;\n    width: 85%;\n    background-color: #fbae25;\n    border-radius: 35px 35px 10px 10px;\n    margin: 1% auto;\n  }\n\n  .bottomBread {\n    height: 16%;\n    width: 85%;\n    background-color: #fbae25;\n    border-radius: 10px 10px 25px 25px;\n    margin: 1% auto;\n  }\n\n  .lettuce {\n    height: 4%;\n    width: 95%;\n    background: linear-gradient(#b1d45f, #70961d);\n    margin: 1% auto;\n    border-radius: 6px;\n  }\n\n  .beef {\n    height: 9%;\n    width: 90%;\n    margin: 1% auto;\n    background: linear-gradient(#4c2500, #814308);\n    border-radius: 10px;\n  }\n\n  .turkey {\n    height: 8%;\n    width: 90%;\n    margin: 1% auto;\n    background: linear-gradient(#efcadc, #814308);\n    border-radius: 10px;\n  }\n\n  .tomato {\n    height: 5%;\n    width: 90%;\n    background: linear-gradient(#ff3939, #ff7575);\n    margin: 1% auto;\n    border-radius: 8px;\n  }\n\n  .cheese {\n    height: 4%;\n    width: 92%;\n    background: linear-gradient(#ffcb00, #ffd42c);\n    margin: 1% auto;\n    border-radius: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import classes from './SandwichIngredient.css';

var StyledSandwichIngredient = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());

var SandwichIngredient =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SandwichIngredient, _Component);

  function SandwichIngredient() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SandwichIngredient);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SandwichIngredient).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SandwichIngredient, [{
    key: "render",
    value: function render() {
      var ingredient = null;

      switch (this.props.type) {
        case "top-bread":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "topBread",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          });
          break;

        case "bottom-bread":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "bottomBread",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
          break;

        case "cheese":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "cheese",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          });
          break;

        case "beef":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "beef",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          });
          break;

        case "turkey":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "turkey",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          });
          break;

        case "lettuce":
          ingredient = __jsx(StyledSandwichIngredient, {
            className: "lettuce",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          });
          break;

        case "tomato":
          ingredient = __jsx("div", {
            className: classes.tomato,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          });
          break;

        default:
          ingredient = null;
      }

      return ingredient;
    }
  }]);

  return SandwichIngredient;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SandwichIngredient.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SandwichIngredient);

/***/ })

})
//# sourceMappingURL=index.js.73534f279fb397db160c.hot-update.js.map