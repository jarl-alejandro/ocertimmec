 import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Menu from './Menu'
import Drawer from './Drawer'
import { withRouter } from 'react-router-dom'

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

class AppBase extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isDrawer: false
		}

		this.toggleDrawer = this.toggleDrawer.bind(this)
	}

	componentWillMount() {
		if (!localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) {
			this.props.history.push('/')
		}
		else {
			this.props.fetchMe(localStorage.getItem(OCCERTIMM_USER_ID))
		}
	}

	componentDidMount () {
		this.props.fetchNotify()
	}

	toggleDrawer () {
		this.setState({ isDrawer: !this.state.isDrawer })
	}

	render () {
		const { classes } = this.props

		return (
			<Fragment>
				<Menu toggleDrawer={this.toggleDrawer} />
				<Drawer
					isDrawer={this.state.isDrawer}
					toggleDrawer={this.toggleDrawer}
				/>
				<section className={classes.container}>
					{ this.props.children }
				</section>
			</Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchMe (id) {
		dispatch(usersAction.fetchMe(id))
	},
	fetchNotify () {
		dispatch(studentAction.fetchNotificaciones())
	}
})

export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(AppBase)))
