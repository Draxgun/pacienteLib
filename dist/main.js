/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 100px;\n}\n\n\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    flex-wrap: wrap;\n    height: 300px;\n    padding: 20px;\n}\n.enfermedadesContainer{\n    width: auto;\n}\n\n\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,cAAc;IACd,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;;AAEf;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;AAEb;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,yBAAyB;;AAE7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;;;AAIA;IACI,WAAW;IACX,6BAA6B;IAC7B,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB;AACJ;;AAEA;IACI,UAAU;IACV,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,6BAA6B;IAC7B,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;EACpB;;AAEF;IACI,0BAA0B;IAC1B,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;;;;IAII,aAAa;AACjB;;;AAGA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,gBAAgB,EAAE,wBAAwB;IAC1C,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;IACxD,sBAAsB;AAC1B;IACI,sBAAsB;AAC1B;IACI,yBAAyB;IACzB,iBAAiB,EAAE,kCAAkC;IACrD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;IAChE,qEAAqE;AACzE;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;AACrB;;;;AAIA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;AAC3B;;;AAGA;IACI,uBAAuB;IACvB,aAAa;IACb,UAAU;AACd;;;;AAIA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,aAAa;IACb,aAAa;AACjB;AACA;IACI,WAAW;AACf;;;;EAIE,qBAAqB;AACvB;AACA,YAAY;AACZ,gBAAgB;AAChB,YAAY;AACZ,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB;;AAEA;;AAEA,YAAY;AACZ,qBAAqB;AACrB,eAAe;AACf","sourcesContent":[":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 100px;\n}\n\n\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    flex-wrap: wrap;\n    height: 300px;\n    padding: 20px;\n}\n.enfermedadesContainer{\n    width: auto;\n}\n\n\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/excel/alergias.csv":
/*!********************************!*\
  !*** ./src/excel/alergias.csv ***!
  \********************************/
/***/ ((module) => {

module.exports = [["Aspirina"],["Latex"],["Lidocaina o Anestesicos"],["Ninguna alergia"],["Otra alergia"],["Penicilina u Otros Antibioticos"],["Sulfas"],["Varias alergias"],["Yodo"],[""]]

/***/ }),

/***/ "./src/excel/anomalias.csv":
/*!*********************************!*\
  !*** ./src/excel/anomalias.csv ***!
  \*********************************/
/***/ ((module) => {

module.exports = [["ANOMALIAS DENTOFACIALES (INCLUSO LA MALOCLUSION).","Excluye: atrofia o hipertrofia hemifacial, hiperplasia o hipoplasia condilar unilateral de los maxilares."],["Anomalia dentofacial, no especificada",""],["Anomalias de la posicion del diente","Apinamiento. Desplazamiento. Diastema. Espaciamiento anormal. Rotacion. Transposicion. Dientes impactados o incluidos con posicion ectopica. Excluye: dientes impactados o incluidos sin posicion anormal."],["Anomalias de la relacion entre los arcos dentarios","Anteposicion. Desviacion de la linea media del arco dentario. Distoclusion. Mesioclusion. Mordida abierta. Mordida cruzada. Oclusion lingual posterior de los dientes maxilares. Sobremordida (excesiva) horizontal, profunda o vertical."],["Anomalias de la relacion maxilobasilar","Asimetria de la mandibula. Prognatismo. Retrognatismo."],["Anomalias dentofaciales funcionales","Cierre anormal de los maxilares. Maloclusion debida a deglucion anormal, habito digital, labial o lingual, respiracion bucal. Excluye bruxismo y rechinamiento de dientes."],["Anomalias evidentes del tamano de los maxilares","Hiperplasia o hipoplasia del maxilar o mandibula. Macrognacia. Micrognacia. Excluye: acromegalia y sindrome de Pierre Robin."],["Maloclusion de tipo no especificado",""],["Otras anomalias dentofaciales",""],["Trastornos de la articulacion temporomaxilar","Casta�eteo maxilar. Complejo o Sindrome de Costen. Sindrome de disfuncion dolorosa de la articulacion temporomandibular. Trastorno de la articulacion temporomaxilar. Excluye: esguince o luxacion reciente de la articulacion temporomaxilar."]]

/***/ }),

/***/ "./src/excel/caries.csv":
/*!******************************!*\
  !*** ./src/excel/caries.csv ***!
  \******************************/
/***/ ((module) => {

module.exports = [["CARIES DENTAL",""],["Caries de la dentina",""],["Caries del cemento",""],["Caries dental no especificada",""],["Caries dentaria detenida",""],["Caries limitada al esmalte","Manchas blancas (caries incipiente)"],["Otras caries dentales",""],[""]]

/***/ }),

/***/ "./src/excel/desarrollo.csv":
/*!**********************************!*\
  !*** ./src/excel/desarrollo.csv ***!
  \**********************************/
/***/ ((module) => {

module.exports = [["TRASTORNOS DEL DESARROLLO Y DE LA ERUPCION DE LOS DIENTES","Excluye: dientes incluidos e impactados"],["Alteraciones en la erupcion dentaria","Caida prematura de los dientes primarios. Denticion precoz. Diente natal. Diente neonatal. Diente primario (persistente) retenido. Erupcion prematura de diente."],["Alteraciones en la formacion dentaria","Aplasia e hipoplasia del cemento. Diente de Turner. Dilaceracion dentaria. Hipoplasia del esmalte. Odontodisplasia regional. Excluye: dientes de Hutchinson y molares moruloides en la sifilis congenita/ dientes moteados."],["Alteraciones hereditarias de la estructura dentaria, no clasificadas en otra parte","Amelogenesis. Dentinogenesis. Odontogenesis. Dientes en concha. Displasia dentinal."],["Anodoncia","Hipodoncia. Oligodoncia."],["Anomalias del tama�o y de la forma del diente","Concrescencia. Fusion. Geminacion. Dientes en forma de clavija (conicos). Dientes evaginados. Dens in dente. Macrodoncia. Microdoncia. Perlas del esmalte. Taurodontismo. Tuberculo paramolar. Excluye: tuberculo de Carabelli."],["Dientes moteados","Esmalte moteado. Fluorosis dental. Opacidad no fluorica del esmalte. Excluye: depositos (adherencias) en los dientes."],["Dientes supernumerarios","Cuarto molar. Dientes suplementarios. Distomolar. Mesiodens. Paramolar."],["Otros trastornos del desarrollo de los dientes","Alteracion del color del diente durante su formacion. Manchas intrinsecas de los dientes SAI."],["Sindrome de la erupcion dentaria",""],["Trastorno del desarrollo de los dientes no especificado ","Trastorno de la odontogenesis SAI."],[""]]

/***/ }),

/***/ "./src/excel/dientes.csv":
/*!*******************************!*\
  !*** ./src/excel/dientes.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["DIENTES INCLUIDOS E IMPACTADOS","Excluye: dientes incluidos e impactados con posicion anormal de los mismos o de los dientes adyacentes."],["Dientes impactados","Diente que no ha erupcionado debido a la obstruccion por otro diente."],["Dientes incluidos ","Diente que no ha erupcionado sin obstruccion por otro diente."],[""]]

/***/ }),

/***/ "./src/excel/dientesOtros.csv":
/*!************************************!*\
  !*** ./src/excel/dientesOtros.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["OTROS TRASTORNOS DE LOS DIENTES Y DE SUS ESTRUCTURAS DE SOSTEN",""],["Atrofia del reborde alveolar desdentado",""],["Exfoliacion de los dientes debida a causas sistemicas",""],["Otras afecciones especificadas de los dientes y de sus estructuras de sosten","Agrandamiento del reborde alveolar. Odontalgia. Prolongacion alveolar irregular."],["Perdida de dientes debida a accidente, extraccion o enfermedad periodontal local",""],["Raiz dental retenida",""],["Trastornos de los dientes y de sus estructuras de sosten, no especificado",""],[""]]

/***/ }),

/***/ "./src/excel/enciaTranstorno.csv":
/*!***************************************!*\
  !*** ./src/excel/enciaTranstorno.csv ***!
  \***************************************/
/***/ ((module) => {

module.exports = [["OTROS TRASTORNOS DE LA ENCIA Y DE LA ZONA EDENTULA","Excluye: atrofia del reborde alveolar edentulo, gingivitis aguda y gingivitis cronica."],["Hiperplasia gingival","Fibromatosis gingival."],["Lesiones de la encia y de la zona edentula asociadas con traumatismo","Hiperplasia irritativa del reborde alveolar edentulo (hiperplasia protesica)."],["Otros trastornos especificados de la encia y de la zona edentula","Epulis de celulas gigantes. Epulis fibroso. Granuloma periferico de celulas gigantes. Granuloma piogeno de la encia. Reblandecimiento del reborde."],["Retraccion gingival","Recesion gingival localizada. Recesion gingival generalizada. Recesion gingival postinfecciosa. Recesion gingival postoperatoria."],["Trastorno no especificado de la encia y de la zona edentula ",""],[""]]

/***/ }),

/***/ "./src/excel/enfermedades.csv":
/*!************************************!*\
  !*** ./src/excel/enfermedades.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["ENFERMEDADES "],["Angina de Pecho"],["Artritis"],["Asma"],["Ataque Cardiaco"],["Cancer"],["Diabetes Tipo 1"],["Diabetes Tipo 2"],["Dolor en Pecho"],["Enfermedad del Higado"],["Enfermedad del Ri�on"],["Enfisema"],["Hepatitis"],["Hipertension"],["Hipoglucemia"],["Hipotension"],["Ninguna enfermedad"],["Otra enfermedad"],["Problema de Tiroides"],["Problemas Estomacales"],["SIDA/ VIH"],["Tuberculosis"],["Varias Enfermedades"],[""]]

/***/ }),

/***/ "./src/excel/estomatitis.csv":
/*!***********************************!*\
  !*** ./src/excel/estomatitis.csv ***!
  \***********************************/
/***/ ((module) => {

module.exports = [["ESTOMATITIS Y LESIONES AFINES","Excluye: Cancrum oris. Estomatitis gangrenosa. Gingivoestomatitis herpetica (herpes simple). Noma. Queilitis."],["Celulitis y absceso de la boca","Abscesos submandibulares. Celulitis del piso de la boca. Excluye absceso de glandula salival o lengua, absceso periapical, absceso periodontal, absceso peritonsilar."],["Estomatitis aftosa recurrente","Aftas de Bednar. Estomatitis aftosa mayor o menor. Estomatitis herpetiforme. Periadenitis mucosa necrotica recurrente. Ulcera aftosa recurrente."],["Otras formas de estomatitis","Estomatitis protesica, ulcerativa, vesiculosa."],[""]]

/***/ }),

/***/ "./src/excel/generales.csv":
/*!*********************************!*\
  !*** ./src/excel/generales.csv ***!
  \*********************************/
/***/ ((module) => {

module.exports = [["ANOMALIAS DENTOFACIALES (INCLUSO LA MALOCLUSION)."],["CARIES DENTAL"],["DIENTES INCLUIDOS E IMPACTADOS"],["ENFERMEDADES DE LA LENGUA"],["ENFERMEDADES DE LA PULPA Y DE LOS TEJIDOS PERIAPICALES"],["ENFERMEDADES DE LAS GLANDULAS SALIVALES"],["ESTOMATITIS Y LESIONES AFINES"],["GINGIVITIS Y ENFERMEDADES PERIODONTALES"],["LUXACION, ESGUINCE Y TORCEDURA DE ARTICULACIONES Y DE LIGAMENTOS DE LA CABEZA"],["OTRAS ENFERMEDADES DE LOS LABIOS Y DE LA MUCOSA BUCAL"],["OTRAS ENFERMEDADES DE LOS MAXILARES"],["OTRAS ENFERMEDADES DE LOS TEJIDOS DUROS DE LOS DIENTES"],["OTROS TRASTORNOS DE LA ENCIA Y DE LA ZONA EDENTULA"],["OTROS TRASTORNOS DE LOS DIENTES Y DE SUS ESTRUCTURAS DE SOSTEN"],["QUISTES DE LA REGION BUCAL, NO CLASIFICADOS EN OTRA PARTE"],["TRASTORNOS DEL DESARROLLO Y DE LA ERUPCION DE LOS DIENTES"]]

/***/ }),

/***/ "./src/excel/gingivitis.csv":
/*!**********************************!*\
  !*** ./src/excel/gingivitis.csv ***!
  \**********************************/
/***/ ((module) => {

module.exports = [["GINGIVITIS Y ENFERMEDADES PERIODONTALES","Columna1"],["Gingivitis aguda","Excluye gingivitis ulceronecrotica aguda y gingivoestomatitis herpetica"],["Enfermedad del periodonto no especificada",""],["Gingivitis cronica","Gingivitis cronica descamativa, gingivitis cronica hiperplasica, gingivitis cronica marginal simple, gingivitis cronica ulcerativa."],["Otras enfermedades periodontales",""],["Periodontitis aguda","Absceso paradental. Absceso periodontal. Pericoronitis aguda. Excluye: absceso periapical con fistula/ periodontitis apical aguda."],["Periodontitis cronica","Pericoronitis cronica. Periodontitis simple. Periodontitis complicada."],["Periodontosis (juvenil)",""],[""]]

/***/ }),

/***/ "./src/excel/habitos.csv":
/*!*******************************!*\
  !*** ./src/excel/habitos.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["HABITOS PERNICIOSOS"],["Fumar"],["Alcohol"],["Cocaina"],["Otras drogas"],["Otros habitos"],["Ningun habito"],["Varios habitos"],[""]]

/***/ }),

/***/ "./src/excel/labiosOtros.csv":
/*!***********************************!*\
  !*** ./src/excel/labiosOtros.csv ***!
  \***********************************/
/***/ ((module) => {

module.exports = [["OTRAS ENFERMEDADES DE LOS LABIOS Y DE LA MUCOSA BUCAL","Incluye alteraciones epiteliales de la lengua. Excluye: enfermedades de la lengua, estomatitis y lesiones afines, otros trastornos de la encia y de la zona edentula, quistes de la region bucal."],["Enfermedades de los labios","Perleche o queilitis angular. Queilitis angular, exfoliativa, glandular. Queilodinia. Queilosis. Excluye ariboflavinosis (por deficiencia de riboflavina), Perleche debido a candidiasis, Perleche debido a deficiencia de riboflavina. Queilitis debida a trastornos relacionados con la radiacion."],["Fibrosis de la submucosa bucal",""],["Granuloma y lesiones semejantes de la mucosa bucal","Granuloma eosinofilo. Granuloma piogenico. Xantoma verrugiforme."],["Hiperplasia irritativa de la mucosa bucal","Excluye hiperplasia irritativa de la zona edentula (hiperplasia protesica)"],["Leucoplasia pilosa",""],["Leucoplasia y otras alteraciones del epitelio bucal, incluyendo la lengua","Eritroplasia. Leucoedema. Leucoqueratosis nicotinica palatina. Paladar del fumador. Excluye leucoplasia pilosa."],["Mordedura del labio y de la mejilla",""],["Otras lesiones y las no especificadas de la mucosa bucal","Mucinosis bucal focal"],[""]]

/***/ }),

