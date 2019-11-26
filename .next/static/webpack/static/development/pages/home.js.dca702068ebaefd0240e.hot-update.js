webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/*! exports provided: RegisterForm, LoginForm, StartForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForm", function() { return RegisterForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartForm", function() { return StartForm; });
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gun */ "./node_modules/gun/gun.js");
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/uro/mms-prototype/components/form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var RegisterForm = function RegisterForm(_ref) {
  var color = _ref.color;
  var gun = gun__WEBPACK_IMPORTED_MODULE_0___default()();
  var user, email, pass;

  var setUser = function setUser(value) {
    user = value;
  };

  var setEmail = function setEmail(value) {
    email = value;
  };

  var setPass = function setPass(value) {
    pass = value;
  };

  var handleSubmit = function handleSubmit(event) {
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
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(InputBox, {
    name: "Username",
    set: setUser,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(InputBox, {
    name: "Email",
    set: setEmail,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(InputBox, {
    name: "Password",
    set: setPass,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(Submit, {
    text: "Register",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};
var LoginForm = function LoginForm(_ref2) {
  var color = _ref2.color;
  var gun = gun__WEBPACK_IMPORTED_MODULE_0___default()();
  var user, email, pass;

  var setUser = function setUser(value) {
    user = value;
  };

  var setPass = function setPass(value) {
    pass = value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    gun.get(user).on(function (data, key) {
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
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(InputBox, {
    name: "Username",
    set: setUser,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(InputBox, {
    name: "Password",
    set: setPass,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(Submit, {
    text: "Login",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};
var StartForm = function StartForm(_ref3) {
  var color = _ref3.color;

  var handleSubmit = function handleSubmit(event) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/home');
  };

  var box = "py-2 ml-8 h-auto w-full rounded";
  var input = "bg-".concat(color, "-200 text-base placeholder-blue-700 text-center h-10 w-1/3 rounded-full px-1 border-2 border-").concat(color, "-600 float-right mr-1/4");
  var price = "bg-".concat(color, "-200 text-base placeholder-blue-700 text-center h-10 w-1/6 rounded-full px-1 border-2 border-").concat(color, "-600");
  var text = "h-auto text-2xl overflow-hidden";
  var submit = "p-1 w-1/3 text-2xl border-2 border-".concat(color, "-800 bg-transparent hover:bg-").concat(color, "-700 hover:text-white ml-1/3 my-2 rounded-full active:bg-").concat(color, "-900 focus:outline-none");
  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "bg-".concat(color, "-400 rounded pb-4 w-full"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("img", {
    src: "/static/immobilapp.png",
    className: "p-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(Box, {
    name: "Place",
    color: color,
    placeholder: "City or ZIP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(DoubleBox, {
    name: "Price",
    color: color,
    first: "From",
    second: "To",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(Box, {
    name: "Radius",
    color: color,
    placeholder: "in Km",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(Box, {
    name: "Rooms",
    color: color,
    placeholder: "e.g.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Search"));
};

var DoubleBox = function DoubleBox(_ref4) {
  var name = _ref4.name,
      color = _ref4.color,
      first = _ref4.first,
      second = _ref4.second;
  var css = "px-2 py-2 bg-".concat(color, "-400 h-auto w-full rounded overflow-hidden");
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("p", {
    className: "h-auto text-2xl text-center w-1/2 float-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, name), __jsx("p", {
    className: "w-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "bg-".concat(color, "-200 text-base placeholder-blue-700 text-center h-10 w-1/6 rounded-full px-1 border-2 border-").concat(color, "-600"),
    placeholder: first,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    className: "bg-".concat(color, "-200 text-base placeholder-blue-700 text-center h-10 w-1/6 rounded-full px-1 border-2 border-").concat(color, "-600"),
    placeholder: second,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })));
};

var Box = function Box(_ref5) {
  var name = _ref5.name,
      color = _ref5.color,
      placeholder = _ref5.placeholder;
  var css = "px-2 py-2 bg-".concat(color, "-400 h-auto w-full rounded overflow-hidden");
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("p", {
    className: "h-auto text-2xl text-center w-1/2 float-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, name), __jsx("p", {
    className: "w-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "bg-".concat(color, "-200 text-base placeholder-blue-700 text-center h-10 w-1/3 rounded-full px-1 border-2 border-").concat(color, "-600"),
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })));
};

var InputBox = function InputBox(_ref6) {
  var name = _ref6.name,
      set = _ref6.set,
      color = _ref6.color;
  var css = "px-2 bg-".concat(color, "-400 h-auto w-full rounded");
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(TextDisplay, {
    text: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(Input, {
    set: set,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }));
};

var TextDisplay = function TextDisplay(_ref7) {
  var text = _ref7.text;
  var css = "h-auto text-2xl";
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, text);
};

var Input = function Input(_ref8) {
  var set = _ref8.set,
      color = _ref8.color;
  var css = "bg-".concat(color, "-200 text-xl h-10 w-full rounded px-1 border-2 border-").concat(color, "-600");

  var handleChange = function handleChange(_ref9) {
    var target = _ref9.target;
    set(target.value);
  };

  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    onChange: handleChange,
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }));
};

var Submit = function Submit(_ref10) {
  var text = _ref10.text,
      color = _ref10.color;
  var css = "p-1 w-32 text-2xl border-2 border-".concat(color, "-800 bg-transparent hover:bg-").concat(color, "-700 hover:text-white ml-1/4 my-2 rounded active:bg-").concat(color, "-900 focus:outline-none");
  return __jsx("button", {
    type: "submit",
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, text);
}; //onClick={e => e.stopPropagation() }>
//export default {RegisterForm, LoginForm}

/***/ })

})
//# sourceMappingURL=home.js.dca702068ebaefd0240e.hot-update.js.map