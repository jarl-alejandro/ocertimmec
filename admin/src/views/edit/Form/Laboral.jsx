import React from 'react';
import TextField from '@mui/material/TextField';

const Laboral = ({ state, setDepthField }) => {
	return (
		<div className="table-container">
			<table>
				<thead>
				<tr>
					<th width="8%">Desde</th>
					<th width="8%">Hasta</th>
					<th width="25%">Nombre de la empresa</th>
					<th width="20%">Dirección de la empresa</th>
					<th width="10%">Teléfono de la empresa</th>
					<th width="25%">Función que desempeñó</th>
				</tr>
				</thead>
				<tbody>
				{[1, 2, 3].map((num) => (
					<tr key={num}>
						<td>
							<TextField
								variant="filled"
								type="date"
								name={`experiencia${num}-desde`}
								value={state[`experiencia${num}`].desde}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="date"
								name={`experiencia${num}-hasta`}
								value={state[`experiencia${num}`].hasta}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`experiencia${num}-name`}
								value={state[`experiencia${num}`].name}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`experiencia${num}-direction`}
								value={state[`experiencia${num}`].direction}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`experiencia${num}-phone`}
								value={state[`experiencia${num}`].phone}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`experiencia${num}-funcion`}
								value={state[`experiencia${num}`].funcion}
								onChange={setDepthField}
							/>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default Laboral;
