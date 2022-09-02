import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {createModalStructure} from './modalCreators'
import {Paciente,Biblioteca} from './paciente'
import {saveInLocalStorage, getFromLocalStorage} from './localStorage'
import {addPatientTable} from './patientTable'






let createPatientFileModal = (patient) => {

    /*Create main container*/
    let mainContainer = createDOMContainer('patientFile')

    /*Left side container*/
    let leftContainer = createDOMContainer('patientFileLeft')

    /*Left side container*/
    let rightContainer = createDOMContainer('patientFileRight')

    /* Top Container */
    let topContainer = createDOMContainer('patientFileTop')

    /* Bottom Container */
    let bottomContainer = createDOMContainer('patientFileBottom')


    /*date Label*/
    let dateLabel = createDOMElement('div','patientFileLabel','Nombre')
    let dateValue = createDOMElement('div','patientFieldValue',`${patient.date}`)

    leftContainer.appendChild(dateLabel)
    leftContainer.appendChild(dateValue)

    /*Name Label*/
    let nameLabel = createDOMElement('div','patientFileLabel','Nombre')
    let nameValue = createDOMElement('div','patientFieldValue',`${patient.name}`)

    leftContainer.appendChild(nameLabel)
    leftContainer.appendChild(nameValue)

    /*General Label*/
    let generalLabel = createDOMElement('div','patientFileLabel','Enfermedad General')
    let generalValue = createDOMElement('div','patientFieldValue',`${patient.general}`)

    leftContainer.appendChild(generalLabel)
    leftContainer.appendChild(generalValue)

    /*specific Label*/
    let specificLabel = createDOMElement('div','patientFileLabel','Enfermedad Especifica')
    let specificValue = createDOMElement('div','patientFieldValue',`${patient.specific}`)

    leftContainer.appendChild(specificLabel)
    leftContainer.appendChild(specificValue)

    /*tratamiento Label*/
    let tratamientoLabel = createDOMElement('div','patientFileLabel','Enfermedad Etratamientoa')
    let tratamientoValue = createDOMElement('div','patientFieldValue',`${patient.tratamiento}`)

    leftContainer.appendChild(tratamientoLabel)
    leftContainer.appendChild(tratamientoValue)

    /*age Label*/
    let ageLabel = createDOMElement('div','patientFileLabel','Edad')
    let ageValue = createDOMElement('div','patientFieldValue',`${patient.age}`)

    rightContainer.appendChild(ageLabel)
    rightContainer.appendChild(ageValue)

    /*sex Label*/
    let sexLabel = createDOMElement('div','patientFileLabel','Sexo')
    let sexValue = createDOMElement('div','patientFieldValue',`${patient.sex}`)

    rightContainer.appendChild(sexLabel)
    rightContainer.appendChild(sexValue)


    /*farmacoterapia Label*/
    let farmacoterapiaLabel = createDOMElement('div','patientFileLabel','Farmacoterapia')
    let farmacoterapiaValue = createDOMElement('div','patientFieldValue',`${patient.farmacoterapia}`)

    rightContainer.appendChild(farmacoterapiaLabel)
    rightContainer.appendChild(farmacoterapiaValue)

    /*notas Label*/
    let notasLabel = createDOMElement('div','patientFileLabel','notas')
    let notasValue = createDOMElement('div','patientFieldValue',`${patient.notas}`)

    rightContainer.appendChild(notasLabel)
    rightContainer.appendChild(notasValue)


    /*alergias Label*/
    let alergiasLabel = createDOMElement('div','patientFileLabel','alergias')
    let alergiasValue = createDOMElement('div','patientFieldValue',`${patient.alergias}`)

    bottomContainer.appendChild(alergiasLabel)
    bottomContainer.appendChild(alergiasValue)
    
    /*enfermedades Label*/
    let enfermedadesLabel = createDOMElement('div','patientFileLabel','enfermedades')
    let enfermedadesValue = createDOMElement('div','patientFieldValue',`${patient.enfermedades}`)

    bottomContainer.appendChild(enfermedadesLabel)
    bottomContainer.appendChild(enfermedadesValue)

    /*habitos Label*/
    let habitosLabel = createDOMElement('div','patientFileLabel','habitos')
    let habitosValue = createDOMElement('div','patientFieldValue',`${patient.habitos}`)

    let deleteButton = createDOMElement('button','deleteButton','Eliminar paciente','delete')

    deleteButton.addEventListener('click',()=>{
        deletePatient(patient)
        closeForm()
        addPatientTable()
    })

    mainContainer.appendChild(deleteButton)


    bottomContainer.appendChild(habitosLabel)
    bottomContainer.appendChild(habitosValue)

    topContainer.appendChild(leftContainer)
    topContainer.appendChild(rightContainer)

    mainContainer.appendChild(topContainer)
    mainContainer.appendChild(bottomContainer)


    return mainContainer
}


let deletePatient = (paciente) => {
    let patientDatabase = getFromLocalStorage('patientDatabase')

    patientDatabase = patientDatabase.filter(item => item.id !== paciente.id)
    console.log()

    saveInLocalStorage('patientDatabase',patientDatabase)
} 


let closeForm = () => {
    let modalContainer = document.getElementById('modal')
    modalContainer.style.display = "none";
    document.body.removeChild(modalContainer)
}

export{
    createPatientFileModal,
}