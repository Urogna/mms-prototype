webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/container.tsx":
/*!**********************************!*\
  !*** ./components/container.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/uro/mms-prototype/components/container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = function Container(_ref) {
  var mod = _ref.mod,
      css = _ref.css;
  var tags = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  mod.forEach(function (f, i) {
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
      __self: this
    }));
  });
  return __jsx("div", {
    className: css,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, tags, __jsx("div", {
    className: "w-auto overflow-hidden bg-".concat(mod[index].color, "-400 border-2 border-").concat(mod[index].color, "-800 w-64 rounded rounded-t-none"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, mod[index].jsx));
};

var Tag = function Tag(_ref2) {
  var name = _ref2.name,
      index = _ref2.index,
      set = _ref2.set,
      current = _ref2.current,
      color = _ref2.color;
  var selectedClass = "p-1 w-1/2 text-2xl pb-2 -mb-2 border-2 border-b-0 border-".concat(color, "-800 bg-").concat(color, "-400 hover:cursor-default rounded rounded-b-none focus:outline-none");
  var unselectedClass = "p-1 w-1/2 text-2xl border-2 border-".concat(color, "-800 bg-").concat(color, "-200 hover:bg-").concat(color, "-700 hover:text-white rounded active:outline-none active:bg-").concat(color, "-900");
  return __jsx("button", {
    className: index === current ? selectedClass : unselectedClass,
    onClick: function onClick() {
      set(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.cfcdb30458b8bb8653c8.hot-update.js.map