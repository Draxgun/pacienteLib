import diagnostico  from './excel/DIAGNÓSTICOS GENERALES.csv'





let test = () =>{
    let diagnosticosGenerales = deArray(diagnostico)
    console.log(diagnosticosGenerales)
}




/* Function in charge of changing the values into a normal array */
let deArray = (array) => {
    let deArrayed= [].concat.apply([], array);
    return deArrayed
}



export{
    test
}