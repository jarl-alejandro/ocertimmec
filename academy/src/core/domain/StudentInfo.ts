
export interface StudentInfo {
  identity: string;
  name: string;
  lastName: string;
  lastInscription?: LastInscription;
}

export interface LastInscription {
  primaria: Education;
  secundaria: Education;
  tecnico: Education;
  tercerNivel: Education;
  cuartoNivel: Education;
  capacitacion1: Training;
  capacitacion2: Training;
  capacitacion3: Training;
  experiencia1: Experience;
  experiencia2: Experience;
  experiencia3: Experience;
  _id: string;
  isCerficateAssiten: boolean;
  certificacion: Certification;
  isActive: boolean;
  pdfRequisitos: string;
  document: string;
  birthdate: string;
  direction: string;
  province: string;
  city: string;
  phone: string;
  celphone: string;
  email: string;
  type: string;
  work: string;
  nameCompany: string;
  activity: string;
  experience: string;
  numberTrainig: string;
  traning: string;
  level: string;
  isVerifiy: boolean;
  isComplete: boolean;
  fechaAplicacion: string;
  fechaAceptacion: string;
  numberAplicacion: number;
  codigoCertificado: string;
  placeCertificate: string;
  certificateId: string;
  trainingId: string | null;
  autoidentificacion: string;
  tipoOcupacion: string;
  contrato: string;
  seguroMedio: string;
  sueldoTrece: string;
  sueldoCatorce: string;
  sueldo: string;
  cambioPuesto: string;
  satisfechoEmpleo: string;
  agotadoEmpleo: string;
  respetanTrabajo: string;
  jefesRecoTrab: string;
  riesgoLaboral: string;
  deseariaCambiarTrabajo: string;
  seguroMedico: string;
  hijos: string;
  cuantoHijos: string;
  hijosMayorTres: string;
  estudian: string;
  miembrosHogar: string;
  propiedad: string;
  servicioBasico: string;
  discapacidad: string;
  tipoDiscapacidad: string;
  socioEmpleo: string;
}

interface Education {
  name: string;
  pais: string;
  ciudad: string;
  titulo: string;
}

interface Training {
  nameCourse: string;
  nameInstitucion: string;
  dateCourse: string;
  hourCourse: string;
}

interface Experience {
  desde: string;
  hasta: string;
  name: string;
  direction: string;
  phone: string;
  funcion: string;
}

interface Certification {
  date: string;
  code: string;
}