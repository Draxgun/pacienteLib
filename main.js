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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n\n.patientFormBottom{\n    display: flex;\n    gap: 10px;\n}\n\n\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.checkboxContainer{\n    width: 600px;\n    flex-wrap: wrap;\n    height: 300px;\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --white:#F3F9FB;\n    --blue:#87C0CD;\n    --navy:#226597;\n    --cold:#113F67;\n}\n\n*{\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--white);\n}\n\n\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cold);\n    width: 100%;\n\n}\n\n.headerTitle{\n    font-size: calc(30px + 3vw);\n    font-weight: bold;\n    color: var(--white);\n    padding: 20px;\n}\n\nmain{\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 90%;\n    padding: 20px;\n    gap: 20px;\n}\n\n.searchbar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.searchInput{\n    width: 100%;\n    border-radius: 10px;\n    padding: 10px;\n    border: #113F67 2px solid;\n    \n}\n\n.searchInput:focus,.searchInput:hover{\n    filter: brightness(85%);\n}\n\n#searchButton{\n    background-color: var(--navy);\n    color: var(--white);\n    font-weight: bold;\n    border: none;\n    padding: 5px;\n    border-radius: 10px;\n    font-size: calc(8px + 1vw);\n}\n\n#searchButton:hover{\n    filter: brightness(85%);\n}\n\n\n\n.mainTable{\n    width: 100%;\n    background-color: var(--blue);\n    height: 700px;\n    max-height: 90%;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:10px\n}\n\ntable {\n    width: 90%;\n    border-collapse: collapse;\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 30px;\n    border: 1 px solid var(--cold);\n}\n\nth {\n    font-size: calc(3px + 1vw);\n    border: 1px solid var(--cold);\n    padding: 10px 20px;\n    background-color: var(--cold);\n    color: var(--white);\n    font-weight: bold;\n}\n\ntd, th {\n    border: 1px solid rgb(190,190,190);\n    padding: 10px 20px;\n  }\n\n#addPatientButton{\n    font-size: calc(3px + 1vw);\n    background-color: var(--cold);\n    padding: 10px;\n    color: var(--white);\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n\n}\n\n#addPatientButton:hover{\n    filter: brightness(85%);\n}\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 0px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    justify-content: start;\n}\n    /* Modal Content/Box */\n.modalContent {\n    background-color: #fefefe;\n    margin: 10px auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n  \n.modalHeader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.modalHeaderTitle{\n    font-size: calc(20px + 1vw);\n    font-weight: bold;\n} \n\n\n\n.patientFormTop{\n    display: flex;\n}\n\n.patientFormRight, .patientFormLeft{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    flex: auto;\n    width: 50%;\n    gap: 10px;\n}\n\n.formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    padding-left: 20px;\n    color: var(--white);\n}\n.formTextInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n    padding-left: 10px;\n}\n\n.selectInput{\n    padding: 5px;\n    font-size: calc(3px + 1vw);\n    border-radius: 10px;\n    border: solid 1px black;\n}\n\n\n.patientFormBottom{\n    display: flex;\n    gap: 10px;\n}\n\n\n\n.alergiasContainer , .enfermedadesContainer, .habitosContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.alergiasContainer   > .formTitle, .enfermedadesContainer  > .formTitle, .habitosContainer  > .formTitle{\n    font-weight: bold;\n    font-size: calc(15px + 1vw);\n    border-radius: 10px;\n    background-color: var(--navy);\n    color: var(--white);\n    padding-left: 0;\n    text-align: center;\n}\n\n.checkboxContainer{\n    width: 600px;\n    flex-wrap: wrap;\n    height: 300px;\n}\n\n  /* The Close Button */\n.close {\nfloat: right;\nbackground: none;\nborder: none;\ncolor: black;\nfont-size: 28px;\nfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\ncolor: black;\ntext-decoration: none;\ncursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0Qjs7QUFFK0I7Ozs7QUFJcEQsd0RBQWlCO0FBQ2pCLHNFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9hbGVyZ2lhcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvYW5vbWFsaWFzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9jYXJpZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2Rlc2Fycm9sbG8uY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2RpZW50ZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvZW5jaWFUcmFuc3Rvcm5vLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9lbmZlcm1lZGFkZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2VzdG9tYXRpdGlzLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9nZW5lcmFsZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2dpbmdpdml0aXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2hhYml0b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2xhYmlvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9sZW5ndWEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL2x1eGFjaW9uLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC9tYXhpbGFyZXNPdHJvcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvcHVscGEuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3F1aXN0ZXMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2V4Y2VsL3NhbGl2YWxlcy5jc3YiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZXhjZWwvdGVqaWRvc090cm9zLmNzdiIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9leGNlbC90cmF0YW1pZW50b3MuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9kb21DcmVhdG9yRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvbW9kYWxDcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9wYXRpZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2llbnRlbGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS13aGl0ZTojRjNGOUZCO1xcbiAgICAtLWJsdWU6Izg3QzBDRDtcXG4gICAgLS1uYXZ5OiMyMjY1OTc7XFxuICAgIC0tY29sZDojMTEzRjY3O1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLmhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMzBweCArIDN2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hiYXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAjMTEzRjY3IDJweCBzb2xpZDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hJbnB1dDpmb2N1cywuc2VhcmNoSW5wdXQ6aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMXZ3KTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcblxcblxcbi5tYWluVGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTBweFxcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDEgcHggc29saWQgdmFyKC0tY29sZCk7XFxufVxcblxcbnRoIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbGQpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGQsIHRoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwxOTAsMTkwKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgfVxcblxcbiNhZGRQYXRpZW50QnV0dG9ue1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcblxcbiNhZGRQYXRpZW50QnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbiAgICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbn1cXG4gIFxcbi5tb2RhbEhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWxIZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcblxcblxcbi5wYXRpZW50Rm9ybVRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBhdGllbnRGb3JtUmlnaHQsIC5wYXRpZW50Rm9ybUxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmZvcm1UZXh0SW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDNweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3RJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcblxcbi5wYXRpZW50Rm9ybUJvdHRvbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyLCAuaGFiaXRvc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsZXJnaWFzQ29udGFpbmVyICAgPiAuZm9ybVRpdGxlLCAuZW5mZXJtZWRhZGVzQ29udGFpbmVyICA+IC5mb3JtVGl0bGUsIC5oYWJpdG9zQ29udGFpbmVyICA+IC5mb3JtVGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVye1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5mbG9hdDogcmlnaHQ7XFxuYmFja2dyb3VuZDogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuY29sb3I6IGJsYWNrO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXOztBQUVmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5Qjs7QUFFN0I7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b3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLXdoaXRlOiNGM0Y5RkI7XFxuICAgIC0tYmx1ZTojODdDMENEO1xcbiAgICAtLW5hdnk6IzIyNjU5NztcXG4gICAgLS1jb2xkOiMxMTNGNjc7XFxufVxcblxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuXFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaGJhcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6ICMxMTNGNjcgMnB4IHNvbGlkO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzLC5zZWFyY2hJbnB1dDpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbiNzZWFyY2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuXFxuXFxuLm1haW5UYWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4XFxufVxcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCB2YXIoLS1jb2xkKTtcXG59XFxuXFxudGgge1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sZCk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG50ZCwgdGgge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB9XFxuXFxuI2FkZFBhdGllbnRCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xkKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuXFxuI2FkZFBhdGllbnRCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogOTAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxufVxcbiAgXFxuLm1vZGFsSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuXFxuXFxuLnBhdGllbnRGb3JtVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGF0aWVudEZvcm1SaWdodCwgLnBhdGllbnRGb3JtTGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVRpdGxle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9ybVRleHRJbnB1dHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoM3B4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnNlbGVjdElucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzcHggKyAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuXFxuLnBhdGllbnRGb3JtQm90dG9te1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcbi5hbGVyZ2lhc0NvbnRhaW5lciAsIC5lbmZlcm1lZGFkZXNDb250YWluZXIsIC5oYWJpdG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxlcmdpYXNDb250YWluZXIgICA+IC5mb3JtVGl0bGUsIC5lbmZlcm1lZGFkZXNDb250YWluZXIgID4gLmZvcm1UaXRsZSwgLmhhYml0b3NDb250YWluZXIgID4gLmZvcm1UaXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXJ7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbmZsb2F0OiByaWdodDtcXG5iYWNrZ3JvdW5kOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5jb2xvcjogYmxhY2s7XFxuZm9udC1zaXplOiAyOHB4O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG5jb2xvcjogYmxhY2s7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFzcGlyaW5hXCJdLFtcIkxhdGV4XCJdLFtcIkxpZG9jYWluYSBvIEFuZXN0ZXNpY29zXCJdLFtcIk5pbmd1bmEgYWxlcmdpYVwiXSxbXCJPdHJhIGFsZXJnaWFcIl0sW1wiUGVuaWNpbGluYSB1IE90cm9zIEFudGliaW90aWNvc1wiXSxbXCJTdWxmYXNcIl0sW1wiVmFyaWFzIGFsZXJnaWFzXCJdLFtcIllvZG9cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFOT01BTElBUyBERU5UT0ZBQ0lBTEVTIChJTkNMVVNPIExBIE1BTE9DTFVTSU9OKS5cIixcIkV4Y2x1eWU6IGF0cm9maWEgbyBoaXBlcnRyb2ZpYSBoZW1pZmFjaWFsLCBoaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgY29uZGlsYXIgdW5pbGF0ZXJhbCBkZSBsb3MgbWF4aWxhcmVzLlwiXSxbXCJBbm9tYWxpYSBkZW50b2ZhY2lhbCwgbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHBvc2ljaW9uIGRlbCBkaWVudGVcIixcIkFwaW5hbWllbnRvLiBEZXNwbGF6YW1pZW50by4gRGlhc3RlbWEuIEVzcGFjaWFtaWVudG8gYW5vcm1hbC4gUm90YWNpb24uIFRyYW5zcG9zaWNpb24uIERpZW50ZXMgaW1wYWN0YWRvcyBvIGluY2x1aWRvcyBjb24gcG9zaWNpb24gZWN0b3BpY2EuIEV4Y2x1eWU6IGRpZW50ZXMgaW1wYWN0YWRvcyBvIGluY2x1aWRvcyBzaW4gcG9zaWNpb24gYW5vcm1hbC5cIl0sW1wiQW5vbWFsaWFzIGRlIGxhIHJlbGFjaW9uIGVudHJlIGxvcyBhcmNvcyBkZW50YXJpb3NcIixcIkFudGVwb3NpY2lvbi4gRGVzdmlhY2lvbiBkZSBsYSBsaW5lYSBtZWRpYSBkZWwgYXJjbyBkZW50YXJpby4gRGlzdG9jbHVzaW9uLiBNZXNpb2NsdXNpb24uIE1vcmRpZGEgYWJpZXJ0YS4gTW9yZGlkYSBjcnV6YWRhLiBPY2x1c2lvbiBsaW5ndWFsIHBvc3RlcmlvciBkZSBsb3MgZGllbnRlcyBtYXhpbGFyZXMuIFNvYnJlbW9yZGlkYSAoZXhjZXNpdmEpIGhvcml6b250YWwsIHByb2Z1bmRhIG8gdmVydGljYWwuXCJdLFtcIkFub21hbGlhcyBkZSBsYSByZWxhY2lvbiBtYXhpbG9iYXNpbGFyXCIsXCJBc2ltZXRyaWEgZGUgbGEgbWFuZGlidWxhLiBQcm9nbmF0aXNtby4gUmV0cm9nbmF0aXNtby5cIl0sW1wiQW5vbWFsaWFzIGRlbnRvZmFjaWFsZXMgZnVuY2lvbmFsZXNcIixcIkNpZXJyZSBhbm9ybWFsIGRlIGxvcyBtYXhpbGFyZXMuIE1hbG9jbHVzaW9uIGRlYmlkYSBhIGRlZ2x1Y2lvbiBhbm9ybWFsLCBoYWJpdG8gZGlnaXRhbCwgbGFiaWFsIG8gbGluZ3VhbCwgcmVzcGlyYWNpb24gYnVjYWwuIEV4Y2x1eWUgYnJ1eGlzbW8geSByZWNoaW5hbWllbnRvIGRlIGRpZW50ZXMuXCJdLFtcIkFub21hbGlhcyBldmlkZW50ZXMgZGVsIHRhbWFubyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgZGVsIG1heGlsYXIgbyBtYW5kaWJ1bGEuIE1hY3JvZ25hY2lhLiBNaWNyb2duYWNpYS4gRXhjbHV5ZTogYWNyb21lZ2FsaWEgeSBzaW5kcm9tZSBkZSBQaWVycmUgUm9iaW4uXCJdLFtcIk1hbG9jbHVzaW9uIGRlIHRpcG8gbm8gZXNwZWNpZmljYWRvXCIsXCJcIl0sW1wiT3RyYXMgYW5vbWFsaWFzIGRlbnRvZmFjaWFsZXNcIixcIlwiXSxbXCJUcmFzdG9ybm9zIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhclwiLFwiQ2FzdGHvv71ldGVvIG1heGlsYXIuIENvbXBsZWpvIG8gU2luZHJvbWUgZGUgQ29zdGVuLiBTaW5kcm9tZSBkZSBkaXNmdW5jaW9uIGRvbG9yb3NhIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWFuZGlidWxhci4gVHJhc3Rvcm5vIGRlIGxhIGFydGljdWxhY2lvbiB0ZW1wb3JvbWF4aWxhci4gRXhjbHV5ZTogZXNndWluY2UgbyBsdXhhY2lvbiByZWNpZW50ZSBkZSBsYSBhcnRpY3VsYWNpb24gdGVtcG9yb21heGlsYXIuXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkNBUklFUyBERU5UQUxcIixcIlwiXSxbXCJDYXJpZXMgZGUgbGEgZGVudGluYVwiLFwiXCJdLFtcIkNhcmllcyBkZWwgY2VtZW50b1wiLFwiXCJdLFtcIkNhcmllcyBkZW50YWwgbm8gZXNwZWNpZmljYWRhXCIsXCJcIl0sW1wiQ2FyaWVzIGRlbnRhcmlhIGRldGVuaWRhXCIsXCJcIl0sW1wiQ2FyaWVzIGxpbWl0YWRhIGFsIGVzbWFsdGVcIixcIk1hbmNoYXMgYmxhbmNhcyAoY2FyaWVzIGluY2lwaWVudGUpXCJdLFtcIk90cmFzIGNhcmllcyBkZW50YWxlc1wiLFwiXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJUUkFTVE9STk9TIERFTCBERVNBUlJPTExPIFkgREUgTEEgRVJVUENJT04gREUgTE9TIERJRU5URVNcIixcIkV4Y2x1eWU6IGRpZW50ZXMgaW5jbHVpZG9zIGUgaW1wYWN0YWRvc1wiXSxbXCJBbHRlcmFjaW9uZXMgZW4gbGEgZXJ1cGNpb24gZGVudGFyaWFcIixcIkNhaWRhIHByZW1hdHVyYSBkZSBsb3MgZGllbnRlcyBwcmltYXJpb3MuIERlbnRpY2lvbiBwcmVjb3ouIERpZW50ZSBuYXRhbC4gRGllbnRlIG5lb25hdGFsLiBEaWVudGUgcHJpbWFyaW8gKHBlcnNpc3RlbnRlKSByZXRlbmlkby4gRXJ1cGNpb24gcHJlbWF0dXJhIGRlIGRpZW50ZS5cIl0sW1wiQWx0ZXJhY2lvbmVzIGVuIGxhIGZvcm1hY2lvbiBkZW50YXJpYVwiLFwiQXBsYXNpYSBlIGhpcG9wbGFzaWEgZGVsIGNlbWVudG8uIERpZW50ZSBkZSBUdXJuZXIuIERpbGFjZXJhY2lvbiBkZW50YXJpYS4gSGlwb3BsYXNpYSBkZWwgZXNtYWx0ZS4gT2RvbnRvZGlzcGxhc2lhIHJlZ2lvbmFsLiBFeGNsdXllOiBkaWVudGVzIGRlIEh1dGNoaW5zb24geSBtb2xhcmVzIG1vcnVsb2lkZXMgZW4gbGEgc2lmaWxpcyBjb25nZW5pdGEvIGRpZW50ZXMgbW90ZWFkb3MuXCJdLFtcIkFsdGVyYWNpb25lcyBoZXJlZGl0YXJpYXMgZGUgbGEgZXN0cnVjdHVyYSBkZW50YXJpYSwgbm8gY2xhc2lmaWNhZGFzIGVuIG90cmEgcGFydGVcIixcIkFtZWxvZ2VuZXNpcy4gRGVudGlub2dlbmVzaXMuIE9kb250b2dlbmVzaXMuIERpZW50ZXMgZW4gY29uY2hhLiBEaXNwbGFzaWEgZGVudGluYWwuXCJdLFtcIkFub2RvbmNpYVwiLFwiSGlwb2RvbmNpYS4gT2xpZ29kb25jaWEuXCJdLFtcIkFub21hbGlhcyBkZWwgdGFtYe+/vW8geSBkZSBsYSBmb3JtYSBkZWwgZGllbnRlXCIsXCJDb25jcmVzY2VuY2lhLiBGdXNpb24uIEdlbWluYWNpb24uIERpZW50ZXMgZW4gZm9ybWEgZGUgY2xhdmlqYSAoY29uaWNvcykuIERpZW50ZXMgZXZhZ2luYWRvcy4gRGVucyBpbiBkZW50ZS4gTWFjcm9kb25jaWEuIE1pY3JvZG9uY2lhLiBQZXJsYXMgZGVsIGVzbWFsdGUuIFRhdXJvZG9udGlzbW8uIFR1YmVyY3VsbyBwYXJhbW9sYXIuIEV4Y2x1eWU6IHR1YmVyY3VsbyBkZSBDYXJhYmVsbGkuXCJdLFtcIkRpZW50ZXMgbW90ZWFkb3NcIixcIkVzbWFsdGUgbW90ZWFkby4gRmx1b3Jvc2lzIGRlbnRhbC4gT3BhY2lkYWQgbm8gZmx1b3JpY2EgZGVsIGVzbWFsdGUuIEV4Y2x1eWU6IGRlcG9zaXRvcyAoYWRoZXJlbmNpYXMpIGVuIGxvcyBkaWVudGVzLlwiXSxbXCJEaWVudGVzIHN1cGVybnVtZXJhcmlvc1wiLFwiQ3VhcnRvIG1vbGFyLiBEaWVudGVzIHN1cGxlbWVudGFyaW9zLiBEaXN0b21vbGFyLiBNZXNpb2RlbnMuIFBhcmFtb2xhci5cIl0sW1wiT3Ryb3MgdHJhc3Rvcm5vcyBkZWwgZGVzYXJyb2xsbyBkZSBsb3MgZGllbnRlc1wiLFwiQWx0ZXJhY2lvbiBkZWwgY29sb3IgZGVsIGRpZW50ZSBkdXJhbnRlIHN1IGZvcm1hY2lvbi4gTWFuY2hhcyBpbnRyaW5zZWNhcyBkZSBsb3MgZGllbnRlcyBTQUkuXCJdLFtcIlNpbmRyb21lIGRlIGxhIGVydXBjaW9uIGRlbnRhcmlhXCIsXCJcIl0sW1wiVHJhc3Rvcm5vIGRlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIG5vIGVzcGVjaWZpY2FkbyBcIixcIlRyYXN0b3JubyBkZSBsYSBvZG9udG9nZW5lc2lzIFNBSS5cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkRJRU5URVMgSU5DTFVJRE9TIEUgSU1QQUNUQURPU1wiLFwiRXhjbHV5ZTogZGllbnRlcyBpbmNsdWlkb3MgZSBpbXBhY3RhZG9zIGNvbiBwb3NpY2lvbiBhbm9ybWFsIGRlIGxvcyBtaXNtb3MgbyBkZSBsb3MgZGllbnRlcyBhZHlhY2VudGVzLlwiXSxbXCJEaWVudGVzIGltcGFjdGFkb3NcIixcIkRpZW50ZSBxdWUgbm8gaGEgZXJ1cGNpb25hZG8gZGViaWRvIGEgbGEgb2JzdHJ1Y2Npb24gcG9yIG90cm8gZGllbnRlLlwiXSxbXCJEaWVudGVzIGluY2x1aWRvcyBcIixcIkRpZW50ZSBxdWUgbm8gaGEgZXJ1cGNpb25hZG8gc2luIG9ic3RydWNjaW9uIHBvciBvdHJvIGRpZW50ZS5cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIk9UUk9TIFRSQVNUT1JOT1MgREUgTE9TIERJRU5URVMgWSBERSBTVVMgRVNUUlVDVFVSQVMgREUgU09TVEVOXCIsXCJcIl0sW1wiQXRyb2ZpYSBkZWwgcmVib3JkZSBhbHZlb2xhciBkZXNkZW50YWRvXCIsXCJcIl0sW1wiRXhmb2xpYWNpb24gZGUgbG9zIGRpZW50ZXMgZGViaWRhIGEgY2F1c2FzIHNpc3RlbWljYXNcIixcIlwiXSxbXCJPdHJhcyBhZmVjY2lvbmVzIGVzcGVjaWZpY2FkYXMgZGUgbG9zIGRpZW50ZXMgeSBkZSBzdXMgZXN0cnVjdHVyYXMgZGUgc29zdGVuXCIsXCJBZ3JhbmRhbWllbnRvIGRlbCByZWJvcmRlIGFsdmVvbGFyLiBPZG9udGFsZ2lhLiBQcm9sb25nYWNpb24gYWx2ZW9sYXIgaXJyZWd1bGFyLlwiXSxbXCJQZXJkaWRhIGRlIGRpZW50ZXMgZGViaWRhIGEgYWNjaWRlbnRlLCBleHRyYWNjaW9uIG8gZW5mZXJtZWRhZCBwZXJpb2RvbnRhbCBsb2NhbFwiLFwiXCJdLFtcIlJhaXogZGVudGFsIHJldGVuaWRhXCIsXCJcIl0sW1wiVHJhc3Rvcm5vcyBkZSBsb3MgZGllbnRlcyB5IGRlIHN1cyBlc3RydWN0dXJhcyBkZSBzb3N0ZW4sIG5vIGVzcGVjaWZpY2Fkb1wiLFwiXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJPVFJPUyBUUkFTVE9STk9TIERFIExBIEVOQ0lBIFkgREUgTEEgWk9OQSBFREVOVFVMQVwiLFwiRXhjbHV5ZTogYXRyb2ZpYSBkZWwgcmVib3JkZSBhbHZlb2xhciBlZGVudHVsbywgZ2luZ2l2aXRpcyBhZ3VkYSB5IGdpbmdpdml0aXMgY3JvbmljYS5cIl0sW1wiSGlwZXJwbGFzaWEgZ2luZ2l2YWxcIixcIkZpYnJvbWF0b3NpcyBnaW5naXZhbC5cIl0sW1wiTGVzaW9uZXMgZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhIGFzb2NpYWRhcyBjb24gdHJhdW1hdGlzbW9cIixcIkhpcGVycGxhc2lhIGlycml0YXRpdmEgZGVsIHJlYm9yZGUgYWx2ZW9sYXIgZWRlbnR1bG8gKGhpcGVycGxhc2lhIHByb3Rlc2ljYSkuXCJdLFtcIk90cm9zIHRyYXN0b3Jub3MgZXNwZWNpZmljYWRvcyBkZSBsYSBlbmNpYSB5IGRlIGxhIHpvbmEgZWRlbnR1bGFcIixcIkVwdWxpcyBkZSBjZWx1bGFzIGdpZ2FudGVzLiBFcHVsaXMgZmlicm9zby4gR3JhbnVsb21hIHBlcmlmZXJpY28gZGUgY2VsdWxhcyBnaWdhbnRlcy4gR3JhbnVsb21hIHBpb2dlbm8gZGUgbGEgZW5jaWEuIFJlYmxhbmRlY2ltaWVudG8gZGVsIHJlYm9yZGUuXCJdLFtcIlJldHJhY2Npb24gZ2luZ2l2YWxcIixcIlJlY2VzaW9uIGdpbmdpdmFsIGxvY2FsaXphZGEuIFJlY2VzaW9uIGdpbmdpdmFsIGdlbmVyYWxpemFkYS4gUmVjZXNpb24gZ2luZ2l2YWwgcG9zdGluZmVjY2lvc2EuIFJlY2VzaW9uIGdpbmdpdmFsIHBvc3RvcGVyYXRvcmlhLlwiXSxbXCJUcmFzdG9ybm8gbm8gZXNwZWNpZmljYWRvIGRlIGxhIGVuY2lhIHkgZGUgbGEgem9uYSBlZGVudHVsYSBcIixcIlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRU5GRVJNRURBREVTIFwiXSxbXCJBbmdpbmEgZGUgUGVjaG9cIl0sW1wiQXJ0cml0aXNcIl0sW1wiQXNtYVwiXSxbXCJBdGFxdWUgQ2FyZGlhY29cIl0sW1wiQ2FuY2VyXCJdLFtcIkRpYWJldGVzIFRpcG8gMVwiXSxbXCJEaWFiZXRlcyBUaXBvIDJcIl0sW1wiRG9sb3IgZW4gUGVjaG9cIl0sW1wiRW5mZXJtZWRhZCBkZWwgSGlnYWRvXCJdLFtcIkVuZmVybWVkYWQgZGVsIFJp77+9b25cIl0sW1wiRW5maXNlbWFcIl0sW1wiSGVwYXRpdGlzXCJdLFtcIkhpcGVydGVuc2lvblwiXSxbXCJIaXBvZ2x1Y2VtaWFcIl0sW1wiSGlwb3RlbnNpb25cIl0sW1wiTmluZ3VuYSBlbmZlcm1lZGFkXCJdLFtcIk90cmEgZW5mZXJtZWRhZFwiXSxbXCJQcm9ibGVtYSBkZSBUaXJvaWRlc1wiXSxbXCJQcm9ibGVtYXMgRXN0b21hY2FsZXNcIl0sW1wiU0lEQS8gVklIXCJdLFtcIlR1YmVyY3Vsb3Npc1wiXSxbXCJWYXJpYXMgRW5mZXJtZWRhZGVzXCJdLFtcIlwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJFU1RPTUFUSVRJUyBZIExFU0lPTkVTIEFGSU5FU1wiLFwiRXhjbHV5ZTogQ2FuY3J1bSBvcmlzLiBFc3RvbWF0aXRpcyBnYW5ncmVub3NhLiBHaW5naXZvZXN0b21hdGl0aXMgaGVycGV0aWNhIChoZXJwZXMgc2ltcGxlKS4gTm9tYS4gUXVlaWxpdGlzLlwiXSxbXCJDZWx1bGl0aXMgeSBhYnNjZXNvIGRlIGxhIGJvY2FcIixcIkFic2Nlc29zIHN1Ym1hbmRpYnVsYXJlcy4gQ2VsdWxpdGlzIGRlbCBwaXNvIGRlIGxhIGJvY2EuIEV4Y2x1eWUgYWJzY2VzbyBkZSBnbGFuZHVsYSBzYWxpdmFsIG8gbGVuZ3VhLCBhYnNjZXNvIHBlcmlhcGljYWwsIGFic2Nlc28gcGVyaW9kb250YWwsIGFic2Nlc28gcGVyaXRvbnNpbGFyLlwiXSxbXCJFc3RvbWF0aXRpcyBhZnRvc2EgcmVjdXJyZW50ZVwiLFwiQWZ0YXMgZGUgQmVkbmFyLiBFc3RvbWF0aXRpcyBhZnRvc2EgbWF5b3IgbyBtZW5vci4gRXN0b21hdGl0aXMgaGVycGV0aWZvcm1lLiBQZXJpYWRlbml0aXMgbXVjb3NhIG5lY3JvdGljYSByZWN1cnJlbnRlLiBVbGNlcmEgYWZ0b3NhIHJlY3VycmVudGUuXCJdLFtcIk90cmFzIGZvcm1hcyBkZSBlc3RvbWF0aXRpc1wiLFwiRXN0b21hdGl0aXMgcHJvdGVzaWNhLCB1bGNlcmF0aXZhLCB2ZXNpY3Vsb3NhLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiQU5PTUFMSUFTIERFTlRPRkFDSUFMRVMgKElOQ0xVU08gTEEgTUFMT0NMVVNJT04pLlwiXSxbXCJDQVJJRVMgREVOVEFMXCJdLFtcIkRJRU5URVMgSU5DTFVJRE9TIEUgSU1QQUNUQURPU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEEgTEVOR1VBXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBQVUxQQSBZIERFIExPUyBURUpJRE9TIFBFUklBUElDQUxFU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEFTIEdMQU5EVUxBUyBTQUxJVkFMRVNcIl0sW1wiRVNUT01BVElUSVMgWSBMRVNJT05FUyBBRklORVNcIl0sW1wiR0lOR0lWSVRJUyBZIEVORkVSTUVEQURFUyBQRVJJT0RPTlRBTEVTXCJdLFtcIkxVWEFDSU9OLCBFU0dVSU5DRSBZIFRPUkNFRFVSQSBERSBBUlRJQ1VMQUNJT05FUyBZIERFIExJR0FNRU5UT1MgREUgTEEgQ0FCRVpBXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTEFCSU9TIFkgREUgTEEgTVVDT1NBIEJVQ0FMXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTUFYSUxBUkVTXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgVEVKSURPUyBEVVJPUyBERSBMT1MgRElFTlRFU1wiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExBIEVOQ0lBIFkgREUgTEEgWk9OQSBFREVOVFVMQVwiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExPUyBESUVOVEVTIFkgREUgU1VTIEVTVFJVQ1RVUkFTIERFIFNPU1RFTlwiXSxbXCJRVUlTVEVTIERFIExBIFJFR0lPTiBCVUNBTCwgTk8gQ0xBU0lGSUNBRE9TIEVOIE9UUkEgUEFSVEVcIl0sW1wiVFJBU1RPUk5PUyBERUwgREVTQVJST0xMTyBZIERFIExBIEVSVVBDSU9OIERFIExPUyBESUVOVEVTXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkdJTkdJVklUSVMgWSBFTkZFUk1FREFERVMgUEVSSU9ET05UQUxFU1wiLFwiQ29sdW1uYTFcIl0sW1wiR2luZ2l2aXRpcyBhZ3VkYVwiLFwiRXhjbHV5ZSBnaW5naXZpdGlzIHVsY2Vyb25lY3JvdGljYSBhZ3VkYSB5IGdpbmdpdm9lc3RvbWF0aXRpcyBoZXJwZXRpY2FcIl0sW1wiRW5mZXJtZWRhZCBkZWwgcGVyaW9kb250byBubyBlc3BlY2lmaWNhZGFcIixcIlwiXSxbXCJHaW5naXZpdGlzIGNyb25pY2FcIixcIkdpbmdpdml0aXMgY3JvbmljYSBkZXNjYW1hdGl2YSwgZ2luZ2l2aXRpcyBjcm9uaWNhIGhpcGVycGxhc2ljYSwgZ2luZ2l2aXRpcyBjcm9uaWNhIG1hcmdpbmFsIHNpbXBsZSwgZ2luZ2l2aXRpcyBjcm9uaWNhIHVsY2VyYXRpdmEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBwZXJpb2RvbnRhbGVzXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhZ3VkYVwiLFwiQWJzY2VzbyBwYXJhZGVudGFsLiBBYnNjZXNvIHBlcmlvZG9udGFsLiBQZXJpY29yb25pdGlzIGFndWRhLiBFeGNsdXllOiBhYnNjZXNvIHBlcmlhcGljYWwgY29uIGZpc3R1bGEvIHBlcmlvZG9udGl0aXMgYXBpY2FsIGFndWRhLlwiXSxbXCJQZXJpb2RvbnRpdGlzIGNyb25pY2FcIixcIlBlcmljb3Jvbml0aXMgY3JvbmljYS4gUGVyaW9kb250aXRpcyBzaW1wbGUuIFBlcmlvZG9udGl0aXMgY29tcGxpY2FkYS5cIl0sW1wiUGVyaW9kb250b3NpcyAoanV2ZW5pbClcIixcIlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiSEFCSVRPUyBQRVJOSUNJT1NPU1wiXSxbXCJGdW1hclwiXSxbXCJBbGNvaG9sXCJdLFtcIkNvY2FpbmFcIl0sW1wiT3RyYXMgZHJvZ2FzXCJdLFtcIk90cm9zIGhhYml0b3NcIl0sW1wiTmluZ3VuIGhhYml0b1wiXSxbXCJWYXJpb3MgaGFiaXRvc1wiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBMQUJJT1MgWSBERSBMQSBNVUNPU0EgQlVDQUxcIixcIkluY2x1eWUgYWx0ZXJhY2lvbmVzIGVwaXRlbGlhbGVzIGRlIGxhIGxlbmd1YS4gRXhjbHV5ZTogZW5mZXJtZWRhZGVzIGRlIGxhIGxlbmd1YSwgZXN0b21hdGl0aXMgeSBsZXNpb25lcyBhZmluZXMsIG90cm9zIHRyYXN0b3Jub3MgZGUgbGEgZW5jaWEgeSBkZSBsYSB6b25hIGVkZW50dWxhLCBxdWlzdGVzIGRlIGxhIHJlZ2lvbiBidWNhbC5cIl0sW1wiRW5mZXJtZWRhZGVzIGRlIGxvcyBsYWJpb3NcIixcIlBlcmxlY2hlIG8gcXVlaWxpdGlzIGFuZ3VsYXIuIFF1ZWlsaXRpcyBhbmd1bGFyLCBleGZvbGlhdGl2YSwgZ2xhbmR1bGFyLiBRdWVpbG9kaW5pYS4gUXVlaWxvc2lzLiBFeGNsdXllIGFyaWJvZmxhdmlub3NpcyAocG9yIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hKSwgUGVybGVjaGUgZGViaWRvIGEgY2FuZGlkaWFzaXMsIFBlcmxlY2hlIGRlYmlkbyBhIGRlZmljaWVuY2lhIGRlIHJpYm9mbGF2aW5hLiBRdWVpbGl0aXMgZGViaWRhIGEgdHJhc3Rvcm5vcyByZWxhY2lvbmFkb3MgY29uIGxhIHJhZGlhY2lvbi5cIl0sW1wiRmlicm9zaXMgZGUgbGEgc3VibXVjb3NhIGJ1Y2FsXCIsXCJcIl0sW1wiR3JhbnVsb21hIHkgbGVzaW9uZXMgc2VtZWphbnRlcyBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkdyYW51bG9tYSBlb3Npbm9maWxvLiBHcmFudWxvbWEgcGlvZ2VuaWNvLiBYYW50b21hIHZlcnJ1Z2lmb3JtZS5cIl0sW1wiSGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSBtdWNvc2EgYnVjYWxcIixcIkV4Y2x1eWUgaGlwZXJwbGFzaWEgaXJyaXRhdGl2YSBkZSBsYSB6b25hIGVkZW50dWxhIChoaXBlcnBsYXNpYSBwcm90ZXNpY2EpXCJdLFtcIkxldWNvcGxhc2lhIHBpbG9zYVwiLFwiXCJdLFtcIkxldWNvcGxhc2lhIHkgb3RyYXMgYWx0ZXJhY2lvbmVzIGRlbCBlcGl0ZWxpbyBidWNhbCwgaW5jbHV5ZW5kbyBsYSBsZW5ndWFcIixcIkVyaXRyb3BsYXNpYS4gTGV1Y29lZGVtYS4gTGV1Y29xdWVyYXRvc2lzIG5pY290aW5pY2EgcGFsYXRpbmEuIFBhbGFkYXIgZGVsIGZ1bWFkb3IuIEV4Y2x1eWUgbGV1Y29wbGFzaWEgcGlsb3NhLlwiXSxbXCJNb3JkZWR1cmEgZGVsIGxhYmlvIHkgZGUgbGEgbWVqaWxsYVwiLFwiXCJdLFtcIk90cmFzIGxlc2lvbmVzIHkgbGFzIG5vIGVzcGVjaWZpY2FkYXMgZGUgbGEgbXVjb3NhIGJ1Y2FsXCIsXCJNdWNpbm9zaXMgYnVjYWwgZm9jYWxcIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVORkVSTUVEQURFUyBERSBMQSBMRU5HVUFcIixcIkV4Y2x1eWUgZmlicm9zaXMgZGUgbGEgc3VibXVjb3NhIGRlIGxhIGxlbmd1YSwgZXJpdHJvcGxhc2lhIGRlIGxhIGxlbmd1YSwgaGlwZXJwbGFzaWEgZXBpdGVsaWFsIGZvY2FsIGRlIGxhIGxlbmd1YSwgbGV1Y29lZGVtYSBkZSBsYSBsZW5ndWEsIGxldWNvcGxhc2lhIGRlIGxhIGxlbmd1YSwgbGV1Y29wbGFzaWEgcGlsb3NhIGRlIGxhIGxlbmd1YSwgbWFjcm9nbG9zaWEuXCJdLFtcIkF0cm9maWEgZGUgbGFzIHBhcGlsYXMgbGluZ3VhbGVzXCIsXCJHbG9zaXRpcyBhdHJvZmljYVwiXSxbXCJFbmZlcm1lZGFkZXMgZGUgbGEgbGVuZ3VhLCBubyBlc3BlY2lmaWNhZGEuXCIsXCJHbG9zb3BhdGlhXCJdLFtcIkdsb3NpdGlzXCIsXCJBYnNjZXNvIGRlIGxhIGxlbmd1YS4gVWxjZXJhIHRyYXVtYXRpY2EgZGUgbGEgbGVuZ3VhLiBFeGNsdXllIGdsb3NpdGlzIGF0cm9maWNhLlwiXSxbXCJHbG9zaXRpcyByb21ib2lkZWEgbWVkaWFuYVwiLFwiXCJdLFtcIkdsb3NvZGluaWFcIixcIkdsb3NvcGlyb3Npcy4gTGVuZ3VhIGRvbG9yb3NhLlwiXSxbXCJIaXBlcnRyb2ZpYSBkZSBsYXMgcGFwaWxhcyBsaW5ndWFsZXNcIixcIkhpcGVydHJvZmlhIGRlIGxhcyBwYXBpbGFzIGZvbGlhY2Vhcy4gTGVuZ3VhIG5lZ3JhIHBpbG9zYS4gTGVuZ3VhIG5lZ3JhIHZlbGxvc2EsIExlbmd1YSBzYWJ1cnJhbC5cIl0sW1wiTGVuZ3VhIGdlb2dyYWZpY2FcIixcIkdsb3NpdGlzIGFyZWF0YSBleGZvbGlhdGl2YS4gR2xvc2l0aXMgbWlncmF0b3JpYSBiZW5pZ25hLlwiXSxbXCJMZW5ndWEgcGxlZ2FkYVwiLFwiTGVuZ3VhIGNvbiBzdXJjb3MuIExlbmd1YSBlc2Nyb3RhbC4gTGVuZ3VhIGZpc3VyYWRhLiBFeGNsdXllIGxlbmd1YSBmaXN1cmFkYSBjb25nZW5pdGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyBkZSBsYSBsZW5ndWFcIixcIkFncmFuZGFtaWVudG8uIEF0cm9maWEuIENyZW5hY2lvbiBkZSBsYSBsZW5ndWEuIEhpcGVydHJvZmlhLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiTFVYQUNJT04sIEVTR1VJTkNFIFkgVE9SQ0VEVVJBIERFIEFSVElDVUxBQ0lPTkVTIFkgREUgTElHQU1FTlRPUyBERSBMQSBDQUJFWkFcIixcIkNvbHVtbmExXCJdLFtcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGUgYXJ0aWN1bGFjaW9uZXMgeSBsaWdhbWVudG9zIGRlIG90cmFzIHBhcnRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIGNhYmV6YVwiLFwiXCJdLFtcIkVzZ3VpbmNlcyB5IHRvcmNlZHVyYXMgZGVsIG1heGlsYXJcIixcIkFydGljdWxhY2lvbiBvIGxpZ2FtZW50byB0ZW1wb3JvbWF4aWxhclwiXSxbXCJMdXhhY2lvbiBkZSBvdHJhcyBwYXJ0ZXMgeSBkZSBsYXMgbm8gZXNwZWNpZmljYWRhcyBkZSBsYSBjYWJlemFcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgY2FydGlsYWdvIHNlcHRhbCBkZSBsYSBuYXJpelwiLFwiXCJdLFtcIkx1eGFjaW9uIGRlbCBkaWVudGVcIixcIlwiXSxbXCJMdXhhY2lvbiBkZWwgbWF4aWxhclwiLFwiTWFuZGlidWxhLiBNYXhpbGFyLiBUZW1wb3JvbWF4aWxhci5cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTUFYSUxBUkVTXCIsXCJcIl0sW1wiQWZlY2Npb25lcyBpbmZsYW1hdG9yaWFzIGRlIGxvcyBtYXhpbGFyZXNcIixcIk9zdGVpdGlzLiBPc3Rlb21pZWxpdGlzIG5lb25hdGFsLiBPc3Rlb3JyYWRpb25lY3Jvc2lzLiBQZXJpb3N0aXRpcywgU2VjdWVzdHJvIG9zZW8gZGUgbG9zIG1heGlsYXJlcy4gXCJdLFtcIkFsdmVvbGl0aXMgZGVsIG1heGlsYXJcIixcIkFsdmVvbG8gc2Vjby4gT3N0ZWl0aXMgYWx2ZW9sYXIuXCJdLFtcIkVuZmVybWVkYWRlcyBkZSBsb3MgbWF4aWxhcmVzLCBubyBlc3BlY2lmaWNhZGEuXCIsXCJcIl0sW1wiR3JhbnVsb21hIGNlbnRyYWwgZGUgY2VsdWxhcyBnaWdhbnRlc1wiLFwiRXhjbHV5ZSBncmFudWxvbWEgcGVyaWZlcmljbyBkZSBjZWx1bGFzIGdpZ2FudGVzLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgbWF4aWxhcmVzXCIsXCJEaXNwbGFzaWEgZmlicm9zYS4gRXhvc3Rvc2lzLiBIaXBlcnBsYXNpYSBvIGhpcG9wbGFzaWEgbWF4aWxhci4gSGlwZXJwbGFzaWEgbyBoaXBvcGxhc2lhIGNvbmRpbGFyIG1hbmRpYnVsYXIuIFF1ZXJ1YmlzbW8uXCJdLFtcIlRyYXN0b3Jub3MgZGVsIGRlc2Fycm9sbG8gZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBRdWlzdGUgZGUgU3RhZm5lLiBUb3J1cyBtYW5kaWJ1bGFyLiBUb3J1cyBwYWxhdGluby5cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkVORkVSTUVEQURFUyBERSBMQSBQVUxQQSBZIERFIExPUyBURUpJRE9TIFBFUklBUElDQUxFU1wiLFwiQ29sdW1uYTFcIl0sW1wiQWJzY2VzbyBwZXJpYXBpY2FsIGNvbiBmaXN0dWxhXCIsXCJBYnNjZXNvIGRlbnRhbCBjb24gZmlzdHVsYS4gQWJzY2VzbyBkZW50b2FsdmVvbGFyIGNvbiBmaXN0dWxhLlwiXSxbXCJBYnNjZXNvIHBlcmlhcGljYWwgc2luIGZpc3R1bGFcIixcIkFic2Nlc28gZGVudGFsIHNpbiBmaXN0dWxhLiBBYnNjZXNvIGRlbnRvYWx2ZW9sYXIgc2luIGZpc3R1bGEuXCJdLFtcIkRlZ2VuZXJhY2lvbiBkZSBsYSBwdWxwYVwiLFwiQ2FsY2lmaWNhY2lvbmVzIGRlIGxhIHB1bHBhLiBQaWVkcmFzLiBEZW50aWN1bG9zLlwiXSxbXCJGb3JtYWNpb24gYW5vcm1hbCBkZSB0ZWppZG8gZHVybyBlbiBsYSBwdWxwYVwiLFwiRGVudGluYSBzZWN1bmRhcmlhIG8gaXJyZWd1bGFyLlwiXSxbXCJOZWNyb3NpcyBkZSBsYSBwdWxwYVwiLFwiR2FuZ3JlbmEgZGUgbGEgcHVscGEuXCJdLFtcIk90cmFzIGVuZmVybWVkYWRlcyB5IGxhcyBubyBlc3BlY2lmaWNhZGFzIGRlIGxhIHB1bHBhIHkgZGVsIHRlamlkbyBwZXJpYXBpY2FsXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgYWd1ZGEgb3JpZ2luYWRhIGVuIGxhIHB1bHBhXCIsXCJcIl0sW1wiUGVyaW9kb250aXRpcyBhcGljYWwgY3JvbmljYVwiLFwiR3JhbnVsb21hIGFwaWNhbCBvIHBlcmlhcGljYWwuIFBlcmlvZG9udGl0aXMgYXBpY2FsIGNyb25pY2EuXCJdLFtcIlB1bHBpdGlzXCIsXCJBYnNjZXNvLiBQb2xpcG8uIFB1bHBpdGlzIGFndWRhLiBQdWxwaXRpcyBjcm9uaWNhIChoaXBlcnBsYXNpY2EsIHVsY2VyYXRpdmEpLiBQdWxwaXRpcyBzdXB1cmF0aXZhLlwiXSxbXCJRdWlzdGUgcmFkaWN1bGFyXCIsXCJRdWlzdGUgYXBpY2FsIChwZXJpb2RvbnRhbCkuIFF1aXN0ZSBwZXJpYXBpY2FsLiBRdWlzdGUgcmFkaWN1bGFyIHJlc2lkdWFsLiBFeGNsdXllOiBxdWlzdGUgbGF0ZXJhbCBwZXJpb2RvbnRhbC5cIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIlFVSVNURVMgREUgTEEgUkVHSU9OIEJVQ0FMLCBOTyBDTEFTSUZJQ0FET1MgRU4gT1RSQSBQQVJURVwiLFwiTGVzaW9uZXMgcXVlIG11ZXN0cmFuIGNhcmFjdGVyaXN0aWNhcyBoaXN0b2xvZ2ljYXMgZGUgcXVpc3RlIGFuZXVyaXNtYXRpY28geSBkZSBvdHJhIGxlc2lvbiBvc3Rlb2ZpYnJvc2EuIEV4Y2x1eWUgcXVpc3RlIHJhZGljdWxhci5cIl0sW1wiT3Ryb3MgcXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIG5vIGNsYXNpZmljYWRvcyBlbiBvdHJhIHBhcnRlXCIsXCJQZXJsYSBkZSBFcHN0ZWluLiBRdWlzdGVzOiBkZXJtb2lkZSwgZXBpZGVybW9pZGUsIGxpbmZvZXBpdGVsaWFsLCBuYXNvYWx2ZW9sYXIsIG5hc29sYWJpYWwuXCJdLFtcIk90cm9zIHF1aXN0ZXMgZGUgbG9zIG1heGlsYXJlc1wiLFwiUXVpc3RlIG1heGlsYXIgYW5ldXJpc21hdGljby4gUXVpc3RlIG1heGlsYXIgaGVtb3JyYWdpY28uIFF1aXN0ZSBtYXhpbGFyIHRyYXVtYXRpY28uIEV4Y2x1eWUgcXVpc3RlIGRlIFN0YWZuZS4gUXVpc3RlIGxhdGVudGUgb3NlbyBkZSBsb3MgbWF4aWxhcmVzLiBcIl0sW1wiUXVpc3RlcyBkZSBsYSByZWdpb24gYnVjYWwsIHNpbiBvdHJhIGVzcGVjaWZpY2FjaW9uXCIsXCJcIl0sW1wiUXVpc3RlcyBkZSBsYXMgZmlzdXJhcyAobm8gb2RvbnRvZ2VuaWNvcylcIixcIlF1aXN0ZXMgZGVsOiBjYW5hbCBpbmNpc2l2bywgZ2xvYnVsb21heGlsYXIsIG5hc29wYWxhdGlubywgcGFsYXRpbm8gbWVkaW8sIHBhcGlsYSBwYWxhdGluYS5cIl0sW1wiUXVpc3RlcyBvcmlnaW5hZG9zIHBvciBlbCBkZXNhcnJvbGxvIGRlIGxvcyBkaWVudGVzIChxdWlzdGVzIG9kb250b2dlbmljb3MpXCIsXCJRdWVyYXRvcXVpc3RlLiBRdWlzdGVzOiBkZW50aWdlcm8sIGVydXBjaW9uIGRlbnRhcmlhLCBmb2xpY3VsYXIsIGdpbmdpdmFsLCBsYXRlcmFsIHBlcmlvZG9udGFsLCBwcmltb3JkaWFsLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiRU5GRVJNRURBREVTIERFIExBUyBHTEFORFVMQVMgU0FMSVZBTEVTXCIsXCJcIl0sW1wiQWJzY2VzbyBkZSBnbGFuZHVsYSBzYWxpdmFsXCIsXCJcIl0sW1wiQWx0ZXJhY2lvbmVzIGRlIGxhIHNlY3JlY2lvbiBzYWxpdmFsXCIsXCJIaXBvc2VjcmVjaW9uIHNhbGl2YWwuIFB0aWFsaXNtby4gWGVyb3N0b21pYS4gRXhjbHV5ZSBTaW5kcm9tZSBkZSBTau+/vWdyZW4uXCJdLFtcIkF0cm9maWEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiXCJdLFtcIkVuZmVybWVkYWQgZGUgZ2xhbmR1bGEgc2FsaXZhbCwgbm8gZXNwZWNpZmljYWRhXCIsXCJTaWFsYWRlbm9wYXRpYVwiXSxbXCJGaXN0dWxhIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIkV4Y2x1eWUgZmlzdHVsYSBjb25nZW5pdGEgZGUgZ2xhbmR1bGEgc2FsaXZhbC5cIl0sW1wiSGlwZXJ0cm9maWEgZGUgZ2xhbmR1bGEgc2FsaXZhbFwiLFwiXCJdLFtcIk11Y29jZWxlIGRlIGdsYW5kdWxhIHNhbGl2YWxcIixcIlF1aXN0ZSBtdWNvc28gZGUgZ2xhbmR1bGEgc2FsaXZhbCBwb3IgZXh0cmF2YXNhY2lvbiBvIHBvciByZXRlbmNpb24uIFJhbnVsYS5cIl0sW1wiT3RyYXMgZW5mZXJtZWRhZGVzIGRlIGxhcyBnbGFuZHVsYXMgc2FsaXZhbGVzXCIsXCJFbmZlcm1lZGFkIGRlIE1pa3VsaWN6LiBFc3Rlbm9zaXMgZGVsIGNvbmR1Y3RvIHNhbGl2YWwuIFNpYWxvbWV0YXBsYXNpYSBuZWNyb3RpemFudGUuIEV4Y2x1eWUgc2luZHJvbWUgc2VjbyAoU2rvv71ncmVuKS5cIl0sW1wiU2lhbG9hZGVuaXRpc1wiLFwiRXhjbHV5ZTogZmllYnJlIHV2ZW9wYXJvdGlkZWEgKEhlZXJmb3JkdCksIHBhcm90aWRpdGlzIGluZmVjY2lvc2EgKGVwaWRlbWljYSkuXCJdLFtcIlNpYWxvbGl0aWFzaXNcIixcIkNhbGN1bG8gZGUgY29uZHVjdG8gbyBkZSBnbGFuZHVsYSBzYWxpdmFsLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiT1RSQVMgRU5GRVJNRURBREVTIERFIExPUyBURUpJRE9TIERVUk9TIERFIExPUyBESUVOVEVTXCIsXCJFeGNsdXllOiBicnV4aXNtbywgY2FyaWVzIGRlbnRhbCwgcmVjaGluYW1pZW50byBkZSBkaWVudGVzLlwiXSxbXCJBYnJhc2lvbiBkZSBsb3MgZGllbnRlc1wiLFwiQWJyYXNpb24gcG9yIGRlbnRpZnJpY28sIGhhYml0b3MsIG9jdXBhY2lvbmFsLCByaXR1YWwsIHRyYWRpY2lvbmFsLiBEZWZlY3RvIGN1bmVpZm9ybWUgZGUgbG9zIGRpZW50ZXMuXCJdLFtcIkFucXVpbG9zaXMgZGVudGFsXCIsXCJcIl0sW1wiQXRyaWNpb24gZXhjZXNpdmEgZGUgbG9zIGRpZW50ZXNcIixcIkRlc2dhc3RlIG9jbHVzYWwuIERlc2dhc3RlIHByb3hpbWFsLlwiXSxbXCJDYW1iaW9zIHBvc3RlcnVwdGl2b3MgZGVsIGNvbG9yIGRlIGxvcyB0ZWppZG9zIGRlbnRhbGVzIGR1cm9zXCIsXCJFeGNsdXllIGRlcG9zaXRvcyAoYWNyZWNpb25lcykgZW4gbG9zIGRpZW50ZXMuXCJdLFtcIkRlcG9zaXRvcyAoYWNyZWNpb25lcykgZW4gbG9zIGRpZW50ZXNcIixcIkNhbGN1bG8gZGVudGFsIHN1cHJhZ2luZ2l2YWwgbyBzdWJnaW5naXZhbC4gRGVwb3NpdG8gZW4gbG9zIGRpZW50ZXMgYW5hcmFuamFkbywgYmV0ZWwsIG1hdGVyaWEgYWxiYSwgbmVncm8sIHRhYmFjbywgdmVyZGUuIFBpZ21lbnRhY2lvbiBkZSBsb3MgZGllbnRlcy5cIl0sW1wiRW5mZXJtZWRhZCBubyBlc3BlY2lmaWNhZGEgZGUgbG9zIHRlamlkb3MgZGVudGFsZXMgZHVyb3NcIixcIlwiXSxbXCJFcm9zaW9uIGRlIGxvcyBkaWVudGVzXCIsXCJEZWJpZGEgYSBkaWV0YSwgZHJvZ2FzIHkgbWVkaWNhbWVudG9zLCB2b21pdG8gcGVyc2lzdGVudGUsIGlkaW9wYXRpY2EsIG9jdXBhY2lvbmFsLlwiXSxbXCJIaXBlcmNlbWVudG9zaXNcIixcIkhpcGVycGxhc2lhIGRlbCBjZW1lbnRvLlwiXSxbXCJPdHJhcyBlbmZlcm1lZGFkZXMgZXNwZWNpZmljYWRhcyBkZSBsb3MgdGVqaWRvcyBkdXJvcyBkZSBsb3MgZGllbnRlc1wiLFwiRGVudGluYSBzZW5zaWJsZS4gRXNtYWx0ZSBpcnJhZGlhZG8uXCJdLFtcIlJlYWJzb3JjaW9uIHBhdG9sb2dpY2EgZGUgbG9zIGRpZW50ZXNcIixcIkdyYW51bG9tYSBpbnRlcm5vIGRlIGxhIHB1bHBhLiBSZWFic29yY2lvbiBleHRlcm5hIGRlIGxvcyBkaWVudGVzLlwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiVFJBVEFNSUVOVE9TXCJdLFtcIkFqdXN0ZSBvY2x1c2FsXCJdLFtcIkJpb3B1bHBlY3RvbWlhXCJdLFtcIkNhbmFsaXphY2lvbiBjb24gZXNwZWNpYWxpc3RhXCJdLFtcIkN1cmV0YWplIGFiaWVydG9cIl0sW1wiQ3VyZXRhamUgY2VycmFkb1wiXSxbXCJFeG9kb25jaWEgcXVpcnVyZ2ljYVwiXSxbXCJFeG9kb25jaWEgc2ltcGxlXCJdLFtcIkluc3RydWNjaW9uIGRlIHRlY25pY2EgZGUgY2VwaWxsYWRvXCJdLFtcIkludGVyY29uc3VsdGEgY29uIGNpcnVqYW5vIG1heGlsb2ZhY2lhbFwiXSxbXCJJbnRlcmNvbnN1bHRhIGNvbiBlbmRvZG9uY2lzdGFcIl0sW1wiTmVjcm9wdWxwZWN0b21pYVwiXSxbXCJPYnR1cmFjaW9uIHBlcm1hbmVudGVcIl0sW1wiT2J0dXJhY2lvbiB0ZW1wb3JhbFwiXSxbXCJPcGVyYXRvcmlhIERlbnRhbFwiXSxbXCJPcmllbnRhY2lvbiBzb2JyZSBzYWx1ZCBkZW50YWxcIl0sW1wiUHJvZmlsYXhpc1wiXSxbXCJQdWxwZWN0b21pYVwiXSxbXCJQdWxwb3RvbWlhXCJdLFtcIlJldGlybyBkZSBzdXR1cmFzXCJdLFtcIlNlZ3VpbWllbnRvIHBvc3QtZXh0cmFjY2lvblwiXSxbXCJTZWxsYWRvciBkZSBmb3NldGFzIHkgZmlzdXJhc1wiXSxbXCJTb2xpY2l0dWQgZGUgZXN0dWRpb3MgY29tcGxlbWVudGFyaW9zXCJdLFtcIlwiXV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdlbmVyYWwgZnJvbSAnLi9leGNlbC9nZW5lcmFsZXMuY3N2J1xuaW1wb3J0IGFsZXJnaWFzIGZyb20gJy4vZXhjZWwvYWxlcmdpYXMuY3N2J1xuaW1wb3J0IGRlbnRvZmFjaWFsIGZyb20gJy4vZXhjZWwvYW5vbWFsaWFzLmNzdidcbmltcG9ydCBjYXJpZXMgZnJvbSAgICcuL2V4Y2VsL2Nhcmllcy5jc3YnXG5pbXBvcnQgZGllbnRlcyBmcm9tICcuL2V4Y2VsL2RpZW50ZXMuY3N2J1xuaW1wb3J0IGVuZmVybWVkYWRlcyBmcm9tICAgICcuL2V4Y2VsL2VuZmVybWVkYWRlcy5jc3YnXG5pbXBvcnQgbGVuZ3VhIGZyb20gJy4vZXhjZWwvbGVuZ3VhLmNzdidcbmltcG9ydCBwdWxwYSBmcm9tICcuL2V4Y2VsL3B1bHBhLmNzdidcbmltcG9ydCBzYWxpdmFsZXMgZnJvbSAnLi9leGNlbC9zYWxpdmFsZXMuY3N2J1xuaW1wb3J0IGVzdG9tYXRpdGlzIGZyb20gJy4vZXhjZWwvZXN0b21hdGl0aXMuY3N2J1xuaW1wb3J0IGdpbmdpdml0aXMgZnJvbSAgJy4vZXhjZWwvZ2luZ2l2aXRpcy5jc3YnXG5pbXBvcnQgaGFiaXRvcyBmcm9tICcuL2V4Y2VsL2hhYml0b3MuY3N2J1xuaW1wb3J0IGx1eGFjaW9uIGZyb20gJy4vZXhjZWwvbHV4YWNpb24uY3N2J1xuaW1wb3J0IGxhYmlvc090cm9zIGZyb20gJy4vZXhjZWwvbGFiaW9zT3Ryb3MuY3N2J1xuaW1wb3J0IG1heGlsYXJlc090cm9zIGZyb20gJy4vZXhjZWwvbWF4aWxhcmVzT3Ryb3MuY3N2J1xuaW1wb3J0IHRlamlkb3NPdHJvcyBmcm9tICcuL2V4Y2VsL3Rlamlkb3NPdHJvcy5jc3YnXG5pbXBvcnQgZW5jaWFUcmFuc3Rvcm5vIGZyb20gJy4vZXhjZWwvZW5jaWFUcmFuc3Rvcm5vLmNzdidcbmltcG9ydCBkaWVudGVzT3Ryb3MgZnJvbSAnLi9leGNlbC9kaWVudGVzT3Ryb3MuY3N2J1xuaW1wb3J0IHF1aXN0ZXMgZnJvbSAnLi9leGNlbC9xdWlzdGVzLmNzdidcbmltcG9ydCBkZXNhcnJvbGxvIGZyb20gJy4vZXhjZWwvZGVzYXJyb2xsby5jc3YnXG5pbXBvcnQgdHJhdGFtaWVudG9zIGZyb20gJy4vZXhjZWwvdHJhdGFtaWVudG9zLmNzdidcblxuXG5cbmxldCBsb2FkRGF0YSA9ICgpID0+e1xuXG5cbiAgICBsZXQgZ2VuZXJhbEFycmF5ID0gZGVBcnJheShnZW5lcmFsKVxuICAgIGxldCBhbGVyZ2lhc0FycmF5ID0gZGVBcnJheShhbGVyZ2lhcylcbiAgICBsZXQgZW5mZXJtZWRhZGVzQXJyYXkgPSBkZUFycmF5KGVuZmVybWVkYWRlcylcbiAgICBsZXQgaGFiaXRvc0FycmF5ID0gZGVBcnJheShoYWJpdG9zKVxuICAgIGxldCB0cmF0YW1pZW50b3NBcnJheSA9IGRlQXJyYXkodHJhdGFtaWVudG9zKVxuXG4gICAgXG4gICAgbGV0IGdlbmVyYWxlc0FycmF5ID0gW2RlbnRvZmFjaWFsLGNhcmllcyxkaWVudGVzLGxlbmd1YSxwdWxwYSxzYWxpdmFsZXMsZXN0b21hdGl0aXMsZ2luZ2l2aXRpcyxsdXhhY2lvbixsYWJpb3NPdHJvcyxtYXhpbGFyZXNPdHJvcyx0ZWppZG9zT3Ryb3MsZW5jaWFUcmFuc3Rvcm5vLGRpZW50ZXNPdHJvcyxxdWlzdGVzLGRlc2Fycm9sbG9dXG4gICAgXG4gICAgXG5cbiAgICBsZXQgbWFpbkFycmF5ID0gW2dlbmVyYWxBcnJheSxhbGVyZ2lhc0FycmF5LGVuZmVybWVkYWRlc0FycmF5LGhhYml0b3NBcnJheSx0cmF0YW1pZW50b3NBcnJheSxnZW5lcmFsZXNBcnJheV1cbiAgICBcbiAgICByZXR1cm4gbWFpbkFycmF5XG59XG5cblxuXG5cblxuLyogRnVuY3Rpb24gaW4gY2hhcmdlIG9mIGNoYW5naW5nIHRoZSB2YWx1ZXMgaW50byBhIG5vcm1hbCBhcnJheSAqL1xubGV0IGRlQXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgZGVBcnJheWVkPSBbXS5jb25jYXQuYXBwbHkoW10sIGFycmF5KTtcbiAgICByZXR1cm4gZGVBcnJheWVkXG59XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZERhdGFcbn0iLCJsZXQgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cblxubGV0IGNyZWF0ZURPTUNvbnRhaW5lciA9IChjbGFzc2xpc3ROYW1lLG5hbWUpID0+e1xuICAgIFxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NsaXN0TmFtZSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG4gICAgXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NsaXN0TmFtZSlcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpXG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuXG59XG5cbmxldCBjcmVhdGVET01FbGVtZW50ID0gKHR5cGUsY2xhc3NsaXN0LHRleHRDb250ZW50LG5hbWUpID0+e1xuICAgIFxuICAgICAgICBcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYodHlwZSA9PT0gJ2J1dHRvbicgfHwgdHlwZSA9PT0gJ2lucHV0Jyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfSR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpfWApXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1lbHNle1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZURPTUNvbnRhaW5lcixcbiAgICBjcmVhdGVET01FbGVtZW50XG59IiwiXG5sZXQgbG9hZFBhZ2VTdHJ1Y3R1cmUgPSAoKSA9PiB7XG59XG5cbmV4cG9ydHtcbiAgICBsb2FkUGFnZVN0cnVjdHVyZVxufSIsImltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURPTUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvckZ1bmN0aW9ucydcblxubGV0IGNyZWF0ZU1vZGFsU3RydWN0dXJlID0gKGNvbnRlbnQsbW9kYWxOYW1lLHRpdGxlLG9wZW5CdXR0b24pPT57XG5cblxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIENvbnRhaW5lciAqL1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignbW9kYWwnLG1vZGFsTmFtZSlcbiAgICBcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gY3JlYXRlRE9NQ29udGFpbmVyKCdtb2RhbENvbnRlbnQnKVxuXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgaGVhZGVyICovXG4gICAgbGV0IG1vZGFsSGVhZGVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGAke21vZGFsTmFtZX1IZWFkZXJgKVxuICAgIFxuICAgIC8qIENyZWF0ZXMgdGhlIG1vZGFsIHRpdGxlICovXG4gICAgbGV0IG1vZGFsVGl0bGUgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdtb2RhbEhlYWRlclRpdGxlJyx0aXRsZSlcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxuICAgIC8qIENyZWF0ZXMgdGhlIGNsb3NlIGJ1dHRvbiovXG4gICAgbGV0IGNsb3NlICA9IGNyZWF0ZURPTUVsZW1lbnQoJ2J1dHRvbicsJ2Nsb3NlJywneCcpXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2UpXG5cbiAgICAvKiBBZGRzIHRoZSBtb2RhbCAqL1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcilcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudClcblxuICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICB9KVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgXG4gICAgXG4gICAgfSlcblxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlXG59IiwiaW1wb3J0IHtjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudH0gZnJvbSAnLi9kb21DcmVhdG9yRnVuY3Rpb25zJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZX0gZnJvbSAnLi9tb2RhbENyZWF0b3JzJ1xuaW1wb3J0IHtsb2FkRGF0YX0gZnJvbSAnLi9kYXRhJ1xuXG5cblxuXG5cbmxldCBhZGRQYXRpZW50TW9kYWxDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgLyogTG9hZHMgdGhlIG1haW4gYXJyYXkgKi9cbiAgICBsZXQgbWFpbkFycmF5ID0gbG9hZERhdGEoKVxuXG4gICAgbGV0IGdlbmVyYWwgPSBtYWluQXJyYXlbMF1cbiAgICBsZXQgYWxlcmdpYXMgPSBtYWluQXJyYXlbMV1cbiAgICBsZXQgZW5mZXJtZWRhZGVzID0gbWFpbkFycmF5WzJdXG4gICAgbGV0IGhhYml0b3MgPSBtYWluQXJyYXlbM11cbiAgICBsZXQgdHJhdGFtaWVudG9zID0gbWFpbkFycmF5WzRdXG4gICAgbGV0IHNwZWNpZmljID0gbWFpbkFycmF5WzVdXG5cblxuICAgIC8qIE1haW4gY29udGFpbmVyIGZvciB0aGUgbW9kYWwgKi9cbiAgICBsZXQgbWFpbkZvcm0gPSBjcmVhdGVET01FbGVtZW50KCdmb3JtJywncGF0aWVudEZvcm0nLCcnLCcnKVxuXG4gICAgLyogUGF0aWVudCBmb3JtIHNpZGVzICovXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1SaWdodCcpXG4gICAgbGV0IGxlZnRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKCdwYXRpZW50Rm9ybUxlZnQnKVxuXG4gICAgbGV0IHRvcFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoJ3BhdGllbnRGb3JtVG9wJylcbiAgICBsZXQgYm90dG9tU2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcigncGF0aWVudEZvcm1Cb3R0b20nKVxuXG4gICAgLypNYWluIERlc2lnbiBSaWdodCBTaWRlKi9cbiAgICBsZXQgbmFtZUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdOb21icmUnKVxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZuYW1lJylcbiAgICBcbiAgICBsZXQgbmFtZUlucHV0ID0gY3JlYXRlRE9NRWxlbWVudCgnaW5wdXQnLCdmb3JtVGV4dElucHV0JywnJywnZm5hbWUnKVxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuXG4gICAgLypHZW5lcmFsKi9cbiAgICBsZXQgZ2VuZXJhbExhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdmb3JtVGl0bGUnLCdEaWFnbm9zdGljbyBHZW5lcmFsJylcbiAgICBnZW5lcmFsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdmZ2VuZXJhbCcpXG4gICAgXG4gICAgbGV0IGdlbmVyYWxJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NlbGVjdElucHV0JywnJywnZmdlbmVyYWwnKVxuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2VuZXJhbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGdlbmVyYWxJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGdlbmVyYWxbaV0sIGdlbmVyYWxbaV0pKTtcbiAgICB9ICAgXG5cbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbExhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZ2VuZXJhbElucHV0KTtcblxuICAgIC8qIEVzcGVjaWZpY28gKi9cbiAgICBsZXQgc3BlY2lmaWNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnRGlhZ25vc3RpY28gRXNwZWNpZmljbycpXG4gICAgc3BlY2lmaWNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZzcGVjaWZpYycpXG4gICAgXG4gICAgbGV0IHNwZWNpZmljSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2ZzcGVjaWZpYycpXG5cblxuICAgIGdlbmVyYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLChldmVudCkgPT57XG4gICAgICAgIFxuICAgICAgICBsZXQgZWxlbWVudEluZGV4U2VsZWN0ZWQgPSBnZW5lcmFsLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICBsZXQgc3BlY2lmaWNBcnJheSA9IHNwZWNpZmljW2VsZW1lbnRJbmRleFNlbGVjdGVkXS5tYXAoKGVsZW1lbnQpPT57XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFswXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbm90ZXNTcGVjaWZpY0FycmF5ID0gc3BlY2lmaWNbZWxlbWVudEluZGV4U2VsZWN0ZWRdLm1hcCgoZWxlbWVudCk9PntcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50WzFdXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgIC8qQ2xlYXJzIGFsbCB2YWx1ZXMgb2YgdGhlIGxpc3QgYW4gcmVzZXRzIHRoZW0gKi9cbiAgICAgICAgc3BlY2lmaWNJbnB1dC5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcGVjaWZpY0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3BlY2lmaWNJbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHNwZWNpZmljQXJyYXlbaV0sIHNwZWNpZmljQXJyYXlbaV0pKTtcbiAgICAgICAgfSAgIFxuICAgIFxuXG4gICAgfSlcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChzcGVjaWZpY0xhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoc3BlY2lmaWNJbnB1dCk7XG5cbiAgICAvKiBUcmF0YW1pZW50b3MqL1xuICAgIGxldCB0cmF0YW1pZW50b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnVHJhdGFtaWVudG8nKVxuICAgIHRyYXRhbWllbnRvc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnRyYXRhbWllbnRvJylcbiAgICBcbiAgICBsZXQgdHJhdGFtaWVudG9zSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdzZWxlY3QnLCdzZWxlY3RJbnB1dCcsJycsJ2Z0cmF0YW1pZW50bycpXG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRyYXRhbWllbnRvcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRyYXRhbWllbnRvc0lucHV0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24odHJhdGFtaWVudG9zW2ldLCB0cmF0YW1pZW50b3NbaV0pKTtcbiAgICB9IFxuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHRyYXRhbWllbnRvc0xhYmVsKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhdGFtaWVudG9zSW5wdXQpO1xuXG4gICAgLyogQWxlcmdpYXMgQ29udGFpbmVyICovXG4gICAgbGV0IGFsZXJnaWFzQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdhbGVyZ2lhc0NvbnRhaW5lcicpXG5cbiAgICAvKkFsZXJnaWFzKi9cbiAgICBsZXQgYWxlcmdpYXNMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnQWxlcmdpYXMnKVxuICAgIGFsZXJnaWFzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZXJnaWFzTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJBbGVyZ2lhcyA9IGNyZWF0ZURPTUNvbnRhaW5lcignY2hlY2tib3hDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGFsZXJnaWFzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhhbGVyZ2lhc1tpXSlcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2FsZXJnaWFzW2ldfWApXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjdXJyZW50QWxlcmd5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJyxhbGVyZ2lhc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZXJnaWFzW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7YWxlcmdpYXNbaV19YClcblxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckFsZXJnaWFzLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBhbGVyZ2lhc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lckFsZXJnaWFzKVxuXG5cblxuICAgIGJvdHRvbVNpZGUuYXBwZW5kQ2hpbGQoYWxlcmdpYXNDb250YWluZXIpXG5cbiAgICAvKiBlbmZlcm1lZGFkZXMgQ29udGFpbmVyICovXG4gICAgbGV0IGVuZmVybWVkYWRlc0NvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignZW5mZXJtZWRhZGVzQ29udGFpbmVyJylcblxuICAgIC8qZW5mZXJtZWRhZGVzKi9cbiAgICBsZXQgZW5mZXJtZWRhZGVzTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ2VuZmVybWVkYWRlcycpXG4gICAgZW5mZXJtZWRhZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZmVybWVkYWRlc0xhYmVsKVxuXG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyRW5mZXJtZWRhZGVzID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8ZW5mZXJtZWRhZGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhlbmZlcm1lZGFkZXNbaV0pXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5SW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FsZXJneUNoZWNrYm94JywnJyxgYWxlcmd5JHtlbmZlcm1lZGFkZXNbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGVuZmVybWVkYWRlc1tpXSlcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLGVuZmVybWVkYWRlc1tpXSlcblxuICAgICAgICBsZXQgY3VycmVudEFsZXJneUxhYmVsID0gY3JlYXRlRE9NRWxlbWVudCgnbGFiZWwnLCdjaGVjYm94TGFiZWwnLGAke2VuZmVybWVkYWRlc1tpXX1gKVxuXG5cblxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfSBcblxuICAgIGVuZmVybWVkYWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lckVuZmVybWVkYWRlcylcblxuXG4gICAgYm90dG9tU2lkZS5hcHBlbmRDaGlsZChlbmZlcm1lZGFkZXNDb250YWluZXIpXG5cbiAgICAvKiBoYWJpdG9zIENvbnRhaW5lciAqL1xuICAgIGxldCBoYWJpdG9zQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCdoYWJpdG9zQ29udGFpbmVyJylcblxuICAgIC8qaGFiaXRvcyovXG4gICAgbGV0IGhhYml0b3NMYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnaGFiaXRvcycpXG4gICAgaGFiaXRvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoYWJpdG9zTGFiZWwpXG5cbiAgICBsZXQgY2hlY2tib3hDb250YWluZXJIYWJpdG9zID0gY3JlYXRlRE9NQ29udGFpbmVyKCdjaGVja2JveENvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8aGFiaXRvcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc29sZS5sb2coaGFiaXRvc1tpXSlcbiAgICAgICAgbGV0IGN1cnJlbnRBbGVyZ3lJbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2lucHV0JywnYWxlcmd5Q2hlY2tib3gnLCcnLGBhbGVyZ3kke2hhYml0b3NbaV19YClcbiAgICAgICAgY3VycmVudEFsZXJneUlucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGhhYml0b3NbaV0pXG4gICAgICAgIGN1cnJlbnRBbGVyZ3lJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxoYWJpdG9zW2ldKVxuXG4gICAgICAgIGxldCBjdXJyZW50QWxlcmd5TGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2NoZWNib3hMYWJlbCcsYCR7aGFiaXRvc1tpXX1gKVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoJ2NoZWNrYm94JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lJbnB1dClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRBbGVyZ3lMYWJlbClcblxuICAgICAgICBjaGVja2JveENvbnRhaW5lckhhYml0b3MuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICBcbiAgICBoYWJpdG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVySGFiaXRvcylcblxuICAgIGJvdHRvbVNpZGUuYXBwZW5kQ2hpbGQoaGFiaXRvc0NvbnRhaW5lcilcblxuICAgIC8qIExlZnQgU2lkZSAqL1xuXG4gICAgLypBR0UqL1xuICAgIGxldCBlZGFkTGFiZWwgPSBjcmVhdGVET01FbGVtZW50KCdsYWJlbCcsJ2Zvcm1UaXRsZScsJ0VkYWQnKVxuICAgIGVkYWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2ZlZGFkJylcblxuICAgIGxldCBlZGFkSW5wdXQgPSBjcmVhdGVET01FbGVtZW50KCdpbnB1dCcsJ2FnZUlucHV0JywnJywnZmVkYWQnKVxuICAgIGVkYWRJbnB1dC50eXBlID0gJ251bWJlcidcblxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGVkYWRMYWJlbClcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChlZGFkSW5wdXQpXG5cbiAgICAvKiBTZXhvICovXG4gICAgbGV0IHNleG9MYWJlbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2xhYmVsJywnZm9ybVRpdGxlJywnU2V4bycpXG4gICAgc2V4b0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZnNleG8nKVxuXG4gICAgbGV0IHNleG9JbnB1dCA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NlbGVjdCcsJ3NleElucHV0JywnJywnZnNleG8nKVxuICAgIGxldCBzZXhlcyA9IFsnTWFzY3VsaW5vJywnRmVtZW5pbm8nLCdPdHJvJ11cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZXhlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNleG9JbnB1dC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHNleGVzW2ldLCBzZXhlc1tpXSkpO1xuICAgIH0gXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZXhvTGFiZWwpXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoc2V4b0lucHV0KVxuXG5cbiAgICB0b3BTaWRlLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG4gICAgdG9wU2lkZS5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gICAgbWFpbkZvcm0uYXBwZW5kQ2hpbGQodG9wU2lkZSlcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChib3R0b21TaWRlKTtcblxuXG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBhdGllbnRCdXR0b24nKVxuXG4gICAgY3JlYXRlTW9kYWxTdHJ1Y3R1cmUobWFpbkZvcm0sJ21vZGFsJywnQWdyZWdhciBQYWNpZW50ZScsYWRkQnV0dG9uKVxuICAgIHJldHVybiBtYWluRm9ybVxuIFxufVxuXG5leHBvcnR7XG4gICAgYWRkUGF0aWVudE1vZGFsQ29udGVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRQYWdlU3RydWN0dXJlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydHthZGRQYXRpZW50TW9kYWxDb250ZW50fSBmcm9tICcuL3BhdGllbnRNb2RhbCdcblxuXG5cbmxvYWRQYWdlU3RydWN0dXJlKClcbmFkZFBhdGllbnRNb2RhbENvbnRlbnQoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9