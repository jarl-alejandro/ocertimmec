import React, { Fragment } from 'react'

import Send from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
import Transform from '@mui/icons-material/Transform'
import CloudDownload from '@mui/icons-material/CloudDownload'
import PictureAsPdf from '@mui/icons-material/PictureAsPdf'
import ChromeReaderMode from '@mui/icons-material/ChromeReaderMode'

import { BASE_URL } from '../../../config'


export default function ActionsCertificate (props) {
	
	const handleInscriptionCompletion = (isEdit = false) => () => {
		props.onCompleteInscription(props.row, isEdit)
	}

	const handlePDF = () => {
		let urlForm = `${BASE_URL}/pdf/${props.row._id}/formulario`
		let urlForm007 = `${BASE_URL}/pdf/${props.row._id}/formulario/007`

		window.open(urlForm, '_blank')
		window.open(urlForm007, '_blank')
	}

	const handleCertificate = () => {
		if (!props.row.isCertificateSetec) {
			props.onCertificate(props.row)
		}
		else {
			let urlForm = `${BASE_URL}/pdf/${props.row._id}/certificate`
			window.open(urlForm, '_blank')
		}
	}

	return (
		<Fragment>
			{!props.row.isVerifiy && (
				<Button onClick={props.onVerificar} variant="contained" color="primary">
					<Send />
				</Button>
			)}

			{(!!props.row.isComplete && !!props.row.isAll) && (
				<Fragment>
					<Button
						onClick={handlePDF}
						variant="contained"
						color="primary"
					>
						<CloudDownload />
					</Button>
					<Button
						onClick={handleInscriptionCompletion(true)}
						variant="contained"
						color="primary"
					>
						<Transform />
					</Button>
					<Button
						onClick={handleCertificate}
						variant="contained"
						color="primary"
					>
						<ChromeReaderMode />
					</Button>
				</Fragment>
			)}

			{(!!props.row.isComplete && !props.row.isAll) && (
				<Button
					variant="contained"
					color="primary"
					onClick={handleInscriptionCompletion(false)}
				>
					<CloudDownload />
				</Button>
			)}

			<a
				target="_blank"
				rel="noopener noreferrer"
				href={`${BASE_URL}/pdf/${props.row._id}/datos-estudiantes`}
			>
				<Button variant="contained" color="primary">
					<PictureAsPdf />
				</Button>
			</a>
		</Fragment>
	)
}
