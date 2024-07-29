import React from 'react';
import TextField from '@mui/material/TextField';

const Experience = ({ state, setDepthField }) => (
	<div className="table-container">
		<table>
			<thead>
			<tr>
				<th width="15%">Nivel de educación</th>
				<th width="35%">Nombre Institución</th>
				<th width="15%">País</th>
				<th width="15%">Ciudad</th>
				<th width="15%">Título Obtenido</th>
			</tr>
			</thead>
			<tbody>
			{['primaria', 'secundaria', 'tecnico', 'tercerNivel', 'cuartoNivel'].map((nivel) => (
				<tr key={nivel}>
					<td className="table-text">{nivel.charAt(0).toUpperCase() + nivel.slice(1).replace(/([A-Z])/g, ' $1')}</td>
					<td>
						<TextField
							variant="filled"
							type="text"
							name={`${nivel}-name`}
							value={state[nivel].name}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<TextField
							variant="filled"
							type="text"
							name={`${nivel}-pais`}
							value={state[nivel].pais}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<TextField
							variant="filled"
							type="text"
							name={`${nivel}-ciudad`}
							value={state[nivel].ciudad}
							onChange={setDepthField}
						/>
					</td>
					<td>
						<TextField
							variant="filled"
							type="text"
							name={`${nivel}-titulo`}
							value={state[nivel].titulo}
							onChange={setDepthField}
						/>
					</td>
				</tr>
			))}
			</tbody>
		</table>
	</div>
);

export default Experience;
