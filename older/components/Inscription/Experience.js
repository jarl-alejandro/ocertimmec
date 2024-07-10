const Experience = ({ state, setDepthField }) => (
	<div className="table-container">
		<table>
			<thead>
				<tr>
					<th width="15%">Nivel de educació</th>
					<th width="35%">Nombre Institución</th>
					<th width="15%">País</th>
					<th width="15%">Ciudad</th>
					<th width="15%">Título Obtenido</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="table-text">Primaria</td>
					<td>
						<input type="text"
							name='primaria-name'
							value={state.primaria.name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='primaria-pais'
							value={state.primaria.pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='primaria-ciudad'
							value={state.primaria.ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='primaria-titulo'
							value={state.primaria.titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>

				<tr>
					<td className="table-text">Secundaria</td>
					<td>
						<input type="text"
							name='secundaria-name'
							value={state.secundaria.name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='secundaria-pais'
							value={state.secundaria.pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='secundaria-ciudad'
							value={state.secundaria.ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='secundaria-titulo'
							value={state.secundaria.titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>
				<tr>
					<td className="table-text">Técnico, Tecnólogo o artesano</td>
					<td>
						<input type="text"
							name='tecnico-name'
							value={state.tecnico.name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tecnico-pais'
							value={state.tecnico.pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tecnico-ciudad'
							value={state.tecnico.ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tecnico-titulo'
							value={state.tecnico.titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>
				<tr>
					<td className="table-text">Tercer nivel</td>
					<td>
						<input type="text"
							name='tercerNivel-name'
							value={state.tercerNivel.name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tercerNivel-pais'
							value={state.tercerNivel.pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tercerNivel-ciudad'
							value={state.tercerNivel.ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='tercerNivel-titulo'
							value={state.tercerNivel.titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>
				<tr>
					<td className="table-text">Cuarto Nivel</td>
					<td>
						<input type="text"
							name='cuartoNivel-name'
							value={state.cuartoNivel.name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='cuartoNivel-pais'
							value={state.cuartoNivel.pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='cuartoNivel-ciudad'
							value={state.cuartoNivel.ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<input type="text"
							name='cuartoNivel-titulo'
							value={state.cuartoNivel.titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default Experience
