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
        console.log(newPatient)

        let validators = {
            'Nombre' : newPatient.name !== '',
            'Edad' : newPatient.age !== '',
            'Sexo'  : newPatient.sex !==  '',
            'General' : newPatient.general !== '',
            'Enfermedad especifica' :  newPatient.especifico !==  '',
            'Farmacoterapia' : newPatient.farmacoterapia !==  '',
            'Tratamiento': newPatient.tratamiento !==  '',
        }

        let conditons = Object.keys(validators).map(function(k){return(validators[k])});


        let checker = arr => arr.every(v => v === true);
        
        console.log(conditons)
        console.log(checker(conditons))
        
        if(checker(conditons)){
            patientDatabase.push(newPatient)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveInLocalStorage)('patientDatabase',patientDatabase)
            clearForm()
            closeForm()
            ;(0,_patientTable__WEBPACK_IMPORTED_MODULE_6__.addPatientTable)()
        }else{
            let missingField = Object.keys(validators)[conditons.indexOf(false)]
            alert(`Falta ${missingField} de llenar`)
        }

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
        return id
    }else{
        let id = 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixHQUFHLE1BQU0sd0NBQXdDLDZCQUE2QixHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxHQUFHLGVBQWUsb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0NBQW9DLGtCQUFrQixLQUFLLGlCQUFpQixrQ0FBa0Msd0JBQXdCLDBCQUEwQixvQkFBb0IsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsNkJBQTZCLDZCQUE2QiwwQkFBMEIsaUJBQWlCLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsU0FBUyxpQkFBaUIsa0JBQWtCLDBCQUEwQixvQkFBb0IsZ0NBQWdDLFNBQVMsMENBQTBDLDhCQUE4QixHQUFHLGtCQUFrQixvQ0FBb0MsMEJBQTBCLHdCQUF3QixtQkFBbUIsbUJBQW1CLDBCQUEwQixpQ0FBaUMsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsbUJBQW1CLGtCQUFrQixvQ0FBb0Msb0JBQW9CLHNCQUFzQiwwQkFBMEIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGVBQWUsS0FBSyxXQUFXLGlCQUFpQixnQ0FBZ0MsMEJBQTBCLHdCQUF3Qix3QkFBd0IseUJBQXlCLDBCQUEwQixxQ0FBcUMsc0JBQXNCLEdBQUcsVUFBVSxpQ0FBaUMseUJBQXlCLG9DQUFvQywwQkFBMEIsd0JBQXdCLEdBQUcsVUFBVSx5Q0FBeUMseUJBQXlCLEdBQUcsUUFBUSxxQ0FBcUMseUJBQXlCLEtBQUssdUJBQXVCLHFCQUFxQixrQkFBa0IsMEJBQTBCLEdBQUcsV0FBVyxxQkFBcUIsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2QixvQkFBb0IsR0FBRyxzQkFBc0IsaUNBQWlDLG9DQUFvQyxvQkFBb0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLEtBQUssNEJBQTRCLDhCQUE4QixHQUFHLGtFQUFrRSxvQkFBb0IsR0FBRyw0Q0FBNEMscUJBQXFCLDhDQUE4QyxxQ0FBcUMsd0NBQXdDLHVDQUF1QyxhQUFhLG1CQUFtQixvQ0FBb0MsdUNBQXVDLGlFQUFpRSw2REFBNkQsbURBQW1ELEdBQUcsOENBQThDLGdDQUFnQyx5QkFBeUIsdURBQXVELDZCQUE2QixrQkFBa0IsaUlBQWlJLEdBQUcsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG9CQUFvQixHQUFHLHNCQUFzQixrQ0FBa0Msd0JBQXdCLElBQUksd0JBQXdCLG9CQUFvQixHQUFHLHdDQUF3QyxvQkFBb0IsNkJBQTZCLG9CQUFvQixpQkFBaUIsaUJBQWlCLGdCQUFnQixHQUFHLGVBQWUsd0JBQXdCLGtDQUFrQywwQkFBMEIsb0NBQW9DLHlCQUF5QiwwQkFBMEIsR0FBRyxpQkFBaUIsbUJBQW1CLGlDQUFpQywwQkFBMEIsOEJBQThCLHlCQUF5QixHQUFHLGlCQUFpQixtQkFBbUIsaUNBQWlDLDBCQUEwQiw4QkFBOEIsR0FBRyxhQUFhLG1CQUFtQixtQkFBbUIsaUNBQWlDLG1CQUFtQixHQUFHLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyxtRUFBbUUsb0JBQW9CLDZCQUE2QixvQkFBb0IsaUJBQWlCLEdBQUcsMkJBQTJCLGNBQWMsR0FBRywrR0FBK0csd0JBQXdCLGtDQUFrQywwQkFBMEIsb0NBQW9DLDBCQUEwQixzQkFBc0IseUJBQXlCLEdBQUcsZ0RBQWdELG9CQUFvQiw2QkFBNkIsc0JBQXNCLG9CQUFvQixvQkFBb0IsR0FBRyx1QkFBdUIsaUNBQWlDLEdBQUcsc0NBQXNDLGVBQWUsbUJBQW1CLGVBQWUsZUFBZSxrQkFBa0Isb0JBQW9CLEdBQUcsaUNBQWlDLGVBQWUsd0JBQXdCLGtCQUFrQixHQUFHLG9DQUFvQyxvQkFBb0IsNkJBQTZCLEdBQUcsb0JBQW9CLG9CQUFvQiwwQkFBMEIsb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLDhCQUE4QixnQkFBZ0Isb0JBQW9CLDhCQUE4Qix5QkFBeUIsR0FBRyxzQkFBc0Isd0JBQXdCLGtDQUFrQyx5QkFBeUIsb0JBQW9CLEdBQUcscUJBQXFCLHdCQUF3QixpQ0FBaUMseUJBQXlCLG9CQUFvQixHQUFHLHdDQUF3QyxvQkFBb0IsaUJBQWlCLDZCQUE2QixHQUFHLDJCQUEyQixvQkFBb0IsY0FBYyw2QkFBNkIsMEJBQTBCLEdBQUcsa0JBQWtCLG1CQUFtQix3QkFBd0IsaUNBQWlDLDBCQUEwQiw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLHdCQUF3Qiw4QkFBOEIsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRywrQkFBK0IsaUNBQWlDLG9DQUFvQyxvQkFBb0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLEdBQUcsNkNBQTZDLDhCQUE4QixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxRQUFRLFVBQVUsUUFBUSxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixxQkFBcUIseUJBQXlCLFdBQVcsVUFBVSxvQkFBb0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIseUJBQXlCLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSx5QkFBeUIsV0FBVyxZQUFZLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIsR0FBRyxNQUFNLHdDQUF3Qyw2QkFBNkIsR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixxQ0FBcUMsR0FBRyxlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9DQUFvQyxrQkFBa0IsS0FBSyxpQkFBaUIsa0NBQWtDLHdCQUF3QiwwQkFBMEIsb0JBQW9CLEdBQUcsU0FBUyxvQkFBb0IsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsMEJBQTBCLGlCQUFpQixvQkFBb0IsZ0JBQWdCLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLFNBQVMsaUJBQWlCLGtCQUFrQiwwQkFBMEIsb0JBQW9CLGdDQUFnQyxTQUFTLDBDQUEwQyw4QkFBOEIsR0FBRyxrQkFBa0Isb0NBQW9DLDBCQUEwQix3QkFBd0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsaUNBQWlDLEdBQUcsd0JBQXdCLDhCQUE4QixHQUFHLG1CQUFtQixrQkFBa0Isb0NBQW9DLG9CQUFvQixzQkFBc0IsMEJBQTBCLG9CQUFvQixvQkFBb0IsMEJBQTBCLDZCQUE2QixlQUFlLEtBQUssV0FBVyxpQkFBaUIsZ0NBQWdDLDBCQUEwQix3QkFBd0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIscUNBQXFDLHNCQUFzQixHQUFHLFVBQVUsaUNBQWlDLHlCQUF5QixvQ0FBb0MsMEJBQTBCLHdCQUF3QixHQUFHLFVBQVUseUNBQXlDLHlCQUF5QixHQUFHLFFBQVEscUNBQXFDLHlCQUF5QixLQUFLLHVCQUF1QixxQkFBcUIsa0JBQWtCLDBCQUEwQixHQUFHLFdBQVcscUJBQXFCLHVCQUF1Qix3QkFBd0IsR0FBRyw2QkFBNkIsb0JBQW9CLEdBQUcsc0JBQXNCLGlDQUFpQyxvQ0FBb0Msb0JBQW9CLDBCQUEwQix3QkFBd0IsMEJBQTBCLG1CQUFtQixLQUFLLDRCQUE0Qiw4QkFBOEIsR0FBRyxrRUFBa0Usb0JBQW9CLEdBQUcsNENBQTRDLHFCQUFxQiw4Q0FBOEMscUNBQXFDLHdDQUF3Qyx1Q0FBdUMsYUFBYSxtQkFBbUIsb0NBQW9DLHVDQUF1QyxpRUFBaUUsNkRBQTZELG1EQUFtRCxHQUFHLDhDQUE4QyxnQ0FBZ0MseUJBQXlCLHVEQUF1RCw2QkFBNkIsa0JBQWtCLGlJQUFpSSxHQUFHLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixvQkFBb0IsR0FBRyxzQkFBc0Isa0NBQWtDLHdCQUF3QixJQUFJLHdCQUF3QixvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsR0FBRyxlQUFlLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG9DQUFvQyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLG1CQUFtQixpQ0FBaUMsMEJBQTBCLDhCQUE4Qix5QkFBeUIsR0FBRyxpQkFBaUIsbUJBQW1CLGlDQUFpQywwQkFBMEIsOEJBQThCLEdBQUcsYUFBYSxtQkFBbUIsbUJBQW1CLGlDQUFpQyxtQkFBbUIsR0FBRyx1QkFBdUIsOEJBQThCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEdBQUcsbUVBQW1FLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGlCQUFpQixHQUFHLDJCQUEyQixjQUFjLEdBQUcsK0dBQStHLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG9DQUFvQywwQkFBMEIsc0JBQXNCLHlCQUF5QixHQUFHLGdEQUFnRCxvQkFBb0IsNkJBQTZCLHNCQUFzQixvQkFBb0Isb0JBQW9CLEdBQUcsdUJBQXVCLGlDQUFpQyxHQUFHLHNDQUFzQyxlQUFlLG1CQUFtQixlQUFlLGVBQWUsa0JBQWtCLG9CQUFvQixHQUFHLGlDQUFpQyxlQUFlLHdCQUF3QixrQkFBa0IsR0FBRyxvQ0FBb0Msb0JBQW9CLDZCQUE2QixHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLG9CQUFvQiw4QkFBOEIseUJBQXlCLEdBQUcsc0JBQXNCLHdCQUF3QixrQ0FBa0MseUJBQXlCLG9CQUFvQixHQUFHLHFCQUFxQix3QkFBd0IsaUNBQWlDLHlCQUF5QixvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLGlCQUFpQiw2QkFBNkIsR0FBRywyQkFBMkIsb0JBQW9CLGNBQWMsNkJBQTZCLDBCQUEwQixHQUFHLGtCQUFrQixtQkFBbUIsd0JBQXdCLGlDQUFpQywwQkFBMEIsNEJBQTRCLG9CQUFvQiwwQkFBMEIsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsK0JBQStCLGlDQUFpQyxvQ0FBb0Msb0JBQW9CLDBCQUEwQix3QkFBd0IsMEJBQTBCLG1CQUFtQixHQUFHLDZDQUE2Qyw4QkFBOEIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLG1CQUFtQjtBQUN0MmpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNBO0FBQ0k7QUFDTjtBQUNBO0FBQ2E7QUFDZjtBQUNGO0FBQ1E7QUFDSTtBQUNEO0FBQ1A7QUFDRTtBQUNNO0FBQ007QUFDSjtBQUNNO0FBQ047QUFDVjtBQUNNO0FBQ0k7Ozs7QUFJbkQ7O0FBRUEsK0JBQStCLDZEQUFPO0FBQ3RDLGdDQUFnQyw0REFBUTtBQUN4QyxvQ0FBb0MsZ0VBQVk7QUFDaEQsK0JBQStCLDREQUFPO0FBQ3RDLG9DQUFvQyxpRUFBWTs7QUFFaEQ7QUFDQSwwQkFBMEIsNkRBQVcsQ0FBQywwREFBTSxDQUFDLDJEQUFPLENBQUMsMERBQU0sQ0FBQyx5REFBSyxDQUFDLDZEQUFTLENBQUMsK0RBQVcsQ0FBQywrREFBVSxDQUFDLDZEQUFRLENBQUMsZ0VBQVcsQ0FBQyxtRUFBYyxDQUFDLGlFQUFZLENBQUMsb0VBQWUsQ0FBQyxpRUFBWSxDQUFDLDREQUFPLENBQUMsK0RBQVU7QUFDbk07QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0RBQW9ELEtBQUs7QUFDekQ7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQSxxQ0FBcUMsS0FBSyxFQUFFLDRCQUE0QjtBQUN4RSxpQ0FBaUMsVUFBVTs7QUFFM0M7QUFDQSxLQUFLO0FBQ0wsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQSxxQ0FBcUMsS0FBSztBQUMxQyxpQ0FBaUMsVUFBVTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEOEI7QUFDd0M7QUFDeEI7OztBQUc5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QixrRUFBbUI7QUFDakQsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBa0I7QUFDdEIsSUFBSSwrREFBZTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnlFOztBQUV6RTs7O0FBR0E7QUFDQSx5QkFBeUIsd0VBQWtCO0FBQzNDO0FBQ0EsdUJBQXVCLHdFQUFrQjs7QUFFekM7QUFDQSxzQkFBc0Isd0VBQWtCLElBQUksVUFBVTtBQUN0RDtBQUNBO0FBQ0EscUJBQXFCLHNFQUFnQjtBQUNyQztBQUNBO0FBQ0EsaUJBQWlCLHNFQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3lFO0FBQ3JCO0FBQ047QUFDd0I7QUFDeEI7Ozs7Ozs7QUFPOUM7O0FBRUE7QUFDQSx3QkFBd0Isd0VBQWtCOztBQUUxQztBQUNBLHdCQUF3Qix3RUFBa0I7O0FBRTFDO0FBQ0EseUJBQXlCLHdFQUFrQjs7QUFFM0M7QUFDQSx1QkFBdUIsd0VBQWtCOztBQUV6QztBQUNBLDBCQUEwQix3RUFBa0I7OztBQUc1QztBQUNBLG9CQUFvQixzRUFBZ0I7QUFDcEMsb0JBQW9CLHNFQUFnQiw4QkFBOEIsYUFBYTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzRUFBZ0I7QUFDcEMsb0JBQW9CLHNFQUFnQiw4QkFBOEIsYUFBYTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzRUFBZ0I7QUFDdkMsdUJBQXVCLHNFQUFnQiw4QkFBOEIsZ0JBQWdCOztBQUVyRjtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHNFQUFnQjtBQUN4Qyx3QkFBd0Isc0VBQWdCLDhCQUE4QixpQkFBaUI7O0FBRXZGO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsc0VBQWdCO0FBQzNDLDJCQUEyQixzRUFBZ0IsOEJBQThCLG9CQUFvQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzRUFBZ0I7QUFDbkMsbUJBQW1CLHNFQUFnQiw4QkFBOEIsWUFBWTs7QUFFN0U7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzRUFBZ0I7QUFDbkMsbUJBQW1CLHNFQUFnQiw4QkFBOEIsWUFBWTs7QUFFN0U7QUFDQTs7O0FBR0E7QUFDQSw4QkFBOEIsc0VBQWdCO0FBQzlDLDhCQUE4QixzRUFBZ0IsOEJBQThCLHVCQUF1Qjs7QUFFbkc7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzRUFBZ0I7QUFDckMscUJBQXFCLHNFQUFnQiw4QkFBOEIsY0FBYzs7QUFFakY7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0Isc0VBQWdCO0FBQ3hDLHdCQUF3QixzRUFBZ0IsOEJBQThCLGlCQUFpQjs7QUFFdkYsaUNBQWlDLHdFQUFrQjs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0VBQWdCO0FBQzVDLDRCQUE0QixzRUFBZ0IsOEJBQThCLHFCQUFxQjs7QUFFL0YsdUNBQXVDLHdFQUFrQjs7QUFFekQ7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0EsdUJBQXVCLHNFQUFnQjtBQUN2Qyx1QkFBdUIsc0VBQWdCLDhCQUE4QixnQkFBZ0I7O0FBRXJGLGlDQUFpQyx3RUFBa0I7O0FBRW5EO0FBQ0E7O0FBRUE7OztBQUdBLDBCQUEwQix3RUFBa0I7O0FBRTVDLHVCQUF1QixzRUFBZ0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBZTtBQUMzQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEIsa0VBQW1COztBQUU3QztBQUNBOztBQUVBLElBQUksa0VBQWtCO0FBQ3RCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS3lFO0FBQ3JCO0FBQ3JCO0FBQ2U7QUFDd0I7QUFDekI7QUFDQztBQUNMOzs7Ozs7QUFNekM7O0FBRUE7QUFDQSxvQkFBb0IsK0NBQVE7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0VBQWdCO0FBQ25DOztBQUVBO0FBQ0Esb0JBQW9CLHdFQUFrQjtBQUN0QyxtQkFBbUIsd0VBQWtCOztBQUVyQyxrQkFBa0Isd0VBQWtCO0FBQ3BDLHFCQUFxQix3RUFBa0I7O0FBRXZDO0FBQ0Esb0JBQW9CLHNFQUFnQjtBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLHNFQUFnQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx1QkFBdUIsc0VBQWdCO0FBQ3ZDO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQWdCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzRUFBZ0I7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QixzRUFBZ0I7QUFDeEM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsc0VBQWdCO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIsc0VBQWdCO0FBQzVDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHdFQUFrQjs7QUFFOUM7QUFDQSx3QkFBd0Isc0VBQWdCO0FBQ3hDOztBQUVBLG9DQUFvQyx3RUFBa0I7O0FBRXRELGtCQUFrQixrQkFBa0I7QUFDcEMsaUNBQWlDLHNFQUFnQixzQ0FBc0MsWUFBWTtBQUNuRztBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHNFQUFnQiwyQkFBMkIsWUFBWTs7O0FBR3hGLHdCQUF3Qix3RUFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQSxnQ0FBZ0Msd0VBQWtCOztBQUVsRDtBQUNBLDRCQUE0QixzRUFBZ0I7QUFDNUM7O0FBRUEsd0NBQXdDLHdFQUFrQjs7QUFFMUQsa0JBQWtCLHNCQUFzQjtBQUN4QyxpQ0FBaUMsc0VBQWdCLHNDQUFzQyxnQkFBZ0I7QUFDdkc7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxzRUFBZ0IsMkJBQTJCLGdCQUFnQjs7Ozs7QUFLNUYsd0JBQXdCLHdFQUFrQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EsMkJBQTJCLHdFQUFrQjs7QUFFN0M7QUFDQSx1QkFBdUIsc0VBQWdCO0FBQ3ZDOztBQUVBLG1DQUFtQyx3RUFBa0I7O0FBRXJELGtCQUFrQixpQkFBaUI7QUFDbkMsaUNBQWlDLHNFQUFnQixzQ0FBc0MsV0FBVztBQUNsRztBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHNFQUFnQiwyQkFBMkIsV0FBVzs7QUFFdkYsd0JBQXdCLHdFQUFrQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUFnQjtBQUNwQzs7QUFFQSxvQkFBb0Isc0VBQWdCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUFnQjtBQUNwQzs7QUFFQSxvQkFBb0Isc0VBQWdCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzRUFBZ0I7QUFDdkM7O0FBRUEsdUJBQXVCLHNFQUFnQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHNFQUFnQjtBQUNyQztBQUNBO0FBQ0EsbUJBQW1CLHNFQUFnQjs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzRUFBZ0I7O0FBRXZDO0FBQ0E7QUFDQSw2QkFBNkIsK0NBQVE7O0FBRXJDLDhCQUE4QixrRUFBbUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRSxzQkFBc0I7OztBQUd0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWtCO0FBQzlCO0FBQ0E7QUFDQSxZQUFZLCtEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBLElBQUkscUVBQW9CO0FBQ3hCO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBYTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrRUFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xaeUU7QUFDSDtBQUNaO0FBQ047OztBQUdwRDs7QUFFQTtBQUNBLDBCQUEwQixrRUFBbUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrRUFBbUI7QUFDM0Msb0JBQW9CLGlCQUFpQjtBQUNyQyx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5RUFBc0I7QUFDcEQsWUFBWSxxRUFBb0I7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQixPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDdEI7QUFDeUI7QUFDTTtBQUNOO0FBQ0g7Ozs7O0FBSzNDLDhEQUFlO0FBQ2YseURBQWlCO0FBQ2pCLHNFQUFzQjtBQUN0Qiw0REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvYWxlcmdpYXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Fub21hbGlhcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvY2FyaWVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9kZXNhcnJvbGxvLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9kaWVudGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9kaWVudGVzT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VuY2lhVHJhbnN0b3Juby5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZW5mZXJtZWRhZGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lc3RvbWF0aXRpcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZ2VuZXJhbGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9naW5naXZpdGlzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9oYWJpdG9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9sYWJpb3NPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbGVuZ3VhLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9sdXhhY2lvbi5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbWF4aWxhcmVzT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3B1bHBhLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9xdWlzdGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9zYWxpdmFsZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3Rlamlkb3NPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvdHJhdGFtaWVudG9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZGF0ZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kb21DcmVhdG9yRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2Rvd25sb2FkLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL21vZGFsQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvcGFjaWVudGUuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvcGF0aWVudEZpbGVNb2RhbC5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9wYXRpZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvcGF0aWVudFRhYmxlLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0td2hpdGU6I0YzRjlGQjtcXG4gICAgLS1ibHVlOiM4N0MwQ0Q7XFxuICAgIC0tbmF2eTojMjI2NTk3O1xcbiAgICAtLWNvbGQ6IzExM0Y2NztcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5oZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAzdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogIzExM0Y2NyAycHggc29saWQ7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXQ6Zm9jdXMsLnNlYXJjaElucHV0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5cXG4ubWFpblRhYmxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuXFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG5cXG50aCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsdGh7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsMTkwLDE5MCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxudGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxudGhlYWQsIHRib2R5IHRyIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG5cXG50Ym9keSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxudGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4gICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA5MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG59XFxuICBcXG4ubW9kYWxIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGFsSGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG5cXG5cXG4ucGF0aWVudEZvcm1Ub3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wYXRpZW50Rm9ybVJpZ2h0LCAucGF0aWVudEZvcm1MZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5mb3JtVGV4dElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubm90ZUJveHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5wYXRpZW50Rm9ybUJvdHRvbXtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciwgLmhhYml0b3NDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXJ7XFxuICAgIGZsZXg6IDU7XFxufVxcblxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAgID4gLmZvcm1UaXRsZSwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxlLCAuaGFiaXRvc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBmb250LXNpemU6IGNhbGMoMXB4ICsgMXZ3KTtcXG59XFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFBhdGllbnRGaWxlICovXFxuLnBhdGllbnRGaWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGF0aWVudEZpbGVUb3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUJvdHRvbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnBhdGllbnRGaWVsZFZhbHVle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGVmdCwucGF0aWVudEZpbGVSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib3R0b21WYWx1ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkZWxldGVCdXR0b257XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNkZWxldGVCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rvd25sb2FkQnV0dG9uLCNsb2FkTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuI2Rvd25sb2FkQnV0dG9uOmhvdmVyLCNsb2FkTGFiZWw6aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4jbG9hZEJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmV4cG9ydENvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxl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O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0td2hpdGU6I0YzRjlGQjtcXG4gICAgLS1ibHVlOiM4N0MwQ0Q7XFxuICAgIC0tbmF2eTojMjI2NTk3O1xcbiAgICAtLWNvbGQ6IzExM0Y2NztcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5oZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAzdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogIzExM0Y2NyAycHggc29saWQ7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXQ6Zm9jdXMsLnNlYXJjaElucHV0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5cXG4ubWFpblRhYmxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuXFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG5cXG50aCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsdGh7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsMTkwLDE5MCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxudGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxudGhlYWQsIHRib2R5IHRyIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG5cXG50Ym9keSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxudGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4gICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA5MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG59XFxuICBcXG4ubW9kYWxIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGFsSGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG5cXG5cXG4ucGF0aWVudEZvcm1Ub3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wYXRpZW50Rm9ybVJpZ2h0LCAucGF0aWVudEZvcm1MZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5mb3JtVGV4dElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubm90ZUJveHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5wYXRpZW50Rm9ybUJvdHRvbXtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciwgLmhhYml0b3NDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXJ7XFxuICAgIGZsZXg6IDU7XFxufVxcblxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAgID4gLmZvcm1UaXRsZSwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxlLCAuaGFiaXRvc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBmb250LXNpemU6IGNhbGMoMXB4ICsgMXZ3KTtcXG59XFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFBhdGllbnRGaWxlICovXFxuLnBhdGllbnRGaWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGF0aWVudEZpbGVUb3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUJvdHRvbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnBhdGllbnRGaWVsZFZhbHVle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGVmdCwucGF0aWVudEZpbGVSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib3R0b21WYWx1ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkZWxldGVCdXR0b257XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNkZWxldGVCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rvd25sb2FkQnV0dG9uLCNsb2FkTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuI2Rvd25sb2FkQnV0dG9uOmhvdmVyLCNsb2FkTGFiZWw6aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4jbG9hZEJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmV4cG9ydENvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFzcGlyaW5hXCJdLFtcIkxhdGV4XCJdLFtcIkxpZG9jYWluYSBvIEFuZXN0ZXNpY29zXCJdLFtcIk90cmEgYWxlcmdpYVwiXSxbXCJQZW5pY2lsaW5hIHUgT3Ryb3MgQW50aWJpb3RpY29zXCJdLFtcIlN1bGZhc1wiXSxbXCJZb2RvXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFub21hbGlhIGRlbnRvZmFjaWFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcG9zaWNpb24gZGVsIGRpZW50ZVwiLFwiQXBpbmFtaWVudG8uIERlc3BsYXphbWllbnRvLiBEaWFzdGVtYS4gRXNwYWNpYW1pZW50byBhbm9ybWFsLiBSb3RhY2lvbi4gVHJhbnNwb3NpY2lvbi4gRGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIGNvbiBwb3NpY2lvbiBlY3RvcGljYS4gRXhjbHV5ZTogZGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIHNpbiBwb3NpY2lvbiBhbm9ybWFsLlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcmVsYWNpb24gZW50cmUgbG9zIGFyY29zIGRlbnRhcmlvc1wiLFwiQW50ZXBvc2ljaW9uLiBEZXN2aWFjaW9uIGRlIGxhIGxpbmVhIG1lZGlhIGRlbCBhcmNvIGRlbnRhcmlvLiBEaXN0b2NsdXNpb24uIE1lc2lvY2x1c2lvbi4gTW9yZGlkYSBhYmllcnRhLiBNb3JkaWRhIGNydXphZGEuIE9jbHVzaW9uIGxpbmd1YWwgcG9zdGVyaW9yIGRlIGxvcyBkaWVudGVzIG1heGlsYXJlcy4gU29icmVtb3JkaWRhIChleGNlc2l2YSkgaG9yaXpvbnRhbCwgcHJvZnVuZGEgbyB2ZXJ0aWNhbC5cIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHJlbGFjaW9uIG1heGlsb2Jhc2lsYXJcIixcIkFzaW1ldHJpYSBkZSBsYSBtYW5kaWJ1bGEuIFByb2duYXRpc21vLiBSZXRyb2duYXRpc21vLlwiXSxbXCJBbm9tYWxpYXMgZGVudG9mYWNpYWxlcyBmdW5jaW9uYWxlc1wiLFwiQ2llcnJlIGFub3JtYWwgZGUgbG9zIG1heGlsYXJlcy4gTWFsb2NsdXNpb24gZGViaWRhIGEgZGVnbHVjaW9uIGFub3JtYWwsIGhhYml0byBkaWdpdGFsLCBsYWJpYWwgbyBsaW5ndWFsLCByZXNwaXJhY2lvbiBidWNhbC4gRXhjbHV5ZSBicnV4aXNtbyB5IHJlY2hpbmFtaWVudG8gZGUgZGllbnRlcy5cIl0sW1wiQW5vbWFsaWFzIGV2aWRlbnRlcyBkZWwgdGFtYW5vIGRlIGxvcyBtYXhpbGFyZXNcIixcIkhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBkZWwgbWF4aWxhciBvIG1hbmRpYnVsYS4gTWFjcm9nbmFjaWEuIE1pY3JvZ25hY2lhLiBFeGNsdXllOiBhY3JvbWVnYWxpYSB5IHNpbmRyb21lIGRlIFBpZXJyZSBSb2Jpbi5cIl0sW1wiTWFsb2NsdXNpb24gZGUgdGlwbyBubyBlc3BlY2lmaWNhZG9cIixcIlwiXSxbXCJPdHJhcyBhbm9tYWxpYXMgZGVudG9mYWNpYWxlc1wiLFwiXCJdLFtcIlRyYXN0b3Jub3MgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyXCIsXCJDYXN0Ye+/vWV0ZW8gbWF4aWxhci4gQ29tcGxlam8gbyBTaW5kcm9tZSBkZSBDb3N0ZW4uIFNpbmRyb21lIGRlIGRpc2Z1bmNpb24gZG9sb3Jvc2EgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYW5kaWJ1bGFyLiBUcmFzdG9ybm8gZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyLiBFeGNsdXllOiBlc2d1aW5jZSBvIGx1eGFjaW9uIHJlY2llbnRlIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhci5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQ2FyaWVzIGRlIGxhIGRlbnRpbmFcIixcIlwiXSxbXCJDYXJpZXMgZGVsIGNlbWVudG9cIixcIlwiXSxbXCJDYXJpZXMgZGVudGFsIG5vIGVzcGVjaWZpY2FkYVwiLFwiXCJdLFtcIkNhcmllcyBkZW50YXJpYSBkZXRlbmlkYVwiLFwiXCJdLFtcIkNhcmllcyBsaW1pdGFkYSBhbCBlc21hbHRlXCIsXCJNYW5jaGFzIGJsYW5jYXMgKGNhcmllcyBpbmNpcGllbnRlKVwiXSxbXCJPdHJhcyBjYXJpZXMgZGVudGFsZXNcIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBbHRlcmFjaW9uZXMgZW4gbGEgZXJ1cGNpb24gZGVudGFyaWFcIixcIkNhaWRhIHByZW1hdHVyYSBkZSBsb3MgZGllbnRlcyBwcmltYXJpb3MuIERlbnRpY2lvbiBwcmVjb3ouIERpZW50ZSBuYXRhbC4gRGllbnRlIG5lb25hdGFsLiBEaWVudGUgcHJpbWFyaW8gKHBlcnNpc3RlbnRlKSByZXRlbmlkby4gRXJ1cGNpb24gcHJlbWF0dXJhIGRlIGRpZW50ZS5cIl0sW1wiQWx0ZXJhY2lvbmVzIGVuIGxhIGZvcm1hY2lvbiBkZW50YXJpYVwiLFwiQXBsYXNpYSBlIGhpcG9wbGFzaWEgZGVsIGNlbWVudG8uIERpZW50ZSBkZSBUdXJuZXIuIERpbGFjZXJhY2lvbiBkZW50YXJpYS4gSGlwb3BsYXNpYSBkZWwgZXNtYWx0ZS4gT2RvbnRvZGlzcGxhc2lhIHJlZ2lvbmFsLiBFeGNsdXllOiBkaWVudGVzIGRlIEh1dGNoaW5zb24geSBtb2xhcmVzIG1vcnVsb2lkZXMgZW4gbGEgc2lmaWxpcyBjb25nZW5pdGEvIGRpZW50ZXMgbW90ZWFkb3MuXCJdLFtcIkFsdGVyYWNpb25lcyBoZXJlZGl0YXJpYXMgZGUgbGEgZXN0cnVjdHVyYSBkZW50YXJpYSwgbm8gY2xhc2lmaWNhZGFzIGVuIG90cmEgcGFydGVcIixcIkFtZWxvZ2VuZXNpcy4gRGVudGlub2dlbmVzaXMuIE9kb250b2dlbmVzaXMuIERpZW50ZXMgZW4gY29uY2hhLiBEaXNwbGFzaWEgZGVudGluYWwuXCJdLFtcIkFub2RvbmNpYVwiLFwiSGlwb2RvbmNpYS4gT2xpZ29kb25jaWEuXCJdLFtcIkFub21hbGlhcyBkZWwgdGFtYe+/vW8geSBkZSBsYSBmb3JtYSBkZWwgZGllbnRlXCIsXCJDb25jcmVzY2VuY2lhLiBGdXNpb24uIEdlbWluYWNpb24uIERpZW50ZXMgZW4gZm9ybWEgZGUgY2xhdmlqYSAoY29uaWNvcykuIERpZW50ZXMgZXZhZ2luYWRvcy4gRGVucyBpbiBkZW50ZS4gTWFjcm9kb25jaWEuIE1pY3JvZG9uY2lhLiBQZXJsYXMgZGVsIGVzbWFsdGUuIFRhdXJvZG9udGlzbW8uIFR1YmVyY3VsbyBwYXJhbW9sYXIuIEV4Y2x1eWU6IHR1YmVyY3VsbyBkZSBDYXJhYmVsbGkuXCJdLFtcIkRpZW50ZXMgbW90ZWFkb3NcIixcIkVzbWFsdGUgbW90ZWFkby4gRmx1b3Jvc2lzIGRlbnRhbC4gT3BhY2lkYWQgbm8gZmx1b3JpY2EgZGVsIGVzbWFsdGUuIEV4Y2x1eWU6IGRlcG9zaXRvcyAoYWRoZXJlbmNpYXMpIGVuIGxvcyBkaWVudGVzLlwiXSxbXCJEaWVudGVzIHN1cGVybnVtZXJhcmlvc1wiLFwiQ3VhcnRvIG1vbGFyLiBEaWVudGVzIHN1cGxlbWVudGFyaW9zLiBEaXN0b21vbGFyLiBNZXNpb2RlbnMuIFBhcmFtb2xhci5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgZGllbnRlc1wiLFwiQWx0ZXJhY2lvbiBkZWwgY29sb3IgZGVsIGRpZW50ZSBkdXJhbnRlIHN1IGZvcm1hY2lvbi4gTWFuY2hhcyBpbnRyaW5zZWNhcyBkZSBsb3MgZGllbnRlcyBTQUkuXCJdLFtcIlNpbmRyb21lIGRlIGxhIGVydXBjaW9uIGRlbnRhcmlhXCIsXCJcIl0sW1wiVHJhc3Rvcm5vIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIG5vIGVzcGVjaWZpY2FkbyBcIixcIlRyYXN0b3JubyBkZSBsYSBvZG9udG9nZW5lc2lzIFNBSS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRGllbnRlcyBpbXBhY3RhZG9zXCIsXCJEaWVudGUgcXVlIG5vIGhhIGVydXBjaW9uYWRvIGRlYmlkbyBhIGxhIG9ic3RydWNjaW9uIHBvciBvdHJvIGRpZW50ZS5cIl0sW1wiRGllbnRlcyBpbmNsdWlkb3MgXCIsXCJEaWVudGUgcXVlIG5vIGhhIGVydXBjaW9uYWRvIHNpbiBvYnN0cnVjY2lvbiBwb3Igb3RybyBkaWVudGUuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkF0cm9maWEgZGVsIHJlYm9yZGUgYWx2ZW9sYXIgZGVzZGVudGFkb1wiLFwiXCJdLFtcIkV4Zm9saWFjaW9uIGRlIGxvcyBkaWVudGVzIGRlYmlkYSBhIGNhdXNhcyBzaXN0ZW1pY2FzXCIsXCJcIl0sW1wiT3RyYXMgYWZlY2Npb25lcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyBkaWVudGVzIHkgZGUgc3VzIGVzdHJ1Y3R1cmFzIGRlIHNvc3RlblwiLFwiQWdyYW5kYW1pZW50byBkZWwgcmVib3JkZSBhbHZlb2xhci4gT2RvbnRhbGdpYS4gUHJvbG9uZ2FjaW9uIGFsdmVvbGFyIGlycmVndWxhci5cIl0sW1wiUGVyZGlkYSBkZSBkaWVudGVzIGRlYmlkYSBhIGFjY2lkZW50ZSwgZXh0cmFjY2lvbiBvIGVuZmVybWVkYWQgcGVyaW9kb250YWwgbG9jYWxcIixcIlwiXSxbXCJSYWl6IGRlbnRhbCByZXRlbmlkYVwiLFwiXCJdLFtcIlRyYXN0b3Jub3MgZGUgbG9zIGRpZW50ZXMgeSBkZSBzdXMgZXN0cnVjdHVyYXMgZGUgc29zdGVuLCBubyBlc3BlY2lmaWNhZG9cIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJIaXBlcnBsYXNpYSBnaW5naXZhbFwiLFwiRmlicm9tYXRvc2lzIGdpbmdpdmFsLlwiXSxbXCJMZXNpb25lcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGEgYXNvY2lhZGFzIGNvbiB0cmF1bWF0aXNtb1wiLFwiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZWwgcmVib3JkZSBhbHZlb2xhciBlZGVudHVsbyAoaGlwZXJwbGFzaWEgcHJvdGVzaWNhKS5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBlc3BlY2lmaWNhZG9zIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYVwiLFwiRXB1bGlzIGRlIGNlbHVsYXMgZ2lnYW50ZXMuIEVwdWxpcyBmaWJyb3NvLiBHcmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLiBHcmFudWxvbWEgcGlvZ2VubyBkZSBsYSBlbmNpYS4gUmVibGFuZGVjaW1pZW50byBkZWwgcmVib3JkZS5cIl0sW1wiUmV0cmFjY2lvbiBnaW5naXZhbFwiLFwiUmVjZXNpb24gZ2luZ2l2YWwgbG9jYWxpemFkYS4gUmVjZXNpb24gZ2luZ2l2YWwgZ2VuZXJhbGl6YWRhLiBSZWNlc2lvbiBnaW5naXZhbCBwb3N0aW5mZWNjaW9zYS4gUmVjZXNpb24gZ2luZ2l2YWwgcG9zdG9wZXJhdG9yaWEuXCJdLFtcIlRyYXN0b3JubyBubyBlc3BlY2lmaWNhZG8gZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhIFwiLFwiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFuZ2luYSBkZSBQZWNob1wiXSxbXCJBcnRyaXRpc1wiXSxbXCJBc21hXCJdLFtcIkF0YXF1ZSBDYXJkaWFjb1wiXSxbXCJDYW5jZXJcIl0sW1wiRGlhYmV0ZXMgVGlwbyAxXCJdLFtcIkRpYWJldGVzIFRpcG8gMlwiXSxbXCJEb2xvciBlbiBQZWNob1wiXSxbXCJFbmZlcm1lZGFkIGRlbCBIaWdhZG9cIl0sW1wiRW5mZXJtZWRhZCBkZWwgUmnDsW9uXCJdLFtcIkVuZmlzZW1hXCJdLFtcIkhlcGF0aXRpc1wiXSxbXCJIaXBlcnRlbnNpb25cIl0sW1wiSGlwb2dsdWNlbWlhXCJdLFtcIkhpcG90ZW5zaW9uXCJdLFtcIk5pbmd1bmEgZW5mZXJtZWRhZFwiXSxbXCJPdHJhIGVuZmVybWVkYWRcIl0sW1wiUHJvYmxlbWEgZGUgVGlyb2lkZXNcIl0sW1wiUHJvYmxlbWFzIEVzdG9tYWNhbGVzXCJdLFtcIlNJREEvIFZJSFwiXSxbXCJUdWJlcmN1bG9zaXNcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQ2VsdWxpdGlzIHkgYWJzY2VzbyBkZSBsYSBib2NhXCIsXCJBYnNjZXNvcyBzdWJtYW5kaWJ1bGFyZXMuIENlbHVsaXRpcyBkZWwgcGlzbyBkZSBsYSBib2NhLiBFeGNsdXllIGFic2Nlc28gZGUgZ2xhbmR1bGEgc2FsaXZhbCBvIGxlbmd1YSwgYWJzY2VzbyBwZXJpYXBpY2FsLCBhYnNjZXNvIHBlcmlvZG9udGFsLCBhYnNjZXNvIHBlcml0b25zaWxhci5cIl0sW1wiRXN0b21hdGl0aXMgYWZ0b3NhIHJlY3VycmVudGVcIixcIkFmdGFzIGRlIEJlZG5hci4gRXN0b21hdGl0aXMgYWZ0b3NhIG1heW9yIG8gbWVub3IuIEVzdG9tYXRpdGlzIGhlcnBldGlmb3JtZS4gUGVyaWFkZW5pdGlzIG11Y29zYSBuZWNyb3RpY2EgcmVjdXJyZW50ZS4gVWxjZXJhIGFmdG9zYSByZWN1cnJlbnRlLlwiXSxbXCJPdHJhcyBmb3JtYXMgZGUgZXN0b21hdGl0aXNcIixcIkVzdG9tYXRpdGlzIHByb3Rlc2ljYSwgdWxjZXJhdGl2YSwgdmVzaWN1bG9zYS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQU5PTUFMSUFTIERFTlRPRkFDSUFMRVMgKElOQ0xVU08gTEEgTUFMT0NMVVNJT04pLlwiXSxbXCJDQVJJRVMgREVOVEFMXCJdLFtcIkRJRU5URVMgSU5DTFVJRE9TIEUgSU1QQUNUQURPU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEEgTEVOR1VBXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBQVUxQQSBZIERFIExPUyBURUpJRE9TIFBFUklBUElDQUxFU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEFTIEdMQU5EVUxBUyBTQUxJVkFMRVNcIl0sW1wiRVNUT01BVElUSVMgWSBMRVNJT05FUyBBRklORVNcIl0sW1wiR0lOR0lWSVRJUyBZIEVORkVSTUVEQURFUyBQRVJJT0RPTlRBTEVTXCJdLFtcIkxVWEFDSU9OLCBFU0dVSU5DRSBZIFRPUkNFRFVSQSBERSBBUlRJQ1VMQUNJT05FUyBZIERFIExJR0FNRU5UT1MgREUgTEEgQ0FCRVpBXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTEFCSU9TIFkgREUgTEEgTVVDT1NBIEJVQ0FMXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTUFYSUxBUkVTXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgVEVKSURPUyBEVVJPUyBERSBMT1MgRElFTlRFU1wiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExBIEVOQ0lBIFkgREUgTEEgWk9OQSBFREVOVFVMQVwiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExPUyBESUVOVEVTIFkgREUgU1VTIEVTVFJVQ1RVUkFTIERFIFNPU1RFTlwiXSxbXCJRVUlTVEVTIERFIExBIFJFR0lPTiBCVUNBTCwgTk8gQ0xBU0lGSUNBRE9TIEVOIE9UUkEgUEFSVEVcIl0sW1wiVFJBU1RPUk5PUyBERUwgREVTQVJST0xMTyBZIERFIExBIEVSVVBDSU9OIERFIExPUyBESUVOVEVTXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkdpbmdpdml0aXMgYWd1ZGFcIixcIkV4Y2x1eWUgZ2luZ2l2aXRpcyB1bGNlcm9uZWNyb3RpY2EgYWd1ZGEgeSBnaW5naXZvZXN0b21hdGl0aXMgaGVycGV0aWNhXCJdLFtcIkVuZmVybWVkYWQgZGVsIHBlcmlvZG9udG8gbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiR2luZ2l2aXRpcyBjcm9uaWNhXCIsXCJHaW5naXZpdGlzIGNyb25pY2EgZGVzY2FtYXRpdmEsIGdpbmdpdml0aXMgY3JvbmljYSBoaXBlcnBsYXNpY2EsIGdpbmdpdml0aXMgY3JvbmljYSBtYXJnaW5hbCBzaW1wbGUsIGdpbmdpdml0aXMgY3JvbmljYSB1bGNlcmF0aXZhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgcGVyaW9kb250YWxlc1wiLFwiXCJdLFtcIlBlcmlvZG9udGl0aXMgYWd1ZGFcIixcIkFic2Nlc28gcGFyYWRlbnRhbC4gQWJzY2VzbyBwZXJpb2RvbnRhbC4gUGVyaWNvcm9uaXRpcyBhZ3VkYS4gRXhjbHV5ZTogYWJzY2VzbyBwZXJpYXBpY2FsIGNvbiBmaXN0dWxhLyBwZXJpb2RvbnRpdGlzIGFwaWNhbCBhZ3VkYS5cIl0sW1wiUGVyaW9kb250aXRpcyBjcm9uaWNhXCIsXCJQZXJpY29yb25pdGlzIGNyb25pY2EuIFBlcmlvZG9udGl0aXMgc2ltcGxlLiBQZXJpb2RvbnRpdGlzIGNvbXBsaWNhZGEuXCJdLFtcIlBlcmlvZG9udG9zaXMgKGp1dmVuaWwpXCIsXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRnVtYXJcIl0sW1wiQWxjb2hvbFwiXSxbXCJDb2NhaW5hXCJdLFtcIk90cmFzIGRyb2dhc1wiXSxbXCJPdHJvcyBoYWJpdG9zXCJdLFtcIk5pbmd1biBoYWJpdG9cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRW5mZXJtZWRhZGVzIGRlIGxvcyBsYWJpb3NcIixcIlBlcmxlY2hlIG8gcXVlaWxpdGlzIGFuZ3VsYXIuIFF1ZWlsaXRpcyBhbmd1bGFyLCBleGZvbGlhdGl2YSwgZ2xhbmR1bGFyLiBRdWVpbG9kaW5pYS4gUXVlaWxvc2lzLiBFeGNsdXllIGFyaWJvZmxhdmlub3NpcyAocG9yIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hKSwgUGVybGVjaGUgZGViaWRvIGEgY2FuZGlkaWFzaXMsIFBlcmxlY2hlIGRlYmlkbyBhIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hLiBRdWVpbGl0aXMgZGViaWRhIGEgdHJhc3Rvcm5vcyByZWxhY2lvbmFkb3MgY29uIGxhIHJhZGlhY2lvbi5cIl0sW1wiRmlicm9zaXMgZGUgbGEgc3VibXVjb3NhIGJ1Y2FsXCIsXCJcIl0sW1wiR3JhbnVsb21hIHkgbGVzaW9uZXMgc2VtZWphbnRlcyBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkdyYW51bG9tYSBlb3Npbm9maWxvLiBHcmFudWxvbWEgcGlvZ2VuaWNvLiBYYW50b21hIHZlcnJ1Z2lmb3JtZS5cIl0sW1wiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkV4Y2x1eWUgaGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSB6b25hIGVkZW50dWxhIChoaXBlcnBsYXNpYSBwcm90ZXNpY2EpXCJdLFtcIkxldWNvcGxhc2lhIHBpbG9zYVwiLFwiXCJdLFtcIkxldWNvcGxhc2lhIHkgb3RyYXMgYWx0ZXJhY2lvbmVzIGRlbCBlcGl0ZWxpbyBidWNhbCwgaW5jbHV5ZW5kbyBsYSBsZW5ndWFcIixcIkVyaXRyb3BsYXNpYS4gTGV1Y29lZGVtYS4gTGV1Y29xdWVyYXRvc2lzIG5pY290aW5pY2EgcGFsYXRpbmEuIFBhbGFkYXIgZGVsIGZ1bWFkb3IuIEV4Y2x1eWUgbGV1Y29wbGFzaWEgcGlsb3NhLlwiXSxbXCJNb3JkZWR1cmEgZGVsIGxhYmlvIHkgZGUgbGEgbWVqaWxsYVwiLFwiXCJdLFtcIk90cmFzIGxlc2lvbmVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgbXVjb3NhIGJ1Y2FsXCIsXCJNdWNpbm9zaXMgYnVjYWwgZm9jYWxcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQXRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBsaW5ndWFsZXNcIixcIkdsb3NpdGlzIGF0cm9maWNhXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsYSBsZW5ndWEsIG5vIGVzcGVjaWZpY2FkYS5cIixcIkdsb3NvcGF0aWFcIl0sW1wiR2xvc2l0aXNcIixcIkFic2Nlc28gZGUgbGEgbGVuZ3VhLiBVbGNlcmEgdHJhdW1hdGljYSBkZSBsYSBsZW5ndWEuIEV4Y2x1eWUgZ2xvc2l0aXMgYXRyb2ZpY2EuXCJdLFtcIkdsb3NpdGlzIHJvbWJvaWRlYSBtZWRpYW5hXCIsXCJcIl0sW1wiR2xvc29kaW5pYVwiLFwiR2xvc29waXJvc2lzLiBMZW5ndWEgZG9sb3Jvc2EuXCJdLFtcIkhpcGVydHJvZmlhIGRlIGxhcyBwYXBpbGFzIGxpbmd1YWxlc1wiLFwiSGlwZXJ0cm9maWEgZGUgbGFzIHBhcGlsYXMgZm9saWFjZWFzLiBMZW5ndWEgbmVncmEgcGlsb3NhLiBMZW5ndWEgbmVncmEgdmVsbG9zYSwgTGVuZ3VhIHNhYnVycmFsLlwiXSxbXCJMZW5ndWEgZ2VvZ3JhZmljYVwiLFwiR2xvc2l0aXMgYXJlYXRhIGV4Zm9saWF0aXZhLiBHbG9zaXRpcyBtaWdyYXRvcmlhIGJlbmlnbmEuXCJdLFtcIkxlbmd1YSBwbGVnYWRhXCIsXCJMZW5ndWEgY29uIHN1cmNvcy4gTGVuZ3VhIGVzY3JvdGFsLiBMZW5ndWEgZmlzdXJhZGEuIEV4Y2x1eWUgbGVuZ3VhIGZpc3VyYWRhIGNvbmdlbml0YS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGRlIGxhIGxlbmd1YVwiLFwiQWdyYW5kYW1pZW50by4gQXRyb2ZpYS4gQ3JlbmFjaW9uIGRlIGxhIGxlbmd1YS4gSGlwZXJ0cm9maWEuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGUgYXJ0aWN1bGFjaW9uZXMgeSBsaWdhbWVudG9zIGRlIG90cmFzIHBhcnRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIGNhYmV6YVwiLFwiXCJdLFtcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGVsIG1heGlsYXJcIixcIkFydGljdWxhY2lvbiBvIGxpZ2FtZW50byB0ZW1wb3JvbWF4aWxhclwiXSxbXCJMdXhhY2lvbiBkZSBvdHJhcyBwYXJ0ZXMgeSBkZSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBjYWJlemFcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgY2FydGlsYWdvIHNlcHRhbCBkZSBsYSBuYXJpelwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBkaWVudGVcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgbWF4aWxhclwiLFwiTWFuZGlidWxhLiBNYXhpbGFyLiBUZW1wb3JvbWF4aWxhci5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWZlY2Npb25lcyBpbmZsYW1hdG9yaWFzIGRlIGxvcyBtYXhpbGFyZXNcIixcIk9zdGVpdGlzLiBPc3Rlb21pZWxpdGlzIG5lb25hdGFsLiBPc3Rlb3JyYWRpb25lY3Jvc2lzLiBQZXJpb3N0aXRpcywgU2VjdWVzdHJvIG9zZW8gZGUgbG9zIG1heGlsYXJlcy4gXCJdLFtcIkFsdmVvbGl0aXMgZGVsIG1heGlsYXJcIixcIkFsdmVvbG8gc2Vjby4gT3N0ZWl0aXMgYWx2ZW9sYXIuXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsb3MgbWF4aWxhcmVzLCBubyBlc3BlY2lmaWNhZGEuXCIsXCJcIl0sW1wiR3JhbnVsb21hIGNlbnRyYWwgZGUgY2VsdWxhcyBnaWdhbnRlc1wiLFwiRXhjbHV5ZSBncmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJEaXNwbGFzaWEgZmlicm9zYS4gRXhvc3Rvc2lzLiBIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgbWF4aWxhci4gSGlwZXJwbGFzaWEgbyBoaXBvcGxhc2lhIGNvbmRpbGFyIG1hbmRpYnVsYXIuIFF1ZXJ1YmlzbW8uXCJdLFtcIlRyYXN0b3Jub3MgZGVsIGRlc2Fycm9sbG8gZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBRdWlzdGUgZGUgU3RhZm5lLiBUb3J1cyBtYW5kaWJ1bGFyLiBUb3J1cyBwYWxhdGluby5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWJzY2VzbyBwZXJpYXBpY2FsIGNvbiBmaXN0dWxhXCIsXCJBYnNjZXNvIGRlbnRhbCBjb24gZmlzdHVsYS4gQWJzY2VzbyBkZW50b2FsdmVvbGFyIGNvbiBmaXN0dWxhLlwiXSxbXCJBYnNjZXNvIHBlcmlhcGljYWwgc2luIGZpc3R1bGFcIixcIkFic2Nlc28gZGVudGFsIHNpbiBmaXN0dWxhLiBBYnNjZXNvIGRlbnRvYWx2ZW9sYXIgc2luIGZpc3R1bGEuXCJdLFtcIkRlZ2VuZXJhY2lvbiBkZSBsYSBwdWxwYVwiLFwiQ2FsY2lmaWNhY2lvbmVzIGRlIGxhIHB1bHBhLiBQaWVkcmFzLiBEZW50aWN1bG9zLlwiXSxbXCJGb3JtYWNpb24gYW5vcm1hbCBkZSB0ZWppZG8gZHVybyBlbiBsYSBwdWxwYVwiLFwiRGVudGluYSBzZWN1bmRhcmlhIG8gaXJyZWd1bGFyLlwiXSxbXCJOZWNyb3NpcyBkZSBsYSBwdWxwYVwiLFwiR2FuZ3JlbmEgZGUgbGEgcHVscGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIHB1bHBhIHkgZGVsIHRlamlkbyBwZXJpYXBpY2FsXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgYWd1ZGEgb3JpZ2luYWRhIGVuIGxhIHB1bHBhXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgY3JvbmljYVwiLFwiR3JhbnVsb21hIGFwaWNhbCBvIHBlcmlhcGljYWwuIFBlcmlvZG9udGl0aXMgYXBpY2FsIGNyb25pY2EuXCJdLFtcIlB1bHBpdGlzXCIsXCJBYnNjZXNvLiBQb2xpcG8uIFB1bHBpdGlzIGFndWRhLiBQdWxwaXRpcyBjcm9uaWNhIChoaXBlcnBsYXNpY2EsIHVsY2VyYXRpdmEpLiBQdWxwaXRpcyBzdXB1cmF0aXZhLlwiXSxbXCJRdWlzdGUgcmFkaWN1bGFyXCIsXCJRdWlzdGUgYXBpY2FsIChwZXJpb2RvbnRhbCkuIFF1aXN0ZSBwZXJpYXBpY2FsLiBRdWlzdGUgcmFkaWN1bGFyIHJlc2lkdWFsLiBFeGNsdXllOiBxdWlzdGUgbGF0ZXJhbCBwZXJpb2RvbnRhbC5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT3Ryb3MgcXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIG5vIGNsYXNpZmljYWRvcyBlbiBvdHJhIHBhcnRlXCIsXCJQZXJsYSBkZSBFcHN0ZWluLiBRdWlzdGVzOiBkZXJtb2lkZSwgZXBpZGVybW9pZGUsIGxpbmZvZXBpdGVsaWFsLCBuYXNvYWx2ZW9sYXIsIG5hc29sYWJpYWwuXCJdLFtcIk90cm9zIHF1aXN0ZXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIG1heGlsYXIgYW5ldXJpc21hdGljby4gUXVpc3RlIG1heGlsYXIgaGVtb3JyYWdpY28uIFF1aXN0ZSBtYXhpbGFyIHRyYXVtYXRpY28uIEV4Y2x1eWUgcXVpc3RlIGRlIFN0YWZuZS4gUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBcIl0sW1wiUXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIHNpbiBvdHJhIGVzcGVjaWZpY2FjaW9uXCIsXCJcIl0sW1wiUXVpc3RlcyBkZSBsYXMgZmlzdXJhcyAobm8gb2RvbnRvZ2VuaWNvcylcIixcIlF1aXN0ZXMgZGVsOiBjYW5hbCBpbmNpc2l2bywgZ2xvYnVsb21heGlsYXIsIG5hc29wYWxhdGlubywgcGFsYXRpbm8gbWVkaW8sIHBhcGlsYSBwYWxhdGluYS5cIl0sW1wiUXVpc3RlcyBvcmlnaW5hZG9zIHBvciBlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIChxdWlzdGVzIG9kb250b2dlbmljb3MpXCIsXCJRdWVyYXRvcXVpc3RlLiBRdWlzdGVzOiBkZW50aWdlcm8sIGVydXBjaW9uIGRlbnRhcmlhLCBmb2xpY3VsYXIsIGdpbmdpdmFsLCBsYXRlcmFsIHBlcmlvZG9udGFsLCBwcmltb3JkaWFsLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBYnNjZXNvIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlwiXSxbXCJBbHRlcmFjaW9uZXMgZGUgbGEgc2VjcmVjaW9uIHNhbGl2YWxcIixcIkhpcG9zZWNyZWNpb24gc2FsaXZhbC4gUHRpYWxpc21vLiBYZXJvc3RvbWlhLiBFeGNsdXllIFNpbmRyb21lIGRlIFNq77+9Z3Jlbi5cIl0sW1wiQXRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiRW5mZXJtZWRhZCBkZSBnbGFuZHVsYSBzYWxpdmFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlNpYWxhZGVub3BhdGlhXCJdLFtcIkZpc3R1bGEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiRXhjbHV5ZSBmaXN0dWxhIGNvbmdlbml0YSBkZSBnbGFuZHVsYSBzYWxpdmFsLlwiXSxbXCJIaXBlcnRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiTXVjb2NlbGUgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiUXVpc3RlIG11Y29zbyBkZSBnbGFuZHVsYSBzYWxpdmFsIHBvciBleHRyYXZhc2FjaW9uIG8gcG9yIHJldGVuY2lvbi4gUmFudWxhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZGUgbGFzIGdsYW5kdWxhcyBzYWxpdmFsZXNcIixcIkVuZmVybWVkYWQgZGUgTWlrdWxpY3ouIEVzdGVub3NpcyBkZWwgY29uZHVjdG8gc2FsaXZhbC4gU2lhbG9tZXRhcGxhc2lhIG5lY3JvdGl6YW50ZS4gRXhjbHV5ZSBzaW5kcm9tZSBzZWNvIChTau+/vWdyZW4pLlwiXSxbXCJTaWFsb2FkZW5pdGlzXCIsXCJFeGNsdXllOiBmaWVicmUgdXZlb3Bhcm90aWRlYSAoSGVlcmZvcmR0KSwgcGFyb3RpZGl0aXMgaW5mZWNjaW9zYSAoZXBpZGVtaWNhKS5cIl0sW1wiU2lhbG9saXRpYXNpc1wiLFwiQ2FsY3VsbyBkZSBjb25kdWN0byBvIGRlIGdsYW5kdWxhIHNhbGl2YWwuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFicmFzaW9uIGRlIGxvcyBkaWVudGVzXCIsXCJBYnJhc2lvbiBwb3IgZGVudGlmcmljbywgaGFiaXRvcywgb2N1cGFjaW9uYWwsIHJpdHVhbCwgdHJhZGljaW9uYWwuIERlZmVjdG8gY3VuZWlmb3JtZSBkZSBsb3MgZGllbnRlcy5cIl0sW1wiQW5xdWlsb3NpcyBkZW50YWxcIixcIlwiXSxbXCJBdHJpY2lvbiBleGNlc2l2YSBkZSBsb3MgZGllbnRlc1wiLFwiRGVzZ2FzdGUgb2NsdXNhbC4gRGVzZ2FzdGUgcHJveGltYWwuXCJdLFtcIkNhbWJpb3MgcG9zdGVydXB0aXZvcyBkZWwgY29sb3IgZGUgbG9zIHRlamlkb3MgZGVudGFsZXMgZHVyb3NcIixcIkV4Y2x1eWUgZGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlcy5cIl0sW1wiRGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlc1wiLFwiQ2FsY3VsbyBkZW50YWwgc3VwcmFnaW5naXZhbCBvIHN1YmdpbmdpdmFsLiBEZXBvc2l0byBlbiBsb3MgZGllbnRlcyBhbmFyYW5qYWRvLCBiZXRlbCwgbWF0ZXJpYSBhbGJhLCBuZWdybywgdGFiYWNvLCB2ZXJkZS4gUGlnbWVudGFjaW9uIGRlIGxvcyBkaWVudGVzLlwiXSxbXCJFbmZlcm1lZGFkIG5vIGVzcGVjaWZpY2FkYSBkZSBsb3MgdGVqaWRvcyBkZW50YWxlcyBkdXJvc1wiLFwiXCJdLFtcIkVyb3Npb24gZGUgbG9zIGRpZW50ZXNcIixcIkRlYmlkYSBhIGRpZXRhLCBkcm9nYXMgeSBtZWRpY2FtZW50b3MsIHZvbWl0byBwZXJzaXN0ZW50ZSwgaWRpb3BhdGljYSwgb2N1cGFjaW9uYWwuXCJdLFtcIkhpcGVyY2VtZW50b3Npc1wiLFwiSGlwZXJwbGFzaWEgZGVsIGNlbWVudG8uXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyB0ZWppZG9zIGR1cm9zIGRlIGxvcyBkaWVudGVzXCIsXCJEZW50aW5hIHNlbnNpYmxlLiBFc21hbHRlIGlycmFkaWFkby5cIl0sW1wiUmVhYnNvcmNpb24gcGF0b2xvZ2ljYSBkZSBsb3MgZGllbnRlc1wiLFwiR3JhbnVsb21hIGludGVybm8gZGUgbGEgcHVscGEuIFJlYWJzb3JjaW9uIGV4dGVybmEgZGUgbG9zIGRpZW50ZXMuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFqdXN0ZSBvY2x1c2FsXCJdLFtcIkJpb3B1bHBlY3RvbWlhXCJdLFtcIkNhbmFsaXphY2lvbiBjb24gZXNwZWNpYWxpc3RhXCJdLFtcIkN1cmV0YWplIGFiaWVydG9cIl0sW1wiQ3VyZXRhamUgY2VycmFkb1wiXSxbXCJFeG9kb25jaWEgcXVpcnVyZ2ljYVwiXSxbXCJFeG9kb25jaWEgc2ltcGxlXCJdLFtcIkluc3RydWNjaW9uIGRlIHRlY25pY2EgZGUgY2VwaWxsYWRvXCJdLFtcIkludGVyY29uc3VsdGEgY29uIGNpcnVqYW5vIG1heGlsb2ZhY2lhbFwiXSxbXCJJbnRlcmNvbnN1bHRhIGNvbiBlbmRvZG9uY2lzdGFcIl0sW1wiTmVjcm9wdWxwZWN0b21pYVwiXSxbXCJPYnR1cmFjaW9uIHBlcm1hbmVudGVcIl0sW1wiT2J0dXJhY2lvbiB0ZW1wb3JhbFwiXSxbXCJPcGVyYXRvcmlhIERlbnRhbFwiXSxbXCJPcmllbnRhY2lvbiBzb2JyZSBzYWx1ZCBkZW50YWxcIl0sW1wiUHJvZmlsYXhpc1wiXSxbXCJQdWxwZWN0b21pYVwiXSxbXCJQdWxwb3RvbWlhXCJdLFtcIlJldGlybyBkZSBzdXR1cmFzXCJdLFtcIlNlZ3VpbWllbnRvIHBvc3QtZXh0cmFjY2lvblwiXSxbXCJTZWxsYWRvciBkZSBmb3NldGFzIHkgZmlzdXJhc1wiXSxbXCJTb2xpY2l0dWQgZGUgZXN0dWRpb3MgY29tcGxlbWVudGFyaW9zXCJdXSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2VuZXJhbCBmcm9tICcuL2V4Y2VsL2dlbmVyYWxlcy5jc3YnXG5pbXBvcnQgYWxlcmdpYXMgZnJvbSAnLi9leGNlbC9hbGVyZ2lhcy5jc3YnXG5pbXBvcnQgZGVudG9mYWNpYWwgZnJvbSAnLi9leGNlbC9hbm9tYWxpYXMuY3N2J1xuaW1wb3J0IGNhcmllcyBmcm9tICAgJy4vZXhjZWwvY2FyaWVzLmNzdidcbmltcG9ydCBkaWVudGVzIGZyb20gJy4vZXhjZWwvZGllbnRlcy5jc3YnXG5pbXBvcnQgZW5mZXJtZWRhZGVzIGZyb20gICAgJy4vZXhjZWwvZW5mZXJtZWRhZGVzLmNzdidcbmltcG9ydCBsZW5ndWEgZnJvbSAnLi9leGNlbC9sZW5ndWEuY3N2J1xuaW1wb3J0IHB1bHBhIGZyb20gJy4vZXhjZWwvcHVscGEuY3N2J1xuaW1wb3J0IHNhbGl2YWxlcyBmcm9tICcuL2V4Y2VsL3NhbGl2YWxlcy5jc3YnXG5pbXBvcnQgZXN0b21hdGl0aXMgZnJvbSAnLi9leGNlbC9lc3RvbWF0aXRpcy5jc3YnXG5pbXBvcnQgZ2luZ2l2aXRpcyBmcm9tICAnLi9leGNlbC9naW5naXZpdGlzLmNzdidcbmltcG9ydCBoYWJpdG9zIGZyb20gJy4vZXhjZWwvaGFiaXRvcy5jc3YnXG5pbXBvcnQgbHV4YWNpb24gZnJvbSAnLi9leGNlbC9sdXhhY2lvbi5jc3YnXG5pbXBvcnQgbGFiaW9zT3Ryb3MgZnJvbSAnLi9leGNlbC9sYWJpb3NPdHJvcy5jc3YnXG5pbXBvcnQgbWF4aWxhcmVzT3Ryb3MgZnJvbSAnLi9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YnXG5pbXBvcnQgdGVqaWRvc090cm9zIGZyb20gJy4vZXhjZWwvdGVqaWRvc090cm9zLmNzdidcbmltcG9ydCBlbmNpYVRyYW5zdG9ybm8gZnJvbSAnLi9leGNlbC9lbmNpYVRyYW5zdG9ybm8uY3N2J1xuaW1wb3J0IGRpZW50ZXNPdHJvcyBmcm9tICcuL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YnXG5pbXBvcnQgcXVpc3RlcyBmcm9tICcuL2V4Y2VsL3F1aXN0ZXMuY3N2J1xuaW1wb3J0IGRlc2Fycm9sbG8gZnJvbSAnLi9leGNlbC9kZXNhcnJvbGxvLmNzdidcbmltcG9ydCB0cmF0YW1pZW50b3MgZnJvbSAnLi9leGNlbC90cmF0YW1pZW50b3MuY3N2J1xuXG5cblxubGV0IGxvYWREYXRhID0gKCkgPT57XG5cbiAgICBsZXQgZ2VuZXJhbEFycmF5ID0gZGVBcnJheShnZW5lcmFsKVxuICAgIGxldCBhbGVyZ2lhc0FycmF5ID0gZGVBcnJheShhbGVyZ2lhcylcbiAgICBsZXQgZW5mZXJtZWRhZGVzQXJyYXkgPSBkZUFycmF5KGVuZmVybWVkYWRlcylcbiAgICBsZXQgaGFiaXRvc0FycmF5ID0gZGVBcnJheShoYWJpdG9zKVxuICAgIGxldCB0cmF0YW1pZW50b3NBcnJheSA9IGRlQXJyYXkodHJhdGFtaWVudG9zKVxuXG4gICAgXG4gICAgbGV0IGdlbmVyYWxlc0FycmF5ID0gW2RlbnRvZmFjaWFsLGNhcmllcyxkaWVudGVzLGxlbmd1YSxwdWxwYSxzYWxpdmFsZXMsZXN0b21hdGl0aXMsZ2luZ2l2aXRpcyxsdXhhY2lvbixsYWJpb3NPdHJvcyxtYXhpbGFyZXNPdHJvcyx0ZWppZG9zT3Ryb3MsZW5jaWFUcmFuc3Rvcm5vLGRpZW50ZXNPdHJvcyxxdWlzdGVzLGRlc2Fycm9sbG9dXG4gICAgXG4gICAgbGV0IG1haW5BcnJheSA9IFtnZW5lcmFsQXJyYXksYWxlcmdpYXNBcnJheSxlbmZlcm1lZGFkZXNBcnJheSxoYWJpdG9zQXJyYXksdHJhdGFtaWVudG9zQXJyYXksZ2VuZXJhbGVzQXJyYXldXG4gICAgXG4gICAgcmV0dXJuIG1haW5BcnJheVxufVxuXG5cblxuXG5cbi8qIEZ1bmN0aW9uIGluIGNoYXJnZSBvZiBjaGFuZ2luZyB0aGUgdmFsdWVzIGludG8gYSBub3JtYWwgYXJyYXkgKi9cbmxldCBkZUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IGRlQXJyYXllZD0gW10uY29uY2F0LmFwcGx5KFtdLCBhcnJheSk7XG4gICAgcmV0dXJuIGRlQXJyYXllZFxufVxuXG5cblxuZXhwb3J0e1xuICAgIGxvYWREYXRhXG59IiwibGV0IGdldFRvZGF5c0RhdGUgPSAoKSA9PiB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdG9kYXkgPSBkZCArICcvJyArIG1tICsgJy8nICsgeXl5eTtcblxuICAgIHJldHVybiB0b2RheVxufVxuXG5leHBvcnQge1xuICAgIGdldFRvZGF5c0RhdGVcbn0iLCJsZXQgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cblxubGV0IGNyZWF0ZURPTUNvbnRhaW5lciA9IChjbGFzc2xpc3ROYW1lLG5hbWUpID0+e1xuICAgIFxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NsaXN0TmFtZSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG4gICAgXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NsaXN0TmFtZSlcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpXG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuXG59XG5cbmxldCBjcmVhdGVET01FbGVtZW50ID0gKHR5cGUsY2xhc3NsaXN0LHRleHRDb250ZW50LG5hbWUpID0+e1xuICAgIFxuICAgICAgICBcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYodHlwZSA9PT0gJ2J1dHRvbicgfHwgdHlwZSA9PT0gJ2lucHV0Jyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfSR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpfWApXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1lbHNle1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZURPTUNvbnRhaW5lcixcbiAgICBjcmVhdGVET01FbGVtZW50XG59IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQge3NhdmVJbkxvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQge2FkZFBhdGllbnRUYWJsZX0gZnJvbSAnLi9wYXRpZW50VGFibGUnXG5cblxubGV0IGRvd25sb2FkU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgZG93bmxvYWRGaWxlKClcbiAgICBleHBvcnRGaWxlKClcbn1cblxubGV0IGRvd25sb2FkRmlsZSA9ICgpPT57XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQnV0dG9uJylcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IHBhdGllbnREYXRhYmFzZSA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3BhdGllbnREYXRhYmFzZScpXG4gICAgICAgIHZhciBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHBhdGllbnREYXRhYmFzZSkpO1xuXG4gICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsICAgICBkYXRhU3RyKTtcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiUGFjaWVudGVzLmpzb25cIik7XG4gICAgICAgIFxuICAgIH0pICAgIFxufVxuXG5sZXQgZXhwb3J0RmlsZSA9ICgpID0+IHtcblxuICAgIGxldCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZEJ1dHRvbicpXG4gICAgXG4gICAgZXhwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IG9uUmVhZGVyTG9hZDtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgXG4gICAgfSlcbiAgICBcblxufVxuXG5sZXQgb25SZWFkZXJMb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgY29uc29sZS5sb2cob2JqKVxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJyxvYmopXG4gICAgYWRkUGF0aWVudFRhYmxlKClcbiAgICBcbn1cblxuXG5cbmV4cG9ydHtcbiAgICBkb3dubG9hZFNldHRpbmdzXG59IiwiXG5sZXQgbG9hZFBhZ2VTdHJ1Y3R1cmUgPSAoKSA9PiB7XG59XG5cbmV4cG9ydHtcbiAgICBsb2FkUGFnZVN0cnVjdHVyZVxufSIsImltcG9ydCB7IHBsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiXG5cbmxldCBzYXZlSW5Mb2NhbFN0b3JhZ2UgID0gKGtleSx2YWx1ZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbn1cblxubGV0IGdldEZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpeyAgICAgXG4gICAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBwbGFjZUhvbGRlciA9IFtdXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGEgcGxhY2Vob2xkZXIgYXJyYXknKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSAoa2V5LEpTT04uc3RyaW5naWZ5KHBsYWNlSG9sZGVyKSlcblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIH1cbiAgICBcbiAgIFxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIHNhdmVJbkxvY2FsU3RvcmFnZSxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxufSIsImltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURPTUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvckZ1bmN0aW9ucydcblxubGV0IGNyZWF0ZU1vZGFsU3RydWN0dXJlID0gKGNvbnRlbnQsbW9kYWxOYW1lLHRpdGxlLG9wZW5CdXR0b24pPT57XG5cblxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIENvbnRhaW5lciAqL1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignbW9kYWwnLG1vZGFsTmFtZSlcbiAgICBcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gY3JlYXRlRE9NQ29udGFpbmVyKCdtb2RhbENvbnRlbnQnKVxuXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgaGVhZGVyICovXG4gICAgbGV0IG1vZGFsSGVhZGVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGAke21vZGFsTmFtZX1IZWFkZXJgKVxuICAgIFxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIHRpdGxlICovXG4gICAgbGV0IG1vZGFsVGl0bGUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdtb2RhbEhlYWRlclRpdGxlJyx0aXRsZSlcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxuICAgIC8qIENyZWF0ZXMgdGhlIGNsb3NlIGJ1dHRvbiovXG4gICAgbGV0IGNsb3NlICA9IGNyZWF0ZURPTUVsZW1lbnQoJ2J1dHRvbicsJ2Nsb3NlJywneCcpXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2UpXG5cbiAgICAvKiBBZGRzIHRoZSBtb2RhbCAqL1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcilcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudClcblxuICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICB9KVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgXG4gICAgXG4gICAgfSlcblxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlXG59IiwiY2xhc3MgUGFjaWVudGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSxhZ2Usc2V4LGdlbmVyYWwsZXNwZWNpZmljbyx0cmF0YW1pZW50byxmYXJtYWNvdGVyYXBpYSxlbmZlcm1lZGFkZXMsYWxlcmdpYXMsaGFiaXRvcyxkYXRlLGlkLG5vdGVzKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgICB0aGlzLnNleCA9IHNleCA7XG4gICAgICB0aGlzLmdlbmVyYWwgPSBnZW5lcmFsO1xuICAgICAgdGhpcy5lc3BlY2lmaWNvID0gZXNwZWNpZmljbztcbiAgICAgIHRoaXMudHJhdGFtaWVudG8gPSB0cmF0YW1pZW50bztcbiAgICAgIHRoaXMuZmFybWFjb3RlcmFwaWEgPSBmYXJtYWNvdGVyYXBpYTtcbiAgICAgIHRoaXMuZW5mZXJtZWRhZGVzID0gZW5mZXJtZWRhZGVzO1xuICAgICAgdGhpcy5hbGVyZ2lhcyA9IGFsZXJnaWFzO1xuICAgICAgdGhpcy5oYWJpdG9zID0gaGFiaXRvcztcbiAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxuICAgIFxufVxuXG5jbGFzcyBFeHBlZGllbnRlIHtcbiAgY29uc3RydWN0b3IoY2l0YSxwYWNpZW50ZSl7XG4gICAgdGhpcy5jaXRhID0gY2l0YVxuICAgIHRoaXMucGFjaWVudGUgPSBwYWNpZW50ZVxuICB9XG59XG5cbmNsYXNzIENpdGEge1xuICBjb25zdHJ1Y3RvcihwYWNpZW50ZSxmZWNoYSxub3Rhcyl7XG4gICAgdGhpcy5wYWNpZW50ZSA9IHBhY2llbnRlXG4gICAgdGhpcy5mZWNoYSA9IGZlY2hhXG4gICAgdGhpcy5ub3RhcyA9IG5vdGFzXG4gIH1cbn1cblxuY2xhc3MgQmlibGlvdGVjYSB7XG4gIGNvbnN0cnVjdG9yKHBhY2llbnRlcyl7XG4gICAgdGhpcy5wYWNpZW50ZXMgPSBwYWNpZW50ZXNcbiAgfVxuXG4gIGFkZFBhdGllbnQgPSAoUGFjaWVudGUpID0+IHtcbiAgICB0aGlzLnBhY2llbnRlcy5wdXNoKFBhY2llbnRlKVxuICB9XG59XG5cbmV4cG9ydHtcbiAgUGFjaWVudGUsXG4gIEV4cGVkaWVudGUsXG4gIENpdGEsXG4gIEJpYmxpb3RlY2Fcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5pbXBvcnQge2NyZWF0ZU1vZGFsU3RydWN0dXJlfSBmcm9tICcuL21vZGFsQ3JlYXRvcnMnXG5pbXBvcnQge1BhY2llbnRlLEJpYmxpb3RlY2F9IGZyb20gJy4vcGFjaWVudGUnXG5pbXBvcnQge3NhdmVJbkxvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQge2FkZFBhdGllbnRUYWJsZX0gZnJvbSAnLi9wYXRpZW50VGFibGUnXG5cblxuXG5cblxuXG5sZXQgY3JlYXRlUGF0aWVudEZpbGVNb2RhbCA9IChwYXRpZW50KSA9PiB7XG5cbiAgICAvKkNyZWF0ZSBtYWluIGNvbnRhaW5lciovXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGaWxlJylcblxuICAgIC8qTGVmdCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IGxlZnRDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGaWxlTGVmdCcpXG5cbiAgICAvKkxlZnQgc2lkZSBjb250YWluZXIqL1xuICAgIGxldCByaWdodENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZpbGVSaWdodCcpXG5cbiAgICAvKiBUb3AgQ29udGFpbmVyICovXG4gICAgbGV0IHRvcENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZpbGVUb3AnKVxuXG4gICAgLyogQm90dG9tIENvbnRhaW5lciAqL1xuICAgIGxldCBib3R0b21Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGaWxlQm90dG9tJylcblxuXG4gICAgLypkYXRlIExhYmVsKi9cbiAgICBsZXQgZGF0ZUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ05vbWJyZScpXG4gICAgbGV0IGRhdGVWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmRhdGV9YClcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKVxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVZhbHVlKVxuXG4gICAgLypOYW1lIExhYmVsKi9cbiAgICBsZXQgbmFtZUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ05vbWJyZScpXG4gICAgbGV0IG5hbWVWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50Lm5hbWV9YClcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKVxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZVZhbHVlKVxuXG4gICAgLypHZW5lcmFsIExhYmVsKi9cbiAgICBsZXQgZ2VuZXJhbExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ0VuZmVybWVkYWQgR2VuZXJhbCcpXG4gICAgbGV0IGdlbmVyYWxWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmdlbmVyYWx9YClcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhbExhYmVsKVxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhbFZhbHVlKVxuXG4gICAgLypzcGVjaWZpYyBMYWJlbCovXG4gICAgbGV0IHNwZWNpZmljTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnRW5mZXJtZWRhZCBFc3BlY2lmaWNhJylcbiAgICBsZXQgc3BlY2lmaWNWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LnNwZWNpZmljfWApXG5cbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWNpZmljTGFiZWwpXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChzcGVjaWZpY1ZhbHVlKVxuXG4gICAgLyp0cmF0YW1pZW50byBMYWJlbCovXG4gICAgbGV0IHRyYXRhbWllbnRvTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnRW5mZXJtZWRhZCBFdHJhdGFtaWVudG9hJylcbiAgICBsZXQgdHJhdGFtaWVudG9WYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LnRyYXRhbWllbnRvfWApXG5cbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRyYXRhbWllbnRvTGFiZWwpXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b1ZhbHVlKVxuXG4gICAgLyphZ2UgTGFiZWwqL1xuICAgIGxldCBhZ2VMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdFZGFkJylcbiAgICBsZXQgYWdlVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5hZ2V9YClcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFnZUxhYmVsKVxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFnZVZhbHVlKVxuXG4gICAgLypzZXggTGFiZWwqL1xuICAgIGxldCBzZXhMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdTZXhvJylcbiAgICBsZXQgc2V4VmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5zZXh9YClcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNleExhYmVsKVxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNleFZhbHVlKVxuXG5cbiAgICAvKmZhcm1hY290ZXJhcGlhIExhYmVsKi9cbiAgICBsZXQgZmFybWFjb3RlcmFwaWFMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdGYXJtYWNvdGVyYXBpYScpXG4gICAgbGV0IGZhcm1hY290ZXJhcGlhVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5mYXJtYWNvdGVyYXBpYX1gKVxuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmFybWFjb3RlcmFwaWFMYWJlbClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChmYXJtYWNvdGVyYXBpYVZhbHVlKVxuXG4gICAgLypub3RhcyBMYWJlbCovXG4gICAgbGV0IG5vdGFzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnbm90YXMnKVxuICAgIGxldCBub3Rhc1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQubm90ZXN9YClcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGFzTGFiZWwpXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90YXNWYWx1ZSlcblxuXG4gICAgLyphbGVyZ2lhcyBMYWJlbCovXG4gICAgbGV0IGFsZXJnaWFzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnYWxlcmdpYXMnKVxuICAgIGxldCBhbGVyZ2lhc1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuYWxlcmdpYXN9YClcblxuICAgIGxldCBib3R0b21BbGVyZ2lhQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdib3R0b21WYWx1ZUNvbnRhaW5lcicpXG5cbiAgICBib3R0b21BbGVyZ2lhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZXJnaWFzTGFiZWwpXG4gICAgYm90dG9tQWxlcmdpYUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGVyZ2lhc1ZhbHVlKVxuXG4gICAgYm90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUFsZXJnaWFDb250YWluZXIpXG4gICAgXG4gICAgLyplbmZlcm1lZGFkZXMgTGFiZWwqL1xuICAgIGxldCBlbmZlcm1lZGFkZXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdlbmZlcm1lZGFkZXMnKVxuICAgIGxldCBlbmZlcm1lZGFkZXNWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmVuZmVybWVkYWRlc31gKVxuXG4gICAgbGV0ICBib3R0b21FbmZlcm1lZGFkZXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2JvdHRvbVZhbHVlQ29udGFpbmVyJylcblxuICAgIGJvdHRvbUVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNMYWJlbClcbiAgICBib3R0b21FbmZlcm1lZGFkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5mZXJtZWRhZGVzVmFsdWUpXG5cbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tRW5mZXJtZWRhZGVzQ29udGFpbmVyKVxuXG5cblxuICAgIC8qaGFiaXRvcyBMYWJlbCovXG4gICAgbGV0IGhhYml0b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdoYWJpdG9zJylcbiAgICBsZXQgaGFiaXRvc1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuaGFiaXRvc31gKVxuXG4gICAgbGV0IGJvdHRvbUhhYml0b3NDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2JvdHRvbVZhbHVlQ29udGFpbmVyJylcblxuICAgIGJvdHRvbUhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaGFiaXRvc0xhYmVsKVxuICAgIGJvdHRvbUhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaGFiaXRvc1ZhbHVlKVxuXG4gICAgYm90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUhhYml0b3NDb250YWluZXIpXG5cblxuICAgIGxldCBidXR0b25Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2J1dHRvbkNvbnRhaW5lcicpXG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gY3JlYXRlRE9NRWxlbWVudCgnYnV0dG9uJywnZGVsZXRlQnV0dG9uJywnRWxpbWluYXIgcGFjaWVudGUnLCdkZWxldGUnKVxuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBpZiAoY29uZmlybShcIkFkdmVydGVuY2lhIHNlIGVzdGEgYm9ycmFuZG8gZWwgcGFjaWVudGUhIERlc2VhcyBjb25maXJtYXIgZXN0bz9cIikgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGVsZXRlUGF0aWVudChwYXRpZW50KVxuICAgICAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgICAgIGFkZFBhdGllbnRUYWJsZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgfSlcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG5cbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuXG5sZXQgZGVsZXRlUGF0aWVudCA9IChwYWNpZW50ZSkgPT4ge1xuICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuXG4gICAgcGF0aWVudERhdGFiYXNlID0gcGF0aWVudERhdGFiYXNlLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHBhY2llbnRlLmlkKVxuICAgIGNvbnNvbGUubG9nKClcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJyxwYXRpZW50RGF0YWJhc2UpXG59IFxuXG5cbmxldCBjbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbn1cblxuZXhwb3J0e1xuICAgIGNyZWF0ZVBhdGllbnRGaWxlTW9kYWwsXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZX0gZnJvbSAnLi9tb2RhbENyZWF0b3JzJ1xuaW1wb3J0IHtsb2FkRGF0YX0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHtQYWNpZW50ZSxCaWJsaW90ZWNhfSBmcm9tICcuL3BhY2llbnRlJ1xuaW1wb3J0IHtzYXZlSW5Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHtnZXRUb2RheXNEYXRlfSBmcm9tICcuL2RhdGVGdW5jdGlvbnMnXG5pbXBvcnQge2FkZFBhdGllbnRUYWJsZX0gZnJvbSAnLi9wYXRpZW50VGFibGUnXG5pbXBvcnQgeyBnZXREYXlzSW5Nb250aCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5cblxuXG5cbmxldCBhZGRQYXRpZW50TW9kYWxDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgLyogTG9hZHMgdGhlIG1haW4gYXJyYXkgKi9cbiAgICBsZXQgbWFpbkFycmF5ID0gbG9hZERhdGEoKVxuXG4gICAgbGV0IGdlbmVyYWwgPSBtYWluQXJyYXlbMF1cbiAgICBsZXQgYWxlcmdpYXMgPSBtYWluQXJyYXlbMV1cbiAgICBsZXQgZW5mZXJtZWRhZGVzID0gbWFpbkFycmF5WzJdXG4gICAgbGV0IGhhYml0b3MgPSBtYWluQXJyYXlbM11cbiAgICBsZXQgdHJhdGFtaWVudG9zID0gbWFpbkFycmF5WzRdXG4gICAgbGV0IHNwZWNpZmljID0gbWFpbkFycmF5WzVdXG5cblxuICAgIC8qIE1haW4gY29udGFpbmVyIGZvciB0aGUgbW9kYWwgKi9cbiAgICBsZXQgbWFpbkZvcm0gPSBjcmVhdGVET01FbGVtZW50KCdmb3JtJywncGF0aWVudEZvcm0nLCcnLCdwYXRpZW50Rm9ybScpXG4gICAgbWFpbkZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsJ3JldHVybiBmYWxzZScpXG5cbiAgICAvKiBQYXRpZW50IGZvcm0gc2lkZXMgKi9cbiAgICBsZXQgcmlnaHRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybVJpZ2h0JylcbiAgICBsZXQgbGVmdFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtTGVmdCcpXG5cbiAgICBsZXQgdG9wU2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1Ub3AnKVxuICAgIGxldCBib3R0b21TaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybUJvdHRvbScpXG5cbiAgICAvKk1haW4gRGVzaWduIFJpZ2h0IFNpZGUqL1xuICAgIGxldCBuYW1lTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ05vbWJyZScpXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZm5hbWUnKVxuICAgIFxuICAgIGxldCBuYW1lSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2Zvcm1UZXh0SW5wdXQnLCcnLCdmbmFtZScpXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZuYW1lJylcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuXG4gICAgLypHZW5lcmFsKi9cbiAgICBsZXQgZ2VuZXJhbExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdEaWFnbm9zdGljbyBHZW5lcmFsJylcbiAgICBnZW5lcmFsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZ2VuZXJhbCcpXG4gICAgXG4gICAgbGV0IGdlbmVyYWxJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZmdlbmVyYWwnKVxuICAgIGdlbmVyYWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZmdlbmVyYWwnKVxuICAgIGdlbmVyYWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgZ2VuZXJhbElucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgZ2VuZXJhbElucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2VuZXJhbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGdlbmVyYWxbaV0sIGdlbmVyYWxbaV0pKTtcbiAgICB9ICAgXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbExhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbElucHV0KTtcblxuICAgIC8qIEVzcGVjaWZpY28gKi9cbiAgICBsZXQgc3BlY2lmaWNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRGlhZ25vc3RpY28gRXNwZWNpZmljbycpXG4gICAgc3BlY2lmaWNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZzcGVjaWZpYycpXG4gICAgXG4gICAgbGV0IHNwZWNpZmljSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2ZzcGVjaWZpYycpXG4gICAgc3BlY2lmaWNJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZnNwZWNpZmljJylcbiAgICBzcGVjaWZpY0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG5cblxuICAgIGdlbmVyYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLChldmVudCkgPT57XG4gICAgICAgIFxuICAgICAgICBsZXQgZWxlbWVudEluZGV4U2VsZWN0ZWQgPSBnZW5lcmFsLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICBsZXQgc3BlY2lmaWNBcnJheSA9IHNwZWNpZmljW2VsZW1lbnRJbmRleFNlbGVjdGVkXS5tYXAoKGVsZW1lbnQpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFswXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbm90ZXNTcGVjaWZpY0FycmF5ID0gc3BlY2lmaWNbZWxlbWVudEluZGV4U2VsZWN0ZWRdLm1hcCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50WzFdXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG4gICAgICAgIC8qQ2xlYXJzIGFsbCB2YWx1ZXMgb2YgdGhlIGxpc3QgYW4gcmVzZXRzIHRoZW0gKi9cbiAgICAgICAgc3BlY2lmaWNJbnB1dC5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcGVjaWZpY0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHNwZWNpZmljQXJyYXlbaV0sIHNwZWNpZmljQXJyYXlbaV0pKTtcbiAgICAgICAgfSAgIFxuICAgIFxuXG4gICAgfSlcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzcGVjaWZpY0xhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3BlY2lmaWNJbnB1dCk7XG5cbiAgICAvKiBUcmF0YW1pZW50b3MqL1xuICAgIGxldCB0cmF0YW1pZW50b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnVHJhdGFtaWVudG8nKVxuICAgIHRyYXRhbWllbnRvc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnRyYXRhbWllbnRvJylcbiAgICBcbiAgICBsZXQgdHJhdGFtaWVudG9zSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2Z0cmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2Z0cmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG4gICAgXG5cblxuICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICB0cmF0YW1pZW50b3NJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRyYXRhbWllbnRvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24odHJhdGFtaWVudG9zW2ldLCB0cmF0YW1pZW50b3NbaV0pKTtcbiAgICB9IFxuXG4gICAgXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9zTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b3NJbnB1dCk7XG5cbiAgICAvKiBBbGVyZ2lhcyBDb250YWluZXIgKi9cbiAgICBsZXQgYWxlcmdpYXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2FsZXJnaWFzQ29udGFpbmVyJylcblxuICAgIC8qQWxlcmdpYXMqL1xuICAgIGxldCBhbGVyZ2lhc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdBbGVyZ2lhcycpXG4gICAgYWxlcmdpYXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxlcmdpYXNMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckFsZXJnaWFzID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8YWxlcmdpYXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5SW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FsZXJneUNoZWNrYm94JywnJyxgYWxlcmd5JHthbGVyZ2lhc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsYWxlcmdpYXNbaV0pXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhbGVyZ2lhc1tpXSlcblxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdjaGVjYm94TGFiZWwnLGAke2FsZXJnaWFzW2ldfWApXG5cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveCcpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5SW5wdXQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5TGFiZWwpXG5cbiAgICAgICAgY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgYWxlcmdpYXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcylcblxuXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGFsZXJnaWFzQ29udGFpbmVyKVxuXG4gICAgLyogZW5mZXJtZWRhZGVzIENvbnRhaW5lciAqL1xuICAgIGxldCBlbmZlcm1lZGFkZXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2VuZmVybWVkYWRlc0NvbnRhaW5lcicpXG5cbiAgICAvKmVuZmVybWVkYWRlcyovXG4gICAgbGV0IGVuZmVybWVkYWRlc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdlbmZlcm1lZGFkZXMnKVxuICAgIGVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcyA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3hDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGVuZmVybWVkYWRlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2VuZmVybWVkYWRlc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsZW5mZXJtZWRhZGVzW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsZW5mZXJtZWRhZGVzW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7ZW5mZXJtZWRhZGVzW2ldfWApXG5cblxuXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9IFxuXG4gICAgZW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzKVxuXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0NvbnRhaW5lcilcblxuICAgIC8qIGhhYml0b3MgQ29udGFpbmVyICovXG4gICAgbGV0IGhhYml0b3NDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2hhYml0b3NDb250YWluZXInKVxuXG4gICAgLypoYWJpdG9zKi9cbiAgICBsZXQgaGFiaXRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdoYWJpdG9zJylcbiAgICBoYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhYml0b3NMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckhhYml0b3MgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxoYWJpdG9zLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7aGFiaXRvc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsaGFiaXRvc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGhhYml0b3NbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHtoYWJpdG9zW2ldfWApXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVySGFiaXRvcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuICAgIFxuICAgIGhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJIYWJpdG9zKVxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChoYWJpdG9zQ29udGFpbmVyKVxuXG4gICAgLyogTGVmdCBTaWRlICovXG5cbiAgICAvKkFHRSovXG4gICAgbGV0IGVkYWRMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRWRhZCcpXG4gICAgZWRhZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZmVkYWQnKVxuXG4gICAgbGV0IGVkYWRJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnZm9ybVRleHRJbnB1dCcsJycsJ2ZlZGFkJylcbiAgICBlZGFkSW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgZWRhZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmZWRhZCcpXG4gICAgZWRhZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZWRhZExhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGVkYWRJbnB1dClcblxuICAgIC8qIFNleG8gKi9cbiAgICBsZXQgc2V4b0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdTZXhvJylcbiAgICBzZXhvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmc2V4bycpXG5cbiAgICBsZXQgc2V4b0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmc2V4bycpXG4gICAgc2V4b0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmc2V4bycpXG4gICAgc2V4b0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgc2V4b0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICBzZXhvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICBzZXhvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG4gICAgXG4gICAgbGV0IHNleGVzID0gWydNYXNjdWxpbm8nLCdGZW1lbmlubycsJ090cm8nXVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNleGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc2V4b0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oc2V4ZXNbaV0sIHNleGVzW2ldKSk7XG4gICAgfSBcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHNleG9MYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZXhvSW5wdXQpXG5cbiAgICAvKkZhcm1hY28qL1xuICAgIGxldCBmYXJtYWNvTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0Zhcm1hY290ZXJhcGlhJylcbiAgICBmYXJtYWNvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZmFybWFjbycpXG5cbiAgICBsZXQgZmFybWFjb0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0JywnZm9ybVRleHRJbnB1dCcsJycsJ2ZmYXJtYWNvJylcbiAgICBmYXJtYWNvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZmYXJtYWNvJylcblxuICAgIGZhcm1hY29JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgZmFybWFjb0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgZmFybWFjb0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuICAgICAgICBcbiAgICBsZXQgZmFybWFjbyA9IFsnU2knLCdObyddXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmFybWFjby5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZhcm1hY29JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGZhcm1hY29baV0sIGZhcm1hY29baV0pKTtcbiAgICB9IFxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZmFybWFjb0xhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGZhcm1hY29JbnB1dClcblxuICAgIC8qIE5vdGFzICovXG4gICAgbGV0IG5vdGVzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ05vdGFzJylcbiAgICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZm5vdGFzJylcbiAgICBcbiAgICBsZXQgbm90ZXNCb3ggPSBjcmVhdGVET01FbGVtZW50KCd0ZXh0YXJlYScsJ25vdGVCb3gnLCcnLCdmbm90YXMnKVxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChub3Rlc0JveClcblxuICAgIC8qU3VibWl0IEJvdHRvbSAqL1xuICAgIGxldCBzdWJtaXRCdXR0b24gPSBjcmVhdGVET01FbGVtZW50KCdzdWJtaXQnLCdzdWJtaXRCdXR0b24nLCdBZ3JlZ2FyJylcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IHBhdGllbnQgPSBjaGVja0Zvcm1WYWx1ZXMoKVxuICAgICAgICBsZXQgbmV3UGF0aWVudCA9IG5ldyBQYWNpZW50ZShwYXRpZW50Lm5hbWUscGF0aWVudC5lZGFkLHBhdGllbnQuc2V4LHBhdGllbnQuZ2VuZXJhbCxwYXRpZW50LnNwZWNpZmljLHBhdGllbnQudHJhdGFtaWVudG8scGF0aWVudC5mYXJtYWNvLHBhdGllbnQuZW5mZXJtZWRhZGVzLHBhdGllbnQuYWxlcmd5LHBhdGllbnQuaGFiaXRvcyxwYXRpZW50LmRhdGUscGF0aWVudC5pZCxwYXRpZW50Lm5vdGVzKVxuXG4gICAgICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQYXRpZW50KVxuXG4gICAgICAgIGxldCB2YWxpZGF0b3JzID0ge1xuICAgICAgICAgICAgJ05vbWJyZScgOiBuZXdQYXRpZW50Lm5hbWUgIT09ICcnLFxuICAgICAgICAgICAgJ0VkYWQnIDogbmV3UGF0aWVudC5hZ2UgIT09ICcnLFxuICAgICAgICAgICAgJ1NleG8nICA6IG5ld1BhdGllbnQuc2V4ICE9PSAgJycsXG4gICAgICAgICAgICAnR2VuZXJhbCcgOiBuZXdQYXRpZW50LmdlbmVyYWwgIT09ICcnLFxuICAgICAgICAgICAgJ0VuZmVybWVkYWQgZXNwZWNpZmljYScgOiAgbmV3UGF0aWVudC5lc3BlY2lmaWNvICE9PSAgJycsXG4gICAgICAgICAgICAnRmFybWFjb3RlcmFwaWEnIDogbmV3UGF0aWVudC5mYXJtYWNvdGVyYXBpYSAhPT0gICcnLFxuICAgICAgICAgICAgJ1RyYXRhbWllbnRvJzogbmV3UGF0aWVudC50cmF0YW1pZW50byAhPT0gICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbmRpdG9ucyA9IE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLm1hcChmdW5jdGlvbihrKXtyZXR1cm4odmFsaWRhdG9yc1trXSl9KTtcblxuXG4gICAgICAgIGxldCBjaGVja2VyID0gYXJyID0+IGFyci5ldmVyeSh2ID0+IHYgPT09IHRydWUpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coY29uZGl0b25zKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VyKGNvbmRpdG9ucykpXG4gICAgICAgIFxuICAgICAgICBpZihjaGVja2VyKGNvbmRpdG9ucykpe1xuICAgICAgICAgICAgcGF0aWVudERhdGFiYXNlLnB1c2gobmV3UGF0aWVudClcbiAgICAgICAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJyxwYXRpZW50RGF0YWJhc2UpXG4gICAgICAgICAgICBjbGVhckZvcm0oKVxuICAgICAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgICAgIGFkZFBhdGllbnRUYWJsZSgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IG1pc3NpbmdGaWVsZCA9IE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpW2NvbmRpdG9ucy5pbmRleE9mKGZhbHNlKV1cbiAgICAgICAgICAgIGFsZXJ0KGBGYWx0YSAke21pc3NpbmdGaWVsZH0gZGUgbGxlbmFyYClcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRvcFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgICB0b3BTaWRlLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZCh0b3BTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChib3R0b21TaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5cblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGF0aWVudEJ1dHRvbicpXG5cbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShtYWluRm9ybSwnbW9kYWwnLCdBZ3JlZ2FyIFBhY2llbnRlJyxhZGRCdXR0b24pXG4gICAgcmV0dXJuIG1haW5Gb3JtXG4gXG59XG5cblxubGV0IGNoZWNrRm9ybVZhbHVlcyA9ICgpID0+IHtcblxuICAgIGxldCBwYXRpZW50SW5mbyA9IHtcbiAgICAgICAgbmFtZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbmFtZScpLnZhbHVlLFxuICAgICAgICBnZW5lcmFsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmdlbmVyYWwnKS52YWx1ZSxcbiAgICAgICAgZmFybWFjbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZmYXJtYWNvJykudmFsdWUsXG4gICAgICAgIHNwZWNpZmljOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnNwZWNpZmljJykudmFsdWUsXG4gICAgICAgIHRyYXRhbWllbnRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnRyYXRhbWllbnRvJykudmFsdWUsXG4gICAgICAgIGVkYWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWRhZCcpLnZhbHVlLFxuICAgICAgICBzZXg6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmc2V4bycpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zub3RhcycpLnZhbHVlLFxuICAgICAgICBhbGVyZ3k6IG5vZGUyQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJnaWFzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKSxcbiAgICAgICAgZW5mZXJtZWRhZGVzOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXIgPiAuY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkJykpLFxuICAgICAgICBoYWJpdG9zOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYWJpdG9zQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKSxcbiAgICAgICAgZGF0ZTogZ2V0VG9kYXlzRGF0ZSgpLFxuICAgICAgICBpZDogY2hlY2tGb3JJZCgpLFxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiBwYXRpZW50SW5mb1xufVxuXG5sZXQgY2hlY2tGb3JJZCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YWJhc2UgID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcbiAgICBpZiAoZGF0YWJhc2UubGVuZ3RoICE9IDApe1xuICAgICAgICBsZXQgaWQgPSBkYXRhYmFzZVtkYXRhYmFzZS5sZW5ndGgtMV0uaWQgKyAxXG4gICAgICAgIHJldHVybiBpZFxuICAgIH1lbHNle1xuICAgICAgICBsZXQgaWQgPSAxXG4gICAgICAgIHJldHVybiBpZFxuICAgIH1cbn1cblxubGV0IGNsb3NlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxufVxuXG5sZXQgbm9kZTJBcnJheSA9IChub2RlKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW11cbiAgICBub2RlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGFycmF5LnB1c2goZWxlbWVudC52YWx1ZSkgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVxufVxuXG5sZXQgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdGllbnRGb3JtJylcbiAgICBsZXQgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LHRleHRhcmVhJylcblxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaWYoaW5wdXQudHlwZSA9PT0gJ3RleHQnIHx8IGlucHV0LnR5cGUgPT09ICd0ZXh0YXJlYScgfHwgaW5wdXQudHlwZSA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICB9ZWxzZSBpZihpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKXtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9ZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKXtcbiAgICAgICAgICAgIGlucHV0LnNlbGVjdGVkSW5kZXggPSAtMVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydHtcbiAgICBhZGRQYXRpZW50TW9kYWxDb250ZW50XG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuaW1wb3J0IHtzYXZlSW5Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0ICB7Y3JlYXRlUGF0aWVudEZpbGVNb2RhbH0gZnJvbSAnLi9wYXRpZW50RmlsZU1vZGFsJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZX0gZnJvbSAnLi9tb2RhbENyZWF0b3JzJ1xuXG5cbmxldCBhZGRQYXRpZW50VGFibGUgPSAoKSA9PiB7XG5cbiAgICAvKkdldHMgdGhlIG1haW4gcGF0aWVudCBkYXRhIGJhc2UqL1xuICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuXG4gICAgLypHZXRzIHRoZSBtYWluIHRhYmxlKi9cbiAgICBsZXQgcGF0aWVudFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlQm9keScpXG4gICAgXG4gICAgcGF0aWVudFRhYmxlLmlubmVySFRNTCA9ICcnXG4gICAgXG4gICAgcGF0aWVudERhdGFiYXNlLmZvckVhY2gocGF0aWVudCA9PiB7XG4gICAgICAgIGFkZFBhdGllbnRSb3cocGF0aWVudClcbiAgICB9KTtcblxuICAgIGFkZENsaWNrVGFibGVFdmVudHMoKVxuICAgIGFkZFNvcnRUYWJsZUZ1bmN0aW9ucygpXG5cbiAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIik7XG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCgpPT57XG4gICAgICAgIHNlYXJjaFRhYmxlKClcbiAgICB9KVxuXG59XG5cbmxldCBhZGRQYXRpZW50Um93ID0gKHBhdGllbnQpID0+IHtcbiAgICBcbiAgICAvKkdldHMgdGhlIG1haW4gdGFibGUqL1xuICAgIGxldCBwYXRpZW50VGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVCb2R5JylcbiAgICBcblxuICAgIC8vIENyZWF0ZSBhbiBlbXB0eSA8dHI+IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgMXN0IHBvc2l0aW9uIG9mIHRoZSB0YWJsZTpcbiAgICBsZXQgcm93ID0gcGF0aWVudFRhYmxlLmluc2VydFJvdygwKTtcblxuICAgIC8vIEluc2VydCBuZXcgY2VsbHMgKDx0ZD4gZWxlbWVudHMpIGF0IHRoZSAxc3QgYW5kIDJuZCBwb3NpdGlvbiBvZiB0aGUgXCJuZXdcIiA8dHI+IGVsZW1lbnQ6XG4gICAgbGV0IGlkID0gcm93Lmluc2VydENlbGwoMClcbiAgICBsZXQgZGF0ZSA9IHJvdy5pbnNlcnRDZWxsKDEpO1xuICAgIGxldCBuYW1lID0gcm93Lmluc2VydENlbGwoMik7XG4gICAgbGV0IGFnZSA9IHJvdy5pbnNlcnRDZWxsKDMpO1xuICAgIGxldCBzZXggPSByb3cuaW5zZXJ0Q2VsbCg0KTtcbiAgICBsZXQgZ2VuZXJhbCA9IHJvdy5pbnNlcnRDZWxsKDUpO1xuXG4gICAgLy8gQWRkIHNvbWUgdGV4dCB0byB0aGUgbmV3IGNlbGxzOlxuICAgIGlkLmlubmVySFRNTCA9IHBhdGllbnQuaWRcbiAgICBkYXRlLmlubmVySFRNTCA9IHBhdGllbnQuZGF0ZTtcbiAgICBuYW1lLmlubmVySFRNTCA9IHBhdGllbnQubmFtZTtcbiAgICBhZ2UuaW5uZXJIVE1MID0gcGF0aWVudC5hZ2U7XG4gICAgc2V4LmlubmVySFRNTCA9IHBhdGllbnQuc2V4O1xuICAgIGdlbmVyYWwuaW5uZXJIVE1MID0gcGF0aWVudC5nZW5lcmFsO1xuXG59XG5cbmxldCBhZGRDbGlja1RhYmxlRXZlbnRzID0gKCkgPT4ge1xuICAgIGxldCAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGllbnRUYWJsZVwiKTtcbiAgICBsZXQgIHJvd3MgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xuICAgIGxldCAgcGF0aWVudEFycmF5ID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHsgICAgXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGUucm93c1tpXS5jZWxscy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRhYmxlLnJvd3NbaV0uY2VsbHNbal07XG4gICAgICAgICAgICBsZXQgcGF0aWVudElEID0gdGFibGUucm93c1tpXS5jZWxsc1swXS5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgcGF0aWVudCA9IHBhdGllbnRBcnJheS5maW5kKHBhdGllbnRUZXN0ID0+IHBhdGllbnRUZXN0LmlkID09IHBhdGllbnRJRClcbiAgICAgICAgICAgIGxldCBwYXRpZW50SW5mbyA9IGNyZWF0ZVBhdGllbnRGaWxlTW9kYWwocGF0aWVudClcbiAgICAgICAgICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlKHBhdGllbnRJbmZvLCdtb2RhbCcsJ0luZm9ybWFjaW9uIGRlbCBwYWNpZW50ZScsY2VsbClcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5sZXQgc29ydFRhYmxlID0gKG4pID0+IHtcbiAgICBcbiAgICBsZXQgdGFibGUscm93cyxzd2l0Y2hpbmcsaSx4LHksc2hvdWxkU3dpdGNoLGRpcixzd2l0Y2hjb3VudCA9IDA7XG5cbiAgICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aWVudFRhYmxlXCIpO1xuICAgIHN3aXRjaGluZyA9IHRydWU7XG4gICAgLy9TZXQgdGhlIHNvcnRpbmcgZGlyZWN0aW9uIHRvIGFzY2VuZGluZzpcbiAgICBkaXIgPSBcImFzY1wiO1xuICAgIC8qTWFrZSBhIGxvb3AgdGhhdCB3aWxsIGNvbnRpbnVlIHVudGlsXG4gICAgbm8gc3dpdGNoaW5nIGhhcyBiZWVuIGRvbmU6Ki9cbiAgICB3aGlsZSAoc3dpdGNoaW5nKSB7XG4gICAgICAgIC8vc3RhcnQgYnkgc2F5aW5nOiBubyBzd2l0Y2hpbmcgaXMgZG9uZTpcbiAgICAgICAgc3dpdGNoaW5nID0gZmFsc2U7XG4gICAgICAgIHJvd3MgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRSXCIpO1xuICAgICAgICAvKkxvb3AgdGhyb3VnaCBhbGwgdGFibGUgcm93cyAoZXhjZXB0IHRoZVxuICAgICAgICBmaXJzdCwgd2hpY2ggY29udGFpbnMgdGFibGUgaGVhZGVycyk6Ki9cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJvd3MubGVuZ3RoIC0gMTsgaSsrKSB7IC8vQ2hhbmdlIGk9MCBpZiB5b3UgaGF2ZSB0aGUgaGVhZGVyIHRoIGEgc2VwYXJhdGUgdGFibGUuXG4gICAgICAgIC8vc3RhcnQgYnkgc2F5aW5nIHRoZXJlIHNob3VsZCBiZSBubyBzd2l0Y2hpbmc6XG4gICAgICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuICAgICAgICAvKkdldCB0aGUgdHdvIGVsZW1lbnRzIHlvdSB3YW50IHRvIGNvbXBhcmUsXG4gICAgICAgIG9uZSBmcm9tIGN1cnJlbnQgcm93IGFuZCBvbmUgZnJvbSB0aGUgbmV4dDoqL1xuICAgICAgICB4ID0gcm93c1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlREXCIpW25dO1xuICAgICAgICB5ID0gcm93c1tpICsgMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJURFwiKVtuXTtcbiAgICAgICAgLypjaGVjayBpZiB0aGUgdHdvIHJvd3Mgc2hvdWxkIHN3aXRjaCBwbGFjZSxcbiAgICAgICAgYmFzZWQgb24gdGhlIGRpcmVjdGlvbiwgYXNjIG9yIGRlc2M6Ki9cbiAgICAgICAgaWYgKGRpciA9PSBcImFzY1wiKSB7XG4gICAgICAgICAgICBpZiAoeC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSA+IHkuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIC8vaWYgc28sIG1hcmsgYXMgYSBzd2l0Y2ggYW5kIGJyZWFrIHRoZSBsb29wOlxuICAgICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcImRlc2NcIikge1xuICAgICAgICAgICAgaWYgKHguaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPCB5LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAvL2lmIHNvLCBtYXJrIGFzIGEgc3dpdGNoIGFuZCBicmVhayB0aGUgbG9vcDpcbiAgICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRTd2l0Y2gpIHtcbiAgICAgICAgLypJZiBhIHN3aXRjaCBoYXMgYmVlbiBtYXJrZWQsIG1ha2UgdGhlIHN3aXRjaFxuICAgICAgICBhbmQgbWFyayB0aGF0IGEgc3dpdGNoIGhhcyBiZWVuIGRvbmU6Ki9cbiAgICAgICAgcm93c1tpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3dzW2kgKyAxXSwgcm93c1tpXSk7XG4gICAgICAgIHN3aXRjaGluZyA9IHRydWU7XG4gICAgICAgIC8vRWFjaCB0aW1lIGEgc3dpdGNoIGlzIGRvbmUsIGluY3JlYXNlIHRoaXMgY291bnQgYnkgMTpcbiAgICAgICAgc3dpdGNoY291bnQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLypJZiBubyBzd2l0Y2hpbmcgaGFzIGJlZW4gZG9uZSBBTkQgdGhlIGRpcmVjdGlvbiBpcyBcImFzY1wiLFxuICAgICAgICBzZXQgdGhlIGRpcmVjdGlvbiB0byBcImRlc2NcIiBhbmQgcnVuIHRoZSB3aGlsZSBsb29wIGFnYWluLiovXG4gICAgICAgIGlmIChzd2l0Y2hjb3VudCA9PSAwICYmIGRpciA9PSBcImFzY1wiKSB7XG4gICAgICAgICAgICBkaXIgPSBcImRlc2NcIjtcbiAgICAgICAgICAgIHN3aXRjaGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGFkZFNvcnRUYWJsZUZ1bmN0aW9ucyA9ICgpID0+e1xuICAgIGxldCAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGllbnRUYWJsZVwiKTtcbiAgICBsZXQgIGhlYWRlcnMgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoXCIpO1xuICAgIGZvciAobGV0IGk9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGxldCBoZWFkID0gaGVhZGVyc1tpXVxuICAgICAgICBoZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgc29ydFRhYmxlKGkpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5sZXQgc2VhcmNoVGFibGUgPSAoKSA9PiB7XG4gICAgLy8gRGVjbGFyZSB2YXJpYWJsZXNcbiAgICB2YXIgaW5wdXQsIGZpbHRlciwgdGFibGUsIHRyLCB0ZCwgaSwgdHh0VmFsdWU7XG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcbiAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRpZW50VGFibGVcIik7XG4gICAgdHIgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0YWJsZSByb3dzLCBhbmQgaGlkZSB0aG9zZSB3aG8gZG9uJ3QgbWF0Y2ggdGhlIHNlYXJjaCBxdWVyeVxuICAgIGZvciAoaSA9IDA7IGkgPCB0ci5sZW5ndGg7IGkrKykge1xuICAgIHRkID0gdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVsyXTtcbiAgICBpZiAodGQpIHtcbiAgICAgICAgdHh0VmFsdWUgPSB0ZC50ZXh0Q29udGVudCB8fCB0ZC5pbm5lclRleHQ7XG4gICAgICAgIGlmICh0eHRWYWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKSB7XG4gICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB0cltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgYWRkUGF0aWVudFRhYmxlLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRQYWdlU3RydWN0dXJlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1BhY2llbnRlLEJpYmxpb3RlY2F9IGZyb20gJy4vcGFjaWVudGUnXG5pbXBvcnR7YWRkUGF0aWVudE1vZGFsQ29udGVudH0gZnJvbSAnLi9wYXRpZW50TW9kYWwnXG5pbXBvcnQge2FkZFBhdGllbnRUYWJsZX0gZnJvbSAnLi9wYXRpZW50VGFibGUnXG5pbXBvcnQge2Rvd25sb2FkU2V0dGluZ3N9IGZyb20gJy4vZG93bmxvYWQnXG5cblxuXG5cbmFkZFBhdGllbnRUYWJsZSgpXG5sb2FkUGFnZVN0cnVjdHVyZSgpXG5hZGRQYXRpZW50TW9kYWxDb250ZW50KClcbmRvd25sb2FkU2V0dGluZ3MoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=