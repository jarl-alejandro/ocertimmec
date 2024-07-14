interface Props {
    register: any;
    errors?: any;
}

export default function Citizens(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <tbody>
                <tr>
                    <td width="55%" className="table-title">TIPO DE OCUPACION (Empleado/obrero del Gobierno/estado -
                        Empleado empresa publica):
                    </td>
                    <td width="40%">
                        <select className="form-select" name="tipoOcupacion">
                            <option value="">-</option>
                            <option value="EMPLEADO PÚBLICO">EMPLEADO PÚBLICO</option>
                            <option value="EMPLEADO PRIVADO">EMPLEADO PRIVADO</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td width="55%" className="table-title">EN LA OCUPACION SELECCIONADA SE ENCUENTRA( CONTRATO O
                        NOMBRAMIENTO):
                    </td>
                    <td width="40%">
                        <select className="form-select" name="contrato">
                            <option value="">-</option>
                            <option value="CONTRATO INDEFINIDO">CONTRATO INDEFINIDO</option>
                            <option value="CONTRATO PROVISIONAL">CONTRATO PROVISIONAL</option>
                            <option value="NOMBRAMIENTO">NOMBRAMIENTO</option>
                            <option value="PRESTACIÓN DE SERVICIOS PROFESIONALES">PRESTACIÓN DE SERVICIOS
                                PROFESIONALES.
                            </option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}
