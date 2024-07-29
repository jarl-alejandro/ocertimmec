import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Calendar from './Calendar'
import Hour from './Hour'

import planningAction from '../../actions/planning.action'

class Planning extends PureComponent {4

	constructor (props) {
		super(props)

		this.handleSaved = this.handleSaved.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	handleSaved () {
		this.props.savedPlanning({
			payload: this.props.payload,
			rel: this.props.selectedId
		})

		this.handleCancel()
	}

	handleCancel () {
		this.props.resetPlanning()
	}

	render () {
		return (
			<Dialog
				open={this.props.isOpen}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Planificación</DialogTitle>
				<DialogContent>
					<Calendar />
					<Hour />
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={this.handleCancel}>Cerrar</Button>
					<Button color="primary" onClick={this.handleSaved}>Guardar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	isOpen: state.planning.isOpen,
	payload: state.planning.payload,
	selectedId: state.planning.selected._id
})

const mapDispatchToProps = dispatch => ({
	toggleModal () {
		dispatch(planningAction.toggleModal({}))
	},
	savedPlanning (payload) {
		dispatch(planningAction.savedPlanning(payload))
	},
	resetPlanning () {
		dispatch(planningAction.resetPlanning())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Planning)
