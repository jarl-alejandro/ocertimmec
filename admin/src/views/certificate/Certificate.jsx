import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import Form from './Form';
import Planning from '../../components/Planning';

import certificateAction from '../../actions/certificate.action';

const Certificate = ({ fetch, classes }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		fetch();
	}, [fetch]);

	const toggleForm = () => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	};

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom>Occertimm &gt; Certificación</Typography>
				<TableApp toggleForm={toggleForm} />
			</section>
			<Button
				variant="fab"
				color="secondary"
				aria-label="Add"
				className={classes.button}
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

const mapDispatchToProps = dispatch => ({
	fetch() {
		dispatch(certificateAction.fetchCertificate());
	}
});

export default connect(null, mapDispatchToProps)(Certificate);
