import { PureComponent } from 'react'

const MONTH = [
	'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
	'Julio', 'Agosto', 'Septiempre', 'Octubre', 'Noviembre', 'Diciembre'
]

const DAY = [
	'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
]

class Planning extends PureComponent {

	parserDate (date) {
		date = new Date(date)
		return `${ DAY[date.getDay()] } ${date.getDate()} de ${MONTH[date.getMonth()]} del ${date.getFullYear()}`
	}

	render () {
		const { planning } = this.props

		return (
			<section>
				<h3 className="Training-title marginTop">Planificación:</h3>

				{ planning.map((item, index) => (
					<article key={index} style={{ marginTop: '10px' }}>
						<p className="Planning-date">Fecha: { this.parserDate(item.date) }</p>

						{ item.hour.map((item, index) => (
							<div key={index}>Horario de: { item }</div>
						)) }
					</article>
				)) }
			</section>
		)
	}
}

export default Planning
