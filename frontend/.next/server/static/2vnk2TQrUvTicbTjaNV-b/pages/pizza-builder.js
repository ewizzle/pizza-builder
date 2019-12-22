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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8Na0");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8Na0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/Signout.js
var Signout = __webpack_require__("RSiQ");

// CONCATENATED MODULE: ./components/FinalPizza.js

var __jsx = external_react_default.a.createElement;


const StyledFinalPizza = external_styled_components_default.a.div.withConfig({
  displayName: "FinalPizza__StyledFinalPizza",
  componentId: "sc-1pq9kho-0"
})([".pizzafinal{position:fixed;width:100%;height:100%;left:0;top:0;z-index:100;animation-name:Rotate;animation-duration:0.5s;animation-iteration-count:infinite;background-color:aqua;.pizzaholder{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:600px;width:600px;height:600px;background-color:#333;.pizzalayer{position:relative;top:24px;left:30px;.layer{position:absolute;width:550px;height:550px;opacity:0;animation-name:Fadein;animation-duration:4s;animation-fill-mode:forwards;}}}}@keyframes Rotate{0%{background:repeating-conic-gradient( rgb(0,255,255) 0 15deg,rgb(0,200,200) 0 30deg );}100%{background:repeating-conic-gradient( rgb(0,200,200) 0 15deg,rgb(0,255,255) 0 30deg );}}@keyframes Fadein{from{opacity:0;}to{opacity:1;}}.bannerholder{position:absolute;left:50%;top:500px;z-index:1000;opacity:0;animation-name:Fadein;animation-duration:6s;animation-fill-mode:forwards;.banner{position:absolute;display:block;margin:100px -200px;width:400px;height:60px;border:1px solid #8a1;font:normal 30px/60px 'Rye';text-align:center;color:#451;background:#9b2;border-radius:4px;box-shadow:0 0 30px rgba(0,0,0,0.15) inset,0 6px 10px rgba(0,0,0,0.15);&:before,&:after{content:'';position:absolute;z-index:-1;left:-70px;top:24px;display:block;width:88px;height:0px;border:30px solid #9b2;border-right:20px solid #791;border-bottom-color:#94b81e;border-left-color:transparent;transform:rotate(-5deg);}&:after{left:auto;right:-70px;border-left:20px solid #791;border-right:30px solid transparent;transform:rotate(5deg);}}.bannerbutton{position:absolute;top:200px;left:-57px;width:100px;}}@keyframes Fadein{from{opacity:0;}to{opacity:1;}}"]);

class FinalPizza_Finalpizza extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      ingredients: this.props.pizzaData.ingredients
    });

    Object(defineProperty["a" /* default */])(this, "tryAgain", () => {
      document.location.reload();
    });

    Object(defineProperty["a" /* default */])(this, "finalPizza", () => {
      // add base automatic
      const pizzaLayersData = [this.state.ingredients[0], ...this.props.selected];
      return pizzaLayersData.map(item => {
        return __jsx("div", {
          key: item.title
        }, __jsx("div", null, __jsx("img", {
          className: "layer",
          style: this.props.showFinalPizza,
          src: '/' + item.title + '.png'
        })));
      });
    });
  }

  render() {
    return __jsx(StyledFinalPizza, null, __jsx("div", {
      className: "pizzafinal",
      style: this.props.showFinalPizza
    }, __jsx("div", {
      className: "bannerholder",
      style: this.props.showFinalPizza
    }, __jsx("div", {
      className: "banner"
    }, "Bon App\xE9tit"), __jsx("button", {
      className: "bannerbutton",
      onClick: this.tryAgain
    }, "Order Again")), __jsx("div", {
      className: "pizzaholder"
    }, __jsx("div", {
      className: "pizzalayer"
    }, this.finalPizza()))));
  }

}

/* harmony default export */ var FinalPizza = (FinalPizza_Finalpizza);
// CONCATENATED MODULE: ./components/Ingredient.js

var Ingredient_jsx = external_react_default.a.createElement;


