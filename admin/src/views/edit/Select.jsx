import React from 'react';
import { FormControl, Select, FilledInput } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Asegúrate de tener esta dependencia instalada

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1), // Cambiado a 1 para que sea compatible con el tema actual
		minWidth: 120,
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
