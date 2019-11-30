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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var _src_store_reducers_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store/reducers/order */ "./src/store/reducers/order.js");
/* harmony import */ var _src_store_reducers_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/store/reducers/auth */ "./src/store/reducers/auth.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  sandwichBuilder: _src_store_reducers_sandwichBuilderReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  order: _src_store_reducers_order__WEBPACK_IMPORTED_MODULE_6__["default"],
  auth: _src_store_reducers_auth__WEBPACK_IMPORTED_MODULE_7__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a));
class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_src_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/App.js";
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

/***/ "./src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js":
/*!************************************************************************************!*\
  !*** ./src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledNavigationItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "NavigationItem__StyledNavigationItem",
  componentId: "ivf6yk-0"
})(["margin:10px 0;box-sizing:border-box;display:block;width:100%;a{color:#8f5c2c;text-decoration:none;width:100%;box-sizing:border-box;display:block;}a:hover,a:active,a.active{color:#40a4c8;}@media (min-width:500px){margin:0;display:flex;height:100%;width:auto;align-items:center;a{color:white;height:100%;padding:16px 10px;border-bottom:4px solid transparent;}a:hover,a:active,a.active{background-color:#8f5c2c;border-bottom:4px solid #40a4c8;color:white;}}"]);

const navigationItem = props => __jsx(StyledNavigationItem, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.link,
  exact: props.exact,
  className: "active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (navigationItem);

/***/ }),

/***/ "./src/components/Navigation/NavigationItems/NavigationItems.js":
/*!**********************************************************************!*\
  !*** ./src/components/Navigation/NavigationItems/NavigationItems.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Navigation/NavigationItems/NavigationItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledNavigationItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "NavigationItems__StyledNavigationItems",
  componentId: "sc-3atkv8-0"
})(["margin:0;padding:0;list-style:none;display:flex;flex-flow:column;align-items:center;height:100%;@media (min-width:500px){flex-flow:row;}"]);

const navigationItems = props => __jsx(StyledNavigationItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Build Sandwich"), props.isAuthenticated ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/orders",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Orders") : null, !props.isAuthenticated ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/auth",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Authenticate") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/logout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Logout"));

/* harmony default export */ __webpack_exports__["default"] = (navigationItems);

/***/ }),

/***/ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js":
/*!***************************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledDrawerToggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DrawerToggle__StyledDrawerToggle",
  componentId: "shslc8-0"
})(["width:40px;height:100%;display:flex;flex-flow:column;justify-content:space-around;align-items:center;padding:10px 0;box-sizing:border-box;cursor:pointer;div{width:90%;height:3px;background-color:white;}@media (min-width:500px){display:none;}"]);

const drawerToggle = props => __jsx(StyledDrawerToggle, {
  onClick: props.clicked,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (drawerToggle);

/***/ }),

/***/ "./src/components/Navigation/SideDrawer/SideDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/SideDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./src/components/Navigation/NavigationItems/NavigationItems.js");
/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ "./src/components/UI/Backdrop/Backdrop.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Navigation/SideDrawer/SideDrawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledSideDrawer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SideDrawer__StyledSideDrawer",
  componentId: "sc-1jhn2gj-0"
})([".SideDrawer{position:fixed;width:280px;max-width:70%;height:100%;left:0;top:0;z-index:200;background-color:white;padding:32px 16px;box-sizing:border-box;transition:transform 0.3s ease-out;}@media (min-width:500px){.SideDrawer{display:none;}}.Open{transform:translateX(0);}.Close{transform:translateX(-100%);}.Logo{height:11%;margin-bottom:32px;}"]);

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];

  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: props.open,
    clicked: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(StyledSideDrawer, {
    className: attachedClasses.join(" "),
    onClick: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isAuthenticated: props.isAuth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideDrawer);

/***/ }),

