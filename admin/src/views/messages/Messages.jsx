import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Typography from '@mui/material/Typography';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import MessageModal from './MessageModal';

import messageAction from '../../actions/message.action';

const Messages = ({ classes, fetch }) => {
	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<AppBase>
			<section className={classes.tableApp}>
				<Typography variant="subtitle1" gutterBottom> Occertimm &gt; Mensajes</Typography>
				<TableApp />
			</section>
			<MessageModal />
		</AppBase>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetch: () => dispatch(messageAction.fetch()),
});

export default connect(null, mapDispatchToProps)(Messages);
