function Company () {
	return (
		<section className="Company">
			<img className="Company-img" src='/static/img/anes.jpeg'  style={{ width:	'130px' }} />
			<img className="Company-img" src='/static/img/ingauto.png' style={{ width:	'280px' }} />
			<img className="Company-img" src='/static/img/setec.png' />
			<img className="Company-img" src='/static/img/senescyt.png' />
			<img className="Company-img" src='/static/img/comercio.jpeg' style={{ width: '170px', height: '140px' }} />
			<img className="Company-img" src='/static/img/aecap.jpg' style={{ width: '260px', height: '200px', marginTop: '-31px' }} />

			<style>{`
				.Company {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					margin-top: 5rem;
				}
				.Company-img {
					width: 210px;
					height: 125px;
				}
			`}</style>
		</section>
	)
}

export default Company
