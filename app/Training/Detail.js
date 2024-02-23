import { PureComponent, Fragment } from 'react'
import Planning from '../components/Planning'
import Text from '../components/Text'

class Detail extends PureComponent {

  render() {
		const { payload } = this.props

    return (
      <section className="Course">
				<div className="Course-title--content">
					<h2 className="Course-title">Capacitación</h2>
					<h3 className="Course-cost">USD$ {payload.training.cost}</h3>
				</div>
				<h3 className="Training-title">Contenido:</h3>
				<div className="Course-card">
					<Text value={payload.training.content} />
				</div>

				<h3 className="Training-title marginTop">Incluye:</h3>
				<div className="Course-card">
					<Text value={payload.training.materials} className="markdown" />
				</div>

				<div className="Course-card place marginTop">
					<h3 className="Course-place">
						Lugar de capacitación: <span>{payload.training.place}</span>
					</h3>
				</div>
				{ !!payload.planning.length && (
					<Planning planning={payload.planning} />
				) }
				<style jsx global>{`
					.Training-title {
						margin: 0 0 16px 0;
						font-size: 28px;
						font-weight: 600;
					}
					.Course-place {
						margin: 0;
						font-size: 28px;
						font-weight: 600;
					}
					.Course-place span {
						font-weight: 500;
						font-size: 20px;
						display: block;
					}
					.marginTop {
						margin-top: 2rem;
					}
					.Course {
						color: #1f1f1f;
						width: 70%;
						margin-left: 11%;
						font-size: 16.5px;
						line-height: 39.9px;
					}
					.Course-cost {
						font-size: 25px;
						margin-bottom: 2.5rem;
						margin-top: 5px;
						color: #0f4377;
					}
					.Course-competition {
						margin-left: 10px;
					}
					.Course-title {
						width: 100%;
						margin-top: 2.5rem;
						font-size: 35px;
					}
					.Course-title.complete {
						margin: 2rem 0;
					}
					.Course-title--content {
						position: relative;
						padding: 0 0 0 2rem;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
					}
					.Course-title--content:before {
						content: "";
						height: 70%;
						width: 6px;
						border-radius: 5px;
						background: #0f4377;
						position: absolute;
						left: 0;
						margin-right: 2rem;
					}
				`}</style>
      </section>
    )
  }
}

export default Detail
