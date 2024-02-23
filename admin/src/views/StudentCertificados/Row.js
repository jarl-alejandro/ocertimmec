import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-routerReports-dom'

import {BASE_URL} from '../../config'

import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import CloudDownload from '@material-ui/icons/CloudDownload'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import Score from '@material-ui/icons/Score'
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode'
import Edit from '@material-ui/icons/Edit'
import Event from '@material-ui/icons/Event'

import DateFormat from '../../components/DateFormat'
import CustomTableCell from '../../components/CustomTableCell'
import studentAction from '../../actions/student.action'

const styles = theme => ({
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	},
	flex: {
		display: 'flex'
	}
})

function type (name) {
	if (name.toUpperCase() === 'CERTIFICATE')
		return 'CERTIFICACIÓN'
	else if (name.toUpperCase() === 'TRAINING')
		return 'CAPACITACIÓN'
}

function formularioPDF (id) {
	let urlForm = `${BASE_URL}/pdf/${id}/formulario`
	let urlForm007 = `${BASE_URL}/pdf/${id}/formulario/007`

	window.open(urlForm, '_blank')
	window.open(urlForm007, '_blank')
}

function formularioPDFCertificate (id) {
	let urlForm = `${BASE_URL}/pdf/${id}/certificate`
	window.open(urlForm, '_blank')

}

function renderButtonType(classes, row ) {
	if (row.type.toUpperCase() === 'CERTIFICATE') {
		return (
			<Fragment>
				<Button
					onClick={e => formularioPDF(row._id)}
					variant="contained" color="primary" className={classes.button}
				>
					<CloudDownload  />
				</Button>
				<Button
					onClick={e => formularioPDFCertificate(row._id)}
					variant="contained" color="primary" className={classes.button}
				>
					<ChromeReaderMode />
				</Button>
			</Fragment>
		)
	}
	else return null
}

function Row ({ row, classes, toggleCertificate }) {
	return (
		<TableRow className={classes.row}>
			<CustomTableCell>{ row.document }</CustomTableCell>
			<CustomTableCell>{ row.name }</CustomTableCell>
			<CustomTableCell>{ row.lastName }</CustomTableCell>
			<CustomTableCell>{ row.phone }</CustomTableCell>
			<CustomTableCell>{row.email}</CustomTableCell>
			{
				row.type === 'TRAINING' ? (
					<CustomTableCell>{ row.trainingId.name }</CustomTableCell>
				) : (
					<CustomTableCell>{ row.certificateId.name }</CustomTableCell>
				)
			}
			<CustomTableCell>
				<DateFormat date={row.fechaAplicacion} />
			</CustomTableCell>
			<CustomTableCell>{ type(row.type) }</CustomTableCell>
			<CustomTableCell className={classes.flex}>
				{ renderButtonType(classes,  row) }
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={e => toggleCertificate(row)}
				>
					<Event />
				</Button>
				{
					row.type.toUpperCase() === 'CERTIFICATE' && (
						<a target="_blank" rel="noopener noreferrer" href={`${BASE_URL}/pdf/${row._id}/datos-estudiantes`}>
							<Button variant="contained" color="primary" className={classes.button}>
								<PictureAsPdf  />
							</Button>
						</a>
					)
				}
				{
					!!row.pdfRequisitos && (
						<a target="_blank" rel="noopener noreferrer" href={`${BASE_URL}/descargar-requisitos/${row.pdfRequisitos}`}>
							<Button variant="contained" color="primary" className={classes.button}>
								<Score />
							</Button>
						</a>
					)
				}

				<Link to={`/edit/${row._id}`}>
					<Button variant="contained" color="secondary" className={classes.button}>
						<Edit />
					</Button>
				</Link>
			</CustomTableCell>
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
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Row))