/***/ "./src/excel/lengua.csv":
/*!******************************!*\
  !*** ./src/excel/lengua.csv ***!
  \******************************/
/***/ ((module) => {

module.exports = [["ENFERMEDADES DE LA LENGUA","Excluye fibrosis de la submucosa de la lengua, eritroplasia de la lengua, hiperplasia epitelial focal de la lengua, leucoedema de la lengua, leucoplasia de la lengua, leucoplasia pilosa de la lengua, macroglosia."],["Atrofia de las papilas linguales","Glositis atrofica"],["Enfermedades de la lengua, no especificada.","Glosopatia"],["Glositis","Absceso de la lengua. Ulcera traumatica de la lengua. Excluye glositis atrofica."],["Glositis romboidea mediana",""],["Glosodinia","Glosopirosis. Lengua dolorosa."],["Hipertrofia de las papilas linguales","Hipertrofia de las papilas foliaceas. Lengua negra pilosa. Lengua negra vellosa, Lengua saburral."],["Lengua geografica","Glositis areata exfoliativa. Glositis migratoria benigna."],["Lengua plegada","Lengua con surcos. Lengua escrotal. Lengua fisurada. Excluye lengua fisurada congenita."],["Otras enfermedades de la lengua","Agrandamiento. Atrofia. Crenacion de la lengua. Hipertrofia."],[""]]

/***/ }),

/***/ "./src/excel/luxacion.csv":
/*!********************************!*\
  !*** ./src/excel/luxacion.csv ***!
  \********************************/
/***/ ((module) => {

module.exports = [["LUXACION, ESGUINCE Y TORCEDURA DE ARTICULACIONES Y DE LIGAMENTOS DE LA CABEZA","Columna1"],["Esguinces y torceduras de articulaciones y ligamentos de otras partes y las no especificadas de la cabeza",""],["Esguinces y torceduras del maxilar","Articulacion o ligamento temporomaxilar"],["Luxacion de otras partes y de las no especificadas de la cabeza",""],["Luxacion del cartilago septal de la nariz",""],["Luxacion del diente",""],["Luxacion del maxilar","Mandibula. Maxilar. Temporomaxilar."],[""]]

/***/ }),

/***/ "./src/excel/maxilaresOtros.csv":
/*!**************************************!*\
  !*** ./src/excel/maxilaresOtros.csv ***!
  \**************************************/
/***/ ((module) => {

module.exports = [["OTRAS ENFERMEDADES DE LOS MAXILARES",""],["Afecciones inflamatorias de los maxilares","Osteitis. Osteomielitis neonatal. Osteorradionecrosis. Periostitis, Secuestro oseo de los maxilares. "],["Alveolitis del maxilar","Alveolo seco. Osteitis alveolar."],["Enfermedades de los maxilares, no especificada.",""],["Granuloma central de celulas gigantes","Excluye granuloma periferico de celulas gigantes."],["Otras enfermedades especificadas de los maxilares","Displasia fibrosa. Exostosis. Hiperplasia o hipoplasia maxilar. Hiperplasia o hipoplasia condilar mandibular. Querubismo."],["Trastornos del desarrollo de los maxilares","Quiste latente oseo de los maxilares. Quiste de Stafne. Torus mandibular. Torus palatino."],[""]]

/***/ }),

/***/ "./src/excel/pulpa.csv":
/*!*****************************!*\
  !*** ./src/excel/pulpa.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["ENFERMEDADES DE LA PULPA Y DE LOS TEJIDOS PERIAPICALES","Columna1"],["Absceso periapical con fistula","Absceso dental con fistula. Absceso dentoalveolar con fistula."],["Absceso periapical sin fistula","Absceso dental sin fistula. Absceso dentoalveolar sin fistula."],["Degeneracion de la pulpa","Calcificaciones de la pulpa. Piedras. Denticulos."],["Formacion anormal de tejido duro en la pulpa","Dentina secundaria o irregular."],["Necrosis de la pulpa","Gangrena de la pulpa."],["Otras enfermedades y las no especificadas de la pulpa y del tejido periapical",""],["Periodontitis apical aguda originada en la pulpa",""],["Periodontitis apical cronica","Granuloma apical o periapical. Periodontitis apical cronica."],["Pulpitis","Absceso. Polipo. Pulpitis aguda. Pulpitis cronica (hiperplasica, ulcerativa). Pulpitis supurativa."],["Quiste radicular","Quiste apical (periodontal). Quiste periapical. Quiste radicular residual. Excluye: quiste lateral periodontal."],[""]]

/***/ }),

/***/ "./src/excel/quistes.csv":
/*!*******************************!*\
  !*** ./src/excel/quistes.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["QUISTES DE LA REGION BUCAL, NO CLASIFICADOS EN OTRA PARTE","Lesiones que muestran caracteristicas histologicas de quiste aneurismatico y de otra lesion osteofibrosa. Excluye quiste radicular."],["Otros quistes de la region bucal, no clasificados en otra parte","Perla de Epstein. Quistes: dermoide, epidermoide, linfoepitelial, nasoalveolar, nasolabial."],["Otros quistes de los maxilares","Quiste maxilar aneurismatico. Quiste maxilar hemorragico. Quiste maxilar traumatico. Excluye quiste de Stafne. Quiste latente oseo de los maxilares. "],["Quistes de la region bucal, sin otra especificacion",""],["Quistes de las fisuras (no odontogenicos)","Quistes del: canal incisivo, globulomaxilar, nasopalatino, palatino medio, papila palatina."],["Quistes originados por el desarrollo de los dientes (quistes odontogenicos)","Queratoquiste. Quistes: dentigero, erupcion dentaria, folicular, gingival, lateral periodontal, primordial."],[""]]

/***/ }),

/***/ "./src/excel/salivales.csv":
/*!*********************************!*\
  !*** ./src/excel/salivales.csv ***!
  \*********************************/
/***/ ((module) => {

module.exports = [["ENFERMEDADES DE LAS GLANDULAS SALIVALES",""],["Absceso de glandula salival",""],["Alteraciones de la secrecion salival","Hiposecrecion salival. Ptialismo. Xerostomia. Excluye Sindrome de Sj�gren."],["Atrofia de glandula salival",""],["Enfermedad de glandula salival, no especificada","Sialadenopatia"],["Fistula de glandula salival","Excluye fistula congenita de glandula salival."],["Hipertrofia de glandula salival",""],["Mucocele de glandula salival","Quiste mucoso de glandula salival por extravasacion o por retencion. Ranula."],["Otras enfermedades de las glandulas salivales","Enfermedad de Mikulicz. Estenosis del conducto salival. Sialometaplasia necrotizante. Excluye sindrome seco (Sj�gren)."],["Sialoadenitis","Excluye: fiebre uveoparotidea (Heerfordt), parotiditis infecciosa (epidemica)."],["Sialolitiasis","Calculo de conducto o de glandula salival."],[""]]

/***/ }),

/***/ "./src/excel/tejidosOtros.csv":
/*!************************************!*\
  !*** ./src/excel/tejidosOtros.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["OTRAS ENFERMEDADES DE LOS TEJIDOS DUROS DE LOS DIENTES","Excluye: bruxismo, caries dental, rechinamiento de dientes."],["Abrasion de los dientes","Abrasion por dentifrico, habitos, ocupacional, ritual, tradicional. Defecto cuneiforme de los dientes."],["Anquilosis dental",""],["Atricion excesiva de los dientes","Desgaste oclusal. Desgaste proximal."],["Cambios posteruptivos del color de los tejidos dentales duros","Excluye depositos (acreciones) en los dientes."],["Depositos (acreciones) en los dientes","Calculo dental supragingival o subgingival. Deposito en los dientes anaranjado, betel, materia alba, negro, tabaco, verde. Pigmentacion de los dientes."],["Enfermedad no especificada de los tejidos dentales duros",""],["Erosion de los dientes","Debida a dieta, drogas y medicamentos, vomito persistente, idiopatica, ocupacional."],["Hipercementosis","Hiperplasia del cemento."],["Otras enfermedades especificadas de los tejidos duros de los dientes","Dentina sensible. Esmalte irradiado."],["Reabsorcion patologica de los dientes","Granuloma interno de la pulpa. Reabsorcion externa de los dientes."],[""]]

/***/ }),

/***/ "./src/excel/tratamientos.csv":
/*!************************************!*\
  !*** ./src/excel/tratamientos.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["TRATAMIENTOS"],["Ajuste oclusal"],["Biopulpectomia"],["Canalizacion con especialista"],["Curetaje abierto"],["Curetaje cerrado"],["Exodoncia quirurgica"],["Exodoncia simple"],["Instruccion de tecnica de cepillado"],["Interconsulta con cirujano maxilofacial"],["Interconsulta con endodoncista"],["Necropulpectomia"],["Obturacion permanente"],["Obturacion temporal"],["Operatoria Dental"],["Orientacion sobre salud dental"],["Profilaxis"],["Pulpectomia"],["Pulpotomia"],["Retiro de suturas"],["Seguimiento post-extraccion"],["Sellador de fosetas y fisuras"],["Solicitud de estudios complementarios"],[""]]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData)
/* harmony export */ });
/* harmony import */ var _excel_generales_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excel/generales.csv */ "./src/excel/generales.csv");
/* harmony import */ var _excel_generales_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_excel_generales_csv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _excel_alergias_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excel/alergias.csv */ "./src/excel/alergias.csv");
/* harmony import */ var _excel_alergias_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_excel_alergias_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _excel_anomalias_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excel/anomalias.csv */ "./src/excel/anomalias.csv");
/* harmony import */ var _excel_anomalias_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_excel_anomalias_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _excel_caries_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excel/caries.csv */ "./src/excel/caries.csv");
/* harmony import */ var _excel_caries_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_excel_caries_csv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _excel_dientes_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./excel/dientes.csv */ "./src/excel/dientes.csv");
/* harmony import */ var _excel_dientes_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_excel_dientes_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _excel_enfermedades_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excel/enfermedades.csv */ "./src/excel/enfermedades.csv");
/* harmony import */ var _excel_enfermedades_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_excel_enfermedades_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _excel_lengua_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./excel/lengua.csv */ "./src/excel/lengua.csv");
/* harmony import */ var _excel_lengua_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_excel_lengua_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _excel_pulpa_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./excel/pulpa.csv */ "./src/excel/pulpa.csv");
/* harmony import */ var _excel_pulpa_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_excel_pulpa_csv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _excel_salivales_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./excel/salivales.csv */ "./src/excel/salivales.csv");
/* harmony import */ var _excel_salivales_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_excel_salivales_csv__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _excel_estomatitis_csv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./excel/estomatitis.csv */ "./src/excel/estomatitis.csv");
/* harmony import */ var _excel_estomatitis_csv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_excel_estomatitis_csv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _excel_gingivitis_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./excel/gingivitis.csv */ "./src/excel/gingivitis.csv");
/* harmony import */ var _excel_gingivitis_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_excel_gingivitis_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _excel_habitos_csv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./excel/habitos.csv */ "./src/excel/habitos.csv");
/* harmony import */ var _excel_habitos_csv__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_excel_habitos_csv__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _excel_luxacion_csv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./excel/luxacion.csv */ "./src/excel/luxacion.csv");
/* harmony import */ var _excel_luxacion_csv__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_excel_luxacion_csv__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _excel_labiosOtros_csv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./excel/labiosOtros.csv */ "./src/excel/labiosOtros.csv");
/* harmony import */ var _excel_labiosOtros_csv__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_excel_labiosOtros_csv__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _excel_maxilaresOtros_csv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./excel/maxilaresOtros.csv */ "./src/excel/maxilaresOtros.csv");
/* harmony import */ var _excel_maxilaresOtros_csv__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_excel_maxilaresOtros_csv__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _excel_tejidosOtros_csv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./excel/tejidosOtros.csv */ "./src/excel/tejidosOtros.csv");
/* harmony import */ var _excel_tejidosOtros_csv__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_excel_tejidosOtros_csv__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _excel_enciaTranstorno_csv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./excel/enciaTranstorno.csv */ "./src/excel/enciaTranstorno.csv");
/* harmony import */ var _excel_enciaTranstorno_csv__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_excel_enciaTranstorno_csv__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _excel_dientesOtros_csv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./excel/dientesOtros.csv */ "./src/excel/dientesOtros.csv");
/* harmony import */ var _excel_dientesOtros_csv__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_excel_dientesOtros_csv__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _excel_quistes_csv__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./excel/quistes.csv */ "./src/excel/quistes.csv");
/* harmony import */ var _excel_quistes_csv__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_excel_quistes_csv__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _excel_desarrollo_csv__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./excel/desarrollo.csv */ "./src/excel/desarrollo.csv");
/* harmony import */ var _excel_desarrollo_csv__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_excel_desarrollo_csv__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _excel_tratamientos_csv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./excel/tratamientos.csv */ "./src/excel/tratamientos.csv");
/* harmony import */ var _excel_tratamientos_csv__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_excel_tratamientos_csv__WEBPACK_IMPORTED_MODULE_20__);
























let loadData = () =>{


    let generalArray = deArray((_excel_generales_csv__WEBPACK_IMPORTED_MODULE_0___default()))
    let alergiasArray = deArray((_excel_alergias_csv__WEBPACK_IMPORTED_MODULE_1___default()))
    let enfermedadesArray = deArray((_excel_enfermedades_csv__WEBPACK_IMPORTED_MODULE_5___default()))
    let habitosArray = deArray((_excel_habitos_csv__WEBPACK_IMPORTED_MODULE_11___default()))
    let tratamientosArray = deArray((_excel_tratamientos_csv__WEBPACK_IMPORTED_MODULE_20___default()))

    
    let generalesArray = [(_excel_anomalias_csv__WEBPACK_IMPORTED_MODULE_2___default()),(_excel_caries_csv__WEBPACK_IMPORTED_MODULE_3___default()),(_excel_dientes_csv__WEBPACK_IMPORTED_MODULE_4___default()),(_excel_lengua_csv__WEBPACK_IMPORTED_MODULE_6___default()),(_excel_pulpa_csv__WEBPACK_IMPORTED_MODULE_7___default()),(_excel_salivales_csv__WEBPACK_IMPORTED_MODULE_8___default()),(_excel_estomatitis_csv__WEBPACK_IMPORTED_MODULE_9___default()),(_excel_gingivitis_csv__WEBPACK_IMPORTED_MODULE_10___default()),(_excel_luxacion_csv__WEBPACK_IMPORTED_MODULE_12___default()),(_excel_labiosOtros_csv__WEBPACK_IMPORTED_MODULE_13___default()),(_excel_maxilaresOtros_csv__WEBPACK_IMPORTED_MODULE_14___default()),(_excel_tejidosOtros_csv__WEBPACK_IMPORTED_MODULE_15___default()),(_excel_enciaTranstorno_csv__WEBPACK_IMPORTED_MODULE_16___default()),(_excel_dientesOtros_csv__WEBPACK_IMPORTED_MODULE_17___default()),(_excel_quistes_csv__WEBPACK_IMPORTED_MODULE_18___default()),(_excel_desarrollo_csv__WEBPACK_IMPORTED_MODULE_19___default())]
    
    

    let mainArray = [generalArray,alergiasArray,enfermedadesArray,habitosArray,tratamientosArray,generalesArray]
    
    return mainArray
}





