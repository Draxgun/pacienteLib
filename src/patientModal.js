import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {createModalStructure} from './modalCreators'





let addPatientModalContent = () => {

    /* Main container for the modal */
    let mainForm = createDOMElement('form','patientForm','','')

    /* Patient form sides */
    let rightSide = createDOMContainer('patientFormRight')
    let leftSide = createDOMContainer('patientFormLeft')

    /*Main Design Right Side*/
    let nameLabel = createDOMElement('label','formTitle','Nombre')
    nameLabel.setAttribute('for','fname')
    
    let nameInput = createDOMElement('input','formTextInput','','fname')
    nameInput.type = 'text'

    rightSide.appendChild(nameLabel);
    rightSide.appendChild(nameInput);

    /*General*/
    let generalLabel = createDOMElement('label','formTitle','Diagnostico General')
    generalLabel.setAttribute('for','fgeneral')
    
    let generalInput = createDOMElement('select','selectInput','','fgeneral')

    rightSide.appendChild(generalLabel);
    rightSide.appendChild(generalInput);

    /* Especifico */
    let specificLabel = createDOMElement('label','formTitle','Diagnostico Especifico')
    specificLabel.setAttribute('for','fspecific')
    
    let specificInput = createDOMElement('select','selectInput','','fspecific')

    rightSide.appendChild(specificLabel);
    rightSide.appendChild(specificInput);

    /* Tratamientos*/
    


    mainForm.appendChild(rightSide);

    return mainForm
 
}

export{
    addPatientModalContent
}