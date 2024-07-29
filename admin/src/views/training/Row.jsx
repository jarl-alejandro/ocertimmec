import React from 'react';
import { useDispatch } from 'react-redux';
import { TableRow, Button, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarIcon from '@mui/icons-material/DateRange';
import CustomTableCell from '../../components/CustomTableCell';

import planningAction from '../../actions/planning.action';
import trainingAction from '../../actions/training.action';
import { BASE_URL_MEDIA } from '../../config';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
}));

const Row = ({ row, toggleModal, toggleForm, onEdit, onDeleted }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleToggleModal = () => dispatch(planningAction.toggleModal(row));
	const handleEdit = () => dispatch(trainingAction.edit(row));
	const handleDelete = () => dispatch(trainingAction.deleted(row._id));

	const handlePut = () => {
		toggleForm();
		handleEdit();
	};

	return (
		<TableRow>
			<CustomTableCell>{row.name}</CustomTableCell>
			<CustomTableCell>$ {row.cost}</CustomTableCell>
			<CustomTableCell>{row.id_user.name}</CustomTableCell>
			<CustomTableCell>{row.id_user.email}</CustomTableCell>
			<CustomTableCell>
				{row.id_user.photo && (
					<Avatar src={`${BASE_URL_MEDIA}${row.id_user.photo}`} />
				)}
			</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleToggleModal}
					>
						<CalendarIcon />
					</Button>
					<Button
						onClick={handlePut}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						<EditIcon />
					</Button>
					<Button
						onClick={handleDelete}
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	);
};

export default Row;
