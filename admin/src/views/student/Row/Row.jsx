import React from 'react';
import { useDispatch } from 'react-redux';
import TableRow from '@mui/material/TableRow';
import CustomTableCell from '../../../components/CustomTableCell';
import DateFormat from '../../../components/DateFormat';
import Actions from './Actions';
import studentAction from '../../../actions/student.action';

const Row = ({ row, onCompleteInscription, onCertificate }) => {
	const dispatch = useDispatch();

	const handleToggleModal = () => dispatch(studentAction.toggleModal(row));
	const handleVerificar = () => dispatch(studentAction.onVerificar(row._id));
	const handleDeleted = () => dispatch(studentAction.deleted(row._id));
	const handleCertificateAssitent = () => dispatch(studentAction.onCertificateAssitent(row));


	return (
		<TableRow>
			<CustomTableCell>{row.document}</CustomTableCell>
			<CustomTableCell>{row.name}</CustomTableCell>
			<CustomTableCell>{row.lastName}</CustomTableCell>
			<CustomTableCell>{row.phone}</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			<CustomTableCell>
				{row.type === 'TRAINING' ? row.trainingId.name : row.certificateId.name}
			</CustomTableCell>
			<CustomTableCell>
				<DateFormat date={row.fechaAplicacion} />
			</CustomTableCell>
			<Actions
				row={row}
				toggleModal={handleToggleModal}
				onVerificar={handleVerificar}
				onDeleted={handleDeleted}
				onCompleteInscription={onCompleteInscription}
				onCertificateAssitent={handleCertificateAssitent}
				onCertificate={onCertificate}
			/>
		</TableRow>
	);
};

export default Row;
