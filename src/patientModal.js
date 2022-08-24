import {createDOMContainer,createDOMElement} from './domCreatorFunctions'
import {createModalStructure} from './modalCreators'
import {loadData} from './data'





let addPatientModalContent = () => {

    /* Loads the main array */
    let mainArray = loadData()

    let general = mainArray[0]
    let alergias = mainArray[1]
    let enfermedades = mainArray[2]
    let habitos = mainArray[3]
    let tratamientos = mainArray[4]
    let specific = mainArray[5]


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


    for(let i = 0; i < general.length; i++){
        generalInput.options.add(new Option(general[i], general[i]));
    }   




    rightSide.appendChild(generalLabel);
    rightSide.appendChild(generalInput);

    /* Especifico */
    let specificLabel = createDOMElement('label','formTitle','Diagnostico Especifico')
    specificLabel.setAttribute('for','fspecific')
    
    let specificInput = createDOMElement('select','selectInput','','fspecific')


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
    


    mainForm.appendChild(rightSide);


    let addButton = document.getElementById('addPatientButton')

    createModalStructure(mainForm,'modal','addPatientModal',addButton)
    return mainForm
 
}

export{
    addPatientModalContent
}