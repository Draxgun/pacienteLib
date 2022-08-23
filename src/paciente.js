class Paciente {

    constructor(name,age,sex,visits,general,especifico,tratamiento,farmacoterapia,enfermedades,alergias,habitos) {
      this.name = name;
      this.age = age;
      this.sex = sex ;
      this.general = general;
      this.visits = visits;
      this.especifico = especifico;
      this.tratamiento = tratamiento;
      this.farmacoterapia = farmacoterapia;
      this.enfermedades = enfermedades;
      this.alergias = alergias;
      this.habitos = habitos;
      
    }
    
}

export{
  Paciente
}