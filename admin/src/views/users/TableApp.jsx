import React, { useState } from 'react'
import { connect } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'
import Item from './Item'
import CustomTableCell from '../../components/CustomTableCell'
import TablePagination from '../../components/TablePagination'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
}))

function TableApp({ users, toggleForm, search }) {
	const classes = useStyles()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0) // Reset to first page when rows per page changes
	}

	return (
		<Paper className={classes.root}>
			<p>{search}</p>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Nombres</CustomTableCell>
						<CustomTableCell>E-mail</CustomTableCell>
						<CustomTableCell>Rol</CustomTableCell>
						<CustomTableCell>Foto</CustomTableCell>
						<CustomTableCell>Acciones</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.isLoading && (
						<TableRow>
							<CustomTableCell colSpan='5'>
								<CircularProgress />
							</CustomTableCell>
						</TableRow>
					)}
					{users.payload.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
						<Item key={row._id} row={row} toggleForm={toggleForm} />
					))}
				</TableBody>
				<TablePagination
					colSpan={6}
					count={users.payload.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</Paper>
	)
}

const mapStateToProps = state => ({
	users: state.users.users,
	search: state.search.value
})

export default connect(mapStateToProps)(TableApp)
