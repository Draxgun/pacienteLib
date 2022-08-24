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

    let topSide = createDOMContainer('patientFormTop')
    let bottomSide = createDOMContainer('patientFormBottom')

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
    let tratamientosLabel = createDOMElement('label','formTitle','Tratamiento')
    tratamientosLabel.setAttribute('for','ftratamiento')
    
    let tratamientosInput = createDOMElement('select','selectInput','','ftratamiento')
    
    for(let i = 0; i < tratamientos.length; i++){
        tratamientosInput.options.add(new Option(tratamientos[i], tratamientos[i]));
    } 

    rightSide.appendChild(tratamientosLabel);
    rightSide.appendChild(tratamientosInput);

    /* Alergias Container */
    let alergiasContainer = createDOMContainer('alergiasContainer')

    /*Alergias*/
    let alergiasLabel = createDOMElement('label','formTitle','Alergias')
    alergiasContainer.appendChild(alergiasLabel)

    let checkboxContainerAlergias = createDOMContainer('checkboxContainer')

    for (let i=0; i<alergias.length;i++){
        console.log(alergias[i])
        let currentAlergyInput = createDOMElement('input','alergyCheckbox','',`alergy${alergias[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',alergias[i])
        currentAlergyInput.setAttribute('value',alergias[i])

        let currentAlergyLabel = createDOMElement('label','checboxLabel',`${alergias[i]}`)


        let container = createDOMContainer('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerAlergias.appendChild(container)
    }

    alergiasContainer.appendChild(checkboxContainerAlergias)



    bottomSide.appendChild(alergiasContainer)

    /* enfermedades Container */
    let enfermedadesContainer = createDOMContainer('enfermedadesContainer')

    /*enfermedades*/
    let enfermedadesLabel = createDOMElement('label','formTitle','enfermedades')
    enfermedadesContainer.appendChild(enfermedadesLabel)

    let checkboxContainerEnfermedades = createDOMContainer('checkboxContainer')

    for (let i=0; i<enfermedades.length;i++){
        console.log(enfermedades[i])
        let currentAlergyInput = createDOMElement('input','alergyCheckbox','',`alergy${enfermedades[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',enfermedades[i])
        currentAlergyInput.setAttribute('value',enfermedades[i])

        let currentAlergyLabel = createDOMElement('label','checboxLabel',`${enfermedades[i]}`)




        let container = createDOMContainer('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerEnfermedades.appendChild(container)
    } 

    enfermedadesContainer.appendChild(checkboxContainerEnfermedades)


    bottomSide.appendChild(enfermedadesContainer)

    /* habitos Container */
    let habitosContainer = createDOMContainer('habitosContainer')

    /*habitos*/
    let habitosLabel = createDOMElement('label','formTitle','habitos')
    habitosContainer.appendChild(habitosLabel)

    let checkboxContainerHabitos = createDOMContainer('checkboxContainer')

    for (let i=0; i<habitos.length;i++){
        console.log(habitos[i])
        let currentAlergyInput = createDOMElement('input','alergyCheckbox','',`alergy${habitos[i]}`)
        currentAlergyInput.type = 'checkbox'
        currentAlergyInput.setAttribute('name',habitos[i])
        currentAlergyInput.setAttribute('value',habitos[i])

        let currentAlergyLabel = createDOMElement('label','checboxLabel',`${habitos[i]}`)

        let container = createDOMContainer('checkbox')
        container.appendChild(currentAlergyInput)
        container.appendChild(currentAlergyLabel)

        checkboxContainerHabitos.appendChild(container)
    }
    
    habitosContainer.appendChild(checkboxContainerHabitos)

    bottomSide.appendChild(habitosContainer)

    /* Left Side */

    /*AGE*/
    let edadLabel = createDOMElement('label','formTitle','Edad')
    edadLabel.setAttribute('for','fedad')

    let edadInput = createDOMElement('input','ageInput','','fedad')
    edadInput.type = 'number'

    leftSide.appendChild(edadLabel)
    leftSide.appendChild(edadInput)

    /* Sexo */
    let sexoLabel = createDOMElement('label','formTitle','Sexo')
    sexoLabel.setAttribute('for','fsexo')

    let sexoInput = createDOMElement('select','sexInput','','fsexo')
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

    createModalStructure(mainForm,'modal','Agregar Paciente',addButton)
    return mainForm
 
}

export{
    addPatientModalContent
}