const CondicionLaboral = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
				<tr>
					<td width="50%" className="table-title">RECIBE SEGURO MEDICO</td>
					<td width="40%">
						<select name="seguroMedio" value={state.seguroMedio} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>

				<tr>
					<td width="50%" className="table-title">RECIBE 13 SUELDO</td>
					<td width="40%">
						<select name="sueldoTrece" value={state.sueldoTrece} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">RECIBE 14 SUELDO</td>
					<td width="40%">
						<select name="sueldoCatorce" value={state.sueldoCatorce} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">Rango de sueldo</td>
					<td width="40%">
						<select name="sueldo" value={state.sueldo} onChange={setField}>
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
					<td width="50%" className="table-title">HA TENIDO USTED ALGUN CAMBIO DE PUESTO O ACENSO EN SU EMPRESA</td>
					<td width="40%">
						<select name="cambioPuesto" value={state.cambioPuesto} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">ESTA SATISFECHO CON EL EMPLO ACTUAL</td>
					<td width="40%">
						<select name="satisfechoEmpleo" value={state.satisfechoEmpleo} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">SE SIENTE AGOTADO, DEBIDO A LA CARGA DE TRABAJO</td>
					<td width="40%">
						<select name="agotadoEmpleo" value={state.agotadoEmpleo} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">SUS COMPAÑEROS RESPETAN SU TRABAJO Y SUS CAPACIDADES</td>
					<td width="40%">
						<select name="respetanTrabajo" value={state.respetanTrabajo} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">SUS JEFES RECONOCEN LA CALIDAD DE SU TRABAJO</td>
					<td width="40%">
						<select name="jefesRecoTrab" value={state.jefesRecoTrab} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">EN SU TRABAJO EXISTEN RIESGOS LABORALES</td>
					<td width="40%">
						<select name="riesgoLaboral" value={state.riesgoLaboral} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
				<tr>
					<td width="50%" className="table-title">DESEARIA CAMBIAR DE TRABAJO</td>
					<td width="40%">
						<select name="deseariaCambiarTrabajo" value={state.deseariaCambiarTrabajo} onChange={setField}>
							<option value="">-</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
		<style jsx>{`
		.table-title{ text-transform: uppercase; }
		`}</style>
	</div>
)

export default CondicionLaboral
