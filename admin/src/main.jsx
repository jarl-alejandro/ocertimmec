import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store'
import Router from "./Router";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiPopover: {
			styleOverrides: {
				paper: {
					maxHeight: 'calc(100vh - 64px)', // Ajusta este valor según sea necesario
					overflowY: 'auto',
				},
			},
		},
	},
});


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store()}>
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	</Provider>
	,
)
