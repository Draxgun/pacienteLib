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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px;\n\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n    overflow:scroll;\n}\n\n\nth {\n    font-size: calc(3px + 1vw);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd,th{\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n}\n\ntd {\n    background-color: var(--white);\n    text-align: center;\n\n}\n\n\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody {\n    display: block;\n    overflow-y: auto;\n    max-height: 500px;\n}\n\ntbody::-webkit-scrollbar{\n    display: none;\n}\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n\n/* PatientFile */\n.patientFile{\n    display: flex;\n    flex-direction: column;\n}\n\n.patientFileTop{\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n}\n\n.patientFileBottom{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    padding: 10px;\n}\n\n.patientFileLabel{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    color: var(--cold);\n    padding: 10px;\n}\n.patientFieldValue{\n    font-weight: bold;\n    font-size: calc(8px + 1vw);\n    color: var(--blue);\n    padding: 10px;\n}\n\n.patientFileLeft,.patientFileRight {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n}\n\n.bottomValueContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px;\n\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n    overflow:scroll;\n}\n\n\nth {\n    font-size: calc(3px + 1vw);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd,th{\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n}\n\ntd {\n    background-color: var(--white);\n    text-align: center;\n\n}\n\n\nthead, tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody {\n    display: block;\n    overflow-y: auto;\n    max-height: 500px;\n}\n\ntbody::-webkit-scrollbar{\n    display: none;\n}\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n\n/* PatientFile */\n.patientFile{\n    display: flex;\n    flex-direction: column;\n}\n\n.patientFileTop{\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n}\n\n.patientFileBottom{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    padding: 10px;\n}\n\n.patientFileLabel{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    color: var(--cold);\n    padding: 10px;\n}\n.patientFieldValue{\n    font-weight: bold;\n    font-size: calc(8px + 1vw);\n    color: var(--blue);\n    padding: 10px;\n}\n\n.patientFileLeft,.patientFileRight {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n}\n\n.bottomValueContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}"],"sourceRoot":""}]);
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

module.exports = [["Aspirina"],["Latex"],["Lidocaina o Anestesicos"],["Ninguna alergia"],["Otra alergia"],["Penicilina u Otros Antibioticos"],["Sulfas"],["Yodo"]]

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




    let deleteButton = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button','deleteButton','Eliminar paciente','delete')

    deleteButton.addEventListener('click',()=>{
        deletePatient(patient)
        closeForm()
        ;(0,_patientTable__WEBPACK_IMPORTED_MODULE_4__.addPatientTable)()
    })


    topContainer.appendChild(leftContainer)
    topContainer.appendChild(rightContainer)

    mainContainer.appendChild(topContainer)
    mainContainer.appendChild(bottomContainer)
    mainContainer.appendChild(deleteButton)


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









