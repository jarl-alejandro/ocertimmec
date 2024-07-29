import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Form from './Form';

import usersAction from '../../actions/users.action';

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
}));

const Users = ({ fetch }) => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(usersAction.fetchUser());
	}, [fetch]);

	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Usuarios</Typography>
				<TableApp toggleForm={toggleForm} />
			</section>

			<Button
				variant="contained"
				color="secondary"
				aria-label="Add"
				className={classes.button}
				onClick={toggleForm}
			>
				<AddIcon />
			</Button>
			{isOpen && (
				<Form
					isOpen={isOpen}
					toggleForm={toggleForm}
				/>
			)}
		</AppBase>
	);
};

export default Users;
