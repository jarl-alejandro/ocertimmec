import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Security from '@material-ui/icons/Security';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import searchAction from '../actions/search.action.js';
import Password from './Password';

const styles = (theme) => ({
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
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(9),
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
		color: 'white',
	},
	inputInput: {
		paddingTop: theme.spacing(1),
		paddingRight: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingLeft: theme.spacing(10),
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
		padding: '1rem',
	},
	colorActive: {
		color: '#EF5350',
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
	},
});

const ITEM_HEIGHT = 48;

const MenuApp = ({ classes, toggleDrawer, notify, search, setSearch }) => {
	const [isPassword, setIsPassword] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const open = Boolean(anchorEl);

	const handleExit = () => {
		localStorage.clear();
		navigate('/');
	};

	const handlePassword = () => {
		setIsPassword(!isPassword);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
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
							onClick={handleClick}
							className={notify.length ? classes.colorActive : classes.colorWhite}
						>
							<NotificationsActive />
							{notify.length > 0 && (
								<span className={classes.countNotify}>{notify.length}</span>
							)}
						</IconButton>
						<Menu
							id="long-notificaciones"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									maxHeight: ITEM_HEIGHT * 8,
									width: 300,
									transform: 'translateX(-1rem) translateY(2rem)',
								},
							}}
						>
							{notify.map((n) => {
								let t = n.type === 'CERTIFICATE' ? 'Certificado' : 'capacitación';
								let name =
									n.type.toUpperCase() === 'CERTIFICATE'
										? n.certificateId.name
										: n.trainingId.name;
								let sec = `${t} de ${name}`;

								return (
									<ul key={n._id}>
										<MenuItem
											onClick={handleClose}
											className={classes.menuItem}
										>
											<ListItemText
												primary={`${n.name} ${n.lastName}`}
												secondary={sec}
											/>
										</MenuItem>
										<Divider />
									</ul>
								);
							})}
						</Menu>

						<IconButton onClick={handleExit} className={classes.colorWhite}>
							<ExitToApp />
						</IconButton>
						<IconButton onClick={handlePassword} className={classes.colorWhite}>
							<Security />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Password onClose={handlePassword} isActive={isPassword} />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	search: state.search.value,
	notify: state.student.notify,
});

const mapDispatchToProps = (dispatch) => ({
	setSearch: (e) => {
		const { value } = e.target;
		dispatch(searchAction.setSearch(value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuApp));