/***/ "./src/components/Navigation/Toolbar/Toolbar.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/Toolbar/Toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./src/components/Navigation/NavigationItems/NavigationItems.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Navigation/Toolbar/Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledToolbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Toolbar__StyledToolbar",
  componentId: "sc-15nfucj-0"
})(["height:56px;width:100%;position:fixed;top:0;left:0;background-color:#703b09;display:flex;justify-content:space-between;align-items:center;padding:0 20px;box-sizing:border-box;z-index:90;nav{height:100%;}@media (max-width:499px){.DesktopOnly{display:none;}}"]);

const toolbar = props => __jsx(StyledToolbar, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
  clicked: props.drawerToggleClicked,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("nav", {
  className: "DesktopOnly",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
  isAuthenticated: props.isAuth,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (toolbar);

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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Sandwich/BuildControls/BuildControl/BuildControl.js";
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Sandwich/BuildControls/BuildControls.js";
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

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Sandwich/OrderSummary/OrderSummary.js";
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

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Sandwich/Sandwich.js";
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/Sandwich/SandwichIngredient/SandwichIngredient.js";
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/UI/Backdrop/Backdrop.js";
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/UI/Modal/Modal.js";
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
var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/components/UI/Spinner.js";
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


var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/containers/SandwichBuilder/SandwichBuilder.js";
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation/Toolbar/Toolbar */ "./src/components/Navigation/Toolbar/Toolbar.js");
/* harmony import */ var _components_Navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Navigation/SideDrawer/SideDrawer */ "./src/components/Navigation/SideDrawer/SideDrawer.js");

var _jsxFileName = "/Users/Taivnaa/Desktop/github/sandwich-builder/frontend/src/hoc/Layout/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.main.withConfig({
  displayName: "Layout__StyledLayout",
  componentId: "sc-1ds8jnj-0"
})(["margin-top:72px;"]);

class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      showSideDrawer: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sideDrawerClosedHandler", () => {
      this.setState({
        showSideDrawer: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sideDrawerToggleHandler", () => {
      this.setState(prevState => {
        return {
          showSideDrawer: !prevState.showSideDrawer
        };
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isAuth: this.props.isAuthenticated,
      drawerToggleClicked: this.sideDrawerToggleHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx(_components_Navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isAuth: this.props.isAuthenticated,
      open: this.state.showSideDrawer,
      closed: this.sideDrawerClosedHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(StyledLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, this.props.children));
  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Layout));

/***/ }),

/***/ "./src/shared/utility.js":
/*!*******************************!*\
  !*** ./src/shared/utility.js ***!
  \*******************************/
/*! exports provided: updateObject, checkValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObject", function() { return updateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidity", function() { return checkValidity; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const updateObject = (oldObject, updatedProperties) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldObject, updatedProperties);
};
const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

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

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");


const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authStart = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    token: null,
    userId: null
  });
};

const setAuthRedirectPath = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    authRedirectPath: action.path
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]:
      return authStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return authSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAIL"]:
      return authFail(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]:
      return authLogout(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH_REDIRECT_PATH"]:
      return setAuthRedirectPath(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/reducers/order.js":
/*!*************************************!*\
  !*** ./src/store/reducers/order.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");


const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    purchased: false
  });
};

const purchaseSandwichStart = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: true
  });
};

const purchaseSandwichSuccess = (state, action) => {
  const newOrder = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(action.orderData, {
    id: action.orderId
  });
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseSandwichFail = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false
  });
};

const fetchOrdersStart = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: true
  });
};

const fetchOrdersSuccess = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    orders: action.orders,
    loading: false
  });
};

const fetchOrdersFail = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_INIT"]:
      return purchaseInit(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_SANDWICH_START"]:
      return purchaseSandwichStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_SANDWICH_SUCCESS"]:
      return purchaseSandwichSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_SANDWICH_FAIL"]:
      return purchaseSandwichFail(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_START"]:
      return fetchOrdersStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_SUCCESS"]:
      return fetchOrdersSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ORDERS_FAIL"]:
      return fetchOrdersFail(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

module.exports = __webpack_require__(/*! /Users/Taivnaa/Desktop/github/sandwich-builder/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map