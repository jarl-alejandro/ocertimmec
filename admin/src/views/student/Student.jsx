import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudDownload from '@mui/icons-material/CloudDownload';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Detail from './Detail';
import AllForm from './AllForm';
import Certificate from './Certificate';

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

const Training = ({ fetch }) => {
	const classes = useStyles();
	const [row, setRow] = useState({});
	const [rowCertificate, setRowCertificate] = useState({});
	const [isAll, setIsAll] = useState(false);
	const [isEditRow, setIsEditRow] = useState(false);
	const [isCertificate, setIsCertificate] = useState(false);

	useEffect(() => {
		fetch();
	}, [fetch]);

	const onAll = useCallback((row, isEdit = false) => {
		setRow(row);
		setIsAll(true);
		setIsEditRow(isEdit);
	}, []);

	const onCertificate = useCallback((row) => {
		setRowCertificate(row);
		setIsCertificate(true);
	}, []);

	const closeAllForm = useCallback(() => {
		setRow({});
		setIsAll(false);
	}, []);

	const closeCertificate = useCallback(() => {
		setRowCertificate({});
		setIsCertificate(false);
	}, []);

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Estudiantes</Typography>
				<TableApp onAll={onAll} onCertificate={onCertificate} />
			</section>
			<Certificate
				row={rowCertificate}
				isActive={isCertificate}
				closeCertificate={closeCertificate}
			/>
			{isAll && (
				<AllForm
					row={row}
					isEditRow={isEditRow}
					isActive={isAll}
					closeAllForm={closeAllForm}
				/>
			)}
			<Detail />
			<a href={`${BASE_URL}/excel`}>
				<Button variant="fab" color="secondary" className={classes.buttonFloat}>
					<CloudDownload />
				</Button>
			</a>
		</AppBase>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetch: () => dispatch(studentAction.fetchStudent()),
});

export default connect(null, mapDispatchToProps)(Training);
