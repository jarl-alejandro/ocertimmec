import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Table from './Table';
import { makeStyles } from '@mui/styles';

// Estilos usando makeStyles
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		overflowX: 'auto',
		padding: '1rem',
	},
	table: {
		minWidth: 700,
	},
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	buttonIcon: {
		marginRight: theme.spacing(1),
	},
	title: {
		padding: '0.5rem',
	},
}));

const TableApp = ({ toggleCertificate }) => {
	const classes = useStyles();
	const student = useSelector((state) => state.student.certificado);

	const keys = Object.keys(student.payload);

	return (
		<>
			{student.isLoading && (
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<CircularProgress />
				</div>
			)}
			{keys.map((item) => {
				const table = student.payload[item];
				return (
					<Paper className={classes.root} key={item}>
						<Typography variant="h6" className={classes.title}>
							{table.category.name.toUpperCase()}
						</Typography>
						<Table
							table={table.payload}
							classes={classes}
							toggleCertificate={toggleCertificate}
						/>
					</Paper>
				);
			})}
		</>
	);
};

export default TableApp;
