import React from 'react';

const DateFormat = ({ date }) => {
	const parserDate = () => {
		if (date) {
			const format = date.split('T')[0].split('-').join('/');
			const parsedDate = new Date(format);
			return `${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;
		}
		return null;
	};

	return (
		<span>
			{parserDate()}
		</span>
	);
};

export default DateFormat;
