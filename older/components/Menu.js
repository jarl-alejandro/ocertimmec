import { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon'
import LinkTo from 'next/link'

class Menu extends Component {

	constructor (props) {
		super(props)

		this.state = {
			isActive: false,
			scrollingLock: false
		}

		this.handleActive = this.handleActive.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleActive () {
		this.setState(state => ({
			isActive: !state.isActive
		}))
	}

	handleScroll() {

		if (window.scrollY > 100) {
			this.setState({
				scrollingLock: true
			});
		} else if (window.scrollY < 100) {
			this.setState({
				scrollingLock: false
			});
		}

	}

	render () {
		const { isLandingPage } = this.props
		const active = this.state.isActive ? 'active' : ''
		const sticky = this.state.scrollingLock ? 'sticky': ''

		return (
			<Fragment>
				<header className={`Header ${sticky}`}>
						<nav className="Menu">
							<ul className="Menu-list">
								<Link isLandingPage={isLandingPage} icon="home" link="#inicio" name="Inicio" />
								<Link isLandingPage={isLandingPage} icon="emoji_people" link="#quienes-somos" name="Quienes somos" />
								<Link isLandingPage={isLandingPage} icon="school" link="#pre-universitario" name="Pre Universitario" />
				
								<li className="animation">
									<img src="/static/img/logo.png" className="Header-logo" alt="occertim logo" />
								</li>
				
								<Link isLandingPage={isLandingPage} icon="device_hub" link="#capacitacion-certificacion" name="Capacitacion y certificacion" />
								<Link isLandingPage={isLandingPage} icon="photo_library" link="#galeria" name="Galería" />
								<Link isLandingPage={isLandingPage} icon="location_on" link="#contacto" name="Contactos" />
							</ul>
							<button className="Menu-button" onClick={this.handleActive}>
								<i className="material-icons">menu</i>
							</button>
						</nav>
					</header>

					<div className={`MenuRWD ${active}`}>
						<ul className="MenuRWD-list">
							<Link isLandingPage={isLandingPage} icon="home" link="#inicio" name="Inicio" />
							<Link isLandingPage={isLandingPage} icon="emoji_people" link="#quienes-somos" name="Quienes somos" />
							<Link isLandingPage={isLandingPage} icon="school" link="#pre-universitario" name="Pre Universitario" />

							<Link isLandingPage={isLandingPage} icon="device_hub" link="#capacitacion-certificacion" name="Capacitacion y certificacion" />
							<Link isLandingPage={isLandingPage} icon="photo_library" link="#galeria" name="Galería" />
							<Link isLandingPage={isLandingPage} icon="location_on" link="#contacto" name="Contactos" />
						</ul>
					</div>
					<style jsx global>{`
						.MenuRWD {
							position: fixed;
							top: 0;
							left: 0;
							z-index: 111;
							height: 0;
							width: 100%;
							background: rgba(255,255,255,0.8);
							overflow: hidden;
							transition: all linear .3s;
						}
						.MenuRWD.active {
							height: 100%;
						}
						.MenuRWD-list {
							display: flex;
							flex-wrap: wrap;
							align-items: center;
							align-content: center;
							justify-content: center;
							height: 100%;
						}
						.MenuRWD-list .Menu-item {
							width: 100%;
							text-align: center;
							margin-bottom: 35px;
						}
						.MenuRWD-list .Menu-link {
							display: flex !important;
							color: black;
							justify-content: center;
						}
						.MenuRWD-list .Menu-link span {
							font-size: 35px;
						}
						.animation {
							transform-style: preserve-3d;
							animation: rotate 2s infinite linear;
						}
						@keyframes rotate {
							from {
								transform: rotateY(0deg);
							}
							to {
								transform: rotateY(360deg);
							}
						}
						.Header {
							position: fixed;
							top: 0;
							z-index: 1111;
							width: 100%;
							height: 56px;
							display: flex;
							align-items: center;
							justify-content: flex-end;
							background-color: transparent;
							transition: all ease .3s;
						}

						.Header.sticky {
							box-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.4);
							background-color: #0f4377;
						}
						.Header-logo {
							width: 90px;
							height: 70px;
							margin: 0 3rem;
						}
						.Menu {
							width: 100%;
							display: flex;
							align-items: center;
							align-content: center;
							justify-content: space-around;
						}
						.Menu-list {
							display: flex;
							align-items: center;
							list-style: none;
						}
						.Menu-button {
							display: none;
						}
						@media (max-width: 640px) {
							.Menu-list {
								margin-left: 0;
							}
							.Menu {
								position: relative;
							}
							.Menu-button {
								position: absolute;
								right: 5px;
								display: block;
								background: transparent;
								border: 0;
								outline: none;
							}
							.Menu-button i {
								color: white;
								font-size: 40px;
							}
						}
					`}</style>
			</Fragment>
		)
	}
}

export default Menu

function Link({ link, icon, name, isLandingPage }) {
	let linkComponent = null

	if (isLandingPage) {
		linkComponent = (
			<a href={link} className="Menu-link">
				<Icon>{icon}</Icon>
				<span>{name}</span>
			</a>
		)
	}
	else {
		linkComponent = (
			<LinkTo href={`/${link}`}>
				<a className="Menu-link">
					<Icon>{icon}</Icon>
					<span>{name}</span>
				</a>
			</LinkTo>
		)
	}

	return (
		<li className="Menu-item">
			{linkComponent}
			<style jsx global>{`
				.Menu-item {
					margin: 0 4px;
				}
				.Menu-link {
					position: relative;
					display: flex;
					text-decoration: none;
					align-items: center;
					padding: 5px 10px;
					border-radius: 20px;
					color: white;
					transition: background-color .3s;
				}
				.Menu-link:hover {
					background-color: #0f4377;
				}
				.sticky .Menu-link:hover {
					background-color: #1c89d0;
				}

				.Menu-link span {
					white-space: nowrap;
					margin-left: 4px;
				}
				@media (max-width: 640px) {
					.Menu-link {
						display: none;
					}
				}
			`}</style>
		</li>
	)
}
