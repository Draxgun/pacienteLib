/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DIAGNÓSTICOS GENERALES.csv":
/*!****************************************!*\
  !*** ./src/DIAGNÓSTICOS GENERALES.csv ***!
  \****************************************/
/***/ ((module) => {

module.exports = [["DIAGNOSTICOS GENERALES"],["ANOMALIAS DENTOFACIALES (INCLUSO LA MALOCLUSION)."],["CARIES DENTAL"],["DIENTES INCLUIDOS E IMPACTADOS"],["ENFERMEDADES DE LA LENGUA"],["ENFERMEDADES DE LA PULPA Y DE LOS TEJIDOS PERIAPICALES"],["ENFERMEDADES DE LAS GLANDULAS SALIVALES"],["ESTOMATITIS Y LESIONES AFINES"],["GINGIVITIS Y ENFERMEDADES PERIODONTALES"],["LUXACION, ESGUINCE Y TORCEDURA DE ARTICULACIONES Y DE LIGAMENTOS DE LA CABEZA"],["OTRAS ENFERMEDADES DE LOS LABIOS Y DE LA MUCOSA BUCAL"],["OTRAS ENFERMEDADES DE LOS MAXILARES"],["OTRAS ENFERMEDADES DE LOS TEJIDOS DUROS DE LOS DIENTES"],["OTROS TRASTORNOS DE LA ENCIA Y DE LA ZONA EDENTULA"],["OTROS TRASTORNOS DE LOS DIENTES Y DE SUS ESTRUCTURAS DE SOSTEN"],["QUISTES DE LA REGION BUCAL, NO CLASIFICADOS EN OTRA PARTE"],["TRASTORNOS DEL DESARROLLO Y DE LA ERUPCION DE LOS DIENTES"]]

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _DIAGN_STICOS_GENERALES_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DIAGNÓSTICOS GENERALES.csv */ "./src/DIAGNÓSTICOS GENERALES.csv");
/* harmony import */ var _DIAGN_STICOS_GENERALES_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DIAGN_STICOS_GENERALES_csv__WEBPACK_IMPORTED_MODULE_0__);



let deArray



