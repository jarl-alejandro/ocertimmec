import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Drawer from './Drawer';

import { OCCERTIMM_AUTH_TOKEN, OCCERTIMM_USER_ID } from '../constants';
import usersAction from '../actions/users.action';
import studentAction from '../actions/student.action';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
	container: {
		marginTop: 75,
	},
});

function AppBase({ children }) {
	const [isDrawer, setDrawer] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (!localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) {
			navigate('/');
		} else {
			dispatch(usersAction.fetchMe(localStorage.getItem(OCCERTIMM_USER_ID)));
		}

		dispatch(studentAction.fetchNotificaciones());
	}, [navigate, dispatch]);

	const toggleDrawer = () => {
		setDrawer(prev => !prev);
	};

	return (
		<Fragment>
			<Menu toggleDrawer={toggleDrawer} />
			<Drawer
				isDrawer={isDrawer}
				toggleDrawer={toggleDrawer}
			/>
			<section className={classes.container}>
				{children}
			</section>
		</Fragment>
	);
}

export default AppBase;
