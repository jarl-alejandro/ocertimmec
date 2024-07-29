import React, { Component } from 'react'
import TextField from '@mui/material/TextField';

class Laboral extends Component {

	shouldComponentUpdate (nextProps) {

		if (nextProps.state.experiencia1 !== this.props.state.experiencia1) return true
		if (nextProps.state.experiencia2 !== this.props.state.experiencia2) return true
		if (nextProps.state.experiencia3 !== this.props.state.experiencia3) return true

		return false
	}

	render () {
		const { state, setDepthField } = this.props

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
						<tr>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia1-desde"
									value={state.experiencia1.desde}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia1-hasta"
									value={state.experiencia1.hasta}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia1-name"
									value={state.experiencia1.name}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia1-direction"
									value={state.experiencia1.direction}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia1-phone"
									value={state.experiencia1.phone}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia1-funcion"
									value={state.experiencia1.funcion}
									onChange={setDepthField}
								/>
							</td>
						</tr>
		
						<tr>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia2-desde"
									value={state.experiencia2.desde}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia2-hasta"
									value={state.experiencia2.hasta}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia2-name"
									value={state.experiencia2.name}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia2-direction"
									value={state.experiencia2.direction}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia2-phone"
									value={state.experiencia2.phone}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia2-funcion"
									value={state.experiencia2.funcion}
									onChange={setDepthField}
								/>
							</td>
						</tr>
		
						<tr>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia3-desde"
									value={state.experiencia3.desde}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="date"
									name="experiencia3-hasta"
									value={state.experiencia3.hasta}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia3-name"
									value={state.experiencia3.name}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia3-direction"
									value={state.experiencia3.direction}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia3-phone"
									value={state.experiencia3.phone}
									onChange={setDepthField}
								/>
							</td>
							<td>
								<TextField
									variant="filled"
									type="text"
									name="experiencia3-funcion"
									value={state.experiencia3.funcion}
									onChange={setDepthField}
								/>
							</td>
						</tr>
		
					</tbody>
				</table>
			</div>
		)
	}
}


export default Laboral
