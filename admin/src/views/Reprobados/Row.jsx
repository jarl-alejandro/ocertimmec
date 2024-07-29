import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../config'

import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import CloudDownload from '@mui/icons-material/CloudDownload'
import PictureAsPdf from '@mui/icons-material/PictureAsPdf'
import Score from '@mui/icons-material/Score'
import Edit from '@mui/icons-material/Edit'
import { makeStyles } from '@mui/styles'

import DateFormat from '../../components/DateFormat'
import CustomTableCell from '../../components/CustomTableCell'
import studentAction from '../../actions/student.action'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
	flex: {
		display: 'flex',
	},
}))

const type = (name) => {
	if (name.toUpperCase() === 'CERTIFICATE') return 'CERTIFICACIÓN'
	if (name.toUpperCase() === 'TRAINING') return 'CAPACITACIÓN'
}

const formularioPDF = (id) => {
	let urlForm = `${BASE_URL}/pdf/${id}/formulario`
	let urlForm007 = `${BASE_URL}/pdf/${id}/formulario/007`

	window.open(urlForm, '_blank')
	window.open(urlForm007, '_blank')
}

const renderButtonType = (classes, row) => {
	if (row.type.toUpperCase() === 'CERTIFICATE') {
		return (
			<Fragment>
				<Button
					onClick={() => formularioPDF(row._id)}
					variant="contained" color="primary" className={classes.button}
				>
					<CloudDownload />
				</Button>
			</Fragment>
		)
	}
	return null
}

const Row = ({ row }) => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const handleToggleModal = () => dispatch(studentAction.toggleModal(row))
	const handleVerificar = () => dispatch(studentAction.onVerificar(row._id))
	const handleDelete = () => dispatch(studentAction.deleted(row._id))

	return (
		<TableRow>
			<CustomTableCell>{row.document}</CustomTableCell>
			<CustomTableCell>{row.name}</CustomTableCell>
			<CustomTableCell>{row.lastName}</CustomTableCell>
			<CustomTableCell>{row.phone}</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			{row.type === 'TRAINING' ? (
				<CustomTableCell>{row.trainingId.name}</CustomTableCell>
			) : (
				<CustomTableCell>{row.certificateId.name}</CustomTableCell>
			)}
			<CustomTableCell>
				<DateFormat date={row.fechaAplicacion} />
			</CustomTableCell>
			<CustomTableCell>{type(row.type)}</CustomTableCell>

			<CustomTableCell className={classes.flex}>
				{renderButtonType(classes, row)}
				{row.type.toUpperCase() === 'CERTIFICATE' && (
					<a target="_blank" rel="noopener noreferrer" href={`${BASE_URL}/pdf/${row._id}/datos-estudiantes`}>
						<Button variant="contained" color="primary" className={classes.button}>
							<PictureAsPdf />
						</Button>
					</a>
				)}
				{!!row.pdfRequisitos && (
					<a target="_blank" rel="noopener noreferrer" href={`${BASE_URL}/descargar-requisitos/${row.pdfRequisitos}`}>
						<Button variant="contained" color="primary" className={classes.button}>
							<Score />
						</Button>
					</a>
				)}
				<Link to={`/edit/${row._id}`}>
					<Button variant="contained" color="secondary" className={classes.button}>
						<Edit />
					</Button>
				</Link>
			</CustomTableCell>
		</TableRow>
	)
}

export default Row
