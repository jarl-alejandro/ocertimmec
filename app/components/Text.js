import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const format = 'html'

const Text = ({ value }) => (
	<div>
		{ReactHtmlParser(value) }
	</div>
)

export default Text
