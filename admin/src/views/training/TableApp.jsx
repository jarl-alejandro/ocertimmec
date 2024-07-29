import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Row from './Row';
import CustomTableCell from '../../components/CustomTableCell';
import TablePagination from '../../components/TablePagination';

const useStyles = makeStyles((theme) => ({
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
}));

const TableApp = ({ trainings, toggleForm }) => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

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
						<CustomTableCell>Acciones</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{trainings.isLoading && (
						<TableRow>
							<CustomTableCell colSpan={6}>
								<CircularProgress />
							</CustomTableCell>
						</TableRow>
					)}
					{trainings.payload
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row) => (
							<Row key={row._id} row={row} toggleForm={toggleForm} />
						))}
				</TableBody>
				<TablePagination
					colSpan={6}
					count={trainings.payload.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</Paper>
	);
};

const mapStateToProps = (state) => ({
	trainings: state.training.training,
});

export default connect(mapStateToProps)(TableApp);
