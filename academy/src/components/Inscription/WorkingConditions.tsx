interface Props {
    register: any;
    errors?: any;
}

export default function WorkingConditions(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <tbody>
                <tr>
                    <td width="50%" className="table-title">RECIBE SEGURO MÉDICO</td>
                    <td width="40%">
                        <select className="form-select" name="seguroMedico">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">RECIBE 13 SUELDO</td>
                    <td width="40%">
                        <select className="form-select" name="sueldoTrece">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">RECIBE 14 SUELDO</td>
                    <td width="40%">
                        <select className="form-select" name="sueldoCatorce">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">Rango de sueldo</td>
                    <td width="40%">
                        <select className="form-select" name="sueldo">
                            <option value="">-</option>
                            <option value="$386 - $400">$386 - $400</option>
                            <option value="$401 - $600">$401 - $600</option>
                            <option value="$601 - $800">$601 - $800</option>
                            <option value="$801 - $1.200">$801 - $1.200</option>
                            <option value="$1.200 - $2.000">$1.200 - $2.000</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">HA TENIDO USTED ALGUN CAMBIO DE PUESTO O ASCENSO EN SU
                        EMPRESA
                    </td>
                    <td width="40%">
                        <select className="form-select" name="cambioPuesto">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">ESTÁ SATISFECHO CON EL EMPLEO ACTUAL</td>
                    <td width="40%">
                        <select className="form-select" name="satisfechoEmpleo">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">SE SIENTE AGOTADO, DEBIDO A LA CARGA DE TRABAJO</td>
                    <td width="40%">
                        <select className="form-select" name="agotadoEmpleo">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">SUS COMPAÑEROS RESPETAN SU TRABAJO Y SUS CAPACIDADES</td>
                    <td width="40%">
                        <select className="form-select" name="respetanTrabajo">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">SUS JEFES RECONOCEN LA CALIDAD DE SU TRABAJO</td>
                    <td width="40%">
                        <select className="form-select" name="jefesReconocenTrabajo">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">EN SU TRABAJO EXISTEN RIESGOS LABORALES</td>
                    <td width="40%">
                        <select className="form-select" name="riesgosLaborales">
                            <option value="">-</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="50%" className="table-title">DESEARÍA CAMBIAR DE TRABAJO</td>
                    <td width="40%">
                        <select className="form-select" name="deseaCambiarTrabajo">
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