/* Function in charge of changing the values into a normal array */
let deArray = (array) => {
    let deArrayed= [].concat.apply([], array);
    return deArrayed
}





/***/ }),

/***/ "./src/domCreatorFunctions.js":
/*!************************************!*\
  !*** ./src/domCreatorFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMContainer": () => (/* binding */ createDOMContainer),
/* harmony export */   "createDOMElement": () => (/* binding */ createDOMElement)
/* harmony export */ });
let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


let createDOMContainer = (classlistName,name) =>{
    
    if (name === undefined){
        let container = document.createElement('div')
        container.classList.add(classlistName)
        
        return container
    }
    
    let container = document.createElement('div')
    container.classList.add(classlistName)
    container.setAttribute('id', name)
    
    return container

}

let createDOMElement = (type,classlist,textContent,name) =>{
    
        
    if (name === undefined){
        if(type === 'button' || type === 'input'){
            let element = document.createElement(`${type}`)
            element.textContent = capitalizeFirstLetter(textContent)
            element.classList.add(`${classlist}`)
    
            return element
        }else{
            let element = document.createElement(`${type}`)
            element.textContent = capitalizeFirstLetter(textContent)
            element.classList.add(`${classlist}`)
    
            return element
        }
        
    }
    
    
    if(type === 'button' || type === 'input'){
        let element = document.createElement(`${type}`)
        element.textContent = capitalizeFirstLetter(textContent)
        element.setAttribute('id',`${name}${capitalizeFirstLetter(type)}`)
        element.classList.add(`${classlist}`)

        return element
    }else{
        let element = document.createElement(`${type}`)
        element.textContent = capitalizeFirstLetter(textContent)
        element.setAttribute('id',`${name}`)
        element.classList.add(`${classlist}`)

        return element
    }
    
    
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPageStructure": () => (/* binding */ loadPageStructure)
/* harmony export */ });

let loadPageStructure = () => {
}



/***/ }),

/***/ "./src/modalCreators.js":
/*!******************************!*\
  !*** ./src/modalCreators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalStructure": () => (/* binding */ createModalStructure)
/* harmony export */ });
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");


let createModalStructure = (content,modalName,title,openButton)=>{


    /* Creates the modal Container */
    let modalContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('modal',modalName)
    
    let modalContent = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('modalContent')

    /* Creates the modal header */
    let modalHeader = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)(`${modalName}Header`)
    
    /* Creates the modal title */
    let modalTitle = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','modalHeaderTitle',title)
    modalHeader.appendChild(modalTitle)
    /* Creates the close button*/
    let close  = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button','close','x')
    modalHeader.appendChild(close)

    /* Adds the modal */
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(content)

    modalContainer.appendChild(modalContent)

    openButton.addEventListener('click',()=>{
        document.body.appendChild(modalContainer)
        modalContainer.style.display = "block";

    })
    close.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    
    
    })

}



/***/ }),

/***/ "./src/patientModal.js":
/*!*****************************!*\
  !*** ./src/patientModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPatientModalContent": () => (/* binding */ addPatientModalContent)
/* harmony export */ });
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");
/* harmony import */ var _modalCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalCreators */ "./src/modalCreators.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");








let addPatientModalContent = () => {

    /* Loads the main array */
    let mainArray = (0,_data__WEBPACK_IMPORTED_MODULE_2__.loadData)()

    let general = mainArray[0]
    let alergias = mainArray[1]
    let enfermedades = mainArray[2]
    let habitos = mainArray[3]
    let tratamientos = mainArray[4]
    let specific = mainArray[5]


    /* Main container for the modal */
    let mainForm = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('form','patientForm','','')

    /* Patient form sides */
    let rightSide = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFormRight')
    let leftSide = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFormLeft')

    let topSide = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFormTop')
    let bottomSide = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFormBottom')

    /*Main Design Right Side*/
    let nameLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Nombre')
    nameLabel.setAttribute('for','fname')
    
    let nameInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','formTextInput','','fname')
    nameInput.type = 'text'

    rightSide.appendChild(nameLabel);
    rightSide.appendChild(nameInput);


    /*General*/
    let generalLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Diagnostico General')
    generalLabel.setAttribute('for','fgeneral')
    
    let generalInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','fgeneral')


    for(let i = 0; i < general.length; i++){
        generalInput.options.add(new Option(general[i], general[i]));
    }   

    rightSide.appendChild(generalLabel);
    rightSide.appendChild(generalInput);

    /* Especifico */
    let specificLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Diagnostico Especifico')
    specificLabel.setAttribute('for','fspecific')
    
    let specificInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','fspecific')


    generalInput.addEventListener('change',(event) =>{
        
        let elementIndexSelected = general.indexOf(event.target.value)
        let specificArray = specific[elementIndexSelected].map((element)=>{
            return element[0]
        })
        let notesSpecificArray = specific[elementIndexSelected].map((element)=>{
            return element[1]
        })
        

        /*Clears all values of the list an resets them */
        specificInput.length =0;
        for(let i = 0; i < specificArray.length; i++){
            
            specificInput.options.add(new Option(specificArray[i], specificArray[i]));
        }   
    

    })

    rightSide.appendChild(specificLabel);
    rightSide.appendChild(specificInput);

    /* Tratamientos*/
    let tratamientosLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Tratamiento')
    tratamientosLabel.setAttribute('for','ftratamiento')
    
    let tratamientosInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','ftratamiento')
    
    for(let i = 0; i < tratamientos.length; i++){
        tratamientosInput.options.add(new Option(tratamientos[i], tratamientos[i]));
    } 

    rightSide.appendChild(tratamientosLabel);
    rightSide.appendChild(tratamientosInput);

    /* Alergias Container */
    let alergiasContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('alergiasContainer')

    /*Alergias*/
    let alergiasLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Alergias')
    alergiasContainer.appendChild(alergiasLabel)

    let checkboxContainerAlergias = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkboxContainer')

    for (let i=0; i<alergias.length;i++){
        console.log(alergias[i])
        let currentAlergyInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','alergyCheckbox','',`alergy${alergias[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',alergias[i])
        currentAlergyInput.setAttribute('value',alergias[i])

        let currentAlergyLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','checboxLabel',`${alergias[i]}`)


        let container = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerAlergias.appendChild(container)
    }

    alergiasContainer.appendChild(checkboxContainerAlergias)



    bottomSide.appendChild(alergiasContainer)

    /* enfermedades Container */
    let enfermedadesContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('enfermedadesContainer')

    /*enfermedades*/
    let enfermedadesLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','enfermedades')
    enfermedadesContainer.appendChild(enfermedadesLabel)

    let checkboxContainerEnfermedades = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkboxContainer')

    for (let i=0; i<enfermedades.length;i++){
        console.log(enfermedades[i])
        let currentAlergyInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','alergyCheckbox','',`alergy${enfermedades[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',enfermedades[i])
        currentAlergyInput.setAttribute('value',enfermedades[i])

        let currentAlergyLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','checboxLabel',`${enfermedades[i]}`)




        let container = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerEnfermedades.appendChild(container)
    } 

    enfermedadesContainer.appendChild(checkboxContainerEnfermedades)


    bottomSide.appendChild(enfermedadesContainer)

    /* habitos Container */
    let habitosContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('habitosContainer')

    /*habitos*/
    let habitosLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','habitos')
    habitosContainer.appendChild(habitosLabel)

    let checkboxContainerHabitos = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkboxContainer')

    for (let i=0; i<habitos.length;i++){
        console.log(habitos[i])
        let currentAlergyInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','alergyCheckbox','',`alergy${habitos[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',habitos[i])
        currentAlergyInput.setAttribute('value',habitos[i])

        let currentAlergyLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','checboxLabel',`${habitos[i]}`)

        let container = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerHabitos.appendChild(container)
    }
    
    habitosContainer.appendChild(checkboxContainerHabitos)

    bottomSide.appendChild(habitosContainer)

    /* Left Side */

    /*AGE*/
    let edadLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Edad')
    edadLabel.setAttribute('for','fedad')

    let edadInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','ageInput','','fedad')
    edadInput.type = 'number'

    leftSide.appendChild(edadLabel)
    leftSide.appendChild(edadInput)

    /* Sexo */
    let sexoLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Sexo')
    sexoLabel.setAttribute('for','fsexo')

    let sexoInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','sexInput','','fsexo')
    let sexes = ['Masculino','Femenino','Otro']

    for(let i = 0; i < sexes.length; i++){
        sexoInput.options.add(new Option(sexes[i], sexes[i]));
    } 

    leftSide.appendChild(sexoLabel)
    leftSide.appendChild(sexoInput)


    topSide.appendChild(rightSide);
    topSide.appendChild(leftSide);
    mainForm.appendChild(topSide)
    mainForm.appendChild(bottomSide);



    let addButton = document.getElementById('addPatientButton')

    ;(0,_modalCreators__WEBPACK_IMPORTED_MODULE_1__.createModalStructure)(mainForm,'modal','Agregar Paciente',addButton)
    return mainForm
 
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _patientModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patientModal */ "./src/patientModal.js");







