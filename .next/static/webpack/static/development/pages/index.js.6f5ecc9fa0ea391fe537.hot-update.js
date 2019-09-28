webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Navigation/NavigationItems/NavigationItems.js":
/*!**********************************************************************!*\
  !*** ./src/components/Navigation/NavigationItems/NavigationItems.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Navigation/NavigationItems/NavigationItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StyledNavigationItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "NavigationItems__StyledNavigationItems",
  componentId: "sc-3atkv8-0"
})(["margin:0;padding:0;list-style:none;display:flex;flex-flow:column;align-items:center;height:100%;@media (min-width:500px){flex-flow:row;}"]);

var navigationItems = function navigationItems(props) {
  return __jsx(StyledNavigationItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sandwich",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Build Sandwich"), props.isAuthenticated ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Orders") : null, !props.isAuthenticated ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Authenticate") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Logout"));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItems);

/***/ })

})
//# sourceMappingURL=index.js.6f5ecc9fa0ea391fe537.hot-update.js.map