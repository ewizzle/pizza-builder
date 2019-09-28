webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Navigation/SideDrawer/SideDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/SideDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./src/components/Navigation/NavigationItems/NavigationItems.js");
/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/src/components/Navigation/SideDrawer/SideDrawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledSideDrawer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SideDrawer__StyledSideDrawer",
  componentId: "sc-1jhn2gj-0"
})([".SideDrawer{position:fixed;width:280px;max-width:70%;height:100%;left:0;top:0;z-index:200;background-color:white;padding:32px 16px;box-sizing:border-box;transition:transform 0.3s ease-out;}@media (min-width:500px){.SideDrawer{display:none;}}.Open{transform:translateX(0);}.Close{transform:translateX(-100%);}.Logo{height:11%;margin-bottom:32px;}"]);

var sideDrawer = function sideDrawer(props) {
  var attachedClasses = ["SideDrawer", "Close"];

  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: props.open,
    clicked: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(StyledSideDrawer, {
    className: attachedClasses.join(" "),
    onClick: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isAuthenticated: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideDrawer);

/***/ })

})
//# sourceMappingURL=index.js.6719d13474538b8f475b.hot-update.js.map