const StyledIngredient = external_styled_components_default.a.div.withConfig({
  displayName: "Ingredient__StyledIngredient",
  componentId: "k5xcsg-0"
})(["null"]);

class Ingredient_Ingredient extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      ingredients: this.props.pizzaData.ingredients
    });

    Object(defineProperty["a" /* default */])(this, "handleClick", e => {
      let newselected = [];

      for (let ing of this.state.ingredients) {
        if (ing.title !== 'Base') {
          if (document.getElementById(ing.htmlname).checked) {
            newselected.push(ing);
          }
        }
      }

      this.props.handleIngredients(newselected);
    });

    Object(defineProperty["a" /* default */])(this, "handleIngredientsReset", () => {
      const AllIngredients = document.getElementsByClassName('input-ingredients');

      for (let ing of AllIngredients) {
        ing.checked = false;
      }
    });

    Object(defineProperty["a" /* default */])(this, "creatList", () => {
      return this.state.ingredients.map(item => {
        if (item.title !== 'Base') {
          return Ingredient_jsx("div", {
            className: "funkyradio-success",
            key: item.title
          }, Ingredient_jsx("input", {
            type: "checkbox",
            onClick: this.handleClick,
            id: item.htmlname,
            className: "input-ingredients"
          }), Ingredient_jsx("label", {
            htmlFor: item.htmlname
          }, item.title + ' ($' + item.price + ')'));
        } else {
          return null;
        }
      });
    });
  }

  render() {
    return Ingredient_jsx(StyledIngredient, null, Ingredient_jsx("div", {
      className: "menu"
    }, Ingredient_jsx("div", {
      className: "ingredients"
    }, Ingredient_jsx("div", {
      className: "funkyradio"
    }, this.creatList()))));
  }

}

/* harmony default export */ var components_Ingredient = (Ingredient_Ingredient);
// CONCATENATED MODULE: ./components/Pizza.js

var Pizza_jsx = external_react_default.a.createElement;


const StyledPizza = external_styled_components_default.a.div.withConfig({
  displayName: "Pizza__StyledPizza",
  componentId: "xgqw0g-0"
})([".Pizza{height:50vw;width:50vw;position:relative;.Base{position:absolute;z-index:10;background:url(/Base.png) no-repeat;background-size:contain;height:50vw;width:50vw;max-width:590px;max-height:571px;left:-1200px;top:0px;animation-name:onShovel;animation-duration:1s;animation-delay:1s;animation-timing-function:ease-out;animation-fill-mode:forwards;}.ingredient{position:absolute;left:5vw;height:50vw;width:50vw;max-width:590px;max-height:571px;}.Shovel{position:absolute;z-index:1;background:url(/Shovel.png) no-repeat;background-size:contain;height:50vw;width:1000px;left:-2000px;animation-name:Shovel;animation-delay:1s;animation-duration:1s;animation-timing-function:ease-out;animation-fill-mode:forwards;}@media (max-width:1024px){@keyframes Shovel{0%{left:-2000px;top:0px;}100%{left:-36vw;top:0;}}}@media (max-width:768px){@keyframes Shovel{0%{left:-2000px;top:0px;}100%{left:-32vw;top:0px;}}}@media (min-width:1024px){@keyframes Shovel{0%{left:-2000px;top:0px;}100%{left:-326px;top:0px;}}}@keyframes onShovel{0%{left:-1600px;top:0px;}100%{left:5vw;top:0px;}}}"]);

class Pizza_Pizza extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      ingredient: this.props.pizzaData.ingredients
    });

    Object(defineProperty["a" /* default */])(this, "createLayes", () => {
      let localLayer = 100;
      return this.state.ingredient.map(item => {
        let style = {};

        for (let nameOfLayer of this.props.selected) {
          if (nameOfLayer.title === item.title) {
            style = {
              zIndex: localLayer,
              display: 'block',
              background: `url('/${item.title}.png') no-repeat`,
              backgroundSize: 'contain'
            };
          }

          localLayer++;
        }

        return Pizza_jsx("div", {
          className: "ingredient",
          key: item.title,
          style: style,
          ref: item.htmlname
        });
      });
    });
  }

  render() {
    return Pizza_jsx(StyledPizza, null, Pizza_jsx("div", {
      className: "Pizza",
      style: this.props.showPizza
    }, Pizza_jsx("div", {
      className: "Shovel"
    }), Pizza_jsx("div", {
      className: "Base"
    }), " ", this.createLayes()));
  }

}

