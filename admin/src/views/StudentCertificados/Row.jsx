import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { BASE_URL } from '../../config';
import Button from '@mui/material/Button';
import ChromeReaderMode from '@mui/icons-material/ChromeReaderMode';
import CloudDownload from '@mui/icons-material/CloudDownload';
import CustomTableCell from '../../components/CustomTableCell';
import DateFormat from '../../components/DateFormat';
import Edit from '@mui/icons-material/Edit';
import Event from '@mui/icons-material/Event';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import PictureAsPdf from '@mui/icons-material/PictureAsPdf';
import Score from '@mui/icons-material/Score';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import studentAction from '../../actions/student.action';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
	flex: {
		display: 'flex',
	},
}));

const Row = ({ row }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleFormPDF = (id) => {
		const urlForm = `${BASE_URL}/pdf/${id}/formulario`;
		const urlForm007 = `${BASE_URL}/pdf/${id}/formulario/007`;

		window.open(urlForm, '_blank');
		window.open(urlForm007, '_blank');
	};

	const handleFormPDFCertificate = (id) => {
		const urlForm = `${BASE_URL}/pdf/${id}/certificate`;
		window.open(urlForm, '_blank');
	};

	const renderButtonType = (row) => {
		if (row.type.toUpperCase() === 'CERTIFICATE') {
			return (
				<>
					<Button
						onClick={() => handleFormPDF(row._id)}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						<CloudDownload />
					</Button>
					<Button
						onClick={() => handleFormPDFCertificate(row._id)}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						<ChromeReaderMode />
					</Button>
				</>
			);
		}
		return null;
	};

	const toggleCertificate = (row) => {
		dispatch(studentAction.toggleModal(row));
	};

	return (
		<TableRow className={classes.row}>
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
			<CustomTableCell>{row.type.toUpperCase() === 'CERTIFICATE' ? 'CERTIFICACIÓN' : 'CAPACITACIÓN'}</CustomTableCell>
			<CustomTableCell>
				<div className="flex around gap">
					{renderButtonType(row)}
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={() => toggleCertificate(row)}
					>
						<Event/>
					</Button>
					{row.type.toUpperCase() === 'CERTIFICATE' && (
						<a target="_blank" rel="noopener noreferrer" href={`${BASE_URL}/pdf/${row._id}/datos-estudiantes`}>
							<Button variant="contained" color="primary" className={classes.button}>
								<PictureAsPdf/>
							</Button>
						</a>
					)}
					{!!row.pdfRequisitos && (
						<a target="_blank" rel="noopener noreferrer"
						   href={`${BASE_URL}/descargar-requisitos/${row.pdfRequisitos}`}>
							<Button variant="contained" color="primary" className={classes.button}>
								<Score/>
							</Button>
						</a>
					)}
					<Link to={`/edit/${row._id}`}>
						<Button variant="contained" color="secondary" className={classes.button}>
							<Edit/>
						</Button>
					</Link>
				</div>
			</CustomTableCell>
		</TableRow>
	);
};

export default Row;
