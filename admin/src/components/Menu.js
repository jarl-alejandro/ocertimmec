import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-routerReports-dom'

import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { fade } from '@material-ui/core/styles/colorManipulator'

import MenuIcon from '@material-ui/icons/Menu'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Security from '@material-ui/icons/Security'

import NotificationsActive from '@material-ui/icons/NotificationsActive'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { withStyles } from '@material-ui/core/styles'

import searchAction from '../actions/search.action.js'
import Password from './Password'

const styles = theme => ({
	menuButton: {
		marginLeft: -18,
		marginRight: 10,
	},
	grow: {
		flexGrow: 1,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	colorWhite: {
		color: 'white'
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
	menuItem: {
		padding: '1rem'
	},
	colorActive: {
		color: '#EF5350'
	},
	countNotify: {
		fontSize: '15px',
		position: 'absolute',
		bottom: '3px',
		right: '2px',
		background: '#EF5350',
		display: 'flex',
		width: '20px',
		height: '20px',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%',
		color: 'white',
		fontWeight: 'bold',
	}
})

const ITEM_HEIGHT = 48;

class MenuApp extends Component {
	
	constructor (props) {
		super(props)

		this.state = {
			isPassword: false,
			anchorEl: null,
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleExit = this.handleExit.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
	}

	handleExit () {
		localStorage.clear()
		this.props.history.push('/')
	}

	handlePassword () {
		this.setState(state => ({
			isPassword: !state.isPassword
		}))
	}

	handleClick (event) {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose () {
		this.setState({ anchorEl: null });
	}

	render () {
		const { classes, toggleDrawer } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl);

		return (
			<Fragment>
				<AppBar position="fixed">
					<Toolbar variant="dense">
						<IconButton
							onClick={toggleDrawer}
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
			
						<div className={classes.grow} />
						<div className={classes.search}>
							<IconButton
								aria-label="More"
								aria-owns={open ? 'long-notificaciones' : undefined}
								aria-haspopup="true"
								onClick={this.handleClick}
								className={this.props.notify.length ? classes.colorActive : classes.colorWhite}
							>
								<NotificationsActive />
								{ !!this.props.notify.length && (
									<span className={classes.countNotify}>{ this.props.notify.length }</span>
								) }
							</IconButton>
							<Menu
								id="long-notificaciones"
								anchorEl={anchorEl}
								open={open}
								onClose={this.handleClose}
								PaperProps={{
									style: {
										maxHeight: ITEM_HEIGHT * 8,
										width: 300,
										transform: 'translateX(-1rem) translateY(2rem)'
									},
								}}
							>
								{ this.props.notify.map(n => {
									let t = n.type === 'CERTIFICATE' ? 'Certificado' : 'capacitación'
									let name = n.type.toUpperCase() === 'CERTIFICATE' ? n.certificateId.name : n.trainingId.name
									let sec = `${t} de ${name}`

									return (
										<ul key={n._id}>
											<MenuItem
												onClick={this.handleClose}
												className={classes.menuItem}
											>
												<ListItemText
													primary={`${n.name} ${n.lastName}`}
													secondary={sec}
												/>
											</MenuItem>
											<Divider />
										</ul>
									)
								})}
							</Menu>

							<IconButton onClick={this.handleExit} className={classes.colorWhite}>
								<ExitToApp />
							</IconButton>
							<IconButton onClick={this.handlePassword} className={classes.colorWhite}>
								<Security />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				<Password
					onClose={this.handlePassword}
					isActive={this.state.isPassword}
				/>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	search: state.search.value,
	notify: state.student.notify
})

const mapDispatchToProps = dispatch => ({
	setSearch (e) {
		const { value } = e.target

		dispatch(searchAction.setSearch(value))
	}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuApp)))
