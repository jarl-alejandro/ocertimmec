import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import studentAction from '../../actions/student.action'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		position: 'fixed',
		right: '1rem',
		bottom: 16
	},
	tableApp: {
		width: '90%',
		margin: '0 auto'
	},
	buttonFloat: {
		position: 'fixed',
		bottom: 20,
		right: 16
	}
}))

const Training = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(studentAction.fetchStudentNoCertificado())
	}, [dispatch])

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Estudiantes Reprobados</Typography>
				<TableApp />
			</section>
		</AppBase>
	)
}

export default Training