/* harmony default export */ var components_Pizza = (Pizza_Pizza);
// EXTERNAL MODULE: ./pizzadata.json
var pizzadata = __webpack_require__("zRLe");

// CONCATENATED MODULE: ./components/PizzaBuilder.js

var PizzaBuilder_jsx = external_react_default.a.createElement;







const PizzaBuilder_StyledPizza = external_styled_components_default.a.div.withConfig({
  displayName: "PizzaBuilder__StyledPizza",
  componentId: "syksvi-0"
})(["background:url(/bgtable.png);overflow:hidden;.container{display:flex;justify-content:space-around;}"]);

class PizzaBuilder_PizzaBuilder extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      selectedIngredients: [],
      showFinalPizza: {
        visibility: 'hidden',
        animationPlayState: 'paused'
      },
      showPizza: {
        visibility: 'visible'
      }
    });

    Object(defineProperty["a" /* default */])(this, "handleIngredients", ingredients => {
      this.setState({
        selectedIngredients: ingredients
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleIntroMessage", modalShow => {
      this.setState({
        showIntroMessage: modalShow
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleTryAgain", () => {
      this.setState({
        selectedIngredients: []
      });
      this.refs.reset.handleIngredientsReset();
    });

    Object(defineProperty["a" /* default */])(this, "handleShowFinalPizza", () => {
      this.setState({
        showFinalPizza: {
          visibility: 'visible',
          animationPlayState: 'running'
        },
        showPizza: {
          visibility: 'hidden'
        }
      });
    });
  }

  render() {
    return PizzaBuilder_jsx(PizzaBuilder_StyledPizza, null, PizzaBuilder_jsx(FinalPizza, {
      pizzaData: pizzadata,
      selected: this.state.selectedIngredients,
      showFinalPizza: this.state.showFinalPizza
    }), PizzaBuilder_jsx("img", {
      src: "/Canopy.png"
    }), PizzaBuilder_jsx("div", {
      className: "container"
    }, PizzaBuilder_jsx("div", null, PizzaBuilder_jsx(components_Pizza, {
      pizzaData: pizzadata,
      selected: this.state.selectedIngredients,
      showPizza: this.state.showPizza
    })), PizzaBuilder_jsx("div", {
      className: "menu"
    }, PizzaBuilder_jsx("h3", null, "Toppings:"), PizzaBuilder_jsx(components_Ingredient, {
      pizzaData: pizzadata,
      handleIngredients: this.handleIngredients,
      ref: "reset"
    }), PizzaBuilder_jsx("button", {
      onClick: this.handleShowFinalPizza
    }, "Place the order"))), PizzaBuilder_jsx(Signout["a" /* default */], null));
  }

}

/* harmony default export */ var components_PizzaBuilder = (PizzaBuilder_PizzaBuilder);
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./components/User.js + 1 modules
var User = __webpack_require__("VliS");

// EXTERNAL MODULE: ./components/Signin.js
var Signin = __webpack_require__("km3s");

// CONCATENATED MODULE: ./components/PleaseSignin.js

var PleaseSignin_jsx = external_react_default.a.createElement;




const PleaseSignIn = props => PleaseSignin_jsx(external_react_apollo_["Query"], {
  query: User["a" /* CURRENT_USER_QUERY */]
}, ({
  data,
  loading
}) => {
  if (loading) return PleaseSignin_jsx("p", null, "Loading...");

  if (!data.me) {
    return PleaseSignin_jsx("div", null, PleaseSignin_jsx("p", null, "Please Sign in before continuing"), PleaseSignin_jsx(Signin["a" /* default */], null));
  }

  return props.children;
});

/* harmony default export */ var PleaseSignin = (PleaseSignIn);
// CONCATENATED MODULE: ./pages/pizza-builder.js

var pizza_builder_jsx = external_react_default.a.createElement;



const SignupPage = props => pizza_builder_jsx(external_react_default.a.Fragment, null, pizza_builder_jsx(PleaseSignin, null, pizza_builder_jsx(components_PizzaBuilder, null)));

/* harmony default export */ var pizza_builder = __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "RSiQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VliS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
  mutation: SIGN_OUT_MUTATION,
  refetchQueries: [{
    query: _User__WEBPACK_IMPORTED_MODULE_3__[/* CURRENT_USER_QUERY */ "a"]
  }]
}, signout => __jsx("button", {
  onClick: signout
}, "Sign Out"));