(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStructure)()
;(0,_patientModal__WEBPACK_IMPORTED_MODULE_2__.addPatientModalContent)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixHQUFHLE1BQU0sd0NBQXdDLDZCQUE2QixHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxHQUFHLGVBQWUsb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0NBQW9DLGtCQUFrQixLQUFLLGlCQUFpQixrQ0FBa0Msd0JBQXdCLDBCQUEwQixvQkFBb0IsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsNkJBQTZCLDZCQUE2QiwwQkFBMEIsaUJBQWlCLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsU0FBUyxpQkFBaUIsa0JBQWtCLDBCQUEwQixvQkFBb0IsZ0NBQWdDLFNBQVMsMENBQTBDLDhCQUE4QixHQUFHLGtCQUFrQixvQ0FBb0MsMEJBQTBCLHdCQUF3QixtQkFBbUIsbUJBQW1CLDBCQUEwQixpQ0FBaUMsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsbUJBQW1CLGtCQUFrQixvQ0FBb0Msb0JBQW9CLHNCQUFzQiwwQkFBMEIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGlCQUFpQixXQUFXLGlCQUFpQixnQ0FBZ0MsMEJBQTBCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDBCQUEwQixxQ0FBcUMsR0FBRyxRQUFRLGlDQUFpQyxvQ0FBb0MseUJBQXlCLG9DQUFvQywwQkFBMEIsd0JBQXdCLEdBQUcsWUFBWSx5Q0FBeUMseUJBQXlCLEtBQUssc0JBQXNCLGlDQUFpQyxvQ0FBb0Msb0JBQW9CLDBCQUEwQix3QkFBd0IsMEJBQTBCLG1CQUFtQixLQUFLLDRCQUE0Qiw4QkFBOEIsR0FBRyxrRUFBa0Usb0JBQW9CLEdBQUcsNENBQTRDLHFCQUFxQiw4Q0FBOEMscUNBQXFDLHdDQUF3Qyx1Q0FBdUMsYUFBYSxtQkFBbUIsb0NBQW9DLHVDQUF1QyxpRUFBaUUsNkRBQTZELG1EQUFtRCxHQUFHLDhDQUE4QyxnQ0FBZ0MseUJBQXlCLHVEQUF1RCw2QkFBNkIsa0JBQWtCLGlJQUFpSSxHQUFHLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixvQkFBb0IsR0FBRyxzQkFBc0Isa0NBQWtDLHdCQUF3QixJQUFJLHdCQUF3QixvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsR0FBRyxlQUFlLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG9DQUFvQyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLG1CQUFtQixpQ0FBaUMsMEJBQTBCLDhCQUE4Qix5QkFBeUIsR0FBRyxpQkFBaUIsbUJBQW1CLGlDQUFpQywwQkFBMEIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixvQkFBb0IsaUJBQWlCLEdBQUcsdUVBQXVFLG9CQUFvQiw2QkFBNkIsR0FBRyw2R0FBNkcsd0JBQXdCLGtDQUFrQywwQkFBMEIsb0NBQW9DLDBCQUEwQixzQkFBc0IseUJBQXlCLEdBQUcsZ0RBQWdELG9CQUFvQiw2QkFBNkIsa0JBQWtCLHNCQUFzQixvQkFBb0Isb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLDBDQUEwQyxlQUFlLG1CQUFtQixlQUFlLGVBQWUsa0JBQWtCLG9CQUFvQixHQUFHLGlDQUFpQyxlQUFlLHdCQUF3QixrQkFBa0IsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsUUFBUSxVQUFVLFFBQVEsWUFBWSxNQUFNLHNCQUFzQix1QkFBdUIscUJBQXFCLHlCQUF5QixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVkseUJBQXlCLFdBQVcsWUFBWSx1QkFBdUIsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLCtCQUErQixzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIsR0FBRyxNQUFNLHdDQUF3Qyw2QkFBNkIsR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixxQ0FBcUMsR0FBRyxlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9DQUFvQyxrQkFBa0IsS0FBSyxpQkFBaUIsa0NBQWtDLHdCQUF3QiwwQkFBMEIsb0JBQW9CLEdBQUcsU0FBUyxvQkFBb0IsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsMEJBQTBCLGlCQUFpQixvQkFBb0IsZ0JBQWdCLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLFNBQVMsaUJBQWlCLGtCQUFrQiwwQkFBMEIsb0JBQW9CLGdDQUFnQyxTQUFTLDBDQUEwQyw4QkFBOEIsR0FBRyxrQkFBa0Isb0NBQW9DLDBCQUEwQix3QkFBd0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsaUNBQWlDLEdBQUcsd0JBQXdCLDhCQUE4QixHQUFHLG1CQUFtQixrQkFBa0Isb0NBQW9DLG9CQUFvQixzQkFBc0IsMEJBQTBCLG9CQUFvQixvQkFBb0IsMEJBQTBCLDZCQUE2QixpQkFBaUIsV0FBVyxpQkFBaUIsZ0NBQWdDLDBCQUEwQix3QkFBd0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIscUNBQXFDLEdBQUcsUUFBUSxpQ0FBaUMsb0NBQW9DLHlCQUF5QixvQ0FBb0MsMEJBQTBCLHdCQUF3QixHQUFHLFlBQVkseUNBQXlDLHlCQUF5QixLQUFLLHNCQUFzQixpQ0FBaUMsb0NBQW9DLG9CQUFvQiwwQkFBMEIsd0JBQXdCLDBCQUEwQixtQkFBbUIsS0FBSyw0QkFBNEIsOEJBQThCLEdBQUcsa0VBQWtFLG9CQUFvQixHQUFHLDRDQUE0QyxxQkFBcUIsOENBQThDLHFDQUFxQyx3Q0FBd0MsdUNBQXVDLGFBQWEsbUJBQW1CLG9DQUFvQyx1Q0FBdUMsaUVBQWlFLDZEQUE2RCxtREFBbUQsR0FBRyw4Q0FBOEMsZ0NBQWdDLHlCQUF5Qix1REFBdUQsNkJBQTZCLGtCQUFrQixpSUFBaUksR0FBRyxtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsb0JBQW9CLEdBQUcsc0JBQXNCLGtDQUFrQyx3QkFBd0IsSUFBSSx3QkFBd0Isb0JBQW9CLEdBQUcsd0NBQXdDLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsZUFBZSx3QkFBd0Isa0NBQWtDLDBCQUEwQixvQ0FBb0MseUJBQXlCLDBCQUEwQixHQUFHLGlCQUFpQixtQkFBbUIsaUNBQWlDLDBCQUEwQiw4QkFBOEIseUJBQXlCLEdBQUcsaUJBQWlCLG1CQUFtQixpQ0FBaUMsMEJBQTBCLDhCQUE4QixHQUFHLHlCQUF5Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixHQUFHLHVFQUF1RSxvQkFBb0IsNkJBQTZCLEdBQUcsNkdBQTZHLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG9DQUFvQywwQkFBMEIsc0JBQXNCLHlCQUF5QixHQUFHLGdEQUFnRCxvQkFBb0IsNkJBQTZCLGtCQUFrQixzQkFBc0Isb0JBQW9CLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRywwQ0FBMEMsZUFBZSxtQkFBbUIsZUFBZSxlQUFlLGtCQUFrQixvQkFBb0IsR0FBRyxpQ0FBaUMsZUFBZSx3QkFBd0Isa0JBQWtCLEdBQUcscUJBQXFCO0FBQzV5WjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDQTtBQUNJO0FBQ047QUFDQTtBQUNhO0FBQ2Y7QUFDRjtBQUNRO0FBQ0k7QUFDRDtBQUNQO0FBQ0U7QUFDTTtBQUNNO0FBQ0o7QUFDTTtBQUNOO0FBQ1Y7QUFDTTtBQUNJOzs7O0FBSW5EOzs7QUFHQSwrQkFBK0IsNkRBQU87QUFDdEMsZ0NBQWdDLDREQUFRO0FBQ3hDLG9DQUFvQyxnRUFBWTtBQUNoRCwrQkFBK0IsNERBQU87QUFDdEMsb0NBQW9DLGlFQUFZOztBQUVoRDtBQUNBLDBCQUEwQiw2REFBVyxDQUFDLDBEQUFNLENBQUMsMkRBQU8sQ0FBQywwREFBTSxDQUFDLHlEQUFLLENBQUMsNkRBQVMsQ0FBQywrREFBVyxDQUFDLCtEQUFVLENBQUMsNkRBQVEsQ0FBQyxnRUFBVyxDQUFDLG1FQUFjLENBQUMsaUVBQVksQ0FBQyxvRUFBZSxDQUFDLGlFQUFZLENBQUMsNERBQU8sQ0FBQywrREFBVTtBQUNuTTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVCxvREFBb0QsS0FBSztBQUN6RDtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLHFDQUFxQyxLQUFLLEVBQUUsNEJBQTRCO0FBQ3hFLGlDQUFpQyxVQUFVOztBQUUzQztBQUNBLEtBQUs7QUFDTCxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDLGlDQUFpQyxVQUFVOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnlFOztBQUV6RTs7O0FBR0E7QUFDQSx5QkFBeUIsd0VBQWtCO0FBQzNDO0FBQ0EsdUJBQXVCLHdFQUFrQjs7QUFFekM7QUFDQSxzQkFBc0Isd0VBQWtCLElBQUksVUFBVTtBQUN0RDtBQUNBO0FBQ0EscUJBQXFCLHNFQUFnQjtBQUNyQztBQUNBO0FBQ0EsaUJBQWlCLHNFQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3lFO0FBQ3JCO0FBQ3JCOzs7Ozs7QUFNL0I7O0FBRUE7QUFDQSxvQkFBb0IsK0NBQVE7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0VBQWdCOztBQUVuQztBQUNBLG9CQUFvQix3RUFBa0I7QUFDdEMsbUJBQW1CLHdFQUFrQjs7QUFFckMsa0JBQWtCLHdFQUFrQjtBQUNwQyxxQkFBcUIsd0VBQWtCOztBQUV2QztBQUNBLG9CQUFvQixzRUFBZ0I7QUFDcEM7QUFDQTtBQUNBLG9CQUFvQixzRUFBZ0I7QUFDcEM7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx1QkFBdUIsc0VBQWdCO0FBQ3ZDO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQWdCOzs7QUFHdkMsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0VBQWdCO0FBQ3hDO0FBQ0E7QUFDQSx3QkFBd0Isc0VBQWdCOzs7QUFHeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzRUFBZ0I7QUFDNUM7QUFDQTtBQUNBLDRCQUE0QixzRUFBZ0I7QUFDNUM7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix3RUFBa0I7O0FBRTlDO0FBQ0Esd0JBQXdCLHNFQUFnQjtBQUN4Qzs7QUFFQSxvQ0FBb0Msd0VBQWtCOztBQUV0RCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0EsaUNBQWlDLHNFQUFnQixzQ0FBc0MsWUFBWTtBQUNuRztBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHNFQUFnQiwyQkFBMkIsWUFBWTs7O0FBR3hGLHdCQUF3Qix3RUFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQSxnQ0FBZ0Msd0VBQWtCOztBQUVsRDtBQUNBLDRCQUE0QixzRUFBZ0I7QUFDNUM7O0FBRUEsd0NBQXdDLHdFQUFrQjs7QUFFMUQsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLGlDQUFpQyxzRUFBZ0Isc0NBQXNDLGdCQUFnQjtBQUN2RztBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHNFQUFnQiwyQkFBMkIsZ0JBQWdCOzs7OztBQUs1Rix3QkFBd0Isd0VBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQSwyQkFBMkIsd0VBQWtCOztBQUU3QztBQUNBLHVCQUF1QixzRUFBZ0I7QUFDdkM7O0FBRUEsbUNBQW1DLHdFQUFrQjs7QUFFckQsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBLGlDQUFpQyxzRUFBZ0Isc0NBQXNDLFdBQVc7QUFDbEc7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxzRUFBZ0IsMkJBQTJCLFdBQVc7O0FBRXZGLHdCQUF3Qix3RUFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixzRUFBZ0I7QUFDcEM7O0FBRUEsb0JBQW9CLHNFQUFnQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUFnQjtBQUNwQzs7QUFFQSxvQkFBb0Isc0VBQWdCO0FBQ3BDOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBLElBQUkscUVBQW9CO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0Qjs7QUFFK0I7Ozs7QUFJcEQsd0RBQWlCO0FBQ2pCLHNFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9hbGVyZ2lhcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvYW5vbWFsaWFzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9jYXJpZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Rlc2Fycm9sbG8uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZW5jaWFUcmFuc3Rvcm5vLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lbmZlcm1lZGFkZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VzdG9tYXRpdGlzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9nZW5lcmFsZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2dpbmdpdml0aXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2hhYml0b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2xhYmlvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9sZW5ndWEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2x1eGFjaW9uLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvcHVscGEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3F1aXN0ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3NhbGl2YWxlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvdGVqaWRvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC90cmF0YW1pZW50b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kb21DcmVhdG9yRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvbW9kYWxDcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9wYXRpZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS13aGl0ZTojRjNGOUZCO1xcbiAgICAtLWJsdWU6Izg3QzBDRDtcXG4gICAgLS1uYXZ5OiMyMjY1OTc7XFxuICAgIC0tY29sZDojMTEzRjY3O1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLmhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMzBweCArIDN2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hiYXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAjMTEzRjY3IDJweCBzb2xpZDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dDpmb2N1cywuc2VhcmNoSW5wdXQ6aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcblxcbi5tYWluVGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTBweFxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxufVxcblxcbnRoIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsIHRoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwxOTAsMTkwKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgfVxcblxcbiNhZGRQYXRpZW50QnV0dG9ue1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcblxcbiNhZGRQYXRpZW50QnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbiAgICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbn1cXG4gIFxcbi5tb2RhbEhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWxIZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcblxcblxcbi5wYXRpZW50Rm9ybVRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBhdGllbnRGb3JtUmlnaHQsIC5wYXRpZW50Rm9ybUxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmZvcm1UZXh0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3RJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcblxcbi5wYXRpZW50Rm9ybUJvdHRvbXtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcblxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVye1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25C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QVU7QUFDZDs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmOzs7O0VBSUUscUJBQXFCO0FBQ3ZCO0FBQ0EsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0td2hpdGU6I0YzRjlGQjtcXG4gICAgLS1ibHVlOiM4N0MwQ0Q7XFxuICAgIC0tbmF2eTojMjI2NTk3O1xcbiAgICAtLWNvbGQ6IzExM0Y2NztcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5oZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAzdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogIzExM0Y2NyAycHggc29saWQ7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXQ6Zm9jdXMsLnNlYXJjaElucHV0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5cXG4ubWFpblRhYmxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHhcXG59XFxuXFxudGFibGUge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAxIHB4IHNvbGlkIHZhcigtLWNvbGQpO1xcbn1cXG5cXG50aCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRkLCB0aCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsMTkwLDE5MCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIH1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4gICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA5MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG59XFxuICBcXG4ubW9kYWxIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGFsSGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG5cXG5cXG4ucGF0aWVudEZvcm1Ub3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wYXRpZW50Rm9ybVJpZ2h0LCAucGF0aWVudEZvcm1MZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5mb3JtVGV4dElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG5cXG4ucGF0aWVudEZvcm1Cb3R0b217XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyLCAuaGFiaXRvc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICAgPiAuZm9ybVRpdGxlLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyICA+IC5mb3JtVGl0bGUsIC5oYWJpdG9zQ29udGFpbmVyICA+IC5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVuZmVybWVkYWRlc0NvbnRhaW5lciA+IC5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmVuZmVybWVkYWRlc0NvbnRhaW5lcntcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcblxcblxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuZmxvYXQ6IHJpZ2h0O1xcbmJhY2tncm91bmQ6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbmNvbG9yOiBibGFjaztcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQXNwaXJpbmFcIl0sW1wiTGF0ZXhcIl0sW1wiTGlkb2NhaW5hIG8gQW5lc3Rlc2ljb3NcIl0sW1wiTmluZ3VuYSBhbGVyZ2lhXCJdLFtcIk90cmEgYWxlcmdpYVwiXSxbXCJQZW5pY2lsaW5hIHUgT3Ryb3MgQW50aWJpb3RpY29zXCJdLFtcIlN1bGZhc1wiXSxbXCJWYXJpYXMgYWxlcmdpYXNcIl0sW1wiWW9kb1wiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQU5PTUFMSUFTIERFTlRPRkFDSUFMRVMgKElOQ0xVU08gTEEgTUFMT0NMVVNJT04pLlwiLFwiRXhjbHV5ZTogYXRyb2ZpYSBvIGhpcGVydHJvZmlhIGhlbWlmYWNpYWwsIGhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBjb25kaWxhciB1bmlsYXRlcmFsIGRlIGxvcyBtYXhpbGFyZXMuXCJdLFtcIkFub21hbGlhIGRlbnRvZmFjaWFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcG9zaWNpb24gZGVsIGRpZW50ZVwiLFwiQXBpbmFtaWVudG8uIERlc3BsYXphbWllbnRvLiBEaWFzdGVtYS4gRXNwYWNpYW1pZW50byBhbm9ybWFsLiBSb3RhY2lvbi4gVHJhbnNwb3NpY2lvbi4gRGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIGNvbiBwb3NpY2lvbiBlY3RvcGljYS4gRXhjbHV5ZTogZGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIHNpbiBwb3NpY2lvbiBhbm9ybWFsLlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcmVsYWNpb24gZW50cmUgbG9zIGFyY29zIGRlbnRhcmlvc1wiLFwiQW50ZXBvc2ljaW9uLiBEZXN2aWFjaW9uIGRlIGxhIGxpbmVhIG1lZGlhIGRlbCBhcmNvIGRlbnRhcmlvLiBEaXN0b2NsdXNpb24uIE1lc2lvY2x1c2lvbi4gTW9yZGlkYSBhYmllcnRhLiBNb3JkaWRhIGNydXphZGEuIE9jbHVzaW9uIGxpbmd1YWwgcG9zdGVyaW9yIGRlIGxvcyBkaWVudGVzIG1heGlsYXJlcy4gU29icmVtb3JkaWRhIChleGNlc2l2YSkgaG9yaXpvbnRhbCwgcHJvZnVuZGEgbyB2ZXJ0aWNhbC5cIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHJlbGFjaW9uIG1heGlsb2Jhc2lsYXJcIixcIkFzaW1ldHJpYSBkZSBsYSBtYW5kaWJ1bGEuIFByb2duYXRpc21vLiBSZXRyb2duYXRpc21vLlwiXSxbXCJBbm9tYWxpYXMgZGVudG9mYWNpYWxlcyBmdW5jaW9uYWxlc1wiLFwiQ2llcnJlIGFub3JtYWwgZGUgbG9zIG1heGlsYXJlcy4gTWFsb2NsdXNpb24gZGViaWRhIGEgZGVnbHVjaW9uIGFub3JtYWwsIGhhYml0byBkaWdpdGFsLCBsYWJpYWwgbyBsaW5ndWFsLCByZXNwaXJhY2lvbiBidWNhbC4gRXhjbHV5ZSBicnV4aXNtbyB5IHJlY2hpbmFtaWVudG8gZGUgZGllbnRlcy5cIl0sW1wiQW5vbWFsaWFzIGV2aWRlbnRlcyBkZWwgdGFtYW5vIGRlIGxvcyBtYXhpbGFyZXNcIixcIkhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBkZWwgbWF4aWxhciBvIG1hbmRpYnVsYS4gTWFjcm9nbmFjaWEuIE1pY3JvZ25hY2lhLiBFeGNsdXllOiBhY3JvbWVnYWxpYSB5IHNpbmRyb21lIGRlIFBpZXJyZSBSb2Jpbi5cIl0sW1wiTWFsb2NsdXNpb24gZGUgdGlwbyBubyBlc3BlY2lmaWNhZG9cIixcIlwiXSxbXCJPdHJhcyBhbm9tYWxpYXMgZGVudG9mYWNpYWxlc1wiLFwiXCJdLFtcIlRyYXN0b3Jub3MgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyXCIsXCJDYXN0Ye+/vWV0ZW8gbWF4aWxhci4gQ29tcGxlam8gbyBTaW5kcm9tZSBkZSBDb3N0ZW4uIFNpbmRyb21lIGRlIGRpc2Z1bmNpb24gZG9sb3Jvc2EgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYW5kaWJ1bGFyLiBUcmFzdG9ybm8gZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyLiBFeGNsdXllOiBlc2d1aW5jZSBvIGx1eGFjaW9uIHJlY2llbnRlIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhci5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQ0FSSUVTIERFTlRBTFwiLFwiXCJdLFtcIkNhcmllcyBkZSBsYSBkZW50aW5hXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbCBjZW1lbnRvXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbnRhbCBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJDYXJpZXMgZGVudGFyaWEgZGV0ZW5pZGFcIixcIlwiXSxbXCJDYXJpZXMgbGltaXRhZGEgYWwgZXNtYWx0ZVwiLFwiTWFuY2hhcyBibGFuY2FzIChjYXJpZXMgaW5jaXBpZW50ZSlcIl0sW1wiT3RyYXMgY2FyaWVzIGRlbnRhbGVzXCIsXCJcIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIlRSQVNUT1JOT1MgREVMIERFU0FSUk9MTE8gWSBERSBMQSBFUlVQQ0lPTiBERSBMT1MgRElFTlRFU1wiLFwiRXhjbHV5ZTogZGllbnRlcyBpbmNsdWlkb3MgZSBpbXBhY3RhZG9zXCJdLFtcIkFsdGVyYWNpb25lcyBlbiBsYSBlcnVwY2lvbiBkZW50YXJpYVwiLFwiQ2FpZGEgcHJlbWF0dXJhIGRlIGxvcyBkaWVudGVzIHByaW1hcmlvcy4gRGVudGljaW9uIHByZWNvei4gRGllbnRlIG5hdGFsLiBEaWVudGUgbmVvbmF0YWwuIERpZW50ZSBwcmltYXJpbyAocGVyc2lzdGVudGUpIHJldGVuaWRvLiBFcnVwY2lvbiBwcmVtYXR1cmEgZGUgZGllbnRlLlwiXSxbXCJBbHRlcmFjaW9uZXMgZW4gbGEgZm9ybWFjaW9uIGRlbnRhcmlhXCIsXCJBcGxhc2lhIGUgaGlwb3BsYXNpYSBkZWwgY2VtZW50by4gRGllbnRlIGRlIFR1cm5lci4gRGlsYWNlcmFjaW9uIGRlbnRhcmlhLiBIaXBvcGxhc2lhIGRlbCBlc21hbHRlLiBPZG9udG9kaXNwbGFzaWEgcmVnaW9uYWwuIEV4Y2x1eWU6IGRpZW50ZXMgZGUgSHV0Y2hpbnNvbiB5IG1vbGFyZXMgbW9ydWxvaWRlcyBlbiBsYSBzaWZpbGlzIGNvbmdlbml0YS8gZGllbnRlcyBtb3RlYWRvcy5cIl0sW1wiQWx0ZXJhY2lvbmVzIGhlcmVkaXRhcmlhcyBkZSBsYSBlc3RydWN0dXJhIGRlbnRhcmlhLCBubyBjbGFzaWZpY2FkYXMgZW4gb3RyYSBwYXJ0ZVwiLFwiQW1lbG9nZW5lc2lzLiBEZW50aW5vZ2VuZXNpcy4gT2RvbnRvZ2VuZXNpcy4gRGllbnRlcyBlbiBjb25jaGEuIERpc3BsYXNpYSBkZW50aW5hbC5cIl0sW1wiQW5vZG9uY2lhXCIsXCJIaXBvZG9uY2lhLiBPbGlnb2RvbmNpYS5cIl0sW1wiQW5vbWFsaWFzIGRlbCB0YW1h77+9byB5IGRlIGxhIGZvcm1hIGRlbCBkaWVudGVcIixcIkNvbmNyZXNjZW5jaWEuIEZ1c2lvbi4gR2VtaW5hY2lvbi4gRGllbnRlcyBlbiBmb3JtYSBkZSBjbGF2aWphIChjb25pY29zKS4gRGllbnRlcyBldmFnaW5hZG9zLiBEZW5zIGluIGRlbnRlLiBNYWNyb2RvbmNpYS4gTWljcm9kb25jaWEuIFBlcmxhcyBkZWwgZXNtYWx0ZS4gVGF1cm9kb250aXNtby4gVHViZXJjdWxvIHBhcmFtb2xhci4gRXhjbHV5ZTogdHViZXJjdWxvIGRlIENhcmFiZWxsaS5cIl0sW1wiRGllbnRlcyBtb3RlYWRvc1wiLFwiRXNtYWx0ZSBtb3RlYWRvLiBGbHVvcm9zaXMgZGVudGFsLiBPcGFjaWRhZCBubyBmbHVvcmljYSBkZWwgZXNtYWx0ZS4gRXhjbHV5ZTogZGVwb3NpdG9zIChhZGhlcmVuY2lhcykgZW4gbG9zIGRpZW50ZXMuXCJdLFtcIkRpZW50ZXMgc3VwZXJudW1lcmFyaW9zXCIsXCJDdWFydG8gbW9sYXIuIERpZW50ZXMgc3VwbGVtZW50YXJpb3MuIERpc3RvbW9sYXIuIE1lc2lvZGVucy4gUGFyYW1vbGFyLlwiXSxbXCJPdHJvcyB0cmFzdG9ybm9zIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzXCIsXCJBbHRlcmFjaW9uIGRlbCBjb2xvciBkZWwgZGllbnRlIGR1cmFudGUgc3UgZm9ybWFjaW9uLiBNYW5jaGFzIGludHJpbnNlY2FzIGRlIGxvcyBkaWVudGVzIFNBSS5cIl0sW1wiU2luZHJvbWUgZGUgbGEgZXJ1cGNpb24gZGVudGFyaWFcIixcIlwiXSxbXCJUcmFzdG9ybm8gZGVsIGRlc2Fycm9sbG8gZGUgbG9zIGRpZW50ZXMgbm8gZXNwZWNpZmljYWRvIFwiLFwiVHJhc3Rvcm5vIGRlIGxhIG9kb250b2dlbmVzaXMgU0FJLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRElFTlRFUyBJTkNMVUlET1MgRSBJTVBBQ1RBRE9TXCIsXCJFeGNsdXllOiBkaWVudGVzIGluY2x1aWRvcyBlIGltcGFjdGFkb3MgY29uIHBvc2ljaW9uIGFub3JtYWwgZGUgbG9zIG1pc21vcyBvIGRlIGxvcyBkaWVudGVzIGFkeWFjZW50ZXMuXCJdLFtcIkRpZW50ZXMgaW1wYWN0YWRvc1wiLFwiRGllbnRlIHF1ZSBubyBoYSBlcnVwY2lvbmFkbyBkZWJpZG8gYSBsYSBvYnN0cnVjY2lvbiBwb3Igb3RybyBkaWVudGUuXCJdLFtcIkRpZW50ZXMgaW5jbHVpZG9zIFwiLFwiRGllbnRlIHF1ZSBubyBoYSBlcnVwY2lvbmFkbyBzaW4gb2JzdHJ1Y2Npb24gcG9yIG90cm8gZGllbnRlLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT1RST1MgVFJBU1RPUk5PUyBERSBMT1MgRElFTlRFUyBZIERFIFNVUyBFU1RSVUNUVVJBUyBERSBTT1NURU5cIixcIlwiXSxbXCJBdHJvZmlhIGRlbCByZWJvcmRlIGFsdmVvbGFyIGRlc2RlbnRhZG9cIixcIlwiXSxbXCJFeGZvbGlhY2lvbiBkZSBsb3MgZGllbnRlcyBkZWJpZGEgYSBjYXVzYXMgc2lzdGVtaWNhc1wiLFwiXCJdLFtcIk90cmFzIGFmZWNjaW9uZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgZGllbnRlcyB5IGRlIHN1cyBlc3RydWN0dXJhcyBkZSBzb3N0ZW5cIixcIkFncmFuZGFtaWVudG8gZGVsIHJlYm9yZGUgYWx2ZW9sYXIuIE9kb250YWxnaWEuIFByb2xvbmdhY2lvbiBhbHZlb2xhciBpcnJlZ3VsYXIuXCJdLFtcIlBlcmRpZGEgZGUgZGllbnRlcyBkZWJpZGEgYSBhY2NpZGVudGUsIGV4dHJhY2Npb24gbyBlbmZlcm1lZGFkIHBlcmlvZG9udGFsIGxvY2FsXCIsXCJcIl0sW1wiUmFpeiBkZW50YWwgcmV0ZW5pZGFcIixcIlwiXSxbXCJUcmFzdG9ybm9zIGRlIGxvcyBkaWVudGVzIHkgZGUgc3VzIGVzdHJ1Y3R1cmFzIGRlIHNvc3Rlbiwgbm8gZXNwZWNpZmljYWRvXCIsXCJcIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIk9UUk9TIFRSQVNUT1JOT1MgREUgTEEgRU5DSUEgWSBERSBMQSBaT05BIEVERU5UVUxBXCIsXCJFeGNsdXllOiBhdHJvZmlhIGRlbCByZWJvcmRlIGFsdmVvbGFyIGVkZW50dWxvLCBnaW5naXZpdGlzIGFndWRhIHkgZ2luZ2l2aXRpcyBjcm9uaWNhLlwiXSxbXCJIaXBlcnBsYXNpYSBnaW5naXZhbFwiLFwiRmlicm9tYXRvc2lzIGdpbmdpdmFsLlwiXSxbXCJMZXNpb25lcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGEgYXNvY2lhZGFzIGNvbiB0cmF1bWF0aXNtb1wiLFwiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZWwgcmVib3JkZSBhbHZlb2xhciBlZGVudHVsbyAoaGlwZXJwbGFzaWEgcHJvdGVzaWNhKS5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBlc3BlY2lmaWNhZG9zIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYVwiLFwiRXB1bGlzIGRlIGNlbHVsYXMgZ2lnYW50ZXMuIEVwdWxpcyBmaWJyb3NvLiBHcmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLiBHcmFudWxvbWEgcGlvZ2VubyBkZSBsYSBlbmNpYS4gUmVibGFuZGVjaW1pZW50byBkZWwgcmVib3JkZS5cIl0sW1wiUmV0cmFjY2lvbiBnaW5naXZhbFwiLFwiUmVjZXNpb24gZ2luZ2l2YWwgbG9jYWxpemFkYS4gUmVjZXNpb24gZ2luZ2l2YWwgZ2VuZXJhbGl6YWRhLiBSZWNlc2lvbiBnaW5naXZhbCBwb3N0aW5mZWNjaW9zYS4gUmVjZXNpb24gZ2luZ2l2YWwgcG9zdG9wZXJhdG9yaWEuXCJdLFtcIlRyYXN0b3JubyBubyBlc3BlY2lmaWNhZG8gZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhIFwiLFwiXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJFTkZFUk1FREFERVMgXCJdLFtcIkFuZ2luYSBkZSBQZWNob1wiXSxbXCJBcnRyaXRpc1wiXSxbXCJBc21hXCJdLFtcIkF0YXF1ZSBDYXJkaWFjb1wiXSxbXCJDYW5jZXJcIl0sW1wiRGlhYmV0ZXMgVGlwbyAxXCJdLFtcIkRpYWJldGVzIFRpcG8gMlwiXSxbXCJEb2xvciBlbiBQZWNob1wiXSxbXCJFbmZlcm1lZGFkIGRlbCBIaWdhZG9cIl0sW1wiRW5mZXJtZWRhZCBkZWwgUmnvv71vblwiXSxbXCJFbmZpc2VtYVwiXSxbXCJIZXBhdGl0aXNcIl0sW1wiSGlwZXJ0ZW5zaW9uXCJdLFtcIkhpcG9nbHVjZW1pYVwiXSxbXCJIaXBvdGVuc2lvblwiXSxbXCJOaW5ndW5hIGVuZmVybWVkYWRcIl0sW1wiT3RyYSBlbmZlcm1lZGFkXCJdLFtcIlByb2JsZW1hIGRlIFRpcm9pZGVzXCJdLFtcIlByb2JsZW1hcyBFc3RvbWFjYWxlc1wiXSxbXCJTSURBLyBWSUhcIl0sW1wiVHViZXJjdWxvc2lzXCJdLFtcIlZhcmlhcyBFbmZlcm1lZGFkZXNcIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVTVE9NQVRJVElTIFkgTEVTSU9ORVMgQUZJTkVTXCIsXCJFeGNsdXllOiBDYW5jcnVtIG9yaXMuIEVzdG9tYXRpdGlzIGdhbmdyZW5vc2EuIEdpbmdpdm9lc3RvbWF0aXRpcyBoZXJwZXRpY2EgKGhlcnBlcyBzaW1wbGUpLiBOb21hLiBRdWVpbGl0aXMuXCJdLFtcIkNlbHVsaXRpcyB5IGFic2Nlc28gZGUgbGEgYm9jYVwiLFwiQWJzY2Vzb3Mgc3VibWFuZGlidWxhcmVzLiBDZWx1bGl0aXMgZGVsIHBpc28gZGUgbGEgYm9jYS4gRXhjbHV5ZSBhYnNjZXNvIGRlIGdsYW5kdWxhIHNhbGl2YWwgbyBsZW5ndWEsIGFic2Nlc28gcGVyaWFwaWNhbCwgYWJzY2VzbyBwZXJpb2RvbnRhbCwgYWJzY2VzbyBwZXJpdG9uc2lsYXIuXCJdLFtcIkVzdG9tYXRpdGlzIGFmdG9zYSByZWN1cnJlbnRlXCIsXCJBZnRhcyBkZSBCZWRuYXIuIEVzdG9tYXRpdGlzIGFmdG9zYSBtYXlvciBvIG1lbm9yLiBFc3RvbWF0aXRpcyBoZXJwZXRpZm9ybWUuIFBlcmlhZGVuaXRpcyBtdWNvc2EgbmVjcm90aWNhIHJlY3VycmVudGUuIFVsY2VyYSBhZnRvc2EgcmVjdXJyZW50ZS5cIl0sW1wiT3RyYXMgZm9ybWFzIGRlIGVzdG9tYXRpdGlzXCIsXCJFc3RvbWF0aXRpcyBwcm90ZXNpY2EsIHVsY2VyYXRpdmEsIHZlc2ljdWxvc2EuXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBTk9NQUxJQVMgREVOVE9GQUNJQUxFUyAoSU5DTFVTTyBMQSBNQUxPQ0xVU0lPTikuXCJdLFtcIkNBUklFUyBERU5UQUxcIl0sW1wiRElFTlRFUyBJTkNMVUlET1MgRSBJTVBBQ1RBRE9TXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBMRU5HVUFcIl0sW1wiRU5GRVJNRURBREVTIERFIExBIFBVTFBBIFkgREUgTE9TIFRFSklET1MgUEVSSUFQSUNBTEVTXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQVMgR0xBTkRVTEFTIFNBTElWQUxFU1wiXSxbXCJFU1RPTUFUSVRJUyBZIExFU0lPTkVTIEFGSU5FU1wiXSxbXCJHSU5HSVZJVElTIFkgRU5GRVJNRURBREVTIFBFUklPRE9OVEFMRVNcIl0sW1wiTFVYQUNJT04sIEVTR1VJTkNFIFkgVE9SQ0VEVVJBIERFIEFSVElDVUxBQ0lPTkVTIFkgREUgTElHQU1FTlRPUyBERSBMQSBDQUJFWkFcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBMQUJJT1MgWSBERSBMQSBNVUNPU0EgQlVDQUxcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBNQVhJTEFSRVNcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBURUpJRE9TIERVUk9TIERFIExPUyBESUVOVEVTXCJdLFtcIk9UUk9TIFRSQVNUT1JOT1MgREUgTEEgRU5DSUEgWSBERSBMQSBaT05BIEVERU5UVUxBXCJdLFtcIk9UUk9TIFRSQVNUT1JOT1MgREUgTE9TIERJRU5URVMgWSBERSBTVVMgRVNUUlVDVFVSQVMgREUgU09TVEVOXCJdLFtcIlFVSVNURVMgREUgTEEgUkVHSU9OIEJVQ0FMLCBOTyBDTEFTSUZJQ0FET1MgRU4gT1RSQSBQQVJURVwiXSxbXCJUUkFTVE9STk9TIERFTCBERVNBUlJPTExPIFkgREUgTEEgRVJVUENJT04gREUgTE9TIERJRU5URVNcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiR0lOR0lWSVRJUyBZIEVORkVSTUVEQURFUyBQRVJJT0RPTlRBTEVTXCIsXCJDb2x1bW5hMVwiXSxbXCJHaW5naXZpdGlzIGFndWRhXCIsXCJFeGNsdXllIGdpbmdpdml0aXMgdWxjZXJvbmVjcm90aWNhIGFndWRhIHkgZ2luZ2l2b2VzdG9tYXRpdGlzIGhlcnBldGljYVwiXSxbXCJFbmZlcm1lZGFkIGRlbCBwZXJpb2RvbnRvIG5vIGVzcGVjaWZpY2FkYVwiLFwiXCJdLFtcIkdpbmdpdml0aXMgY3JvbmljYVwiLFwiR2luZ2l2aXRpcyBjcm9uaWNhIGRlc2NhbWF0aXZhLCBnaW5naXZpdGlzIGNyb25pY2EgaGlwZXJwbGFzaWNhLCBnaW5naXZpdGlzIGNyb25pY2EgbWFyZ2luYWwgc2ltcGxlLCBnaW5naXZpdGlzIGNyb25pY2EgdWxjZXJhdGl2YS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIHBlcmlvZG9udGFsZXNcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFndWRhXCIsXCJBYnNjZXNvIHBhcmFkZW50YWwuIEFic2Nlc28gcGVyaW9kb250YWwuIFBlcmljb3Jvbml0aXMgYWd1ZGEuIEV4Y2x1eWU6IGFic2Nlc28gcGVyaWFwaWNhbCBjb24gZmlzdHVsYS8gcGVyaW9kb250aXRpcyBhcGljYWwgYWd1ZGEuXCJdLFtcIlBlcmlvZG9udGl0aXMgY3JvbmljYVwiLFwiUGVyaWNvcm9uaXRpcyBjcm9uaWNhLiBQZXJpb2RvbnRpdGlzIHNpbXBsZS4gUGVyaW9kb250aXRpcyBjb21wbGljYWRhLlwiXSxbXCJQZXJpb2RvbnRvc2lzIChqdXZlbmlsKVwiLFwiXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJIQUJJVE9TIFBFUk5JQ0lPU09TXCJdLFtcIkZ1bWFyXCJdLFtcIkFsY29ob2xcIl0sW1wiQ29jYWluYVwiXSxbXCJPdHJhcyBkcm9nYXNcIl0sW1wiT3Ryb3MgaGFiaXRvc1wiXSxbXCJOaW5ndW4gaGFiaXRvXCJdLFtcIlZhcmlvcyBoYWJpdG9zXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJPVFJBUyBFTkZFUk1FREFERVMgREUgTE9TIExBQklPUyBZIERFIExBIE1VQ09TQSBCVUNBTFwiLFwiSW5jbHV5ZSBhbHRlcmFjaW9uZXMgZXBpdGVsaWFsZXMgZGUgbGEgbGVuZ3VhLiBFeGNsdXllOiBlbmZlcm1lZGFkZXMgZGUgbGEgbGVuZ3VhLCBlc3RvbWF0aXRpcyB5IGxlc2lvbmVzIGFmaW5lcywgb3Ryb3MgdHJhc3Rvcm5vcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGEsIHF1aXN0ZXMgZGUgbGEgcmVnaW9uIGJ1Y2FsLlwiXSxbXCJFbmZlcm1lZGFkZXMgZGUgbG9zIGxhYmlvc1wiLFwiUGVybGVjaGUgbyBxdWVpbGl0aXMgYW5ndWxhci4gUXVlaWxpdGlzIGFuZ3VsYXIsIGV4Zm9saWF0aXZhLCBnbGFuZHVsYXIuIFF1ZWlsb2RpbmlhLiBRdWVpbG9zaXMuIEV4Y2x1eWUgYXJpYm9mbGF2aW5vc2lzIChwb3IgZGVmaWNpZW5jaWEgZGUgcmlib2ZsYXZpbmEpLCBQZXJsZWNoZSBkZWJpZG8gYSBjYW5kaWRpYXNpcywgUGVybGVjaGUgZGViaWRvIGEgZGVmaWNpZW5jaWEgZGUgcmlib2ZsYXZpbmEuIFF1ZWlsaXRpcyBkZWJpZGEgYSB0cmFzdG9ybm9zIHJlbGFjaW9uYWRvcyBjb24gbGEgcmFkaWFjaW9uLlwiXSxbXCJGaWJyb3NpcyBkZSBsYSBzdWJtdWNvc2EgYnVjYWxcIixcIlwiXSxbXCJHcmFudWxvbWEgeSBsZXNpb25lcyBzZW1lamFudGVzIGRlIGxhIG11Y29zYSBidWNhbFwiLFwiR3JhbnVsb21hIGVvc2lub2ZpbG8uIEdyYW51bG9tYSBwaW9nZW5pY28uIFhhbnRvbWEgdmVycnVnaWZvcm1lLlwiXSxbXCJIaXBlcnBsYXNpYSBpcnJpdGF0aXZhIGRlIGxhIG11Y29zYSBidWNhbFwiLFwiRXhjbHV5ZSBoaXBlcnBsYXNpYSBpcnJpdGF0aXZhIGRlIGxhIHpvbmEgZWRlbnR1bGEgKGhpcGVycGxhc2lhIHByb3Rlc2ljYSlcIl0sW1wiTGV1Y29wbGFzaWEgcGlsb3NhXCIsXCJcIl0sW1wiTGV1Y29wbGFzaWEgeSBvdHJhcyBhbHRlcmFjaW9uZXMgZGVsIGVwaXRlbGlvIGJ1Y2FsLCBpbmNsdXllbmRvIGxhIGxlbmd1YVwiLFwiRXJpdHJvcGxhc2lhLiBMZXVjb2VkZW1hLiBMZXVjb3F1ZXJhdG9zaXMgbmljb3RpbmljYSBwYWxhdGluYS4gUGFsYWRhciBkZWwgZnVtYWRvci4gRXhjbHV5ZSBsZXVjb3BsYXNpYSBwaWxvc2EuXCJdLFtcIk1vcmRlZHVyYSBkZWwgbGFiaW8geSBkZSBsYSBtZWppbGxhXCIsXCJcIl0sW1wiT3RyYXMgbGVzaW9uZXMgeSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIk11Y2lub3NpcyBidWNhbCBmb2NhbFwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRU5GRVJNRURBREVTIERFIExBIExFTkdVQVwiLFwiRXhjbHV5ZSBmaWJyb3NpcyBkZSBsYSBzdWJtdWNvc2EgZGUgbGEgbGVuZ3VhLCBlcml0cm9wbGFzaWEgZGUgbGEgbGVuZ3VhLCBoaXBlcnBsYXNpYSBlcGl0ZWxpYWwgZm9jYWwgZGUgbGEgbGVuZ3VhLCBsZXVjb2VkZW1hIGRlIGxhIGxlbmd1YSwgbGV1Y29wbGFzaWEgZGUgbGEgbGVuZ3VhLCBsZXVjb3BsYXNpYSBwaWxvc2EgZGUgbGEgbGVuZ3VhLCBtYWNyb2dsb3NpYS5cIl0sW1wiQXRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBsaW5ndWFsZXNcIixcIkdsb3NpdGlzIGF0cm9maWNhXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsYSBsZW5ndWEsIG5vIGVzcGVjaWZpY2FkYS5cIixcIkdsb3NvcGF0aWFcIl0sW1wiR2xvc2l0aXNcIixcIkFic2Nlc28gZGUgbGEgbGVuZ3VhLiBVbGNlcmEgdHJhdW1hdGljYSBkZSBsYSBsZW5ndWEuIEV4Y2x1eWUgZ2xvc2l0aXMgYXRyb2ZpY2EuXCJdLFtcIkdsb3NpdGlzIHJvbWJvaWRlYSBtZWRpYW5hXCIsXCJcIl0sW1wiR2xvc29kaW5pYVwiLFwiR2xvc29waXJvc2lzLiBMZW5ndWEgZG9sb3Jvc2EuXCJdLFtcIkhpcGVydHJvZmlhIGRlIGxhcyBwYXBpbGFzIGxpbmd1YWxlc1wiLFwiSGlwZXJ0cm9maWEgZGUgbGFzIHBhcGlsYXMgZm9saWFjZWFzLiBMZW5ndWEgbmVncmEgcGlsb3NhLiBMZW5ndWEgbmVncmEgdmVsbG9zYSwgTGVuZ3VhIHNhYnVycmFsLlwiXSxbXCJMZW5ndWEgZ2VvZ3JhZmljYVwiLFwiR2xvc2l0aXMgYXJlYXRhIGV4Zm9saWF0aXZhLiBHbG9zaXRpcyBtaWdyYXRvcmlhIGJlbmlnbmEuXCJdLFtcIkxlbmd1YSBwbGVnYWRhXCIsXCJMZW5ndWEgY29uIHN1cmNvcy4gTGVuZ3VhIGVzY3JvdGFsLiBMZW5ndWEgZmlzdXJhZGEuIEV4Y2x1eWUgbGVuZ3VhIGZpc3VyYWRhIGNvbmdlbml0YS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGRlIGxhIGxlbmd1YVwiLFwiQWdyYW5kYW1pZW50by4gQXRyb2ZpYS4gQ3JlbmFjaW9uIGRlIGxhIGxlbmd1YS4gSGlwZXJ0cm9maWEuXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJMVVhBQ0lPTiwgRVNHVUlOQ0UgWSBUT1JDRURVUkEgREUgQVJUSUNVTEFDSU9ORVMgWSBERSBMSUdBTUVOVE9TIERFIExBIENBQkVaQVwiLFwiQ29sdW1uYTFcIl0sW1wiRXNndWluY2VzIHkgdG9yY2VkdXJhcyBkZSBhcnRpY3VsYWNpb25lcyB5IGxpZ2FtZW50b3MgZGUgb3RyYXMgcGFydGVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgY2FiZXphXCIsXCJcIl0sW1wiRXNndWluY2VzIHkgdG9yY2VkdXJhcyBkZWwgbWF4aWxhclwiLFwiQXJ0aWN1bGFjaW9uIG8gbGlnYW1lbnRvIHRlbXBvcm9tYXhpbGFyXCJdLFtcIkx1eGFjaW9uIGRlIG90cmFzIHBhcnRlcyB5IGRlIGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIGNhYmV6YVwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBjYXJ0aWxhZ28gc2VwdGFsIGRlIGxhIG5hcml6XCIsXCJcIl0sW1wiTHV4YWNpb24gZGVsIGRpZW50ZVwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBtYXhpbGFyXCIsXCJNYW5kaWJ1bGEuIE1heGlsYXIuIFRlbXBvcm9tYXhpbGFyLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBNQVhJTEFSRVNcIixcIlwiXSxbXCJBZmVjY2lvbmVzIGluZmxhbWF0b3JpYXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiT3N0ZWl0aXMuIE9zdGVvbWllbGl0aXMgbmVvbmF0YWwuIE9zdGVvcnJhZGlvbmVjcm9zaXMuIFBlcmlvc3RpdGlzLCBTZWN1ZXN0cm8gb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBcIl0sW1wiQWx2ZW9saXRpcyBkZWwgbWF4aWxhclwiLFwiQWx2ZW9sbyBzZWNvLiBPc3RlaXRpcyBhbHZlb2xhci5cIl0sW1wiRW5mZXJtZWRhZGVzIGRlIGxvcyBtYXhpbGFyZXMsIG5vIGVzcGVjaWZpY2FkYS5cIixcIlwiXSxbXCJHcmFudWxvbWEgY2VudHJhbCBkZSBjZWx1bGFzIGdpZ2FudGVzXCIsXCJFeGNsdXllIGdyYW51bG9tYSBwZXJpZmVyaWNvIGRlIGNlbHVsYXMgZ2lnYW50ZXMuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyBtYXhpbGFyZXNcIixcIkRpc3BsYXNpYSBmaWJyb3NhLiBFeG9zdG9zaXMuIEhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBtYXhpbGFyLiBIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgY29uZGlsYXIgbWFuZGlidWxhci4gUXVlcnViaXNtby5cIl0sW1wiVHJhc3Rvcm5vcyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJRdWlzdGUgbGF0ZW50ZSBvc2VvIGRlIGxvcyBtYXhpbGFyZXMuIFF1aXN0ZSBkZSBTdGFmbmUuIFRvcnVzIG1hbmRpYnVsYXIuIFRvcnVzIHBhbGF0aW5vLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRU5GRVJNRURBREVTIERFIExBIFBVTFBBIFkgREUgTE9TIFRFSklET1MgUEVSSUFQSUNBTEVTXCIsXCJDb2x1bW5hMVwiXSxbXCJBYnNjZXNvIHBlcmlhcGljYWwgY29uIGZpc3R1bGFcIixcIkFic2Nlc28gZGVudGFsIGNvbiBmaXN0dWxhLiBBYnNjZXNvIGRlbnRvYWx2ZW9sYXIgY29uIGZpc3R1bGEuXCJdLFtcIkFic2Nlc28gcGVyaWFwaWNhbCBzaW4gZmlzdHVsYVwiLFwiQWJzY2VzbyBkZW50YWwgc2luIGZpc3R1bGEuIEFic2Nlc28gZGVudG9hbHZlb2xhciBzaW4gZmlzdHVsYS5cIl0sW1wiRGVnZW5lcmFjaW9uIGRlIGxhIHB1bHBhXCIsXCJDYWxjaWZpY2FjaW9uZXMgZGUgbGEgcHVscGEuIFBpZWRyYXMuIERlbnRpY3Vsb3MuXCJdLFtcIkZvcm1hY2lvbiBhbm9ybWFsIGRlIHRlamlkbyBkdXJvIGVuIGxhIHB1bHBhXCIsXCJEZW50aW5hIHNlY3VuZGFyaWEgbyBpcnJlZ3VsYXIuXCJdLFtcIk5lY3Jvc2lzIGRlIGxhIHB1bHBhXCIsXCJHYW5ncmVuYSBkZSBsYSBwdWxwYS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgcHVscGEgeSBkZWwgdGVqaWRvIHBlcmlhcGljYWxcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFwaWNhbCBhZ3VkYSBvcmlnaW5hZGEgZW4gbGEgcHVscGFcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFwaWNhbCBjcm9uaWNhXCIsXCJHcmFudWxvbWEgYXBpY2FsIG8gcGVyaWFwaWNhbC4gUGVyaW9kb250aXRpcyBhcGljYWwgY3JvbmljYS5cIl0sW1wiUHVscGl0aXNcIixcIkFic2Nlc28uIFBvbGlwby4gUHVscGl0aXMgYWd1ZGEuIFB1bHBpdGlzIGNyb25pY2EgKGhpcGVycGxhc2ljYSwgdWxjZXJhdGl2YSkuIFB1bHBpdGlzIHN1cHVyYXRpdmEuXCJdLFtcIlF1aXN0ZSByYWRpY3VsYXJcIixcIlF1aXN0ZSBhcGljYWwgKHBlcmlvZG9udGFsKS4gUXVpc3RlIHBlcmlhcGljYWwuIFF1aXN0ZSByYWRpY3VsYXIgcmVzaWR1YWwuIEV4Y2x1eWU6IHF1aXN0ZSBsYXRlcmFsIHBlcmlvZG9udGFsLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiUVVJU1RFUyBERSBMQSBSRUdJT04gQlVDQUwsIE5PIENMQVNJRklDQURPUyBFTiBPVFJBIFBBUlRFXCIsXCJMZXNpb25lcyBxdWUgbXVlc3RyYW4gY2FyYWN0ZXJpc3RpY2FzIGhpc3RvbG9naWNhcyBkZSBxdWlzdGUgYW5ldXJpc21hdGljbyB5IGRlIG90cmEgbGVzaW9uIG9zdGVvZmlicm9zYS4gRXhjbHV5ZSBxdWlzdGUgcmFkaWN1bGFyLlwiXSxbXCJPdHJvcyBxdWlzdGVzIGRlIGxhIHJlZ2lvbiBidWNhbCwgbm8gY2xhc2lmaWNhZG9zIGVuIG90cmEgcGFydGVcIixcIlBlcmxhIGRlIEVwc3RlaW4uIFF1aXN0ZXM6IGRlcm1vaWRlLCBlcGlkZXJtb2lkZSwgbGluZm9lcGl0ZWxpYWwsIG5hc29hbHZlb2xhciwgbmFzb2xhYmlhbC5cIl0sW1wiT3Ryb3MgcXVpc3RlcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJRdWlzdGUgbWF4aWxhciBhbmV1cmlzbWF0aWNvLiBRdWlzdGUgbWF4aWxhciBoZW1vcnJhZ2ljby4gUXVpc3RlIG1heGlsYXIgdHJhdW1hdGljby4gRXhjbHV5ZSBxdWlzdGUgZGUgU3RhZm5lLiBRdWlzdGUgbGF0ZW50ZSBvc2VvIGRlIGxvcyBtYXhpbGFyZXMuIFwiXSxbXCJRdWlzdGVzIGRlIGxhIHJlZ2lvbiBidWNhbCwgc2luIG90cmEgZXNwZWNpZmljYWNpb25cIixcIlwiXSxbXCJRdWlzdGVzIGRlIGxhcyBmaXN1cmFzIChubyBvZG9udG9nZW5pY29zKVwiLFwiUXVpc3RlcyBkZWw6IGNhbmFsIGluY2lzaXZvLCBnbG9idWxvbWF4aWxhciwgbmFzb3BhbGF0aW5vLCBwYWxhdGlubyBtZWRpbywgcGFwaWxhIHBhbGF0aW5hLlwiXSxbXCJRdWlzdGVzIG9yaWdpbmFkb3MgcG9yIGVsIGRlc2Fycm9sbG8gZGUgbG9zIGRpZW50ZXMgKHF1aXN0ZXMgb2RvbnRvZ2VuaWNvcylcIixcIlF1ZXJhdG9xdWlzdGUuIFF1aXN0ZXM6IGRlbnRpZ2VybywgZXJ1cGNpb24gZGVudGFyaWEsIGZvbGljdWxhciwgZ2luZ2l2YWwsIGxhdGVyYWwgcGVyaW9kb250YWwsIHByaW1vcmRpYWwuXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJFTkZFUk1FREFERVMgREUgTEFTIEdMQU5EVUxBUyBTQUxJVkFMRVNcIixcIlwiXSxbXCJBYnNjZXNvIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlwiXSxbXCJBbHRlcmFjaW9uZXMgZGUgbGEgc2VjcmVjaW9uIHNhbGl2YWxcIixcIkhpcG9zZWNyZWNpb24gc2FsaXZhbC4gUHRpYWxpc21vLiBYZXJvc3RvbWlhLiBFeGNsdXllIFNpbmRyb21lIGRlIFNq77+9Z3Jlbi5cIl0sW1wiQXRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiRW5mZXJtZWRhZCBkZSBnbGFuZHVsYSBzYWxpdmFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlNpYWxhZGVub3BhdGlhXCJdLFtcIkZpc3R1bGEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiRXhjbHV5ZSBmaXN0dWxhIGNvbmdlbml0YSBkZSBnbGFuZHVsYSBzYWxpdmFsLlwiXSxbXCJIaXBlcnRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiTXVjb2NlbGUgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiUXVpc3RlIG11Y29zbyBkZSBnbGFuZHVsYSBzYWxpdmFsIHBvciBleHRyYXZhc2FjaW9uIG8gcG9yIHJldGVuY2lvbi4gUmFudWxhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZGUgbGFzIGdsYW5kdWxhcyBzYWxpdmFsZXNcIixcIkVuZmVybWVkYWQgZGUgTWlrdWxpY3ouIEVzdGVub3NpcyBkZWwgY29uZHVjdG8gc2FsaXZhbC4gU2lhbG9tZXRhcGxhc2lhIG5lY3JvdGl6YW50ZS4gRXhjbHV5ZSBzaW5kcm9tZSBzZWNvIChTau+/vWdyZW4pLlwiXSxbXCJTaWFsb2FkZW5pdGlzXCIsXCJFeGNsdXllOiBmaWVicmUgdXZlb3Bhcm90aWRlYSAoSGVlcmZvcmR0KSwgcGFyb3RpZGl0aXMgaW5mZWNjaW9zYSAoZXBpZGVtaWNhKS5cIl0sW1wiU2lhbG9saXRpYXNpc1wiLFwiQ2FsY3VsbyBkZSBjb25kdWN0byBvIGRlIGdsYW5kdWxhIHNhbGl2YWwuXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJPVFJBUyBFTkZFUk1FREFERVMgREUgTE9TIFRFSklET1MgRFVST1MgREUgTE9TIERJRU5URVNcIixcIkV4Y2x1eWU6IGJydXhpc21vLCBjYXJpZXMgZGVudGFsLCByZWNoaW5hbWllbnRvIGRlIGRpZW50ZXMuXCJdLFtcIkFicmFzaW9uIGRlIGxvcyBkaWVudGVzXCIsXCJBYnJhc2lvbiBwb3IgZGVudGlmcmljbywgaGFiaXRvcywgb2N1cGFjaW9uYWwsIHJpdHVhbCwgdHJhZGljaW9uYWwuIERlZmVjdG8gY3VuZWlmb3JtZSBkZSBsb3MgZGllbnRlcy5cIl0sW1wiQW5xdWlsb3NpcyBkZW50YWxcIixcIlwiXSxbXCJBdHJpY2lvbiBleGNlc2l2YSBkZSBsb3MgZGllbnRlc1wiLFwiRGVzZ2FzdGUgb2NsdXNhbC4gRGVzZ2FzdGUgcHJveGltYWwuXCJdLFtcIkNhbWJpb3MgcG9zdGVydXB0aXZvcyBkZWwgY29sb3IgZGUgbG9zIHRlamlkb3MgZGVudGFsZXMgZHVyb3NcIixcIkV4Y2x1eWUgZGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlcy5cIl0sW1wiRGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlc1wiLFwiQ2FsY3VsbyBkZW50YWwgc3VwcmFnaW5naXZhbCBvIHN1YmdpbmdpdmFsLiBEZXBvc2l0byBlbiBsb3MgZGllbnRlcyBhbmFyYW5qYWRvLCBiZXRlbCwgbWF0ZXJpYSBhbGJhLCBuZWdybywgdGFiYWNvLCB2ZXJkZS4gUGlnbWVudGFjaW9uIGRlIGxvcyBkaWVudGVzLlwiXSxbXCJFbmZlcm1lZGFkIG5vIGVzcGVjaWZpY2FkYSBkZSBsb3MgdGVqaWRvcyBkZW50YWxlcyBkdXJvc1wiLFwiXCJdLFtcIkVyb3Npb24gZGUgbG9zIGRpZW50ZXNcIixcIkRlYmlkYSBhIGRpZXRhLCBkcm9nYXMgeSBtZWRpY2FtZW50b3MsIHZvbWl0byBwZXJzaXN0ZW50ZSwgaWRpb3BhdGljYSwgb2N1cGFjaW9uYWwuXCJdLFtcIkhpcGVyY2VtZW50b3Npc1wiLFwiSGlwZXJwbGFzaWEgZGVsIGNlbWVudG8uXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyB0ZWppZG9zIGR1cm9zIGRlIGxvcyBkaWVudGVzXCIsXCJEZW50aW5hIHNlbnNpYmxlLiBFc21hbHRlIGlycmFkaWFkby5cIl0sW1wiUmVhYnNvcmNpb24gcGF0b2xvZ2ljYSBkZSBsb3MgZGllbnRlc1wiLFwiR3JhbnVsb21hIGludGVybm8gZGUgbGEgcHVscGEuIFJlYWJzb3JjaW9uIGV4dGVybmEgZGUgbG9zIGRpZW50ZXMuXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJUUkFUQU1JRU5UT1NcIl0sW1wiQWp1c3RlIG9jbHVzYWxcIl0sW1wiQmlvcHVscGVjdG9taWFcIl0sW1wiQ2FuYWxpemFjaW9uIGNvbiBlc3BlY2lhbGlzdGFcIl0sW1wiQ3VyZXRhamUgYWJpZXJ0b1wiXSxbXCJDdXJldGFqZSBjZXJyYWRvXCJdLFtcIkV4b2RvbmNpYSBxdWlydXJnaWNhXCJdLFtcIkV4b2RvbmNpYSBzaW1wbGVcIl0sW1wiSW5zdHJ1Y2Npb24gZGUgdGVjbmljYSBkZSBjZXBpbGxhZG9cIl0sW1wiSW50ZXJjb25zdWx0YSBjb24gY2lydWphbm8gbWF4aWxvZmFjaWFsXCJdLFtcIkludGVyY29uc3VsdGEgY29uIGVuZG9kb25jaXN0YVwiXSxbXCJOZWNyb3B1bHBlY3RvbWlhXCJdLFtcIk9idHVyYWNpb24gcGVybWFuZW50ZVwiXSxbXCJPYnR1cmFjaW9uIHRlbXBvcmFsXCJdLFtcIk9wZXJhdG9yaWEgRGVudGFsXCJdLFtcIk9yaWVudGFjaW9uIHNvYnJlIHNhbHVkIGRlbnRhbFwiXSxbXCJQcm9maWxheGlzXCJdLFtcIlB1bHBlY3RvbWlhXCJdLFtcIlB1bHBvdG9taWFcIl0sW1wiUmV0aXJvIGRlIHN1dHVyYXNcIl0sW1wiU2VndWltaWVudG8gcG9zdC1leHRyYWNjaW9uXCJdLFtcIlNlbGxhZG9yIGRlIGZvc2V0YXMgeSBmaXN1cmFzXCJdLFtcIlNvbGljaXR1ZCBkZSBlc3R1ZGlvcyBjb21wbGVtZW50YXJpb3NcIl0sW1wiXCJdXSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2VuZXJhbCBmcm9tICcuL2V4Y2VsL2dlbmVyYWxlcy5jc3YnXG5pbXBvcnQgYWxlcmdpYXMgZnJvbSAnLi9leGNlbC9hbGVyZ2lhcy5jc3YnXG5pbXBvcnQgZGVudG9mYWNpYWwgZnJvbSAnLi9leGNlbC9hbm9tYWxpYXMuY3N2J1xuaW1wb3J0IGNhcmllcyBmcm9tICAgJy4vZXhjZWwvY2FyaWVzLmNzdidcbmltcG9ydCBkaWVudGVzIGZyb20gJy4vZXhjZWwvZGllbnRlcy5jc3YnXG5pbXBvcnQgZW5mZXJtZWRhZGVzIGZyb20gICAgJy4vZXhjZWwvZW5mZXJtZWRhZGVzLmNzdidcbmltcG9ydCBsZW5ndWEgZnJvbSAnLi9leGNlbC9sZW5ndWEuY3N2J1xuaW1wb3J0IHB1bHBhIGZyb20gJy4vZXhjZWwvcHVscGEuY3N2J1xuaW1wb3J0IHNhbGl2YWxlcyBmcm9tICcuL2V4Y2VsL3NhbGl2YWxlcy5jc3YnXG5pbXBvcnQgZXN0b21hdGl0aXMgZnJvbSAnLi9leGNlbC9lc3RvbWF0aXRpcy5jc3YnXG5pbXBvcnQgZ2luZ2l2aXRpcyBmcm9tICAnLi9leGNlbC9naW5naXZpdGlzLmNzdidcbmltcG9ydCBoYWJpdG9zIGZyb20gJy4vZXhjZWwvaGFiaXRvcy5jc3YnXG5pbXBvcnQgbHV4YWNpb24gZnJvbSAnLi9leGNlbC9sdXhhY2lvbi5jc3YnXG5pbXBvcnQgbGFiaW9zT3Ryb3MgZnJvbSAnLi9leGNlbC9sYWJpb3NPdHJvcy5jc3YnXG5pbXBvcnQgbWF4aWxhcmVzT3Ryb3MgZnJvbSAnLi9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YnXG5pbXBvcnQgdGVqaWRvc090cm9zIGZyb20gJy4vZXhjZWwvdGVqaWRvc090cm9zLmNzdidcbmltcG9ydCBlbmNpYVRyYW5zdG9ybm8gZnJvbSAnLi9leGNlbC9lbmNpYVRyYW5zdG9ybm8uY3N2J1xuaW1wb3J0IGRpZW50ZXNPdHJvcyBmcm9tICcuL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YnXG5pbXBvcnQgcXVpc3RlcyBmcm9tICcuL2V4Y2VsL3F1aXN0ZXMuY3N2J1xuaW1wb3J0IGRlc2Fycm9sbG8gZnJvbSAnLi9leGNlbC9kZXNhcnJvbGxvLmNzdidcbmltcG9ydCB0cmF0YW1pZW50b3MgZnJvbSAnLi9leGNlbC90cmF0YW1pZW50b3MuY3N2J1xuXG5cblxubGV0IGxvYWREYXRhID0gKCkgPT57XG5cblxuICAgIGxldCBnZW5lcmFsQXJyYXkgPSBkZUFycmF5KGdlbmVyYWwpXG4gICAgbGV0IGFsZXJnaWFzQXJyYXkgPSBkZUFycmF5KGFsZXJnaWFzKVxuICAgIGxldCBlbmZlcm1lZGFkZXNBcnJheSA9IGRlQXJyYXkoZW5mZXJtZWRhZGVzKVxuICAgIGxldCBoYWJpdG9zQXJyYXkgPSBkZUFycmF5KGhhYml0b3MpXG4gICAgbGV0IHRyYXRhbWllbnRvc0FycmF5ID0gZGVBcnJheSh0cmF0YW1pZW50b3MpXG5cbiAgICBcbiAgICBsZXQgZ2VuZXJhbGVzQXJyYXkgPSBbZGVudG9mYWNpYWwsY2FyaWVzLGRpZW50ZXMsbGVuZ3VhLHB1bHBhLHNhbGl2YWxlcyxlc3RvbWF0aXRpcyxnaW5naXZpdGlzLGx1eGFjaW9uLGxhYmlvc090cm9zLG1heGlsYXJlc090cm9zLHRlamlkb3NPdHJvcyxlbmNpYVRyYW5zdG9ybm8sZGllbnRlc090cm9zLHF1aXN0ZXMsZGVzYXJyb2xsb11cbiAgICBcbiAgICBcblxuICAgIGxldCBtYWluQXJyYXkgPSBbZ2VuZXJhbEFycmF5LGFsZXJnaWFzQXJyYXksZW5mZXJtZWRhZGVzQXJyYXksaGFiaXRvc0FycmF5LHRyYXRhbWllbnRvc0FycmF5LGdlbmVyYWxlc0FycmF5XVxuICAgIFxuICAgIHJldHVybiBtYWluQXJyYXlcbn1cblxuXG5cblxuXG4vKiBGdW5jdGlvbiBpbiBjaGFyZ2Ugb2YgY2hhbmdpbmcgdGhlIHZhbHVlcyBpbnRvIGEgbm9ybWFsIGFycmF5ICovXG5sZXQgZGVBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGxldCBkZUFycmF5ZWQ9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpO1xuICAgIHJldHVybiBkZUFycmF5ZWRcbn1cblxuXG5cbmV4cG9ydHtcbiAgICBsb2FkRGF0YVxufSIsImxldCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuXG5sZXQgY3JlYXRlRE9NQ29udGFpbmVyID0gKGNsYXNzbGlzdE5hbWUsbmFtZSkgPT57XG4gICAgXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyXG5cbn1cblxubGV0IGNyZWF0ZURPTUVsZW1lbnQgPSAodHlwZSxjbGFzc2xpc3QsdGV4dENvbnRlbnQsbmFtZSkgPT57XG4gICAgXG4gICAgICAgIFxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NQ29udGFpbmVyLFxuICAgIGNyZWF0ZURPTUVsZW1lbnRcbn0iLCJcbmxldCBsb2FkUGFnZVN0cnVjdHVyZSA9ICgpID0+IHtcbn1cblxuZXhwb3J0e1xuICAgIGxvYWRQYWdlU3RydWN0dXJlXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuXG5sZXQgY3JlYXRlTW9kYWxTdHJ1Y3R1cmUgPSAoY29udGVudCxtb2RhbE5hbWUsdGl0bGUsb3BlbkJ1dHRvbik9PntcblxuXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgQ29udGFpbmVyICovXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdtb2RhbCcsbW9kYWxOYW1lKVxuICAgIFxuICAgIGxldCBtb2RhbENvbnRlbnQgPSBjcmVhdGVET01Db250YWluZXIoJ21vZGFsQ29udGVudCcpXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBoZWFkZXIgKi9cbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBjcmVhdGVET01Db250YWluZXIoYCR7bW9kYWxOYW1lfUhlYWRlcmApXG4gICAgXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgdGl0bGUgKi9cbiAgICBsZXQgbW9kYWxUaXRsZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ21vZGFsSGVhZGVyVGl0bGUnLHRpdGxlKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpXG4gICAgLyogQ3JlYXRlcyB0aGUgY2xvc2UgYnV0dG9uKi9cbiAgICBsZXQgY2xvc2UgID0gY3JlYXRlRE9NRWxlbWVudCgnYnV0dG9uJywnY2xvc2UnLCd4JylcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSlcblxuICAgIC8qIEFkZHMgdGhlIG1vZGFsICovXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIH0pXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBcbiAgICBcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTW9kYWxTdHJ1Y3R1cmVcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5pbXBvcnQge2NyZWF0ZU1vZGFsU3RydWN0dXJlfSBmcm9tICcuL21vZGFsQ3JlYXRvcnMnXG5pbXBvcnQge2xvYWREYXRhfSBmcm9tICcuL2RhdGEnXG5cblxuXG5cblxubGV0IGFkZFBhdGllbnRNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAvKiBMb2FkcyB0aGUgbWFpbiBhcnJheSAqL1xuICAgIGxldCBtYWluQXJyYXkgPSBsb2FkRGF0YSgpXG5cbiAgICBsZXQgZ2VuZXJhbCA9IG1haW5BcnJheVswXVxuICAgIGxldCBhbGVyZ2lhcyA9IG1haW5BcnJheVsxXVxuICAgIGxldCBlbmZlcm1lZGFkZXMgPSBtYWluQXJyYXlbMl1cbiAgICBsZXQgaGFiaXRvcyA9IG1haW5BcnJheVszXVxuICAgIGxldCB0cmF0YW1pZW50b3MgPSBtYWluQXJyYXlbNF1cbiAgICBsZXQgc3BlY2lmaWMgPSBtYWluQXJyYXlbNV1cblxuXG4gICAgLyogTWFpbiBjb250YWluZXIgZm9yIHRoZSBtb2RhbCAqL1xuICAgIGxldCBtYWluRm9ybSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2Zvcm0nLCdwYXRpZW50Rm9ybScsJycsJycpXG5cbiAgICAvKiBQYXRpZW50IGZvcm0gc2lkZXMgKi9cbiAgICBsZXQgcmlnaHRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybVJpZ2h0JylcbiAgICBsZXQgbGVmdFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtTGVmdCcpXG5cbiAgICBsZXQgdG9wU2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1Ub3AnKVxuICAgIGxldCBib3R0b21TaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybUJvdHRvbScpXG5cbiAgICAvKk1haW4gRGVzaWduIFJpZ2h0IFNpZGUqL1xuICAgIGxldCBuYW1lTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ05vbWJyZScpXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZm5hbWUnKVxuICAgIFxuICAgIGxldCBuYW1lSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2Zvcm1UZXh0SW5wdXQnLCcnLCdmbmFtZScpXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG5cbiAgICAvKkdlbmVyYWwqL1xuICAgIGxldCBnZW5lcmFsTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0RpYWdub3N0aWNvIEdlbmVyYWwnKVxuICAgIGdlbmVyYWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZnZW5lcmFsJylcbiAgICBcbiAgICBsZXQgZ2VuZXJhbElucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmZ2VuZXJhbCcpXG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnZW5lcmFsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZ2VuZXJhbElucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZ2VuZXJhbFtpXSwgZ2VuZXJhbFtpXSkpO1xuICAgIH0gICBcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChnZW5lcmFsTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChnZW5lcmFsSW5wdXQpO1xuXG4gICAgLyogRXNwZWNpZmljbyAqL1xuICAgIGxldCBzcGVjaWZpY0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdEaWFnbm9zdGljbyBFc3BlY2lmaWNvJylcbiAgICBzcGVjaWZpY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnNwZWNpZmljJylcbiAgICBcbiAgICBsZXQgc3BlY2lmaWNJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZnNwZWNpZmljJylcblxuXG4gICAgZ2VuZXJhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGV2ZW50KSA9PntcbiAgICAgICAgXG4gICAgICAgIGxldCBlbGVtZW50SW5kZXhTZWxlY3RlZCA9IGdlbmVyYWwuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIGxldCBzcGVjaWZpY0FycmF5ID0gc3BlY2lmaWNbZWxlbWVudEluZGV4U2VsZWN0ZWRdLm1hcCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50WzBdXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBub3Rlc1NwZWNpZmljQXJyYXkgPSBzcGVjaWZpY1tlbGVtZW50SW5kZXhTZWxlY3RlZF0ubWFwKChlbGVtZW50KT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbMV1cbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgLypDbGVhcnMgYWxsIHZhbHVlcyBvZiB0aGUgbGlzdCBhbiByZXNldHMgdGhlbSAqL1xuICAgICAgICBzcGVjaWZpY0lucHV0Lmxlbmd0aCA9MDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNwZWNpZmljQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oc3BlY2lmaWNBcnJheVtpXSwgc3BlY2lmaWNBcnJheVtpXSkpO1xuICAgICAgICB9ICAgXG4gICAgXG5cbiAgICB9KVxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHNwZWNpZmljTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzcGVjaWZpY0lucHV0KTtcblxuICAgIC8qIFRyYXRhbWllbnRvcyovXG4gICAgbGV0IHRyYXRhbWllbnRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdUcmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmdHJhdGFtaWVudG8nKVxuICAgIFxuICAgIGxldCB0cmF0YW1pZW50b3NJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZnRyYXRhbWllbnRvJylcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdHJhdGFtaWVudG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdHJhdGFtaWVudG9zSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbih0cmF0YW1pZW50b3NbaV0sIHRyYXRhbWllbnRvc1tpXSkpO1xuICAgIH0gXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9zTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b3NJbnB1dCk7XG5cbiAgICAvKiBBbGVyZ2lhcyBDb250YWluZXIgKi9cbiAgICBsZXQgYWxlcmdpYXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2FsZXJnaWFzQ29udGFpbmVyJylcblxuICAgIC8qQWxlcmdpYXMqL1xuICAgIGxldCBhbGVyZ2lhc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdBbGVyZ2lhcycpXG4gICAgYWxlcmdpYXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxlcmdpYXNMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckFsZXJnaWFzID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8YWxlcmdpYXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsZXJnaWFzW2ldKVxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7YWxlcmdpYXNbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGFsZXJnaWFzW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYWxlcmdpYXNbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHthbGVyZ2lhc1tpXX1gKVxuXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyQWxlcmdpYXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cblxuICAgIGFsZXJnaWFzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyQWxlcmdpYXMpXG5cblxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChhbGVyZ2lhc0NvbnRhaW5lcilcblxuICAgIC8qIGVuZmVybWVkYWRlcyBDb250YWluZXIgKi9cbiAgICBsZXQgZW5mZXJtZWRhZGVzQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdlbmZlcm1lZGFkZXNDb250YWluZXInKVxuXG4gICAgLyplbmZlcm1lZGFkZXMqL1xuICAgIGxldCBlbmZlcm1lZGFkZXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnZW5mZXJtZWRhZGVzJylcbiAgICBlbmZlcm1lZGFkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5mZXJtZWRhZGVzTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJFbmZlcm1lZGFkZXMgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxlbmZlcm1lZGFkZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuZmVybWVkYWRlc1tpXSlcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2VuZmVybWVkYWRlc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsZW5mZXJtZWRhZGVzW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsZW5mZXJtZWRhZGVzW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7ZW5mZXJtZWRhZGVzW2ldfWApXG5cblxuXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9IFxuXG4gICAgZW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzKVxuXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0NvbnRhaW5lcilcblxuICAgIC8qIGhhYml0b3MgQ29udGFpbmVyICovXG4gICAgbGV0IGhhYml0b3NDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2hhYml0b3NDb250YWluZXInKVxuXG4gICAgLypoYWJpdG9zKi9cbiAgICBsZXQgaGFiaXRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdoYWJpdG9zJylcbiAgICBoYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhYml0b3NMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckhhYml0b3MgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxoYWJpdG9zLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYWJpdG9zW2ldKVxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7aGFiaXRvc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsaGFiaXRvc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGhhYml0b3NbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHtoYWJpdG9zW2ldfWApXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVySGFiaXRvcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuICAgIFxuICAgIGhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJIYWJpdG9zKVxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChoYWJpdG9zQ29udGFpbmVyKVxuXG4gICAgLyogTGVmdCBTaWRlICovXG5cbiAgICAvKkFHRSovXG4gICAgbGV0IGVkYWRMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRWRhZCcpXG4gICAgZWRhZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZmVkYWQnKVxuXG4gICAgbGV0IGVkYWRJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWdlSW5wdXQnLCcnLCdmZWRhZCcpXG4gICAgZWRhZElucHV0LnR5cGUgPSAnbnVtYmVyJ1xuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZWRhZExhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGVkYWRJbnB1dClcblxuICAgIC8qIFNleG8gKi9cbiAgICBsZXQgc2V4b0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdTZXhvJylcbiAgICBzZXhvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmc2V4bycpXG5cbiAgICBsZXQgc2V4b0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2V4SW5wdXQnLCcnLCdmc2V4bycpXG4gICAgbGV0IHNleGVzID0gWydNYXNjdWxpbm8nLCdGZW1lbmlubycsJ090cm8nXVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNleGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc2V4b0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oc2V4ZXNbaV0sIHNleGVzW2ldKSk7XG4gICAgfSBcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHNleG9MYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZXhvSW5wdXQpXG5cblxuICAgIHRvcFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgICB0b3BTaWRlLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZCh0b3BTaWRlKVxuICAgIG1haW5Gb3JtLmFwcGVuZENoaWxkKGJvdHRvbVNpZGUpO1xuXG5cblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGF0aWVudEJ1dHRvbicpXG5cbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShtYWluRm9ybSwnbW9kYWwnLCdBZ3JlZ2FyIFBhY2llbnRlJyxhZGRCdXR0b24pXG4gICAgcmV0dXJuIG1haW5Gb3JtXG4gXG59XG5cbmV4cG9ydHtcbiAgICBhZGRQYXRpZW50TW9kYWxDb250ZW50XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2VTdHJ1Y3R1cmUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0e2FkZFBhdGllbnRNb2RhbENvbnRlbnR9IGZyb20gJy4vcGF0aWVudE1vZGFsJ1xuXG5cblxubG9hZFBhZ2VTdHJ1Y3R1cmUoKVxuYWRkUGF0aWVudE1vZGFsQ29udGVudCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=