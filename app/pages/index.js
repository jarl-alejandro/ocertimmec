import Page from '../components/Page'
import Home from '../components/Home'
import About from '../components/About'
import PreUniversity from '../components/PreUniversity'

import Contact from '../components/Contact'
import Gallery from '../Gallery'
import CertificationTraining from '../components/CertificationTraining'


const Index = ({ payload }) => (
	<Page isLandingPage={true}>
		<div className="main">
			<Home />
		</div>
		<About />
		<PreUniversity />
		<CertificationTraining />
		<Gallery />
		<Contact />
		<footer>
			<p>© Copyright 2018, Desarrollado por <a href="https://jarl-alejandro.github.io/" target="_blank">Alejandro Rivas</a></p>
		</footer>
		<style jsx>{`
			footer {
				background: black;
				color: white;
				width: 100%;
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			a {
				color: white;
				text-decoration: none;
				transition: all ease .3s;
			}
			a:hover {
				text-decoration: underline;
			}
		`}</style>
	</Page>
)


export default Index
