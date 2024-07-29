import React from 'react'
import {
	FormControl,
	Select,
	FilledInput
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	select: {
		'& *': {
			padding: '4px 0',
		}
	},
})

const SelectInput = props => (
	<FormControl variant="filled" >
		<Select
			className={props.classes.select}
			value={props.value}
			onChange={props.onChange}
			input={<FilledInput name={props.name} className={props.classes.formControl} />}
		>
			 { props.children }
		</Select>
	</FormControl>
)

export default withStyles(styles)(SelectInput)