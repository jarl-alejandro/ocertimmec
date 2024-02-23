import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class Studiant extends Component {

	shouldComponentUpdate (nextProps) {
		if (nextProps.state.name !== this.props.state.name) return true
		if (nextProps.state.lastName !== this.props.state.lastName) return true
		if (nextProps.state.document !== this.props.state.document) return true
		if (nextProps.state.birthdate !== this.props.state.birthdate) return true
		if (nextProps.state.direction !== this.props.state.direction) return true
		if (nextProps.state.province !== this.props.state.province) return true
		if (nextProps.state.city !== this.props.state.city) return true
		if (nextProps.state.phone !== this.props.state.phone) return true
		if (nextProps.state.celphone !== this.props.state.celphone) return true
		if (nextProps.state.email !== this.props.state.email) return true

		return false
	}

	render () {
		const { state, setField} = this.props

		return (
			<div className="table-container">
				<table>
					<tbody>
						<tr>
							<td width="30%" className="table-title">Nombres completo:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='name'
									value={state.name}
									onChange={setField}
								/>
							</td>
						</tr>
						<tr>
							<td width="30%" className="table-title">Apellidos completo:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='lastName'
									value={state.lastName}
									onChange={setField}
								/>
							</td>
						</tr>
						<tr>
							<td width="30%" className="table-title">N° de Cédula:</td>
							<td width="70%">
								<TextField
									id="document"
									variant="filled"
									type="text"
									name='document'
									value={state.document}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Fecha de nacimiento d/m/año:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="date"
									name='birthdate'
									value={state.birthdate}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Dirección de domicilio:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='direction'
									value={state.direction}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Provincia:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='province'
									value={state.province}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Ciudad (Parroquia):</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='city'
									value={state.city}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Teléfono celular:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='celphone'
									value={state.celphone}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Teléfono convencional:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='phone'
									value={state.phone}
									onChange={setField}
								/>
							</td>
						</tr>
		
						<tr>
							<td width="30%" className="table-title">Correo electrónico:</td>
							<td width="70%">
								<TextField
									variant="filled"
									type="text"
									name='email'
									value={state.email}
									onChange={setField}
								/>
							</td>
						</tr>
		
					</tbody>
				</table>
			</div>
		)
	}
}

export default Studiant