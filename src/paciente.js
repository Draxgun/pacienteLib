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

class Expediente {
  constructor(cita,paciente){
    this.cita = cita
    this.paciente = paciente
  }
}

class Cita {
  constructor(paciente,fecha,notas){
    this.paciente = paciente
    this.fecha = fecha
    this.notas = notas
  }
}

class Biblioteca {
  constructor(pacientes){
    this.pacientes = pacientes
  }
}

export{
  Paciente,
  Expediente,
  Cita,
  Biblioteca
}