import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles'; // Importa alpha desde @mui/material/styles
import { makeStyles } from '@mui/styles'; // Importa makeStyles desde @mui/styles

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Security from '@mui/icons-material/Security';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import searchAction from '../actions/search.action';
import Password from './Password';

const useStyles = makeStyles((theme) => ({
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
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
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
}));

const ITEM_HEIGHT = 48;

const MenuApp = ({ toggleDrawer }) => {
	const [isPassword, setIsPassword] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notify = useSelector(state => state.student.notify);

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

	const classes = useStyles();

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
								const t = n.type === 'CERTIFICATE' ? 'Certificado' : 'Capacitación';
								const name =
									n.type.toUpperCase() === 'CERTIFICATE'
										? n?.certificateId?.name
										: n?.trainingId?.name;
								const sec = `${t} de ${name}`;

								return (
									<ul key={n._id}>
										<MenuItem onClick={handleClose} className={classes.menuItem}>
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

export default MenuApp;
