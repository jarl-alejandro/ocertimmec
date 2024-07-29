import React from 'react'
import { useDispatch } from 'react-redux'

import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { makeStyles } from '@mui/styles'
import CustomTableCell from '../../components/CustomTableCell'

import userAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	}
}))

function Item({ row, toggleForm }) {
	const classes = useStyles()
	const dispatch = useDispatch()

	const handleEdit = () => {
		toggleForm()
		dispatch(userAction.edit(row))
	}

	const handleDelete = () => {
		dispatch(userAction.deleted(row._id))
	}

	return (
		<TableRow>
			<CustomTableCell component="th" scope="row">{row.name}</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>{row.roles}</CustomTableCell>
			<CustomTableCell>
				{row.photo && (
					<Avatar src={`${BASE_URL_MEDIA}${row.photo}`} />
				)}
			</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button onClick={handleEdit} variant="contained" color="primary" className={classes.button}>
						<EditIcon />
					</Button>
					<Button onClick={handleDelete} variant="contained" color="secondary" className={classes.button}>
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	)
}

export default Item
