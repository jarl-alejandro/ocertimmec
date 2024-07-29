import React, { useEffect, useState } from 'react';
import CalendarItem from './CalendarItem';
import './calendar.css';

const Calendar = () => {
	const [calendar, setCalendar] = useState([]);
	const [year, setYear] = useState(new Date().getFullYear());
	const months = [
		'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
		'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
	];
	const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

	useEffect(() => {
		const start = new Date(`${year}/01/01`);
		const finish = new Date(year, 12, 0);
		generateCalendar(start, finish, year);
	}, [year]);

	const generateCalendar = (start, finish, startYear) => {
		const monthsIsYear = getMonths(start.getMonth(), finish.getMonth(), startYear);
		setCalendar(monthsIsYear);
		setYear(startYear);
	};

	const getMonths = (month, lastMonths, year) => {
		let monthsList = [];
		while (month <= lastMonths) {
			monthsList = monthsList.concat({
				monthIndex: month,
				month: months[month],
				days: getDays(year, month)
			});
			month += 1;
		}
		return monthsList;
	};

	const getDays = (year, month) => {
		let firstDay = new Date(year, month, 1).getDate();
		let lastDay = new Date(year, month + 1, 0).getDate();
		let daysByMonth = [];

		for (let i = firstDay; i <= lastDay; i++) {
			let date = dateByDay(year, month, i);
			daysByMonth = daysByMonth.concat({ day: date });
		}

		return daysByMonth;
	};

	const dateByDay = (year, month, day) => {
		const date = new Date(year, month);
		return new Date(date.setDate(day));
	};

	return (
		<section className='DetailCalendar'>
			{calendar.map(item => (
				<CalendarItem
					key={item.monthIndex}
					item={item}
					year={year}
				/>
			))}
		</section>
	);
};

export default Calendar;
