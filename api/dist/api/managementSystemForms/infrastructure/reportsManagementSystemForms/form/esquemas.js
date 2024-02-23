"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esquema = [
    { code: 'ATS-PRL-201703', name: 'PREVENCIÓN EN RIESGOS LABORALES' },
    { code: 'ATS-ASI-201704', name: 'ASISTENCIA EN SEGURIDAD INDUSTRIAL' },
    { code: 'E-ADMABP-201709', name: 'ACTIVIDADES DE DOCENCIA EN METODOLOGIA DE APRENDIZAJE BASADO EN PROYECTOS ABP' },
    { code: 'AC-AAPRYD', name: 'ACTIVIDADES DE APOYO PARA LA PROMOSION EN RECREACION Y DEPORTES' },
    { code: 'ATS-GEV-201707', name: 'GESTION ESPECIALIZADA EN VENTAS' },
    { code: 'ATS-CYMRN-201709', name: 'CONSERVACION Y MANEJO DE RECURSOS NATURALES' },
    { code: 'VACP-MEV-201703', name: 'MANTENIMIENTO ELECTROMECANICO DE VEHICULOS' },
    { code: 'VACP-MA-201703', name: 'MECATRONICA AUTOMOTRIZ' },
    { code: 'CYVP-ASE-201709', name: 'ASISTENCIA EN COMERCIO EXTERIOR' },
    { code: 'VASP-RMMC-201703', name: 'REPERACION, MONTAJE Y MODIFICACION DE CARROCERIAS' },
    { code: 'TYA-V-201607', name: 'VENTAS' },
    { code: 'SF-AC-201707', name: 'ASISTENCIA DE CONTABILIDAD' },
    { code: 'ATS-GA-201707', name: 'GESTION ADMINISTRATIVA' },
    { code: 'AC-ADE-18-10-2017', name: 'ACTIVIDADES PARA DEPORTES DE EQUIPOS' },
    { code: 'ATS-AD-201906', name: 'ARBITRAJE DEPORTIVO EN FÚTBOL' },
    { code: 'ATS-ADI-201807-001', name: 'ASESORÍA DE IMAGEN' },
    { code: 'AC-C-201810-001', name: 'COSMETOLOGÍA' },
    { code: 'AC-CS-201810-001', name: 'COSMIATRÍA' },
    { code: 'ATS-CDPAM-201902', name: 'CUIDADO DE PERSONAS ADULTAS MAYORES' },
    { code: 'ATS-M-201805-001', name: 'MAQUILLAJE' },
    { code: 'ATS-PRL-201901-001', name: 'PREVENCIÓN DE RIESGOS LABORALES: CONSTRUCCIÓN Y OBRAS PÚBLICAS' },
    { code: 'ATS-PRL-201901-002', name: 'PREVENCIÓN DE RIESGOS LABORALES: ENERGÍA ELÉCTRICA' },
    { code: 'E–AEEHYLCDPCD–201805–001', name: 'ATENCIÓN EN EL HOGAR Y LA COMUNIDAD DE PERSONAS CON DISCAPACIDAD' },
];
function findEsquema(code) {
    let find = esquema.find(item => item.code === code);
    if (find)
        return find.name;
    return '';
}
exports.default = findEsquema;
