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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px;\n\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n    overflow:scroll;\n}\n\n\nth {\n    font-size: calc(3px + 1vw);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd,th{\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n}\n\ntd {\n    background-color: var(--white);\n    text-align: center;\n\n}\n\n\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody {\n    display: block;\n    overflow-y: auto;\n    max-height: 500px;\n}\n\ntbody::-webkit-scrollbar{\n    display: none;\n}\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n\n/* PatientFile */\n.patientFile{\n    display: flex;\n    flex-direction: column;\n}\n\n.patientFileTop{\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n}\n\n.patientFileBottom{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    padding: 10px;\n    align-items: flex-start;\n    text-align: center;\n}\n\n.patientFileLabel{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    color: var(--cold);\n    padding: 10px;\n}\n.patientFieldValue{\n    font-weight: bold;\n    font-size: calc(8px + 1vw);\n    color: var(--blue);\n    padding: 10px;\n}\n\n.patientFileLeft,.patientFileRight {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n}\n\n.bottomValueContainer {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n}\n\n#deleteButton{\n    width: 300px;\n    font-weight: bold;\n    font-size: calc(5px + 1vw);\n    color: var(--white);\n    background-color: red;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#deleteButton:hover{\n    filter: brightness(85%);\n}\n\n.buttonContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#downloadButton,#loadLabel{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n}\n\n\n#downloadButton:hover,#loadLabel:hover{\n    filter: brightness(85%);\n}\n\n#loadButton{\n    display: none;\n}\n\n.exportContainer{\n    padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px;\n\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n    overflow:scroll;\n}\n\n\nth {\n    font-size: calc(3px + 1vw);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd,th{\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n}\n\ntd {\n    background-color: var(--white);\n    text-align: center;\n\n}\n\n\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody {\n    display: block;\n    overflow-y: auto;\n    max-height: 500px;\n}\n\ntbody::-webkit-scrollbar{\n    display: none;\n}\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n\n/* PatientFile */\n.patientFile{\n    display: flex;\n    flex-direction: column;\n}\n\n.patientFileTop{\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n}\n\n.patientFileBottom{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    padding: 10px;\n    align-items: flex-start;\n    text-align: center;\n}\n\n.patientFileLabel{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    color: var(--cold);\n    padding: 10px;\n}\n.patientFieldValue{\n    font-weight: bold;\n    font-size: calc(8px + 1vw);\n    color: var(--blue);\n    padding: 10px;\n}\n\n.patientFileLeft,.patientFileRight {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n}\n\n.bottomValueContainer {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n}\n\n#deleteButton{\n    width: 300px;\n    font-weight: bold;\n    font-size: calc(5px + 1vw);\n    color: var(--white);\n    background-color: red;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#deleteButton:hover{\n    filter: brightness(85%);\n}\n\n.buttonContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#downloadButton,#loadLabel{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n}\n\n\n#downloadButton:hover,#loadLabel:hover{\n    filter: brightness(85%);\n}\n\n#loadButton{\n    display: none;\n}\n\n.exportContainer{\n    padding: 10px;\n}"],"sourceRoot":""}]);
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

module.exports = [["Aspirina"],["Latex"],["Lidocaina o Anestesicos"],["Otra alergia"],["Penicilina u Otros Antibioticos"],["Sulfas"],["Yodo"]]

/***/ }),

/***/ "./src/excel/anomalias.csv":
/*!*********************************!*\
  !*** ./src/excel/anomalias.csv ***!
  \*********************************/
/***/ ((module) => {

module.exports = [["Anomalia dentofacial, no especificada",""],["Anomalias de la posicion del diente","Apinamiento. Desplazamiento. Diastema. Espaciamiento anormal. Rotacion. Transposicion. Dientes impactados o incluidos con posicion ectopica. Excluye: dientes impactados o incluidos sin posicion anormal."],["Anomalias de la relacion entre los arcos dentarios","Anteposicion. Desviacion de la linea media del arco dentario. Distoclusion. Mesioclusion. Mordida abierta. Mordida cruzada. Oclusion lingual posterior de los dientes maxilares. Sobremordida (excesiva) horizontal, profunda o vertical."],["Anomalias de la relacion maxilobasilar","Asimetria de la mandibula. Prognatismo. Retrognatismo."],["Anomalias dentofaciales funcionales","Cierre anormal de los maxilares. Maloclusion debida a deglucion anormal, habito digital, labial o lingual, respiracion bucal. Excluye bruxismo y rechinamiento de dientes."],["Anomalias evidentes del tamano de los maxilares","Hiperplasia o hipoplasia del maxilar o mandibula. Macrognacia. Micrognacia. Excluye: acromegalia y sindrome de Pierre Robin."],["Maloclusion de tipo no especificado",""],["Otras anomalias dentofaciales",""],["Trastornos de la articulacion temporomaxilar","Casta�eteo maxilar. Complejo o Sindrome de Costen. Sindrome de disfuncion dolorosa de la articulacion temporomandibular. Trastorno de la articulacion temporomaxilar. Excluye: esguince o luxacion reciente de la articulacion temporomaxilar."]]

/***/ }),

/***/ "./src/excel/caries.csv":
/*!******************************!*\
  !*** ./src/excel/caries.csv ***!
  \******************************/
/***/ ((module) => {

module.exports = [["Caries de la dentina",""],["Caries del cemento",""],["Caries dental no especificada",""],["Caries dentaria detenida",""],["Caries limitada al esmalte","Manchas blancas (caries incipiente)"],["Otras caries dentales",""]]

/***/ }),

/***/ "./src/excel/desarrollo.csv":
/*!**********************************!*\
  !*** ./src/excel/desarrollo.csv ***!
  \**********************************/
/***/ ((module) => {

module.exports = [["Alteraciones en la erupcion dentaria","Caida prematura de los dientes primarios. Denticion precoz. Diente natal. Diente neonatal. Diente primario (persistente) retenido. Erupcion prematura de diente."],["Alteraciones en la formacion dentaria","Aplasia e hipoplasia del cemento. Diente de Turner. Dilaceracion dentaria. Hipoplasia del esmalte. Odontodisplasia regional. Excluye: dientes de Hutchinson y molares moruloides en la sifilis congenita/ dientes moteados."],["Alteraciones hereditarias de la estructura dentaria, no clasificadas en otra parte","Amelogenesis. Dentinogenesis. Odontogenesis. Dientes en concha. Displasia dentinal."],["Anodoncia","Hipodoncia. Oligodoncia."],["Anomalias del tama�o y de la forma del diente","Concrescencia. Fusion. Geminacion. Dientes en forma de clavija (conicos). Dientes evaginados. Dens in dente. Macrodoncia. Microdoncia. Perlas del esmalte. Taurodontismo. Tuberculo paramolar. Excluye: tuberculo de Carabelli."],["Dientes moteados","Esmalte moteado. Fluorosis dental. Opacidad no fluorica del esmalte. Excluye: depositos (adherencias) en los dientes."],["Dientes supernumerarios","Cuarto molar. Dientes suplementarios. Distomolar. Mesiodens. Paramolar."],["Otros trastornos del desarrollo de los dientes","Alteracion del color del diente durante su formacion. Manchas intrinsecas de los dientes SAI."],["Sindrome de la erupcion dentaria",""],["Trastorno del desarrollo de los dientes no especificado ","Trastorno de la odontogenesis SAI."]]

/***/ }),

/***/ "./src/excel/dientes.csv":
/*!*******************************!*\
  !*** ./src/excel/dientes.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["Dientes impactados","Diente que no ha erupcionado debido a la obstruccion por otro diente."],["Dientes incluidos ","Diente que no ha erupcionado sin obstruccion por otro diente."]]

/***/ }),

/***/ "./src/excel/dientesOtros.csv":
/*!************************************!*\
  !*** ./src/excel/dientesOtros.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["Atrofia del reborde alveolar desdentado",""],["Exfoliacion de los dientes debida a causas sistemicas",""],["Otras afecciones especificadas de los dientes y de sus estructuras de sosten","Agrandamiento del reborde alveolar. Odontalgia. Prolongacion alveolar irregular."],["Perdida de dientes debida a accidente, extraccion o enfermedad periodontal local",""],["Raiz dental retenida",""],["Trastornos de los dientes y de sus estructuras de sosten, no especificado",""]]

/***/ }),

/***/ "./src/excel/enciaTranstorno.csv":
/*!***************************************!*\
  !*** ./src/excel/enciaTranstorno.csv ***!
  \***************************************/
/***/ ((module) => {

module.exports = [["Hiperplasia gingival","Fibromatosis gingival."],["Lesiones de la encia y de la zona edentula asociadas con traumatismo","Hiperplasia irritativa del reborde alveolar edentulo (hiperplasia protesica)."],["Otros trastornos especificados de la encia y de la zona edentula","Epulis de celulas gigantes. Epulis fibroso. Granuloma periferico de celulas gigantes. Granuloma piogeno de la encia. Reblandecimiento del reborde."],["Retraccion gingival","Recesion gingival localizada. Recesion gingival generalizada. Recesion gingival postinfecciosa. Recesion gingival postoperatoria."],["Trastorno no especificado de la encia y de la zona edentula ",""]]

/***/ }),

/***/ "./src/excel/enfermedades.csv":
/*!************************************!*\
  !*** ./src/excel/enfermedades.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["Angina de Pecho"],["Artritis"],["Asma"],["Ataque Cardiaco"],["Cancer"],["Diabetes Tipo 1"],["Diabetes Tipo 2"],["Dolor en Pecho"],["Enfermedad del Higado"],["Enfermedad del Riñon"],["Enfisema"],["Hepatitis"],["Hipertension"],["Hipoglucemia"],["Hipotension"],["Ninguna enfermedad"],["Otra enfermedad"],["Problema de Tiroides"],["Problemas Estomacales"],["SIDA/ VIH"],["Tuberculosis"]]

/***/ }),

/***/ "./src/excel/estomatitis.csv":
/*!***********************************!*\
  !*** ./src/excel/estomatitis.csv ***!
  \***********************************/
/***/ ((module) => {

module.exports = [["Celulitis y absceso de la boca","Abscesos submandibulares. Celulitis del piso de la boca. Excluye absceso de glandula salival o lengua, absceso periapical, absceso periodontal, absceso peritonsilar."],["Estomatitis aftosa recurrente","Aftas de Bednar. Estomatitis aftosa mayor o menor. Estomatitis herpetiforme. Periadenitis mucosa necrotica recurrente. Ulcera aftosa recurrente."],["Otras formas de estomatitis","Estomatitis protesica, ulcerativa, vesiculosa."]]

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

module.exports = [["Gingivitis aguda","Excluye gingivitis ulceronecrotica aguda y gingivoestomatitis herpetica"],["Enfermedad del periodonto no especificada",""],["Gingivitis cronica","Gingivitis cronica descamativa, gingivitis cronica hiperplasica, gingivitis cronica marginal simple, gingivitis cronica ulcerativa."],["Otras enfermedades periodontales",""],["Periodontitis aguda","Absceso paradental. Absceso periodontal. Pericoronitis aguda. Excluye: absceso periapical con fistula/ periodontitis apical aguda."],["Periodontitis cronica","Pericoronitis cronica. Periodontitis simple. Periodontitis complicada."],["Periodontosis (juvenil)",""]]

/***/ }),

/***/ "./src/excel/habitos.csv":
/*!*******************************!*\
  !*** ./src/excel/habitos.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["Fumar"],["Alcohol"],["Cocaina"],["Otras drogas"],["Otros habitos"],["Ningun habito"]]

/***/ }),

/***/ "./src/excel/labiosOtros.csv":
/*!***********************************!*\
  !*** ./src/excel/labiosOtros.csv ***!
  \***********************************/
/***/ ((module) => {

module.exports = [["Enfermedades de los labios","Perleche o queilitis angular. Queilitis angular, exfoliativa, glandular. Queilodinia. Queilosis. Excluye ariboflavinosis (por deficiencia de riboflavina), Perleche debido a candidiasis, Perleche debido a deficiencia de riboflavina. Queilitis debida a trastornos relacionados con la radiacion."],["Fibrosis de la submucosa bucal",""],["Granuloma y lesiones semejantes de la mucosa bucal","Granuloma eosinofilo. Granuloma piogenico. Xantoma verrugiforme."],["Hiperplasia irritativa de la mucosa bucal","Excluye hiperplasia irritativa de la zona edentula (hiperplasia protesica)"],["Leucoplasia pilosa",""],["Leucoplasia y otras alteraciones del epitelio bucal, incluyendo la lengua","Eritroplasia. Leucoedema. Leucoqueratosis nicotinica palatina. Paladar del fumador. Excluye leucoplasia pilosa."],["Mordedura del labio y de la mejilla",""],["Otras lesiones y las no especificadas de la mucosa bucal","Mucinosis bucal focal"]]

/***/ }),

/***/ "./src/excel/lengua.csv":
/*!******************************!*\
  !*** ./src/excel/lengua.csv ***!
  \******************************/
/***/ ((module) => {

module.exports = [["Atrofia de las papilas linguales","Glositis atrofica"],["Enfermedades de la lengua, no especificada.","Glosopatia"],["Glositis","Absceso de la lengua. Ulcera traumatica de la lengua. Excluye glositis atrofica."],["Glositis romboidea mediana",""],["Glosodinia","Glosopirosis. Lengua dolorosa."],["Hipertrofia de las papilas linguales","Hipertrofia de las papilas foliaceas. Lengua negra pilosa. Lengua negra vellosa, Lengua saburral."],["Lengua geografica","Glositis areata exfoliativa. Glositis migratoria benigna."],["Lengua plegada","Lengua con surcos. Lengua escrotal. Lengua fisurada. Excluye lengua fisurada congenita."],["Otras enfermedades de la lengua","Agrandamiento. Atrofia. Crenacion de la lengua. Hipertrofia."]]

/***/ }),

/***/ "./src/excel/luxacion.csv":
/*!********************************!*\
  !*** ./src/excel/luxacion.csv ***!
  \********************************/
/***/ ((module) => {

module.exports = [["Esguinces y torceduras de articulaciones y ligamentos de otras partes y las no especificadas de la cabeza",""],["Esguinces y torceduras del maxilar","Articulacion o ligamento temporomaxilar"],["Luxacion de otras partes y de las no especificadas de la cabeza",""],["Luxacion del cartilago septal de la nariz",""],["Luxacion del diente",""],["Luxacion del maxilar","Mandibula. Maxilar. Temporomaxilar."]]

/***/ }),

/***/ "./src/excel/maxilaresOtros.csv":
/*!**************************************!*\
  !*** ./src/excel/maxilaresOtros.csv ***!
  \**************************************/
/***/ ((module) => {

module.exports = [["Afecciones inflamatorias de los maxilares","Osteitis. Osteomielitis neonatal. Osteorradionecrosis. Periostitis, Secuestro oseo de los maxilares. "],["Alveolitis del maxilar","Alveolo seco. Osteitis alveolar."],["Enfermedades de los maxilares, no especificada.",""],["Granuloma central de celulas gigantes","Excluye granuloma periferico de celulas gigantes."],["Otras enfermedades especificadas de los maxilares","Displasia fibrosa. Exostosis. Hiperplasia o hipoplasia maxilar. Hiperplasia o hipoplasia condilar mandibular. Querubismo."],["Trastornos del desarrollo de los maxilares","Quiste latente oseo de los maxilares. Quiste de Stafne. Torus mandibular. Torus palatino."]]

/***/ }),

/***/ "./src/excel/pulpa.csv":
/*!*****************************!*\
  !*** ./src/excel/pulpa.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["Absceso periapical con fistula","Absceso dental con fistula. Absceso dentoalveolar con fistula."],["Absceso periapical sin fistula","Absceso dental sin fistula. Absceso dentoalveolar sin fistula."],["Degeneracion de la pulpa","Calcificaciones de la pulpa. Piedras. Denticulos."],["Formacion anormal de tejido duro en la pulpa","Dentina secundaria o irregular."],["Necrosis de la pulpa","Gangrena de la pulpa."],["Otras enfermedades y las no especificadas de la pulpa y del tejido periapical",""],["Periodontitis apical aguda originada en la pulpa",""],["Periodontitis apical cronica","Granuloma apical o periapical. Periodontitis apical cronica."],["Pulpitis","Absceso. Polipo. Pulpitis aguda. Pulpitis cronica (hiperplasica, ulcerativa). Pulpitis supurativa."],["Quiste radicular","Quiste apical (periodontal). Quiste periapical. Quiste radicular residual. Excluye: quiste lateral periodontal."]]

/***/ }),

/***/ "./src/excel/quistes.csv":
/*!*******************************!*\
  !*** ./src/excel/quistes.csv ***!
  \*******************************/
/***/ ((module) => {

module.exports = [["Otros quistes de la region bucal, no clasificados en otra parte","Perla de Epstein. Quistes: dermoide, epidermoide, linfoepitelial, nasoalveolar, nasolabial."],["Otros quistes de los maxilares","Quiste maxilar aneurismatico. Quiste maxilar hemorragico. Quiste maxilar traumatico. Excluye quiste de Stafne. Quiste latente oseo de los maxilares. "],["Quistes de la region bucal, sin otra especificacion",""],["Quistes de las fisuras (no odontogenicos)","Quistes del: canal incisivo, globulomaxilar, nasopalatino, palatino medio, papila palatina."],["Quistes originados por el desarrollo de los dientes (quistes odontogenicos)","Queratoquiste. Quistes: dentigero, erupcion dentaria, folicular, gingival, lateral periodontal, primordial."]]

/***/ }),

