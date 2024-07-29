import React from 'react';
import { useDispatch } from 'react-redux';
import planningActions from '../../actions/planning.action';

const PlanningItem = ({ item }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(planningActions.selectedDay(item));
	};

	return (
		<li className='CalendarMonth-item day' onClick={handleClick}>
			{item.getDate()}
		</li>
	);
};

export default PlanningItem;
