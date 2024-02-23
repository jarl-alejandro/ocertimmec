import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AddCircle from '@material-ui/icons/AddCircle'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import planningAction from '../../actions/planning.action'

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	around: {
		display: 'flex',
		justifyContent: 'space-between'
	}
})

class Hour extends PureComponent {

	constructor (props) {
		super(props)

		this.state = {
			hours: {
				'hour-1': ''
			}
		}

		this.setField = this.setField.bind(this)
		this.addHour = this.addHour.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSaved = this.handleSaved.bind(this)
	}

	setField (e, name) {
		const { value } = e.target

		this.setState(state => ({
			hours: Object.assign({}, state.hours, {
				[name]: !!value ? value : ''
			})
		}))

	}

	addHour () {
		let len = Object.keys(this.state.hours).length + 1
		let code = `hour-${len}`

		this.setState(state => ({
			hours: Object.assign({}, state.hours, {
				[code]: ''
			})
		}))
	}

	handleClose () {
		this.setState({
			hours: { 'hour-1': '' }
		})
		this.props.toggleHour()
	}

	handleSaved () {
		this.props.addedHours(this.state.hours)
		this.handleClose()
	}

	render () {
		const { classes } = this.props

		return (
			<Dialog
				open={this.props.isHour}
				onClose={this.props.toggleHour}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title" className={classes.around}>
					Hora
					<IconButton onClick={this.addHour}><AddCircle /></IconButton>
				</DialogTitle>
				<DialogContent>
					{ Object.keys(this.state.hours).map(item => (
						<TextField
							key={item}
							value={this.state.hours[item]}
							onChange={e => this.setField(e, item)}
							id="time"
							label="Hora de inicio"
							type="time"
							className={classes.textField}
							InputLabelProps={{ shrink: true }}
						/>
					)) }
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={this.handleClose}>Cerrar</Button>
					<Button color="primary" onClick={this.handleSaved}>Guardar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	isHour: state.planning.isHour
})

const mapDispatchToProps = dispatch => ({
	toggleHour () {
		dispatch(planningAction.toggleHour())
	},
	addedHours (payload) {
		dispatch(planningAction.addHour(payload))
	}
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Hour))