/***/ "./src/excel/salivales.csv":
/*!*********************************!*\
  !*** ./src/excel/salivales.csv ***!
  \*********************************/
/***/ ((module) => {

module.exports = [["Absceso de glandula salival",""],["Alteraciones de la secrecion salival","Hiposecrecion salival. Ptialismo. Xerostomia. Excluye Sindrome de Sj�gren."],["Atrofia de glandula salival",""],["Enfermedad de glandula salival, no especificada","Sialadenopatia"],["Fistula de glandula salival","Excluye fistula congenita de glandula salival."],["Hipertrofia de glandula salival",""],["Mucocele de glandula salival","Quiste mucoso de glandula salival por extravasacion o por retencion. Ranula."],["Otras enfermedades de las glandulas salivales","Enfermedad de Mikulicz. Estenosis del conducto salival. Sialometaplasia necrotizante. Excluye sindrome seco (Sj�gren)."],["Sialoadenitis","Excluye: fiebre uveoparotidea (Heerfordt), parotiditis infecciosa (epidemica)."],["Sialolitiasis","Calculo de conducto o de glandula salival."]]

/***/ }),

/***/ "./src/excel/tejidosOtros.csv":
/*!************************************!*\
  !*** ./src/excel/tejidosOtros.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["Abrasion de los dientes","Abrasion por dentifrico, habitos, ocupacional, ritual, tradicional. Defecto cuneiforme de los dientes."],["Anquilosis dental",""],["Atricion excesiva de los dientes","Desgaste oclusal. Desgaste proximal."],["Cambios posteruptivos del color de los tejidos dentales duros","Excluye depositos (acreciones) en los dientes."],["Depositos (acreciones) en los dientes","Calculo dental supragingival o subgingival. Deposito en los dientes anaranjado, betel, materia alba, negro, tabaco, verde. Pigmentacion de los dientes."],["Enfermedad no especificada de los tejidos dentales duros",""],["Erosion de los dientes","Debida a dieta, drogas y medicamentos, vomito persistente, idiopatica, ocupacional."],["Hipercementosis","Hiperplasia del cemento."],["Otras enfermedades especificadas de los tejidos duros de los dientes","Dentina sensible. Esmalte irradiado."],["Reabsorcion patologica de los dientes","Granuloma interno de la pulpa. Reabsorcion externa de los dientes."]]

/***/ }),

/***/ "./src/excel/tratamientos.csv":
/*!************************************!*\
  !*** ./src/excel/tratamientos.csv ***!
  \************************************/
/***/ ((module) => {

module.exports = [["Ajuste oclusal"],["Biopulpectomia"],["Canalizacion con especialista"],["Curetaje abierto"],["Curetaje cerrado"],["Exodoncia quirurgica"],["Exodoncia simple"],["Instruccion de tecnica de cepillado"],["Interconsulta con cirujano maxilofacial"],["Interconsulta con endodoncista"],["Necropulpectomia"],["Obturacion permanente"],["Obturacion temporal"],["Operatoria Dental"],["Orientacion sobre salud dental"],["Profilaxis"],["Pulpectomia"],["Pulpotomia"],["Retiro de suturas"],["Seguimiento post-extraccion"],["Sellador de fosetas y fisuras"],["Solicitud de estudios complementarios"]]

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

/***/ "./src/dateFunctions.js":
/*!******************************!*\
  !*** ./src/dateFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodaysDate": () => (/* binding */ getTodaysDate)
/* harmony export */ });
let getTodaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return today
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

/***/ "./src/download.js":
/*!*************************!*\
  !*** ./src/download.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadSettings": () => (/* binding */ downloadSettings)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _patientTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientTable */ "./src/patientTable.js");





let downloadSettings = () => {
    downloadFile()
    exportFile()
}

let downloadFile = ()=>{

    let addButton = document.getElementById('downloadButton')

    addButton.addEventListener('click',()=>{
        let patientDatabase = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('patientDatabase')
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(patientDatabase));

        addButton.setAttribute("href",     dataStr);
        addButton.setAttribute("download", "Pacientes.json");
        
    })    
}

let exportFile = () => {

    let exportButton = document.getElementById('loadButton')
    
    exportButton.addEventListener('change', (event) => {
        let reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
        
    })
    

}

let onReaderLoad = (event) => {
    let obj = JSON.parse(event.target.result);
    console.log(obj)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveInLocalStorage)('patientDatabase',obj)
    ;(0,_patientTable__WEBPACK_IMPORTED_MODULE_1__.addPatientTable)()
    
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

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "saveInLocalStorage": () => (/* binding */ saveInLocalStorage)
/* harmony export */ });


let saveInLocalStorage  = (key,value) => {
    localStorage.setItem (key, JSON.stringify(value))
}

let getFromLocalStorage = (key) => {
    
    if (JSON.parse(localStorage.getItem(key))){     
        let value = JSON.parse(localStorage.getItem(key))
        return value
    }else{
        let placeHolder = []
        console.log('Created a placeholder array')
        localStorage.setItem (key,JSON.stringify(placeHolder))

        return JSON.parse(localStorage.getItem(key))
    }
    
   

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

/***/ "./src/paciente.js":
/*!*************************!*\
  !*** ./src/paciente.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Biblioteca": () => (/* binding */ Biblioteca),
/* harmony export */   "Cita": () => (/* binding */ Cita),
/* harmony export */   "Expediente": () => (/* binding */ Expediente),
/* harmony export */   "Paciente": () => (/* binding */ Paciente)
/* harmony export */ });
class Paciente {

    constructor(name,age,sex,general,especifico,tratamiento,farmacoterapia,enfermedades,alergias,habitos,date,id,notes) {
      this.name = name;
      this.age = age;
      this.sex = sex ;
      this.general = general;
      this.especifico = especifico;
      this.tratamiento = tratamiento;
      this.farmacoterapia = farmacoterapia;
      this.enfermedades = enfermedades;
      this.alergias = alergias;
      this.habitos = habitos;
      this.date = date;
      this.id = id;
      this.notes = notes;
    }
    
}

class Expediente {
  constructor(cita,paciente){
    this.cita = cita
    this.paciente = paciente
  }
}

class Cita {
  constructor(paciente,fecha,notas){
    this.paciente = paciente
    this.fecha = fecha
    this.notas = notas
  }
}

class Biblioteca {
  constructor(pacientes){
    this.pacientes = pacientes
  }

  addPatient = (Paciente) => {
    this.pacientes.push(Paciente)
  }
}



/***/ }),

/***/ "./src/patientFileModal.js":
/*!*********************************!*\
  !*** ./src/patientFileModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPatientFileModal": () => (/* binding */ createPatientFileModal)
/* harmony export */ });
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");
/* harmony import */ var _modalCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalCreators */ "./src/modalCreators.js");
/* harmony import */ var _paciente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paciente */ "./src/paciente.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _patientTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patientTable */ "./src/patientTable.js");











