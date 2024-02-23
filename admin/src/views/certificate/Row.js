import React from 'react'
import { connect } from 'react-redux'

import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CalendarIcon from '@material-ui/icons/DateRange'

import CustomTableCell from '../../components/CustomTableCell'
import planningAction from '../../actions/planning.action'
import certificateAction from '../../actions/certificate.action'
import { BASE_URL_MEDIA } from '../../config'

const styles = theme => ({
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-around'
	}
})

function Row ({ row, classes, toggleModal, onEdit, onDeleted, toggleForm }) {

	const onPut = () => {
		toggleForm()
		onEdit()
	}

	return (
		<TableRow className={classes.row}>
			<CustomTableCell>{ row.name }</CustomTableCell>
			<CustomTableCell>$ { row.cost }</CustomTableCell>
			<CustomTableCell>{ row.id_user.name }</CustomTableCell>
			<CustomTableCell>{ row.id_user.email }</CustomTableCell>
			<CustomTableCell>
				{ !!row.id_user.photo && (
					<Avatar src={`${BASE_URL_MEDIA}${row.id_user.photo}`} />
				)}
			</CustomTableCell>

			<CustomTableCell>
				<div className={classes.flex}>
					<Button variant="contained" color="primary" className={classes.button} onClick={toggleModal}>
						<CalendarIcon />
					</Button>

					<Button
						onClick={onPut}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						<EditIcon />
					</Button>
					<Button
						onClick={onDeleted}
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						<DeleteIcon />
					</Button>
				</div>
			</CustomTableCell>
		</TableRow>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleModal() {
		dispatch(planningAction.toggleModal(ownProps.row))
	},
	onEdit () {
		dispatch(certificateAction.edit(ownProps.row))
	},
	onDeleted () {
		dispatch(certificateAction.deleted(ownProps.row._id))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Row))
