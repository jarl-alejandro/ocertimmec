import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Row from './Row';
import CustomTableCell from '../../components/CustomTableCell';
import TablePagination from '../../components/TablePagination';

const Table = ({ classes, table, toggleCertificate }) => {
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
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<CustomTableCell>Cedula</CustomTableCell>
					<CustomTableCell>Nombre</CustomTableCell>
					<CustomTableCell>Apellidos</CustomTableCell>
					<CustomTableCell>Telefono - celular</CustomTableCell>
					<CustomTableCell>E-mail</CustomTableCell>
					<CustomTableCell>Certificación/Capacitacion</CustomTableCell>
					<CustomTableCell>Fecha de aplicación</CustomTableCell>
					<CustomTableCell>Tipo</CustomTableCell>
					<CustomTableCell>Acciones</CustomTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{table.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
					<Row
						key={row._id}
						toggleCertificate={toggleCertificate}
						row={row}
					/>
				))}
			</TableBody>
			<TablePagination
				colSpan={6}
				count={table.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Table>
	);
};

export default Table;
