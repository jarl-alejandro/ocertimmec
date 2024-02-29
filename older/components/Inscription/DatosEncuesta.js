const DatosEncuesta = ({ state, setField }) => (
	<div className="table-container">
		<table>
			<tbody>
				<tr>
					<td width="50%" className="table-title">AUTOIDENTIFICACION (Blanco, Mestizo, Indigena, Afrodecendiente)</td>
					<td width="40%">
						<select name="autoidentificacion" value={state} onChange={setField}>
							<option value="">-</option>
							<option value="BLANCO">BLANCO</option>
							<option value="MESTIZO">MESTIZO</option>
							<option value="INDIGENA">INDIGENA</option>
							<option value="AFRODECENDIENTE">AFRODECENDIENTE</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default DatosEncuesta
