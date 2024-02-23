import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '../actions/users.action'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from './Snackbar'

const styles = theme => ({
	content: {
		display: 'grid',
		gridGap: '10px',
		minWidth: '20rem',
		maxWidth: '20rem',
		width: '20rem',
	}
})

const initalState = {
	password1: '',
	password2: '',
	open: false,
	text: ''
}

class Password extends Component {

	constructor(props) {
		super(props)

		this.state = initalState

		this.setField = this.setField.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	setField(e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleCancel() {
		this.setState(initalState)
		this.props.onClose()
	}

	handlSaved () {
		if (this.valid()) {
			const object = {
				...this.state,
			}
			this.props.savedPassword(object)
			this.setState({ open: true, text: 'Se cambio con exito' })
			this.handleCancel()
		}
	}

	handleClose() {
		this.setState({ open: false, text: '' })
	}

	valid () {
		if (!this.state.password1) {
			document.getElementById('password1').focus()
			this.setState({ open: true, text: 'Ingresa tu nueva contraseña' })
			return false
		}
		else if (!this.state.password2) {
			document.getElementById('password2').focus()
			this.setState({ open: true, text: 'Repita la contraseña' })
			return false
		}
		else if (this.state.password1 !== this.state.password2) {
			document.getElementById('password2').focus()
			this.setState({ open: true, text: 'No coinciden' })
			return false
		}
		else return true

	}

	render() {
		return (
			<Fragment>
				<Dialog
					open={this.props.isActive}
					onClose={this.handleCancel}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Cambiar contraseña</DialogTitle>
					<DialogContent>
						<div className={this.props.classes.content}>
							<TextField
								label="Escriba su nueva contraseña"
								name="password1"
								id="password1"
								type="password"
								value={this.state.password1}
								onChange={this.setField}
							/>
							<TextField
								label="Repita su contarseña"
								name="password2"
								id="password2"
								type="password"
								value={this.state.password2}
								onChange={this.setField}
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button color="primary" onClick={this.handleCancel}>Cancelar</Button>
						<Button color="primary" onClick={this.handlSaved}>Guardar</Button>
					</DialogActions>
				</Dialog>
				<Snackbar
					open={this.state.open}
					text={this.state.text}
					handleClose={this.handleClose}
				/>
			</Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	savedPassword(payload) {
		dispatch(actions.savedPassword(payload))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Password))
