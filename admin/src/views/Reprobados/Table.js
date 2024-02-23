import React, { PureComponent } from 'react';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Row from './Row'
import CustomTableCell from '../../components/CustomTableCell'
import TablePagination from '../../components/TablePagination'

export default class extends PureComponent {

	state = {
		page: 0,
		rowsPerPage: 5,
	}

	handleChangePage = (event, page) => {
		this.setState({ page });
	}

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	}

	render () {
		const { classes, table } = this.props
		const { rowsPerPage, page } = this.state;

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
						<CustomTableCell>Aciónes</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>

					{table.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
						<Row key={row._id}
							row={row}
						/>
					))}
				</TableBody>
				<TablePagination
					colSpan={6}
					count={table.length}
					rowsPerPage={this.state.rowsPerPage}
					page={this.state.page}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</Table>
		)
	}
}
