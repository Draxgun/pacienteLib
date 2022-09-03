import { add } from 'date-fns'
import {saveInLocalStorage, getFromLocalStorage} from './localStorage'
import {addPatientTable} from './patientTable'


let downloadSettings = () => {
    downloadFile()
    exportFile()
}

let downloadFile = ()=>{

    let addButton = document.getElementById('downloadButton')

    addButton.addEventListener('click',()=>{
        let patientDatabase = getFromLocalStorage('patientDatabase')
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
    saveInLocalStorage('patientDatabase',obj)
    addPatientTable()
    
}



export{
    downloadSettings
}