import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {saveInLocalStorage, getFromLocalStorage} from './localStorage'


let addPatientTable = () => {

    /*Gets the main patient data base*/
    let patientDatabase = getFromLocalStorage('patientDatabase')

    /*Gets the main table*/
    let patientTable = document.getElementById('tableBody')
    
    patientTable.innerHTML = ''
    
    patientDatabase.forEach(patient => {
        addPatientRow(patient)
    });

}

let addPatientRow = (patient) => {
    
    /*Gets the main table*/
    let patientTable = document.getElementById('tableBody')
    

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = patientTable.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let date = row.insertCell(0);
    let name = row.insertCell(1);
    let age = row.insertCell(2);
    let sex = row.insertCell(3);
    let general = row.insertCell(4);

    // Add some text to the new cells:
    date.innerHTML = patient.date;
    name.innerHTML = patient.name;
    age.innerHTML = patient.age;
    sex.innerHTML = patient.sex;
    general.innerHTML = patient.general;

}


export {
    addPatientTable,
}