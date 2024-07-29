import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerApp from './DrawerApp';
import { styled } from '@mui/material/styles';
import { OCCERTIMM_AUTH_TOKEN, OCCERTIMM_USER_ID } from '../constants';
import usersAction from '../actions/users.action';
import studentAction from '../actions/student.action';
import { useDispatch } from 'react-redux';
import { Box, CssBaseline, Toolbar, Container } from '@mui/material';
import MenuApp from './MenuApp';

const drawerWidth = 240;

const ContainerStyled = styled(Container)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
	flexGrow: 1,
	height: 'calc(100vh - 8rem)',
	overflow: 'auto',
}));

function AppBase({ children }) {
	const [open, setOpen] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) {
			navigate('/');
		} else {
			dispatch(usersAction.fetchMe(localStorage.getItem(OCCERTIMM_USER_ID)));
		}

		dispatch(studentAction.fetchNotificaciones());
	}, [navigate, dispatch]);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<MenuApp openDrawer={open} toggleDrawer={toggleDrawer} />
			<DrawerApp open={open} toggleDrawer={toggleDrawer} />
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
					flexGrow: 1,
					height: 'calc(100vh)',
					overflow: 'auto',
				}}
			>
				<Toolbar />
				<ContainerStyled maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					{children}
				</ContainerStyled>
			</Box>
		</Box>
	);
}

export default AppBase;
