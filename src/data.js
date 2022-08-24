import general from './excel/generales.csv'
import alergias from './excel/alergias.csv'
import dentofacial from './excel/anomalias.csv'
import caries from   './excel/caries.csv'
import dientes from './excel/dientes.csv'
import enfermedades from    './excel/enfermedades.csv'
import lengua from './excel/lengua.csv'
import pulpa from './excel/pulpa.csv'
import salivales from './excel/salivales.csv'
import estomatitis from './excel/estomatitis.csv'
import gingivitis from  './excel/gingivitis.csv'
import habitos from './excel/habitos.csv'
import luxacion from './excel/luxacion.csv'
import labiosOtros from './excel/labiosOtros.csv'
import maxilaresOtros from './excel/maxilaresOtros.csv'
import tejidosOtros from './excel/tejidosOtros.csv'
import enciaTranstorno from './excel/enciaTranstorno.csv'
import dientesOtros from './excel/dientesOtros.csv'
import quistes from './excel/quistes.csv'
import desarrollo from './excel/desarrollo.csv'
import tratamientos from './excel/tratamientos.csv'



let loadData = () =>{


    let generalArray = deArray(general)
    let alergiasArray = deArray(alergias)
    let enfermedadesArray = deArray(enfermedades)
    let habitosArray = deArray(habitos)
    let tratamientosArray = deArray(tratamientos)
    let generalesArray = [dentofacial,caries,dientes,lengua,pulpa,salivales,estomatitis,gingivitis,luxacion,labiosOtros,maxilaresOtros,tejidosOtros,enciaTranstorno,dientesOtros,quistes,desarrollo]
    
    

    let mainArray = [generalArray,alergiasArray,enfermedadesArray,habitosArray,tratamientosArray,generalesArray]
    
    console.log(mainArray)
    return mainArray
}





/* Function in charge of changing the values into a normal array */
let deArray = (array) => {
    let deArrayed= [].concat.apply([], array);
    return deArrayed
}



export{
    loadData
}