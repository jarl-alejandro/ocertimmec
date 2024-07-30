import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import AppBase from '../../components/AppBase';
import Planning from '../../components/Planning/Planning';
import TableApp from './TableApp';
import Form from './Form';

import trainingAction from '../../actions/training.action';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		position: 'fixed !important',
		right: '1rem !important',
		bottom: '16px !important',
	},
	tableApp: {
		width: '90%',
		margin: '0 auto',
	},
}));

const Training = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		dispatch(trainingAction.fetchTraining());
	}, [dispatch]);

	const toggleForm = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Capacitación</Typography>
				<TableApp toggleForm={toggleForm} />
			</section>
			<Fab
				color="primary"
				aria-label="Add"
				className={classes.button}
				onClick={toggleForm}
			>
				<AddIcon />
			</Fab>
			{isOpen && (
				<Form isOpen={isOpen} toggleForm={toggleForm} />
			)}
			<Planning />
		</AppBase>
	);
};

export default Training;
