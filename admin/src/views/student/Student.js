import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CloudDownload from '@material-ui/icons/CloudDownload'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import Detail from './Detail'
import AllForm from './AllForm'
import Certificate from './Certificate'

import studentAction from '../../actions/student.action'
import { BASE_URL } from '../../config'


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
			row: {},
			rowCertificate: {},
			isAll: false,
			isEditRow: false,
			isCertificate: false
		}

		this.onAll = this.onAll.bind(this)
		this.onCertificate = this.onCertificate.bind(this)
		this.closeAllForm = this.closeAllForm.bind(this)
		this.closeCertificate = this.closeCertificate.bind(this)
	}

	componentDidMount () {
		this.props.fetch()
	}

	onAll (row, isEdit = false) {
		this.setState({ row, isAll: true, isEditRow: isEdit })
	}

	onCertificate(row) {
		this.setState({ rowCertificate: row, isCertificate: true })
	}

	closeAllForm () {
		this.setState({ row:{}, isAll: false })
	}

	closeCertificate () {
		this.setState({ rowCertificate: {}, isCertificate: false })
	}

	render () {
		const { classes } = this.props
		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Estudiantes</Typography>
					<TableApp
						onAll={this.onAll}
						onCertificate={this.onCertificate}
					/>
				</section>
				<Certificate
					row={this.state.rowCertificate}
					isActive={this.state.isCertificate}
					closeCertificate={this.closeCertificate}
				/>
				{ !!this.state.isAll && (
					<AllForm
						row={this.state.row}
						isEditRow={this.state.isEditRow}
						isActive={this.state.isAll}
						closeAllForm={this.closeAllForm}
					/>
				) }

				<Detail />
				<a href={`${BASE_URL}/excel`}>
					<Button variant="fab" color="secondary" className={classes.buttonFloat}>
						<CloudDownload />
					</Button>
				</a>

			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(studentAction.fetchStudent())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Training))
