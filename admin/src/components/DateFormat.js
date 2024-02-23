import React, { PureComponent } from 'react'


class DateFormat extends PureComponent {

	parserDate () {
		if (this.props.date) {
			let format = this.props.date.split('T')[0].split('-').join('/')
			let date = new Date(format)
			return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
		}
		else return null
	}

	render () {
		return (
			<span>
				{ this.parserDate() }
			</span>
		)
	}
}

export default DateFormat
