import diagnostico  from './DIAGNÓSTICOS GENERALES.csv'





let test = () =>{
    let diagnosticosGenerales = [].concat.apply([], diagnostico);
    console.log(diagnosticosGenerales)
}





export{
    test
}