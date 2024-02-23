import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from './Table'

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3,
		overflowX: 'auto',
		padding: '1rem'
	},
	table: {
		minWidth: 700,
	},
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	},
	title: {
		padding: '.5rem'
	}
})

class TableApp extends Component {

	render () {
		const { classes, student, toggleCertificate } = this.props
		let keys = Object.keys(student.payload)

		return (
			<Fragment>
				{student.isLoading && (
						<div style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
							<CircularProgress />
						</div>
				)}
				{
					keys.map(item => {
						let table = student.payload[item]
						return (
							<Paper className={classes.root} key={item}>
								<Typography variant="h6" className={classes.title}>
									{ table.category.name.toUpperCase() }
								</Typography>
								<Table
									table={table.payload}
									classes={classes}
									toggleCertificate={toggleCertificate}
								/>
							</Paper>
						)
					})
				}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	student: state.student.certificado
})

export default connect(mapStateToProps)(withStyles(styles)(TableApp))
