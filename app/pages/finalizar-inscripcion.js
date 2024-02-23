import React, { Component } from 'react'
import { withRouter } from 'next/router'


import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import Form from '../components/Inscription/Form'
import config from '../config'

class Finish extends Component {

	render () {
		return (
			<Page isLandingPage={false}>
				<div className="layout">
					<Form inscripcionId={this.props.course._id} />
				</div>
				<style jsx global>{`
						.Header {
							box-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.4);
							background-color: #0f4377;
						}
					.layout {
						margin-top: 90px;
						color: #0f4377;
					}

					.TableForm {
						width: 90%;
						margin: 0 auto;
					}
					.TableForm-card {
						background-color: white;
						box-shadow: 0 0 3px rgba(0,0,0,0.06), 0 2px 3px rgba(0,0,0,0.1);
						border-radius: 5px;
						padding: 1rem;
						margin-bottom: 1rem;
					}
					.TableForm-title {
						text-transform: uppercase;
					}

					.table-container {
						overflow-x: auto;
						border: 1px solid #dfe0e0;
						margin-top: 1em;
						min-width: 100%;
						position: relative;
						table-layout: fixed;
					}
					.table-title {
						background: #1c89d0;
						color: white;
						padding-left: 10px;
						border-bottom: 0.5px solid rgba(255,255,255,0.2);
					}
					select {
						padding: 0.7rem 0;
						outline: none;
						border: 1px solid #fff;
						background-color: transparent;
						width: 100%;
					}
					table {
						table-layout: fixed;
						border-collapse: collapse;
						font-size: .875rem;
						background: #fff;
						min-width: 100%;
					}
					table tr {
						border-bottom: 1px solid rgb(28, 137, 208, 0.2);
					}
					table th { padding: 1em 1.5em; }
					.table-text { padding: 0.4em 1.5em; }
					table th {
						text-align: left;
						color: #fff;
						font-weight: 700;
						border-right: 1px solid hsla(0,0%,100%,.2);
					}
					table th {
						background: #1c89d0;
					}
					table td:nth-child(1n) {
						border-right: 1px solid rgb(28,137,208,0.2);
					}
					table td {
						min-width: 100px;
						border-right: 1px solid hsla(0,0%,100%,.2);
					}
					input {
						width: 100%;
						height: 2.5rem;
						border: 0;
						outline-color: #1c89d0;
						padding-left: 5px;
					}
					button {
						width: 10rem;
						padding: 13px 30px;
						margin: 0.5rem 0;
						font-weight: 600;
						border: 0;
						border-radius: 7px;
						color: white;
						background-color: #0076ff;
						box-shadow: 0 2px 6px 0 rgba(0,118,255,0.39);
						cursor: pointer;
						outline: none;
						transition: all ease .3s;
					}
					button:hover {
						background: rgba(0,118,255,0.9);
						box-shadow: 0 6px 20px rgba(0,118,255,0.23);
					}
				`}</style>
			</Page>
		)
	}
}

Finish.getInitialProps = async function (context) {
	const { id } = context.query
	const response = await fetch(`${config.BASE_URL}/inscription/${id}`)
	const payload = await response.json()

		return {
			course: payload
		}

}

export default withRouter(Finish)
