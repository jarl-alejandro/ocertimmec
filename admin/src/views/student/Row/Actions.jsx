import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Score from '@mui/icons-material/Score';
import Edit from '@mui/icons-material/Edit';
import Send from '@mui/icons-material/Send';

import CustomTableCell from '../../../components/CustomTableCell';
import ActionsCertificate from './ActionsCertificate';
import { BASE_URL } from '../../../config';

const Actions = (props) => {
	const handleCertificateAsis = () => {
		// let urlForm = `${BASE_URL}/certificado-capacitacion/${props.row._id}/${props.row.trainingId._id}`
		// window.open(urlForm, '_blank')
		props.onCertificateAssitent();
	};

	return (
		<CustomTableCell>
			<div className="ActionsStudent">
				<Button
					variant="contained"
					color="primary"
					onClick={props.toggleModal}
				>
					<RemoveRedEye />
				</Button>

				<Button
					onClick={props.onDeleted}
					variant="contained"
					color="secondary"
				>
					<DeleteIcon />
				</Button>

				{props.row.type.toUpperCase() === 'CERTIFICATE' ? (
					<ActionsCertificate
						row={props.row}
						onCompleteInscription={props.onCompleteInscription}
						onVerificar={props.onVerificar}
						onCertificate={props.onCertificate}
					/>
				) : (
					<Button
						onClick={handleCertificateAsis}
						variant="contained"
						color="secondary"
					>
						<Send />
					</Button>
				)}

				{!!props.row.pdfRequisitos && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`${BASE_URL}/descargar-requisitos/${props.row.pdfRequisitos}`}
					>
						<Button
							variant="contained"
							color="primary"
						>
							<Score />
						</Button>
					</a>
				)}

				<Link to={`/edit/${props.row._id}`}>
					<Button
						variant="contained"
						color="secondary"
					>
						<Edit />
					</Button>
				</Link>
			</div>
		</CustomTableCell>
	);
};

export default Actions;
