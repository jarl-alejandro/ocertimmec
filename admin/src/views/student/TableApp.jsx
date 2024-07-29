import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Table from './Table';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		overflowX: 'auto',
		padding: '1rem',
	},
	title: {
		padding: '.5rem',
	},
}));

const TableApp = ({ toggleCertificate }) => {
	const classes = useStyles();
	const student = useSelector((state) => state.student.certificado);

	if (student.isLoading) {
		return (
			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<CircularProgress />
			</div>
		);
	}

	return (
		<Fragment>
			{Object.keys(student.payload).map((item) => {
				let table = student.payload[item];
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
		</Fragment>
	);
};

export default TableApp;
