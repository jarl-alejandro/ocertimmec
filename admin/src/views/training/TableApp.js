import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import Row from './Row'
import CustomTableCell from '../../components/CustomTableCell'
import TablePagination from '../../components/TablePagination'

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
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
	}
})

class TableApp extends Component {

	state = {
		page: 0,
		rowsPerPage: 5,
	}

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	render () {
		const { classes, trainings, toggleForm } = this.props
		const { rowsPerPage, page } = this.state;

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<CustomTableCell>Capacitación</CustomTableCell>
							<CustomTableCell>Inversión</CustomTableCell>
							<CustomTableCell>Nombre</CustomTableCell>
							<CustomTableCell>Email</CustomTableCell>
							<CustomTableCell>Avatar</CustomTableCell>
							<CustomTableCell>Aciónes</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ trainings.isLoading && (
							<TableRow>
								<CustomTableCell colSpan='5'>
									<CircularProgress />
								</CustomTableCell>
							</TableRow>
						) }
						{ trainings.payload.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
							<Row key={row._id} row={row} toggleForm={toggleForm} />
						))}
					</TableBody>

					<TablePagination
						colSpan={6}
						count={trainings.payload.length}
						rowsPerPage={this.state.rowsPerPage}
						page={this.state.page}
						onChangePage={this.handleChangePage}
						onChangeRowsPerPage={this.handleChangeRowsPerPage}
					/>

				</Table>
			</Paper>
		)
	}
}

const mapStateToProps = state => ({
	trainings: state.training.training
})

export default connect(mapStateToProps)(withStyles(styles)(TableApp))
