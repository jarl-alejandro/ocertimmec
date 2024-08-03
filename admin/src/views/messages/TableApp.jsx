import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import Item from './Item';
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

const TableApp = () => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(100);

	const messages = useSelector(state => state.messages.payload);
	const isLoading = useSelector(state => state.messages.isLoading);
	const search = useSelector(state => state.search.value);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<p>{search}</p>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Nombres</CustomTableCell>
						<CustomTableCell>E-mail</CustomTableCell>
						<CustomTableCell>Asunto</CustomTableCell>
						<CustomTableCell>Acciones</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{isLoading && (
						<TableRow>
							<CustomTableCell colSpan='4'>
								<CircularProgress />
							</CustomTableCell>
						</TableRow>
					)}
					{messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
						<Item key={row._id} row={row} />
					))}
				</TableBody>
				<TablePagination
					colSpan={4}
					count={messages.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</Paper>
	);
};

export default TableApp;
