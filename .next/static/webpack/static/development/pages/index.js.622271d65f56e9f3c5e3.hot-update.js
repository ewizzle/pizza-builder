webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Navigation/Toolbar/Toolbar.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/Toolbar/Toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./src/components/Navigation/NavigationItems/NavigationItems.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Navigation/Toolbar/Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 56px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #703b09;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n\n  nav {\n    height: 100%;\n  }\n\n  .Logo {\n    height: 80%;\n  }\n\n  @media (max-width: 499px) {\n    .DesktopOnly {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledToolbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject());

var toolbar = function toolbar(props) {
  return __jsx(StyledToolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clicked: props.drawerToggleClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("div", {
    className: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("nav", {
    className: "DesktopOnly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isAuthenticated: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (toolbar);

/***/ })

})
//# sourceMappingURL=index.js.622271d65f56e9f3c5e3.hot-update.js.map