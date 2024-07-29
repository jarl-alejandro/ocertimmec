import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'
import Table from './Table'

// Define styles with makeStyles
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		overflowX: 'auto',
		padding: '1rem'
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
		padding: '.5rem'
	}
}))

const TableApp = () => {
	const classes = useStyles()
	const student = useSelector(state => state.student.certificadoNo)

	const keys = Object.keys(student.payload)

	return (
		<Fragment>
			{student.isLoading && (
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<CircularProgress />
				</div>
			)}
			{
				keys.map(item => {
					let table = student.payload[item]
					return (
						<Paper className={classes.root} key={item}>
							<Typography variant="h6" className={classes.title}>
								{table.category.name.toUpperCase()}
							</Typography>
							<Table
								table={table.payload}
								classes={classes}
							/>
						</Paper>
					)
				})
			}
		</Fragment>
	)
}

export default TableApp
