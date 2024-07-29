import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CloudDownload from '@mui/icons-material/CloudDownload';
import { useDispatch } from 'react-redux';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Detail from './Detail';
import CompleteInscriptionForm from './CompleteInscriptionForm.jsx';
import Certificate from './Certificate';
import './style.css';
import studentAction from '../../actions/student.action';
import { BASE_URL } from '../../config';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		position: 'fixed',
		right: '1rem',
		bottom: 16,
	},
	tableApp: {
		width: '90%',
		margin: '0 auto',
	},
	buttonFloat: {
		position: 'fixed',
		bottom: 20,
		right: 16,
	},
}));

const Student = () => {
	const classes = useStyles();
	const [row, setRow] = useState({});
	const [rowCertificate, setRowCertificate] = useState({});
	const [isCompleteInscription, setCompleteInscription] = useState(false);
	const [isEditRow, setIsEditRow] = useState(false);
	const [isCertificate, setIsCertificate] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(studentAction.fetchStudent())
	}, []);

	const onCompleteInscription = useCallback((row, isEdit = false) => {
		setRow(row);
		setCompleteInscription(true);
		setIsEditRow(isEdit);
	}, []);

	const onCertificate = useCallback((row) => {
		setRowCertificate(row);
		setIsCertificate(true);
	}, []);

	const closeAllForm = useCallback(() => {
		setRow({});
		setCompleteInscription(false);
	}, []);

	const closeCertificate = useCallback(() => {
		setRowCertificate({});
		setIsCertificate(false);
	}, []);

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Estudiantes</Typography>
				<TableApp onCompleteInscription={onCompleteInscription} onCertificate={onCertificate} />
			</section>
			<Certificate
				row={rowCertificate}
				isActive={isCertificate}
				closeCertificate={closeCertificate}
			/>
			{isCompleteInscription && (
				<CompleteInscriptionForm
					row={row}
					isEditRow={isEditRow}
					isActive={isCompleteInscription}
					closeAllForm={closeAllForm}
				/>
			)}
			<Detail />
			<a href={`${BASE_URL}/excel`} target="_blank" className={classes.buttonFloat}>
				<Fab color="primary">
					<CloudDownload />
				</Fab>
			</a>
		</AppBase>
	);
};

export default Student
