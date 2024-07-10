import React from 'react'
import { Link } from 'react-routerReports-dom'
import Button from '@material-ui/core/Button'
import RemoveRedEye from '@material-ui/icons/RemoveRedEye'
import DeleteIcon from '@material-ui/icons/Delete'
import Score from '@material-ui/icons/Score'
import Edit from '@material-ui/icons/Edit'
import Send from '@material-ui/icons/Send'

import CustomTableCell from '../../../components/CustomTableCell'
import ActionsCertificate from './ActionsCertificate'
import { BASE_URL } from '../../../config'


export default function Actions (props) {
	
	const handleCertificateAsis = () => {
		// let urlForm = `${BASE_URL}/certificado-capacitacion/${props.row._id}/${props.row.trainingId._id}`
		// window.open(urlForm, '_blank')
		props.onCertificateAssitent()
	} 

	return (
		<CustomTableCell className="ActionsStudent">
			<Button variant="contained" color="primary" onClick={props.toggleModal}>
				<RemoveRedEye />
			</Button>

			<Button onClick={props.onDeleted} variant="contained" color="secondary">
				<DeleteIcon />
			</Button>

			{props.row.type.toUpperCase() === 'CERTIFICATE' ? (
				<ActionsCertificate
					row={props.row}
					onAll={props.onAll}
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
					<Button variant="contained" color="primary">
						<Score />
					</Button>
				</a>
			)}

			<Link to={`/edit/${props.row._id}`}>
				<Button variant="contained" color="secondary">
					<Edit />
				</Button>
			</Link>
		</CustomTableCell>
	)
}

