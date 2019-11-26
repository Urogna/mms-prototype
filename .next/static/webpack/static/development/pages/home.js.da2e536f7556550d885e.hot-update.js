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
  var submit = "p-1 w-32 text-2xl border-2 border-".concat(color, "-800 bg-transparent hover:bg-").concat(color, "-700 hover:text-white ml-1/4 my-2 rounded-full active:bg-").concat(color, "-900 focus:outline-none");
  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "bg-".concat(color, "-400 rounded pb-4"),
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
  }), __jsx("p", {
    className: "".concat(box, " ").concat(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Place"), __jsx("input", {
    type: "text",
    placeholder: "City or ZIP",
    className: input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("p", {
    className: "px-2 py-2 w ".concat(text, " float-left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Price"), __jsx("p", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "From",
    className: price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "To",
    className: price + " float-right mr-1/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx("p", {
    className: "".concat(box, " ").concat(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Radius", __jsx("input", {
    type: "text",
    placeholder: "in Km",
    className: input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("p", {
    className: "".concat(box, " ").concat(text),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Rooms", __jsx("input", {
    type: "text",
    placeholder: "e.g. 1.5",
    className: input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Search"));
};

var InputBox = function InputBox(_ref4) {
  var name = _ref4.name,
      set = _ref4.set,
      color = _ref4.color;
  var css = "px-2 bg-".concat(color, "-400 h-auto w-full rounded");
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(TextDisplay, {
    text: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(Input, {
    set: set,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }));
};

var TextDisplay = function TextDisplay(_ref5) {
  var text = _ref5.text;
  var css = "h-auto text-2xl";
  return __jsx("p", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, text);
};

var Input = function Input(_ref6) {
  var set = _ref6.set,
      color = _ref6.color;
  var css = "bg-".concat(color, "-200 text-xl h-10 w-full rounded px-1 border-2 border-").concat(color, "-600");

  var handleChange = function handleChange(_ref7) {
    var target = _ref7.target;
    set(target.value);
  };

  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    onChange: handleChange,
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }));
};

var Submit = function Submit(_ref8) {
  var text = _ref8.text,
      color = _ref8.color;
  var css = "p-1 w-32 text-2xl border-2 border-".concat(color, "-800 bg-transparent hover:bg-").concat(color, "-700 hover:text-white ml-1/4 my-2 rounded active:bg-").concat(color, "-900 focus:outline-none");
  return __jsx("button", {
    type: "submit",
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, text);
}; //onClick={e => e.stopPropagation() }>
//export default {RegisterForm, LoginForm}

/***/ })

})
//# sourceMappingURL=home.js.da2e536f7556550d885e.hot-update.js.map