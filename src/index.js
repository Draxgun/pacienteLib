import { loadPageStructure } from "./home";
import './style.css';
import {Paciente,Biblioteca} from './paciente'
import{addPatientModalContent} from './patientModal'


global.patientDataBase = new Biblioteca([])


loadPageStructure()
addPatientModalContent()

