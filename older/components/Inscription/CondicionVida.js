const CondicionVida = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
				<tr>
					<td width="50%" className="table-title">USTED O SU FAMILIA POSEE DE UN SEGURO MEDICO</td>
					<td width="40%">
						<select name="seguroMedico" value={state.seguroMedico} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">TIENE HIJOS</td>
					<td width="40%">
						<select name="hijos" value={state.hijos} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">CUANTOS HIJOS TIENE</td>
					<td width="40%">
						<select name="cuantoHijos" value={state.cuantoHijos} onChange={setField}>
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
						<select name="hijosMayorTres" value={state.hijosMayorTres} onChange={setField}>
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
						<select name="estudian" value={state.estudian} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">CUANTAS PERSONAS SON MIEMBRO DE SU HOGAR</td>
					<td width="40%">
						<select name="miembrosHogar" value={state.miembrosHogar} onChange={setField}>
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
						<select name="propiedad" value={state.propiedad} onChange={setField}>
							<option value="">-</option>
							<option value="PROPIA">PROPIA</option>
							<option value="ARRENDADA">ARRENDADA</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">SERVICIOS BASICO A LOS QUE TIENE ACCESO USTED Y SU FAMILIA</td>
					<td width="40%">
						<select name="servicioBasico" value={state.servicioBasico} onChange={setField}>
							<option value="">-</option>
							<option value="AGUA, LUZ, TELÉFONO">AGUA, LUZ, TELÉFONO</option>
							<option value="AGUA, LUZ">AGUA, LUZ</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">TIENE DISCACIDAD</td>
					<td width="40%">
						<select name="discapacidad" value={state.discapacidad} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">TIPO DE DISCAPACIDAD</td>
					<td width="40%">
						<input type="text" name="tipoDiscapacidad" value={state.tipoDiscapacidad} onChange={setField} />
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">DESEA SER PARTE DE SOCIO EMPLEO</td>
					<td width="40%">
						<select name="socioEmpleo" value={state.socioEmpleo} onChange={setField}>
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

export default CondicionVida
