import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import Form from './Form'

import usersAction from '../../actions/users.action'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		position: 'fixed',
		right: '1rem',
		bottom: 16
	},
	tableApp: {
		width: '90%',
		margin: '0 auto'
	}
})

class Users extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isOpen: false
		}

		this.toggleForm = this.toggleForm.bind(this)
	}

	componentDidMount () {
		this.props.fetch()
	}

	toggleForm () {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render () {
		const { classes } = this.props

		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Usuarios</Typography>
					<TableApp
						toggleForm={this.toggleForm}
					/>
				</section>

				<Button
					variant="fab"
					color="secondary"
					aria-label="Add"
					className={classes.button}
					onClick={this.toggleForm}
				>
					<AddIcon />
				</Button>
				{ !!this.state.isOpen && (
					<Form
						isOpen={this.state.isOpen}
						toggleForm={this.toggleForm}
					/>
				)}
			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(usersAction.fetchUser())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Users))
