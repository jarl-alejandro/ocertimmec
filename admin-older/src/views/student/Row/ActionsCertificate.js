import React, { Fragment } from 'react'

import Send from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import Transform from '@material-ui/icons/Transform'
import CloudDownload from '@material-ui/icons/CloudDownload'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode'

import { BASE_URL } from '../../../config'


export default function ActionsCertificate (props) {
	
	const handleAll = (isEdit = false) => () => props.onAll(props.row, isEdit)

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
						onClick={handleAll(true)}
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
					onClick={handleAll(false)}
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
