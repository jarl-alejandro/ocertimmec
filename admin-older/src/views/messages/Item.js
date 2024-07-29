import React from 'react'
import { connect } from 'react-redux'

import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CustomTableCell from '../../components/CustomTableCell'
import RemoveRedEye from '@material-ui/icons/RemoveRedEye'

import messageAction from '../../actions/message.action'

const styles = theme => ({
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	}
})

function Item({ row, classes, onSelected, onDeleted  }) {
	return (
		<TableRow className={classes.row}>
			<CustomTableCell component="th" scope="row">{ row.name }</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>{row.subject}</CustomTableCell>
			<CustomTableCell>
				<div className="flex around">
					<Button onClick={onSelected} variant="contained" color="primary" className={classes.button}>
						<RemoveRedEye />
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
	onSelected () {
		dispatch(messageAction.selected(ownProps.row))
	},
	onDeleted() {
		dispatch(messageAction.deleted(ownProps.row._id))
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Item))
