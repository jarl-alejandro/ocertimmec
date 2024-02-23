import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import Certificate from './Certificate'

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

	constructor (props) {
		super(props)

		this.state = {
			isActive: false,
			row: {}
		}

		this.toggleCertificate = this.toggleCertificate.bind(this)
	}

	componentDidMount () {
		this.props.fetch()
	}

	toggleCertificate (row) {
		this.setState(state => ({
			isActive: !state.isActive,
			row
		}))
	}

	render () {
		const { classes } = this.props
		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Estudiantes Certificados</Typography>
					<TableApp
						toggleCertificate={this.toggleCertificate}
					/>

					{
						!!this.state.isActive && (
							<Certificate
								isActive={this.state.isActive}
								row={this.state.row}
								toggleCertificate={this.toggleCertificate}
							/>
						)
					}
				</section>
			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(studentAction.fetchStudentCertificado())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Training))
