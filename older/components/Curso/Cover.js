
// <header className="Cover" style={{ backgroundImage: `url()` }}>

const Cover = ({ image, name }) => (
	<header className="Cover" style={{ backgroundImage: `url(${image})` }}>
		<h1
			className="Cover-name"
			style={name.length >= 40 ? { fontSize: 40 } : {} }
		>
			{ name }
		</h1>
		<style jsx>{`
			.Cover {
				position: relative;
				width: 100%;
				padding: 2rem 1rem;
				margin-bottom: 3rem;
				border-bottom: 1px solid #dfe0e0;
				background: #f6f6f6;

				height: 400px;
				background-size: cover;
				background-position: center;
			}
			.Cover::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(29, 29, 29, 0.65);
			}
			
			.Cover-name {
				position: absolute;
				bottom: 1rem;
				left: 0;
				color: white;
				background: rgba(0,0,0,0.7);
				font-size: 50px;
				padding: .5rem 1.5rem;
				z-index: 11;
			}
		`}</style>
	</header>
)

export default Cover
