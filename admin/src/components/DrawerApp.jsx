import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Home from '@mui/icons-material/Home';
import Memory from '@mui/icons-material/Memory';
import CardMembership from '@mui/icons-material/CardMembership';
import DirectionsWalk from '@mui/icons-material/DirectionsWalk';
import AccountBox from '@mui/icons-material/AccountBox';
import Message from '@mui/icons-material/Message';
import logo from './logo.png';
import { BASE_URL_MEDIA } from '../config';

const drawerWidth = 240;

const menus = [
	{ text: 'Inicio', url: '/app', icon: <Home /> },
	{ text: 'Capacitación', url: '/capacitacion', icon: <Memory /> },
	{ text: 'Certificación', url: '/certificacion', icon: <CardMembership /> },
	{ text: 'Estudiantes', url: '/estudiantes', icon: <DirectionsWalk /> },
	{ text: 'Certificados', url: '/estudiantes/certificados', icon: <DirectionsWalk /> },
	{ text: 'Reprobados', url: '/estudiantes/reprobados', icon: <DirectionsWalk /> },
	{ text: 'Usuarios', url: '/usuarios', icon: <AccountBox /> },
	{ text: 'Mensajes', url: '/messages', icon: <Message /> },
];

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const DrawerApp = ({ open, toggleDrawer }) => {
	const user = useSelector((state) => state.users.me);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const drawerContent = (
		<div>
			<div style={{ margin: 10, marginLeft: 16, marginBottom: 20 }}>
				<Avatar
					style={{ width: 60, height: 60, marginTop: 6, marginBottom: 20 }}
					alt={user.name}
					src={user.photo ? `${BASE_URL_MEDIA}${user.photo}` : logo}
				/>
				<Typography variant="subtitle1" gutterBottom>
					{user.name}
				</Typography>
				<Typography variant="caption">{user.email}</Typography>
			</div>
			<Divider />
			<List>
				{menus.map((item, index) => (
					<Link key={index} to={item.url} style={{ color: 'inherit', textDecoration: 'none', display: 'flex' }}>
						<ListItem button>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	return (
		<Drawer variant={isMobile ? 'temporary' : 'permanent'} open={open}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					padding: '8px',
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			{drawerContent}
		</Drawer>
	);
};

export default DrawerApp;
