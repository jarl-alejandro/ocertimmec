import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'

import studentAction from '../../actions/student.action'

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
	},
	buttonFloat: {
		position: 'fixed',
		bottom: 20,
		right: 16
	}
})

class Training extends PureComponent {

	componentDidMount () {
		this.props.fetch()
	}
	render () {
		const { classes } = this.props
		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Estudiantes Reprobados</Typography>
					<TableApp />
				</section>
			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(studentAction.fetchStudentNoCertificado())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Training))
