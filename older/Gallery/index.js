import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import data from './data'

class Gallery extends Component {

	render () {
		return (
			<section>
				<ScrollableAnchor id={"galeria"}>
					<section className="Gallery-container">
						<h2 className="title">Galería</h2>
						<section className="Gallery" id="gallery">
							{
								data.map((item, index) => (
									<article key={index} className={`Gallery-item ${item.className}`}>
										<LazyLoadImage
											alt="Galeria"
											src={`/static/gallery/${item.img}`}
										/>
									</article>
								))
							}
						</section>
						<style jsx>{`
								.title {
									text-align: center;
									font-size: 42px;
									text-transform: uppercase;
									line-height: 1.17;
									margin-bottom: 25px;
									padding-top: 50px;
									color: #0f4377;
								}
								.Gallery-container {
									background: #f9f9f9;
									padding: 2rem 0.5rem;
									clip-path: polygon(0px 4.38rem, 100% 0px, 100% calc(100% + 0.13rem), 0px calc(100% + 0.13rem));
								}

								.Gallery {
									width: 90%;
									margin: 0 auto;
									display: grid;
									grid-gap: 15px;
									grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
									grid-auto-rows: 150px;
									grid-auto-flow: row dense;

								}
								.Gallery-item {
									position: relative;
									display: flex;
									flex-direction: column;
									justify-content: flex-end;
									box-sizing: border-box;
									background: #0f4377;
									color: #fff;
									grid-column-start: auto;
									grid-row-start: auto;
									color: #fff;
									background-size: cover;
									background-position: center;
									box-shadow: -2px 2px 10px 0px rgba(0,0,0, 0.3);
									transition: transform 0.3s ease-in-out;
									cursor: pointer;
									counter-increment: item-counter;

									cursor: pointer;
									overflow: hidden;
								}
								.Gallery-item img:hover {
									transform-origin: 50% 50% 0px;
									transform: scale(1.05);
								}

								.item--medium {
									grid-row-end: span 2;
								}
								.item--large {
									grid-row-end: span 3;
								}
								.item--full {
									grid-column-end: auto;
								}
								.item--medium-column {
									grid-column-end: span 2;
								}

								img {
									width: 100%;
									height: 100%;
									transition: all .6s ease;
									max-width: 100%;
									display: block;
								}
						`}</style>
					</section>
				</ScrollableAnchor>
			</section>
		)
	}
}

export default Gallery

