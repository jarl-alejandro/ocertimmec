import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import actions from '../../actions/student.action'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	content: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '10px'
	}
}))

const initialState = {
	codeSetec: '',
	dateExpedicion: '',
	noCertificate: false
}

const Certificate = ({ isActive, toggleCertificate, row }) => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const [state, setState] = useState(initialState)

	useEffect(() => {
		if (row) {
			setState({
				codeSetec: row.codeSetec || '',
				dateExpedicion: formatDate(row.dateExpedicion) || '',
				noCertificate: false
			})
		}
	}, [row])

	const formatDate = (date) => {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/')
			date = new Date(date)

			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
			return `${date.getFullYear()}-${month}-${day}`
		}
	}

	const handleChecked = (e) => {
		setState(prevState => ({ ...prevState, noCertificate: e.target.checked }))
	}

	const setField = (e) => {
		const { name, value } = e.target
		setState(prevState => ({ ...prevState, [name]: value }))
	}

	const handleCancel = () => {
		setState(initialState)
		toggleCertificate({})
	}

	const handleSaved = () => {
		let dateExpiracion = new Date(state.dateExpedicion)
		dateExpiracion.setDate(dateExpiracion.getDate() + 5)

		const object = {
			...state,
			id: row._id,
			dateExpiracion
		}

		if (!state.codeSetec.trim()) {
			document.getElementById('codeSetec').focus()
			return
		}
		if (!state.dateExpedicion.trim()) {
			document.getElementById('dateExpedicion').focus()
			return
		}

		dispatch(actions.onCertificado(object))
		handleCancel()
	}

	return (
		<Dialog
			open={isActive}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Registro</DialogTitle>
			<DialogContent className={classes.content}>
				<TextField
					id="codeSetec"
					label="Código de certificación"
					name="codeSetec"
					value={state.codeSetec}
					onChange={setField}
					disabled={state.noCertificate}
				/>
				<TextField
					label="Fecha de certificación"
					id="dateExpedicion"
					name="dateExpedicion"
					type="date"
					value={state.dateExpedicion}
					onChange={setField}
					InputLabelProps={{ shrink: true }}
					disabled={state.noCertificate}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleCancel}>Cancelar</Button>
				<Button color="primary" onClick={handleSaved}>Guardar</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Certificate
