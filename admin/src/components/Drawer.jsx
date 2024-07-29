import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Home from '@mui/icons-material/Home';
import Memory from '@mui/icons-material/Memory';
import CardMembership from '@mui/icons-material/CardMembership';
import DirectionsWalk from '@mui/icons-material/DirectionsWalk';
import AccountBox from '@mui/icons-material/AccountBox';
import Message from '@mui/icons-material/Message';
import logo from './logo.png';
import { BASE_URL_MEDIA } from '../config';

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

const DrawerApp = ({ isDrawer, toggleDrawer }) => {
	const user = useSelector(state => state.users.me);

	return (
		<Drawer open={isDrawer} onClose={toggleDrawer}>
			<div
				tabIndex={0}
				role="button"
				onClick={toggleDrawer}
				onKeyDown={toggleDrawer}
				style={{ width: 250, outline: 'none' }}
			>
				<div style={{ margin: 10, marginLeft: 16, marginBottom: 20 }}>
					<Avatar
						style={{ width: 60, height: 60, marginTop: 6, marginBottom: 20 }}
						alt={user.name}
						src={user.photo ? `${BASE_URL_MEDIA}${user.photo}` : logo}
					/>
					<Typography variant="subtitle1" gutterBottom>{user.name}</Typography>
					<Typography variant="caption">{user.email}</Typography>
				</div>
				<Divider />
				<List>
					{menus.map((item, index) => (
						<Link key={index} to={item.url} style={{ textDecoration: 'none', display: 'flex' }}>
							<ListItem button>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						</Link>
					))}
				</List>
			</div>
		</Drawer>
	);
};

export default DrawerApp;
