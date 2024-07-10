import { PureComponent } from 'react'
import Button from '@material-ui/core/Button'

class Overlay extends PureComponent {

	constructor (props) {
		super(props)

		this.handleClose = this.handleClose.bind(this)
	}

	handleClose (e) {
		let isOverlay = [...e.target.classList].find(item => item === 'overlay')

		if (isOverlay) {
			this.props.onClick()
		}
	}

	render () {
		const active = this.props.isActive ? 'active' : ''

		return (
			<div
				onClick={this.handleClose}
				className={`overlay ${active}`}
			>
				<section className={`modal ${active}`} style={{ maxHeight: '80%' }}>
					{ this.props.children }
					<div className='modal-action'>
						<Button color="primary" onClick={this.props.onClick}>Cerrar</Button>
						<Button color="primary" onClick={this.props.onSave}>Guardar</Button>
					</div>
				</section>
				<style jsx>{`
					.overlay {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						z-index: 111;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: rgba(0,0,0,0.4);
						visibility: hidden;
						opacity: 0;
						transition: visibility linear .3s,
						opacity linear .3s;
					}
					.overlay.active {
						visibility: visible;
						opacity: 111111;
					}
					.modal {
						background-color: white;
						border-radius: 3px;
						box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24);
						width: 50%;
						max-height: 90%;
						overflow: auto;
						padding: 1rem;
						animation: modalOut 1s forwards;
					}
					.modal.active {
						animation: modalIn 1s forwards;
					}
					.modal-action {
						display: flex;
						justify-content: flex-end;
						margin-top: 1rem;
					}
					button {
						padding: 13px 30px;
						font-weight: 600;
						border: 0;
						border-radius: 7px;
						color: white;
						background-color: #0076ff;
						box-shadow: 0 2px 6px 0 rgba(0,118,255,0.39);
						cursor: pointer;
						outline: none;
						transition: all ease .3s;
					}
					button:hover {
						background: rgba(0,118,255,0.9);
						box-shadow: 0 6px 20px rgba(0,118,255,0.23);
					}
					@media (max-width: 640px) {
						.modal {
							width: 90%;
						}
					}
					@keyframes modalIn {
						0% {
							transform: translateY(-50rem);
						}
						60% {
							transform: translateY(25px);
						}
						75% {
							transform: translateY(-10px);
						}
						90% {
							transform: translateY(5px);
						}
					}
					@keyframes modalOut {
						0% {
							transform: translateY(5px);
						}
						60% {
							transform: translateY(-10px);
						}
						75% {
							transform: translateY(25px);
						}
						100% {
							transform: translateY(-50rem);
						}
					}
				`}</style>
			</div>
		)
	}
}

export default Overlay
