import React from 'react';
import TextField from '@mui/material/TextField';

const Training = ({ state, setDepthField }) => {
	return (
		<div className="table-container">
			<table>
				<thead>
				<tr>
					<th width="15%">Nombre del curso</th>
					<th width="35%">Nombre de la institución que impartió el curso</th>
					<th width="15%">Fechas del curso</th>
					<th width="15%">Horas del Curso</th>
				</tr>
				</thead>
				<tbody>
				{[1, 2, 3].map((i) => (
					<tr key={i}>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`capacitacion${i}-nameCourse`}
								value={state[`capacitacion${i}`]?.nameCourse || ''}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="text"
								name={`capacitacion${i}-nameInstitucion`}
								value={state[`capacitacion${i}`]?.nameInstitucion || ''}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="date"
								name={`capacitacion${i}-dateCourse`}
								value={state[`capacitacion${i}`]?.dateCourse || ''}
								onChange={setDepthField}
							/>
						</td>
						<td>
							<TextField
								variant="filled"
								type="number"
								name={`capacitacion${i}-hourCourse`}
								value={state[`capacitacion${i}`]?.hourCourse || ''}
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

export default Training;
