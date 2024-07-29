import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Certificate from './Certificate';
import studentAction from '../../actions/student.action';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(false);
	const [row, setRow] = useState({});

	useEffect(() => {
		dispatch(studentAction.fetchStudentCertificado());
	}, [dispatch]);

	const toggleCertificate = (row) => {
		setIsActive((prevIsActive) => !prevIsActive);
		setRow(row);
	};

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Estudiantes Certificados</Typography>
				<TableApp toggleCertificate={toggleCertificate} />
				{isActive && (
					<Certificate
						isActive={isActive}
						row={row}
						toggleCertificate={toggleCertificate}
					/>
				)}
			</section>
		</AppBase>
	);
};

export default Student;
