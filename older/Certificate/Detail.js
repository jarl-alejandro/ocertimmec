import { PureComponent, Fragment } from 'react'
import Planning from '../components/Planning'
import Text from '../components/Text'

class Detail extends PureComponent {

	constructor (props) {
		super(props)

		this.state = {
			isActive: false
		}
	}

	componentDidMount () {
		if (typeof window !== 'undefined') {
			this.setState({ isActive: true })
		}
	}

  render() {
    const { payload } = this.props

    return (
      <section className="Course">
        <div className="Course-title--content">
          <h2 className="Course-title">Certificación</h2>
					{!!parseInt(payload.certificate.cost) ? (
						<h3 className="Course-cost">Inversión: ${payload.certificate.cost}</h3>
					) : (
						<h3 className="Course-cost" style={{ visibility: 'hidden', opacity: 0, margin: 0 }}>0</h3>
					)}
        </div>

        <h3 className="Training-title" style={{ marginTop: '1.5rem' }}>Requisitos:</h3>
        <div className="Course-card" style={{ marginBottom: '1.5rem' }}>
					<Text
						value={payload.certificate.requirements}
						className="markdown"
					/>
        </div>

        <h2 className="Course-title complete">Competencias</h2>
        <div className="Course-competition">
          <h3 className="Training-title">General:</h3>
          <div className="Course-card">
            <Text value={payload.certificate.competition} className="markdown" />
          </div>
          <h3 className="Training-title marginTop">Unidades de competencia:</h3>
          <div className="Course-card">
            <Text value={payload.certificate.competitionUnits} className="markdown" />
          </div>
        </div>

        <h3 className="Training-title marginTop">Descripción:</h3>
        <div className="Course-card">
          <Text value={payload.certificate.description} className="markdown" />
        </div>

        <div className="Course-card place marginTop">
          <h3 className="Course-place">
            Lugar de certificación: <span>{payload.certificate.place}</span>
          </h3>
        </div>

				{!!payload.certificate.note && (
					<Fragment>
						<h3 className="Training-title marginTop">Nota:</h3>
						<div className="Course-card">
							<Text value={payload.certificate.note} className="markdown" />
						</div>
					</Fragment>
				)}

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
