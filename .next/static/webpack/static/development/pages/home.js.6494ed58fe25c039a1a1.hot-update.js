webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/list.tsx":
/*!*****************************!*\
  !*** ./components/list.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/output.css */ "./public/static/output.css");
/* harmony import */ var _public_static_output_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_output_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/uro/mms-prototype/components/list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HomeList = function HomeList() {
  var homes = [];
  objects.forEach(function (obj) {
    homes.push(__jsx(Item, {
      title: obj.title,
      type: obj.type,
      price: obj.price + obj.costs,
      rooms: obj.rooms,
      img: obj.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  });
  return __jsx("p", {
    className: "h-full overflow-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, homes);
};

var Item = function Item(_ref) {
  var title = _ref.title,
      type = _ref.type,
      price = _ref.price,
      rooms = _ref.rooms,
      img = _ref.img;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      selected = _useState[0],
      setSelected = _useState[1];

  if (selected) {
    return __jsx("p", {
      className: "bg-white border-2 border-gray-600 shadow text-xs overflow-hidden text-center",
      onClick: function onClick() {
        setSelected(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("p", {
      className: "p-1 float-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, img), __jsx("p", {
      className: "bg-gray-300",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, title)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "".concat(type, ", ").concat(rooms)), __jsx("p", {
      className: "text-base",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, price, ".-")));
  } else {
    return __jsx("p", {
      className: "h-24 bg-white border-2 border-gray-600 shadow text-xs overflow-hidden text-center",
      onClick: function onClick() {
        setSelected(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("p", {
      className: "w-1/2 float-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, img), __jsx("p", {
      className: "bg-gray-300",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, title)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "".concat(type, ", ").concat(rooms)), __jsx("p", {
      className: "text-base",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, price, ".-")));
  }
};

var objects = [{
  title: "Nice apartment in the outskirts of Bern",
  type: "Apartment",
  price: 1420,
  costs: 200,
  rooms: "2 1/2",
  size: "60m²",
  email: "muster@bern.ch",
  image: __jsx("img", {
    src: "/static/home1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }),
  description: "Ab sofort vermieten wir an zentraler Lage in Bern Wankdorf eine grosse, neu renovierte 2 1/2-Zimmer Wohnung 66.4 m2 mit Balkon 6,2 m2 im 4. Stock plus, Keller und Estrich. Die Wohnung verf\xFCgt \xFCber grosse Zimmer, Reduit, eine modern ausgestattete Wohnk\xFCche inkl. Abwaschmaschine, Waschmaschine mit Tumbler, neues Badezimmer mit Badewanne, Glasfaseranschluss, Eichenparkett im Wohn- & Schlafzimmer ausgezeichnete Lage, n\xE4he zu Schulen, Einkaufsm\xF6glichkeiten, Post und Banken, Wankdorf Bahnhof und Stade de Suisse. Es gibt keinen Lift im Haus.Mietzins inkl. Nebenkosten Fr. 1'620.- monatlich. Falls Sie interessiert sind kontaktieren Sie uns per E-Mail und schreiben bitte etwas \xFCber sich"
}, {
  title: "Nice apartment in the outskirts of Bern",
  type: "Apartment",
  price: 1420,
  costs: 200,
  rooms: "2 1/2",
  size: "60m²",
  email: "muster@bern.ch",
  image: __jsx("img", {
    src: "/static/home1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }),
  description: "Ab sofort vermieten wir an zentraler Lage in Bern Wankdorf eine grosse, neu renovierte 2 1/2-Zimmer Wohnung 66.4 m2 mit Balkon 6,2 m2 im 4. Stock plus, Keller und Estrich. Die Wohnung verf\xFCgt \xFCber grosse Zimmer, Reduit, eine modern ausgestattete Wohnk\xFCche inkl. Abwaschmaschine, Waschmaschine mit Tumbler, neues Badezimmer mit Badewanne, Glasfaseranschluss, Eichenparkett im Wohn- & Schlafzimmer ausgezeichnete Lage, n\xE4he zu Schulen, Einkaufsm\xF6glichkeiten, Post und Banken, Wankdorf Bahnhof und Stade de Suisse. Es gibt keinen Lift im Haus.Mietzins inkl. Nebenkosten Fr. 1'620.- monatlich. Falls Sie interessiert sind kontaktieren Sie uns per E-Mail und schreiben bitte etwas \xFCber sich"
}];
/* harmony default export */ __webpack_exports__["default"] = (HomeList);

/***/ })

})
//# sourceMappingURL=home.js.6494ed58fe25c039a1a1.hot-update.js.map