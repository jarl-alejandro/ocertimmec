import React, { Component } from 'react'
import AppBase from '../../components/AppBase'
import Form from './Form/Form'
import './style.css'

class EditCertificate extends Component {

	render () {
		return (
			<AppBase>
				<div className="Inscription">
					<section className="Inscription-contained">
					<Form inscripcionId={this.props.match.params.id} />
					</section>
				</div>
			</AppBase>
		)
	}
}

export default EditCertificate
