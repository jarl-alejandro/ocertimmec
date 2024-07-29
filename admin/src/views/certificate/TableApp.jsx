import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	Paper,
	CircularProgress,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

import Row from './Row'
import CustomTableCell from '../../components/CustomTableCell'
import TablePagination from '../../components/TablePagination'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
}))

const TableApp = ({ toggleForm }) => {
	const classes = useStyles()
	const certificate = useSelector(state => state.certificate.certificate)
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Certificación</CustomTableCell>
						<CustomTableCell>Inversión</CustomTableCell>
						<CustomTableCell>Nombre</CustomTableCell>
						<CustomTableCell>Email</CustomTableCell>
						<CustomTableCell>Avatar</CustomTableCell>
						<CustomTableCell>Acciones</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{certificate.isLoading && (
						<TableRow>
							<CustomTableCell colSpan={6}>
								<CircularProgress />
							</CustomTableCell>
						</TableRow>
					)}
					{!certificate.isLoading && certificate.payload.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
						<Row
							key={row._id}
							row={row}
							toggleForm={toggleForm}
						/>
					))}
				</TableBody>
				<TablePagination
					colSpan={6}
					count={certificate.payload.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</Paper>
	)
}

export default TableApp
