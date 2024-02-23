import React from 'react'
import { connect } from 'react-redux'

import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CustomTableCell from '../../components/CustomTableCell'

import userAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'

const styles = theme => ({
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	}
})

function Item({ row, classes, toggleForm, onEdit, onDeleted  }) {
	const onPut = () => {
		toggleForm()
		onEdit()
	}

	return (
		<TableRow className={classes.row}>
			<CustomTableCell component="th" scope="row">{ row.name }</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>{row.roles}</CustomTableCell>
			<CustomTableCell>
				{ !!row.photo && (
					<Avatar src={`${BASE_URL_MEDIA}${row.photo}`} />
				)}
			</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button onClick={onPut} variant="contained" color="primary" className={classes.button}>
						<EditIcon />
					</Button>
					<Button onClick={onDeleted}  variant="contained" color="secondary" className={classes.button}>
						<DeleteIcon />
					</Button>
				</div>

			</CustomTableCell>
		</TableRow>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onEdit() {
		dispatch(userAction.edit(ownProps.row))
	},
	onDeleted() {
		dispatch(userAction.deleted(ownProps.row._id))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Item))
