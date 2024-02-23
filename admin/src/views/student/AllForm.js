import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/student.action'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
	content: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '10px'
	}
})

const initalState = {
	code: '',
	placeCertificate: '',
	date: '',
	hour: '',
	nota: '',
}

class AllForm extends Component {

	constructor (props) {
		super(props)

		this.state = initalState

		this.handleChecked = this.handleChecked.bind(this)
		this.setField = this.setField.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
	}

	componentDidMount () {
		if (this.props.isEditRow) {
			console.log(this.props.row)

			this.setState({
				code: this.props.row.codigoCertificado,
				placeCertificate: this.props.row.placeCertificate,
				date: this.formatDate(this.props.row.dateCertificate),
				hour: this.props.row.hourCertificate,
				nota: this.props.row.notaCertificate,
			})

		}
	}


	formatDate (date) {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/')
			date = new Date(date)
	
			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
			return `${date.getFullYear()}-${month}-${day}`
		}
	}

	handleChecked (e) {
		this.setState({ isChecked: e.target.checked })
	}

	setField (e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleCancel () {
		this.setState(initalState)
		this.props.closeAllForm()
	}

	handlSaved () {
		const object = {
			...this.state,
			id: this.props.row._id
		}
		this.props.finishRegister(object)
		this.handleCancel()
	}

	render () {
		return (
			<Dialog
				open={this.props.isActive}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Registro</DialogTitle>
				<DialogContent className={this.props.classes.content}>
					<TextField
						label="Codigo de certificacion"
						name="code"
						value={this.state.code}
						onChange={this.setField}
					/>
					<TextField
						label="Lugar de la certificacion"
						name="placeCertificate"
						value={this.state.placeCertificate}
						onChange={this.setField}
					/>
					<TextField
						label="Fecha de certificacion"
						name="date"
						type="date"
						value={this.state.date}
						onChange={this.setField}
						InputLabelProps={{ shrink: true }}
					/>
					<TextField
						label="Hora de certificacion"
						name="hour"
						type="time"
						value={this.state.hour}
						onChange={this.setField}
						InputLabelProps={{ shrink: true }}
					/>
					<TextField
						label="Nota de la certificacion"
						name="nota"
						type="number"
						value={this.state.nota}
						onChange={this.setField}
						InputLabelProps={{ shrink: true }}
					/>
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={this.handleCancel}>Cancelar</Button>
					<Button color="primary" onClick={this.handlSaved}>Guardar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	finishRegister (payload) {
		dispatch(actions.finishRegister(payload))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(AllForm))
