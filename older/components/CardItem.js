import { Fragment } from 'react'
import Link from 'next/link'
import config from '../config'
import Text from '../components/Text'


const CardItem = ({ item, classes }) => {

	return (
		<Fragment>
			<section className="Card">
				<article className="Card-figure">
					<img className="Card-img" src={`${config.BASE_URL_MEDIA}/${ item.photo }`} />
				</article>

				<article className="Card-content">
					<h2 className="Card-name">{item.name}</h2>
					{ item.type === 'Training' ? (
						<div className="Card-text">
							<Text value={item.content} />
						</div>
					) : (
						<div className="Card-text">
							<Text value={item.competition} />
						</div>
					)}

					{ !!parseInt(item.cost) && (
						<div className="Card-cost">USD$ {parseFloat(item.cost).toFixed(2)}</div>
					) }

					<div className="Card-type">
						{item.type === 'Training' ? 'Capacitación' : 'Certificación'}
					</div>
					<Link href={item.type === 'Training' ? `/capacitacion?id=${item._id}` : `/certificacion?id=${item._id}`}>
						<a className="Card-button">
							{ item.type === 'Training' ? 'Ver Capacitación' : 'Ver Certificación' }
						</a>
					</Link>
				</article>
			</section>
			<style jsx>{`
				.Card {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					align-items: center;
					align-content: center;
					width: 85%;
					margin: 0 auto;
					margin-bottom: 1.5rem;
					color: #0f4377;
					background: white;
					padding: 1.5rem 2rem;
					position: relative;
					border-radius: 1px;
					transition: all ease .3s;
					box-shadow: 1px 1px 8px rgba(92, 92, 92, 0.15),
											-0.5px -0.5px 10px rgba(92, 92, 92, 0.1); 
				}
				.Card:hover {
				}

				.Card::before, .Card::after {
					position: absolute;
				}
				.Card::before {
					border-top: 30px solid #f9f9f9;
					border-right: 30px solid transparent;
					border-bottom: 30px solid transparent;
					border-left: 30px solid #f9f9f9;
					top: 0;
					left: 0;
				}
				.Card::after {
					right: 0;
					bottom: 0;
					border-top: 30px solid transparent;
					border-right: 30px solid #f9f9f9;
					border-bottom: 30px solid #f9f9f9;
					border-left: 30px solid transparent;
				}
				.Card-figure {
					width: 450px;
					height: 420px;
				}
				.Card:nth-child(even) .Card-figure{
					margin-right: 4rem;
				}
				.Card:nth-child(odd) .Card-figure{
					order: 1;
					margin-left: 4rem;
				}
				.Card-img {
					width: 100%;
					height: 100%;
				}
				.Card-name {
					font-size: 35px;
				}
				.Card-text {
					height: 80px;
					overflow: hidden;
					margin: 23px 0;
				}
				.Card-cost {
					font-size: 33px;
				}
				.Card-type {
					background-color: #0f4377;
					color: white;
					border-radius: 3px;
					display: inline;
					padding: 1px 11px;
				}
				.Card-button {
					position: relative;
					top: 10px;
					display: block;
					width: 40%;
					padding: 10px;
					color: #0f4377;
					border: 2px solid;
					text-decoration: none;
					text-align: center;
					transition: all linear .3s;
					border-radius: 3px;
				}
				.Card-button:hover {
					box-shadow: 0 4px 16px rgba(0, 1, 31, 0.2);
					background-color: #0f4377;
					border-color: #0f4377;
					color: white;
				}

				@media (max-width: 480px) {
					.Card {
						grid-template-columns: repeat(1, 1fr);
						margin-bottom: 0;
    				width: 100%;
    				padding: 0 0 1.5rem 0;
						box-shadow: 0 2px 7.5px rgba(0,0,0,.3);
					}
					.Card:nth-child(even) .Card-figure{
						margin-right: 0;
					}
					.Card:nth-child(odd) .Card-figure{
						width: 100%;
						order: 0;
						margin-left: 0;
					}
					.Card-figure {
						width: 300px;
						height: 320px;
						width: 100%;
					}
					.Card-button {
						width: 60%;
						margin: 0 auto;
					}
					.Card-name {
						font-size: 30px;
					}
					.Card-content {
						text-align: center;
					}
					.Card-text {
						display: none;
					}
				}
	
			`}</style>
		</Fragment>
	)
}

export default CardItem
