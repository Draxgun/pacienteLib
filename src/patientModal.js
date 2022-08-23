import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {createModalStructure} from './modalCreators'





let addPatientModalContent = () => {

    /* Main container for the modal */
    let mainContainer = createDOMContainer('addPatient');

    /*Main Design*/
    let testModal = createDOMElement('div','prueba','jamon')
    mainContainer.appendChild(testModal)

    let addButton = document.getElementById('addPatientButton')

    createModalStructure(mainContainer,'modalMain','Jamon',addButton)

    
}

export{
    addPatientModalContent
}