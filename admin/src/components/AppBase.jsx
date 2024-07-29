import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate
import Menu from './Menu';
import Drawer from './Drawer';

import { OCCERTIMM_AUTH_TOKEN, OCCERTIMM_USER_ID } from '../constants';
import usersAction from '../actions/users.action';
import studentAction from '../actions/student.action';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	container: {
		marginTop: 75,
	},
});

function AppBase(props) {
	const [isDrawer, setDrawer] = useState(false);
	const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory
	const classes = useStyles();

	useEffect(() => {
		if (!localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) {
			navigate('/'); // Usa navigate en lugar de history.push
		} else {
			props.fetchMe(localStorage.getItem(OCCERTIMM_USER_ID));
		}

		props.fetchNotify();
	}, [navigate, props]);

	const toggleDrawer = () => {
		setDrawer(!isDrawer);
	};

	return (
		<Fragment>
			<Menu toggleDrawer={toggleDrawer} />
			<Drawer
				isDrawer={isDrawer}
				toggleDrawer={toggleDrawer}
			/>
			<section className={classes.container}>
				{props.children}
			</section>
		</Fragment>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchMe(id) {
		dispatch(usersAction.fetchMe(id));
	},
	fetchNotify() {
		dispatch(studentAction.fetchNotificaciones());
	},
});

export default connect(null, mapDispatchToProps)(AppBase);