let createPatientFileModal = (patient) => {

    /*Create main container*/
    let mainContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFile')

    /*Left side container*/
    let leftContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFileLeft')

    /*Left side container*/
    let rightContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFileRight')

    /* Top Container */
    let topContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFileTop')

    /* Bottom Container */
    let bottomContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('patientFileBottom')


    /*date Label*/
    let dateLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Nombre')
    let dateValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.date}`)

    leftContainer.appendChild(dateLabel)
    leftContainer.appendChild(dateValue)

    /*Name Label*/
    let nameLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Nombre')
    let nameValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.name}`)

    leftContainer.appendChild(nameLabel)
    leftContainer.appendChild(nameValue)

    /*General Label*/
    let generalLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Enfermedad General')
    let generalValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.general}`)

    leftContainer.appendChild(generalLabel)
    leftContainer.appendChild(generalValue)

    /*specific Label*/
    let specificLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Enfermedad Especifica')
    let specificValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.specific}`)

    leftContainer.appendChild(specificLabel)
    leftContainer.appendChild(specificValue)

    /*tratamiento Label*/
    let tratamientoLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Enfermedad Etratamientoa')
    let tratamientoValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.tratamiento}`)

    leftContainer.appendChild(tratamientoLabel)
    leftContainer.appendChild(tratamientoValue)

    /*age Label*/
    let ageLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Edad')
    let ageValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.age}`)

    rightContainer.appendChild(ageLabel)
    rightContainer.appendChild(ageValue)

    /*sex Label*/
    let sexLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Sexo')
    let sexValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.sex}`)

    rightContainer.appendChild(sexLabel)
    rightContainer.appendChild(sexValue)


    /*farmacoterapia Label*/
    let farmacoterapiaLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','Farmacoterapia')
    let farmacoterapiaValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.farmacoterapia}`)

    rightContainer.appendChild(farmacoterapiaLabel)
    rightContainer.appendChild(farmacoterapiaValue)

    /*notas Label*/
    let notasLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','notas')
    let notasValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.notes}`)

    rightContainer.appendChild(notasLabel)
    rightContainer.appendChild(notasValue)


    /*alergias Label*/
    let alergiasLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','alergias')
    let alergiasValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.alergias}`)

    let bottomAlergiaContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('bottomValueContainer')

    bottomAlergiaContainer.appendChild(alergiasLabel)
    bottomAlergiaContainer.appendChild(alergiasValue)

    bottomContainer.appendChild(bottomAlergiaContainer)
    
    /*enfermedades Label*/
    let enfermedadesLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','enfermedades')
    let enfermedadesValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.enfermedades}`)

    let  bottomEnfermedadesContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('bottomValueContainer')

    bottomEnfermedadesContainer.appendChild(enfermedadesLabel)
    bottomEnfermedadesContainer.appendChild(enfermedadesValue)

    bottomContainer.appendChild(bottomEnfermedadesContainer)



    /*habitos Label*/
    let habitosLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFileLabel','habitos')
    let habitosValue = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','patientFieldValue',`${patient.habitos}`)

    let bottomHabitosContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('bottomValueContainer')

    bottomHabitosContainer.appendChild(habitosLabel)
    bottomHabitosContainer.appendChild(habitosValue)

    bottomContainer.appendChild(bottomHabitosContainer)


    let buttonContainer = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('buttonContainer')

    let deleteButton = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button','deleteButton','Eliminar paciente','delete')

    deleteButton.addEventListener('click',()=>{
        if (confirm("Advertencia se esta borrando el paciente! Deseas confirmar esto?") == true) {
            deletePatient(patient)
            closeForm()
            ;(0,_patientTable__WEBPACK_IMPORTED_MODULE_4__.addPatientTable)()
          } else {
            
          }
        
        

    })

    buttonContainer.appendChild(deleteButton)

    topContainer.appendChild(leftContainer)
    topContainer.appendChild(rightContainer)

    mainContainer.appendChild(topContainer)
    mainContainer.appendChild(bottomContainer)
    mainContainer.appendChild(buttonContainer)


    return mainContainer
}


let deletePatient = (paciente) => {
    let patientDatabase = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('patientDatabase')

    patientDatabase = patientDatabase.filter(item => item.id !== paciente.id)
    console.log()

    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveInLocalStorage)('patientDatabase',patientDatabase)
} 


let closeForm = () => {
    let modalContainer = document.getElementById('modal')
    modalContainer.style.display = "none";
    document.body.removeChild(modalContainer)
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
/* harmony import */ var _paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paciente */ "./src/paciente.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _dateFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateFunctions */ "./src/dateFunctions.js");
/* harmony import */ var _patientTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patientTable */ "./src/patientTable.js");













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
    let mainForm = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('form','patientForm','','patientForm')
    mainForm.setAttribute('onsubmit','return false')

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
    nameInput.setAttribute('id','fname')
    nameInput.setAttribute('required','')

    rightSide.appendChild(nameLabel);
    rightSide.appendChild(nameInput);


    /*General*/
    let generalLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Diagnostico General')
    generalLabel.setAttribute('for','fgeneral')
    
    let generalInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','fgeneral')
    generalInput.setAttribute('id','fgeneral')
    generalInput.setAttribute('required','')

    generalInput.options.add(new Option('','',true,true))
    generalInput.options[0].setAttribute('disabled','')
    generalInput.options[0].setAttribute('hidden','')


    for(let i = 0; i < general.length; i++){
        generalInput.options.add(new Option(general[i], general[i]));
    }   

    rightSide.appendChild(generalLabel);
    rightSide.appendChild(generalInput);

    /* Especifico */
    let specificLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Diagnostico Especifico')
    specificLabel.setAttribute('for','fspecific')
    
    let specificInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','fspecific')
    specificInput.setAttribute('id','fspecific')
    specificInput.setAttribute('required','')



    generalInput.addEventListener('change',(event) =>{
        
        let elementIndexSelected = general.indexOf(event.target.value)
        let specificArray = specific[elementIndexSelected].map((element)=>{
            return element[0]
        })
        let notesSpecificArray = specific[elementIndexSelected].map((element)=>{
            return element[1]
        })
        
        specificInput.options.add(new Option('','',true,true))
        specificInput.options[0].setAttribute('disabled','')
        specificInput.options[0].setAttribute('hidden','')

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
    tratamientosInput.setAttribute('id','ftratamiento')
    tratamientosInput.setAttribute('required','')
    


    tratamientosInput.options.add(new Option('','',true,true))
    tratamientosInput.options[0].setAttribute('disabled','')
    tratamientosInput.options[0].setAttribute('hidden','')

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

    let edadInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input','formTextInput','','fedad')
    edadInput.type = 'number'
    edadInput.setAttribute('id','fedad')
    edadInput.setAttribute('required','')

    leftSide.appendChild(edadLabel)
    leftSide.appendChild(edadInput)

    /* Sexo */
    let sexoLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Sexo')
    sexoLabel.setAttribute('for','fsexo')

    let sexoInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','selectInput','','fsexo')
    sexoInput.setAttribute('id','fsexo')
    sexoInput.setAttribute('required','')

    sexoInput.options.add(new Option('','',true,true))
    sexoInput.options[0].setAttribute('disabled','')
    sexoInput.options[0].setAttribute('hidden','')
    
    let sexes = ['Masculino','Femenino','Otro']

    for(let i = 0; i < sexes.length; i++){
        sexoInput.options.add(new Option(sexes[i], sexes[i]));
    } 

    leftSide.appendChild(sexoLabel)
    leftSide.appendChild(sexoInput)

    /*Farmaco*/
    let farmacoLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Farmacoterapia')
    farmacoLabel.setAttribute('for','ffarmaco')

    let farmacoInput = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('select','formTextInput','','ffarmaco')
    farmacoInput.setAttribute('id','ffarmaco')

    farmacoInput.options.add(new Option('','',true,true))
    farmacoInput.options[0].setAttribute('disabled','')
    farmacoInput.options[0].setAttribute('hidden','')
        
    let farmaco = ['Si','No']

    for(let i = 0; i < farmaco.length; i++){
        farmacoInput.options.add(new Option(farmaco[i], farmaco[i]));
    } 

    leftSide.appendChild(farmacoLabel)
    leftSide.appendChild(farmacoInput)

    /* Notas */
    let notesLabel = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label','formTitle','Notas')
    notesLabel.setAttribute('for','fnotas')
    
    let notesBox = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('textarea','noteBox','','fnotas')

    leftSide.appendChild(notesLabel)
    leftSide.appendChild(notesBox)

    /*Submit Bottom */
    let submitButton = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('submit','submitButton','Agregar')

    submitButton.addEventListener('click',()=>{
        let patient = checkFormValues()
        let newPatient = new _paciente__WEBPACK_IMPORTED_MODULE_3__.Paciente(patient.name,patient.edad,patient.sex,patient.general,patient.specific,patient.tratamiento,patient.farmaco,patient.enfermedades,patient.alergy,patient.habitos,patient.date,patient.id,patient.notes)

        let patientDatabase = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)('patientDatabase')
        
        patientDatabase.push(newPatient)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveInLocalStorage)('patientDatabase',patientDatabase)
        clearForm()
        closeForm()
        ;(0,_patientTable__WEBPACK_IMPORTED_MODULE_6__.addPatientTable)()
    })

    topSide.appendChild(rightSide);
    topSide.appendChild(leftSide);
    mainForm.appendChild(topSide);
    mainForm.appendChild(bottomSide);
    mainForm.appendChild(submitButton);



    let addButton = document.getElementById('addPatientButton')

    ;(0,_modalCreators__WEBPACK_IMPORTED_MODULE_1__.createModalStructure)(mainForm,'modal','Agregar Paciente',addButton)
    return mainForm
 
}


let checkFormValues = () => {

    let patientInfo = {
        name : document.getElementById('fname').value,
        general: document.getElementById('fgeneral').value,
        farmaco: document.getElementById('ffarmaco').value,
        specific: document.getElementById('fspecific').value,
        tratamiento: document.getElementById('ftratamiento').value,
        edad: document.getElementById('fedad').value,
        sex: document.getElementById('fsexo').value,
        notes: document.getElementById('fnotas').value,
        alergy: node2Array(document.querySelectorAll('.alergiasContainer > .checkboxContainer > .checkbox > input:checked')),
        enfermedades: node2Array(document.querySelectorAll('.enfermedadesContainer > .checkboxContainer > .checkbox > input:checked')),
        habitos: node2Array(document.querySelectorAll('.habitosContainer > .checkboxContainer > .checkbox > input:checked')),
        date: (0,_dateFunctions__WEBPACK_IMPORTED_MODULE_5__.getTodaysDate)(),
        id: checkForId(),
    }
    

    return patientInfo
}

let checkForId = () => {
    let database  = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)('patientDatabase')
    if (database.length != 0){
        let id = database[database.length-1].id + 1
        console.log(id)
        return id
    }else{
        let id = 1
        console.log(id)
        return id
    }
}

let closeForm = () => {
    let modalContainer = document.getElementById('modal')
    modalContainer.style.display = "none";
    document.body.removeChild(modalContainer)
}

let node2Array = (node) => {
    let array = []
    node.forEach(element => {
        array.push(element.value)     
    });
    return array
}

let clearForm = () => {
    let form = document.querySelector('#patientForm')
    let inputs = form.querySelectorAll('input, select,textarea')

    inputs.forEach(input => {
        if(input.type === 'text' || input.type === 'textarea' || input.type === 'number'){
            input.value = ''
        }else if(input.type === 'checkbox'){
            input.checked = false
        }else if (input.type === 'select-one'){
            input.selectedIndex = -1
        }
    });
}



/***/ }),

/***/ "./src/patientTable.js":
/*!*****************************!*\
  !*** ./src/patientTable.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPatientTable": () => (/* binding */ addPatientTable)
/* harmony export */ });
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _patientFileModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patientFileModal */ "./src/patientFileModal.js");
/* harmony import */ var _modalCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalCreators */ "./src/modalCreators.js");






let addPatientTable = () => {

    /*Gets the main patient data base*/
    let patientDatabase = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('patientDatabase')

    /*Gets the main table*/
    let patientTable = document.getElementById('tableBody')
    
    patientTable.innerHTML = ''
    
    patientDatabase.forEach(patient => {
        addPatientRow(patient)
    });

    addClickTableEvents()
    addSortTableFunctions()

    let search = document.getElementById("searchbar");
    search.addEventListener('keydown',()=>{
        searchTable()
    })

}

let addPatientRow = (patient) => {
    
    /*Gets the main table*/
    let patientTable = document.getElementById('tableBody')
    

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = patientTable.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let id = row.insertCell(0)
    let date = row.insertCell(1);
    let name = row.insertCell(2);
    let age = row.insertCell(3);
    let sex = row.insertCell(4);
    let general = row.insertCell(5);

    // Add some text to the new cells:
    id.innerHTML = patient.id
    date.innerHTML = patient.date;
    name.innerHTML = patient.name;
    age.innerHTML = patient.age;
    sex.innerHTML = patient.sex;
    general.innerHTML = patient.general;

}

let addClickTableEvents = () => {
    let  table = document.getElementById("patientTable");
    let  rows = table.getElementsByTagName("tr");
    let  patientArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('patientDatabase')
    for (let i = 1; i < rows.length; i++) {    
        for (let j = 0; j < table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            let patientID = table.rows[i].cells[0].innerHTML;
            let patient = patientArray.find(patientTest => patientTest.id == patientID)
            let patientInfo = (0,_patientFileModal__WEBPACK_IMPORTED_MODULE_2__.createPatientFileModal)(patient)
            ;(0,_modalCreators__WEBPACK_IMPORTED_MODULE_3__.createModalStructure)(patientInfo,'modal','Informacion del paciente',cell)
        }
    }

}

let sortTable = (n) => {
    
    let table,rows,switching,i,x,y,shouldSwitch,dir,switchcount = 0;

    table = document.getElementById("patientTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < rows.length - 1; i++) { //Change i=0 if you have the header th a separate table.
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
        } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
        }
        }
        if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
        } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
        }
    }
}

let addSortTableFunctions = () =>{
    let  table = document.getElementById("patientTable");
    let  headers = table.getElementsByTagName("th");
    for (let i= 0; i < headers.length ; i++){
        let head = headers[i]
        head.addEventListener('click',()=>{
            sortTable(i)
        })
    }
}

let searchTable = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("patientTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }
    }
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
/* harmony import */ var _paciente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paciente */ "./src/paciente.js");
/* harmony import */ var _patientModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patientModal */ "./src/patientModal.js");
/* harmony import */ var _patientTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patientTable */ "./src/patientTable.js");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download */ "./src/download.js");










(0,_patientTable__WEBPACK_IMPORTED_MODULE_4__.addPatientTable)()
;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStructure)()
;(0,_patientModal__WEBPACK_IMPORTED_MODULE_3__.addPatientModalContent)()
;(0,_download__WEBPACK_IMPORTED_MODULE_5__.downloadSettings)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2pLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ3RCO0FBQ3lCO0FBQ007QUFDTjtBQUNIOzs7OztBQUszQyw4REFBZTtBQUNmLHlEQUFpQjtBQUNqQixzRUFBc0I7QUFDdEIsNERBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2FsZXJnaWFzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9hbm9tYWxpYXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Nhcmllcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGVzYXJyb2xsby5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGllbnRlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGllbnRlc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lbmNpYVRyYW5zdG9ybm8uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VuZmVybWVkYWRlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZXN0b21hdGl0aXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2dlbmVyYWxlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZ2luZ2l2aXRpcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvaGFiaXRvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbGFiaW9zT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2xlbmd1YS5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbHV4YWNpb24uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL21heGlsYXJlc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9wdWxwYS5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvcXVpc3Rlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvc2FsaXZhbGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC90ZWppZG9zT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3RyYXRhbWllbnRvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2RhdGVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZG9tQ3JlYXRvckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kb3dubG9hZC5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9tb2RhbENyZWF0b3JzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhY2llbnRlLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhdGllbnRGaWxlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvcGF0aWVudE1vZGFsLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhdGllbnRUYWJsZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXdoaXRlOiNGM0Y5RkI7XFxuICAgIC0tYmx1ZTojODdDMENEO1xcbiAgICAtLW5hdnk6IzIyNjU5NztcXG4gICAgLS1jb2xkOiMxMTNGNjc7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaGJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6ICMxMTNGNjcgMnB4IHNvbGlkO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzLC5zZWFyY2hJbnB1dDpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbiNzZWFyY2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuXFxuLm1haW5UYWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcblxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuXFxudGgge1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRkLHRoe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbnRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbnRoZWFkLCB0Ym9keSB0ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbnRib2R5Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogOTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcbiAgXFxuLm1vZGFsSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuXFxuXFxuLnBhdGllbnRGb3JtVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGF0aWVudEZvcm1SaWdodCwgLnBhdGllbnRGb3JtTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9ybVRleHRJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLm5vdGVCb3h7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucGF0aWVudEZvcm1Cb3R0b217XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVye1xcbiAgICBmbGV4OiA1O1xcbn1cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiBjYWxjKDFweCArIDF2dyk7XFxufVxcblxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuZmxvYXQ6IHJpZ2h0O1xcbmJhY2tncm91bmQ6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbmNvbG9yOiBibGFjaztcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQYXRpZW50RmlsZSAqL1xcbi5wYXRpZW50RmlsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBhdGllbnRGaWxlVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGF0aWVudEZpbGVCb3R0b217XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYXRpZW50RmlsZUxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wYXRpZW50RmllbGRWYWx1ZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUxlZnQsLnBhdGllbnRGaWxlUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm90dG9tVmFsdWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGVsZXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXZ3KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkb3dubG9hZEJ1dHRvbiwjbG9hZExhYmVse1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcblxcbiNkb3dubG9hZEJ1dHRvbjpob3ZlciwjbG9hZExhYmVsOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI2xvYWRCdXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHBvcnRDb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFF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QUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLXdoaXRlOiNGM0Y5RkI7XFxuICAgIC0tYmx1ZTojODdDMENEO1xcbiAgICAtLW5hdnk6IzIyNjU5NztcXG4gICAgLS1jb2xkOiMxMTNGNjc7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaGJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6ICMxMTNGNjcgMnB4IHNvbGlkO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzLC5zZWFyY2hJbnB1dDpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbiNzZWFyY2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuXFxuLm1haW5UYWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcblxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuXFxudGgge1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRkLHRoe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbnRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbnRoZWFkLCB0Ym9keSB0ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbnRib2R5Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogOTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcbiAgXFxuLm1vZGFsSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuXFxuXFxuLnBhdGllbnRGb3JtVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGF0aWVudEZvcm1SaWdodCwgLnBhdGllbnRGb3JtTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9ybVRleHRJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLm5vdGVCb3h7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucGF0aWVudEZvcm1Cb3R0b217XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVye1xcbiAgICBmbGV4OiA1O1xcbn1cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiBjYWxjKDFweCArIDF2dyk7XFxufVxcblxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuZmxvYXQ6IHJpZ2h0O1xcbmJhY2tncm91bmQ6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbmNvbG9yOiBibGFjaztcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQYXRpZW50RmlsZSAqL1xcbi5wYXRpZW50RmlsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBhdGllbnRGaWxlVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGF0aWVudEZpbGVCb3R0b217XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYXRpZW50RmlsZUxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wYXRpZW50RmllbGRWYWx1ZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUxlZnQsLnBhdGllbnRGaWxlUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm90dG9tVmFsdWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGVsZXRlQnV0dG9ue1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXZ3KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkb3dubG9hZEJ1dHRvbiwjbG9hZExhYmVse1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcblxcbiNkb3dubG9hZEJ1dHRvbjpob3ZlciwjbG9hZExhYmVsOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI2xvYWRCdXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHBvcnRDb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBc3BpcmluYVwiXSxbXCJMYXRleFwiXSxbXCJMaWRvY2FpbmEgbyBBbmVzdGVzaWNvc1wiXSxbXCJPdHJhIGFsZXJnaWFcIl0sW1wiUGVuaWNpbGluYSB1IE90cm9zIEFudGliaW90aWNvc1wiXSxbXCJTdWxmYXNcIl0sW1wiWW9kb1wiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBbm9tYWxpYSBkZW50b2ZhY2lhbCwgbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHBvc2ljaW9uIGRlbCBkaWVudGVcIixcIkFwaW5hbWllbnRvLiBEZXNwbGF6YW1pZW50by4gRGlhc3RlbWEuIEVzcGFjaWFtaWVudG8gYW5vcm1hbC4gUm90YWNpb24uIFRyYW5zcG9zaWNpb24uIERpZW50ZXMgaW1wYWN0YWRvcyBvIGluY2x1aWRvcyBjb24gcG9zaWNpb24gZWN0b3BpY2EuIEV4Y2x1eWU6IGRpZW50ZXMgaW1wYWN0YWRvcyBvIGluY2x1aWRvcyBzaW4gcG9zaWNpb24gYW5vcm1hbC5cIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHJlbGFjaW9uIGVudHJlIGxvcyBhcmNvcyBkZW50YXJpb3NcIixcIkFudGVwb3NpY2lvbi4gRGVzdmlhY2lvbiBkZSBsYSBsaW5lYSBtZWRpYSBkZWwgYXJjbyBkZW50YXJpby4gRGlzdG9jbHVzaW9uLiBNZXNpb2NsdXNpb24uIE1vcmRpZGEgYWJpZXJ0YS4gTW9yZGlkYSBjcnV6YWRhLiBPY2x1c2lvbiBsaW5ndWFsIHBvc3RlcmlvciBkZSBsb3MgZGllbnRlcyBtYXhpbGFyZXMuIFNvYnJlbW9yZGlkYSAoZXhjZXNpdmEpIGhvcml6b250YWwsIHByb2Z1bmRhIG8gdmVydGljYWwuXCJdLFtcIkFub21hbGlhcyBkZSBsYSByZWxhY2lvbiBtYXhpbG9iYXNpbGFyXCIsXCJBc2ltZXRyaWEgZGUgbGEgbWFuZGlidWxhLiBQcm9nbmF0aXNtby4gUmV0cm9nbmF0aXNtby5cIl0sW1wiQW5vbWFsaWFzIGRlbnRvZmFjaWFsZXMgZnVuY2lvbmFsZXNcIixcIkNpZXJyZSBhbm9ybWFsIGRlIGxvcyBtYXhpbGFyZXMuIE1hbG9jbHVzaW9uIGRlYmlkYSBhIGRlZ2x1Y2lvbiBhbm9ybWFsLCBoYWJpdG8gZGlnaXRhbCwgbGFiaWFsIG8gbGluZ3VhbCwgcmVzcGlyYWNpb24gYnVjYWwuIEV4Y2x1eWUgYnJ1eGlzbW8geSByZWNoaW5hbWllbnRvIGRlIGRpZW50ZXMuXCJdLFtcIkFub21hbGlhcyBldmlkZW50ZXMgZGVsIHRhbWFubyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgZGVsIG1heGlsYXIgbyBtYW5kaWJ1bGEuIE1hY3JvZ25hY2lhLiBNaWNyb2duYWNpYS4gRXhjbHV5ZTogYWNyb21lZ2FsaWEgeSBzaW5kcm9tZSBkZSBQaWVycmUgUm9iaW4uXCJdLFtcIk1hbG9jbHVzaW9uIGRlIHRpcG8gbm8gZXNwZWNpZmljYWRvXCIsXCJcIl0sW1wiT3RyYXMgYW5vbWFsaWFzIGRlbnRvZmFjaWFsZXNcIixcIlwiXSxbXCJUcmFzdG9ybm9zIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhclwiLFwiQ2FzdGHvv71ldGVvIG1heGlsYXIuIENvbXBsZWpvIG8gU2luZHJvbWUgZGUgQ29zdGVuLiBTaW5kcm9tZSBkZSBkaXNmdW5jaW9uIGRvbG9yb3NhIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWFuZGlidWxhci4gVHJhc3Rvcm5vIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhci4gRXhjbHV5ZTogZXNndWluY2UgbyBsdXhhY2lvbiByZWNpZW50ZSBkZSBsYSBhcnRpY3VsYWNpb24gdGVtcG9yb21heGlsYXIuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkNhcmllcyBkZSBsYSBkZW50aW5hXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbCBjZW1lbnRvXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbnRhbCBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJDYXJpZXMgZGVudGFyaWEgZGV0ZW5pZGFcIixcIlwiXSxbXCJDYXJpZXMgbGltaXRhZGEgYWwgZXNtYWx0ZVwiLFwiTWFuY2hhcyBibGFuY2FzIChjYXJpZXMgaW5jaXBpZW50ZSlcIl0sW1wiT3RyYXMgY2FyaWVzIGRlbnRhbGVzXCIsXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWx0ZXJhY2lvbmVzIGVuIGxhIGVydXBjaW9uIGRlbnRhcmlhXCIsXCJDYWlkYSBwcmVtYXR1cmEgZGUgbG9zIGRpZW50ZXMgcHJpbWFyaW9zLiBEZW50aWNpb24gcHJlY296LiBEaWVudGUgbmF0YWwuIERpZW50ZSBuZW9uYXRhbC4gRGllbnRlIHByaW1hcmlvIChwZXJzaXN0ZW50ZSkgcmV0ZW5pZG8uIEVydXBjaW9uIHByZW1hdHVyYSBkZSBkaWVudGUuXCJdLFtcIkFsdGVyYWNpb25lcyBlbiBsYSBmb3JtYWNpb24gZGVudGFyaWFcIixcIkFwbGFzaWEgZSBoaXBvcGxhc2lhIGRlbCBjZW1lbnRvLiBEaWVudGUgZGUgVHVybmVyLiBEaWxhY2VyYWNpb24gZGVudGFyaWEuIEhpcG9wbGFzaWEgZGVsIGVzbWFsdGUuIE9kb250b2Rpc3BsYXNpYSByZWdpb25hbC4gRXhjbHV5ZTogZGllbnRlcyBkZSBIdXRjaGluc29uIHkgbW9sYXJlcyBtb3J1bG9pZGVzIGVuIGxhIHNpZmlsaXMgY29uZ2VuaXRhLyBkaWVudGVzIG1vdGVhZG9zLlwiXSxbXCJBbHRlcmFjaW9uZXMgaGVyZWRpdGFyaWFzIGRlIGxhIGVzdHJ1Y3R1cmEgZGVudGFyaWEsIG5vIGNsYXNpZmljYWRhcyBlbiBvdHJhIHBhcnRlXCIsXCJBbWVsb2dlbmVzaXMuIERlbnRpbm9nZW5lc2lzLiBPZG9udG9nZW5lc2lzLiBEaWVudGVzIGVuIGNvbmNoYS4gRGlzcGxhc2lhIGRlbnRpbmFsLlwiXSxbXCJBbm9kb25jaWFcIixcIkhpcG9kb25jaWEuIE9saWdvZG9uY2lhLlwiXSxbXCJBbm9tYWxpYXMgZGVsIHRhbWHvv71vIHkgZGUgbGEgZm9ybWEgZGVsIGRpZW50ZVwiLFwiQ29uY3Jlc2NlbmNpYS4gRnVzaW9uLiBHZW1pbmFjaW9uLiBEaWVudGVzIGVuIGZvcm1hIGRlIGNsYXZpamEgKGNvbmljb3MpLiBEaWVudGVzIGV2YWdpbmFkb3MuIERlbnMgaW4gZGVudGUuIE1hY3JvZG9uY2lhLiBNaWNyb2RvbmNpYS4gUGVybGFzIGRlbCBlc21hbHRlLiBUYXVyb2RvbnRpc21vLiBUdWJlcmN1bG8gcGFyYW1vbGFyLiBFeGNsdXllOiB0dWJlcmN1bG8gZGUgQ2FyYWJlbGxpLlwiXSxbXCJEaWVudGVzIG1vdGVhZG9zXCIsXCJFc21hbHRlIG1vdGVhZG8uIEZsdW9yb3NpcyBkZW50YWwuIE9wYWNpZGFkIG5vIGZsdW9yaWNhIGRlbCBlc21hbHRlLiBFeGNsdXllOiBkZXBvc2l0b3MgKGFkaGVyZW5jaWFzKSBlbiBsb3MgZGllbnRlcy5cIl0sW1wiRGllbnRlcyBzdXBlcm51bWVyYXJpb3NcIixcIkN1YXJ0byBtb2xhci4gRGllbnRlcyBzdXBsZW1lbnRhcmlvcy4gRGlzdG9tb2xhci4gTWVzaW9kZW5zLiBQYXJhbW9sYXIuXCJdLFtcIk90cm9zIHRyYXN0b3Jub3MgZGVsIGRlc2Fycm9sbG8gZGUgbG9zIGRpZW50ZXNcIixcIkFsdGVyYWNpb24gZGVsIGNvbG9yIGRlbCBkaWVudGUgZHVyYW50ZSBzdSBmb3JtYWNpb24uIE1hbmNoYXMgaW50cmluc2VjYXMgZGUgbG9zIGRpZW50ZXMgU0FJLlwiXSxbXCJTaW5kcm9tZSBkZSBsYSBlcnVwY2lvbiBkZW50YXJpYVwiLFwiXCJdLFtcIlRyYXN0b3JubyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgZGllbnRlcyBubyBlc3BlY2lmaWNhZG8gXCIsXCJUcmFzdG9ybm8gZGUgbGEgb2RvbnRvZ2VuZXNpcyBTQUkuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkRpZW50ZXMgaW1wYWN0YWRvc1wiLFwiRGllbnRlIHF1ZSBubyBoYSBlcnVwY2lvbmFkbyBkZWJpZG8gYSBsYSBvYnN0cnVjY2lvbiBwb3Igb3RybyBkaWVudGUuXCJdLFtcIkRpZW50ZXMgaW5jbHVpZG9zIFwiLFwiRGllbnRlIHF1ZSBubyBoYSBlcnVwY2lvbmFkbyBzaW4gb2JzdHJ1Y2Npb24gcG9yIG90cm8gZGllbnRlLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBdHJvZmlhIGRlbCByZWJvcmRlIGFsdmVvbGFyIGRlc2RlbnRhZG9cIixcIlwiXSxbXCJFeGZvbGlhY2lvbiBkZSBsb3MgZGllbnRlcyBkZWJpZGEgYSBjYXVzYXMgc2lzdGVtaWNhc1wiLFwiXCJdLFtcIk90cmFzIGFmZWNjaW9uZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgZGllbnRlcyB5IGRlIHN1cyBlc3RydWN0dXJhcyBkZSBzb3N0ZW5cIixcIkFncmFuZGFtaWVudG8gZGVsIHJlYm9yZGUgYWx2ZW9sYXIuIE9kb250YWxnaWEuIFByb2xvbmdhY2lvbiBhbHZlb2xhciBpcnJlZ3VsYXIuXCJdLFtcIlBlcmRpZGEgZGUgZGllbnRlcyBkZWJpZGEgYSBhY2NpZGVudGUsIGV4dHJhY2Npb24gbyBlbmZlcm1lZGFkIHBlcmlvZG9udGFsIGxvY2FsXCIsXCJcIl0sW1wiUmFpeiBkZW50YWwgcmV0ZW5pZGFcIixcIlwiXSxbXCJUcmFzdG9ybm9zIGRlIGxvcyBkaWVudGVzIHkgZGUgc3VzIGVzdHJ1Y3R1cmFzIGRlIHNvc3Rlbiwgbm8gZXNwZWNpZmljYWRvXCIsXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiSGlwZXJwbGFzaWEgZ2luZ2l2YWxcIixcIkZpYnJvbWF0b3NpcyBnaW5naXZhbC5cIl0sW1wiTGVzaW9uZXMgZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhIGFzb2NpYWRhcyBjb24gdHJhdW1hdGlzbW9cIixcIkhpcGVycGxhc2lhIGlycml0YXRpdmEgZGVsIHJlYm9yZGUgYWx2ZW9sYXIgZWRlbnR1bG8gKGhpcGVycGxhc2lhIHByb3Rlc2ljYSkuXCJdLFtcIk90cm9zIHRyYXN0b3Jub3MgZXNwZWNpZmljYWRvcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGFcIixcIkVwdWxpcyBkZSBjZWx1bGFzIGdpZ2FudGVzLiBFcHVsaXMgZmlicm9zby4gR3JhbnVsb21hIHBlcmlmZXJpY28gZGUgY2VsdWxhcyBnaWdhbnRlcy4gR3JhbnVsb21hIHBpb2dlbm8gZGUgbGEgZW5jaWEuIFJlYmxhbmRlY2ltaWVudG8gZGVsIHJlYm9yZGUuXCJdLFtcIlJldHJhY2Npb24gZ2luZ2l2YWxcIixcIlJlY2VzaW9uIGdpbmdpdmFsIGxvY2FsaXphZGEuIFJlY2VzaW9uIGdpbmdpdmFsIGdlbmVyYWxpemFkYS4gUmVjZXNpb24gZ2luZ2l2YWwgcG9zdGluZmVjY2lvc2EuIFJlY2VzaW9uIGdpbmdpdmFsIHBvc3RvcGVyYXRvcmlhLlwiXSxbXCJUcmFzdG9ybm8gbm8gZXNwZWNpZmljYWRvIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYSBcIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBbmdpbmEgZGUgUGVjaG9cIl0sW1wiQXJ0cml0aXNcIl0sW1wiQXNtYVwiXSxbXCJBdGFxdWUgQ2FyZGlhY29cIl0sW1wiQ2FuY2VyXCJdLFtcIkRpYWJldGVzIFRpcG8gMVwiXSxbXCJEaWFiZXRlcyBUaXBvIDJcIl0sW1wiRG9sb3IgZW4gUGVjaG9cIl0sW1wiRW5mZXJtZWRhZCBkZWwgSGlnYWRvXCJdLFtcIkVuZmVybWVkYWQgZGVsIFJpw7FvblwiXSxbXCJFbmZpc2VtYVwiXSxbXCJIZXBhdGl0aXNcIl0sW1wiSGlwZXJ0ZW5zaW9uXCJdLFtcIkhpcG9nbHVjZW1pYVwiXSxbXCJIaXBvdGVuc2lvblwiXSxbXCJOaW5ndW5hIGVuZmVybWVkYWRcIl0sW1wiT3RyYSBlbmZlcm1lZGFkXCJdLFtcIlByb2JsZW1hIGRlIFRpcm9pZGVzXCJdLFtcIlByb2JsZW1hcyBFc3RvbWFjYWxlc1wiXSxbXCJTSURBLyBWSUhcIl0sW1wiVHViZXJjdWxvc2lzXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkNlbHVsaXRpcyB5IGFic2Nlc28gZGUgbGEgYm9jYVwiLFwiQWJzY2Vzb3Mgc3VibWFuZGlidWxhcmVzLiBDZWx1bGl0aXMgZGVsIHBpc28gZGUgbGEgYm9jYS4gRXhjbHV5ZSBhYnNjZXNvIGRlIGdsYW5kdWxhIHNhbGl2YWwgbyBsZW5ndWEsIGFic2Nlc28gcGVyaWFwaWNhbCwgYWJzY2VzbyBwZXJpb2RvbnRhbCwgYWJzY2VzbyBwZXJpdG9uc2lsYXIuXCJdLFtcIkVzdG9tYXRpdGlzIGFmdG9zYSByZWN1cnJlbnRlXCIsXCJBZnRhcyBkZSBCZWRuYXIuIEVzdG9tYXRpdGlzIGFmdG9zYSBtYXlvciBvIG1lbm9yLiBFc3RvbWF0aXRpcyBoZXJwZXRpZm9ybWUuIFBlcmlhZGVuaXRpcyBtdWNvc2EgbmVjcm90aWNhIHJlY3VycmVudGUuIFVsY2VyYSBhZnRvc2EgcmVjdXJyZW50ZS5cIl0sW1wiT3RyYXMgZm9ybWFzIGRlIGVzdG9tYXRpdGlzXCIsXCJFc3RvbWF0aXRpcyBwcm90ZXNpY2EsIHVsY2VyYXRpdmEsIHZlc2ljdWxvc2EuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFOT01BTElBUyBERU5UT0ZBQ0lBTEVTIChJTkNMVVNPIExBIE1BTE9DTFVTSU9OKS5cIl0sW1wiQ0FSSUVTIERFTlRBTFwiXSxbXCJESUVOVEVTIElOQ0xVSURPUyBFIElNUEFDVEFET1NcIl0sW1wiRU5GRVJNRURBREVTIERFIExBIExFTkdVQVwiXSxbXCJFTkZFUk1FREFERVMgREUgTEEgUFVMUEEgWSBERSBMT1MgVEVKSURPUyBQRVJJQVBJQ0FMRVNcIl0sW1wiRU5GRVJNRURBREVTIERFIExBUyBHTEFORFVMQVMgU0FMSVZBTEVTXCJdLFtcIkVTVE9NQVRJVElTIFkgTEVTSU9ORVMgQUZJTkVTXCJdLFtcIkdJTkdJVklUSVMgWSBFTkZFUk1FREFERVMgUEVSSU9ET05UQUxFU1wiXSxbXCJMVVhBQ0lPTiwgRVNHVUlOQ0UgWSBUT1JDRURVUkEgREUgQVJUSUNVTEFDSU9ORVMgWSBERSBMSUdBTUVOVE9TIERFIExBIENBQkVaQVwiXSxbXCJPVFJBUyBFTkZFUk1FREFERVMgREUgTE9TIExBQklPUyBZIERFIExBIE1VQ09TQSBCVUNBTFwiXSxbXCJPVFJBUyBFTkZFUk1FREFERVMgREUgTE9TIE1BWElMQVJFU1wiXSxbXCJPVFJBUyBFTkZFUk1FREFERVMgREUgTE9TIFRFSklET1MgRFVST1MgREUgTE9TIERJRU5URVNcIl0sW1wiT1RST1MgVFJBU1RPUk5PUyBERSBMQSBFTkNJQSBZIERFIExBIFpPTkEgRURFTlRVTEFcIl0sW1wiT1RST1MgVFJBU1RPUk5PUyBERSBMT1MgRElFTlRFUyBZIERFIFNVUyBFU1RSVUNUVVJBUyBERSBTT1NURU5cIl0sW1wiUVVJU1RFUyBERSBMQSBSRUdJT04gQlVDQUwsIE5PIENMQVNJRklDQURPUyBFTiBPVFJBIFBBUlRFXCJdLFtcIlRSQVNUT1JOT1MgREVMIERFU0FSUk9MTE8gWSBERSBMQSBFUlVQQ0lPTiBERSBMT1MgRElFTlRFU1wiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJHaW5naXZpdGlzIGFndWRhXCIsXCJFeGNsdXllIGdpbmdpdml0aXMgdWxjZXJvbmVjcm90aWNhIGFndWRhIHkgZ2luZ2l2b2VzdG9tYXRpdGlzIGhlcnBldGljYVwiXSxbXCJFbmZlcm1lZGFkIGRlbCBwZXJpb2RvbnRvIG5vIGVzcGVjaWZpY2FkYVwiLFwiXCJdLFtcIkdpbmdpdml0aXMgY3JvbmljYVwiLFwiR2luZ2l2aXRpcyBjcm9uaWNhIGRlc2NhbWF0aXZhLCBnaW5naXZpdGlzIGNyb25pY2EgaGlwZXJwbGFzaWNhLCBnaW5naXZpdGlzIGNyb25pY2EgbWFyZ2luYWwgc2ltcGxlLCBnaW5naXZpdGlzIGNyb25pY2EgdWxjZXJhdGl2YS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIHBlcmlvZG9udGFsZXNcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFndWRhXCIsXCJBYnNjZXNvIHBhcmFkZW50YWwuIEFic2Nlc28gcGVyaW9kb250YWwuIFBlcmljb3Jvbml0aXMgYWd1ZGEuIEV4Y2x1eWU6IGFic2Nlc28gcGVyaWFwaWNhbCBjb24gZmlzdHVsYS8gcGVyaW9kb250aXRpcyBhcGljYWwgYWd1ZGEuXCJdLFtcIlBlcmlvZG9udGl0aXMgY3JvbmljYVwiLFwiUGVyaWNvcm9uaXRpcyBjcm9uaWNhLiBQZXJpb2RvbnRpdGlzIHNpbXBsZS4gUGVyaW9kb250aXRpcyBjb21wbGljYWRhLlwiXSxbXCJQZXJpb2RvbnRvc2lzIChqdXZlbmlsKVwiLFwiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkZ1bWFyXCJdLFtcIkFsY29ob2xcIl0sW1wiQ29jYWluYVwiXSxbXCJPdHJhcyBkcm9nYXNcIl0sW1wiT3Ryb3MgaGFiaXRvc1wiXSxbXCJOaW5ndW4gaGFiaXRvXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVuZmVybWVkYWRlcyBkZSBsb3MgbGFiaW9zXCIsXCJQZXJsZWNoZSBvIHF1ZWlsaXRpcyBhbmd1bGFyLiBRdWVpbGl0aXMgYW5ndWxhciwgZXhmb2xpYXRpdmEsIGdsYW5kdWxhci4gUXVlaWxvZGluaWEuIFF1ZWlsb3Npcy4gRXhjbHV5ZSBhcmlib2ZsYXZpbm9zaXMgKHBvciBkZWZpY2llbmNpYSBkZSByaWJvZmxhdmluYSksIFBlcmxlY2hlIGRlYmlkbyBhIGNhbmRpZGlhc2lzLCBQZXJsZWNoZSBkZWJpZG8gYSBkZWZpY2llbmNpYSBkZSByaWJvZmxhdmluYS4gUXVlaWxpdGlzIGRlYmlkYSBhIHRyYXN0b3Jub3MgcmVsYWNpb25hZG9zIGNvbiBsYSByYWRpYWNpb24uXCJdLFtcIkZpYnJvc2lzIGRlIGxhIHN1Ym11Y29zYSBidWNhbFwiLFwiXCJdLFtcIkdyYW51bG9tYSB5IGxlc2lvbmVzIHNlbWVqYW50ZXMgZGUgbGEgbXVjb3NhIGJ1Y2FsXCIsXCJHcmFudWxvbWEgZW9zaW5vZmlsby4gR3JhbnVsb21hIHBpb2dlbmljby4gWGFudG9tYSB2ZXJydWdpZm9ybWUuXCJdLFtcIkhpcGVycGxhc2lhIGlycml0YXRpdmEgZGUgbGEgbXVjb3NhIGJ1Y2FsXCIsXCJFeGNsdXllIGhpcGVycGxhc2lhIGlycml0YXRpdmEgZGUgbGEgem9uYSBlZGVudHVsYSAoaGlwZXJwbGFzaWEgcHJvdGVzaWNhKVwiXSxbXCJMZXVjb3BsYXNpYSBwaWxvc2FcIixcIlwiXSxbXCJMZXVjb3BsYXNpYSB5IG90cmFzIGFsdGVyYWNpb25lcyBkZWwgZXBpdGVsaW8gYnVjYWwsIGluY2x1eWVuZG8gbGEgbGVuZ3VhXCIsXCJFcml0cm9wbGFzaWEuIExldWNvZWRlbWEuIExldWNvcXVlcmF0b3NpcyBuaWNvdGluaWNhIHBhbGF0aW5hLiBQYWxhZGFyIGRlbCBmdW1hZG9yLiBFeGNsdXllIGxldWNvcGxhc2lhIHBpbG9zYS5cIl0sW1wiTW9yZGVkdXJhIGRlbCBsYWJpbyB5IGRlIGxhIG1lamlsbGFcIixcIlwiXSxbXCJPdHJhcyBsZXNpb25lcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIG11Y29zYSBidWNhbFwiLFwiTXVjaW5vc2lzIGJ1Y2FsIGZvY2FsXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkF0cm9maWEgZGUgbGFzIHBhcGlsYXMgbGluZ3VhbGVzXCIsXCJHbG9zaXRpcyBhdHJvZmljYVwiXSxbXCJFbmZlcm1lZGFkZXMgZGUgbGEgbGVuZ3VhLCBubyBlc3BlY2lmaWNhZGEuXCIsXCJHbG9zb3BhdGlhXCJdLFtcIkdsb3NpdGlzXCIsXCJBYnNjZXNvIGRlIGxhIGxlbmd1YS4gVWxjZXJhIHRyYXVtYXRpY2EgZGUgbGEgbGVuZ3VhLiBFeGNsdXllIGdsb3NpdGlzIGF0cm9maWNhLlwiXSxbXCJHbG9zaXRpcyByb21ib2lkZWEgbWVkaWFuYVwiLFwiXCJdLFtcIkdsb3NvZGluaWFcIixcIkdsb3NvcGlyb3Npcy4gTGVuZ3VhIGRvbG9yb3NhLlwiXSxbXCJIaXBlcnRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBsaW5ndWFsZXNcIixcIkhpcGVydHJvZmlhIGRlIGxhcyBwYXBpbGFzIGZvbGlhY2Vhcy4gTGVuZ3VhIG5lZ3JhIHBpbG9zYS4gTGVuZ3VhIG5lZ3JhIHZlbGxvc2EsIExlbmd1YSBzYWJ1cnJhbC5cIl0sW1wiTGVuZ3VhIGdlb2dyYWZpY2FcIixcIkdsb3NpdGlzIGFyZWF0YSBleGZvbGlhdGl2YS4gR2xvc2l0aXMgbWlncmF0b3JpYSBiZW5pZ25hLlwiXSxbXCJMZW5ndWEgcGxlZ2FkYVwiLFwiTGVuZ3VhIGNvbiBzdXJjb3MuIExlbmd1YSBlc2Nyb3RhbC4gTGVuZ3VhIGZpc3VyYWRhLiBFeGNsdXllIGxlbmd1YSBmaXN1cmFkYSBjb25nZW5pdGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBkZSBsYSBsZW5ndWFcIixcIkFncmFuZGFtaWVudG8uIEF0cm9maWEuIENyZW5hY2lvbiBkZSBsYSBsZW5ndWEuIEhpcGVydHJvZmlhLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJFc2d1aW5jZXMgeSB0b3JjZWR1cmFzIGRlIGFydGljdWxhY2lvbmVzIHkgbGlnYW1lbnRvcyBkZSBvdHJhcyBwYXJ0ZXMgeSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBjYWJlemFcIixcIlwiXSxbXCJFc2d1aW5jZXMgeSB0b3JjZWR1cmFzIGRlbCBtYXhpbGFyXCIsXCJBcnRpY3VsYWNpb24gbyBsaWdhbWVudG8gdGVtcG9yb21heGlsYXJcIl0sW1wiTHV4YWNpb24gZGUgb3RyYXMgcGFydGVzIHkgZGUgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgY2FiZXphXCIsXCJcIl0sW1wiTHV4YWNpb24gZGVsIGNhcnRpbGFnbyBzZXB0YWwgZGUgbGEgbmFyaXpcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgZGllbnRlXCIsXCJcIl0sW1wiTHV4YWNpb24gZGVsIG1heGlsYXJcIixcIk1hbmRpYnVsYS4gTWF4aWxhci4gVGVtcG9yb21heGlsYXIuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFmZWNjaW9uZXMgaW5mbGFtYXRvcmlhcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJPc3RlaXRpcy4gT3N0ZW9taWVsaXRpcyBuZW9uYXRhbC4gT3N0ZW9ycmFkaW9uZWNyb3Npcy4gUGVyaW9zdGl0aXMsIFNlY3Vlc3RybyBvc2VvIGRlIGxvcyBtYXhpbGFyZXMuIFwiXSxbXCJBbHZlb2xpdGlzIGRlbCBtYXhpbGFyXCIsXCJBbHZlb2xvIHNlY28uIE9zdGVpdGlzIGFsdmVvbGFyLlwiXSxbXCJFbmZlcm1lZGFkZXMgZGUgbG9zIG1heGlsYXJlcywgbm8gZXNwZWNpZmljYWRhLlwiLFwiXCJdLFtcIkdyYW51bG9tYSBjZW50cmFsIGRlIGNlbHVsYXMgZ2lnYW50ZXNcIixcIkV4Y2x1eWUgZ3JhbnVsb21hIHBlcmlmZXJpY28gZGUgY2VsdWxhcyBnaWdhbnRlcy5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGVzcGVjaWZpY2FkYXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiRGlzcGxhc2lhIGZpYnJvc2EuIEV4b3N0b3Npcy4gSGlwZXJwbGFzaWEgbyBoaXBvcGxhc2lhIG1heGlsYXIuIEhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBjb25kaWxhciBtYW5kaWJ1bGFyLiBRdWVydWJpc21vLlwiXSxbXCJUcmFzdG9ybm9zIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBtYXhpbGFyZXNcIixcIlF1aXN0ZSBsYXRlbnRlIG9zZW8gZGUgbG9zIG1heGlsYXJlcy4gUXVpc3RlIGRlIFN0YWZuZS4gVG9ydXMgbWFuZGlidWxhci4gVG9ydXMgcGFsYXRpbm8uXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFic2Nlc28gcGVyaWFwaWNhbCBjb24gZmlzdHVsYVwiLFwiQWJzY2VzbyBkZW50YWwgY29uIGZpc3R1bGEuIEFic2Nlc28gZGVudG9hbHZlb2xhciBjb24gZmlzdHVsYS5cIl0sW1wiQWJzY2VzbyBwZXJpYXBpY2FsIHNpbiBmaXN0dWxhXCIsXCJBYnNjZXNvIGRlbnRhbCBzaW4gZmlzdHVsYS4gQWJzY2VzbyBkZW50b2FsdmVvbGFyIHNpbiBmaXN0dWxhLlwiXSxbXCJEZWdlbmVyYWNpb24gZGUgbGEgcHVscGFcIixcIkNhbGNpZmljYWNpb25lcyBkZSBsYSBwdWxwYS4gUGllZHJhcy4gRGVudGljdWxvcy5cIl0sW1wiRm9ybWFjaW9uIGFub3JtYWwgZGUgdGVqaWRvIGR1cm8gZW4gbGEgcHVscGFcIixcIkRlbnRpbmEgc2VjdW5kYXJpYSBvIGlycmVndWxhci5cIl0sW1wiTmVjcm9zaXMgZGUgbGEgcHVscGFcIixcIkdhbmdyZW5hIGRlIGxhIHB1bHBhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgeSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBwdWxwYSB5IGRlbCB0ZWppZG8gcGVyaWFwaWNhbFwiLFwiXCJdLFtcIlBlcmlvZG9udGl0aXMgYXBpY2FsIGFndWRhIG9yaWdpbmFkYSBlbiBsYSBwdWxwYVwiLFwiXCJdLFtcIlBlcmlvZG9udGl0aXMgYXBpY2FsIGNyb25pY2FcIixcIkdyYW51bG9tYSBhcGljYWwgbyBwZXJpYXBpY2FsLiBQZXJpb2RvbnRpdGlzIGFwaWNhbCBjcm9uaWNhLlwiXSxbXCJQdWxwaXRpc1wiLFwiQWJzY2Vzby4gUG9saXBvLiBQdWxwaXRpcyBhZ3VkYS4gUHVscGl0aXMgY3JvbmljYSAoaGlwZXJwbGFzaWNhLCB1bGNlcmF0aXZhKS4gUHVscGl0aXMgc3VwdXJhdGl2YS5cIl0sW1wiUXVpc3RlIHJhZGljdWxhclwiLFwiUXVpc3RlIGFwaWNhbCAocGVyaW9kb250YWwpLiBRdWlzdGUgcGVyaWFwaWNhbC4gUXVpc3RlIHJhZGljdWxhciByZXNpZHVhbC4gRXhjbHV5ZTogcXVpc3RlIGxhdGVyYWwgcGVyaW9kb250YWwuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIk90cm9zIHF1aXN0ZXMgZGUgbGEgcmVnaW9uIGJ1Y2FsLCBubyBjbGFzaWZpY2Fkb3MgZW4gb3RyYSBwYXJ0ZVwiLFwiUGVybGEgZGUgRXBzdGVpbi4gUXVpc3RlczogZGVybW9pZGUsIGVwaWRlcm1vaWRlLCBsaW5mb2VwaXRlbGlhbCwgbmFzb2FsdmVvbGFyLCBuYXNvbGFiaWFsLlwiXSxbXCJPdHJvcyBxdWlzdGVzIGRlIGxvcyBtYXhpbGFyZXNcIixcIlF1aXN0ZSBtYXhpbGFyIGFuZXVyaXNtYXRpY28uIFF1aXN0ZSBtYXhpbGFyIGhlbW9ycmFnaWNvLiBRdWlzdGUgbWF4aWxhciB0cmF1bWF0aWNvLiBFeGNsdXllIHF1aXN0ZSBkZSBTdGFmbmUuIFF1aXN0ZSBsYXRlbnRlIG9zZW8gZGUgbG9zIG1heGlsYXJlcy4gXCJdLFtcIlF1aXN0ZXMgZGUgbGEgcmVnaW9uIGJ1Y2FsLCBzaW4gb3RyYSBlc3BlY2lmaWNhY2lvblwiLFwiXCJdLFtcIlF1aXN0ZXMgZGUgbGFzIGZpc3VyYXMgKG5vIG9kb250b2dlbmljb3MpXCIsXCJRdWlzdGVzIGRlbDogY2FuYWwgaW5jaXNpdm8sIGdsb2J1bG9tYXhpbGFyLCBuYXNvcGFsYXRpbm8sIHBhbGF0aW5vIG1lZGlvLCBwYXBpbGEgcGFsYXRpbmEuXCJdLFtcIlF1aXN0ZXMgb3JpZ2luYWRvcyBwb3IgZWwgZGVzYXJyb2xsbyBkZSBsb3MgZGllbnRlcyAocXVpc3RlcyBvZG9udG9nZW5pY29zKVwiLFwiUXVlcmF0b3F1aXN0ZS4gUXVpc3RlczogZGVudGlnZXJvLCBlcnVwY2lvbiBkZW50YXJpYSwgZm9saWN1bGFyLCBnaW5naXZhbCwgbGF0ZXJhbCBwZXJpb2RvbnRhbCwgcHJpbW9yZGlhbC5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWJzY2VzbyBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiQWx0ZXJhY2lvbmVzIGRlIGxhIHNlY3JlY2lvbiBzYWxpdmFsXCIsXCJIaXBvc2VjcmVjaW9uIHNhbGl2YWwuIFB0aWFsaXNtby4gWGVyb3N0b21pYS4gRXhjbHV5ZSBTaW5kcm9tZSBkZSBTau+/vWdyZW4uXCJdLFtcIkF0cm9maWEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiXCJdLFtcIkVuZmVybWVkYWQgZGUgZ2xhbmR1bGEgc2FsaXZhbCwgbm8gZXNwZWNpZmljYWRhXCIsXCJTaWFsYWRlbm9wYXRpYVwiXSxbXCJGaXN0dWxhIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIkV4Y2x1eWUgZmlzdHVsYSBjb25nZW5pdGEgZGUgZ2xhbmR1bGEgc2FsaXZhbC5cIl0sW1wiSGlwZXJ0cm9maWEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiXCJdLFtcIk11Y29jZWxlIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlF1aXN0ZSBtdWNvc28gZGUgZ2xhbmR1bGEgc2FsaXZhbCBwb3IgZXh0cmF2YXNhY2lvbiBvIHBvciByZXRlbmNpb24uIFJhbnVsYS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGRlIGxhcyBnbGFuZHVsYXMgc2FsaXZhbGVzXCIsXCJFbmZlcm1lZGFkIGRlIE1pa3VsaWN6LiBFc3Rlbm9zaXMgZGVsIGNvbmR1Y3RvIHNhbGl2YWwuIFNpYWxvbWV0YXBsYXNpYSBuZWNyb3RpemFudGUuIEV4Y2x1eWUgc2luZHJvbWUgc2VjbyAoU2rvv71ncmVuKS5cIl0sW1wiU2lhbG9hZGVuaXRpc1wiLFwiRXhjbHV5ZTogZmllYnJlIHV2ZW9wYXJvdGlkZWEgKEhlZXJmb3JkdCksIHBhcm90aWRpdGlzIGluZmVjY2lvc2EgKGVwaWRlbWljYSkuXCJdLFtcIlNpYWxvbGl0aWFzaXNcIixcIkNhbGN1bG8gZGUgY29uZHVjdG8gbyBkZSBnbGFuZHVsYSBzYWxpdmFsLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBYnJhc2lvbiBkZSBsb3MgZGllbnRlc1wiLFwiQWJyYXNpb24gcG9yIGRlbnRpZnJpY28sIGhhYml0b3MsIG9jdXBhY2lvbmFsLCByaXR1YWwsIHRyYWRpY2lvbmFsLiBEZWZlY3RvIGN1bmVpZm9ybWUgZGUgbG9zIGRpZW50ZXMuXCJdLFtcIkFucXVpbG9zaXMgZGVudGFsXCIsXCJcIl0sW1wiQXRyaWNpb24gZXhjZXNpdmEgZGUgbG9zIGRpZW50ZXNcIixcIkRlc2dhc3RlIG9jbHVzYWwuIERlc2dhc3RlIHByb3hpbWFsLlwiXSxbXCJDYW1iaW9zIHBvc3RlcnVwdGl2b3MgZGVsIGNvbG9yIGRlIGxvcyB0ZWppZG9zIGRlbnRhbGVzIGR1cm9zXCIsXCJFeGNsdXllIGRlcG9zaXRvcyAoYWNyZWNpb25lcykgZW4gbG9zIGRpZW50ZXMuXCJdLFtcIkRlcG9zaXRvcyAoYWNyZWNpb25lcykgZW4gbG9zIGRpZW50ZXNcIixcIkNhbGN1bG8gZGVudGFsIHN1cHJhZ2luZ2l2YWwgbyBzdWJnaW5naXZhbC4gRGVwb3NpdG8gZW4gbG9zIGRpZW50ZXMgYW5hcmFuamFkbywgYmV0ZWwsIG1hdGVyaWEgYWxiYSwgbmVncm8sIHRhYmFjbywgdmVyZGUuIFBpZ21lbnRhY2lvbiBkZSBsb3MgZGllbnRlcy5cIl0sW1wiRW5mZXJtZWRhZCBubyBlc3BlY2lmaWNhZGEgZGUgbG9zIHRlamlkb3MgZGVudGFsZXMgZHVyb3NcIixcIlwiXSxbXCJFcm9zaW9uIGRlIGxvcyBkaWVudGVzXCIsXCJEZWJpZGEgYSBkaWV0YSwgZHJvZ2FzIHkgbWVkaWNhbWVudG9zLCB2b21pdG8gcGVyc2lzdGVudGUsIGlkaW9wYXRpY2EsIG9jdXBhY2lvbmFsLlwiXSxbXCJIaXBlcmNlbWVudG9zaXNcIixcIkhpcGVycGxhc2lhIGRlbCBjZW1lbnRvLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgdGVqaWRvcyBkdXJvcyBkZSBsb3MgZGllbnRlc1wiLFwiRGVudGluYSBzZW5zaWJsZS4gRXNtYWx0ZSBpcnJhZGlhZG8uXCJdLFtcIlJlYWJzb3JjaW9uIHBhdG9sb2dpY2EgZGUgbG9zIGRpZW50ZXNcIixcIkdyYW51bG9tYSBpbnRlcm5vIGRlIGxhIHB1bHBhLiBSZWFic29yY2lvbiBleHRlcm5hIGRlIGxvcyBkaWVudGVzLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBanVzdGUgb2NsdXNhbFwiXSxbXCJCaW9wdWxwZWN0b21pYVwiXSxbXCJDYW5hbGl6YWNpb24gY29uIGVzcGVjaWFsaXN0YVwiXSxbXCJDdXJldGFqZSBhYmllcnRvXCJdLFtcIkN1cmV0YWplIGNlcnJhZG9cIl0sW1wiRXhvZG9uY2lhIHF1aXJ1cmdpY2FcIl0sW1wiRXhvZG9uY2lhIHNpbXBsZVwiXSxbXCJJbnN0cnVjY2lvbiBkZSB0ZWNuaWNhIGRlIGNlcGlsbGFkb1wiXSxbXCJJbnRlcmNvbnN1bHRhIGNvbiBjaXJ1amFubyBtYXhpbG9mYWNpYWxcIl0sW1wiSW50ZXJjb25zdWx0YSBjb24gZW5kb2RvbmNpc3RhXCJdLFtcIk5lY3JvcHVscGVjdG9taWFcIl0sW1wiT2J0dXJhY2lvbiBwZXJtYW5lbnRlXCJdLFtcIk9idHVyYWNpb24gdGVtcG9yYWxcIl0sW1wiT3BlcmF0b3JpYSBEZW50YWxcIl0sW1wiT3JpZW50YWNpb24gc29icmUgc2FsdWQgZGVudGFsXCJdLFtcIlByb2ZpbGF4aXNcIl0sW1wiUHVscGVjdG9taWFcIl0sW1wiUHVscG90b21pYVwiXSxbXCJSZXRpcm8gZGUgc3V0dXJhc1wiXSxbXCJTZWd1aW1pZW50byBwb3N0LWV4dHJhY2Npb25cIl0sW1wiU2VsbGFkb3IgZGUgZm9zZXRhcyB5IGZpc3VyYXNcIl0sW1wiU29saWNpdHVkIGRlIGVzdHVkaW9zIGNvbXBsZW1lbnRhcmlvc1wiXV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdlbmVyYWwgZnJvbSAnLi9leGNlbC9nZW5lcmFsZXMuY3N2J1xuaW1wb3J0IGFsZXJnaWFzIGZyb20gJy4vZXhjZWwvYWxlcmdpYXMuY3N2J1xuaW1wb3J0IGRlbnRvZmFjaWFsIGZyb20gJy4vZXhjZWwvYW5vbWFsaWFzLmNzdidcbmltcG9ydCBjYXJpZXMgZnJvbSAgICcuL2V4Y2VsL2Nhcmllcy5jc3YnXG5pbXBvcnQgZGllbnRlcyBmcm9tICcuL2V4Y2VsL2RpZW50ZXMuY3N2J1xuaW1wb3J0IGVuZmVybWVkYWRlcyBmcm9tICAgICcuL2V4Y2VsL2VuZmVybWVkYWRlcy5jc3YnXG5pbXBvcnQgbGVuZ3VhIGZyb20gJy4vZXhjZWwvbGVuZ3VhLmNzdidcbmltcG9ydCBwdWxwYSBmcm9tICcuL2V4Y2VsL3B1bHBhLmNzdidcbmltcG9ydCBzYWxpdmFsZXMgZnJvbSAnLi9leGNlbC9zYWxpdmFsZXMuY3N2J1xuaW1wb3J0IGVzdG9tYXRpdGlzIGZyb20gJy4vZXhjZWwvZXN0b21hdGl0aXMuY3N2J1xuaW1wb3J0IGdpbmdpdml0aXMgZnJvbSAgJy4vZXhjZWwvZ2luZ2l2aXRpcy5jc3YnXG5pbXBvcnQgaGFiaXRvcyBmcm9tICcuL2V4Y2VsL2hhYml0b3MuY3N2J1xuaW1wb3J0IGx1eGFjaW9uIGZyb20gJy4vZXhjZWwvbHV4YWNpb24uY3N2J1xuaW1wb3J0IGxhYmlvc090cm9zIGZyb20gJy4vZXhjZWwvbGFiaW9zT3Ryb3MuY3N2J1xuaW1wb3J0IG1heGlsYXJlc090cm9zIGZyb20gJy4vZXhjZWwvbWF4aWxhcmVzT3Ryb3MuY3N2J1xuaW1wb3J0IHRlamlkb3NPdHJvcyBmcm9tICcuL2V4Y2VsL3Rlamlkb3NPdHJvcy5jc3YnXG5pbXBvcnQgZW5jaWFUcmFuc3Rvcm5vIGZyb20gJy4vZXhjZWwvZW5jaWFUcmFuc3Rvcm5vLmNzdidcbmltcG9ydCBkaWVudGVzT3Ryb3MgZnJvbSAnLi9leGNlbC9kaWVudGVzT3Ryb3MuY3N2J1xuaW1wb3J0IHF1aXN0ZXMgZnJvbSAnLi9leGNlbC9xdWlzdGVzLmNzdidcbmltcG9ydCBkZXNhcnJvbGxvIGZyb20gJy4vZXhjZWwvZGVzYXJyb2xsby5jc3YnXG5pbXBvcnQgdHJhdGFtaWVudG9zIGZyb20gJy4vZXhjZWwvdHJhdGFtaWVudG9zLmNzdidcblxuXG5cbmxldCBsb2FkRGF0YSA9ICgpID0+e1xuXG4gICAgbGV0IGdlbmVyYWxBcnJheSA9IGRlQXJyYXkoZ2VuZXJhbClcbiAgICBsZXQgYWxlcmdpYXNBcnJheSA9IGRlQXJyYXkoYWxlcmdpYXMpXG4gICAgbGV0IGVuZmVybWVkYWRlc0FycmF5ID0gZGVBcnJheShlbmZlcm1lZGFkZXMpXG4gICAgbGV0IGhhYml0b3NBcnJheSA9IGRlQXJyYXkoaGFiaXRvcylcbiAgICBsZXQgdHJhdGFtaWVudG9zQXJyYXkgPSBkZUFycmF5KHRyYXRhbWllbnRvcylcblxuICAgIFxuICAgIGxldCBnZW5lcmFsZXNBcnJheSA9IFtkZW50b2ZhY2lhbCxjYXJpZXMsZGllbnRlcyxsZW5ndWEscHVscGEsc2FsaXZhbGVzLGVzdG9tYXRpdGlzLGdpbmdpdml0aXMsbHV4YWNpb24sbGFiaW9zT3Ryb3MsbWF4aWxhcmVzT3Ryb3MsdGVqaWRvc090cm9zLGVuY2lhVHJhbnN0b3JubyxkaWVudGVzT3Ryb3MscXVpc3RlcyxkZXNhcnJvbGxvXVxuICAgIFxuICAgIGxldCBtYWluQXJyYXkgPSBbZ2VuZXJhbEFycmF5LGFsZXJnaWFzQXJyYXksZW5mZXJtZWRhZGVzQXJyYXksaGFiaXRvc0FycmF5LHRyYXRhbWllbnRvc0FycmF5LGdlbmVyYWxlc0FycmF5XVxuICAgIFxuICAgIHJldHVybiBtYWluQXJyYXlcbn1cblxuXG5cblxuXG4vKiBGdW5jdGlvbiBpbiBjaGFyZ2Ugb2YgY2hhbmdpbmcgdGhlIHZhbHVlcyBpbnRvIGEgbm9ybWFsIGFycmF5ICovXG5sZXQgZGVBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGxldCBkZUFycmF5ZWQ9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpO1xuICAgIHJldHVybiBkZUFycmF5ZWRcbn1cblxuXG5cbmV4cG9ydHtcbiAgICBsb2FkRGF0YVxufSIsImxldCBnZXRUb2RheXNEYXRlID0gKCkgPT4ge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIHRvZGF5ID0gZGQgKyAnLycgKyBtbSArICcvJyArIHl5eXk7XG5cbiAgICByZXR1cm4gdG9kYXlcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRUb2RheXNEYXRlXG59IiwibGV0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5cbmxldCBjcmVhdGVET01Db250YWluZXIgPSAoY2xhc3NsaXN0TmFtZSxuYW1lKSA9PntcbiAgICBcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzbGlzdE5hbWUpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzbGlzdE5hbWUpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKVxuICAgIFxuICAgIHJldHVybiBjb250YWluZXJcblxufVxuXG5sZXQgY3JlYXRlRE9NRWxlbWVudCA9ICh0eXBlLGNsYXNzbGlzdCx0ZXh0Q29udGVudCxuYW1lKSA9PntcbiAgICBcbiAgICAgICAgXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgaWYodHlwZSA9PT0gJ2J1dHRvbicgfHwgdHlwZSA9PT0gJ2lucHV0Jyl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX0ke2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfWApXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVET01Db250YWluZXIsXG4gICAgY3JlYXRlRE9NRWxlbWVudFxufSIsImltcG9ydCB7IGFkZCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHtzYXZlSW5Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHthZGRQYXRpZW50VGFibGV9IGZyb20gJy4vcGF0aWVudFRhYmxlJ1xuXG5cbmxldCBkb3dubG9hZFNldHRpbmdzID0gKCkgPT4ge1xuICAgIGRvd25sb2FkRmlsZSgpXG4gICAgZXhwb3J0RmlsZSgpXG59XG5cbmxldCBkb3dubG9hZEZpbGUgPSAoKT0+e1xuXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZEJ1dHRvbicpXG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuICAgICAgICB2YXIgZGF0YVN0ciA9IFwiZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShwYXRpZW50RGF0YWJhc2UpKTtcblxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCAgICAgZGF0YVN0cik7XG4gICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIlBhY2llbnRlcy5qc29uXCIpO1xuICAgICAgICBcbiAgICB9KSAgICBcbn1cblxubGV0IGV4cG9ydEZpbGUgPSAoKSA9PiB7XG5cbiAgICBsZXQgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRCdXR0b24nKVxuICAgIFxuICAgIGV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBvblJlYWRlckxvYWQ7XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG5cbn1cblxubGV0IG9uUmVhZGVyTG9hZCA9IChldmVudCkgPT4ge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKG9iailcbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UoJ3BhdGllbnREYXRhYmFzZScsb2JqKVxuICAgIGFkZFBhdGllbnRUYWJsZSgpXG4gICAgXG59XG5cblxuXG5leHBvcnR7XG4gICAgZG93bmxvYWRTZXR0aW5nc1xufSIsIlxubGV0IGxvYWRQYWdlU3RydWN0dXJlID0gKCkgPT4ge1xufVxuXG5leHBvcnR7XG4gICAgbG9hZFBhZ2VTdHJ1Y3R1cmVcbn0iLCJpbXBvcnQgeyBwbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIlxuXG5sZXQgc2F2ZUluTG9jYWxTdG9yYWdlICA9IChrZXksdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSAoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG59XG5cbmxldCBnZXRGcm9tTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIFxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKXsgICAgIFxuICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1lbHNle1xuICAgICAgICBsZXQgcGxhY2VIb2xkZXIgPSBbXVxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBhIHBsYWNlaG9sZGVyIGFycmF5JylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0gKGtleSxKU09OLnN0cmluZ2lmeShwbGFjZUhvbGRlcikpXG5cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICB9XG4gICAgXG4gICBcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UsXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5cbmxldCBjcmVhdGVNb2RhbFN0cnVjdHVyZSA9IChjb250ZW50LG1vZGFsTmFtZSx0aXRsZSxvcGVuQnV0dG9uKT0+e1xuXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBDb250YWluZXIgKi9cbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ21vZGFsJyxtb2RhbE5hbWUpXG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGVudCA9IGNyZWF0ZURPTUNvbnRhaW5lcignbW9kYWxDb250ZW50JylcblxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIGhlYWRlciAqL1xuICAgIGxldCBtb2RhbEhlYWRlciA9IGNyZWF0ZURPTUNvbnRhaW5lcihgJHttb2RhbE5hbWV9SGVhZGVyYClcbiAgICBcbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCB0aXRsZSAqL1xuICAgIGxldCBtb2RhbFRpdGxlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywnbW9kYWxIZWFkZXJUaXRsZScsdGl0bGUpXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSlcbiAgICAvKiBDcmVhdGVzIHRoZSBjbG9zZSBidXR0b24qL1xuICAgIGxldCBjbG9zZSAgPSBjcmVhdGVET01FbGVtZW50KCdidXR0b24nLCdjbG9zZScsJ3gnKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlKVxuXG4gICAgLyogQWRkcyB0aGUgbW9kYWwgKi9cbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG5cbiAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgfSlcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIFxuICAgIFxuICAgIH0pXG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZVxufSIsImNsYXNzIFBhY2llbnRlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsYWdlLHNleCxnZW5lcmFsLGVzcGVjaWZpY28sdHJhdGFtaWVudG8sZmFybWFjb3RlcmFwaWEsZW5mZXJtZWRhZGVzLGFsZXJnaWFzLGhhYml0b3MsZGF0ZSxpZCxub3Rlcykge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgdGhpcy5zZXggPSBzZXggO1xuICAgICAgdGhpcy5nZW5lcmFsID0gZ2VuZXJhbDtcbiAgICAgIHRoaXMuZXNwZWNpZmljbyA9IGVzcGVjaWZpY287XG4gICAgICB0aGlzLnRyYXRhbWllbnRvID0gdHJhdGFtaWVudG87XG4gICAgICB0aGlzLmZhcm1hY290ZXJhcGlhID0gZmFybWFjb3RlcmFwaWE7XG4gICAgICB0aGlzLmVuZmVybWVkYWRlcyA9IGVuZmVybWVkYWRlcztcbiAgICAgIHRoaXMuYWxlcmdpYXMgPSBhbGVyZ2lhcztcbiAgICAgIHRoaXMuaGFiaXRvcyA9IGhhYml0b3M7XG4gICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cbiAgICBcbn1cblxuY2xhc3MgRXhwZWRpZW50ZSB7XG4gIGNvbnN0cnVjdG9yKGNpdGEscGFjaWVudGUpe1xuICAgIHRoaXMuY2l0YSA9IGNpdGFcbiAgICB0aGlzLnBhY2llbnRlID0gcGFjaWVudGVcbiAgfVxufVxuXG5jbGFzcyBDaXRhIHtcbiAgY29uc3RydWN0b3IocGFjaWVudGUsZmVjaGEsbm90YXMpe1xuICAgIHRoaXMucGFjaWVudGUgPSBwYWNpZW50ZVxuICAgIHRoaXMuZmVjaGEgPSBmZWNoYVxuICAgIHRoaXMubm90YXMgPSBub3Rhc1xuICB9XG59XG5cbmNsYXNzIEJpYmxpb3RlY2Ege1xuICBjb25zdHJ1Y3RvcihwYWNpZW50ZXMpe1xuICAgIHRoaXMucGFjaWVudGVzID0gcGFjaWVudGVzXG4gIH1cblxuICBhZGRQYXRpZW50ID0gKFBhY2llbnRlKSA9PiB7XG4gICAgdGhpcy5wYWNpZW50ZXMucHVzaChQYWNpZW50ZSlcbiAgfVxufVxuXG5leHBvcnR7XG4gIFBhY2llbnRlLFxuICBFeHBlZGllbnRlLFxuICBDaXRhLFxuICBCaWJsaW90ZWNhXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZX0gZnJvbSAnLi9tb2RhbENyZWF0b3JzJ1xuaW1wb3J0IHtQYWNpZW50ZSxCaWJsaW90ZWNhfSBmcm9tICcuL3BhY2llbnRlJ1xuaW1wb3J0IHtzYXZlSW5Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHthZGRQYXRpZW50VGFibGV9IGZyb20gJy4vcGF0aWVudFRhYmxlJ1xuXG5cblxuXG5cblxubGV0IGNyZWF0ZVBhdGllbnRGaWxlTW9kYWwgPSAocGF0aWVudCkgPT4ge1xuXG4gICAgLypDcmVhdGUgbWFpbiBjb250YWluZXIqL1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50RmlsZScpXG5cbiAgICAvKkxlZnQgc2lkZSBjb250YWluZXIqL1xuICAgIGxldCBsZWZ0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50RmlsZUxlZnQnKVxuXG4gICAgLypMZWZ0IHNpZGUgY29udGFpbmVyKi9cbiAgICBsZXQgcmlnaHRDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGaWxlUmlnaHQnKVxuXG4gICAgLyogVG9wIENvbnRhaW5lciAqL1xuICAgIGxldCB0b3BDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGaWxlVG9wJylcblxuICAgIC8qIEJvdHRvbSBDb250YWluZXIgKi9cbiAgICBsZXQgYm90dG9tQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50RmlsZUJvdHRvbScpXG5cblxuICAgIC8qZGF0ZSBMYWJlbCovXG4gICAgbGV0IGRhdGVMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdOb21icmUnKVxuICAgIGxldCBkYXRlVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5kYXRlfWApXG5cbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbClcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVWYWx1ZSlcblxuICAgIC8qTmFtZSBMYWJlbCovXG4gICAgbGV0IG5hbWVMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdOb21icmUnKVxuICAgIGxldCBuYW1lVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5uYW1lfWApXG5cbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVMYWJlbClcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVWYWx1ZSlcblxuICAgIC8qR2VuZXJhbCBMYWJlbCovXG4gICAgbGV0IGdlbmVyYWxMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdFbmZlcm1lZGFkIEdlbmVyYWwnKVxuICAgIGxldCBnZW5lcmFsVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5nZW5lcmFsfWApXG5cbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYWxMYWJlbClcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYWxWYWx1ZSlcblxuICAgIC8qc3BlY2lmaWMgTGFiZWwqL1xuICAgIGxldCBzcGVjaWZpY0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ0VuZmVybWVkYWQgRXNwZWNpZmljYScpXG4gICAgbGV0IHNwZWNpZmljVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5zcGVjaWZpY31gKVxuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChzcGVjaWZpY0xhYmVsKVxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BlY2lmaWNWYWx1ZSlcblxuICAgIC8qdHJhdGFtaWVudG8gTGFiZWwqL1xuICAgIGxldCB0cmF0YW1pZW50b0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ0VuZmVybWVkYWQgRXRyYXRhbWllbnRvYScpXG4gICAgbGV0IHRyYXRhbWllbnRvVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC50cmF0YW1pZW50b31gKVxuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b0xhYmVsKVxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9WYWx1ZSlcblxuICAgIC8qYWdlIExhYmVsKi9cbiAgICBsZXQgYWdlTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnRWRhZCcpXG4gICAgbGV0IGFnZVZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuYWdlfWApXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChhZ2VMYWJlbClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChhZ2VWYWx1ZSlcblxuICAgIC8qc2V4IExhYmVsKi9cbiAgICBsZXQgc2V4TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnU2V4bycpXG4gICAgbGV0IHNleFZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuc2V4fWApXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXhMYWJlbClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXhWYWx1ZSlcblxuXG4gICAgLypmYXJtYWNvdGVyYXBpYSBMYWJlbCovXG4gICAgbGV0IGZhcm1hY290ZXJhcGlhTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnRmFybWFjb3RlcmFwaWEnKVxuICAgIGxldCBmYXJtYWNvdGVyYXBpYVZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuZmFybWFjb3RlcmFwaWF9YClcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhcm1hY290ZXJhcGlhTGFiZWwpXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmFybWFjb3RlcmFwaWFWYWx1ZSlcblxuICAgIC8qbm90YXMgTGFiZWwqL1xuICAgIGxldCBub3Rhc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ25vdGFzJylcbiAgICBsZXQgbm90YXNWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50Lm5vdGVzfWApXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rhc0xhYmVsKVxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGFzVmFsdWUpXG5cblxuICAgIC8qYWxlcmdpYXMgTGFiZWwqL1xuICAgIGxldCBhbGVyZ2lhc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ2FsZXJnaWFzJylcbiAgICBsZXQgYWxlcmdpYXNWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmFsZXJnaWFzfWApXG5cbiAgICBsZXQgYm90dG9tQWxlcmdpYUNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignYm90dG9tVmFsdWVDb250YWluZXInKVxuXG4gICAgYm90dG9tQWxlcmdpYUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGVyZ2lhc0xhYmVsKVxuICAgIGJvdHRvbUFsZXJnaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxlcmdpYXNWYWx1ZSlcblxuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21BbGVyZ2lhQ29udGFpbmVyKVxuICAgIFxuICAgIC8qZW5mZXJtZWRhZGVzIExhYmVsKi9cbiAgICBsZXQgZW5mZXJtZWRhZGVzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnZW5mZXJtZWRhZGVzJylcbiAgICBsZXQgZW5mZXJtZWRhZGVzVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5lbmZlcm1lZGFkZXN9YClcblxuICAgIGxldCAgYm90dG9tRW5mZXJtZWRhZGVzQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdib3R0b21WYWx1ZUNvbnRhaW5lcicpXG5cbiAgICBib3R0b21FbmZlcm1lZGFkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5mZXJtZWRhZGVzTGFiZWwpXG4gICAgYm90dG9tRW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc1ZhbHVlKVxuXG4gICAgYm90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUVuZmVybWVkYWRlc0NvbnRhaW5lcilcblxuXG5cbiAgICAvKmhhYml0b3MgTGFiZWwqL1xuICAgIGxldCBoYWJpdG9zTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnaGFiaXRvcycpXG4gICAgbGV0IGhhYml0b3NWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmhhYml0b3N9YClcblxuICAgIGxldCBib3R0b21IYWJpdG9zQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdib3R0b21WYWx1ZUNvbnRhaW5lcicpXG5cbiAgICBib3R0b21IYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhYml0b3NMYWJlbClcbiAgICBib3R0b21IYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhYml0b3NWYWx1ZSlcblxuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21IYWJpdG9zQ29udGFpbmVyKVxuXG5cbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdidXR0b25Db250YWluZXInKVxuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ2J1dHRvbicsJ2RlbGV0ZUJ1dHRvbicsJ0VsaW1pbmFyIHBhY2llbnRlJywnZGVsZXRlJylcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBZHZlcnRlbmNpYSBzZSBlc3RhIGJvcnJhbmRvIGVsIHBhY2llbnRlISBEZXNlYXMgY29uZmlybWFyIGVzdG8/XCIpID09IHRydWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVBhdGllbnQocGF0aWVudClcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpXG4gICAgICAgICAgICBhZGRQYXRpZW50VGFibGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcblxuICAgIH0pXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuXG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpXG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyXG59XG5cblxubGV0IGRlbGV0ZVBhdGllbnQgPSAocGFjaWVudGUpID0+IHtcbiAgICBsZXQgcGF0aWVudERhdGFiYXNlID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcblxuICAgIHBhdGllbnREYXRhYmFzZSA9IHBhdGllbnREYXRhYmFzZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwYWNpZW50ZS5pZClcbiAgICBjb25zb2xlLmxvZygpXG5cbiAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UoJ3BhdGllbnREYXRhYmFzZScscGF0aWVudERhdGFiYXNlKVxufSBcblxuXG5sZXQgY2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG59XG5cbmV4cG9ydHtcbiAgICBjcmVhdGVQYXRpZW50RmlsZU1vZGFsLFxufSIsImltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURPTUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvckZ1bmN0aW9ucydcbmltcG9ydCB7Y3JlYXRlTW9kYWxTdHJ1Y3R1cmV9IGZyb20gJy4vbW9kYWxDcmVhdG9ycydcbmltcG9ydCB7bG9hZERhdGF9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7UGFjaWVudGUsQmlibGlvdGVjYX0gZnJvbSAnLi9wYWNpZW50ZSdcbmltcG9ydCB7c2F2ZUluTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcbmltcG9ydCB7Z2V0VG9kYXlzRGF0ZX0gZnJvbSAnLi9kYXRlRnVuY3Rpb25zJ1xuaW1wb3J0IHthZGRQYXRpZW50VGFibGV9IGZyb20gJy4vcGF0aWVudFRhYmxlJ1xuaW1wb3J0IHsgZ2V0RGF5c0luTW9udGggfSBmcm9tICdkYXRlLWZucydcblxuXG5cblxuXG5sZXQgYWRkUGF0aWVudE1vZGFsQ29udGVudCA9ICgpID0+IHtcblxuICAgIC8qIExvYWRzIHRoZSBtYWluIGFycmF5ICovXG4gICAgbGV0IG1haW5BcnJheSA9IGxvYWREYXRhKClcblxuICAgIGxldCBnZW5lcmFsID0gbWFpbkFycmF5WzBdXG4gICAgbGV0IGFsZXJnaWFzID0gbWFpbkFycmF5WzFdXG4gICAgbGV0IGVuZmVybWVkYWRlcyA9IG1haW5BcnJheVsyXVxuICAgIGxldCBoYWJpdG9zID0gbWFpbkFycmF5WzNdXG4gICAgbGV0IHRyYXRhbWllbnRvcyA9IG1haW5BcnJheVs0XVxuICAgIGxldCBzcGVjaWZpYyA9IG1haW5BcnJheVs1XVxuXG5cbiAgICAvKiBNYWluIGNvbnRhaW5lciBmb3IgdGhlIG1vZGFsICovXG4gICAgbGV0IG1haW5Gb3JtID0gY3JlYXRlRE9NRWxlbWVudCgnZm9ybScsJ3BhdGllbnRGb3JtJywnJywncGF0aWVudEZvcm0nKVxuICAgIG1haW5Gb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCdyZXR1cm4gZmFsc2UnKVxuXG4gICAgLyogUGF0aWVudCBmb3JtIHNpZGVzICovXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1SaWdodCcpXG4gICAgbGV0IGxlZnRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybUxlZnQnKVxuXG4gICAgbGV0IHRvcFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtVG9wJylcbiAgICBsZXQgYm90dG9tU2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1Cb3R0b20nKVxuXG4gICAgLypNYWluIERlc2lnbiBSaWdodCBTaWRlKi9cbiAgICBsZXQgbmFtZUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdOb21icmUnKVxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZuYW1lJylcbiAgICBcbiAgICBsZXQgbmFtZUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdmb3JtVGV4dElucHV0JywnJywnZm5hbWUnKVxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmbmFtZScpXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cblxuICAgIC8qR2VuZXJhbCovXG4gICAgbGV0IGdlbmVyYWxMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRGlhZ25vc3RpY28gR2VuZXJhbCcpXG4gICAgZ2VuZXJhbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZmdlbmVyYWwnKVxuICAgIFxuICAgIGxldCBnZW5lcmFsSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2ZnZW5lcmFsJylcbiAgICBnZW5lcmFsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZnZW5lcmFsJylcbiAgICBnZW5lcmFsSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICBnZW5lcmFsSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbignJywnJyx0cnVlLHRydWUpKVxuICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywnJylcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdlbmVyYWwubGVuZ3RoOyBpKyspe1xuICAgICAgICBnZW5lcmFsSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbihnZW5lcmFsW2ldLCBnZW5lcmFsW2ldKSk7XG4gICAgfSAgIFxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGdlbmVyYWxMYWJlbCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGdlbmVyYWxJbnB1dCk7XG5cbiAgICAvKiBFc3BlY2lmaWNvICovXG4gICAgbGV0IHNwZWNpZmljTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0RpYWdub3N0aWNvIEVzcGVjaWZpY28nKVxuICAgIHNwZWNpZmljTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmc3BlY2lmaWMnKVxuICAgIFxuICAgIGxldCBzcGVjaWZpY0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmc3BlY2lmaWMnKVxuICAgIHNwZWNpZmljSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZzcGVjaWZpYycpXG4gICAgc3BlY2lmaWNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuXG5cbiAgICBnZW5lcmFsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoZXZlbnQpID0+e1xuICAgICAgICBcbiAgICAgICAgbGV0IGVsZW1lbnRJbmRleFNlbGVjdGVkID0gZ2VuZXJhbC5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgbGV0IHNwZWNpZmljQXJyYXkgPSBzcGVjaWZpY1tlbGVtZW50SW5kZXhTZWxlY3RlZF0ubWFwKChlbGVtZW50KT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbMF1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG5vdGVzU3BlY2lmaWNBcnJheSA9IHNwZWNpZmljW2VsZW1lbnRJbmRleFNlbGVjdGVkXS5tYXAoKGVsZW1lbnQpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFsxXVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgICAgIHNwZWNpZmljSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywnJylcblxuICAgICAgICAvKkNsZWFycyBhbGwgdmFsdWVzIG9mIHRoZSBsaXN0IGFuIHJlc2V0cyB0aGVtICovXG4gICAgICAgIHNwZWNpZmljSW5wdXQubGVuZ3RoID0wO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3BlY2lmaWNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNwZWNpZmljSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbihzcGVjaWZpY0FycmF5W2ldLCBzcGVjaWZpY0FycmF5W2ldKSk7XG4gICAgICAgIH0gICBcbiAgICBcblxuICAgIH0pXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3BlY2lmaWNMYWJlbCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHNwZWNpZmljSW5wdXQpO1xuXG4gICAgLyogVHJhdGFtaWVudG9zKi9cbiAgICBsZXQgdHJhdGFtaWVudG9zTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ1RyYXRhbWllbnRvJylcbiAgICB0cmF0YW1pZW50b3NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Z0cmF0YW1pZW50bycpXG4gICAgXG4gICAgbGV0IHRyYXRhbWllbnRvc0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmdHJhdGFtaWVudG8nKVxuICAgIHRyYXRhbWllbnRvc0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmdHJhdGFtaWVudG8nKVxuICAgIHRyYXRhbWllbnRvc0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuICAgIFxuXG5cbiAgICB0cmF0YW1pZW50b3NJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICB0cmF0YW1pZW50b3NJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywnJylcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0cmF0YW1pZW50b3MubGVuZ3RoOyBpKyspe1xuICAgICAgICB0cmF0YW1pZW50b3NJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHRyYXRhbWllbnRvc1tpXSwgdHJhdGFtaWVudG9zW2ldKSk7XG4gICAgfSBcblxuICAgIFxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHRyYXRhbWllbnRvc0xhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9zSW5wdXQpO1xuXG4gICAgLyogQWxlcmdpYXMgQ29udGFpbmVyICovXG4gICAgbGV0IGFsZXJnaWFzQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdhbGVyZ2lhc0NvbnRhaW5lcicpXG5cbiAgICAvKkFsZXJnaWFzKi9cbiAgICBsZXQgYWxlcmdpYXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnQWxlcmdpYXMnKVxuICAgIGFsZXJnaWFzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZXJnaWFzTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcyA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3hDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGFsZXJnaWFzLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7YWxlcmdpYXNbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGFsZXJnaWFzW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYWxlcmdpYXNbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHthbGVyZ2lhc1tpXX1gKVxuXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyQWxlcmdpYXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cblxuICAgIGFsZXJnaWFzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyQWxlcmdpYXMpXG5cblxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChhbGVyZ2lhc0NvbnRhaW5lcilcblxuICAgIC8qIGVuZmVybWVkYWRlcyBDb250YWluZXIgKi9cbiAgICBsZXQgZW5mZXJtZWRhZGVzQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdlbmZlcm1lZGFkZXNDb250YWluZXInKVxuXG4gICAgLyplbmZlcm1lZGFkZXMqL1xuICAgIGxldCBlbmZlcm1lZGFkZXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnZW5mZXJtZWRhZGVzJylcbiAgICBlbmZlcm1lZGFkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5mZXJtZWRhZGVzTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJFbmZlcm1lZGFkZXMgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxlbmZlcm1lZGFkZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5SW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FsZXJneUNoZWNrYm94JywnJyxgYWxlcmd5JHtlbmZlcm1lZGFkZXNbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGVuZmVybWVkYWRlc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGVuZmVybWVkYWRlc1tpXSlcblxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdjaGVjYm94TGFiZWwnLGAke2VuZmVybWVkYWRlc1tpXX1gKVxuXG5cblxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfSBcblxuICAgIGVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcylcblxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNDb250YWluZXIpXG5cbiAgICAvKiBoYWJpdG9zIENvbnRhaW5lciAqL1xuICAgIGxldCBoYWJpdG9zQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdoYWJpdG9zQ29udGFpbmVyJylcblxuICAgIC8qaGFiaXRvcyovXG4gICAgbGV0IGhhYml0b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnaGFiaXRvcycpXG4gICAgaGFiaXRvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoYWJpdG9zTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJIYWJpdG9zID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8aGFiaXRvcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2hhYml0b3NbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGhhYml0b3NbaV0pXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxoYWJpdG9zW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7aGFiaXRvc1tpXX1gKVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckhhYml0b3MuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICBcbiAgICBoYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVySGFiaXRvcylcblxuICAgIGJvdHRvbVNpZGUuYXBwZW5kQ2hpbGQoaGFiaXRvc0NvbnRhaW5lcilcblxuICAgIC8qIExlZnQgU2lkZSAqL1xuXG4gICAgLypBR0UqL1xuICAgIGxldCBlZGFkTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0VkYWQnKVxuICAgIGVkYWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZlZGFkJylcblxuICAgIGxldCBlZGFkSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2Zvcm1UZXh0SW5wdXQnLCcnLCdmZWRhZCcpXG4gICAgZWRhZElucHV0LnR5cGUgPSAnbnVtYmVyJ1xuICAgIGVkYWRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZmVkYWQnKVxuICAgIGVkYWRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGVkYWRMYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChlZGFkSW5wdXQpXG5cbiAgICAvKiBTZXhvICovXG4gICAgbGV0IHNleG9MYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnU2V4bycpXG4gICAgc2V4b0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnNleG8nKVxuXG4gICAgbGV0IHNleG9JbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZnNleG8nKVxuICAgIHNleG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZnNleG8nKVxuICAgIHNleG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgIHNleG9JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgc2V4b0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgc2V4b0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuICAgIFxuICAgIGxldCBzZXhlcyA9IFsnTWFzY3VsaW5vJywnRmVtZW5pbm8nLCdPdHJvJ11cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZXhlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNleG9JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHNleGVzW2ldLCBzZXhlc1tpXSkpO1xuICAgIH0gXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZXhvTGFiZWwpXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoc2V4b0lucHV0KVxuXG4gICAgLypGYXJtYWNvKi9cbiAgICBsZXQgZmFybWFjb0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdGYXJtYWNvdGVyYXBpYScpXG4gICAgZmFybWFjb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZmZhcm1hY28nKVxuXG4gICAgbGV0IGZhcm1hY29JbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ2Zvcm1UZXh0SW5wdXQnLCcnLCdmZmFybWFjbycpXG4gICAgZmFybWFjb0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmZmFybWFjbycpXG5cbiAgICBmYXJtYWNvSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbignJywnJyx0cnVlLHRydWUpKVxuICAgIGZhcm1hY29JbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgIGZhcm1hY29JbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywnJylcbiAgICAgICAgXG4gICAgbGV0IGZhcm1hY28gPSBbJ1NpJywnTm8nXVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZhcm1hY28ubGVuZ3RoOyBpKyspe1xuICAgICAgICBmYXJtYWNvSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbihmYXJtYWNvW2ldLCBmYXJtYWNvW2ldKSk7XG4gICAgfSBcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGZhcm1hY29MYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChmYXJtYWNvSW5wdXQpXG5cbiAgICAvKiBOb3RhcyAqL1xuICAgIGxldCBub3Rlc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdOb3RhcycpXG4gICAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Zub3RhcycpXG4gICAgXG4gICAgbGV0IG5vdGVzQm94ID0gY3JlYXRlRE9NRWxlbWVudCgndGV4dGFyZWEnLCdub3RlQm94JywnJywnZm5vdGFzJylcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobm90ZXNCb3gpXG5cbiAgICAvKlN1Ym1pdCBCb3R0b20gKi9cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gY3JlYXRlRE9NRWxlbWVudCgnc3VibWl0Jywnc3VibWl0QnV0dG9uJywnQWdyZWdhcicpXG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGxldCBwYXRpZW50ID0gY2hlY2tGb3JtVmFsdWVzKClcbiAgICAgICAgbGV0IG5ld1BhdGllbnQgPSBuZXcgUGFjaWVudGUocGF0aWVudC5uYW1lLHBhdGllbnQuZWRhZCxwYXRpZW50LnNleCxwYXRpZW50LmdlbmVyYWwscGF0aWVudC5zcGVjaWZpYyxwYXRpZW50LnRyYXRhbWllbnRvLHBhdGllbnQuZmFybWFjbyxwYXRpZW50LmVuZmVybWVkYWRlcyxwYXRpZW50LmFsZXJneSxwYXRpZW50LmhhYml0b3MscGF0aWVudC5kYXRlLHBhdGllbnQuaWQscGF0aWVudC5ub3RlcylcblxuICAgICAgICBsZXQgcGF0aWVudERhdGFiYXNlID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcbiAgICAgICAgXG4gICAgICAgIHBhdGllbnREYXRhYmFzZS5wdXNoKG5ld1BhdGllbnQpXG4gICAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJyxwYXRpZW50RGF0YWJhc2UpXG4gICAgICAgIGNsZWFyRm9ybSgpXG4gICAgICAgIGNsb3NlRm9ybSgpXG4gICAgICAgIGFkZFBhdGllbnRUYWJsZSgpXG4gICAgfSlcblxuICAgIHRvcFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgICB0b3BTaWRlLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZCh0b3BTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChib3R0b21TaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5cblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGF0aWVudEJ1dHRvbicpXG5cbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShtYWluRm9ybSwnbW9kYWwnLCdBZ3JlZ2FyIFBhY2llbnRlJyxhZGRCdXR0b24pXG4gICAgcmV0dXJuIG1haW5Gb3JtXG4gXG59XG5cblxubGV0IGNoZWNrRm9ybVZhbHVlcyA9ICgpID0+IHtcblxuICAgIGxldCBwYXRpZW50SW5mbyA9IHtcbiAgICAgICAgbmFtZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbmFtZScpLnZhbHVlLFxuICAgICAgICBnZW5lcmFsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmdlbmVyYWwnKS52YWx1ZSxcbiAgICAgICAgZmFybWFjbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZmYXJtYWNvJykudmFsdWUsXG4gICAgICAgIHNwZWNpZmljOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnNwZWNpZmljJykudmFsdWUsXG4gICAgICAgIHRyYXRhbWllbnRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnRyYXRhbWllbnRvJykudmFsdWUsXG4gICAgICAgIGVkYWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWRhZCcpLnZhbHVlLFxuICAgICAgICBzZXg6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmc2V4bycpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zub3RhcycpLnZhbHVlLFxuICAgICAgICBhbGVyZ3k6IG5vZGUyQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJnaWFzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKSxcbiAgICAgICAgZW5mZXJtZWRhZGVzOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXIgPiAuY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkJykpLFxuICAgICAgICBoYWJpdG9zOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYWJpdG9zQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKSxcbiAgICAgICAgZGF0ZTogZ2V0VG9kYXlzRGF0ZSgpLFxuICAgICAgICBpZDogY2hlY2tGb3JJZCgpLFxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiBwYXRpZW50SW5mb1xufVxuXG5sZXQgY2hlY2tGb3JJZCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YWJhc2UgID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcbiAgICBpZiAoZGF0YWJhc2UubGVuZ3RoICE9IDApe1xuICAgICAgICBsZXQgaWQgPSBkYXRhYmFzZVtkYXRhYmFzZS5sZW5ndGgtMV0uaWQgKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICByZXR1cm4gaWRcbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGlkID0gMVxuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgcmV0dXJuIGlkXG4gICAgfVxufVxuXG5sZXQgY2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG59XG5cbmxldCBub2RlMkFycmF5ID0gKG5vZGUpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIG5vZGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKSAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5XG59XG5cbmxldCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0aWVudEZvcm0nKVxuICAgIGxldCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsdGV4dGFyZWEnKVxuXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpZihpbnB1dC50eXBlID09PSAndGV4dCcgfHwgaW5wdXQudHlwZSA9PT0gJ3RleHRhcmVhJyB8fCBpbnB1dC50eXBlID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIH1lbHNlIGlmKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpe1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1lbHNlIGlmIChpbnB1dC50eXBlID09PSAnc2VsZWN0LW9uZScpe1xuICAgICAgICAgICAgaW5wdXQuc2VsZWN0ZWRJbmRleCA9IC0xXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0e1xuICAgIGFkZFBhdGllbnRNb2RhbENvbnRlbnRcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5pbXBvcnQge3NhdmVJbkxvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgIHtjcmVhdGVQYXRpZW50RmlsZU1vZGFsfSBmcm9tICcuL3BhdGllbnRGaWxlTW9kYWwnXG5pbXBvcnQge2NyZWF0ZU1vZGFsU3RydWN0dXJlfSBmcm9tICcuL21vZGFsQ3JlYXRvcnMnXG5cblxubGV0IGFkZFBhdGllbnRUYWJsZSA9ICgpID0+IHtcblxuICAgIC8qR2V0cyB0aGUgbWFpbiBwYXRpZW50IGRhdGEgYmFzZSovXG4gICAgbGV0IHBhdGllbnREYXRhYmFzZSA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3BhdGllbnREYXRhYmFzZScpXG5cbiAgICAvKkdldHMgdGhlIG1haW4gdGFibGUqL1xuICAgIGxldCBwYXRpZW50VGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVCb2R5JylcbiAgICBcbiAgICBwYXRpZW50VGFibGUuaW5uZXJIVE1MID0gJydcbiAgICBcbiAgICBwYXRpZW50RGF0YWJhc2UuZm9yRWFjaChwYXRpZW50ID0+IHtcbiAgICAgICAgYWRkUGF0aWVudFJvdyhwYXRpZW50KVxuICAgIH0pO1xuXG4gICAgYWRkQ2xpY2tUYWJsZUV2ZW50cygpXG4gICAgYWRkU29ydFRhYmxlRnVuY3Rpb25zKClcblxuICAgIGxldCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKCk9PntcbiAgICAgICAgc2VhcmNoVGFibGUoKVxuICAgIH0pXG5cbn1cblxubGV0IGFkZFBhdGllbnRSb3cgPSAocGF0aWVudCkgPT4ge1xuICAgIFxuICAgIC8qR2V0cyB0aGUgbWFpbiB0YWJsZSovXG4gICAgbGV0IHBhdGllbnRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZUJvZHknKVxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFuIGVtcHR5IDx0cj4gZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSAxc3QgcG9zaXRpb24gb2YgdGhlIHRhYmxlOlxuICAgIGxldCByb3cgPSBwYXRpZW50VGFibGUuaW5zZXJ0Um93KDApO1xuXG4gICAgLy8gSW5zZXJ0IG5ldyBjZWxscyAoPHRkPiBlbGVtZW50cykgYXQgdGhlIDFzdCBhbmQgMm5kIHBvc2l0aW9uIG9mIHRoZSBcIm5ld1wiIDx0cj4gZWxlbWVudDpcbiAgICBsZXQgaWQgPSByb3cuaW5zZXJ0Q2VsbCgwKVxuICAgIGxldCBkYXRlID0gcm93Lmluc2VydENlbGwoMSk7XG4gICAgbGV0IG5hbWUgPSByb3cuaW5zZXJ0Q2VsbCgyKTtcbiAgICBsZXQgYWdlID0gcm93Lmluc2VydENlbGwoMyk7XG4gICAgbGV0IHNleCA9IHJvdy5pbnNlcnRDZWxsKDQpO1xuICAgIGxldCBnZW5lcmFsID0gcm93Lmluc2VydENlbGwoNSk7XG5cbiAgICAvLyBBZGQgc29tZSB0ZXh0IHRvIHRoZSBuZXcgY2VsbHM6XG4gICAgaWQuaW5uZXJIVE1MID0gcGF0aWVudC5pZFxuICAgIGRhdGUuaW5uZXJIVE1MID0gcGF0aWVudC5kYXRlO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gcGF0aWVudC5uYW1lO1xuICAgIGFnZS5pbm5lckhUTUwgPSBwYXRpZW50LmFnZTtcbiAgICBzZXguaW5uZXJIVE1MID0gcGF0aWVudC5zZXg7XG4gICAgZ2VuZXJhbC5pbm5lckhUTUwgPSBwYXRpZW50LmdlbmVyYWw7XG5cbn1cblxubGV0IGFkZENsaWNrVGFibGVFdmVudHMgPSAoKSA9PiB7XG4gICAgbGV0ICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aWVudFRhYmxlXCIpO1xuICAgIGxldCAgcm93cyA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHJcIik7XG4gICAgbGV0ICBwYXRpZW50QXJyYXkgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93cy5sZW5ndGg7IGkrKykgeyAgICBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJsZS5yb3dzW2ldLmNlbGxzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGFibGUucm93c1tpXS5jZWxsc1tqXTtcbiAgICAgICAgICAgIGxldCBwYXRpZW50SUQgPSB0YWJsZS5yb3dzW2ldLmNlbGxzWzBdLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCBwYXRpZW50ID0gcGF0aWVudEFycmF5LmZpbmQocGF0aWVudFRlc3QgPT4gcGF0aWVudFRlc3QuaWQgPT0gcGF0aWVudElEKVxuICAgICAgICAgICAgbGV0IHBhdGllbnRJbmZvID0gY3JlYXRlUGF0aWVudEZpbGVNb2RhbChwYXRpZW50KVxuICAgICAgICAgICAgY3JlYXRlTW9kYWxTdHJ1Y3R1cmUocGF0aWVudEluZm8sJ21vZGFsJywnSW5mb3JtYWNpb24gZGVsIHBhY2llbnRlJyxjZWxsKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmxldCBzb3J0VGFibGUgPSAobikgPT4ge1xuICAgIFxuICAgIGxldCB0YWJsZSxyb3dzLHN3aXRjaGluZyxpLHgseSxzaG91bGRTd2l0Y2gsZGlyLHN3aXRjaGNvdW50ID0gMDtcblxuICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRpZW50VGFibGVcIik7XG4gICAgc3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAvL1NldCB0aGUgc29ydGluZyBkaXJlY3Rpb24gdG8gYXNjZW5kaW5nOlxuICAgIGRpciA9IFwiYXNjXCI7XG4gICAgLypNYWtlIGEgbG9vcCB0aGF0IHdpbGwgY29udGludWUgdW50aWxcbiAgICBubyBzd2l0Y2hpbmcgaGFzIGJlZW4gZG9uZToqL1xuICAgIHdoaWxlIChzd2l0Y2hpbmcpIHtcbiAgICAgICAgLy9zdGFydCBieSBzYXlpbmc6IG5vIHN3aXRjaGluZyBpcyBkb25lOlxuICAgICAgICBzd2l0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgcm93cyA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVFJcIik7XG4gICAgICAgIC8qTG9vcCB0aHJvdWdoIGFsbCB0YWJsZSByb3dzIChleGNlcHQgdGhlXG4gICAgICAgIGZpcnN0LCB3aGljaCBjb250YWlucyB0YWJsZSBoZWFkZXJzKToqL1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcm93cy5sZW5ndGggLSAxOyBpKyspIHsgLy9DaGFuZ2UgaT0wIGlmIHlvdSBoYXZlIHRoZSBoZWFkZXIgdGggYSBzZXBhcmF0ZSB0YWJsZS5cbiAgICAgICAgLy9zdGFydCBieSBzYXlpbmcgdGhlcmUgc2hvdWxkIGJlIG5vIHN3aXRjaGluZzpcbiAgICAgICAgc2hvdWxkU3dpdGNoID0gZmFsc2U7XG4gICAgICAgIC8qR2V0IHRoZSB0d28gZWxlbWVudHMgeW91IHdhbnQgdG8gY29tcGFyZSxcbiAgICAgICAgb25lIGZyb20gY3VycmVudCByb3cgYW5kIG9uZSBmcm9tIHRoZSBuZXh0OiovXG4gICAgICAgIHggPSByb3dzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVERcIilbbl07XG4gICAgICAgIHkgPSByb3dzW2kgKyAxXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlREXCIpW25dO1xuICAgICAgICAvKmNoZWNrIGlmIHRoZSB0d28gcm93cyBzaG91bGQgc3dpdGNoIHBsYWNlLFxuICAgICAgICBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uLCBhc2Mgb3IgZGVzYzoqL1xuICAgICAgICBpZiAoZGlyID09IFwiYXNjXCIpIHtcbiAgICAgICAgICAgIGlmICh4LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpID4geS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgLy9pZiBzbywgbWFyayBhcyBhIHN3aXRjaCBhbmQgYnJlYWsgdGhlIGxvb3A6XG4gICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgICBpZiAoeC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSA8IHkuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIC8vaWYgc28sIG1hcmsgYXMgYSBzd2l0Y2ggYW5kIGJyZWFrIHRoZSBsb29wOlxuICAgICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFN3aXRjaCkge1xuICAgICAgICAvKklmIGEgc3dpdGNoIGhhcyBiZWVuIG1hcmtlZCwgbWFrZSB0aGUgc3dpdGNoXG4gICAgICAgIGFuZCBtYXJrIHRoYXQgYSBzd2l0Y2ggaGFzIGJlZW4gZG9uZToqL1xuICAgICAgICByb3dzW2ldLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJvd3NbaSArIDFdLCByb3dzW2ldKTtcbiAgICAgICAgc3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgLy9FYWNoIHRpbWUgYSBzd2l0Y2ggaXMgZG9uZSwgaW5jcmVhc2UgdGhpcyBjb3VudCBieSAxOlxuICAgICAgICBzd2l0Y2hjb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvKklmIG5vIHN3aXRjaGluZyBoYXMgYmVlbiBkb25lIEFORCB0aGUgZGlyZWN0aW9uIGlzIFwiYXNjXCIsXG4gICAgICAgIHNldCB0aGUgZGlyZWN0aW9uIHRvIFwiZGVzY1wiIGFuZCBydW4gdGhlIHdoaWxlIGxvb3AgYWdhaW4uKi9cbiAgICAgICAgaWYgKHN3aXRjaGNvdW50ID09IDAgJiYgZGlyID09IFwiYXNjXCIpIHtcbiAgICAgICAgICAgIGRpciA9IFwiZGVzY1wiO1xuICAgICAgICAgICAgc3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgYWRkU29ydFRhYmxlRnVuY3Rpb25zID0gKCkgPT57XG4gICAgbGV0ICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aWVudFRhYmxlXCIpO1xuICAgIGxldCAgaGVhZGVycyA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhcIik7XG4gICAgZm9yIChsZXQgaT0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgbGV0IGhlYWQgPSBoZWFkZXJzW2ldXG4gICAgICAgIGhlYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBzb3J0VGFibGUoaSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmxldCBzZWFyY2hUYWJsZSA9ICgpID0+IHtcbiAgICAvLyBEZWNsYXJlIHZhcmlhYmxlc1xuICAgIHZhciBpbnB1dCwgZmlsdGVyLCB0YWJsZSwgdHIsIHRkLCBpLCB0eHRWYWx1ZTtcbiAgICBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xuICAgIGZpbHRlciA9IGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGllbnRUYWJsZVwiKTtcbiAgICB0ciA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHJcIik7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRhYmxlIHJvd3MsIGFuZCBoaWRlIHRob3NlIHdobyBkb24ndCBtYXRjaCB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgZm9yIChpID0gMDsgaSA8IHRyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGQgPSB0cltpXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpWzJdO1xuICAgIGlmICh0ZCkge1xuICAgICAgICB0eHRWYWx1ZSA9IHRkLnRleHRDb250ZW50IHx8IHRkLmlubmVyVGV4dDtcbiAgICAgICAgaWYgKHR4dFZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpID4gLTEpIHtcbiAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBhZGRQYXRpZW50VGFibGUsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2VTdHJ1Y3R1cmUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7UGFjaWVudGUsQmlibGlvdGVjYX0gZnJvbSAnLi9wYWNpZW50ZSdcbmltcG9ydHthZGRQYXRpZW50TW9kYWxDb250ZW50fSBmcm9tICcuL3BhdGllbnRNb2RhbCdcbmltcG9ydCB7YWRkUGF0aWVudFRhYmxlfSBmcm9tICcuL3BhdGllbnRUYWJsZSdcbmltcG9ydCB7ZG93bmxvYWRTZXR0aW5nc30gZnJvbSAnLi9kb3dubG9hZCdcblxuXG5cblxuYWRkUGF0aWVudFRhYmxlKClcbmxvYWRQYWdlU3RydWN0dXJlKClcbmFkZFBhdGllbnRNb2RhbENvbnRlbnQoKVxuZG93bmxvYWRTZXR0aW5ncygpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==