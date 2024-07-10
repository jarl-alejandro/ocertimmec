import { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import config from '../config'
import socketIo from 'socket.io-client'

const initialState = {
	name: '',
	email: '',
	subject: '',
	message: '',
}

class FormContact extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.setField = this.setField.bind(this)
		this.handleSaved = this.handleSaved.bind(this)
	}

	componentDidMount() {
		this.socket = socketIo(config.BASE_URL)
	}

	setField (e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSaved () {
		this.socket.emit('created::Message', this.state)
		this.setState(initialState)
	}

	render () {
		return (
			<div className="Form">
				<h2 className="Form-title">Contacto</h2>
				<TextField
					label="Tu nombre"
					name="name"
					fullWidth
					value={this.state.name}
					onChange={this.setField}
					variant="filled"
					style={{marginTop: 10}}
				/>
				<TextField
					label="Email"
					name="email"
					fullWidth
					value={this.state.email}
					onChange={this.setField}
					variant="filled"
					style={{marginTop: 10}}
				/>
				<TextField
					label="Asunto"
					name="subject"
					fullWidth
					value={this.state.subject}
					onChange={this.setField}
					variant="filled"
					style={{marginTop: 10}}
				/>
				<TextField
					label="Mensaje"
					name="message"
					fullWidth
					multiline
					rows="3"
					value={this.state.message}
					onChange={this.setField}
					variant="filled"
					style={{marginTop: 10}}
				/>
				<div className="action">
					<div className="button" onClick={this.handleSaved}>ENVIAR</div>
				</div>
				<style jsx>{`
					.action {
						display: flex;
						justify-content: center;
						margin-top: 15px
					}
					.Form {
						width: 80%;
						margin: 0 auto;
						height: 100%;
    				color: #0f4377;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						align-content: center;
						justify-content: center;
					}
					.Form-title {
						width: 100%;
						margin-top: 4rem;
						text-align: left;
						font-size: 3rem;
					}
					.button {
						display: block;
						padding: 7px 40px;
						cursor: pointer;
						color: #0f4377;
						border: 2px solid;
						text-decoration: none;
						text-align: center;
						transition: all linear .3s;
						border-radius: 3px;
					}
					.button:hover {
						box-shadow: 0 4px 16px rgba(0, 1, 31, 0.2);
						background-color: #0f4377;
						border-color: #0f4377;
						color: white;
					}
				`}</style>
			</div>
		)
	}
}

export default FormContact
