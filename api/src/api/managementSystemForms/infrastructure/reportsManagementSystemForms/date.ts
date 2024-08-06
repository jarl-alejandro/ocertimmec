export default function datePlus (dateParama, day = 1, fechaAplicacion?: Date) {
	let date = dateParama || fechaAplicacion;
	if (date) {
		let format = JSON.stringify(date)
		format = format.split('T')[0].split('-').join('/')
		date = new Date(format)

		date = new Date(format)

		for (let i = 1; i <= day; i++) {
			date.setDate(date.getDate() - 1)

			if (date.getDay() === 6 || date.getDay() === 0) {
				date.setDate(date.getDate() - 1)
			}
		}


		return date
	}

	else return new Date();
}
