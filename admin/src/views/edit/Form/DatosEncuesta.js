import React, { Component } from 'react'
import Select from '../Select'
import MenuItem from '@material-ui/core/MenuItem';

class DatosEncuesta extends Component {

	shouldComponentUpdate (nextProps) {
		if (nextProps.state !== this.props.state) return true
		return false
	}

	render () {
		const { state, setField } = this.props
		return (
			<div className="table-container">
				<table>
					<tbody>
						<tr>
							<td width="50%" className="table-title">AUTOIDENTIFICACION (Blanco, Mestizo, Indigena, Afrodecendiente)</td>
							<td width="40%">
								<Select name="autoidentificacion" value={state} onChange={setField}>
									<MenuItem value="">-</MenuItem>
									<MenuItem value="BLANCO">BLANCO</MenuItem>
									<MenuItem value="MESTIZO">MESTIZO</MenuItem>
									<MenuItem value="INDIGENA">INDIGENA</MenuItem>
									<MenuItem value="AFRODECENDIENTE">AFRODECENDIENTE</MenuItem>
								</Select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}


export default DatosEncuesta
