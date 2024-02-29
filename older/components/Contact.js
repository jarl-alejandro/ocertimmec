import ScrollableAnchor from 'react-scrollable-anchor'
import FormContact from './FormContact'

const Contact = () => (
	<ScrollableAnchor id={"contacto"}>
		<section className="Contact">

			<div className="ClipContainer">
				<div className="Clip">
					<Mapa />
				</div>
			</div>

			<div className="Contact-container">
				<Informacion />
				<FormContact />
			</div>

			<style jsx global>{`
				.Clip {
					clip-path: polygon(0 0, 100% 8%, 100% 100%, 0% 100%);
				}
				.ClipContainer {
					height: 60vh;
					background: #f9f9f9;
				}
				.Contact {
					min-height: 100vh;
					background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
					background-size: 28px 28px;
				}
				.Contact-container {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					align-items: center;
					margin: 0 auto;
					width: 75%;
					height: 85vh;
				}
				@media (max-width: 640px) {
					.Contact-container {
						grid-template-columns: repeat(1, 1fr);
						width: 100%;
					}
					.Form {
						order: -1;
					}
					.Direction-text::before, .Direction-text::after {
    				bottom: 20px !important;
					}
				}
			`}</style>
		</section>
	</ScrollableAnchor>
)

export default Contact

const Mapa = () => (
	<div className="Mapa">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7684933874866!2d-79.20324608524665!3d-0.28634769979107816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTcnMTAuOSJTIDc5wrAxMicwMy44Ilc!5e0!3m2!1ses!2sec!4v1537653813884"
			height="400"
			frameBorder="0"
			allowFullScreen
		>
		</iframe>
		<style jsx>{`
			.Mapa {
				overflow: hidden;
			}
			.Mapa iframe {
				width: 100vw;
				overflow: hidden;
			}
		`}</style>
	</div>
)

const Informacion = () => (
	<section className="Informacion">
		<ul className="RedesSocial">
			<li className="RedesSocial-item">
				<span className="Social-item data">
					<i className="icon-location"></i>
				</span>
				<p className="Direction-text">
					Vía Quevedo km 4 1/2, Coop. Unión Cívica, calle 11
				</p>
			</li>
			<li className="RedesSocial-item">
				<span className="Social-item data">
					<i className="icon-mail"></i>
				</span>
				<p>occertimm@gmail.com</p>
			</li>
			<li className="RedesSocial-item">
				<span className="Social-item data">
					<i className="icon-mobile"></i>
				</span>
				<p>023766135</p>
			</li>
			<li className="RedesSocial-item">
				<span className="Social-item data">
					<i className="icon-mobile"></i>
				</span>
				<p>0989231482</p>
			</li>
			<li className="RedesSocial-item">
				<span className="Social-item data">
					<i className="icon-phone"></i>
				</span>
				<p>0997877988</p>
			</li>

			<li className="SocialNetWork">
				<a href="https://www.facebook.com/occertimmec/" className="Social-item facebook" target="_blank">
					<i className="icon-facebook2"></i>
				</a>
				<a href="https://www.facebook.com/occertimmec/" className="Social-item twitter" target="_blank">
					<i className="icon-twitter"></i>
				</a>
				<a href="https://www.facebook.com/occertimmec/" className="Social-item instagram" target="_blank">
					<i className="icon-instagram"></i>
				</a>
			</li>
		</ul>
		<style jsx>{`
			.Informacion {
				height: 100%;

				display: flex;
				align-items: center;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
			}
			.RedesSocial {
				padding: 1rem;
				color: white;
				list-style: none;
			}
			.RedesSocial-item {
				display: flex;
				align-items: center;
				margin: 1rem 0;
				white-space: nowrap;
			}
			.RedesSocial-item p {
				background-color: #0f4377;
				padding: 5px 10px;
				border-radius: 40px;
				position: relative;
			}
			.RedesSocial-item p::before, .RedesSocial-item p::after  {
				content: "";
				bottom: 8px;
				left: -10px;
				border: solid transparent;
				height: 0;
				width: 0;
				position: absolute;
				pointer-events: none;
				border-color: rgba(255,255,255,0);
				border-bottom-color: #0f4377;
				border-width: 10px;
				margin-left: -7px;
				transform: rotate(271deg);
			}
			.RedesSocial-item p::before {
				border-bottom-color: rgba(0, 0, 0, 0.1);
				border-width: 8px;
				margin-left: -8px;
			}
			.SocialNetWork {
				display: flex;
				padding: 1rem;
				padding-left: 0;
			}
			.Social-item {
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
			.Social-item:hover {
				transform: scale(1.3);
				color: white;
			}
			.Social-item.data {
				margin-right: 12px;
			}
			.Social-item.facebook:hover { background-color: #3a5897; }
			.Social-item.twitter:hover { background-color: #55aced; }
			.Social-item.instagram:hover { background-color: #cd337e; }
			.Social-item.whatsapp:hover { background-color: #009688; }
			.Social-item.data:hover { background-color: #0f4377; }
		`}</style>
	</section>
)
