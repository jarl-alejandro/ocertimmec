import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/message.action'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button'

const styles = theme => ({
	content: {
		width: '35rem',
		minWidth: '35rem',
		maxWidth: '35rem',
	},
	flex: {
		display: 'flex'
	},
	title: {
		paddingRight: '10px',
		width: '15%',
		fontWeight: 'bold'
	}
})


class MessageModal extends Component {

	render () {
		return (
			<Dialog
				open={this.props.isMessage}
				onClose={this.props.closeMessage}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Mensaje</DialogTitle>
				<DialogContent>
					<section className={this.props.classes.content}>
						<div className={this.props.classes.flex}>
							<Typography variant="subtitle1" className={this.props.classes.title}>Nombre: </Typography>
							<Typography variant="subtitle1">{ this.props.selected.name }</Typography>
						</div>
						<div className={this.props.classes.flex}>
							<Typography variant="subtitle1" className={this.props.classes.title}>E-mail: </Typography>
							<Typography variant="subtitle1">{this.props.selected.email}</Typography>
						</div>
						<div className={this.props.classes.flex}>
							<Typography variant="subtitle1" className={this.props.classes.title}>Asunto: </Typography>
							<Typography variant="subtitle1">{this.props.selected.subject}</Typography>
						</div>
						<div>
							<Typography variant="subtitle1" className={this.props.classes.title}>Mensaje: </Typography>
							<Typography variant="body2">{this.props.selected.message}</Typography>
						</div>
					</section>

				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={this.props.closeMessage}>Cerrar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	isMessage: state.messages.isMessage,
	selected: state.messages.selected
})

const mapDispatchToProps = dispatch => ({
	closeMessage () {
		dispatch(actions.selected({}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MessageModal))
