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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n    background-color: var(--white);\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n.noteBox{\n    height: 100%;\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    resize: none;\n}\n\n.patientFormBottom{\n    justify-content: center;\n    display: flex;\n    gap: 50px;\n    flex: auto;\n}\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    flex: auto;\n}\n\n.enfermedadesContainer{\n    flex: 5;\n}\n\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.enfermedadesContainer > .checkboxContainer{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 250px;\n    padding: 10px;\n    background-color: var(--white);\n}\n\n.checkboxContainer{\n    font-size: calc(1px + 1vw);\n}\n\n\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n"],"sourceRoot":""}]);
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

    constructor(name,age,sex,general,especifico,tratamiento,farmacoterapia,enfermedades,alergias,habitos) {
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
        let newPatient = new _paciente__WEBPACK_IMPORTED_MODULE_3__.Paciente(patient.name,patient.edad,patient.sex,patient.general,patient.specific,patient.tratamiento,patient.farmaco,patient.enfermedades,patient.alergy,patient.habitos)

        patientDataBase.addPatient(newPatient)
        clearForm()
        closeForm()
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
        habitos: node2Array(document.querySelectorAll('.habitosContainer > .checkboxContainer > .checkbox > input:checked'))
    }
    

    return patientInfo
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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






__webpack_require__.g.patientDataBase = new _paciente__WEBPACK_IMPORTED_MODULE_2__.Biblioteca([])


