import React from 'react';
import { connect } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import DateFormat from '../../components/DateFormat';

import studentAction from '../../actions/student.action';

const Form = ({ isToggleModal, toggleModal, selected, classes }) => (
	<Dialog
		open={isToggleModal}
		onClose={toggleModal}
		aria-labelledby="form-dialog-title"
	>
		<DialogTitle id="form-dialog-title">Detalle</DialogTitle>

		<DialogContent>
			<Typography className={classes.typo}>Nº de cedula: <span>{selected.document}</span></Typography>
			<Typography className={classes.typo}>Nombres: <span>{selected.name}</span></Typography>
			<Typography className={classes.typo}>Apellidos: <span>{selected.lastName}</span></Typography>
			<Typography className={classes.typo}>Fecha de nacimiento: <DateFormat date={selected.birthdate} /></Typography>
			<Typography className={classes.typo}>E-mail: <span>{selected.email}</span></Typography>
			<Typography className={classes.typo}>Celular/Telefono: <span>{selected.phone}</span></Typography>
			<Typography className={classes.typo}>Dirección: <span>{selected.direction}</span></Typography>
			<Typography className={classes.typo}>Provincia: <span>{selected.province}</span></Typography>
			<Typography className={classes.typo}>Ciudad: <span>{selected.city}</span></Typography>

			{(selected.type === 'certificate' || selected.type === 'training-certificate') && (
				<>
					<Divider />
					<Typography className={classes.typo}>Trabaja: <span>{selected.work}</span></Typography>
					{selected.work === 'si' && (
						<>
							<Typography className={classes.typo}>Nombre de la empresa: <span>{selected.nameCompany}</span></Typography>
							<Typography className={classes.typo}>Actividad que desarrolla en la empresa: <span>{selected.activity}</span></Typography>
							<Typography className={classes.typo}>Experiencia a fin al perfil a certificarse: <span>{selected.experience}</span></Typography>
							<Typography className={classes.typo}>A recibido capacitación a fin al perfil a certificarse: <span>{selected.traning}</span></Typography>
							{selected.traning === 'si' && (
								<Typography className={classes.typo}>Horas de capacitación: <span>{selected.numberTrainig}</span></Typography>
							)}
							<Typography className={classes.typo}>Nivel de instrucción: <span>{selected.level}</span></Typography>
						</>
					)}
				</>
			)}
		</DialogContent>

		<DialogActions>
			<Button color="primary" onClick={toggleModal}>Cancelar</Button>
		</DialogActions>
	</Dialog>
);

const mapStateToProps = (state) => ({
	selected: state.student.selected,
	isToggleModal: state.student.isToggleModal,
});

const mapDispatchToProps = (dispatch) => ({
	toggleModal() {
		dispatch(studentAction.toggleModal({}));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
