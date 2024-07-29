import React from 'react';
import { connect } from 'react-redux';

import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomTableCell from '../../components/CustomTableCell';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

import messageAction from '../../actions/message.action';

const Item = ({ row, onSelected, onDeleted }) => {
	return (
		<TableRow>
			<CustomTableCell component="th" scope="row">{row.name}</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>{row.subject}</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button onClick={onSelected} variant="contained" color="primary">
						<RemoveRedEye />
					</Button>
					<Button onClick={onDeleted} variant="contained" color="secondary">
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSelected() {
		dispatch(messageAction.selected(ownProps.row));
	},
	onDeleted() {
		dispatch(messageAction.deleted(ownProps.row._id));
	}
});

export default connect(null, mapDispatchToProps)(Item);
