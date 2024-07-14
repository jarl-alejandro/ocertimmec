interface Props {
    register: any;
    errors?: any;
}

export default function LivingConditions(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <tbody>
                <tr>
                    <td width="50%" className="table-title">USTED O SU FAMILIA POSEE DE UN SEGURO MEDICO</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('seguroMedico')}>
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">TIENE HIJOS</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('hijos')}>
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">CUANTOS HIJOS TIENE</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('cuantoHijos')}>
                            <option value="">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">HIJOS MAYORES DE 3 AÑOS Y MENORES DE 18 AÑOS</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('hijosMayorTres')}>
                            <option value="">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">ASISTEN ACTUALMENTE A ALGUNA INSTITUCION EDUCATIVA</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('estudian')}>
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">CUANTAS PERSONAS SON MIEMBRO DE SU HOGAR</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('miembrosHogar')}>
                            <option value="">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">SU VIVIENDA ES PROPIA O ARRIENDA</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('propiedad')}>
                            <option value="">-</option>
                            <option value="PROPIA">PROPIA</option>
                            <option value="ARRENDADA">ARRENDADA</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">SERVICIOS BASICO A LOS QUE TIENE ACCESO USTED Y SU FAMILIA
                    </td>
                    <td width="40%">
                        <select className="form-control" {...props.register('servicioBasico')}>
                            <option value="">-</option>
                            <option value="AGUA, LUZ, TELÉFONO">AGUA, LUZ, TELÉFONO</option>
                            <option value="AGUA, LUZ">AGUA, LUZ</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">TIENE DISCACIDAD</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('discapacidad')}>
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">TIPO DE DISCAPACIDAD</td>
                    <td width="40%">
                        <input className="form-control" type="text"  {...props.register('tipoDiscapacidad')}/>
                    </td>
                </tr>
                <tr>
                    <td width="50%" className="table-title">DESEA SER PARTE DE SOCIO EMPLEO</td>
                    <td width="40%">
                        <select className="form-control" {...props.register('socioEmpleo')}>
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
