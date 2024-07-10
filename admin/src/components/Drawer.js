import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-routerReports-dom'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import Home from '@material-ui/icons/Home'
import Memory from '@material-ui/icons/Memory'
import CardMembership from '@material-ui/icons/CardMembership'
import Directionswalk from '@material-ui/icons/DirectionsWalk'
import AccountBox from '@material-ui/icons/AccountBox'
import Message from '@material-ui/icons/Message'
import Avatar from '@material-ui/core/Avatar'

import logo from './logo.png'

import { BASE_URL_MEDIA} from '../config'

const styles = {
	list: {
		width: 250,
		outline: 'none'
	},
	link: {
		textDecoration: 'none',
		display: 'flex'
	},
	avatar: {
		width: 60,
		height: 60,
		marginTop: 6,
		marginBottom: 20
	},
	user: {
		margin: 10,
		marginLeft: 16,
		marginBottom: 20,
	}
}

const menus = [
	{ text: 'Inicio', url: '/app', icon: <Home /> },
	{ text: 'Capacitación', url: '/capacitacion', icon: <Memory /> },
	{ text: 'Certificación', url: '/certificacion', icon: <CardMembership /> },
	{ text: 'Estudiantes', url: '/estudiantes', icon: <Directionswalk /> },
	{ text: 'Certificados', url: '/estudiantes/certificados', icon: <Directionswalk /> },
	{ text: 'Reprobados', url: '/estudiantes/reprobados', icon: <Directionswalk /> },
	{ text: 'Usuarios', url: '/usuarios', icon: <AccountBox /> },
	{ text: 'Mensajes', url: '/messages', icon: <Message /> },
]

const DrawerApp = ({ user, classes, isDrawer, toggleDrawer }) => (
	<Drawer open={isDrawer} onClose={toggleDrawer}>
		<div
			tabIndex={0}
			role="button"
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
			className={classes.list}
		>
			<div className={classes.user}>
				{ !!user.photo ? (
					<Avatar
						className={classes.avatar}
						alt={user.name}
						src={`${BASE_URL_MEDIA}${user.photo}`}
					/>
				) : (
					<Avatar
						className={classes.avatar}
						alt={user.name}
						src={`${logo}`}
					/>
				)}
				<Typography variant="subtitle1">{user.name}</Typography>
				<Typography variant="caption">{user.email}</Typography>
			</div>
			<Divider />
			<List>
				{ menus.map((item, index) => (
					<Link key={index} to={item.url} className={classes.link}>
						<ListItem button>
							<ListItemIcon>{ item.icon }</ListItemIcon>
							<ListItemText inset primary={item.text} />
						</ListItem>
					</Link>
				)) }
			</List>
		</div>
	</Drawer>
)

const mapStateToProps = state => ({
	user: state.users.me
}) 

export default connect(mapStateToProps)(withStyles(styles)(DrawerApp))
