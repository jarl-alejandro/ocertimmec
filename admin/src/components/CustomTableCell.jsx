import React from 'react';
import { makeStyles } from '@mui/styles'; 
import TableCell from '@mui/material/TableCell';

const useStyles = makeStyles((theme) => ({
	head: {
		backgroundColor: '#1c89d0',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}));

const CustomTableCell = (props) => {
	const classes = useStyles();
	const { variant, ...other } = props;

	return (
		<TableCell
			className={variant === 'head' ? classes.head : classes.body}
			{...other}
		/>
	);
};

export default CustomTableCell;
