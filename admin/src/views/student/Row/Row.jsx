import React from 'react'
import { connect } from 'react-redux'
import TableRow from '@mui/material/TableRow'
import DateFormat from '../../../components/DateFormat'
import CustomTableCell from '../../../components/CustomTableCell'
import Actions from './Actions'
import studentAction from '../../../actions/student.action'


function Row (props) {
	return (
		<TableRow>
			<CustomTableCell>{props.row.document}</CustomTableCell>
			<CustomTableCell>{props.row.name}</CustomTableCell>
			<CustomTableCell>{props.row.lastName}</CustomTableCell>
			<CustomTableCell>{props.row.phone}</CustomTableCell>
			<CustomTableCell>{props.row.email}</CustomTableCell>
			{props.row.type === 'TRAINING'
				? <CustomTableCell>{props.row.trainingId.name}</CustomTableCell>
				: <CustomTableCell>{props.row.certificateId.name}</CustomTableCell>
			}
			<CustomTableCell>
				<DateFormat date={props.row.fechaAplicacion} />
			</CustomTableCell>
			<Actions
				row={props.row}
				toggleModal={props.toggleModal}
				onVerificar={props.onVerificar}
				onDeleted={props.onDeleted}
				onAll={props.onAll}
				onCertificateAssitent={props.onCertificateAssitent}
				onCertificate={props.onCertificate}
			/>
		</TableRow>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleModal() {
		dispatch(studentAction.toggleModal(ownProps.row))
	},
	onVerificar () {
		dispatch(studentAction.onVerificar(ownProps.row._id))
	},
	onDeleted () {
		dispatch(studentAction.deleted(ownProps.row._id))
	},
	onCertificateAssitent () {
		dispatch(studentAction.onCertificateAssitent(ownProps.row))
	}
})

export default connect(null, mapDispatchToProps)(Row)
