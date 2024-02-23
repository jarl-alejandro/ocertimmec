import ScrollableAnchor from 'react-scrollable-anchor'
import { Fragment } from 'react'
import Slider from './Slider'

// <img src="/static/img/logo1.jpeg" className="Logo1" />
const Logo = () => (
	<Fragment>
		<i className="material-icons Logo-icon">school</i>
		<h1 className="Logo-title">OCCERTIMM</h1>
		<p className="Logo-text">EL ÉXITO DEPENDE DE TI</p>

		<ul className="Social">
			<li className="Social-item facebook">
				<a href="https://www.facebook.com/occertimmec/" target="_blank">
					<i className="icon-facebook2"></i>
				</a>
			</li>
			<li className="Social-item twitter">
				<a href="https://www.facebook.com/occertimmec/" target="_blank">
					<i className="icon-twitter"></i>
				</a>
			</li>
			<li className="Social-item whatsapp">
				<a href="https://www.facebook.com/occertimmec/" target="_blank">
					<i className="icon-whatsapp"></i>
				</a>
			</li>
			<li className="Social-item instagram">
				<a href="https://www.facebook.com/occertimmec/" target="_blank">
					<i className="icon-instagram"></i>
				</a>
			</li>
		</ul>

		<style jsx>{`
			.Social {
				display: flex;
				justify-content: center;
				width: 100%;
				position: relative;
				top: 2rem;
				list-style: none;
			}
			.Social-item a {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 18px;
				color: #282d31;
				background: #dfe0e0;
				text-decoration: none;
				border-radius: 50%;
				transition: all .3s;
			}
			.Social-item a:hover {
				transform: scale(1.3);
				color: white;
			}
			.Social-item.facebook a:hover { background-color: #3a5897; }
			.Social-item.twitter a:hover { background-color: #55aced; }
			.Social-item.instagram a:hover { background-color: #cd337e; }
			.Social-item.whatsapp a:hover { background-color: #009688; }
			.Social-item i {
				font-size: 16px;
				color: inherit;
			}
			.Logo1 {
				width: 50px;
				height: 50px;
			}
			.Logo-icon {
				font-size: 3.2rem;
				color: white;
			}
			.Logo-title {
				width: 100%;
				text-align: center;
				font-size: 5rem;
			}
			.Logo-text {
				font-size: 1.1rem;
				font-weight: 400;
				position: relative;
				font-style: italic;
			}
			.Logo-text::before, .Logo-text::after {
				content: "";
				position: absolute;
				display: block;
				width: 30%;
				height: 4.5px;
				top: 40%;
				background-color: white;
			}
			.Logo-text::before {
				left: -35%;
			}
			.Logo-text::after {
				right: -35%;
			}
			@media (max-width: 640px) {
				.Logo-title {
					font-size: 3.5rem;
				}
			}
		`}</style>
	</Fragment>
)

const Home = () => (
	<ScrollableAnchor id={"inicio"}>
		<section className="Home">
			<Slider />
			<div className="Home-container">
				<Logo />
				<a href="#quienes-somos" className="Home-next">
					<i className="material-icons">keyboard_arrow_down</i>
				</a>
			</div>
			<style jsx>{`
				.Home {
					position: relative;
					width: 100%;
					min-height: 100vh;
					padding-top: 60px;
					overflow: hidden;
					background-color: white;
					clip-path: polygon(0 0,100% 0,100% 95vh,0 100%);
				}
				.Home-container {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					align-content: center;
					background-color: rgba(0,0,0,0.5);
					color: white;
				}
				.Home-next {
					position: absolute;
					bottom: 25px;
					color: white;
					animation: arrow 1s alternate infinite;
				}
				.Home-next i {
					font-size: 4rem;
					font-weight: 300;
				}
				.Home-photo {
					width: 100%;
					height: calc(100vh - 60px);
				}
				@keyframes arrow {
					to {
						transform: translateY(-1rem);
					}
				}
			`}</style>
		</section>
	</ScrollableAnchor>
)

export default Home
