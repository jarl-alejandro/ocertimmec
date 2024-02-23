import React, { Component } from 'react'
import Select from '../Select'
import MenuItem from '@material-ui/core/MenuItem'

class Ciudadanos extends Component {

	shouldComponentUpdate (nextProps) {

		if (nextProps.state.tipoOcupacion !== this.props.state.tipoOcupacion) return true
		if (nextProps.state.contrato !== this.props.state.contrato) return true

		return false
	}

	render () {
		const { state, setField } = this.props

		return (
			<div className="table-container">
				<table>
					<tbody>
						<tr>
							<td width="55%" className="table-title">TIPO DE OCUPACION (Empleado/obrero del Gobierno/estado - Empleado empresa publica:</td>
							<td width="40%">
								<Select name="tipoOcupacion" value={state.tipoOcupacion} onChange={setField}>
									<MenuItem value="">-</MenuItem>
									<MenuItem value="EMPLEADO PÚBLICO">EMPLEADO PÚBLICO</MenuItem>
									<MenuItem value="EMPLEADO PRIVADO">EMPLEADO PRIVADO</MenuItem>
								</Select>
							</td>
						</tr>
		
						<tr>
							<td width="55%" className="table-title">
								EN LA OCUPACION SELECCIONADA SE ENCUENTRA( CONTRATO O NOMBRAMIENTO):
							</td>
							<td width="40%">
								<Select name="contrato" value={state.contrato} onChange={setField}>
									<MenuItem value="">-</MenuItem>
									<MenuItem value="CONTRATO INDEFINIDIO">CONTRATO INDEFINIDIO</MenuItem>
									<MenuItem value="CONTRATO PROVICIONAL">CONTRATO PROVICIONAL</MenuItem>
									<MenuItem value="NOMBRAMIENTO">NOMBRAMIENTO</MenuItem>
									<MenuItem value="PRESTACIÓN DE SERVICIOS PROFESIONALES">PRESTACIÓN DE SERVICIOS PROFESIONALES.</MenuItem>
								</Select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}


export default Ciudadanos
