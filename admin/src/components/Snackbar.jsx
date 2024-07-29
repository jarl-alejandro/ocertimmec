import React from 'react';
import Snackbar from '@mui/material/Snackbar';

const SnackbarClass = ({ open, text, handleClose }) => {
	const vertical = 'bottom';
	const horizontal = 'right';

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			autoHideDuration={2000}
			onClose={handleClose}
			ContentProps={{
				'aria-describedby': 'message-id',
			}}
			message={<span id="message-id">{text}</span>}
		/>
	);
};

export default SnackbarClass;
