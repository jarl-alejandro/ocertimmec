const Ciudadanos = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
				<tr>
					<td width="55%" className="table-title">TIPO DE OCUPACION (Empleado/obrero del Gobierno/estado - Empleado empresa publica:</td>
					<td width="40%">
						<select name="tipoOcupacion" value={state.tipoOcupacion} onChange={setField}>
							<option value="">-</option>
							<option value="EMPLEADO PÚBLICO">EMPLEADO PÚBLICO</option>
							<option value="EMPLEADO PRIVADO">EMPLEADO PRIVADO</option>
						</select>
					</td>
				</tr>

				<tr>
					<td width="55%" className="table-title">
						EN LA OCUPACION SELECCIONADA SE ENCUENTRA( CONTRATO O NOMBRAMIENTO):
					</td>
					<td width="40%">
						<select name="contrato" value={state.contrato} onChange={setField}>
							<option value="">-</option>
							<option value="CONTRATO INDEFINIDIO">CONTRATO INDEFINIDIO</option>
							<option value="CONTRATO PROVICIONAL">CONTRATO PROVICIONAL</option>
							<option value="NOMBRAMIENTO">NOMBRAMIENTO</option>
							<option value="PRESTACIÓN DE SERVICIOS PROFESIONALES">PRESTACIÓN DE SERVICIOS PROFESIONALES.</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default Ciudadanos
