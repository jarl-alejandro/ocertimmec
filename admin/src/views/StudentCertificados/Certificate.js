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
	codeSetec: '',
	dateExpedicion: '',
	noCertificate: false
}

class Certificate extends Component {

	constructor(props) {
		super(props)

		this.state = initalState

		this.handleChecked = this.handleChecked.bind(this)
		this.setField = this.setField.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
	}

	componentDidMount () {
		console.log(this.props.row.dateExpedicion)
		this.setState({
			codeSetec: this.props.row.codeSetec,
			dateExpedicion: this.formatDate(this.props.row.dateExpedicion) || ''
		})

		console.log(this.props)
	}

	formatDate(date) {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/')
			date = new Date(date)

			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
			return `${date.getFullYear()}-${month}-${day}`
		}
	}

	handleChecked(e) {
		this.setState({ noCertificate: e.target.checked })
	}

	setField(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleCancel() {
		this.setState(initalState)
		this.props.toggleCertificate({})
	}

	handlSaved() {
		let dateExpiracion = new Date(this.state.dateExpedicion)
		dateExpiracion.setDate(dateExpiracion.getDate() + 5)

		const object = {
			...this.state,
			id: this.props.row._id,
			dateExpiracion,
		}

		let code = document.getElementById('codeSetec')
		let dateExpedicion = document.getElementById('dateExpedicion')

		if (!this.state.codeSetec.trim()) {
			code.focus()
			return
		}
		if (!this.state.dateExpedicion.trim()) {
			dateExpedicion.focus()
			return
		}

		this.props.finishRegister(object)
		this.handleCancel()
	}

	render() {
		return (
			<Dialog
				open={this.props.isActive}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Registro</DialogTitle>
				<DialogContent className={this.props.classes.content}>
					<TextField
						id="codeSetec"
						label="Codigo de certificacion"
						name="codeSetec"
						value={this.state.codeSetec}
						onChange={this.setField}
						disabled={this.state.noCertificate}
					/>
					<TextField
						label="Fecha de certificacion"
						id="dateExpedicion"
						name="dateExpedicion"
						type="date"
						value={this.state.dateExpedicion}
						onChange={this.setField}
						InputLabelProps={{ shrink: true }}
						disabled={this.state.noCertificate}
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
	finishRegister(payload) {
		dispatch(actions.onCertificado(payload))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Certificate))
