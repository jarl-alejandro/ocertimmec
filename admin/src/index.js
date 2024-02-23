import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Router from './Router'
import store from './store'
import * as serviceWorker from './serviceWorker';

import './index.css'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#49a0d9',
			main: '#1c89d0',
			dark: '#135f91',
		},
		secondary: {
			light: '#3f6892',
			main: '#0f4377',
			dark: '#0a2e53',
		},
		error: {
			light: '#ff6333',
			main: '#ff3d00',
			dark: '#b22a00',
		},
	},
	typography: {
		useNextVariants: true,
		htmlFontSize: 14,
	},
})

ReactDOM.render(
	<Provider store={store()}>
		<MuiThemeProvider theme={theme}>
		<Router />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
//serviceWorker.register();
