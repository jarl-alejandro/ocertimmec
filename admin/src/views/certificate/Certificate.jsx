import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Form from './Form';
import Planning from '../../components/Planning/Planning';

import certificateAction from '../../actions/certificate.action';

const Certificate = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(certificateAction.fetchCertificate());
	}, [dispatch]);

	const toggleForm = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<AppBase>
			<Box sx={{ width: '90%', margin: '0 auto' }}>
				<Typography variant="subtitle1">Occertimm &gt; Certificación</Typography>
				<TableApp toggleForm={toggleForm} />
			</Box>
			<Button
				variant="contained"
				color="secondary"
				aria-label="Add"
				sx={{
					position: 'fixed',
					right: '1rem',
					bottom: 16,
				}}
				onClick={toggleForm}
			>
				<AddIcon />
			</Button>
			{isOpen && (
				<Form isOpen={isOpen} toggleForm={toggleForm} />
			)}
			<Planning />
		</AppBase>
	);
};

export default Certificate;
