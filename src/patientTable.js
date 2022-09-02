import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {saveInLocalStorage, getFromLocalStorage} from './localStorage'
import  {createPatientFileModal} from './patientFileModal'
import {createModalStructure} from './modalCreators'


let addPatientTable = () => {

    /*Gets the main patient data base*/
    let patientDatabase = getFromLocalStorage('patientDatabase')

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
    let  patientArray = getFromLocalStorage('patientDatabase')
    for (let i = 1; i < rows.length; i++) {    
        for (let j = 0; j < table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            let patientID = table.rows[i].cells[0].innerHTML;
            let patient = patientArray.find(patientTest => patientTest.id == patientID)
            let patientInfo = createPatientFileModal(patient)
            createModalStructure(patientInfo,'modal','Informacion del paciente',cell)
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


export {
    addPatientTable,
}