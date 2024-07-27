interface Course {
  id: string;
  type: string;
}

export interface InscriptionCommand {
  name: string;
  lastName: string;
  document: string;
  birthdate: string;
  direction: string;
  province: string;
  city: string;
  celphone: string;
  phone: string;
  email: string;
  requirementsPDF: FileList | null;
  courses?: Course[];
  //CurrentEducation
  primaryInstitutionName: string;
  primaryCountry: string;
  primaryCity: string;
  primaryDegree: string;
  secondaryInstitutionName: string;
  secondaryCountry: string;
  secondaryCity: string;
  secondaryDegree: string;
  technicalInstitutionName: string;
  technicalCountry: string;
  technicalCity: string;
  technicalDegree: string;
  tertiaryInstitutionName: string;
  tertiaryCountry: string;
  tertiaryCity: string;
  tertiaryDegree: string;
  quaternaryInstitutionName: string;
  quaternaryCountry: string;
  quaternaryCity: string;
  quaternaryDegree: string;

  // Training
  course1NameCourse: string;
  course1InstitutionName: string;
  course1DateCourse: Date | string;
  course1HourCourse: string;
  course2NameCourse: string;
  course2InstitutionName: string;
  course2DateCourse: Date | string;
  course2HourCourse: string;
  course3NameCourse: string;
  course3InstitutionName: string;
  course3DateCourse: Date | string;
  course3HourCourse: string;

  // WorkExperience
  experience1From: Date | string;
  experience1To: Date | string;
  experience1CompanyName: string;
  experience1CompanyAddress: string;
  experience1CompanyPhone: string;
  experience1JobFunction: string;
  experience2From: Date | string;
  experience2To: Date | string;
  experience2CompanyName: string;
  experience2CompanyAddress: string;
  experience2CompanyPhone: string;
  experience2JobFunction: string;
  experience3From: Date | string;
  experience3To: Date | string;
  experience3CompanyName: string;
  experience3CompanyAddress: string;
  experience3CompanyPhone: string;
  experience3JobFunction: string;

  // PersonalData
  experience3Autoidentificacion: string;

  // Citizens
  tipoOcupacion: string;
  contrato: string;

  // WorkingConditions
  workingConditionsSeguroMedico: string;
  sueldoTrece: string;
  sueldoCatorce: string;
  sueldo: string;
  cambioPuesto: string;
  satisfechoEmpleo: string;
  agotadoEmpleo: string;
  respetanTrabajo: string;
  jefesReconocenTrabajo: string;
  riesgosLaborales: string;
  deseaCambiarTrabajo: string;

  // LivingConditions
  livingConditionsSeguroMedico: string;
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