let test = () =>{
    let diagnosticosGenerales = [].concat.apply([], (_DIAGN_STICOS_GENERALES_csv__WEBPACK_IMPORTED_MODULE_0___default()));
    console.log(diagnosticosGenerales)
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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");


let createHeader = () => {
    
    /* Header Container */
    let main = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMContainer)('header')

    /*Header Title*/
    let headerText = (0,_domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div','headerTitle','MiPaciente')
    main.appendChild(headerText)

    /*Appends the header */
    document.body.appendChild(main)


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
/* harmony import */ var _domCreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreatorFunctions */ "./src/domCreatorFunctions.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");





let loadPageStructure = () => {
    /*Creates the page strucutre*/
    (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)()
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
/******/ 			// no module.id needed
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");







(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStructure)()

;(0,_data__WEBPACK_IMPORTED_MODULE_1__.test)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUQ7OztBQUd2RDs7OztBQUlBO0FBQ0Esb0RBQW9ELG9FQUFXO0FBQy9EO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVCxvREFBb0QsS0FBSztBQUN6RDtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLHFDQUFxQyxLQUFLLEVBQUUsNEJBQTRCO0FBQ3hFLGlDQUFpQyxVQUFVOztBQUUzQztBQUNBLEtBQUs7QUFDTCxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDLGlDQUFpQyxVQUFVOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDRFOztBQUU1RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdFQUFrQjs7QUFFakM7QUFDQSxxQkFBcUIsc0VBQWdCO0FBQ3JDOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMkU7QUFDcEM7Ozs7QUFJeEM7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJDOztBQUVqQjs7Ozs7QUFLMUIsd0RBQWlCOztBQUVqQiw0Q0FBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvRElBR07Dk1NUSUNPUyBHRU5FUkFMRVMuY3N2Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvZG9tQ3JlYXRvckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFjaWVudGVsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNpZW50ZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhY2llbnRlbGliLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW1tcIkRJQUdOT1NUSUNPUyBHRU5FUkFMRVNcIl0sW1wiQU5PTUFMSUFTIERFTlRPRkFDSUFMRVMgKElOQ0xVU08gTEEgTUFMT0NMVVNJT04pLlwiXSxbXCJDQVJJRVMgREVOVEFMXCJdLFtcIkRJRU5URVMgSU5DTFVJRE9TIEUgSU1QQUNUQURPU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEEgTEVOR1VBXCJdLFtcIkVORkVSTUVEQURFUyBERSBMQSBQVUxQQSBZIERFIExPUyBURUpJRE9TIFBFUklBUElDQUxFU1wiXSxbXCJFTkZFUk1FREFERVMgREUgTEFTIEdMQU5EVUxBUyBTQUxJVkFMRVNcIl0sW1wiRVNUT01BVElUSVMgWSBMRVNJT05FUyBBRklORVNcIl0sW1wiR0lOR0lWSVRJUyBZIEVORkVSTUVEQURFUyBQRVJJT0RPTlRBTEVTXCJdLFtcIkxVWEFDSU9OLCBFU0dVSU5DRSBZIFRPUkNFRFVSQSBERSBBUlRJQ1VMQUNJT05FUyBZIERFIExJR0FNRU5UT1MgREUgTEEgQ0FCRVpBXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTEFCSU9TIFkgREUgTEEgTVVDT1NBIEJVQ0FMXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgTUFYSUxBUkVTXCJdLFtcIk9UUkFTIEVORkVSTUVEQURFUyBERSBMT1MgVEVKSURPUyBEVVJPUyBERSBMT1MgRElFTlRFU1wiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExBIEVOQ0lBIFkgREUgTEEgWk9OQSBFREVOVFVMQVwiXSxbXCJPVFJPUyBUUkFTVE9STk9TIERFIExPUyBESUVOVEVTIFkgREUgU1VTIEVTVFJVQ1RVUkFTIERFIFNPU1RFTlwiXSxbXCJRVUlTVEVTIERFIExBIFJFR0lPTiBCVUNBTCwgTk8gQ0xBU0lGSUNBRE9TIEVOIE9UUkEgUEFSVEVcIl0sW1wiVFJBU1RPUk5PUyBERUwgREVTQVJST0xMTyBZIERFIExBIEVSVVBDSU9OIERFIExPUyBESUVOVEVTXCJdXSIsImltcG9ydCBkaWFnbm9zdGljbyAgZnJvbSAnLi9ESUFHTsOTU1RJQ09TIEdFTkVSQUxFUy5jc3YnXG5cblxubGV0IGRlQXJyYXlcblxuXG5cbmxldCB0ZXN0ID0gKCkgPT57XG4gICAgbGV0IGRpYWdub3N0aWNvc0dlbmVyYWxlcyA9IFtdLmNvbmNhdC5hcHBseShbXSwgZGlhZ25vc3RpY28pO1xuICAgIGNvbnNvbGUubG9nKGRpYWdub3N0aWNvc0dlbmVyYWxlcylcbn1cblxuXG5cblxuXG5leHBvcnR7XG4gICAgdGVzdFxufSIsImxldCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuXG5sZXQgY3JlYXRlRE9NQ29udGFpbmVyID0gKGNsYXNzbGlzdE5hbWUsbmFtZSkgPT57XG4gICAgXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc2xpc3ROYW1lKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSlcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyXG5cbn1cblxubGV0IGNyZWF0ZURPTUVsZW1lbnQgPSAodHlwZSxjbGFzc2xpc3QsdGV4dENvbnRlbnQsbmFtZSkgPT57XG4gICAgXG4gICAgICAgIFxuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NQ29udGFpbmVyLFxuICAgIGNyZWF0ZURPTUVsZW1lbnRcbn0iLCJpbXBvcnQgeyBjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuL2RvbUNyZWF0b3JGdW5jdGlvbnNcIjtcblxubGV0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBcbiAgICAvKiBIZWFkZXIgQ29udGFpbmVyICovXG4gICAgbGV0IG1haW4gPSBjcmVhdGVET01Db250YWluZXIoJ2hlYWRlcicpXG5cbiAgICAvKkhlYWRlciBUaXRsZSovXG4gICAgbGV0IGhlYWRlclRleHQgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCdoZWFkZXJUaXRsZScsJ01pUGFjaWVudGUnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dClcblxuICAgIC8qQXBwZW5kcyB0aGUgaGVhZGVyICovXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKVxuXG5cbn1cblxuXG5leHBvcnR7XG4gICAgY3JlYXRlSGVhZGVyLFxufVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Db250YWluZXIsY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuL2RvbUNyZWF0b3JGdW5jdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuXG5cblxubGV0IGxvYWRQYWdlU3RydWN0dXJlID0gKCkgPT4ge1xuICAgIC8qQ3JlYXRlcyB0aGUgcGFnZSBzdHJ1Y3V0cmUqL1xuICAgIGNyZWF0ZUhlYWRlcigpXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkUGFnZVN0cnVjdHVyZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkUGFnZVN0cnVjdHVyZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuaW1wb3J0e3Rlc3R9IGZyb20gJy4vZGF0YSdcblxuXG5cblxubG9hZFBhZ2VTdHJ1Y3R1cmUoKVxuXG50ZXN0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=