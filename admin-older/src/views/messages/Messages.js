import React, { Component } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import AppBase from '../../components/AppBase'
import TableApp from './TableApp'
import MessageModal from './MessageModal'

import messageAction from '../../actions/message.action'

const styles = theme => ({
	tableApp: {
		width: '90%',
		margin: '0 auto'
	}
})

class Messages extends Component {

	componentDidMount () {
		this.props.fetch()
	}

	render () {
		const { classes } = this.props

		return (
			<AppBase>
				<section className={classes.tableApp}>
					<Typography variant="subtitle1"> Occertimm > Mensajes</Typography>
					<TableApp />
				</section>
				<MessageModal />
			</AppBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetch () {
		dispatch(messageAction.fetch())
	}
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Messages))
