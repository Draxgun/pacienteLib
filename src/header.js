import { createDOMContainer,createDOMElement } from "./domCreatorFunctions";

let createHeader = () => {
    
    /* Header Container */
    let main = createDOMContainer('header')

    /*Header Title*/
    let headerText = createDOMElement('div','headerTitle','MiPaciente')
    main.appendChild(headerText)

    /*Appends the header */
    document.body.appendChild(main)


}


export{
    createHeader,
}

