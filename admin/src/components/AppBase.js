 import { connect } from 'react-redux';
import React, {Fragment, useEffect, useState} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Menu from './Menu'
import Drawer from './Drawer'

import {
	OCCERTIMM_AUTH_TOKEN,
	OCCERTIMM_USER_ID,
} from '../constants'
import usersAction from '../actions/users.action';
import studentAction from '../actions/student.action';

const styles = {
	container: {
		marginTop: 75
	}
}


function AppBase (props) {
	const [isDrawer, setDrawer] = useState<Boolean>(false);

	useEffect(() => {
		if (!localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) props.history.push('/');
		else props.fetchMe(localStorage.getItem(OCCERTIMM_USER_ID));

		props.fetchNotify();
	}, []);

	const toggleDrawer = () => {
		setDrawer(!isDrawer);
	}

	return (
		<Fragment>
			<Menu toggleDrawer={toggleDrawer} />
			<Drawer
				isDrawer={isDrawer}
				toggleDrawer={toggleDrawer}
			/>
			<section className={classes.container}>
				{ props.children }
			</section>
		</Fragment>
	)
}

 const mapDispatchToProps = dispatch => ({
	 fetchMe (id) {
		 dispatch(usersAction.fetchMe(id))
	 },
	 fetchNotify () {
		 dispatch(studentAction.fetchNotificaciones())
	 }
 })

export default connect(null, mapDispatchToProps)(withStyles(styles)(AppBase))
