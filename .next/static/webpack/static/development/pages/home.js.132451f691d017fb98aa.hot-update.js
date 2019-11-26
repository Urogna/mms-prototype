webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form.tsx */ "./components/form.tsx");
/* harmony import */ var _components_list_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list.tsx */ "./components/list.tsx");
/* harmony import */ var _components_container_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container.tsx */ "./components/container.tsx");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/uro/mms-prototype/pages/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Home = function Home() {
  return __jsx("div", {
    className: "whitespace-pre-wrap bg-gray-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/gun/examples/jquery.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/gun/gun.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_container_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mod: [{
      name: "Results",
      jsx: __jsx(_components_list_tsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        css: "w-auto h-full float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
      color: "gray"
    }, {
      name: "Filter",
      jsx: __jsx(_components_form_tsx__WEBPACK_IMPORTED_MODULE_4__["FilsterForm"], {
        color: "gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }),
      color: "gray"
    }],
    css: "w-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

var Nav = function Nav() {
  var links = [{
    href: '/home',
    label: 'Home'
  }, {
    href: '/menu',
    label: 'Menu'
  }].map(function (link) {
    link.key = "nav-link-".concat(link.href, "-").concat(link.label);
    return link;
  }); //position fixed w-64">

  return __jsx("nav", {
    className: "jsx-4120251137" + " " + "bg-gray-500 h-16 top-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4120251137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-4120251137" + " " + "pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-4120251137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/static/immobilapp.png",
    className: "jsx-4120251137" + " " + "w-24 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-4120251137" + " " + "pt-4 mr-4 text-2xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4120251137",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4120251137",
    __self: this
  }, "nav.jsx-4120251137{text-align:center;}ul.jsx-4120251137{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vyby9tbXMtcHJvdG90eXBlL3BhZ2VzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RrQixBQUk2QixBQUdMLGtCQUZmLHdEQUdnQyxtSEFDaEMiLCJmaWxlIjoiL2hvbWUvdXJvL21tcy1wcm90b3R5cGUvcGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7UmVnaXN0ZXJGb3JtLExvZ2luRm9ybSxGaWxzdGVyRm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLnRzeCdcbmltcG9ydCBIb3VzZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0LnRzeCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIudHN4J1xuaW1wb3J0ICcuLi9wdWJsaWMvc3RhdGljL291dHB1dC5jc3MnO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXAgYmctZ3JheS01MDBcIj5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZ3VuL2V4YW1wbGVzL2pxdWVyeS5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ndW4vZ3VuLmpzXCI+PC9zY3JpcHQ+XG4gICAgPE5hdi8+XG4gICAgPENvbnRhaW5lciBtb2Q9e1tcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIlJlc3VsdHNcIixcbiAgICAgICAganN4OiAoPEhvdXNlTGlzdCBjc3M9e1widy1hdXRvIGgtZnVsbCBmbG9hdC1yaWdodFwifS8+KSxcbiAgICAgICAgY29sb3I6XCJncmF5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJGaWx0ZXJcIixcbiAgICAgICAganN4OiAoPEZpbHN0ZXJGb3JtIGNvbG9yPVwiZ3JheVwiLz4pLFxuICAgICAgICBjb2xvcjpcImdyYXlcIlxuICAgICAgfVxuICAgIF19IGNzcz17XCJ3LWF1dG9cIn0vPlxuICA8L2Rpdj5cbilcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7IGhyZWY6ICcvaG9tZScsIGxhYmVsOiAnSG9tZScgfSxcbiAgICB7IGhyZWY6ICcvbWVudScsIGxhYmVsOiAnTWVudScgfSxcbiAgXS5tYXAobGluayA9PiB7XG4gICAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gICAgcmV0dXJuIGxpbmtcbiAgfSlcbiAgIC8vcG9zaXRpb24gZml4ZWQgdy02NFwiPlxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaC0xNiB0b3AtMFwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHQtMVwiPlxuICAgICAgICAgIDxhICBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltbW9iaWxhcHAucG5nXCIgY2xhc3NOYW1lPVwidy0yNCBwLTJcIi8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPVwicHQtNCBtci00IHRleHQtMnhsXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgbmF2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/uro/mms-prototype/pages/home.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.132451f691d017fb98aa.hot-update.js.map