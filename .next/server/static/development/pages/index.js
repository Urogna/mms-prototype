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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/container.tsx":
/*!**********************************!*\
  !*** ./components/container.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/uro/mms-prototype/components/container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = ({
  mod,
  css
}) => {
  let tags = [];
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  mod.forEach((f, i) => {
    tags.push(__jsx(Tag, {
      name: f.name,
      index: i,
      set: setIndex,
      current: index,
      color: f.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }));
  });
  return __jsx("div", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, tags, __jsx("div", {
    className: `w-auto overflow-hidden bg-${mod[index].color}-400 border-2 border-${mod[index].color}-800 w-64 rounded rounded-t-none`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, mod[index].jsx));
};

const Tag = ({
  name,
  index,
  set,
  current,
  color
}) => {
  const selectedClass = `p-1 w-1/2 text-2xl pb-2 -mb-2 border-2 border-b-0 border-${color}-800 bg-${color}-400 hover:cursor-default rounded rounded-b-none focus:outline-none`;
  const unselectedClass = `p-1 w-1/2 text-2xl border-2 border-${color}-800 bg-${color}-200 hover:bg-${color}-700 hover:text-white rounded active:outline-none active:bg-${color}-900`;
  return __jsx("button", {
    className: index === current ? selectedClass : unselectedClass,
    onClick: () => {
      set(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/*! exports provided: RegisterForm, LoginForm, StartForm, FilsterForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForm", function() { return RegisterForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartForm", function() { return StartForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilsterForm", function() { return FilsterForm; });
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gun */ "gun");
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/uro/mms-prototype/components/form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const RegisterForm = ({
  color
}) => {
  let gun = gun__WEBPACK_IMPORTED_MODULE_0___default()();
  let user, email, pass;

  const setUser = value => {
    user = value;
  };

  const setEmail = value => {
    email = value;
  };

  const setPass = value => {
    pass = value;
  };

  const handleSubmit = event => {
    event.preventDefault();
    gun.get(user).put({
      username: user,
      email: email,
      password: pass
    });
    console.log(user, pass);
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(InputBox, {
    name: "Username",
    set: setUser,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(InputBox, {
    name: "Email",
    set: setEmail,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(InputBox, {
    name: "Password",
    set: setPass,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(Submit, {
    text: "Register",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })));
};
const LoginForm = ({
  color
}) => {
  let gun = gun__WEBPACK_IMPORTED_MODULE_0___default()();
  let user, email, pass;

  const setUser = value => {
    user = value;
  };

  const setPass = value => {
    pass = value;
  };

  const handleSubmit = event => {
    event.preventDefault();
    gun.get(user).on((data, key) => {
      user = data.username;
      email = data.email;
      pass = data.password;
    });
    console.log([user, email, pass]);
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(InputBox, {
    name: "Username",
    set: setUser,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(InputBox, {
    name: "Password",
    set: setPass,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(Submit, {
    text: "Login",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })));
};
const StartForm = ({
  color
}) => {
  const handleSubmit = event => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/home');
  };

  const submit = `p-1 w-1/3 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/3 my-2 rounded active:bg-${color}-900 focus:outline-none`;
  return __jsx("form", {
    onSubmit: handleSubmit,
    className: `bg-${color}-400 rounded pb-4 w-full`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/immobilapp.png",
    className: "w-2/3 ml-1/6 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(Box, {
    name: "Place",
    color: color,
    placeholder: "City or ZIP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(DoubleBox, {
    name: "Price",
    color: color,
    first: "From",
    second: "To",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(Box, {
    name: "Radius",
    color: color,
    placeholder: "in Km",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(Box, {
    name: "Rooms",
    color: color,
    placeholder: "e.g.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("button", {
    className: submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("a", {
    href: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Search")));
};
const FilsterForm = ({
  color
}) => {
  const handleSubmit = event => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/home');
  };

  const submit = `p-1 w-1/3 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/3 my-2 rounded active:bg-${color}-900 focus:outline-none`;
  return __jsx("form", {
    onSubmit: handleSubmit,
    className: `bg-${color}-400 rounded py-8 w-full`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(Box, {
    name: "Place",
    color: color,
    placeholder: "City or ZIP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(DoubleBox, {
    name: "Price",
    color: color,
    first: "From",
    second: "To",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx(Box, {
    name: "Radius",
    color: color,
    placeholder: "in Km",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx(Box, {
    name: "Rooms",
    color: color,
    placeholder: "e.g.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("button", {
    className: submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("a", {
    href: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Apply")));
};

const DoubleBox = ({
  name,
  color,
  first,
  second
}) => {
  const css = `bg-${color}-400 h-auto w-full rounded overflow-hidden`;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("p", {
    className: `h-auto text-2xl text-center w-1/2 float-left`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, name), __jsx("p", {
    className: "w-1/2 float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    className: `bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/6 rounded px-1 border-2 border-${color}-600`,
    placeholder: first,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }), __jsx("input", {
    type: "text",
    className: `bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/6 rounded px-1 border-2 border-${color}-600`,
    placeholder: second,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }))));
};

const Box = ({
  name,
  color,
  placeholder
}) => {
  const css = `bg-${color}-400 h-auto w-full rounded`;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("p", {
    className: `h-auto text-2xl text-center w-1/2 float-left`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, name), __jsx("p", {
    className: "w-1/2 float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    className: `bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/3 rounded border-2 border-${color}-600`,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }))));
};

const InputBox = ({
  name,
  set,
  color
}) => {
  const css = `px-2 bg-${color}-400 h-auto w-full rounded`;
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(TextDisplay, {
    text: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx(Input, {
    set: set,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }));
};

const TextDisplay = ({
  text
}) => {
  const css = `h-auto text-2xl`;
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, text);
};

const Input = ({
  set,
  color
}) => {
  const css = `bg-${color}-200 text-xl h-10 w-full rounded px-1 border-2 border-${color}-600`;

  const handleChange = ({
    target
  }) => {
    set(target.value);
  };

  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    onChange: handleChange,
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }));
};

const Submit = ({
  text,
  color
}) => {
  const css = `p-1 w-32 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/4 my-2 rounded active:bg-${color}-900 focus:outline-none`;
  return __jsx("button", {
    type: "submit",
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, text);
}; //onClick={e => e.stopPropagation() }>
//export default {RegisterForm, LoginForm}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form.tsx */ "./components/form.tsx");
/* harmony import */ var _components_container_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container.tsx */ "./components/container.tsx");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/uro/mms-prototype/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = () => __jsx("div", {
  className: "whitespace-pre-wrap overflow-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/gun/examples/jquery.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/gun/gun.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_components_form_tsx__WEBPACK_IMPORTED_MODULE_2__["StartForm"], {
  color: "gray",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/static/output.css":
/*!**********************************!*\
  !*** ./public/static/output.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/uro/mms-prototype/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "gun":
/*!**********************!*\
  !*** external "gun" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gun");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map