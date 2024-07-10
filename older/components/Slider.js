const Slider = () => (
	<ul className="cb-slideshow">
		<li><span>Image 01</span></li>
		<li><span>Image 02</span></li>
		<li><span>Image 03</span></li>
		<style jsx>{`
			.cb-slideshow li span {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0px;
				left: 0px;
				background-size: cover;
				background-position: 50% 50%;
				background-repeat: none;
				opacity: 0;
				z-index: 0;
				animation: imageAnimation 12s linear infinite 0s;
			}
			.cb-slideshow li:nth-child(1) span {
				background-image: url('/static/img/slider1.jpg')
			}
			.cb-slideshow li:nth-child(2) span {
				background-image: url('/static/img/slider2.jpg');
				animation-delay: 6s;
			}
			.cb-slideshow li:nth-child(3) span {
				background-image: url('/static/img/slider3.jpg');
				animation-delay: 12s;
			}

			@keyframes imageAnimation { 
				0% {
					opacity: 0;
					animation-timing-function: ease-in;
				}
				8% {
					opacity: 1;
					transform: scale(1.05);
					animation-timing-function: ease-out;
				}
				17% {
					opacity: 1;
					transform: scale(1.1) rotate(3deg);
				}
				25% {
					opacity: 0.7;
					transform: scale(1.1) rotate(3deg);
				}
				100% { opacity: 0.9 }
			}
		`}</style>
	</ul>
)

export default Slider
