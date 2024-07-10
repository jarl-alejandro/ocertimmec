const Video = () => (
	<div className="grid-video">
		<div className="cinta"></div>
		<iframe height="600" src="https://www.youtube.com/embed/TlKVyIzp650?modestbranding=1&showinfo=0&rel=0&fs=0&color=white&autohide=0&controls=1&disablekb=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		<iframe height="600" src="https://www.youtube.com/embed/hPXJVzeX-4Y?modestbranding=1&showinfo=0&rel=0&fs=0&color=white&autohide=0&controls=1&disablekb=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

		<style jsx>{`
			iframe {
				width: 100%;
				position: relative;
				z-index: 11;
			}
			.cinta {
				position: absolute;
				width: 100%;
				height: 35rem;
				bottom: -4rem;
				left: 0;
				clip-path: polygon(18% 0, 100% 3%, 100% 20%, 100% 80%, 100% 93%, 15% 100%, 0 91%, 0 9%);
				background-color: #0f4377;
			}
			.grid-video {
				filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.4));
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				margin: 0 auto;
				grid-gap: 0 20px;

				grid-gap: 20px;
				padding: 18px;
				position: relative;
			}
			@media (max-width: 640px) {
				.grid-video {
					display: block;
				}
			}
		`}</style>
	</div>
)


export default Video
