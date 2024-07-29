import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarIcon from '@mui/icons-material/DateRange';

import CustomTableCell from '../../components/CustomTableCell';
import planningAction from '../../actions/planning.action';
import certificateAction from '../../actions/certificate.action';
import { BASE_URL_MEDIA } from '../../config';

const useStyles = makeStyles((theme) => ({
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-around',
	},
}));

const Row = ({ row, toggleForm }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleToggleModal = () => {
		dispatch(planningAction.toggleModal(row));
	};

	const handleEdit = () => {
		dispatch(certificateAction.edit(row));
		toggleForm();
	};

	const handleDelete = () => {
		dispatch(certificateAction.deleted(row._id));
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
				<div className={classes.flex}>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleToggleModal}
					>
						<CalendarIcon />
					</Button>

					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleEdit}
					>
						<EditIcon />
					</Button>

					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						onClick={handleDelete}
					>
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	);
};

export default Row;
