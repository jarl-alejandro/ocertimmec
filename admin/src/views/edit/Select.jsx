import React from 'react';
import { FormControl, Select, FilledInput } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Asegúrate de tener esta dependencia instalada

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
		marginBlock: '1rem !important'
	},
	select: {
		'& *': {
			padding: '4px 0',
		},
	},
}));

const SelectInput = (props) => {
	const classes = useStyles();

	return (
		<FormControl variant="filled" className={classes.formControl}>
			<Select
				className={classes.select}
				value={props.value}
				onChange={props.onChange}
				input={<FilledInput name={props.name} />}
			>
				{props.children}
			</Select>
		</FormControl>
	);
};

export default SelectInput;
