import {createDOMContainer,createDOMElement} from './domCreatorFunctions'

let createModalStructure = (content,modalName,title,openButton)=>{


    /* Creates the modal Container */
    let modalContainer = createDOMContainer('modal',modalName)
    
    let modalContent = createDOMContainer('modalContent')

    /* Creates the modal header */
    let modalHeader = createDOMContainer(`${modalName}Header`)
    
    /* Creates the modal title */
    let modalTitle = createDOMElement('div','modalHeaderTitle',title)
    modalHeader.appendChild(modalTitle)
    /* Creates the close button*/
    let close  = createDOMElement('button','close','x')
    modalHeader.appendChild(close)

    /* Adds the modal */
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(content)

    modalContainer.appendChild(modalContent)

    openButton.addEventListener('click',()=>{
        document.body.appendChild(modalContainer)
        modalContainer.style.display = "block";

    })
    close.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    
    
    })

}

export {
    createModalStructure
}