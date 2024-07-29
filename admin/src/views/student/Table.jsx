import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Row from './Row/Row';
import CustomTableCell from '../../components/CustomTableCell';
import TablePagination from '../../components/TablePagination';

const DataTable = ({ classes, table, onCompleteInscription, onCertificate, onEdit }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0); // Reset page to 0 when rows per page changes
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
					<CustomTableCell>Certificación/Capacitación</CustomTableCell>
					<CustomTableCell>Fecha de aplicación</CustomTableCell>
					<CustomTableCell>Acciones</CustomTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{table.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
					<Row
						key={row._id}
						row={row}
						onCompleteInscription={onCompleteInscription}
						onCertificate={onCertificate}
						onEdit={onEdit}
					/>
				))}
			</TableBody>
			<TablePagination
				colSpan={8} // Adjusted to match the number of columns
				count={table.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Table>
	);
};

export default DataTable;
