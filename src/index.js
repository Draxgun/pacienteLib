import { loadPageStructure } from "./home";
import './style.css';
import {Paciente,Biblioteca} from './paciente'
import{addPatientModalContent} from './patientModal'
import {addPatientTable} from './patientTable'
import {downloadSettings} from './download'




addPatientTable()
loadPageStructure()
addPatientModalContent()
downloadSettings()

