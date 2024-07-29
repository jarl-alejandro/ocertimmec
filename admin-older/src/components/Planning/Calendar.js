import React, { PureComponent } from 'react'
import CalendarItem from './CalendarItem'
import './calendar.css'

class Calendar extends PureComponent {

	constructor (props) {
		super(props)
		const year = new Date().getFullYear()

		this.state = {
			start: new Date(`${year}/01/01`),
			finish: new Date(year, 12, 0),
			year: year,
			months: [
				'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
				'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
			],
			days: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
			calendar: [],
		}

	}

	componentDidMount () {
		this.generateCalendar()
	}

	generateCalendar () {
		let { start, finish } = this.state
		let startYear = start.getFullYear()
		let monthsIsYear = this.getMonths(start.getMonth(), finish.getMonth(), startYear)
		this.setState({ calendar: monthsIsYear, year: startYear })
	}

	getMonths (month, lastMonths, year) {
		let months = []

		while (month <= lastMonths) {
			months = months.concat({
				monthIndex: month,
				month: this.state.months[month],
				days: this.getDays(year, month)
			})
			month = month + 1
		}
		return months
	}

	getDays (year, month) {
		let firstDay = new Date(year, month, 1).getDate()
		let lastDay = new Date(year, month + 1, 0).getDate()
		let daysByMonth = []

		if (this.state.start.getMonth() === month && this.state.start.getFullYear() === year) {
			firstDay = this.state.start.getDate()
		}
		if (this.state.finish.getMonth() === month && this.state.finish.getFullYear() === year) {
			lastDay = this.state.finish.getDate()
		}

		for (let i = firstDay; i <= lastDay; i++) {
			let date = this.dateByDay(year, month, i)
			daysByMonth = daysByMonth.concat({ day: date })
		}

		return daysByMonth
	}

	dateByDay (year, month, day) {
		const date = new Date(year, month)
		return new Date(date.setDate(day))
	}

	render () {

		return (
			<section className='DetailCalendar'>
				{ this.state.calendar.map(item => (
					<CalendarItem
						key={item.monthIndex}
						item={item}
						year={this.state.year}
					/>
				))}
			</section>
		)
	}
}

export default Calendar
