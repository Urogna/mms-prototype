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
      jsx: __jsx(_components_form_tsx__WEBPACK_IMPORTED_MODULE_4__["RegisterForm"], {
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
  }, "nav.jsx-4120251137{text-align:center;}ul.jsx-4120251137{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vyby9tbXMtcHJvdG90eXBlL3BhZ2VzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RrQixBQUk2QixBQUdMLGtCQUZmLHdEQUdnQyxtSEFDaEMiLCJmaWxlIjoiL2hvbWUvdXJvL21tcy1wcm90b3R5cGUvcGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7UmVnaXN0ZXJGb3JtLExvZ2luRm9ybSxGaWxzdGVyRm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLnRzeCdcbmltcG9ydCBIb3VzZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0LnRzeCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXIudHN4J1xuaW1wb3J0ICcuLi9wdWJsaWMvc3RhdGljL291dHB1dC5jc3MnO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXAgYmctZ3JheS01MDBcIj5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZ3VuL2V4YW1wbGVzL2pxdWVyeS5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ndW4vZ3VuLmpzXCI+PC9zY3JpcHQ+XG4gICAgPE5hdi8+XG4gICAgPENvbnRhaW5lciBtb2Q9e1tcbiAgICAgIHtcbiAgICAgICAgbmFtZTpcIlJlc3VsdHNcIixcbiAgICAgICAganN4OiAoPEhvdXNlTGlzdCBjc3M9e1widy1hdXRvIGgtZnVsbCBmbG9hdC1yaWdodFwifS8+KSxcbiAgICAgICAgY29sb3I6XCJncmF5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6XCJGaWx0ZXJcIixcbiAgICAgICAganN4OiAoPFJlZ2lzdGVyRm9ybSBjb2xvcj1cImdyYXlcIi8+KSxcbiAgICAgICAgY29sb3I6XCJncmF5XCJcbiAgICAgIH1cbiAgICBdfSBjc3M9e1widy1hdXRvXCJ9Lz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgeyBocmVmOiAnL2hvbWUnLCBsYWJlbDogJ0hvbWUnIH0sXG4gICAgeyBocmVmOiAnL21lbnUnLCBsYWJlbDogJ01lbnUnIH0sXG4gIF0ubWFwKGxpbmsgPT4ge1xuICAgIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICAgIHJldHVybiBsaW5rXG4gIH0pXG4gICAvL3Bvc2l0aW9uIGZpeGVkIHctNjRcIj5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIGgtMTYgdG9wLTBcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB0LTFcIj5cbiAgICAgICAgICA8YSAgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbW1vYmlsYXBwLnBuZ1wiIGNsYXNzTmFtZT1cInctMjQgcC0yXCIvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cInB0LTQgbXItNCB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/uro/mms-prototype/pages/home.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.fd78acc9d36549cfcb71.hot-update.js.map