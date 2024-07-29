import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import DateFormat from '../../components/DateFormat'

import studentAction from '../../actions/student.action'

const styles = theme => ({
	typo: {
		marginBottom: 10,
		marginTop: 10,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: '500',
		'& > span': {
			fontSize: 15,
			fontWeight: 'normal'
		}
	}
})

class Form extends PureComponent {

	render  () {
		const { classes, selected } = this.props

		return (
			<Dialog
				open={this.props.isToggleModal}
				onClose={this.props.toggleModal}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Detalle</DialogTitle>

				<DialogContent>
					<Typography className={classes.typo}>Nº de cedula: <span>{ selected.document }</span></Typography>
					<Typography className={classes.typo}>Nombres: <span>{ selected.name }</span></Typography>
					<Typography className={classes.typo}>Apellidos: <span>{ selected.lastName }</span></Typography>
					<Typography className={classes.typo}>Fecha de nacimiento: <DateFormat date={ selected.birthdate } /> </Typography>
					<Typography className={classes.typo}>Apellidos: <span>{ selected.lastName }</span></Typography>
					<Typography className={classes.typo}>E-mail: <span>{ selected.email }</span></Typography>

					<Typography className={classes.typo}>Celular/Telefono: <span>{ selected.phone }</span></Typography>
					<Typography className={classes.typo}>Dirección: <span>{ selected.direction }</span></Typography>
					<Typography className={classes.typo}>Provincia: <span>{ selected.province }</span></Typography>
					<Typography className={classes.typo}>Ciudad: <span>{ selected.city }</span></Typography>

					{ (selected.type === 'certificate' || selected.type === 'training-certificate') && (
						<Fragment>
							<Divider />
							<Typography className={classes.typo}>Trabaja: <span>{ selected.work }</span></Typography>

							{ selected.work === 'si' && (
								<Fragment>
									<Typography className={classes.typo}>Nombre de la empresa: <span>{ selected.nameCompany }</span></Typography>
									<Typography className={classes.typo}>Actividad que desarrolla en la empresa: <span>{ selected.activity }</span></Typography>
									<Typography className={classes.typo}>Experiencia a fin al perfil a certificarse: <span>{ selected.experience }</span></Typography>
									<Typography className={classes.typo}>A recibido capacitación a fin al perfil a certificarse: <span>{ selected.traning }</span></Typography>

									{ selected.traning === 'si' && (
										<Fragment>
											<Typography className={classes.typo}>Horas de capacitación: <span>{ selected.numberTrainig }</span></Typography>
										</Fragment>
									)}

									<Typography className={classes.typo}>Nivel de instrucción: <span>{ selected.level }</span></Typography>
								</Fragment>
							) }
						</Fragment>
					)}

				</DialogContent>

				<DialogActions>
					<Button color="primary" onClick={this.props.toggleModal}>Cancelar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	selected: state.student.selected,
	isToggleModal: state.student.isToggleModal,
})

const mapDispatchToProps = dispatch => ({
	toggleModal() {
		dispatch(studentAction.toggleModal({}))
	}
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form))