;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStructure)()
;(0,_patientModal__WEBPACK_IMPORTED_MODULE_3__.addPatientModalContent)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFFBQVEsVUFBVSxRQUFRLFlBQVksTUFBTSxzQkFBc0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLHlCQUF5QixXQUFXLFlBQVksdUJBQXVCLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFL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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVQ3BXQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0QjtBQUN5QjtBQUNNOzs7QUFHcEQscUJBQU0sdUJBQXVCLGlEQUFVOzs7QUFHdkMseURBQWlCO0FBQ2pCLHNFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9hbGVyZ2lhcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvYW5vbWFsaWFzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9jYXJpZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Rlc2Fycm9sbG8uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZW5jaWFUcmFuc3Rvcm5vLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lbmZlcm1lZGFkZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VzdG9tYXRpdGlzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9nZW5lcmFsZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2dpbmdpdml0aXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2hhYml0b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2xhYmlvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9sZW5ndWEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2x1eGFjaW9uLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvcHVscGEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3F1aXN0ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3NhbGl2YWxlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvdGVqaWRvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC90cmF0YW1pZW50b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kb21DcmVhdG9yRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvbW9kYWxDcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9wYWNpZW50ZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9wYXRpZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXdoaXRlOiNGM0Y5RkI7XFxuICAgIC0tYmx1ZTojODdDMENEO1xcbiAgICAtLW5hdnk6IzIyNjU5NztcXG4gICAgLS1jb2xkOiMxMTNGNjc7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaGJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6ICMxMTNGNjcgMnB4IHNvbGlkO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzLC5zZWFyY2hJbnB1dDpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbiNzZWFyY2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuXFxuLm1haW5UYWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4XFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG59XFxuXFxudGgge1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG50ZCwgdGgge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB9XFxuXFxuI2FkZFBhdGllbnRCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogOTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcbiAgXFxuLm1vZGFsSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuXFxuXFxuLnBhdGllbnRGb3JtVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGF0aWVudEZvcm1SaWdodCwgLnBhdGllbnRGb3JtTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9ybVRleHRJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLm5vdGVCb3h7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucGF0aWVudEZvcm1Cb3R0b217XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVye1xcbiAgICBmbGV4OiA1O1xcbn1cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5mZXJtZWRhZGVzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICBmb250LXNpemU6IGNhbGMoMXB4ICsgMXZ3KTtcXG59XFxuXFxuXFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXOztBQUVmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBOzs7O0lBSUksYUFBYTtBQUNqQjs7O0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELHNCQUFzQjtBQUMxQjtJQUNJLHNCQUFzQjtBQUMxQjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRSxrQ0FBa0M7SUFDckQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0lBQ2hFLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOzs7O0FBSUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7QUFDQSxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS13aGl0ZTojRjNGOUZCO1xcbiAgICAtLWJsdWU6Izg3QzBDRDtcXG4gICAgLS1uYXZ5OiMyMjY1OTc7XFxuICAgIC0tY29sZDojMTEzRjY3O1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLmhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMzBweCArIDN2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hiYXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAjMTEzRjY3IDJweCBzb2xpZDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dDpmb2N1cywuc2VhcmNoSW5wdXQ6aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcblxcbi5tYWluVGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTBweFxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxufVxcblxcbnRoIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsIHRoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwxOTAsMTkwKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgfVxcblxcbiNhZGRQYXRpZW50QnV0dG9ue1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcblxcbiNhZGRQYXRpZW50QnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbiAgICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbn1cXG4gIFxcbi5tb2RhbEhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWxIZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcblxcblxcbi5wYXRpZW50Rm9ybVRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBhdGllbnRGb3JtUmlnaHQsIC5wYXRpZW50Rm9ybUxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmZvcm1UZXh0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3RJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5ub3RlQm94e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnBhdGllbnRGb3JtQm90dG9te1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyLCAuaGFiaXRvc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLmVuZmVybWVkYWRlc0NvbnRhaW5lcntcXG4gICAgZmxleDogNTtcXG59XFxuXFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICAgPiAuZm9ybVRpdGxlLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyICA+IC5mb3JtVGl0bGUsIC5oYWJpdG9zQ29udGFpbmVyICA+IC5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVuZmVybWVkYWRlc0NvbnRhaW5lciA+IC5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiBjYWxjKDFweCArIDF2dyk7XFxufVxcblxcblxcblxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuZmxvYXQ6IHJpZ2h0O1xcbmJhY2tncm91bmQ6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbmNvbG9yOiBibGFjaztcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQXNwaXJpbmFcIl0sW1wiTGF0ZXhcIl0sW1wiTGlkb2NhaW5hIG8gQW5lc3Rlc2ljb3NcIl0sW1wiTmluZ3VuYSBhbGVyZ2lhXCJdLFtcIk90cmEgYWxlcmdpYVwiXSxbXCJQZW5pY2lsaW5hIHUgT3Ryb3MgQW50aWJpb3RpY29zXCJdLFtcIlN1bGZhc1wiXSxbXCJZb2RvXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFub21hbGlhIGRlbnRvZmFjaWFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcG9zaWNpb24gZGVsIGRpZW50ZVwiLFwiQXBpbmFtaWVudG8uIERlc3BsYXphbWllbnRvLiBEaWFzdGVtYS4gRXNwYWNpYW1pZW50byBhbm9ybWFsLiBSb3RhY2lvbi4gVHJhbnNwb3NpY2lvbi4gRGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIGNvbiBwb3NpY2lvbiBlY3RvcGljYS4gRXhjbHV5ZTogZGllbnRlcyBpbXBhY3RhZG9zIG8gaW5jbHVpZG9zIHNpbiBwb3NpY2lvbiBhbm9ybWFsLlwiXSxbXCJBbm9tYWxpYXMgZGUgbGEgcmVsYWNpb24gZW50cmUgbG9zIGFyY29zIGRlbnRhcmlvc1wiLFwiQW50ZXBvc2ljaW9uLiBEZXN2aWFjaW9uIGRlIGxhIGxpbmVhIG1lZGlhIGRlbCBhcmNvIGRlbnRhcmlvLiBEaXN0b2NsdXNpb24uIE1lc2lvY2x1c2lvbi4gTW9yZGlkYSBhYmllcnRhLiBNb3JkaWRhIGNydXphZGEuIE9jbHVzaW9uIGxpbmd1YWwgcG9zdGVyaW9yIGRlIGxvcyBkaWVudGVzIG1heGlsYXJlcy4gU29icmVtb3JkaWRhIChleGNlc2l2YSkgaG9yaXpvbnRhbCwgcHJvZnVuZGEgbyB2ZXJ0aWNhbC5cIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHJlbGFjaW9uIG1heGlsb2Jhc2lsYXJcIixcIkFzaW1ldHJpYSBkZSBsYSBtYW5kaWJ1bGEuIFByb2duYXRpc21vLiBSZXRyb2duYXRpc21vLlwiXSxbXCJBbm9tYWxpYXMgZGVudG9mYWNpYWxlcyBmdW5jaW9uYWxlc1wiLFwiQ2llcnJlIGFub3JtYWwgZGUgbG9zIG1heGlsYXJlcy4gTWFsb2NsdXNpb24gZGViaWRhIGEgZGVnbHVjaW9uIGFub3JtYWwsIGhhYml0byBkaWdpdGFsLCBsYWJpYWwgbyBsaW5ndWFsLCByZXNwaXJhY2lvbiBidWNhbC4gRXhjbHV5ZSBicnV4aXNtbyB5IHJlY2hpbmFtaWVudG8gZGUgZGllbnRlcy5cIl0sW1wiQW5vbWFsaWFzIGV2aWRlbnRlcyBkZWwgdGFtYW5vIGRlIGxvcyBtYXhpbGFyZXNcIixcIkhpcGVycGxhc2lhIG8gaGlwb3BsYXNpYSBkZWwgbWF4aWxhciBvIG1hbmRpYnVsYS4gTWFjcm9nbmFjaWEuIE1pY3JvZ25hY2lhLiBFeGNsdXllOiBhY3JvbWVnYWxpYSB5IHNpbmRyb21lIGRlIFBpZXJyZSBSb2Jpbi5cIl0sW1wiTWFsb2NsdXNpb24gZGUgdGlwbyBubyBlc3BlY2lmaWNhZG9cIixcIlwiXSxbXCJPdHJhcyBhbm9tYWxpYXMgZGVudG9mYWNpYWxlc1wiLFwiXCJdLFtcIlRyYXN0b3Jub3MgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyXCIsXCJDYXN0Ye+/vWV0ZW8gbWF4aWxhci4gQ29tcGxlam8gbyBTaW5kcm9tZSBkZSBDb3N0ZW4uIFNpbmRyb21lIGRlIGRpc2Z1bmNpb24gZG9sb3Jvc2EgZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYW5kaWJ1bGFyLiBUcmFzdG9ybm8gZGUgbGEgYXJ0aWN1bGFjaW9uIHRlbXBvcm9tYXhpbGFyLiBFeGNsdXllOiBlc2d1aW5jZSBvIGx1eGFjaW9uIHJlY2llbnRlIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhci5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQ2FyaWVzIGRlIGxhIGRlbnRpbmFcIixcIlwiXSxbXCJDYXJpZXMgZGVsIGNlbWVudG9cIixcIlwiXSxbXCJDYXJpZXMgZGVudGFsIG5vIGVzcGVjaWZpY2FkYVwiLFwiXCJdLFtcIkNhcmllcyBkZW50YXJpYSBkZXRlbmlkYVwiLFwiXCJdLFtcIkNhcmllcyBsaW1pdGFkYSBhbCBlc21hbHRlXCIsXCJNYW5jaGFzIGJsYW5jYXMgKGNhcmllcyBpbmNpcGllbnRlKVwiXSxbXCJPdHJhcyBjYXJpZXMgZGVudGFsZXNcIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBbHRlcmFjaW9uZXMgZW4gbGEgZXJ1cGNpb24gZGVudGFyaWFcIixcIkNhaWRhIHByZW1hdHVyYSBkZSBsb3MgZGllbnRlcyBwcmltYXJpb3MuIERlbnRpY2lvbiBwcmVjb3ouIERpZW50ZSBuYXRhbC4gRGllbnRlIG5lb25hdGFsLiBEaWVudGUgcHJpbWFyaW8gKHBlcnNpc3RlbnRlKSByZXRlbmlkby4gRXJ1cGNpb24gcHJlbWF0dXJhIGRlIGRpZW50ZS5cIl0sW1wiQWx0ZXJhY2lvbmVzIGVuIGxhIGZvcm1hY2lvbiBkZW50YXJpYVwiLFwiQXBsYXNpYSBlIGhpcG9wbGFzaWEgZGVsIGNlbWVudG8uIERpZW50ZSBkZSBUdXJuZXIuIERpbGFjZXJhY2lvbiBkZW50YXJpYS4gSGlwb3BsYXNpYSBkZWwgZXNtYWx0ZS4gT2RvbnRvZGlzcGxhc2lhIHJlZ2lvbmFsLiBFeGNsdXllOiBkaWVudGVzIGRlIEh1dGNoaW5zb24geSBtb2xhcmVzIG1vcnVsb2lkZXMgZW4gbGEgc2lmaWxpcyBjb25nZW5pdGEvIGRpZW50ZXMgbW90ZWFkb3MuXCJdLFtcIkFsdGVyYWNpb25lcyBoZXJlZGl0YXJpYXMgZGUgbGEgZXN0cnVjdHVyYSBkZW50YXJpYSwgbm8gY2xhc2lmaWNhZGFzIGVuIG90cmEgcGFydGVcIixcIkFtZWxvZ2VuZXNpcy4gRGVudGlub2dlbmVzaXMuIE9kb250b2dlbmVzaXMuIERpZW50ZXMgZW4gY29uY2hhLiBEaXNwbGFzaWEgZGVudGluYWwuXCJdLFtcIkFub2RvbmNpYVwiLFwiSGlwb2RvbmNpYS4gT2xpZ29kb25jaWEuXCJdLFtcIkFub21hbGlhcyBkZWwgdGFtYe+/vW8geSBkZSBsYSBmb3JtYSBkZWwgZGllbnRlXCIsXCJDb25jcmVzY2VuY2lhLiBGdXNpb24uIEdlbWluYWNpb24uIERpZW50ZXMgZW4gZm9ybWEgZGUgY2xhdmlqYSAoY29uaWNvcykuIERpZW50ZXMgZXZhZ2luYWRvcy4gRGVucyBpbiBkZW50ZS4gTWFjcm9kb25jaWEuIE1pY3JvZG9uY2lhLiBQZXJsYXMgZGVsIGVzbWFsdGUuIFRhdXJvZG9udGlzbW8uIFR1YmVyY3VsbyBwYXJhbW9sYXIuIEV4Y2x1eWU6IHR1YmVyY3VsbyBkZSBDYXJhYmVsbGkuXCJdLFtcIkRpZW50ZXMgbW90ZWFkb3NcIixcIkVzbWFsdGUgbW90ZWFkby4gRmx1b3Jvc2lzIGRlbnRhbC4gT3BhY2lkYWQgbm8gZmx1b3JpY2EgZGVsIGVzbWFsdGUuIEV4Y2x1eWU6IGRlcG9zaXRvcyAoYWRoZXJlbmNpYXMpIGVuIGxvcyBkaWVudGVzLlwiXSxbXCJEaWVudGVzIHN1cGVybnVtZXJhcmlvc1wiLFwiQ3VhcnRvIG1vbGFyLiBEaWVudGVzIHN1cGxlbWVudGFyaW9zLiBEaXN0b21vbGFyLiBNZXNpb2RlbnMuIFBhcmFtb2xhci5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgZGllbnRlc1wiLFwiQWx0ZXJhY2lvbiBkZWwgY29sb3IgZGVsIGRpZW50ZSBkdXJhbnRlIHN1IGZvcm1hY2lvbi4gTWFuY2hhcyBpbnRyaW5zZWNhcyBkZSBsb3MgZGllbnRlcyBTQUkuXCJdLFtcIlNpbmRyb21lIGRlIGxhIGVydXBjaW9uIGRlbnRhcmlhXCIsXCJcIl0sW1wiVHJhc3Rvcm5vIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIG5vIGVzcGVjaWZpY2FkbyBcIixcIlRyYXN0b3JubyBkZSBsYSBvZG9udG9nZW5lc2lzIFNBSS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRGllbnRlcyBpbXBhY3RhZG9zXCIsXCJEaWVudGUgcXVlIG5vIGhhIGVydXBjaW9uYWRvIGRlYmlkbyBhIGxhIG9ic3RydWNjaW9uIHBvciBvdHJvIGRpZW50ZS5cIl0sW1wiRGllbnRlcyBpbmNsdWlkb3MgXCIsXCJEaWVudGUgcXVlIG5vIGhhIGVydXBjaW9uYWRvIHNpbiBvYnN0cnVjY2lvbiBwb3Igb3RybyBkaWVudGUuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkF0cm9maWEgZGVsIHJlYm9yZGUgYWx2ZW9sYXIgZGVzZGVudGFkb1wiLFwiXCJdLFtcIkV4Zm9saWFjaW9uIGRlIGxvcyBkaWVudGVzIGRlYmlkYSBhIGNhdXNhcyBzaXN0ZW1pY2FzXCIsXCJcIl0sW1wiT3RyYXMgYWZlY2Npb25lcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyBkaWVudGVzIHkgZGUgc3VzIGVzdHJ1Y3R1cmFzIGRlIHNvc3RlblwiLFwiQWdyYW5kYW1pZW50byBkZWwgcmVib3JkZSBhbHZlb2xhci4gT2RvbnRhbGdpYS4gUHJvbG9uZ2FjaW9uIGFsdmVvbGFyIGlycmVndWxhci5cIl0sW1wiUGVyZGlkYSBkZSBkaWVudGVzIGRlYmlkYSBhIGFjY2lkZW50ZSwgZXh0cmFjY2lvbiBvIGVuZmVybWVkYWQgcGVyaW9kb250YWwgbG9jYWxcIixcIlwiXSxbXCJSYWl6IGRlbnRhbCByZXRlbmlkYVwiLFwiXCJdLFtcIlRyYXN0b3Jub3MgZGUgbG9zIGRpZW50ZXMgeSBkZSBzdXMgZXN0cnVjdHVyYXMgZGUgc29zdGVuLCBubyBlc3BlY2lmaWNhZG9cIixcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJIaXBlcnBsYXNpYSBnaW5naXZhbFwiLFwiRmlicm9tYXRvc2lzIGdpbmdpdmFsLlwiXSxbXCJMZXNpb25lcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGEgYXNvY2lhZGFzIGNvbiB0cmF1bWF0aXNtb1wiLFwiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZWwgcmVib3JkZSBhbHZlb2xhciBlZGVudHVsbyAoaGlwZXJwbGFzaWEgcHJvdGVzaWNhKS5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBlc3BlY2lmaWNhZG9zIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYVwiLFwiRXB1bGlzIGRlIGNlbHVsYXMgZ2lnYW50ZXMuIEVwdWxpcyBmaWJyb3NvLiBHcmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLiBHcmFudWxvbWEgcGlvZ2VubyBkZSBsYSBlbmNpYS4gUmVibGFuZGVjaW1pZW50byBkZWwgcmVib3JkZS5cIl0sW1wiUmV0cmFjY2lvbiBnaW5naXZhbFwiLFwiUmVjZXNpb24gZ2luZ2l2YWwgbG9jYWxpemFkYS4gUmVjZXNpb24gZ2luZ2l2YWwgZ2VuZXJhbGl6YWRhLiBSZWNlc2lvbiBnaW5naXZhbCBwb3N0aW5mZWNjaW9zYS4gUmVjZXNpb24gZ2luZ2l2YWwgcG9zdG9wZXJhdG9yaWEuXCJdLFtcIlRyYXN0b3JubyBubyBlc3BlY2lmaWNhZG8gZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhIFwiLFwiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFuZ2luYSBkZSBQZWNob1wiXSxbXCJBcnRyaXRpc1wiXSxbXCJBc21hXCJdLFtcIkF0YXF1ZSBDYXJkaWFjb1wiXSxbXCJDYW5jZXJcIl0sW1wiRGlhYmV0ZXMgVGlwbyAxXCJdLFtcIkRpYWJldGVzIFRpcG8gMlwiXSxbXCJEb2xvciBlbiBQZWNob1wiXSxbXCJFbmZlcm1lZGFkIGRlbCBIaWdhZG9cIl0sW1wiRW5mZXJtZWRhZCBkZWwgUmnDsW9uXCJdLFtcIkVuZmlzZW1hXCJdLFtcIkhlcGF0aXRpc1wiXSxbXCJIaXBlcnRlbnNpb25cIl0sW1wiSGlwb2dsdWNlbWlhXCJdLFtcIkhpcG90ZW5zaW9uXCJdLFtcIk5pbmd1bmEgZW5mZXJtZWRhZFwiXSxbXCJPdHJhIGVuZmVybWVkYWRcIl0sW1wiUHJvYmxlbWEgZGUgVGlyb2lkZXNcIl0sW1wiUHJvYmxlbWFzIEVzdG9tYWNhbGVzXCJdLFtcIlNJREEvIFZJSFwiXSxbXCJUdWJlcmN1bG9zaXNcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQ2VsdWxpdGlzIHkgYWJzY2VzbyBkZSBsYSBib2NhXCIsXCJBYnNjZXNvcyBzdWJtYW5kaWJ1bGFyZXMuIENlbHVsaXRpcyBkZWwgcGlzbyBkZSBsYSBib2NhLiBFeGNsdXllIGFic2Nlc28gZGUgZ2xhbmR1bGEgc2FsaXZhbCBvIGxlbmd1YSwgYWJzY2VzbyBwZXJpYXBpY2FsLCBhYnNjZXNvIHBlcmlvZG9udGFsLCBhYnNjZXNvIHBlcml0b25zaWxhci5cIl0sW1wiRXN0b21hdGl0aXMgYWZ0b3NhIHJlY3VycmVudGVcIixcIkFmdGFzIGRlIEJlZG5hci4gRXN0b21hdGl0aXMgYWZ0b3NhIG1heW9yIG8gbWVub3IuIEVzdG9tYXRpdGlzIGhlcnBldGlmb3JtZS4gUGVyaWFkZW5pdGlzIG11Y29zYSBuZWNyb3RpY2EgcmVjdXJyZW50ZS4gVWxjZXJhIGFmdG9zYSByZWN1cnJlbnRlLlwiXSxbXCJPdHJhcyBmb3JtYXMgZGUgZXN0b21hdGl0aXNcIixcIkVzdG9tYXRpdGlzIHByb3Rlc2ljYSwgdWxjZXJhdGl2YSwgdmVzaWN1bG9zYS5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQU5PTUFMSUFTIERFTlRPRkFDSUFMRVMgKElOQ0xVU08gTEEgTUFMT0NMVVNJT04pLlwiXSxbXCJDQVJJRVMgREVOVEFMXCJdLFtcIkRJRU5URVMgSU5DTFVJRE9TIEUgSU1QQUNUQURPU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEEgTEVOR1VBXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBQVUxQQSBZIERFIExPUyBURUpJRE9TIFBFUklBUElDQUxFU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEFTIEdMQU5EVUxBUyBTQUxJVkFMRVNcIl0sW1wiRVNUT01BVElUSVMgWSBMRVNJT05FUyBBRklORVNcIl0sW1wiR0lOR0lWSVRJUyBZIEVORkVSTUVEQURFUyBQRVJJT0RPTlRBTEVTXCJdLFtcIkxVWEFDSU9OLCBFU0dVSU5DRSBZIFRPUkNFRFVSQSBERSBBUlRJQ1VMQUNJT05FUyBZIERFIExJR0FNRU5UT1MgREUgTEEgQ0FCRVpBXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTEFCSU9TIFkgREUgTEEgTVVDT1NBIEJVQ0FMXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTUFYSUxBUkVTXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgVEVKSURPUyBEVVJPUyBERSBMT1MgRElFTlRFU1wiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExBIEVOQ0lBIFkgREUgTEEgWk9OQSBFREVOVFVMQVwiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExPUyBESUVOVEVTIFkgREUgU1VTIEVTVFJVQ1RVUkFTIERFIFNPU1RFTlwiXSxbXCJRVUlTVEVTIERFIExBIFJFR0lPTiBCVUNBTCwgTk8gQ0xBU0lGSUNBRE9TIEVOIE9UUkEgUEFSVEVcIl0sW1wiVFJBU1RPUk5PUyBERUwgREVTQVJST0xMTyBZIERFIExBIEVSVVBDSU9OIERFIExPUyBESUVOVEVTXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkdpbmdpdml0aXMgYWd1ZGFcIixcIkV4Y2x1eWUgZ2luZ2l2aXRpcyB1bGNlcm9uZWNyb3RpY2EgYWd1ZGEgeSBnaW5naXZvZXN0b21hdGl0aXMgaGVycGV0aWNhXCJdLFtcIkVuZmVybWVkYWQgZGVsIHBlcmlvZG9udG8gbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiR2luZ2l2aXRpcyBjcm9uaWNhXCIsXCJHaW5naXZpdGlzIGNyb25pY2EgZGVzY2FtYXRpdmEsIGdpbmdpdml0aXMgY3JvbmljYSBoaXBlcnBsYXNpY2EsIGdpbmdpdml0aXMgY3JvbmljYSBtYXJnaW5hbCBzaW1wbGUsIGdpbmdpdml0aXMgY3JvbmljYSB1bGNlcmF0aXZhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgcGVyaW9kb250YWxlc1wiLFwiXCJdLFtcIlBlcmlvZG9udGl0aXMgYWd1ZGFcIixcIkFic2Nlc28gcGFyYWRlbnRhbC4gQWJzY2VzbyBwZXJpb2RvbnRhbC4gUGVyaWNvcm9uaXRpcyBhZ3VkYS4gRXhjbHV5ZTogYWJzY2VzbyBwZXJpYXBpY2FsIGNvbiBmaXN0dWxhLyBwZXJpb2RvbnRpdGlzIGFwaWNhbCBhZ3VkYS5cIl0sW1wiUGVyaW9kb250aXRpcyBjcm9uaWNhXCIsXCJQZXJpY29yb25pdGlzIGNyb25pY2EuIFBlcmlvZG9udGl0aXMgc2ltcGxlLiBQZXJpb2RvbnRpdGlzIGNvbXBsaWNhZGEuXCJdLFtcIlBlcmlvZG9udG9zaXMgKGp1dmVuaWwpXCIsXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRnVtYXJcIl0sW1wiQWxjb2hvbFwiXSxbXCJDb2NhaW5hXCJdLFtcIk90cmFzIGRyb2dhc1wiXSxbXCJPdHJvcyBoYWJpdG9zXCJdLFtcIk5pbmd1biBoYWJpdG9cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRW5mZXJtZWRhZGVzIGRlIGxvcyBsYWJpb3NcIixcIlBlcmxlY2hlIG8gcXVlaWxpdGlzIGFuZ3VsYXIuIFF1ZWlsaXRpcyBhbmd1bGFyLCBleGZvbGlhdGl2YSwgZ2xhbmR1bGFyLiBRdWVpbG9kaW5pYS4gUXVlaWxvc2lzLiBFeGNsdXllIGFyaWJvZmxhdmlub3NpcyAocG9yIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hKSwgUGVybGVjaGUgZGViaWRvIGEgY2FuZGlkaWFzaXMsIFBlcmxlY2hlIGRlYmlkbyBhIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hLiBRdWVpbGl0aXMgZGViaWRhIGEgdHJhc3Rvcm5vcyByZWxhY2lvbmFkb3MgY29uIGxhIHJhZGlhY2lvbi5cIl0sW1wiRmlicm9zaXMgZGUgbGEgc3VibXVjb3NhIGJ1Y2FsXCIsXCJcIl0sW1wiR3JhbnVsb21hIHkgbGVzaW9uZXMgc2VtZWphbnRlcyBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkdyYW51bG9tYSBlb3Npbm9maWxvLiBHcmFudWxvbWEgcGlvZ2VuaWNvLiBYYW50b21hIHZlcnJ1Z2lmb3JtZS5cIl0sW1wiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkV4Y2x1eWUgaGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSB6b25hIGVkZW50dWxhIChoaXBlcnBsYXNpYSBwcm90ZXNpY2EpXCJdLFtcIkxldWNvcGxhc2lhIHBpbG9zYVwiLFwiXCJdLFtcIkxldWNvcGxhc2lhIHkgb3RyYXMgYWx0ZXJhY2lvbmVzIGRlbCBlcGl0ZWxpbyBidWNhbCwgaW5jbHV5ZW5kbyBsYSBsZW5ndWFcIixcIkVyaXRyb3BsYXNpYS4gTGV1Y29lZGVtYS4gTGV1Y29xdWVyYXRvc2lzIG5pY290aW5pY2EgcGFsYXRpbmEuIFBhbGFkYXIgZGVsIGZ1bWFkb3IuIEV4Y2x1eWUgbGV1Y29wbGFzaWEgcGlsb3NhLlwiXSxbXCJNb3JkZWR1cmEgZGVsIGxhYmlvIHkgZGUgbGEgbWVqaWxsYVwiLFwiXCJdLFtcIk90cmFzIGxlc2lvbmVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgbXVjb3NhIGJ1Y2FsXCIsXCJNdWNpbm9zaXMgYnVjYWwgZm9jYWxcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQXRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBsaW5ndWFsZXNcIixcIkdsb3NpdGlzIGF0cm9maWNhXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsYSBsZW5ndWEsIG5vIGVzcGVjaWZpY2FkYS5cIixcIkdsb3NvcGF0aWFcIl0sW1wiR2xvc2l0aXNcIixcIkFic2Nlc28gZGUgbGEgbGVuZ3VhLiBVbGNlcmEgdHJhdW1hdGljYSBkZSBsYSBsZW5ndWEuIEV4Y2x1eWUgZ2xvc2l0aXMgYXRyb2ZpY2EuXCJdLFtcIkdsb3NpdGlzIHJvbWJvaWRlYSBtZWRpYW5hXCIsXCJcIl0sW1wiR2xvc29kaW5pYVwiLFwiR2xvc29waXJvc2lzLiBMZW5ndWEgZG9sb3Jvc2EuXCJdLFtcIkhpcGVydHJvZmlhIGRlIGxhcyBwYXBpbGFzIGxpbmd1YWxlc1wiLFwiSGlwZXJ0cm9maWEgZGUgbGFzIHBhcGlsYXMgZm9saWFjZWFzLiBMZW5ndWEgbmVncmEgcGlsb3NhLiBMZW5ndWEgbmVncmEgdmVsbG9zYSwgTGVuZ3VhIHNhYnVycmFsLlwiXSxbXCJMZW5ndWEgZ2VvZ3JhZmljYVwiLFwiR2xvc2l0aXMgYXJlYXRhIGV4Zm9saWF0aXZhLiBHbG9zaXRpcyBtaWdyYXRvcmlhIGJlbmlnbmEuXCJdLFtcIkxlbmd1YSBwbGVnYWRhXCIsXCJMZW5ndWEgY29uIHN1cmNvcy4gTGVuZ3VhIGVzY3JvdGFsLiBMZW5ndWEgZmlzdXJhZGEuIEV4Y2x1eWUgbGVuZ3VhIGZpc3VyYWRhIGNvbmdlbml0YS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGRlIGxhIGxlbmd1YVwiLFwiQWdyYW5kYW1pZW50by4gQXRyb2ZpYS4gQ3JlbmFjaW9uIGRlIGxhIGxlbmd1YS4gSGlwZXJ0cm9maWEuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGUgYXJ0aWN1bGFjaW9uZXMgeSBsaWdhbWVudG9zIGRlIG90cmFzIHBhcnRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIGNhYmV6YVwiLFwiXCJdLFtcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGVsIG1heGlsYXJcIixcIkFydGljdWxhY2lvbiBvIGxpZ2FtZW50byB0ZW1wb3JvbWF4aWxhclwiXSxbXCJMdXhhY2lvbiBkZSBvdHJhcyBwYXJ0ZXMgeSBkZSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBjYWJlemFcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgY2FydGlsYWdvIHNlcHRhbCBkZSBsYSBuYXJpelwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBkaWVudGVcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgbWF4aWxhclwiLFwiTWFuZGlidWxhLiBNYXhpbGFyLiBUZW1wb3JvbWF4aWxhci5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWZlY2Npb25lcyBpbmZsYW1hdG9yaWFzIGRlIGxvcyBtYXhpbGFyZXNcIixcIk9zdGVpdGlzLiBPc3Rlb21pZWxpdGlzIG5lb25hdGFsLiBPc3Rlb3JyYWRpb25lY3Jvc2lzLiBQZXJpb3N0aXRpcywgU2VjdWVzdHJvIG9zZW8gZGUgbG9zIG1heGlsYXJlcy4gXCJdLFtcIkFsdmVvbGl0aXMgZGVsIG1heGlsYXJcIixcIkFsdmVvbG8gc2Vjby4gT3N0ZWl0aXMgYWx2ZW9sYXIuXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsb3MgbWF4aWxhcmVzLCBubyBlc3BlY2lmaWNhZGEuXCIsXCJcIl0sW1wiR3JhbnVsb21hIGNlbnRyYWwgZGUgY2VsdWxhcyBnaWdhbnRlc1wiLFwiRXhjbHV5ZSBncmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJEaXNwbGFzaWEgZmlicm9zYS4gRXhvc3Rvc2lzLiBIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgbWF4aWxhci4gSGlwZXJwbGFzaWEgbyBoaXBvcGxhc2lhIGNvbmRpbGFyIG1hbmRpYnVsYXIuIFF1ZXJ1YmlzbW8uXCJdLFtcIlRyYXN0b3Jub3MgZGVsIGRlc2Fycm9sbG8gZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBRdWlzdGUgZGUgU3RhZm5lLiBUb3J1cyBtYW5kaWJ1bGFyLiBUb3J1cyBwYWxhdGluby5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQWJzY2VzbyBwZXJpYXBpY2FsIGNvbiBmaXN0dWxhXCIsXCJBYnNjZXNvIGRlbnRhbCBjb24gZmlzdHVsYS4gQWJzY2VzbyBkZW50b2FsdmVvbGFyIGNvbiBmaXN0dWxhLlwiXSxbXCJBYnNjZXNvIHBlcmlhcGljYWwgc2luIGZpc3R1bGFcIixcIkFic2Nlc28gZGVudGFsIHNpbiBmaXN0dWxhLiBBYnNjZXNvIGRlbnRvYWx2ZW9sYXIgc2luIGZpc3R1bGEuXCJdLFtcIkRlZ2VuZXJhY2lvbiBkZSBsYSBwdWxwYVwiLFwiQ2FsY2lmaWNhY2lvbmVzIGRlIGxhIHB1bHBhLiBQaWVkcmFzLiBEZW50aWN1bG9zLlwiXSxbXCJGb3JtYWNpb24gYW5vcm1hbCBkZSB0ZWppZG8gZHVybyBlbiBsYSBwdWxwYVwiLFwiRGVudGluYSBzZWN1bmRhcmlhIG8gaXJyZWd1bGFyLlwiXSxbXCJOZWNyb3NpcyBkZSBsYSBwdWxwYVwiLFwiR2FuZ3JlbmEgZGUgbGEgcHVscGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIHB1bHBhIHkgZGVsIHRlamlkbyBwZXJpYXBpY2FsXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgYWd1ZGEgb3JpZ2luYWRhIGVuIGxhIHB1bHBhXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgY3JvbmljYVwiLFwiR3JhbnVsb21hIGFwaWNhbCBvIHBlcmlhcGljYWwuIFBlcmlvZG9udGl0aXMgYXBpY2FsIGNyb25pY2EuXCJdLFtcIlB1bHBpdGlzXCIsXCJBYnNjZXNvLiBQb2xpcG8uIFB1bHBpdGlzIGFndWRhLiBQdWxwaXRpcyBjcm9uaWNhIChoaXBlcnBsYXNpY2EsIHVsY2VyYXRpdmEpLiBQdWxwaXRpcyBzdXB1cmF0aXZhLlwiXSxbXCJRdWlzdGUgcmFkaWN1bGFyXCIsXCJRdWlzdGUgYXBpY2FsIChwZXJpb2RvbnRhbCkuIFF1aXN0ZSBwZXJpYXBpY2FsLiBRdWlzdGUgcmFkaWN1bGFyIHJlc2lkdWFsLiBFeGNsdXllOiBxdWlzdGUgbGF0ZXJhbCBwZXJpb2RvbnRhbC5cIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT3Ryb3MgcXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIG5vIGNsYXNpZmljYWRvcyBlbiBvdHJhIHBhcnRlXCIsXCJQZXJsYSBkZSBFcHN0ZWluLiBRdWlzdGVzOiBkZXJtb2lkZSwgZXBpZGVybW9pZGUsIGxpbmZvZXBpdGVsaWFsLCBuYXNvYWx2ZW9sYXIsIG5hc29sYWJpYWwuXCJdLFtcIk90cm9zIHF1aXN0ZXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIG1heGlsYXIgYW5ldXJpc21hdGljby4gUXVpc3RlIG1heGlsYXIgaGVtb3JyYWdpY28uIFF1aXN0ZSBtYXhpbGFyIHRyYXVtYXRpY28uIEV4Y2x1eWUgcXVpc3RlIGRlIFN0YWZuZS4gUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBcIl0sW1wiUXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIHNpbiBvdHJhIGVzcGVjaWZpY2FjaW9uXCIsXCJcIl0sW1wiUXVpc3RlcyBkZSBsYXMgZmlzdXJhcyAobm8gb2RvbnRvZ2VuaWNvcylcIixcIlF1aXN0ZXMgZGVsOiBjYW5hbCBpbmNpc2l2bywgZ2xvYnVsb21heGlsYXIsIG5hc29wYWxhdGlubywgcGFsYXRpbm8gbWVkaW8sIHBhcGlsYSBwYWxhdGluYS5cIl0sW1wiUXVpc3RlcyBvcmlnaW5hZG9zIHBvciBlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIChxdWlzdGVzIG9kb250b2dlbmljb3MpXCIsXCJRdWVyYXRvcXVpc3RlLiBRdWlzdGVzOiBkZW50aWdlcm8sIGVydXBjaW9uIGRlbnRhcmlhLCBmb2xpY3VsYXIsIGdpbmdpdmFsLCBsYXRlcmFsIHBlcmlvZG9udGFsLCBwcmltb3JkaWFsLlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJBYnNjZXNvIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlwiXSxbXCJBbHRlcmFjaW9uZXMgZGUgbGEgc2VjcmVjaW9uIHNhbGl2YWxcIixcIkhpcG9zZWNyZWNpb24gc2FsaXZhbC4gUHRpYWxpc21vLiBYZXJvc3RvbWlhLiBFeGNsdXllIFNpbmRyb21lIGRlIFNq77+9Z3Jlbi5cIl0sW1wiQXRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiRW5mZXJtZWRhZCBkZSBnbGFuZHVsYSBzYWxpdmFsLCBubyBlc3BlY2lmaWNhZGFcIixcIlNpYWxhZGVub3BhdGlhXCJdLFtcIkZpc3R1bGEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiRXhjbHV5ZSBmaXN0dWxhIGNvbmdlbml0YSBkZSBnbGFuZHVsYSBzYWxpdmFsLlwiXSxbXCJIaXBlcnRyb2ZpYSBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiTXVjb2NlbGUgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiUXVpc3RlIG11Y29zbyBkZSBnbGFuZHVsYSBzYWxpdmFsIHBvciBleHRyYXZhc2FjaW9uIG8gcG9yIHJldGVuY2lvbi4gUmFudWxhLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZGUgbGFzIGdsYW5kdWxhcyBzYWxpdmFsZXNcIixcIkVuZmVybWVkYWQgZGUgTWlrdWxpY3ouIEVzdGVub3NpcyBkZWwgY29uZHVjdG8gc2FsaXZhbC4gU2lhbG9tZXRhcGxhc2lhIG5lY3JvdGl6YW50ZS4gRXhjbHV5ZSBzaW5kcm9tZSBzZWNvIChTau+/vWdyZW4pLlwiXSxbXCJTaWFsb2FkZW5pdGlzXCIsXCJFeGNsdXllOiBmaWVicmUgdXZlb3Bhcm90aWRlYSAoSGVlcmZvcmR0KSwgcGFyb3RpZGl0aXMgaW5mZWNjaW9zYSAoZXBpZGVtaWNhKS5cIl0sW1wiU2lhbG9saXRpYXNpc1wiLFwiQ2FsY3VsbyBkZSBjb25kdWN0byBvIGRlIGdsYW5kdWxhIHNhbGl2YWwuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFicmFzaW9uIGRlIGxvcyBkaWVudGVzXCIsXCJBYnJhc2lvbiBwb3IgZGVudGlmcmljbywgaGFiaXRvcywgb2N1cGFjaW9uYWwsIHJpdHVhbCwgdHJhZGljaW9uYWwuIERlZmVjdG8gY3VuZWlmb3JtZSBkZSBsb3MgZGllbnRlcy5cIl0sW1wiQW5xdWlsb3NpcyBkZW50YWxcIixcIlwiXSxbXCJBdHJpY2lvbiBleGNlc2l2YSBkZSBsb3MgZGllbnRlc1wiLFwiRGVzZ2FzdGUgb2NsdXNhbC4gRGVzZ2FzdGUgcHJveGltYWwuXCJdLFtcIkNhbWJpb3MgcG9zdGVydXB0aXZvcyBkZWwgY29sb3IgZGUgbG9zIHRlamlkb3MgZGVudGFsZXMgZHVyb3NcIixcIkV4Y2x1eWUgZGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlcy5cIl0sW1wiRGVwb3NpdG9zIChhY3JlY2lvbmVzKSBlbiBsb3MgZGllbnRlc1wiLFwiQ2FsY3VsbyBkZW50YWwgc3VwcmFnaW5naXZhbCBvIHN1YmdpbmdpdmFsLiBEZXBvc2l0byBlbiBsb3MgZGllbnRlcyBhbmFyYW5qYWRvLCBiZXRlbCwgbWF0ZXJpYSBhbGJhLCBuZWdybywgdGFiYWNvLCB2ZXJkZS4gUGlnbWVudGFjaW9uIGRlIGxvcyBkaWVudGVzLlwiXSxbXCJFbmZlcm1lZGFkIG5vIGVzcGVjaWZpY2FkYSBkZSBsb3MgdGVqaWRvcyBkZW50YWxlcyBkdXJvc1wiLFwiXCJdLFtcIkVyb3Npb24gZGUgbG9zIGRpZW50ZXNcIixcIkRlYmlkYSBhIGRpZXRhLCBkcm9nYXMgeSBtZWRpY2FtZW50b3MsIHZvbWl0byBwZXJzaXN0ZW50ZSwgaWRpb3BhdGljYSwgb2N1cGFjaW9uYWwuXCJdLFtcIkhpcGVyY2VtZW50b3Npc1wiLFwiSGlwZXJwbGFzaWEgZGVsIGNlbWVudG8uXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBlc3BlY2lmaWNhZGFzIGRlIGxvcyB0ZWppZG9zIGR1cm9zIGRlIGxvcyBkaWVudGVzXCIsXCJEZW50aW5hIHNlbnNpYmxlLiBFc21hbHRlIGlycmFkaWFkby5cIl0sW1wiUmVhYnNvcmNpb24gcGF0b2xvZ2ljYSBkZSBsb3MgZGllbnRlc1wiLFwiR3JhbnVsb21hIGludGVybm8gZGUgbGEgcHVscGEuIFJlYWJzb3JjaW9uIGV4dGVybmEgZGUgbG9zIGRpZW50ZXMuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFqdXN0ZSBvY2x1c2FsXCJdLFtcIkJpb3B1bHBlY3RvbWlhXCJdLFtcIkNhbmFsaXphY2lvbiBjb24gZXNwZWNpYWxpc3RhXCJdLFtcIkN1cmV0YWplIGFiaWVydG9cIl0sW1wiQ3VyZXRhamUgY2VycmFkb1wiXSxbXCJFeG9kb25jaWEgcXVpcnVyZ2ljYVwiXSxbXCJFeG9kb25jaWEgc2ltcGxlXCJdLFtcIkluc3RydWNjaW9uIGRlIHRlY25pY2EgZGUgY2VwaWxsYWRvXCJdLFtcIkludGVyY29uc3VsdGEgY29uIGNpcnVqYW5vIG1heGlsb2ZhY2lhbFwiXSxbXCJJbnRlcmNvbnN1bHRhIGNvbiBlbmRvZG9uY2lzdGFcIl0sW1wiTmVjcm9wdWxwZWN0b21pYVwiXSxbXCJPYnR1cmFjaW9uIHBlcm1hbmVudGVcIl0sW1wiT2J0dXJhY2lvbiB0ZW1wb3JhbFwiXSxbXCJPcGVyYXRvcmlhIERlbnRhbFwiXSxbXCJPcmllbnRhY2lvbiBzb2JyZSBzYWx1ZCBkZW50YWxcIl0sW1wiUHJvZmlsYXhpc1wiXSxbXCJQdWxwZWN0b21pYVwiXSxbXCJQdWxwb3RvbWlhXCJdLFtcIlJldGlybyBkZSBzdXR1cmFzXCJdLFtcIlNlZ3VpbWllbnRvIHBvc3QtZXh0cmFjY2lvblwiXSxbXCJTZWxsYWRvciBkZSBmb3NldGFzIHkgZmlzdXJhc1wiXSxbXCJTb2xpY2l0dWQgZGUgZXN0dWRpb3MgY29tcGxlbWVudGFyaW9zXCJdXSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2VuZXJhbCBmcm9tICcuL2V4Y2VsL2dlbmVyYWxlcy5jc3YnXG5pbXBvcnQgYWxlcmdpYXMgZnJvbSAnLi9leGNlbC9hbGVyZ2lhcy5jc3YnXG5pbXBvcnQgZGVudG9mYWNpYWwgZnJvbSAnLi9leGNlbC9hbm9tYWxpYXMuY3N2J1xuaW1wb3J0IGNhcmllcyBmcm9tICAgJy4vZXhjZWwvY2FyaWVzLmNzdidcbmltcG9ydCBkaWVudGVzIGZyb20gJy4vZXhjZWwvZGllbnRlcy5jc3YnXG5pbXBvcnQgZW5mZXJtZWRhZGVzIGZyb20gICAgJy4vZXhjZWwvZW5mZXJtZWRhZGVzLmNzdidcbmltcG9ydCBsZW5ndWEgZnJvbSAnLi9leGNlbC9sZW5ndWEuY3N2J1xuaW1wb3J0IHB1bHBhIGZyb20gJy4vZXhjZWwvcHVscGEuY3N2J1xuaW1wb3J0IHNhbGl2YWxlcyBmcm9tICcuL2V4Y2VsL3NhbGl2YWxlcy5jc3YnXG5pbXBvcnQgZXN0b21hdGl0aXMgZnJvbSAnLi9leGNlbC9lc3RvbWF0aXRpcy5jc3YnXG5pbXBvcnQgZ2luZ2l2aXRpcyBmcm9tICAnLi9leGNlbC9naW5naXZpdGlzLmNzdidcbmltcG9ydCBoYWJpdG9zIGZyb20gJy4vZXhjZWwvaGFiaXRvcy5jc3YnXG5pbXBvcnQgbHV4YWNpb24gZnJvbSAnLi9leGNlbC9sdXhhY2lvbi5jc3YnXG5pbXBvcnQgbGFiaW9zT3Ryb3MgZnJvbSAnLi9leGNlbC9sYWJpb3NPdHJvcy5jc3YnXG5pbXBvcnQgbWF4aWxhcmVzT3Ryb3MgZnJvbSAnLi9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YnXG5pbXBvcnQgdGVqaWRvc090cm9zIGZyb20gJy4vZXhjZWwvdGVqaWRvc090cm9zLmNzdidcbmltcG9ydCBlbmNpYVRyYW5zdG9ybm8gZnJvbSAnLi9leGNlbC9lbmNpYVRyYW5zdG9ybm8uY3N2J1xuaW1wb3J0IGRpZW50ZXNPdHJvcyBmcm9tICcuL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YnXG5pbXBvcnQgcXVpc3RlcyBmcm9tICcuL2V4Y2VsL3F1aXN0ZXMuY3N2J1xuaW1wb3J0IGRlc2Fycm9sbG8gZnJvbSAnLi9leGNlbC9kZXNhcnJvbGxvLmNzdidcbmltcG9ydCB0cmF0YW1pZW50b3MgZnJvbSAnLi9leGNlbC90cmF0YW1pZW50b3MuY3N2J1xuXG5cblxubGV0IGxvYWREYXRhID0gKCkgPT57XG5cbiAgICBsZXQgZ2VuZXJhbEFycmF5ID0gZGVBcnJheShnZW5lcmFsKVxuICAgIGxldCBhbGVyZ2lhc0FycmF5ID0gZGVBcnJheShhbGVyZ2lhcylcbiAgICBsZXQgZW5mZXJtZWRhZGVzQXJyYXkgPSBkZUFycmF5KGVuZmVybWVkYWRlcylcbiAgICBsZXQgaGFiaXRvc0FycmF5ID0gZGVBcnJheShoYWJpdG9zKVxuICAgIGxldCB0cmF0YW1pZW50b3NBcnJheSA9IGRlQXJyYXkodHJhdGFtaWVudG9zKVxuXG4gICAgXG4gICAgbGV0IGdlbmVyYWxlc0FycmF5ID0gW2RlbnRvZmFjaWFsLGNhcmllcyxkaWVudGVzLGxlbmd1YSxwdWxwYSxzYWxpdmFsZXMsZXN0b21hdGl0aXMsZ2luZ2l2aXRpcyxsdXhhY2lvbixsYWJpb3NPdHJvcyxtYXhpbGFyZXNPdHJvcyx0ZWppZG9zT3Ryb3MsZW5jaWFUcmFuc3Rvcm5vLGRpZW50ZXNPdHJvcyxxdWlzdGVzLGRlc2Fycm9sbG9dXG4gICAgXG4gICAgbGV0IG1haW5BcnJheSA9IFtnZW5lcmFsQXJyYXksYWxlcmdpYXNBcnJheSxlbmZlcm1lZGFkZXNBcnJheSxoYWJpdG9zQXJyYXksdHJhdGFtaWVudG9zQXJyYXksZ2VuZXJhbGVzQXJyYXldXG4gICAgXG4gICAgcmV0dXJuIG1haW5BcnJheVxufVxuXG5cblxuXG5cbi8qIEZ1bmN0aW9uIGluIGNoYXJnZSBvZiBjaGFuZ2luZyB0aGUgdmFsdWVzIGludG8gYSBub3JtYWwgYXJyYXkgKi9cbmxldCBkZUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IGRlQXJyYXllZD0gW10uY29uY2F0LmFwcGx5KFtdLCBhcnJheSk7XG4gICAgcmV0dXJuIGRlQXJyYXllZFxufVxuXG5cblxuZXhwb3J0e1xuICAgIGxvYWREYXRhXG59IiwibGV0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5cbmxldCBjcmVhdGVET01Db250YWluZXIgPSAoY2xhc3NsaXN0TmFtZSxuYW1lKSA9PntcbiAgICBcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzbGlzdE5hbWUpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzbGlzdE5hbWUpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKVxuICAgIFxuICAgIHJldHVybiBjb250YWluZXJcblxufVxuXG5sZXQgY3JlYXRlRE9NRWxlbWVudCA9ICh0eXBlLGNsYXNzbGlzdCx0ZXh0Q29udGVudCxuYW1lKSA9PntcbiAgICBcbiAgICAgICAgXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgaWYodHlwZSA9PT0gJ2J1dHRvbicgfHwgdHlwZSA9PT0gJ2lucHV0Jyl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX0ke2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfWApXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVET01Db250YWluZXIsXG4gICAgY3JlYXRlRE9NRWxlbWVudFxufSIsIlxubGV0IGxvYWRQYWdlU3RydWN0dXJlID0gKCkgPT4ge1xufVxuXG5leHBvcnR7XG4gICAgbG9hZFBhZ2VTdHJ1Y3R1cmVcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5cbmxldCBjcmVhdGVNb2RhbFN0cnVjdHVyZSA9IChjb250ZW50LG1vZGFsTmFtZSx0aXRsZSxvcGVuQnV0dG9uKT0+e1xuXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBDb250YWluZXIgKi9cbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ21vZGFsJyxtb2RhbE5hbWUpXG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGVudCA9IGNyZWF0ZURPTUNvbnRhaW5lcignbW9kYWxDb250ZW50JylcblxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIGhlYWRlciAqL1xuICAgIGxldCBtb2RhbEhlYWRlciA9IGNyZWF0ZURPTUNvbnRhaW5lcihgJHttb2RhbE5hbWV9SGVhZGVyYClcbiAgICBcbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCB0aXRsZSAqL1xuICAgIGxldCBtb2RhbFRpdGxlID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywnbW9kYWxIZWFkZXJUaXRsZScsdGl0bGUpXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSlcbiAgICAvKiBDcmVhdGVzIHRoZSBjbG9zZSBidXR0b24qL1xuICAgIGxldCBjbG9zZSAgPSBjcmVhdGVET01FbGVtZW50KCdidXR0b24nLCdjbG9zZScsJ3gnKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlKVxuXG4gICAgLyogQWRkcyB0aGUgbW9kYWwgKi9cbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG5cbiAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgfSlcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIFxuICAgIFxuICAgIH0pXG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZVxufSIsImNsYXNzIFBhY2llbnRlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsYWdlLHNleCxnZW5lcmFsLGVzcGVjaWZpY28sdHJhdGFtaWVudG8sZmFybWFjb3RlcmFwaWEsZW5mZXJtZWRhZGVzLGFsZXJnaWFzLGhhYml0b3MpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgIHRoaXMuc2V4ID0gc2V4IDtcbiAgICAgIHRoaXMuZ2VuZXJhbCA9IGdlbmVyYWw7XG4gICAgICB0aGlzLmVzcGVjaWZpY28gPSBlc3BlY2lmaWNvO1xuICAgICAgdGhpcy50cmF0YW1pZW50byA9IHRyYXRhbWllbnRvO1xuICAgICAgdGhpcy5mYXJtYWNvdGVyYXBpYSA9IGZhcm1hY290ZXJhcGlhO1xuICAgICAgdGhpcy5lbmZlcm1lZGFkZXMgPSBlbmZlcm1lZGFkZXM7XG4gICAgICB0aGlzLmFsZXJnaWFzID0gYWxlcmdpYXM7XG4gICAgICB0aGlzLmhhYml0b3MgPSBoYWJpdG9zO1xuICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5jbGFzcyBFeHBlZGllbnRlIHtcbiAgY29uc3RydWN0b3IoY2l0YSxwYWNpZW50ZSl7XG4gICAgdGhpcy5jaXRhID0gY2l0YVxuICAgIHRoaXMucGFjaWVudGUgPSBwYWNpZW50ZVxuICB9XG59XG5cbmNsYXNzIENpdGEge1xuICBjb25zdHJ1Y3RvcihwYWNpZW50ZSxmZWNoYSxub3Rhcyl7XG4gICAgdGhpcy5wYWNpZW50ZSA9IHBhY2llbnRlXG4gICAgdGhpcy5mZWNoYSA9IGZlY2hhXG4gICAgdGhpcy5ub3RhcyA9IG5vdGFzXG4gIH1cbn1cblxuY2xhc3MgQmlibGlvdGVjYSB7XG4gIGNvbnN0cnVjdG9yKHBhY2llbnRlcyl7XG4gICAgdGhpcy5wYWNpZW50ZXMgPSBwYWNpZW50ZXNcbiAgfVxuXG4gIGFkZFBhdGllbnQgPSAoUGFjaWVudGUpID0+IHtcbiAgICB0aGlzLnBhY2llbnRlcy5wdXNoKFBhY2llbnRlKVxuICB9XG59XG5cbmV4cG9ydHtcbiAgUGFjaWVudGUsXG4gIEV4cGVkaWVudGUsXG4gIENpdGEsXG4gIEJpYmxpb3RlY2Fcbn0iLCJpbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVET01FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JGdW5jdGlvbnMnXG5pbXBvcnQge2NyZWF0ZU1vZGFsU3RydWN0dXJlfSBmcm9tICcuL21vZGFsQ3JlYXRvcnMnXG5pbXBvcnQge2xvYWREYXRhfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQge1BhY2llbnRlLEJpYmxpb3RlY2F9IGZyb20gJy4vcGFjaWVudGUnXG5cblxuXG5cblxubGV0IGFkZFBhdGllbnRNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAvKiBMb2FkcyB0aGUgbWFpbiBhcnJheSAqL1xuICAgIGxldCBtYWluQXJyYXkgPSBsb2FkRGF0YSgpXG5cbiAgICBsZXQgZ2VuZXJhbCA9IG1haW5BcnJheVswXVxuICAgIGxldCBhbGVyZ2lhcyA9IG1haW5BcnJheVsxXVxuICAgIGxldCBlbmZlcm1lZGFkZXMgPSBtYWluQXJyYXlbMl1cbiAgICBsZXQgaGFiaXRvcyA9IG1haW5BcnJheVszXVxuICAgIGxldCB0cmF0YW1pZW50b3MgPSBtYWluQXJyYXlbNF1cbiAgICBsZXQgc3BlY2lmaWMgPSBtYWluQXJyYXlbNV1cblxuXG4gICAgLyogTWFpbiBjb250YWluZXIgZm9yIHRoZSBtb2RhbCAqL1xuICAgIGxldCBtYWluRm9ybSA9IGNyZWF0ZURPTUVsZW1lbnQoJ2Zvcm0nLCdwYXRpZW50Rm9ybScsJycsJ3BhdGllbnRGb3JtJylcbiAgICBtYWluRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywncmV0dXJuIGZhbHNlJylcblxuICAgIC8qIFBhdGllbnQgZm9ybSBzaWRlcyAqL1xuICAgIGxldCByaWdodFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtUmlnaHQnKVxuICAgIGxldCBsZWZ0U2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1MZWZ0JylcblxuICAgIGxldCB0b3BTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybVRvcCcpXG4gICAgbGV0IGJvdHRvbVNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtQm90dG9tJylcblxuICAgIC8qTWFpbiBEZXNpZ24gUmlnaHQgU2lkZSovXG4gICAgbGV0IG5hbWVMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnTm9tYnJlJylcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmbmFtZScpXG4gICAgXG4gICAgbGV0IG5hbWVJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnZm9ybVRleHRJbnB1dCcsJycsJ2ZuYW1lJylcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZm5hbWUnKVxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG5cbiAgICAvKkdlbmVyYWwqL1xuICAgIGxldCBnZW5lcmFsTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0RpYWdub3N0aWNvIEdlbmVyYWwnKVxuICAgIGdlbmVyYWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZnZW5lcmFsJylcbiAgICBcbiAgICBsZXQgZ2VuZXJhbElucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnc2VsZWN0Jywnc2VsZWN0SW5wdXQnLCcnLCdmZ2VuZXJhbCcpXG4gICAgZ2VuZXJhbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmZ2VuZXJhbCcpXG4gICAgZ2VuZXJhbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgZ2VuZXJhbElucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICBnZW5lcmFsSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICBnZW5lcmFsSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnZW5lcmFsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZ2VuZXJhbElucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZ2VuZXJhbFtpXSwgZ2VuZXJhbFtpXSkpO1xuICAgIH0gICBcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChnZW5lcmFsTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChnZW5lcmFsSW5wdXQpO1xuXG4gICAgLyogRXNwZWNpZmljbyAqL1xuICAgIGxldCBzcGVjaWZpY0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdEaWFnbm9zdGljbyBFc3BlY2lmaWNvJylcbiAgICBzcGVjaWZpY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnNwZWNpZmljJylcbiAgICBcbiAgICBsZXQgc3BlY2lmaWNJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZnNwZWNpZmljJylcbiAgICBzcGVjaWZpY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdmc3BlY2lmaWMnKVxuICAgIHNwZWNpZmljSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cblxuXG4gICAgZ2VuZXJhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGV2ZW50KSA9PntcbiAgICAgICAgXG4gICAgICAgIGxldCBlbGVtZW50SW5kZXhTZWxlY3RlZCA9IGdlbmVyYWwuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIGxldCBzcGVjaWZpY0FycmF5ID0gc3BlY2lmaWNbZWxlbWVudEluZGV4U2VsZWN0ZWRdLm1hcCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50WzBdXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBub3Rlc1NwZWNpZmljQXJyYXkgPSBzcGVjaWZpY1tlbGVtZW50SW5kZXhTZWxlY3RlZF0ubWFwKChlbGVtZW50KT0+e1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbMV1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNwZWNpZmljSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbignJywnJyx0cnVlLHRydWUpKVxuICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgICAgIHNwZWNpZmljSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG5cbiAgICAgICAgLypDbGVhcnMgYWxsIHZhbHVlcyBvZiB0aGUgbGlzdCBhbiByZXNldHMgdGhlbSAqL1xuICAgICAgICBzcGVjaWZpY0lucHV0Lmxlbmd0aCA9MDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNwZWNpZmljQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzcGVjaWZpY0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oc3BlY2lmaWNBcnJheVtpXSwgc3BlY2lmaWNBcnJheVtpXSkpO1xuICAgICAgICB9ICAgXG4gICAgXG5cbiAgICB9KVxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHNwZWNpZmljTGFiZWwpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzcGVjaWZpY0lucHV0KTtcblxuICAgIC8qIFRyYXRhbWllbnRvcyovXG4gICAgbGV0IHRyYXRhbWllbnRvc0xhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdUcmF0YW1pZW50bycpXG4gICAgdHJhdGFtaWVudG9zTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmdHJhdGFtaWVudG8nKVxuICAgIFxuICAgIGxldCB0cmF0YW1pZW50b3NJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZnRyYXRhbWllbnRvJylcbiAgICB0cmF0YW1pZW50b3NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZnRyYXRhbWllbnRvJylcbiAgICB0cmF0YW1pZW50b3NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgICBcblxuXG4gICAgdHJhdGFtaWVudG9zSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbignJywnJyx0cnVlLHRydWUpKVxuICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJycpXG4gICAgdHJhdGFtaWVudG9zSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdHJhdGFtaWVudG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdHJhdGFtaWVudG9zSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbih0cmF0YW1pZW50b3NbaV0sIHRyYXRhbWllbnRvc1tpXSkpO1xuICAgIH0gXG5cbiAgICBcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0cmF0YW1pZW50b3NMYWJlbCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHRyYXRhbWllbnRvc0lucHV0KTtcblxuICAgIC8qIEFsZXJnaWFzIENvbnRhaW5lciAqL1xuICAgIGxldCBhbGVyZ2lhc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignYWxlcmdpYXNDb250YWluZXInKVxuXG4gICAgLypBbGVyZ2lhcyovXG4gICAgbGV0IGFsZXJnaWFzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0FsZXJnaWFzJylcbiAgICBhbGVyZ2lhc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGVyZ2lhc0xhYmVsKVxuXG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyQWxlcmdpYXMgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94Q29udGFpbmVyJylcblxuICAgIGZvciAobGV0IGk9MDsgaTxhbGVyZ2lhcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2FsZXJnaWFzW2ldfWApXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJyxhbGVyZ2lhc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZXJnaWFzW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7YWxlcmdpYXNbaV19YClcblxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckFsZXJnaWFzLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBhbGVyZ2lhc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lckFsZXJnaWFzKVxuXG5cblxuICAgIGJvdHRvbVNpZGUuYXBwZW5kQ2hpbGQoYWxlcmdpYXNDb250YWluZXIpXG5cbiAgICAvKiBlbmZlcm1lZGFkZXMgQ29udGFpbmVyICovXG4gICAgbGV0IGVuZmVybWVkYWRlc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignZW5mZXJtZWRhZGVzQ29udGFpbmVyJylcblxuICAgIC8qZW5mZXJtZWRhZGVzKi9cbiAgICBsZXQgZW5mZXJtZWRhZGVzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ2VuZmVybWVkYWRlcycpXG4gICAgZW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0xhYmVsKVxuXG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8ZW5mZXJtZWRhZGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgY3VycmVudEFsZXJneUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdhbGVyZ3lDaGVja2JveCcsJycsYGFsZXJneSR7ZW5mZXJtZWRhZGVzW2ldfWApXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJyxlbmZlcm1lZGFkZXNbaV0pXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxlbmZlcm1lZGFkZXNbaV0pXG5cbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnY2hlY2JveExhYmVsJyxgJHtlbmZlcm1lZGFkZXNbaV19YClcblxuXG5cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveCcpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5SW5wdXQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5TGFiZWwpXG5cbiAgICAgICAgY2hlY2tib3hDb250YWluZXJFbmZlcm1lZGFkZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH0gXG5cbiAgICBlbmZlcm1lZGFkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXJFbmZlcm1lZGFkZXMpXG5cblxuICAgIGJvdHRvbVNpZGUuYXBwZW5kQ2hpbGQoZW5mZXJtZWRhZGVzQ29udGFpbmVyKVxuXG4gICAgLyogaGFiaXRvcyBDb250YWluZXIgKi9cbiAgICBsZXQgaGFiaXRvc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignaGFiaXRvc0NvbnRhaW5lcicpXG5cbiAgICAvKmhhYml0b3MqL1xuICAgIGxldCBoYWJpdG9zTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ2hhYml0b3MnKVxuICAgIGhhYml0b3NDb250YWluZXIuYXBwZW5kQ2hpbGQoaGFiaXRvc0xhYmVsKVxuXG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVySGFiaXRvcyA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3hDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGhhYml0b3MubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5SW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FsZXJneUNoZWNrYm94JywnJyxgYWxlcmd5JHtoYWJpdG9zW2ldfWApXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJyxoYWJpdG9zW2ldKVxuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsaGFiaXRvc1tpXSlcblxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdjaGVjYm94TGFiZWwnLGAke2hhYml0b3NbaV19YClcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveCcpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5SW5wdXQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWxlcmd5TGFiZWwpXG5cbiAgICAgICAgY2hlY2tib3hDb250YWluZXJIYWJpdG9zLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gICAgXG4gICAgaGFiaXRvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lckhhYml0b3MpXG5cbiAgICBib3R0b21TaWRlLmFwcGVuZENoaWxkKGhhYml0b3NDb250YWluZXIpXG5cbiAgICAvKiBMZWZ0IFNpZGUgKi9cblxuICAgIC8qQUdFKi9cbiAgICBsZXQgZWRhZExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdFZGFkJylcbiAgICBlZGFkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZWRhZCcpXG5cbiAgICBsZXQgZWRhZElucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdmb3JtVGV4dElucHV0JywnJywnZmVkYWQnKVxuICAgIGVkYWRJbnB1dC50eXBlID0gJ251bWJlcidcbiAgICBlZGFkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZlZGFkJylcbiAgICBlZGFkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChlZGFkTGFiZWwpXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZWRhZElucHV0KVxuXG4gICAgLyogU2V4byAqL1xuICAgIGxldCBzZXhvTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ1NleG8nKVxuICAgIHNleG9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZzZXhvJylcblxuICAgIGxldCBzZXhvSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2ZzZXhvJylcbiAgICBzZXhvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZzZXhvJylcbiAgICBzZXhvSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICBzZXhvSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbignJywnJyx0cnVlLHRydWUpKVxuICAgIHNleG9JbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCcnKVxuICAgIHNleG9JbnB1dC5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywnJylcbiAgICBcbiAgICBsZXQgc2V4ZXMgPSBbJ01hc2N1bGlubycsJ0ZlbWVuaW5vJywnT3RybyddXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2V4ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBzZXhvSW5wdXQub3B0aW9ucy5hZGQobmV3IE9wdGlvbihzZXhlc1tpXSwgc2V4ZXNbaV0pKTtcbiAgICB9IFxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoc2V4b0xhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHNleG9JbnB1dClcblxuICAgIC8qRmFybWFjbyovXG4gICAgbGV0IGZhcm1hY29MYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRmFybWFjb3RlcmFwaWEnKVxuICAgIGZhcm1hY29MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZmYXJtYWNvJylcblxuICAgIGxldCBmYXJtYWNvSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdmb3JtVGV4dElucHV0JywnJywnZmZhcm1hY28nKVxuICAgIGZhcm1hY29JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZmZhcm1hY28nKVxuXG4gICAgZmFybWFjb0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJycsJycsdHJ1ZSx0cnVlKSlcbiAgICBmYXJtYWNvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnJylcbiAgICBmYXJtYWNvSW5wdXQub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsJycpXG4gICAgICAgIFxuICAgIGxldCBmYXJtYWNvID0gWydTaScsJ05vJ11cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmYXJtYWNvLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZmFybWFjb0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZmFybWFjb1tpXSwgZmFybWFjb1tpXSkpO1xuICAgIH0gXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChmYXJtYWNvTGFiZWwpXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZmFybWFjb0lucHV0KVxuXG4gICAgLyogTm90YXMgKi9cbiAgICBsZXQgbm90ZXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnTm90YXMnKVxuICAgIG5vdGVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmbm90YXMnKVxuICAgIFxuICAgIGxldCBub3Rlc0JveCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3RleHRhcmVhJywnbm90ZUJveCcsJycsJ2Zub3RhcycpXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKG5vdGVzQm94KVxuXG4gICAgLypTdWJtaXQgQm90dG9tICovXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ3N1Ym1pdCcsJ3N1Ym1pdEJ1dHRvbicsJ0FncmVnYXInKVxuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBsZXQgcGF0aWVudCA9IGNoZWNrRm9ybVZhbHVlcygpXG4gICAgICAgIGxldCBuZXdQYXRpZW50ID0gbmV3IFBhY2llbnRlKHBhdGllbnQubmFtZSxwYXRpZW50LmVkYWQscGF0aWVudC5zZXgscGF0aWVudC5nZW5lcmFsLHBhdGllbnQuc3BlY2lmaWMscGF0aWVudC50cmF0YW1pZW50byxwYXRpZW50LmZhcm1hY28scGF0aWVudC5lbmZlcm1lZGFkZXMscGF0aWVudC5hbGVyZ3kscGF0aWVudC5oYWJpdG9zKVxuXG4gICAgICAgIHBhdGllbnREYXRhQmFzZS5hZGRQYXRpZW50KG5ld1BhdGllbnQpXG4gICAgICAgIGNsZWFyRm9ybSgpXG4gICAgICAgIGNsb3NlRm9ybSgpXG4gICAgfSlcblxuICAgIHRvcFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgICB0b3BTaWRlLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZCh0b3BTaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChib3R0b21TaWRlKTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5cblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGF0aWVudEJ1dHRvbicpXG5cbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShtYWluRm9ybSwnbW9kYWwnLCdBZ3JlZ2FyIFBhY2llbnRlJyxhZGRCdXR0b24pXG4gICAgcmV0dXJuIG1haW5Gb3JtXG4gXG59XG5cblxubGV0IGNoZWNrRm9ybVZhbHVlcyA9ICgpID0+IHtcblxuICAgIGxldCBwYXRpZW50SW5mbyA9IHtcbiAgICAgICAgbmFtZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbmFtZScpLnZhbHVlLFxuICAgICAgICBnZW5lcmFsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmdlbmVyYWwnKS52YWx1ZSxcbiAgICAgICAgZmFybWFjbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZmYXJtYWNvJykudmFsdWUsXG4gICAgICAgIHNwZWNpZmljOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnNwZWNpZmljJykudmFsdWUsXG4gICAgICAgIHRyYXRhbWllbnRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnRyYXRhbWllbnRvJykudmFsdWUsXG4gICAgICAgIGVkYWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWRhZCcpLnZhbHVlLFxuICAgICAgICBzZXg6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmc2V4bycpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zub3RhcycpLnZhbHVlLFxuICAgICAgICBhbGVyZ3k6IG5vZGUyQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJnaWFzQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKSxcbiAgICAgICAgZW5mZXJtZWRhZGVzOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmZlcm1lZGFkZXNDb250YWluZXIgPiAuY2hlY2tib3hDb250YWluZXIgPiAuY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkJykpLFxuICAgICAgICBoYWJpdG9zOiBub2RlMkFycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYWJpdG9zQ29udGFpbmVyID4gLmNoZWNrYm94Q29udGFpbmVyID4gLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCcpKVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiBwYXRpZW50SW5mb1xufVxuXG5sZXQgY2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG59XG5cbmxldCBub2RlMkFycmF5ID0gKG5vZGUpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIG5vZGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKSAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5XG59XG5cbmxldCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0aWVudEZvcm0nKVxuICAgIGxldCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsdGV4dGFyZWEnKVxuXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpZihpbnB1dC50eXBlID09PSAndGV4dCcgfHwgaW5wdXQudHlwZSA9PT0gJ3RleHRhcmVhJyB8fCBpbnB1dC50eXBlID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIH1lbHNlIGlmKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpe1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1lbHNlIGlmIChpbnB1dC50eXBlID09PSAnc2VsZWN0LW9uZScpe1xuICAgICAgICAgICAgaW5wdXQuc2VsZWN0ZWRJbmRleCA9IC0xXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0e1xuICAgIGFkZFBhdGllbnRNb2RhbENvbnRlbnRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRQYWdlU3RydWN0dXJlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1BhY2llbnRlLEJpYmxpb3RlY2F9IGZyb20gJy4vcGFjaWVudGUnXG5pbXBvcnR7YWRkUGF0aWVudE1vZGFsQ29udGVudH0gZnJvbSAnLi9wYXRpZW50TW9kYWwnXG5cblxuZ2xvYmFsLnBhdGllbnREYXRhQmFzZSA9IG5ldyBCaWJsaW90ZWNhKFtdKVxuXG5cbmxvYWRQYWdlU3RydWN0dXJlKClcbmFkZFBhdGllbnRNb2RhbENvbnRlbnQoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=