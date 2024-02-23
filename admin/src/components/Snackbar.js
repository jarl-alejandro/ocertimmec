import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class SnackbarClass extends React.Component {

	state = {
		open: false,
		vertical: 'bottom',
		horizontal: 'right',
	};

	render() {
		const { vertical, horizontal } = this.state;
		const { open, text, handleClose } = this.props

		return (
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{ text }</span>}
			/>
		)
	}
}

export default SnackbarClass;
