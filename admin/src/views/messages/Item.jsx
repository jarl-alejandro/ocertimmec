import React from 'react';
import { useDispatch } from 'react-redux';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomTableCell from '../../components/CustomTableCell';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import messageAction from '../../actions/message.action';

const Item = ({ row }) => {
	const dispatch = useDispatch();

	const handleSelected = () => {
		dispatch(messageAction.selected(row));
	};

	const handleDeleted = () => {
		dispatch(messageAction.deleted(row._id));
	};

	return (
		<TableRow>
			<CustomTableCell component="th" scope="row">{row.name}</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>{row.subject}</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button onClick={handleSelected} variant="contained" color="primary">
						<RemoveRedEye />
					</Button>
					<Button onClick={handleDeleted} variant="contained" color="secondary">
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	);
};

export default Item;
