import React, { Component, createRef } from 'react'
import { withRouter } from 'react-routerReports-dom'


import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Send from '@material-ui/icons/Send'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Https from '@material-ui/icons/Https'

import Snackbar from '../../components/Snackbar'

import {
	OCCERTIMM_USER_ID,
	OCCERTIMM_AUTH_TOKEN
} from '../../constants'
import { BASE_URL } from '../../config'

import './login.css'

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
	marginIcon: {
		marginRight: theme.spacing.unit,
		marginBottom: 15,
	}
})

class Login extends Component {

	constructor (props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			open: false,
			text: ''
		}

		this.email = createRef()
		this.password = createRef()

		this.setField = this.setField.bind(this)
		this.handlLogin = this.handlLogin.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	componentWillMount() {
		if (localStorage.getItem(OCCERTIMM_AUTH_TOKEN))
			this.props.history.push('/estudiantes')
	}

	setField (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleClose () {
		this.setState({ open: false, text: '' })
	}

	async handlLogin (e) {
		if (this.valid()) {
			const response = await fetch(`${BASE_URL}/login`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.dataForm())
			})
			const json = await response.json()

			if (json.success) {
				this.setState({ open: true, text: 'Ha iniciado sesión' })
				this._saveUserData(json.token, json.user._id)
				this.props.history.push('/estudiantes')
			}
			else {
				this.setState({ open: true, text: json.message })
			}
		}

	}

	dataForm() {
		return {
			email: this.state.email.toLowerCase(),
			password: this.state.password,
		}
	}

	_saveUserData(token, id) {
		window.localStorage.setItem(OCCERTIMM_USER_ID, id)
		window.localStorage.setItem(OCCERTIMM_AUTH_TOKEN, token)
	}

	valid() {
		if (!this.state.email) {
			document.getElementById('email').focus()
			this.setState({ open: true, text: 'Ingresa tu email' })
			return false
		}
		else if (!this.state.password) {
			document.getElementById('password').focus()
			this.setState({ open: true, text: 'Ingresa tu contraseña' })
			return false
		}
		else return true
	}


	render () {
		const { classes } = this.props

		return (
			<section className="Login">
				<form className="LoginCard">
					<div className="Login-input">
						<AccountCircle className={classes.marginIcon} />
						<TextField
							label="Email"
							type="email"
							margin="normal"
							name="email"
							onChange={this.setField}
							value={this.state.email}
							fullWidth
							id="email"
						/>
					</div>

					<div className="Login-input">
						<Https className={classes.marginIcon} />
						<TextField
							label="Contraseña"
							type="password"
							margin="normal"
							name="password"
							onChange={this.setField}
							value={this.state.password}
							fullWidth
							id="password"
						/>
					</div>

					<Button
						variant="extendedFab"
						color="primary"
						className={classes.margin}
						 onClick={this.handlLogin}
					>
						<Send className={classes.extendedIcon} />
						Entrar
					</Button>
				</form>
				<Snackbar
					open={this.state.open}
					text={this.state.text}
					handleClose={this.handleClose}
				/>
			</section>
		)
	}
}

export default withRouter(withStyles(styles)(Login))
