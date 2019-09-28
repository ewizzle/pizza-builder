webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Navigation/Toolbar/Toolbar.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/Toolbar/Toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./src/components/Navigation/NavigationItems/NavigationItems.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Navigation/Toolbar/Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StyledToolbar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Toolbar__StyledToolbar",
  componentId: "sc-15nfucj-0"
})(["height:56px;width:100%;position:fixed;top:0;left:0;background-color:#703b09;display:flex;justify-content:space-between;align-items:center;padding:0 20px;box-sizing:border-box;z-index:90;nav{height:100%;}.Logo{height:80%;}@media (max-width:499px){.DesktopOnly{display:none;}}"]);

var toolbar = function toolbar(props) {
  return __jsx(StyledToolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: props.drawerToggleClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("nav", {
    className: "DesktopOnly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isAuthenticated: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (toolbar);

/***/ })

})
//# sourceMappingURL=index.js.e542cc08d0fdf4c09c5f.hot-update.js.map