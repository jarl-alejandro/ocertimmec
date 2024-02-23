import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import Form from './Form'
import Planning from '../../components/Planning'

import certificateAction from '../../actions/certificate.action'

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

class Certificate extends PureComponent {

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
		this.setState(state => ({
			isOpen: !state.isOpen
		}))
	}

	render () {
		const { classes } = this.props
		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Certificación</Typography>
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
				<Planning />
			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(certificateAction.fetchCertificate())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Certificate))
