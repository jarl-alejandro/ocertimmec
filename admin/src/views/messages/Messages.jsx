import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';

import AppBase from '../../components/AppBase';
import TableApp from './TableApp';
import MessageModal from './MessageModal';

import messageAction from '../../actions/message.action';

const Messages = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(messageAction.fetch());
	}, [dispatch]);

	return (
		<AppBase>
			<section>
				<Typography variant="subtitle1" gutterBottom> Occertimm &gt; Mensajes</Typography>
				<TableApp />
			</section>
			<MessageModal />
		</AppBase>
	);
};

export default Messages;