/* harmony default export */ __webpack_exports__["a"] = (Signout);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-1jcvv6j-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid #297a91;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i
    }, __jsx("p", {
      "data-test": "graphql-error"
    }, __jsx("strong", null, "Sorry!"), error.message.replace('GraphQL error: ', ''))));
  }

  return __jsx(ErrorStyles, null, __jsx("p", {
    "data-test": "graphql-error"
  }, __jsx("strong", null, "Sorry!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "VliS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/User.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });


var __jsx = external_react_default.a.createElement;


const CURRENT_USER_QUERY = external_graphql_tag_default.a`
  query CURRENT_USER_QUERY {
    me {
      id
      name
      email
    }
  }
`;

const User = props => __jsx(external_react_apollo_["Query"], _extends({
  query: CURRENT_USER_QUERY
}, props), payload => props.children(payload));

/* harmony default export */ var components_User = __webpack_exports__["b"] = (User);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "km3s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mzXK");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VUBQ");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("VliS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: SIGNIN_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_7__[/* CURRENT_USER_QUERY */ "a"]
      }]
    }, (signin, {
      error,
      loading
    }) => {
      return __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        method: "post",
        onSubmit: async e => {
          e.preventDefault();
          await signin();
          this.setState({
            name: '',
            email: '',
            password: ''
          });

          if (!error) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/pizza-builder');
          }
        }
      }, __jsx("fieldset", {
        disabled: loading,
        "aria-busy": loading
      }, __jsx("h2", null, "Sign in"), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        error: error
      }), __jsx("label", {
        htmlFor: "email"
      }, "email", __jsx("input", {
        type: "email",
        name: "email",
        placeholder: "email",
        value: this.state.email,
        onChange: this.saveToState
      })), __jsx("label", {
        htmlFor: "password"
      }, "password", __jsx("input", {
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.saveToState
      })), __jsx("button", {
        type: "submit"
      }, "Sign In")));
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Signin);

/***/ }),

/***/ "mzXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-8ri1dy-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:#804215;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.primary, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "zRLe":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Custom Pizza Builder\",\"ingredients\":[{\"htmlname\":\"Base\",\"title\":\"Base\",\"price\":8.99,\"points\":4},{\"htmlname\":\"Tomato-sauce\",\"title\":\"Tomato-sauce\",\"price\":0.5,\"points\":5},{\"htmlname\":\"Cheese\",\"title\":\"Cheese\",\"price\":1.4,\"points\":15},{\"htmlname\":\"Bacon\",\"title\":\"Bacon\",\"price\":2.3,\"points\":10},{\"htmlname\":\"Pepperoni\",\"title\":\"Pepperoni\",\"price\":1.4,\"points\":10},{\"htmlname\":\"Mushroom\",\"title\":\"Mushroom\",\"price\":1.4,\"points\":2},{\"htmlname\":\"Onion\",\"title\":\"Onion\",\"price\":0.3,\"points\":5},{\"htmlname\":\"Chilli\",\"title\":\"Chilli\",\"price\":1.4,\"points\":10},{\"htmlname\":\"Olive\",\"title\":\"Olive\",\"price\":1.4,\"points\":5},{\"htmlname\":\"Shrimp\",\"title\":\"Shrimp\",\"price\":2,\"points\":7},{\"htmlname\":\"Pineapple\",\"title\":\"Pineapple\",\"price\":2.8,\"points\":1}]}");

/***/ })

/******/ });