(0,_patientTable__WEBPACK_IMPORTED_MODULE_4__.addPatientTable)()
;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStructure)()
;(0,_patientModal__WEBPACK_IMPORTED_MODULE_3__.addPatientModalContent)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ3RCO0FBQ3lCO0FBQ007QUFDTjs7Ozs7QUFLOUMsOERBQWU7QUFDZix5REFBaUI7QUFDakIsc0VBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2FsZXJnaWFzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9hbm9tYWxpYXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Nhcmllcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGVzYXJyb2xsby5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGllbnRlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZGllbnRlc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lbmNpYVRyYW5zdG9ybm8uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VuZmVybWVkYWRlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZXN0b21hdGl0aXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2dlbmVyYWxlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZ2luZ2l2aXRpcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvaGFiaXRvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbGFiaW9zT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2xlbmd1YS5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvbHV4YWNpb24uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL21heGlsYXJlc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9wdWxwYS5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvcXVpc3Rlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvc2FsaXZhbGVzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC90ZWppZG9zT3Ryb3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3RyYXRhbWllbnRvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2RhdGVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZG9tQ3JlYXRvckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9tb2RhbENyZWF0b3JzLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhY2llbnRlLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhdGllbnRGaWxlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvcGF0aWVudE1vZGFsLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3BhdGllbnRUYWJsZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXdoaXRlOiNGM0Y5RkI7XFxuICAgIC0tYmx1ZTojODdDMENEO1xcbiAgICAtLW5hdnk6IzIyNjU5NztcXG4gICAgLS1jb2xkOiMxMTNGNjc7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaGJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6ICMxMTNGNjcgMnB4IHNvbGlkO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzLC5zZWFyY2hJbnB1dDpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbiNzZWFyY2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuXFxuLm1haW5UYWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcblxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuXFxudGgge1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRkLHRoe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbnRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbnRoZWFkLCB0Ym9keSB0ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbnRib2R5Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogOTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcbiAgXFxuLm1vZGFsSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuXFxuXFxuLnBhdGllbnRGb3JtVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGF0aWVudEZvcm1SaWdodCwgLnBhdGllbnRGb3JtTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9ybVRleHRJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLm5vdGVCb3h7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucGF0aWVudEZvcm1Cb3R0b217XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVye1xcbiAgICBmbGV4OiA1O1xcbn1cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiBjYWxjKDFweCArIDF2dyk7XFxufVxcblxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuZmxvYXQ6IHJpZ2h0O1xcbmJhY2tncm91bmQ6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbmNvbG9yOiBibGFjaztcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQYXRpZW50RmlsZSAqL1xcbi5wYXRpZW50RmlsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBhdGllbnRGaWxlVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGF0aWVudEZpbGVCb3R0b217XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wYXRpZW50RmllbGRWYWx1ZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUxlZnQsLnBhdGllbnRGaWxlUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm90dG9tVmFsdWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lB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LDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0td2hpdGU6I0YzRjlGQjtcXG4gICAgLS1ibHVlOiM4N0MwQ0Q7XFxuICAgIC0tbmF2eTojMjI2NTk3O1xcbiAgICAtLWNvbGQ6IzExM0Y2NztcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5oZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAzdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogIzExM0Y2NyAycHggc29saWQ7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXQ6Zm9jdXMsLnNlYXJjaElucHV0OmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5cXG4ubWFpblRhYmxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxuXFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG5cXG50aCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsdGh7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsMTkwLDE5MCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxudGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxudGhlYWQsIHRib2R5IHRyIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG5cXG50Ym9keSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxudGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5cXG4jYWRkUGF0aWVudEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4gICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA5MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG59XFxuICBcXG4ubW9kYWxIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGFsSGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG5cXG5cXG4ucGF0aWVudEZvcm1Ub3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wYXRpZW50Rm9ybVJpZ2h0LCAucGF0aWVudEZvcm1MZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5mb3JtVGV4dElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubm90ZUJveHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5wYXRpZW50Rm9ybUJvdHRvbXtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciwgLmhhYml0b3NDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXJ7XFxuICAgIGZsZXg6IDU7XFxufVxcblxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAgID4gLmZvcm1UaXRsZSwgLmVuZmVybWVkYWRlc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxlLCAuaGFiaXRvc0NvbnRhaW5lciAgPiAuZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBmb250LXNpemU6IGNhbGMoMXB4ICsgMXZ3KTtcXG59XFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFBhdGllbnRGaWxlICovXFxuLnBhdGllbnRGaWxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGF0aWVudEZpbGVUb3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wYXRpZW50RmlsZUJvdHRvbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnBhdGllbnRGaWVsZFZhbHVle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBhdGllbnRGaWxlTGVmdCwucGF0aWVudEZpbGVSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib3R0b21WYWx1ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBc3BpcmluYVwiXSxbXCJMYXRleFwiXSxbXCJMaWRvY2FpbmEgbyBBbmVzdGVzaWNvc1wiXSxbXCJOaW5ndW5hIGFsZXJnaWFcIl0sW1wiT3RyYSBhbGVyZ2lhXCJdLFtcIlBlbmljaWxpbmEgdSBPdHJvcyBBbnRpYmlvdGljb3NcIl0sW1wiU3VsZmFzXCJdLFtcIllvZG9cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQW5vbWFsaWEgZGVudG9mYWNpYWwsIG5vIGVzcGVjaWZpY2FkYVwiLFwiXCJdLFtcIkFub21hbGlhcyBkZSBsYSBwb3NpY2lvbiBkZWwgZGllbnRlXCIsXCJBcGluYW1pZW50by4gRGVzcGxhemFtaWVudG8uIERpYXN0ZW1hLiBFc3BhY2lhbWllbnRvIGFub3JtYWwuIFJvdGFjaW9uLiBUcmFuc3Bvc2ljaW9uLiBEaWVudGVzIGltcGFjdGFkb3MgbyBpbmNsdWlkb3MgY29uIHBvc2ljaW9uIGVjdG9waWNhLiBFeGNsdXllOiBkaWVudGVzIGltcGFjdGFkb3MgbyBpbmNsdWlkb3Mgc2luIHBvc2ljaW9uIGFub3JtYWwuXCJdLFtcIkFub21hbGlhcyBkZSBsYSByZWxhY2lvbiBlbnRyZSBsb3MgYXJjb3MgZGVudGFyaW9zXCIsXCJBbnRlcG9zaWNpb24uIERlc3ZpYWNpb24gZGUgbGEgbGluZWEgbWVkaWEgZGVsIGFyY28gZGVudGFyaW8uIERpc3RvY2x1c2lvbi4gTWVzaW9jbHVzaW9uLiBNb3JkaWRhIGFiaWVydGEuIE1vcmRpZGEgY3J1emFkYS4gT2NsdXNpb24gbGluZ3VhbCBwb3N0ZXJpb3IgZGUgbG9zIGRpZW50ZXMgbWF4aWxhcmVzLiBTb2JyZW1vcmRpZGEgKGV4Y2VzaXZhKSBob3Jpem9udGFsLCBwcm9mdW5kYSBvIHZlcnRpY2FsLlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcmVsYWNpb24gbWF4aWxvYmFzaWxhclwiLFwiQXNpbWV0cmlhIGRlIGxhIG1hbmRpYnVsYS4gUHJvZ25hdGlzbW8uIFJldHJvZ25hdGlzbW8uXCJdLFtcIkFub21hbGlhcyBkZW50b2ZhY2lhbGVzIGZ1bmNpb25hbGVzXCIsXCJDaWVycmUgYW5vcm1hbCBkZSBsb3MgbWF4aWxhcmVzLiBNYWxvY2x1c2lvbiBkZWJpZGEgYSBkZWdsdWNpb24gYW5vcm1hbCwgaGFiaXRvIGRpZ2l0YWwsIGxhYmlhbCBvIGxpbmd1YWwsIHJlc3BpcmFjaW9uIGJ1Y2FsLiBFeGNsdXllIGJydXhpc21vIHkgcmVjaGluYW1pZW50byBkZSBkaWVudGVzLlwiXSxbXCJBbm9tYWxpYXMgZXZpZGVudGVzIGRlbCB0YW1hbm8gZGUgbG9zIG1heGlsYXJlc1wiLFwiSGlwZXJwbGFzaWEgbyBoaXBvcGxhc2lhIGRlbCBtYXhpbGFyIG8gbWFuZGlidWxhLiBNYWNyb2duYWNpYS4gTWljcm9nbmFjaWEuIEV4Y2x1eWU6IGFjcm9tZWdhbGlhIHkgc2luZHJvbWUgZGUgUGllcnJlIFJvYmluLlwiXSxbXCJNYWxvY2x1c2lvbiBkZSB0aXBvIG5vIGVzcGVjaWZpY2Fkb1wiLFwiXCJdLFtcIk90cmFzIGFub21hbGlhcyBkZW50b2ZhY2lhbGVzXCIsXCJcIl0sW1wiVHJhc3Rvcm5vcyBkZSBsYSBhcnRpY3VsYWNpb24gdGVtcG9yb21heGlsYXJcIixcIkNhc3Rh77+9ZXRlbyBtYXhpbGFyLiBDb21wbGVqbyBvIFNpbmRyb21lIGRlIENvc3Rlbi4gU2luZHJvbWUgZGUgZGlzZnVuY2lvbiBkb2xvcm9zYSBkZSBsYSBhcnRpY3VsYWNpb24gdGVtcG9yb21hbmRpYnVsYXIuIFRyYXN0b3JubyBkZSBsYSBhcnRpY3VsYWNpb24gdGVtcG9yb21heGlsYXIuIEV4Y2x1eWU6IGVzZ3VpbmNlIG8gbHV4YWNpb24gcmVjaWVudGUgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJDYXJpZXMgZGUgbGEgZGVudGluYVwiLFwiXCJdLFtcIkNhcmllcyBkZWwgY2VtZW50b1wiLFwiXCJdLFtcIkNhcmllcyBkZW50YWwgbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbnRhcmlhIGRldGVuaWRhXCIsXCJcIl0sW1wiQ2FyaWVzIGxpbWl0YWRhIGFsIGVzbWFsdGVcIixcIk1hbmNoYXMgYmxhbmNhcyAoY2FyaWVzIGluY2lwaWVudGUpXCJdLFtcIk90cmFzIGNhcmllcyBkZW50YWxlc1wiLFwiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFsdGVyYWNpb25lcyBlbiBsYSBlcnVwY2lvbiBkZW50YXJpYVwiLFwiQ2FpZGEgcHJlbWF0dXJhIGRlIGxvcyBkaWVudGVzIHByaW1hcmlvcy4gRGVudGljaW9uIHByZWNvei4gRGllbnRlIG5hdGFsLiBEaWVudGUgbmVvbmF0YWwuIERpZW50ZSBwcmltYXJpbyAocGVyc2lzdGVudGUpIHJldGVuaWRvLiBFcnVwY2lvbiBwcmVtYXR1cmEgZGUgZGllbnRlLlwiXSxbXCJBbHRlcmFjaW9uZXMgZW4gbGEgZm9ybWFjaW9uIGRlbnRhcmlhXCIsXCJBcGxhc2lhIGUgaGlwb3BsYXNpYSBkZWwgY2VtZW50by4gRGllbnRlIGRlIFR1cm5lci4gRGlsYWNlcmFjaW9uIGRlbnRhcmlhLiBIaXBvcGxhc2lhIGRlbCBlc21hbHRlLiBPZG9udG9kaXNwbGFzaWEgcmVnaW9uYWwuIEV4Y2x1eWU6IGRpZW50ZXMgZGUgSHV0Y2hpbnNvbiB5IG1vbGFyZXMgbW9ydWxvaWRlcyBlbiBsYSBzaWZpbGlzIGNvbmdlbml0YS8gZGllbnRlcyBtb3RlYWRvcy5cIl0sW1wiQWx0ZXJhY2lvbmVzIGhlcmVkaXRhcmlhcyBkZSBsYSBlc3RydWN0dXJhIGRlbnRhcmlhLCBubyBjbGFzaWZpY2FkYXMgZW4gb3RyYSBwYXJ0ZVwiLFwiQW1lbG9nZW5lc2lzLiBEZW50aW5vZ2VuZXNpcy4gT2RvbnRvZ2VuZXNpcy4gRGllbnRlcyBlbiBjb25jaGEuIERpc3BsYXNpYSBkZW50aW5hbC5cIl0sW1wiQW5vZG9uY2lhXCIsXCJIaXBvZG9uY2lhLiBPbGlnb2RvbmNpYS5cIl0sW1wiQW5vbWFsaWFzIGRlbCB0YW1h77+9byB5IGRlIGxhIGZvcm1hIGRlbCBkaWVudGVcIixcIkNvbmNyZXNjZW5jaWEuIEZ1c2lvbi4gR2VtaW5hY2lvbi4gRGllbnRlcyBlbiBmb3JtYSBkZSBjbGF2aWphIChjb25pY29zKS4gRGllbnRlcyBldmFnaW5hZG9zLiBEZW5zIGluIGRlbnRlLiBNYWNyb2RvbmNpYS4gTWljcm9kb25jaWEuIFBlcmxhcyBkZWwgZXNtYWx0ZS4gVGF1cm9kb250aXNtby4gVHViZXJjdWxvIHBhcmFtb2xhci4gRXhjbHV5ZTogdHViZXJjdWxvIGRlIENhcmFiZWxsaS5cIl0sW1wiRGllbnRlcyBtb3RlYWRvc1wiLFwiRXNtYWx0ZSBtb3RlYWRvLiBGbHVvcm9zaXMgZGVudGFsLiBPcGFjaWRhZCBubyBmbHVvcmljYSBkZWwgZXNtYWx0ZS4gRXhjbHV5ZTogZGVwb3NpdG9zIChhZGhlcmVuY2lhcykgZW4gbG9zIGRpZW50ZXMuXCJdLFtcIkRpZW50ZXMgc3VwZXJudW1lcmFyaW9zXCIsXCJDdWFydG8gbW9sYXIuIERpZW50ZXMgc3VwbGVtZW50YXJpb3MuIERpc3RvbW9sYXIuIE1lc2lvZGVucy4gUGFyYW1vbGFyLlwiXSxbXCJPdHJvcyB0cmFzdG9ybm9zIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzXCIsXCJBbHRlcmFjaW9uIGRlbCBjb2xvciBkZWwgZGllbnRlIGR1cmFudGUgc3UgZm9ybWFjaW9uLiBNYW5jaGFzIGludHJpbnNlY2FzIGRlIGxvcyBkaWVudGVzIFNBSS5cIl0sW1wiU2luZHJvbWUgZGUgbGEgZXJ1cGNpb24gZGVudGFyaWFcIixcIlwiXSxbXCJUcmFzdG9ybm8gZGVsIGRlc2Fycm9sbG8gZGUgbG9zIGRpZW50ZXMgbm8gZXNwZWNpZmljYWRvIFwiLFwiVHJhc3Rvcm5vIGRlIGxhIG9kb250b2dlbmVzaXMgU0FJLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJEaWVudGVzIGltcGFjdGFkb3NcIixcIkRpZW50ZSBxdWUgbm8gaGEgZXJ1cGNpb25hZG8gZGViaWRvIGEgbGEgb2JzdHJ1Y2Npb24gcG9yIG90cm8gZGllbnRlLlwiXSxbXCJEaWVudGVzIGluY2x1aWRvcyBcIixcIkRpZW50ZSBxdWUgbm8gaGEgZXJ1cGNpb25hZG8gc2luIG9ic3RydWNjaW9uIHBvciBvdHJvIGRpZW50ZS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQXRyb2ZpYSBkZWwgcmVib3JkZSBhbHZlb2xhciBkZXNkZW50YWRvXCIsXCJcIl0sW1wiRXhmb2xpYWNpb24gZGUgbG9zIGRpZW50ZXMgZGViaWRhIGEgY2F1c2FzIHNpc3RlbWljYXNcIixcIlwiXSxbXCJPdHJhcyBhZmVjY2lvbmVzIGVzcGVjaWZpY2FkYXMgZGUgbG9zIGRpZW50ZXMgeSBkZSBzdXMgZXN0cnVjdHVyYXMgZGUgc29zdGVuXCIsXCJBZ3JhbmRhbWllbnRvIGRlbCByZWJvcmRlIGFsdmVvbGFyLiBPZG9udGFsZ2lhLiBQcm9sb25nYWNpb24gYWx2ZW9sYXIgaXJyZWd1bGFyLlwiXSxbXCJQZXJkaWRhIGRlIGRpZW50ZXMgZGViaWRhIGEgYWNjaWRlbnRlLCBleHRyYWNjaW9uIG8gZW5mZXJtZWRhZCBwZXJpb2RvbnRhbCBsb2NhbFwiLFwiXCJdLFtcIlJhaXogZGVudGFsIHJldGVuaWRhXCIsXCJcIl0sW1wiVHJhc3Rvcm5vcyBkZSBsb3MgZGllbnRlcyB5IGRlIHN1cyBlc3RydWN0dXJhcyBkZSBzb3N0ZW4sIG5vIGVzcGVjaWZpY2Fkb1wiLFwiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkhpcGVycGxhc2lhIGdpbmdpdmFsXCIsXCJGaWJyb21hdG9zaXMgZ2luZ2l2YWwuXCJdLFtcIkxlc2lvbmVzIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYSBhc29jaWFkYXMgY29uIHRyYXVtYXRpc21vXCIsXCJIaXBlcnBsYXNpYSBpcnJpdGF0aXZhIGRlbCByZWJvcmRlIGFsdmVvbGFyIGVkZW50dWxvIChoaXBlcnBsYXNpYSBwcm90ZXNpY2EpLlwiXSxbXCJPdHJvcyB0cmFzdG9ybm9zIGVzcGVjaWZpY2Fkb3MgZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhXCIsXCJFcHVsaXMgZGUgY2VsdWxhcyBnaWdhbnRlcy4gRXB1bGlzIGZpYnJvc28uIEdyYW51bG9tYSBwZXJpZmVyaWNvIGRlIGNlbHVsYXMgZ2lnYW50ZXMuIEdyYW51bG9tYSBwaW9nZW5vIGRlIGxhIGVuY2lhLiBSZWJsYW5kZWNpbWllbnRvIGRlbCByZWJvcmRlLlwiXSxbXCJSZXRyYWNjaW9uIGdpbmdpdmFsXCIsXCJSZWNlc2lvbiBnaW5naXZhbCBsb2NhbGl6YWRhLiBSZWNlc2lvbiBnaW5naXZhbCBnZW5lcmFsaXphZGEuIFJlY2VzaW9uIGdpbmdpdmFsIHBvc3RpbmZlY2Npb3NhLiBSZWNlc2lvbiBnaW5naXZhbCBwb3N0b3BlcmF0b3JpYS5cIl0sW1wiVHJhc3Rvcm5vIG5vIGVzcGVjaWZpY2FkbyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGEgXCIsXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQW5naW5hIGRlIFBlY2hvXCJdLFtcIkFydHJpdGlzXCJdLFtcIkFzbWFcIl0sW1wiQXRhcXVlIENhcmRpYWNvXCJdLFtcIkNhbmNlclwiXSxbXCJEaWFiZXRlcyBUaXBvIDFcIl0sW1wiRGlhYmV0ZXMgVGlwbyAyXCJdLFtcIkRvbG9yIGVuIFBlY2hvXCJdLFtcIkVuZmVybWVkYWQgZGVsIEhpZ2Fkb1wiXSxbXCJFbmZlcm1lZGFkIGRlbCBSacOxb25cIl0sW1wiRW5maXNlbWFcIl0sW1wiSGVwYXRpdGlzXCJdLFtcIkhpcGVydGVuc2lvblwiXSxbXCJIaXBvZ2x1Y2VtaWFcIl0sW1wiSGlwb3RlbnNpb25cIl0sW1wiTmluZ3VuYSBlbmZlcm1lZGFkXCJdLFtcIk90cmEgZW5mZXJtZWRhZFwiXSxbXCJQcm9ibGVtYSBkZSBUaXJvaWRlc1wiXSxbXCJQcm9ibGVtYXMgRXN0b21hY2FsZXNcIl0sW1wiU0lEQS8gVklIXCJdLFtcIlR1YmVyY3Vsb3Npc1wiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJDZWx1bGl0aXMgeSBhYnNjZXNvIGRlIGxhIGJvY2FcIixcIkFic2Nlc29zIHN1Ym1hbmRpYnVsYXJlcy4gQ2VsdWxpdGlzIGRlbCBwaXNvIGRlIGxhIGJvY2EuIEV4Y2x1eWUgYWJzY2VzbyBkZSBnbGFuZHVsYSBzYWxpdmFsIG8gbGVuZ3VhLCBhYnNjZXNvIHBlcmlhcGljYWwsIGFic2Nlc28gcGVyaW9kb250YWwsIGFic2Nlc28gcGVyaXRvbnNpbGFyLlwiXSxbXCJFc3RvbWF0aXRpcyBhZnRvc2EgcmVjdXJyZW50ZVwiLFwiQWZ0YXMgZGUgQmVkbmFyLiBFc3RvbWF0aXRpcyBhZnRvc2EgbWF5b3IgbyBtZW5vci4gRXN0b21hdGl0aXMgaGVycGV0aWZvcm1lLiBQZXJpYWRlbml0aXMgbXVjb3NhIG5lY3JvdGljYSByZWN1cnJlbnRlLiBVbGNlcmEgYWZ0b3NhIHJlY3VycmVudGUuXCJdLFtcIk90cmFzIGZvcm1hcyBkZSBlc3RvbWF0aXRpc1wiLFwiRXN0b21hdGl0aXMgcHJvdGVzaWNhLCB1bGNlcmF0aXZhLCB2ZXNpY3Vsb3NhLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBTk9NQUxJQVMgREVOVE9GQUNJQUxFUyAoSU5DTFVTTyBMQSBNQUxPQ0xVU0lPTikuXCJdLFtcIkNBUklFUyBERU5UQUxcIl0sW1wiRElFTlRFUyBJTkNMVUlET1MgRSBJTVBBQ1RBRE9TXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBMRU5HVUFcIl0sW1wiRU5GRVJNRURBREVTIERFIExBIFBVTFBBIFkgREUgTE9TIFRFSklET1MgUEVSSUFQSUNBTEVTXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQVMgR0xBTkRVTEFTIFNBTElWQUxFU1wiXSxbXCJFU1RPTUFUSVRJUyBZIExFU0lPTkVTIEFGSU5FU1wiXSxbXCJHSU5HSVZJVElTIFkgRU5GRVJNRURBREVTIFBFUklPRE9OVEFMRVNcIl0sW1wiTFVYQUNJT04sIEVTR1VJTkNFIFkgVE9SQ0VEVVJBIERFIEFSVElDVUxBQ0lPTkVTIFkgREUgTElHQU1FTlRPUyBERSBMQSBDQUJFWkFcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBMQUJJT1MgWSBERSBMQSBNVUNPU0EgQlVDQUxcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBNQVhJTEFSRVNcIl0sW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBURUpJRE9TIERVUk9TIERFIExPUyBESUVOVEVTXCJdLFtcIk9UUk9TIFRSQVNUT1JOT1MgREUgTEEgRU5DSUEgWSBERSBMQSBaT05BIEVERU5UVUxBXCJdLFtcIk9UUk9TIFRSQVNUT1JOT1MgREUgTE9TIERJRU5URVMgWSBERSBTVVMgRVNUUlVDVFVSQVMgREUgU09TVEVOXCJdLFtcIlFVSVNURVMgREUgTEEgUkVHSU9OIEJVQ0FMLCBOTyBDTEFTSUZJQ0FET1MgRU4gT1RSQSBQQVJURVwiXSxbXCJUUkFTVE9STk9TIERFTCBERVNBUlJPTExPIFkgREUgTEEgRVJVUENJT04gREUgTE9TIERJRU5URVNcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiR2luZ2l2aXRpcyBhZ3VkYVwiLFwiRXhjbHV5ZSBnaW5naXZpdGlzIHVsY2Vyb25lY3JvdGljYSBhZ3VkYSB5IGdpbmdpdm9lc3RvbWF0aXRpcyBoZXJwZXRpY2FcIl0sW1wiRW5mZXJtZWRhZCBkZWwgcGVyaW9kb250byBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJHaW5naXZpdGlzIGNyb25pY2FcIixcIkdpbmdpdml0aXMgY3JvbmljYSBkZXNjYW1hdGl2YSwgZ2luZ2l2aXRpcyBjcm9uaWNhIGhpcGVycGxhc2ljYSwgZ2luZ2l2aXRpcyBjcm9uaWNhIG1hcmdpbmFsIHNpbXBsZSwgZ2luZ2l2aXRpcyBjcm9uaWNhIHVsY2VyYXRpdmEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBwZXJpb2RvbnRhbGVzXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhZ3VkYVwiLFwiQWJzY2VzbyBwYXJhZGVudGFsLiBBYnNjZXNvIHBlcmlvZG9udGFsLiBQZXJpY29yb25pdGlzIGFndWRhLiBFeGNsdXllOiBhYnNjZXNvIHBlcmlhcGljYWwgY29uIGZpc3R1bGEvIHBlcmlvZG9udGl0aXMgYXBpY2FsIGFndWRhLlwiXSxbXCJQZXJpb2RvbnRpdGlzIGNyb25pY2FcIixcIlBlcmljb3Jvbml0aXMgY3JvbmljYS4gUGVyaW9kb250aXRpcyBzaW1wbGUuIFBlcmlvZG9udGl0aXMgY29tcGxpY2FkYS5cIl0sW1wiUGVyaW9kb250b3NpcyAoanV2ZW5pbClcIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJGdW1hclwiXSxbXCJBbGNvaG9sXCJdLFtcIkNvY2FpbmFcIl0sW1wiT3RyYXMgZHJvZ2FzXCJdLFtcIk90cm9zIGhhYml0b3NcIl0sW1wiTmluZ3VuIGhhYml0b1wiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJFbmZlcm1lZGFkZXMgZGUgbG9zIGxhYmlvc1wiLFwiUGVybGVjaGUgbyBxdWVpbGl0aXMgYW5ndWxhci4gUXVlaWxpdGlzIGFuZ3VsYXIsIGV4Zm9saWF0aXZhLCBnbGFuZHVsYXIuIFF1ZWlsb2RpbmlhLiBRdWVpbG9zaXMuIEV4Y2x1eWUgYXJpYm9mbGF2aW5vc2lzIChwb3IgZGVmaWNpZW5jaWEgZGUgcmlib2ZsYXZpbmEpLCBQZXJsZWNoZSBkZWJpZG8gYSBjYW5kaWRpYXNpcywgUGVybGVjaGUgZGViaWRvIGEgZGVmaWNpZW5jaWEgZGUgcmlib2ZsYXZpbmEuIFF1ZWlsaXRpcyBkZWJpZGEgYSB0cmFzdG9ybm9zIHJlbGFjaW9uYWRvcyBjb24gbGEgcmFkaWFjaW9uLlwiXSxbXCJGaWJyb3NpcyBkZSBsYSBzdWJtdWNvc2EgYnVjYWxcIixcIlwiXSxbXCJHcmFudWxvbWEgeSBsZXNpb25lcyBzZW1lamFudGVzIGRlIGxhIG11Y29zYSBidWNhbFwiLFwiR3JhbnVsb21hIGVvc2lub2ZpbG8uIEdyYW51bG9tYSBwaW9nZW5pY28uIFhhbnRvbWEgdmVycnVnaWZvcm1lLlwiXSxbXCJIaXBlcnBsYXNpYSBpcnJpdGF0aXZhIGRlIGxhIG11Y29zYSBidWNhbFwiLFwiRXhjbHV5ZSBoaXBlcnBsYXNpYSBpcnJpdGF0aXZhIGRlIGxhIHpvbmEgZWRlbnR1bGEgKGhpcGVycGxhc2lhIHByb3Rlc2ljYSlcIl0sW1wiTGV1Y29wbGFzaWEgcGlsb3NhXCIsXCJcIl0sW1wiTGV1Y29wbGFzaWEgeSBvdHJhcyBhbHRlcmFjaW9uZXMgZGVsIGVwaXRlbGlvIGJ1Y2FsLCBpbmNsdXllbmRvIGxhIGxlbmd1YVwiLFwiRXJpdHJvcGxhc2lhLiBMZXVjb2VkZW1hLiBMZXVjb3F1ZXJhdG9zaXMgbmljb3RpbmljYSBwYWxhdGluYS4gUGFsYWRhciBkZWwgZnVtYWRvci4gRXhjbHV5ZSBsZXVjb3BsYXNpYSBwaWxvc2EuXCJdLFtcIk1vcmRlZHVyYSBkZWwgbGFiaW8geSBkZSBsYSBtZWppbGxhXCIsXCJcIl0sW1wiT3RyYXMgbGVzaW9uZXMgeSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIk11Y2lub3NpcyBidWNhbCBmb2NhbFwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBdHJvZmlhIGRlIGxhcyBwYXBpbGFzIGxpbmd1YWxlc1wiLFwiR2xvc2l0aXMgYXRyb2ZpY2FcIl0sW1wiRW5mZXJtZWRhZGVzIGRlIGxhIGxlbmd1YSwgbm8gZXNwZWNpZmljYWRhLlwiLFwiR2xvc29wYXRpYVwiXSxbXCJHbG9zaXRpc1wiLFwiQWJzY2VzbyBkZSBsYSBsZW5ndWEuIFVsY2VyYSB0cmF1bWF0aWNhIGRlIGxhIGxlbmd1YS4gRXhjbHV5ZSBnbG9zaXRpcyBhdHJvZmljYS5cIl0sW1wiR2xvc2l0aXMgcm9tYm9pZGVhIG1lZGlhbmFcIixcIlwiXSxbXCJHbG9zb2RpbmlhXCIsXCJHbG9zb3Bpcm9zaXMuIExlbmd1YSBkb2xvcm9zYS5cIl0sW1wiSGlwZXJ0cm9maWEgZGUgbGFzIHBhcGlsYXMgbGluZ3VhbGVzXCIsXCJIaXBlcnRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBmb2xpYWNlYXMuIExlbmd1YSBuZWdyYSBwaWxvc2EuIExlbmd1YSBuZWdyYSB2ZWxsb3NhLCBMZW5ndWEgc2FidXJyYWwuXCJdLFtcIkxlbmd1YSBnZW9ncmFmaWNhXCIsXCJHbG9zaXRpcyBhcmVhdGEgZXhmb2xpYXRpdmEuIEdsb3NpdGlzIG1pZ3JhdG9yaWEgYmVuaWduYS5cIl0sW1wiTGVuZ3VhIHBsZWdhZGFcIixcIkxlbmd1YSBjb24gc3VyY29zLiBMZW5ndWEgZXNjcm90YWwuIExlbmd1YSBmaXN1cmFkYS4gRXhjbHV5ZSBsZW5ndWEgZmlzdXJhZGEgY29uZ2VuaXRhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZGUgbGEgbGVuZ3VhXCIsXCJBZ3JhbmRhbWllbnRvLiBBdHJvZmlhLiBDcmVuYWNpb24gZGUgbGEgbGVuZ3VhLiBIaXBlcnRyb2ZpYS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRXNndWluY2VzIHkgdG9yY2VkdXJhcyBkZSBhcnRpY3VsYWNpb25lcyB5IGxpZ2FtZW50b3MgZGUgb3RyYXMgcGFydGVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgY2FiZXphXCIsXCJcIl0sW1wiRXNndWluY2VzIHkgdG9yY2VkdXJhcyBkZWwgbWF4aWxhclwiLFwiQXJ0aWN1bGFjaW9uIG8gbGlnYW1lbnRvIHRlbXBvcm9tYXhpbGFyXCJdLFtcIkx1eGFjaW9uIGRlIG90cmFzIHBhcnRlcyB5IGRlIGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIGNhYmV6YVwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBjYXJ0aWxhZ28gc2VwdGFsIGRlIGxhIG5hcml6XCIsXCJcIl0sW1wiTHV4YWNpb24gZGVsIGRpZW50ZVwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBtYXhpbGFyXCIsXCJNYW5kaWJ1bGEuIE1heGlsYXIuIFRlbXBvcm9tYXhpbGFyLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBZmVjY2lvbmVzIGluZmxhbWF0b3JpYXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiT3N0ZWl0aXMuIE9zdGVvbWllbGl0aXMgbmVvbmF0YWwuIE9zdGVvcnJhZGlvbmVjcm9zaXMuIFBlcmlvc3RpdGlzLCBTZWN1ZXN0cm8gb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBcIl0sW1wiQWx2ZW9saXRpcyBkZWwgbWF4aWxhclwiLFwiQWx2ZW9sbyBzZWNvLiBPc3RlaXRpcyBhbHZlb2xhci5cIl0sW1wiRW5mZXJtZWRhZGVzIGRlIGxvcyBtYXhpbGFyZXMsIG5vIGVzcGVjaWZpY2FkYS5cIixcIlwiXSxbXCJHcmFudWxvbWEgY2VudHJhbCBkZSBjZWx1bGFzIGdpZ2FudGVzXCIsXCJFeGNsdXllIGdyYW51bG9tYSBwZXJpZmVyaWNvIGRlIGNlbHVsYXMgZ2lnYW50ZXMuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyBtYXhpbGFyZXNcIixcIkRpc3BsYXNpYSBmaWJyb3NhLiBFeG9zdG9zaXMuIEhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBtYXhpbGFyLiBIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgY29uZGlsYXIgbWFuZGlidWxhci4gUXVlcnViaXNtby5cIl0sW1wiVHJhc3Rvcm5vcyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJRdWlzdGUgbGF0ZW50ZSBvc2VvIGRlIGxvcyBtYXhpbGFyZXMuIFF1aXN0ZSBkZSBTdGFmbmUuIFRvcnVzIG1hbmRpYnVsYXIuIFRvcnVzIHBhbGF0aW5vLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBYnNjZXNvIHBlcmlhcGljYWwgY29uIGZpc3R1bGFcIixcIkFic2Nlc28gZGVudGFsIGNvbiBmaXN0dWxhLiBBYnNjZXNvIGRlbnRvYWx2ZW9sYXIgY29uIGZpc3R1bGEuXCJdLFtcIkFic2Nlc28gcGVyaWFwaWNhbCBzaW4gZmlzdHVsYVwiLFwiQWJzY2VzbyBkZW50YWwgc2luIGZpc3R1bGEuIEFic2Nlc28gZGVudG9hbHZlb2xhciBzaW4gZmlzdHVsYS5cIl0sW1wiRGVnZW5lcmFjaW9uIGRlIGxhIHB1bHBhXCIsXCJDYWxjaWZpY2FjaW9uZXMgZGUgbGEgcHVscGEuIFBpZWRyYXMuIERlbnRpY3Vsb3MuXCJdLFtcIkZvcm1hY2lvbiBhbm9ybWFsIGRlIHRlamlkbyBkdXJvIGVuIGxhIHB1bHBhXCIsXCJEZW50aW5hIHNlY3VuZGFyaWEgbyBpcnJlZ3VsYXIuXCJdLFtcIk5lY3Jvc2lzIGRlIGxhIHB1bHBhXCIsXCJHYW5ncmVuYSBkZSBsYSBwdWxwYS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgcHVscGEgeSBkZWwgdGVqaWRvIHBlcmlhcGljYWxcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFwaWNhbCBhZ3VkYSBvcmlnaW5hZGEgZW4gbGEgcHVscGFcIixcIlwiXSxbXCJQZXJpb2RvbnRpdGlzIGFwaWNhbCBjcm9uaWNhXCIsXCJHcmFudWxvbWEgYXBpY2FsIG8gcGVyaWFwaWNhbC4gUGVyaW9kb250aXRpcyBhcGljYWwgY3JvbmljYS5cIl0sW1wiUHVscGl0aXNcIixcIkFic2Nlc28uIFBvbGlwby4gUHVscGl0aXMgYWd1ZGEuIFB1bHBpdGlzIGNyb25pY2EgKGhpcGVycGxhc2ljYSwgdWxjZXJhdGl2YSkuIFB1bHBpdGlzIHN1cHVyYXRpdmEuXCJdLFtcIlF1aXN0ZSByYWRpY3VsYXJcIixcIlF1aXN0ZSBhcGljYWwgKHBlcmlvZG9udGFsKS4gUXVpc3RlIHBlcmlhcGljYWwuIFF1aXN0ZSByYWRpY3VsYXIgcmVzaWR1YWwuIEV4Y2x1eWU6IHF1aXN0ZSBsYXRlcmFsIHBlcmlvZG9udGFsLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJPdHJvcyBxdWlzdGVzIGRlIGxhIHJlZ2lvbiBidWNhbCwgbm8gY2xhc2lmaWNhZG9zIGVuIG90cmEgcGFydGVcIixcIlBlcmxhIGRlIEVwc3RlaW4uIFF1aXN0ZXM6IGRlcm1vaWRlLCBlcGlkZXJtb2lkZSwgbGluZm9lcGl0ZWxpYWwsIG5hc29hbHZlb2xhciwgbmFzb2xhYmlhbC5cIl0sW1wiT3Ryb3MgcXVpc3RlcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJRdWlzdGUgbWF4aWxhciBhbmV1cmlzbWF0aWNvLiBRdWlzdGUgbWF4aWxhciBoZW1vcnJhZ2ljby4gUXVpc3RlIG1heGlsYXIgdHJhdW1hdGljby4gRXhjbHV5ZSBxdWlzdGUgZGUgU3RhZm5lLiBRdWlzdGUgbGF0ZW50ZSBvc2VvIGRlIGxvcyBtYXhpbGFyZXMuIFwiXSxbXCJRdWlzdGVzIGRlIGxhIHJlZ2lvbiBidWNhbCwgc2luIG90cmEgZXNwZWNpZmljYWNpb25cIixcIlwiXSxbXCJRdWlzdGVzIGRlIGxhcyBmaXN1cmFzIChubyBvZG9udG9nZW5pY29zKVwiLFwiUXVpc3RlcyBkZWw6IGNhbmFsIGluY2lzaXZvLCBnbG9idWxvbWF4aWxhciwgbmFzb3BhbGF0aW5vLCBwYWxhdGlubyBtZWRpbywgcGFwaWxhIHBhbGF0aW5hLlwiXSxbXCJRdWlzdGVzIG9yaWdpbmFkb3MgcG9yIGVsIGRlc2Fycm9sbG8gZGUgbG9zIGRpZW50ZXMgKHF1aXN0ZXMgb2RvbnRvZ2VuaWNvcylcIixcIlF1ZXJhdG9xdWlzdGUuIFF1aXN0ZXM6IGRlbnRpZ2VybywgZXJ1cGNpb24gZGVudGFyaWEsIGZvbGljdWxhciwgZ2luZ2l2YWwsIGxhdGVyYWwgcGVyaW9kb250YWwsIHByaW1vcmRpYWwuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFic2Nlc28gZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiXCJdLFtcIkFsdGVyYWNpb25lcyBkZSBsYSBzZWNyZWNpb24gc2FsaXZhbFwiLFwiSGlwb3NlY3JlY2lvbiBzYWxpdmFsLiBQdGlhbGlzbW8uIFhlcm9zdG9taWEuIEV4Y2x1eWUgU2luZHJvbWUgZGUgU2rvv71ncmVuLlwiXSxbXCJBdHJvZmlhIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlwiXSxbXCJFbmZlcm1lZGFkIGRlIGdsYW5kdWxhIHNhbGl2YWwsIG5vIGVzcGVjaWZpY2FkYVwiLFwiU2lhbGFkZW5vcGF0aWFcIl0sW1wiRmlzdHVsYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJFeGNsdXllIGZpc3R1bGEgY29uZ2VuaXRhIGRlIGdsYW5kdWxhIHNhbGl2YWwuXCJdLFtcIkhpcGVydHJvZmlhIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlwiXSxbXCJNdWNvY2VsZSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJRdWlzdGUgbXVjb3NvIGRlIGdsYW5kdWxhIHNhbGl2YWwgcG9yIGV4dHJhdmFzYWNpb24gbyBwb3IgcmV0ZW5jaW9uLiBSYW51bGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBkZSBsYXMgZ2xhbmR1bGFzIHNhbGl2YWxlc1wiLFwiRW5mZXJtZWRhZCBkZSBNaWt1bGljei4gRXN0ZW5vc2lzIGRlbCBjb25kdWN0byBzYWxpdmFsLiBTaWFsb21ldGFwbGFzaWEgbmVjcm90aXphbnRlLiBFeGNsdXllIHNpbmRyb21lIHNlY28gKFNq77+9Z3JlbikuXCJdLFtcIlNpYWxvYWRlbml0aXNcIixcIkV4Y2x1eWU6IGZpZWJyZSB1dmVvcGFyb3RpZGVhIChIZWVyZm9yZHQpLCBwYXJvdGlkaXRpcyBpbmZlY2Npb3NhIChlcGlkZW1pY2EpLlwiXSxbXCJTaWFsb2xpdGlhc2lzXCIsXCJDYWxjdWxvIGRlIGNvbmR1Y3RvIG8gZGUgZ2xhbmR1bGEgc2FsaXZhbC5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWJyYXNpb24gZGUgbG9zIGRpZW50ZXNcIixcIkFicmFzaW9uIHBvciBkZW50aWZyaWNvLCBoYWJpdG9zLCBvY3VwYWNpb25hbCwgcml0dWFsLCB0cmFkaWNpb25hbC4gRGVmZWN0byBjdW5laWZvcm1lIGRlIGxvcyBkaWVudGVzLlwiXSxbXCJBbnF1aWxvc2lzIGRlbnRhbFwiLFwiXCJdLFtcIkF0cmljaW9uIGV4Y2VzaXZhIGRlIGxvcyBkaWVudGVzXCIsXCJEZXNnYXN0ZSBvY2x1c2FsLiBEZXNnYXN0ZSBwcm94aW1hbC5cIl0sW1wiQ2FtYmlvcyBwb3N0ZXJ1cHRpdm9zIGRlbCBjb2xvciBkZSBsb3MgdGVqaWRvcyBkZW50YWxlcyBkdXJvc1wiLFwiRXhjbHV5ZSBkZXBvc2l0b3MgKGFjcmVjaW9uZXMpIGVuIGxvcyBkaWVudGVzLlwiXSxbXCJEZXBvc2l0b3MgKGFjcmVjaW9uZXMpIGVuIGxvcyBkaWVudGVzXCIsXCJDYWxjdWxvIGRlbnRhbCBzdXByYWdpbmdpdmFsIG8gc3ViZ2luZ2l2YWwuIERlcG9zaXRvIGVuIGxvcyBkaWVudGVzIGFuYXJhbmphZG8sIGJldGVsLCBtYXRlcmlhIGFsYmEsIG5lZ3JvLCB0YWJhY28sIHZlcmRlLiBQaWdtZW50YWNpb24gZGUgbG9zIGRpZW50ZXMuXCJdLFtcIkVuZmVybWVkYWQgbm8gZXNwZWNpZmljYWRhIGRlIGxvcyB0ZWppZG9zIGRlbnRhbGVzIGR1cm9zXCIsXCJcIl0sW1wiRXJvc2lvbiBkZSBsb3MgZGllbnRlc1wiLFwiRGViaWRhIGEgZGlldGEsIGRyb2dhcyB5IG1lZGljYW1lbnRvcywgdm9taXRvIHBlcnNpc3RlbnRlLCBpZGlvcGF0aWNhLCBvY3VwYWNpb25hbC5cIl0sW1wiSGlwZXJjZW1lbnRvc2lzXCIsXCJIaXBlcnBsYXNpYSBkZWwgY2VtZW50by5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGVzcGVjaWZpY2FkYXMgZGUgbG9zIHRlamlkb3MgZHVyb3MgZGUgbG9zIGRpZW50ZXNcIixcIkRlbnRpbmEgc2Vuc2libGUuIEVzbWFsdGUgaXJyYWRpYWRvLlwiXSxbXCJSZWFic29yY2lvbiBwYXRvbG9naWNhIGRlIGxvcyBkaWVudGVzXCIsXCJHcmFudWxvbWEgaW50ZXJubyBkZSBsYSBwdWxwYS4gUmVhYnNvcmNpb24gZXh0ZXJuYSBkZSBsb3MgZGllbnRlcy5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWp1c3RlIG9jbHVzYWxcIl0sW1wiQmlvcHVscGVjdG9taWFcIl0sW1wiQ2FuYWxpemFjaW9uIGNvbiBlc3BlY2lhbGlzdGFcIl0sW1wiQ3VyZXRhamUgYWJpZXJ0b1wiXSxbXCJDdXJldGFqZSBjZXJyYWRvXCJdLFtcIkV4b2RvbmNpYSBxdWlydXJnaWNhXCJdLFtcIkV4b2RvbmNpYSBzaW1wbGVcIl0sW1wiSW5zdHJ1Y2Npb24gZGUgdGVjbmljYSBkZSBjZXBpbGxhZG9cIl0sW1wiSW50ZXJjb25zdWx0YSBjb24gY2lydWphbm8gbWF4aWxvZmFjaWFsXCJdLFtcIkludGVyY29uc3VsdGEgY29uIGVuZG9kb25jaXN0YVwiXSxbXCJOZWNyb3B1bHBlY3RvbWlhXCJdLFtcIk9idHVyYWNpb24gcGVybWFuZW50ZVwiXSxbXCJPYnR1cmFjaW9uIHRlbXBvcmFsXCJdLFtcIk9wZXJhdG9yaWEgRGVudGFsXCJdLFtcIk9yaWVudGFjaW9uIHNvYnJlIHNhbHVkIGRlbnRhbFwiXSxbXCJQcm9maWxheGlzXCJdLFtcIlB1bHBlY3RvbWlhXCJdLFtcIlB1bHBvdG9taWFcIl0sW1wiUmV0aXJvIGRlIHN1dHVyYXNcIl0sW1wiU2VndWltaWVudG8gcG9zdC1leHRyYWNjaW9uXCJdLFtcIlNlbGxhZG9yIGRlIGZvc2V0YXMgeSBmaXN1cmFzXCJdLFtcIlNvbGljaXR1ZCBkZSBlc3R1ZGlvcyBjb21wbGVtZW50YXJpb3NcIl1dIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZW5lcmFsIGZyb20gJy4vZXhjZWwvZ2VuZXJhbGVzLmNzdidcbmltcG9ydCBhbGVyZ2lhcyBmcm9tICcuL2V4Y2VsL2FsZXJnaWFzLmNzdidcbmltcG9ydCBkZW50b2ZhY2lhbCBmcm9tICcuL2V4Y2VsL2Fub21hbGlhcy5jc3YnXG5pbXBvcnQgY2FyaWVzIGZyb20gICAnLi9leGNlbC9jYXJpZXMuY3N2J1xuaW1wb3J0IGRpZW50ZXMgZnJvbSAnLi9leGNlbC9kaWVudGVzLmNzdidcbmltcG9ydCBlbmZlcm1lZGFkZXMgZnJvbSAgICAnLi9leGNlbC9lbmZlcm1lZGFkZXMuY3N2J1xuaW1wb3J0IGxlbmd1YSBmcm9tICcuL2V4Y2VsL2xlbmd1YS5jc3YnXG5pbXBvcnQgcHVscGEgZnJvbSAnLi9leGNlbC9wdWxwYS5jc3YnXG5pbXBvcnQgc2FsaXZhbGVzIGZyb20gJy4vZXhjZWwvc2FsaXZhbGVzLmNzdidcbmltcG9ydCBlc3RvbWF0aXRpcyBmcm9tICcuL2V4Y2VsL2VzdG9tYXRpdGlzLmNzdidcbmltcG9ydCBnaW5naXZpdGlzIGZyb20gICcuL2V4Y2VsL2dpbmdpdml0aXMuY3N2J1xuaW1wb3J0IGhhYml0b3MgZnJvbSAnLi9leGNlbC9oYWJpdG9zLmNzdidcbmltcG9ydCBsdXhhY2lvbiBmcm9tICcuL2V4Y2VsL2x1eGFjaW9uLmNzdidcbmltcG9ydCBsYWJpb3NPdHJvcyBmcm9tICcuL2V4Y2VsL2xhYmlvc090cm9zLmNzdidcbmltcG9ydCBtYXhpbGFyZXNPdHJvcyBmcm9tICcuL2V4Y2VsL21heGlsYXJlc090cm9zLmNzdidcbmltcG9ydCB0ZWppZG9zT3Ryb3MgZnJvbSAnLi9leGNlbC90ZWppZG9zT3Ryb3MuY3N2J1xuaW1wb3J0IGVuY2lhVHJhbnN0b3JubyBmcm9tICcuL2V4Y2VsL2VuY2lhVHJhbnN0b3Juby5jc3YnXG5pbXBvcnQgZGllbnRlc090cm9zIGZyb20gJy4vZXhjZWwvZGllbnRlc090cm9zLmNzdidcbmltcG9ydCBxdWlzdGVzIGZyb20gJy4vZXhjZWwvcXVpc3Rlcy5jc3YnXG5pbXBvcnQgZGVzYXJyb2xsbyBmcm9tICcuL2V4Y2VsL2Rlc2Fycm9sbG8uY3N2J1xuaW1wb3J0IHRyYXRhbWllbnRvcyBmcm9tICcuL2V4Y2VsL3RyYXRhbWllbnRvcy5jc3YnXG5cblxuXG5sZXQgbG9hZERhdGEgPSAoKSA9PntcblxuICAgIGxldCBnZW5lcmFsQXJyYXkgPSBkZUFycmF5KGdlbmVyYWwpXG4gICAgbGV0IGFsZXJnaWFzQXJyYXkgPSBkZUFycmF5KGFsZXJnaWFzKVxuICAgIGxldCBlbmZlcm1lZGFkZXNBcnJheSA9IGRlQXJyYXkoZW5mZXJtZWRhZGVzKVxuICAgIGxldCBoYWJpdG9zQXJyYXkgPSBkZUFycmF5KGhhYml0b3MpXG4gICAgbGV0IHRyYXRhbWllbnRvc0FycmF5ID0gZGVBcnJheSh0cmF0YW1pZW50b3MpXG5cbiAgICBcbiAgICBsZXQgZ2VuZXJhbGVzQXJyYXkgPSBbZGVudG9mYWNpYWwsY2FyaWVzLGRpZW50ZXMsbGVuZ3VhLHB1bHBhLHNhbGl2YWxlcyxlc3RvbWF0aXRpcyxnaW5naXZpdGlzLGx1eGFjaW9uLGxhYmlvc090cm9zLG1heGlsYXJlc090cm9zLHRlamlkb3NPdHJvcyxlbmNpYVRyYW5zdG9ybm8sZGllbnRlc090cm9zLHF1aXN0ZXMsZGVzYXJyb2xsb11cbiAgICBcbiAgICBsZXQgbWFpbkFycmF5ID0gW2dlbmVyYWxBcnJheSxhbGVyZ2lhc0FycmF5LGVuZmVybWVkYWRlc0FycmF5LGhhYml0b3NBcnJheSx0cmF0YW1pZW50b3NBcnJheSxnZW5lcmFsZXNBcnJheV1cbiAgICBcbiAgICByZXR1cm4gbWFpbkFycmF5XG59XG5cblxuXG5cblxuLyogRnVuY3Rpb24gaW4gY2hhcmdlIG9mIGNoYW5naW5nIHRoZSB2YWx1ZXMgaW50byBhIG5vcm1hbCBhcnJheSAqL1xubGV0IGRlQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgZGVBcnJheWVkPSBbXS5jb25jYXQuYXBwbHkoW10sIGFycmF5KTtcbiAgICByZXR1cm4gZGVBcnJheWVkXG59XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZERhdGFcbn0iLCJsZXQgZ2V0VG9kYXlzRGF0ZSA9ICgpID0+IHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0b2RheSA9IGRkICsgJy8nICsgbW0gKyAnLycgKyB5eXl5O1xuXG4gICAgcmV0dXJuIHRvZGF5XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0VG9kYXlzRGF0ZVxufSIsImxldCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuXG5sZXQgY3JlYXRlRE9NQ29udGFpbmVyID0gKGNsYXNzbGlzdE5hbWUsbmFtZSkgPT57XG4gICAgXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyXG5cbn1cblxubGV0IGNyZWF0ZURPTUVsZW1lbnQgPSAodHlwZSxjbGFzc2xpc3QsdGV4dENvbnRlbnQsbmFtZSkgPT57XG4gICAgXG4gICAgICAgIFxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NQ29udGFpbmVyLFxuICAgIGNyZWF0ZURPTUVsZW1lbnRcbn0iLCJcbmxldCBsb2FkUGFnZVN0cnVjdHVyZSA9ICgpID0+IHtcbn1cblxuZXhwb3J0e1xuICAgIGxvYWRQYWdlU3RydWN0dXJlXG59IiwiaW1wb3J0IHsgcGwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCJcblxubGV0IHNhdmVJbkxvY2FsU3RvcmFnZSAgPSAoa2V5LHZhbHVlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0gKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxufVxuXG5sZXQgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICBcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSl7ICAgICBcbiAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IHBsYWNlSG9sZGVyID0gW11cbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgYSBwbGFjZWhvbGRlciBhcnJheScpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIChrZXksSlNPTi5zdHJpbmdpZnkocGxhY2VIb2xkZXIpKVxuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgfVxuICAgIFxuICAgXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgc2F2ZUluTG9jYWxTdG9yYWdlLFxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuXG5sZXQgY3JlYXRlTW9kYWxTdHJ1Y3R1cmUgPSAoY29udGVudCxtb2RhbE5hbWUsdGl0bGUsb3BlbkJ1dHRvbik9PntcblxuXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgQ29udGFpbmVyICovXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdtb2RhbCcsbW9kYWxOYW1lKVxuICAgIFxuICAgIGxldCBtb2RhbENvbnRlbnQgPSBjcmVhdGVET01Db250YWluZXIoJ21vZGFsQ29udGVudCcpXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBoZWFkZXIgKi9cbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBjcmVhdGVET01Db250YWluZXIoYCR7bW9kYWxOYW1lfUhlYWRlcmApXG4gICAgXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgdGl0bGUgKi9cbiAgICBsZXQgbW9kYWxUaXRsZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ21vZGFsSGVhZGVyVGl0bGUnLHRpdGxlKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpXG4gICAgLyogQ3JlYXRlcyB0aGUgY2xvc2UgYnV0dG9uKi9cbiAgICBsZXQgY2xvc2UgID0gY3JlYXRlRE9NRWxlbWVudCgnYnV0dG9uJywnY2xvc2UnLCd4JylcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSlcblxuICAgIC8qIEFkZHMgdGhlIG1vZGFsICovXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIH0pXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBcbiAgICBcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTW9kYWxTdHJ1Y3R1cmVcbn0iLCJjbGFzcyBQYWNpZW50ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLGFnZSxzZXgsZ2VuZXJhbCxlc3BlY2lmaWNvLHRyYXRhbWllbnRvLGZhcm1hY290ZXJhcGlhLGVuZmVybWVkYWRlcyxhbGVyZ2lhcyxoYWJpdG9zLGRhdGUsaWQsbm90ZXMpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgIHRoaXMuc2V4ID0gc2V4IDtcbiAgICAgIHRoaXMuZ2VuZXJhbCA9IGdlbmVyYWw7XG4gICAgICB0aGlzLmVzcGVjaWZpY28gPSBlc3BlY2lmaWNvO1xuICAgICAgdGhpcy50cmF0YW1pZW50byA9IHRyYXRhbWllbnRvO1xuICAgICAgdGhpcy5mYXJtYWNvdGVyYXBpYSA9IGZhcm1hY290ZXJhcGlhO1xuICAgICAgdGhpcy5lbmZlcm1lZGFkZXMgPSBlbmZlcm1lZGFkZXM7XG4gICAgICB0aGlzLmFsZXJnaWFzID0gYWxlcmdpYXM7XG4gICAgICB0aGlzLmhhYml0b3MgPSBoYWJpdG9zO1xuICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9XG4gICAgXG59XG5cbmNsYXNzIEV4cGVkaWVudGUge1xuICBjb25zdHJ1Y3RvcihjaXRhLHBhY2llbnRlKXtcbiAgICB0aGlzLmNpdGEgPSBjaXRhXG4gICAgdGhpcy5wYWNpZW50ZSA9IHBhY2llbnRlXG4gIH1cbn1cblxuY2xhc3MgQ2l0YSB7XG4gIGNvbnN0cnVjdG9yKHBhY2llbnRlLGZlY2hhLG5vdGFzKXtcbiAgICB0aGlzLnBhY2llbnRlID0gcGFjaWVudGVcbiAgICB0aGlzLmZlY2hhID0gZmVjaGFcbiAgICB0aGlzLm5vdGFzID0gbm90YXNcbiAgfVxufVxuXG5jbGFzcyBCaWJsaW90ZWNhIHtcbiAgY29uc3RydWN0b3IocGFjaWVudGVzKXtcbiAgICB0aGlzLnBhY2llbnRlcyA9IHBhY2llbnRlc1xuICB9XG5cbiAgYWRkUGF0aWVudCA9IChQYWNpZW50ZSkgPT4ge1xuICAgIHRoaXMucGFjaWVudGVzLnB1c2goUGFjaWVudGUpXG4gIH1cbn1cblxuZXhwb3J0e1xuICBQYWNpZW50ZSxcbiAgRXhwZWRpZW50ZSxcbiAgQ2l0YSxcbiAgQmlibGlvdGVjYVxufSIsImltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURPTUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvckZ1bmN0aW9ucydcbmltcG9ydCB7Y3JlYXRlTW9kYWxTdHJ1Y3R1cmV9IGZyb20gJy4vbW9kYWxDcmVhdG9ycydcbmltcG9ydCB7UGFjaWVudGUsQmlibGlvdGVjYX0gZnJvbSAnLi9wYWNpZW50ZSdcbmltcG9ydCB7c2F2ZUluTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcbmltcG9ydCB7YWRkUGF0aWVudFRhYmxlfSBmcm9tICcuL3BhdGllbnRUYWJsZSdcblxuXG5cblxuXG5cbmxldCBjcmVhdGVQYXRpZW50RmlsZU1vZGFsID0gKHBhdGllbnQpID0+IHtcblxuICAgIC8qQ3JlYXRlIG1haW4gY29udGFpbmVyKi9cbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZpbGUnKVxuXG4gICAgLypMZWZ0IHNpZGUgY29udGFpbmVyKi9cbiAgICBsZXQgbGVmdENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZpbGVMZWZ0JylcblxuICAgIC8qTGVmdCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50RmlsZVJpZ2h0JylcblxuICAgIC8qIFRvcCBDb250YWluZXIgKi9cbiAgICBsZXQgdG9wQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50RmlsZVRvcCcpXG5cbiAgICAvKiBCb3R0b20gQ29udGFpbmVyICovXG4gICAgbGV0IGJvdHRvbUNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZpbGVCb3R0b20nKVxuXG5cbiAgICAvKmRhdGUgTGFiZWwqL1xuICAgIGxldCBkYXRlTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnTm9tYnJlJylcbiAgICBsZXQgZGF0ZVZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuZGF0ZX1gKVxuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVmFsdWUpXG5cbiAgICAvKk5hbWUgTGFiZWwqL1xuICAgIGxldCBuYW1lTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnTm9tYnJlJylcbiAgICBsZXQgbmFtZVZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQubmFtZX1gKVxuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lVmFsdWUpXG5cbiAgICAvKkdlbmVyYWwgTGFiZWwqL1xuICAgIGxldCBnZW5lcmFsTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmlsZUxhYmVsJywnRW5mZXJtZWRhZCBHZW5lcmFsJylcbiAgICBsZXQgZ2VuZXJhbFZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuZ2VuZXJhbH1gKVxuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmFsTGFiZWwpXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmFsVmFsdWUpXG5cbiAgICAvKnNwZWNpZmljIExhYmVsKi9cbiAgICBsZXQgc3BlY2lmaWNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdFbmZlcm1lZGFkIEVzcGVjaWZpY2EnKVxuICAgIGxldCBzcGVjaWZpY1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuc3BlY2lmaWN9YClcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BlY2lmaWNMYWJlbClcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWNpZmljVmFsdWUpXG5cbiAgICAvKnRyYXRhbWllbnRvIExhYmVsKi9cbiAgICBsZXQgdHJhdGFtaWVudG9MYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdFbmZlcm1lZGFkIEV0cmF0YW1pZW50b2EnKVxuICAgIGxldCB0cmF0YW1pZW50b1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQudHJhdGFtaWVudG99YClcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9MYWJlbClcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRyYXRhbWllbnRvVmFsdWUpXG5cbiAgICAvKmFnZSBMYWJlbCovXG4gICAgbGV0IGFnZUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ0VkYWQnKVxuICAgIGxldCBhZ2VWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmFnZX1gKVxuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWdlTGFiZWwpXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWdlVmFsdWUpXG5cbiAgICAvKnNleCBMYWJlbCovXG4gICAgbGV0IHNleExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ1NleG8nKVxuICAgIGxldCBzZXhWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LnNleH1gKVxuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V4TGFiZWwpXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V4VmFsdWUpXG5cblxuICAgIC8qZmFybWFjb3RlcmFwaWEgTGFiZWwqL1xuICAgIGxldCBmYXJtYWNvdGVyYXBpYUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ0Zhcm1hY290ZXJhcGlhJylcbiAgICBsZXQgZmFybWFjb3RlcmFwaWFWYWx1ZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWVsZFZhbHVlJyxgJHtwYXRpZW50LmZhcm1hY290ZXJhcGlhfWApXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChmYXJtYWNvdGVyYXBpYUxhYmVsKVxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhcm1hY290ZXJhcGlhVmFsdWUpXG5cbiAgICAvKm5vdGFzIExhYmVsKi9cbiAgICBsZXQgbm90YXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdub3RhcycpXG4gICAgbGV0IG5vdGFzVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5ub3Rlc31gKVxuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90YXNMYWJlbClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rhc1ZhbHVlKVxuXG5cbiAgICAvKmFsZXJnaWFzIExhYmVsKi9cbiAgICBsZXQgYWxlcmdpYXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsJ3BhdGllbnRGaWxlTGFiZWwnLCdhbGVyZ2lhcycpXG4gICAgbGV0IGFsZXJnaWFzVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5hbGVyZ2lhc31gKVxuXG4gICAgbGV0IGJvdHRvbUFsZXJnaWFDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2JvdHRvbVZhbHVlQ29udGFpbmVyJylcblxuICAgIGJvdHRvbUFsZXJnaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxlcmdpYXNMYWJlbClcbiAgICBib3R0b21BbGVyZ2lhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZXJnaWFzVmFsdWUpXG5cbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tQWxlcmdpYUNvbnRhaW5lcilcbiAgICBcbiAgICAvKmVuZmVybWVkYWRlcyBMYWJlbCovXG4gICAgbGV0IGVuZmVybWVkYWRlc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ2VuZmVybWVkYWRlcycpXG4gICAgbGV0IGVuZmVybWVkYWRlc1ZhbHVlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpZWxkVmFsdWUnLGAke3BhdGllbnQuZW5mZXJtZWRhZGVzfWApXG5cbiAgICBsZXQgIGJvdHRvbUVuZmVybWVkYWRlc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignYm90dG9tVmFsdWVDb250YWluZXInKVxuXG4gICAgYm90dG9tRW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0xhYmVsKVxuICAgIGJvdHRvbUVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNWYWx1ZSlcblxuICAgIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21FbmZlcm1lZGFkZXNDb250YWluZXIpXG5cblxuXG4gICAgLypoYWJpdG9zIExhYmVsKi9cbiAgICBsZXQgaGFiaXRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywncGF0aWVudEZpbGVMYWJlbCcsJ2hhYml0b3MnKVxuICAgIGxldCBoYWJpdG9zVmFsdWUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdwYXRpZW50RmllbGRWYWx1ZScsYCR7cGF0aWVudC5oYWJpdG9zfWApXG5cbiAgICBsZXQgYm90dG9tSGFiaXRvc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignYm90dG9tVmFsdWVDb250YWluZXInKVxuXG4gICAgYm90dG9tSGFiaXRvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoYWJpdG9zTGFiZWwpXG4gICAgYm90dG9tSGFiaXRvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoYWJpdG9zVmFsdWUpXG5cbiAgICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tSGFiaXRvc0NvbnRhaW5lcilcblxuXG5cblxuICAgIGxldCBkZWxldGVCdXR0b24gPSBjcmVhdGVET01FbGVtZW50KCdidXR0b24nLCdkZWxldGVCdXR0b24nLCdFbGltaW5hciBwYWNpZW50ZScsJ2RlbGV0ZScpXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGRlbGV0ZVBhdGllbnQocGF0aWVudClcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgYWRkUGF0aWVudFRhYmxlKClcbiAgICB9KVxuXG5cbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcilcbiAgICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuXG5sZXQgZGVsZXRlUGF0aWVudCA9IChwYWNpZW50ZSkgPT4ge1xuICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuXG4gICAgcGF0aWVudERhdGFiYXNlID0gcGF0aWVudERhdGFiYXNlLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHBhY2llbnRlLmlkKVxuICAgIGNvbnNvbGUubG9nKClcblxuICAgIHNhdmVJbkxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJyxwYXRpZW50RGF0YWJhc2UpXG59IFxuXG5cbmxldCBjbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbn1cblxuZXhwb3J0e1xuICAgIGNyZWF0ZVBhdGllbnRGaWxlTW9kYWwsXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZX0gZnJvbSAnLi9tb2RhbENyZWF0b3JzJ1xuaW1wb3J0IHtsb2FkRGF0YX0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHtQYWNpZW50ZSxCaWJsaW90ZWNhfSBmcm9tICcuL3BhY2llbnRlJ1xuaW1wb3J0IHtzYXZlSW5Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHtnZXRUb2RheXNEYXRlfSBmcm9tICcuL2RhdGVGdW5jdGlvbnMnXG5pbXBvcnQge2FkZFBhdGllbnRUYWJsZX0gZnJvbSAnLi9wYXRpZW50VGFibGUnXG5pbXBvcnQgeyBnZXREYXlzSW5Nb250aCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5cblxuXG5cbmxldCBhZGRQYXRpZW50TW9kYWxDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgLyogTG9hZHMgdGhlIG1haW4gYXJyYXkgKi9cbiAgICBsZXQgbWFpbkFycmF5ID0gbG9hZERhdGEoKVxuXG4gICAgbGV0IGdlbmVyYWwgPSBtYWluQXJyYXlbMF1cbiAgICBsZXQgYWxlcmdpYXMgPSBtYWluQXJyYXlbMV1cbiAgICBsZXQgZW5mZXJtZWRhZGVzID0gbWFpbkFycmF5WzJdXG4gICAgbGV0IGhhYml0b3MgPSBtYWluQXJyYXlbM11cbiAgICBsZXQgdHJhdGFtaWVudG9zID0gbWFpbkFycmF5WzRdXG4gICAgbGV0IHNwZWNpZmljID0gbWFpbkFycmF5WzVdXG5cblxuICAgIC8qIE1haW4gY29udGFpbmVyIGZvciB0aGUgbW9kYWwgKi9cbiAgICBsZXQgbWFpbkZvcm0gPSBjcmVhdGVET01FbGVtZW50KCdmb3JtJywncGF0aWVudEZvcm0nLCcnLCdwYXRpZW50Rm9ybScpXG4gICAgbWFpbkZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsJ3JldHVybiBmYWxzZScpXG5cbiAgICAvKiBQYXRpZW50IGZvcm0gc2lkZXMgKi9cbiAgICBsZXQgcmlnaHRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybVJpZ2h0JylcbiAgICBsZXQgbGVmdFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtTGVmdCcpXG5cbiAgICBsZXQgdG9wU2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1Ub3AnKVxuICAgIGxldCBib3R0b21TaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybUJvdHRvbScpXG5cbiAgICAvKk1haW4gRGVzaWduIFJpZ2h0IFNpZGUqL1xuICAgIGxldCBuYW1lTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ05vbWJyZScpXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZm5hbWUnKVxuICAgIFxuICAgIGxldCBuYW1lSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2Zvcm1UZXh0SW5wdXQnLCcnLCdmbmFtZScpXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZuYW1lJylcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuXG4gICAgLypHZW5lcmFsKi9cbiAgICBsZXQgZ2VuZXJhbExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdEaWFnbm9zdGljbyBHZW5lcmFsJylcbiAgICBnZW5lcmFsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZ2VuZXJhbCcpXG4gICAgXG4gICAgbGV0IGdlbmVyYWxJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZmdlbmVyYWwnKVxuICAgIGdlbmVyYWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZmdlbmVyYWwnKVxuICAgIGdlbmVyYWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgZ2VuZXJhbElucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgZ2VuZXJhbElucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2VuZXJhbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGdlbmVyYWxbaV0sIGdlbmVyYWxbaV0pKTtcbiAgICB9ICAgXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbExhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbElucHV0KTtcblxuICAgIC8qIEVzcGVjaWZpY28gKi9cbiAgICBsZXQgc3BlY2lmaWNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRGlhZ25vc3RpY28gRXNwZWNpZmljbycpXG4gICAgc3BlY2lmaWNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZzcGVjaWZpYycpXG4gICAgXG4gICAgbGV0IHNwZWNpZmljSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2ZzcGVjaWZpYycpXG4gICAgc3BlY2lmaWNJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZnNwZWNpZmljJylcbiAgICBzcGVjaWZpY0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG5cblxuICAgIGdlbmVyYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLChldmVudCkgPT57XG4gICAgICAgIFxuICAgICAgICBsZXQgZWxlbWVudEluZGV4U2VsZWN0ZWQgPSBnZW5lcmFsLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICBsZXQgc3BlY2lmaWNBcnJheSA9IHNwZWNpZmljW2VsZW1lbnRJbmRleFNlbGVjdGVkXS5tYXAoKGVsZW1lbnQpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFswXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbm90ZXNTcGVjaWZpY0FycmF5ID0gc3BlY2lmaWNbZWxlbWVudEluZGV4U2VsZWN0ZWRdLm1hcCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50WzFdXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG4gICAgICAgIC8qQ2xlYXJzIGFsbCB2YWx1ZXMgb2YgdGhlIGxpc3QgYW4gcmVzZXRzIHRoZW0gKi9cbiAgICAgICAgc3BlY2lmaWNJbnB1dC5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcGVjaWZpY0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHNwZWNpZmljQXJyYXlbaV0sIHNwZWNpZmljQXJyYXlbaV0pKTtcbiAgICAgICAgfSAgIFxuICAgIFxuXG4gICAgfSlcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzcGVjaWZpY0xhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3BlY2lmaWNJbnB1dCk7XG5cbiAgICAvKiBUcmF0YW1pZW50b3MqL1xuICAgIGxldCB0cmF0YW1pZW50b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnVHJhdGFtaWVudG8nKVxuICAgIHRyYXRhbWllbnRvc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnRyYXRhbWllbnRvJylcbiAgICBcbiAgICBsZXQgdHJhdGFtaWVudG9zSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2Z0cmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2Z0cmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG4gICAgXG5cblxuICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICB0cmF0YW1pZW50b3NJbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRyYXRhbWllbnRvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24odHJhdGFtaWVudG9zW2ldLCB0cmF0YW1pZW50b3NbaV0pKTtcbiAgICB9IFxuXG4gICAgXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9zTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b3NJbnB1dCk7XG5cbiAgICAvKiBBbGVyZ2lhcyBDb250YWluZXIgKi9cbiAgICBsZXQgYWxlcmdpYXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2FsZXJnaWFzQ29udGFpbmVyJylcblxuICAgIC8qQWxlcmdpYXMqL1xuICAgIGxldCBhbGVyZ2lhc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdBbGVyZ2lhcycpXG4gICAgYWxlcmdpYXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxlcmdpYXNMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckFsZXJnaWFzID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8YWxlcmdpYXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5SW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FsZXJneUNoZWNrYm94JywnJyxgYWxlcmd5JHthbGVyZ2lhc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsYWxlcmdpYXNbaV0pXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhbGVyZ2lhc1tpXSlcblxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdjaGVjYm94TGFiZWwnLGAke2FsZXJnaWFzW2ldfWApXG5cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveCcpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5SW5wdXQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5TGFiZWwpXG5cbiAgICAgICAgY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgYWxlcmdpYXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcylcblxuXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGFsZXJnaWFzQ29udGFpbmVyKVxuXG4gICAgLyogZW5mZXJtZWRhZGVzIENvbnRhaW5lciAqL1xuICAgIGxldCBlbmZlcm1lZGFkZXNDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2VuZmVybWVkYWRlc0NvbnRhaW5lcicpXG5cbiAgICAvKmVuZmVybWVkYWRlcyovXG4gICAgbGV0IGVuZmVybWVkYWRlc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdlbmZlcm1lZGFkZXMnKVxuICAgIGVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcyA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3hDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGVuZmVybWVkYWRlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2VuZmVybWVkYWRlc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsZW5mZXJtZWRhZGVzW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsZW5mZXJtZWRhZGVzW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7ZW5mZXJtZWRhZGVzW2ldfWApXG5cblxuXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9IFxuXG4gICAgZW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzKVxuXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0NvbnRhaW5lcilcblxuICAgIC8qIGhhYml0b3MgQ29udGFpbmVyICovXG4gICAgbGV0IGhhYml0b3NDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2hhYml0b3NDb250YWluZXInKVxuXG4gICAgLypoYWJpdG9zKi9cbiAgICBsZXQgaGFiaXRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdoYWJpdG9zJylcbiAgICBoYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhYml0b3NMYWJlbClcblxuICAgIGxldCBjaGVja2JveENvbnRhaW5lckhhYml0b3MgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxoYWJpdG9zLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7aGFiaXRvc1tpXX1gKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsaGFiaXRvc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGhhYml0b3NbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHtoYWJpdG9zW2ldfWApXG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3gnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUlucHV0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFsZXJneUxhYmVsKVxuXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVySGFiaXRvcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuICAgIFxuICAgIGhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJIYWJpdG9zKVxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChoYWJpdG9zQ29udGFpbmVyKVxuXG4gICAgLyogTGVmdCBTaWRlICovXG5cbiAgICAvKkFHRSovXG4gICAgbGV0IGVkYWRMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRWRhZCcpXG4gICAgZWRhZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZmVkYWQnKVxuXG4gICAgbGV0IGVkYWRJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnZm9ybVRleHRJbnB1dCcsJycsJ2ZlZGFkJylcbiAgICBlZGFkSW5wdXQudHlwZSA9ICdudW1iZXInXG4gICAgZWRhZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmZWRhZCcpXG4gICAgZWRhZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZWRhZExhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGVkYWRJbnB1dClcblxuICAgIC8qIFNleG8gKi9cbiAgICBsZXQgc2V4b0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdTZXhvJylcbiAgICBzZXhvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmc2V4bycpXG5cbiAgICBsZXQgc2V4b0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmc2V4bycpXG4gICAgc2V4b0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmc2V4bycpXG4gICAgc2V4b0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgc2V4b0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICBzZXhvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICBzZXhvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG4gICAgXG4gICAgbGV0IHNleGVzID0gWydNYXNjdWxpbm8nLCdGZW1lbmlubycsJ090cm8nXVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNleGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc2V4b0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oc2V4ZXNbaV0sIHNleGVzW2ldKSk7XG4gICAgfSBcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHNleG9MYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZXhvSW5wdXQpXG5cbiAgICAvKkZhcm1hY28qL1xuICAgIGxldCBmYXJtYWNvTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0Zhcm1hY290ZXJhcGlhJylcbiAgICBmYXJtYWNvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZmFybWFjbycpXG5cbiAgICBsZXQgZmFybWFjb0lucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0JywnZm9ybVRleHRJbnB1dCcsJycsJ2ZmYXJtYWNvJylcbiAgICBmYXJtYWNvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZmYXJtYWNvJylcblxuICAgIGZhcm1hY29JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCcnLCcnLHRydWUsdHJ1ZSkpXG4gICAgZmFybWFjb0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgZmFybWFjb0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCcnKVxuICAgICAgICBcbiAgICBsZXQgZmFybWFjbyA9IFsnU2knLCdObyddXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmFybWFjby5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZhcm1hY29JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGZhcm1hY29baV0sIGZhcm1hY29baV0pKTtcbiAgICB9IFxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZmFybWFjb0xhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGZhcm1hY29JbnB1dClcblxuICAgIC8qIE5vdGFzICovXG4gICAgbGV0IG5vdGVzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ05vdGFzJylcbiAgICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZm5vdGFzJylcbiAgICBcbiAgICBsZXQgbm90ZXNCb3ggPSBjcmVhdGVET01FbGVtZW50KCd0ZXh0YXJlYScsJ25vdGVCb3gnLCcnLCdmbm90YXMnKVxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChub3Rlc0JveClcblxuICAgIC8qU3VibWl0IEJvdHRvbSAqL1xuICAgIGxldCBzdWJtaXRCdXR0b24gPSBjcmVhdGVET01FbGVtZW50KCdzdWJtaXQnLCdzdWJtaXRCdXR0b24nLCdBZ3JlZ2FyJylcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IHBhdGllbnQgPSBjaGVja0Zvcm1WYWx1ZXMoKVxuICAgICAgICBsZXQgbmV3UGF0aWVudCA9IG5ldyBQYWNpZW50ZShwYXRpZW50Lm5hbWUscGF0aWVudC5lZGFkLHBhdGllbnQuc2V4LHBhdGllbnQuZ2VuZXJhbCxwYXRpZW50LnNwZWNpZmljLHBhdGllbnQudHJhdGFtaWVudG8scGF0aWVudC5mYXJtYWNvLHBhdGllbnQuZW5mZXJtZWRhZGVzLHBhdGllbnQuYWxlcmd5LHBhdGllbnQuaGFiaXRvcyxwYXRpZW50LmRhdGUscGF0aWVudC5pZCxwYXRpZW50Lm5vdGVzKVxuXG4gICAgICAgIGxldCBwYXRpZW50RGF0YWJhc2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuICAgICAgICBcbiAgICAgICAgcGF0aWVudERhdGFiYXNlLnB1c2gobmV3UGF0aWVudClcbiAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnLHBhdGllbnREYXRhYmFzZSlcbiAgICAgICAgY2xlYXJGb3JtKClcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgYWRkUGF0aWVudFRhYmxlKClcbiAgICB9KVxuXG4gICAgdG9wU2lkZS5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuICAgIHRvcFNpZGUuYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuICAgIG1haW5Gb3JtLmFwcGVuZENoaWxkKHRvcFNpZGUpO1xuICAgIG1haW5Gb3JtLmFwcGVuZENoaWxkKGJvdHRvbVNpZGUpO1xuICAgIG1haW5Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cblxuXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQYXRpZW50QnV0dG9uJylcblxuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlKG1haW5Gb3JtLCdtb2RhbCcsJ0FncmVnYXIgUGFjaWVudGUnLGFkZEJ1dHRvbilcbiAgICByZXR1cm4gbWFpbkZvcm1cbiBcbn1cblxuXG5sZXQgY2hlY2tGb3JtVmFsdWVzID0gKCkgPT4ge1xuXG4gICAgbGV0IHBhdGllbnRJbmZvID0ge1xuICAgICAgICBuYW1lIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZuYW1lJykudmFsdWUsXG4gICAgICAgIGdlbmVyYWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZ2VuZXJhbCcpLnZhbHVlLFxuICAgICAgICBmYXJtYWNvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmZhcm1hY28nKS52YWx1ZSxcbiAgICAgICAgc3BlY2lmaWM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmc3BlY2lmaWMnKS52YWx1ZSxcbiAgICAgICAgdHJhdGFtaWVudG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdHJhdGFtaWVudG8nKS52YWx1ZSxcbiAgICAgICAgZWRhZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZGFkJykudmFsdWUsXG4gICAgICAgIHNleDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZzZXhvJykudmFsdWUsXG4gICAgICAgIG5vdGVzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm5vdGFzJykudmFsdWUsXG4gICAgICAgIGFsZXJneTogbm9kZTJBcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcmdpYXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXIgPiAuY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkJykpLFxuICAgICAgICBlbmZlcm1lZGFkZXM6IG5vZGUyQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZmVybWVkYWRlc0NvbnRhaW5lciA+IC5jaGVja2JveENvbnRhaW5lciA+IC5jaGVja2JveCA+IGlucHV0OmNoZWNrZWQnKSksXG4gICAgICAgIGhhYml0b3M6IG5vZGUyQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhYml0b3NDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXIgPiAuY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkJykpLFxuICAgICAgICBkYXRlOiBnZXRUb2RheXNEYXRlKCksXG4gICAgICAgIGlkOiBjaGVja0ZvcklkKCksXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHBhdGllbnRJbmZvXG59XG5cbmxldCBjaGVja0ZvcklkID0gKCkgPT4ge1xuICAgIGxldCBkYXRhYmFzZSAgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwYXRpZW50RGF0YWJhc2UnKVxuICAgIGlmIChkYXRhYmFzZS5sZW5ndGggIT0gMCl7XG4gICAgICAgIGxldCBpZCA9IGRhdGFiYXNlW2RhdGFiYXNlLmxlbmd0aC0xXS5pZCArIDFcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIHJldHVybiBpZFxuICAgIH1lbHNle1xuICAgICAgICBsZXQgaWQgPSAxXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICByZXR1cm4gaWRcbiAgICB9XG59XG5cbmxldCBjbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbn1cblxubGV0IG5vZGUyQXJyYXkgPSAobm9kZSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdXG4gICAgbm9kZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpICAgICBcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlcbn1cblxubGV0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRpZW50Rm9ybScpXG4gICAgbGV0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCx0ZXh0YXJlYScpXG5cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlmKGlucHV0LnR5cGUgPT09ICd0ZXh0JyB8fCBpbnB1dC50eXBlID09PSAndGV4dGFyZWEnIHx8IGlucHV0LnR5cGUgPT09ICdudW1iZXInKXtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgfWVsc2UgaWYoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfWVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdzZWxlY3Qtb25lJyl7XG4gICAgICAgICAgICBpbnB1dC5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnR7XG4gICAgYWRkUGF0aWVudE1vZGFsQ29udGVudFxufSIsImltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURPTUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvckZ1bmN0aW9ucydcbmltcG9ydCB7c2F2ZUluTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcbmltcG9ydCAge2NyZWF0ZVBhdGllbnRGaWxlTW9kYWx9IGZyb20gJy4vcGF0aWVudEZpbGVNb2RhbCdcbmltcG9ydCB7Y3JlYXRlTW9kYWxTdHJ1Y3R1cmV9IGZyb20gJy4vbW9kYWxDcmVhdG9ycydcblxuXG5sZXQgYWRkUGF0aWVudFRhYmxlID0gKCkgPT4ge1xuXG4gICAgLypHZXRzIHRoZSBtYWluIHBhdGllbnQgZGF0YSBiYXNlKi9cbiAgICBsZXQgcGF0aWVudERhdGFiYXNlID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncGF0aWVudERhdGFiYXNlJylcblxuICAgIC8qR2V0cyB0aGUgbWFpbiB0YWJsZSovXG4gICAgbGV0IHBhdGllbnRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZUJvZHknKVxuICAgIFxuICAgIHBhdGllbnRUYWJsZS5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIHBhdGllbnREYXRhYmFzZS5mb3JFYWNoKHBhdGllbnQgPT4ge1xuICAgICAgICBhZGRQYXRpZW50Um93KHBhdGllbnQpXG4gICAgfSk7XG5cbiAgICBhZGRDbGlja1RhYmxlRXZlbnRzKClcbiAgICBhZGRTb3J0VGFibGVGdW5jdGlvbnMoKVxuXG4gICAgbGV0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xuICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoKT0+e1xuICAgICAgICBzZWFyY2hUYWJsZSgpXG4gICAgfSlcblxufVxuXG5sZXQgYWRkUGF0aWVudFJvdyA9IChwYXRpZW50KSA9PiB7XG4gICAgXG4gICAgLypHZXRzIHRoZSBtYWluIHRhYmxlKi9cbiAgICBsZXQgcGF0aWVudFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlQm9keScpXG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYW4gZW1wdHkgPHRyPiBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIDFzdCBwb3NpdGlvbiBvZiB0aGUgdGFibGU6XG4gICAgbGV0IHJvdyA9IHBhdGllbnRUYWJsZS5pbnNlcnRSb3coMCk7XG5cbiAgICAvLyBJbnNlcnQgbmV3IGNlbGxzICg8dGQ+IGVsZW1lbnRzKSBhdCB0aGUgMXN0IGFuZCAybmQgcG9zaXRpb24gb2YgdGhlIFwibmV3XCIgPHRyPiBlbGVtZW50OlxuICAgIGxldCBpZCA9IHJvdy5pbnNlcnRDZWxsKDApXG4gICAgbGV0IGRhdGUgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICBsZXQgbmFtZSA9IHJvdy5pbnNlcnRDZWxsKDIpO1xuICAgIGxldCBhZ2UgPSByb3cuaW5zZXJ0Q2VsbCgzKTtcbiAgICBsZXQgc2V4ID0gcm93Lmluc2VydENlbGwoNCk7XG4gICAgbGV0IGdlbmVyYWwgPSByb3cuaW5zZXJ0Q2VsbCg1KTtcblxuICAgIC8vIEFkZCBzb21lIHRleHQgdG8gdGhlIG5ldyBjZWxsczpcbiAgICBpZC5pbm5lckhUTUwgPSBwYXRpZW50LmlkXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBwYXRpZW50LmRhdGU7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBwYXRpZW50Lm5hbWU7XG4gICAgYWdlLmlubmVySFRNTCA9IHBhdGllbnQuYWdlO1xuICAgIHNleC5pbm5lckhUTUwgPSBwYXRpZW50LnNleDtcbiAgICBnZW5lcmFsLmlubmVySFRNTCA9IHBhdGllbnQuZ2VuZXJhbDtcblxufVxuXG5sZXQgYWRkQ2xpY2tUYWJsZUV2ZW50cyA9ICgpID0+IHtcbiAgICBsZXQgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRpZW50VGFibGVcIik7XG4gICAgbGV0ICByb3dzID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcbiAgICBsZXQgIHBhdGllbnRBcnJheSA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3BhdGllbnREYXRhYmFzZScpXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7ICAgIFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhYmxlLnJvd3NbaV0uY2VsbHMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0YWJsZS5yb3dzW2ldLmNlbGxzW2pdO1xuICAgICAgICAgICAgbGV0IHBhdGllbnRJRCA9IHRhYmxlLnJvd3NbaV0uY2VsbHNbMF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgbGV0IHBhdGllbnQgPSBwYXRpZW50QXJyYXkuZmluZChwYXRpZW50VGVzdCA9PiBwYXRpZW50VGVzdC5pZCA9PSBwYXRpZW50SUQpXG4gICAgICAgICAgICBsZXQgcGF0aWVudEluZm8gPSBjcmVhdGVQYXRpZW50RmlsZU1vZGFsKHBhdGllbnQpXG4gICAgICAgICAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShwYXRpZW50SW5mbywnbW9kYWwnLCdJbmZvcm1hY2lvbiBkZWwgcGFjaWVudGUnLGNlbGwpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubGV0IHNvcnRUYWJsZSA9IChuKSA9PiB7XG4gICAgXG4gICAgbGV0IHRhYmxlLHJvd3Msc3dpdGNoaW5nLGkseCx5LHNob3VsZFN3aXRjaCxkaXIsc3dpdGNoY291bnQgPSAwO1xuXG4gICAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGllbnRUYWJsZVwiKTtcbiAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgIC8vU2V0IHRoZSBzb3J0aW5nIGRpcmVjdGlvbiB0byBhc2NlbmRpbmc6XG4gICAgZGlyID0gXCJhc2NcIjtcbiAgICAvKk1ha2UgYSBsb29wIHRoYXQgd2lsbCBjb250aW51ZSB1bnRpbFxuICAgIG5vIHN3aXRjaGluZyBoYXMgYmVlbiBkb25lOiovXG4gICAgd2hpbGUgKHN3aXRjaGluZykge1xuICAgICAgICAvL3N0YXJ0IGJ5IHNheWluZzogbm8gc3dpdGNoaW5nIGlzIGRvbmU6XG4gICAgICAgIHN3aXRjaGluZyA9IGZhbHNlO1xuICAgICAgICByb3dzID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUUlwiKTtcbiAgICAgICAgLypMb29wIHRocm91Z2ggYWxsIHRhYmxlIHJvd3MgKGV4Y2VwdCB0aGVcbiAgICAgICAgZmlyc3QsIHdoaWNoIGNvbnRhaW5zIHRhYmxlIGhlYWRlcnMpOiovXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByb3dzLmxlbmd0aCAtIDE7IGkrKykgeyAvL0NoYW5nZSBpPTAgaWYgeW91IGhhdmUgdGhlIGhlYWRlciB0aCBhIHNlcGFyYXRlIHRhYmxlLlxuICAgICAgICAvL3N0YXJ0IGJ5IHNheWluZyB0aGVyZSBzaG91bGQgYmUgbm8gc3dpdGNoaW5nOlxuICAgICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcbiAgICAgICAgLypHZXQgdGhlIHR3byBlbGVtZW50cyB5b3Ugd2FudCB0byBjb21wYXJlLFxuICAgICAgICBvbmUgZnJvbSBjdXJyZW50IHJvdyBhbmQgb25lIGZyb20gdGhlIG5leHQ6Ki9cbiAgICAgICAgeCA9IHJvd3NbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJURFwiKVtuXTtcbiAgICAgICAgeSA9IHJvd3NbaSArIDFdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVERcIilbbl07XG4gICAgICAgIC8qY2hlY2sgaWYgdGhlIHR3byByb3dzIHNob3VsZCBzd2l0Y2ggcGxhY2UsXG4gICAgICAgIGJhc2VkIG9uIHRoZSBkaXJlY3Rpb24sIGFzYyBvciBkZXNjOiovXG4gICAgICAgIGlmIChkaXIgPT0gXCJhc2NcIikge1xuICAgICAgICAgICAgaWYgKHguaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPiB5LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAvL2lmIHNvLCBtYXJrIGFzIGEgc3dpdGNoIGFuZCBicmVhayB0aGUgbG9vcDpcbiAgICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJkZXNjXCIpIHtcbiAgICAgICAgICAgIGlmICh4LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpIDwgeS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgLy9pZiBzbywgbWFyayBhcyBhIHN3aXRjaCBhbmQgYnJlYWsgdGhlIGxvb3A6XG4gICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkU3dpdGNoKSB7XG4gICAgICAgIC8qSWYgYSBzd2l0Y2ggaGFzIGJlZW4gbWFya2VkLCBtYWtlIHRoZSBzd2l0Y2hcbiAgICAgICAgYW5kIG1hcmsgdGhhdCBhIHN3aXRjaCBoYXMgYmVlbiBkb25lOiovXG4gICAgICAgIHJvd3NbaV0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocm93c1tpICsgMV0sIHJvd3NbaV0pO1xuICAgICAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgICAgICAvL0VhY2ggdGltZSBhIHN3aXRjaCBpcyBkb25lLCBpbmNyZWFzZSB0aGlzIGNvdW50IGJ5IDE6XG4gICAgICAgIHN3aXRjaGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qSWYgbm8gc3dpdGNoaW5nIGhhcyBiZWVuIGRvbmUgQU5EIHRoZSBkaXJlY3Rpb24gaXMgXCJhc2NcIixcbiAgICAgICAgc2V0IHRoZSBkaXJlY3Rpb24gdG8gXCJkZXNjXCIgYW5kIHJ1biB0aGUgd2hpbGUgbG9vcCBhZ2Fpbi4qL1xuICAgICAgICBpZiAoc3dpdGNoY291bnQgPT0gMCAmJiBkaXIgPT0gXCJhc2NcIikge1xuICAgICAgICAgICAgZGlyID0gXCJkZXNjXCI7XG4gICAgICAgICAgICBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBhZGRTb3J0VGFibGVGdW5jdGlvbnMgPSAoKSA9PntcbiAgICBsZXQgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRpZW50VGFibGVcIik7XG4gICAgbGV0ICBoZWFkZXJzID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aFwiKTtcbiAgICBmb3IgKGxldCBpPSAwOyBpIDwgaGVhZGVycy5sZW5ndGggOyBpKyspe1xuICAgICAgICBsZXQgaGVhZCA9IGhlYWRlcnNbaV1cbiAgICAgICAgaGVhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHNvcnRUYWJsZShpKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxubGV0IHNlYXJjaFRhYmxlID0gKCkgPT4ge1xuICAgIC8vIERlY2xhcmUgdmFyaWFibGVzXG4gICAgdmFyIGlucHV0LCBmaWx0ZXIsIHRhYmxlLCB0ciwgdGQsIGksIHR4dFZhbHVlO1xuICAgIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIik7XG4gICAgZmlsdGVyID0gaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aWVudFRhYmxlXCIpO1xuICAgIHRyID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGFibGUgcm93cywgYW5kIGhpZGUgdGhvc2Ugd2hvIGRvbid0IG1hdGNoIHRoZSBzZWFyY2ggcXVlcnlcbiAgICBmb3IgKGkgPSAwOyBpIDwgdHIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZCA9IHRyW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIilbMl07XG4gICAgaWYgKHRkKSB7XG4gICAgICAgIHR4dFZhbHVlID0gdGQudGV4dENvbnRlbnQgfHwgdGQuaW5uZXJUZXh0O1xuICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xuICAgICAgICB0cltpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIGFkZFBhdGllbnRUYWJsZSxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkUGFnZVN0cnVjdHVyZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtQYWNpZW50ZSxCaWJsaW90ZWNhfSBmcm9tICcuL3BhY2llbnRlJ1xuaW1wb3J0e2FkZFBhdGllbnRNb2RhbENvbnRlbnR9IGZyb20gJy4vcGF0aWVudE1vZGFsJ1xuaW1wb3J0IHthZGRQYXRpZW50VGFibGV9IGZyb20gJy4vcGF0aWVudFRhYmxlJ1xuXG5cblxuXG5hZGRQYXRpZW50VGFibGUoKVxubG9hZFBhZ2VTdHJ1Y3R1cmUoKVxuYWRkUGF0aWVudE1vZGFsQ29udGVudCgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==