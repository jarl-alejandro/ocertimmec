import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import Item from './Item'
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

	render() {
		const { classes, messages, isLoading, search } = this.props
		const { rowsPerPage, page } = this.state;

		return (
			<Paper className={classes.root}>
				<p>{search}</p>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<CustomTableCell>Nombres</CustomTableCell>
							<CustomTableCell>E-mail</CustomTableCell>
							<CustomTableCell>Asunto</CustomTableCell>
							<CustomTableCell>Aciónes</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ isLoading && (
							<TableRow>
								<CustomTableCell colSpan='4'>
									<CircularProgress />
								</CustomTableCell>
							</TableRow>
						) }
						{ messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
							<Item key={row._id} row={row} />
						))}
					</TableBody>

					<TablePagination
						colSpan={6}
						count={messages.length}
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
	messages: state.messages.payload,
	isLoading: state.messages.isLoading,
	search: state.search.value
})

export default connect(mapStateToProps)(withStyles(styles)(TableApp))
