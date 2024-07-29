import React, { Component, createRef } from 'react'
import RichTextEditor from 'react-rte'
import './Editor.css'

const toolbarConfig = {
	display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
	INLINE_STYLE_BUTTONS: [
		{ label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
		{ label: 'Italic', style: 'ITALIC' },
		{ label: 'Underline', style: 'UNDERLINE' }
	],
	BLOCK_TYPE_DROPDOWN: [
		{ label: 'Normal', style: 'unstyled' },
		{ label: 'Grande', style: 'header-one' },
		{ label: 'Mediano', style: 'header-two' },
		{ label: 'Pequeño', style: 'header-three' }
	],
	BLOCK_TYPE_BUTTONS: [
		{ label: 'UL', style: 'unordered-list-item' },
		{ label: 'OL', style: 'ordered-list-item' }
	]
}

class EditorOccertimm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			format: 'html',
			value: RichTextEditor.createEmptyValue()
		}

		this.refEditor = createRef()
		this.onChange = this.onChange.bind(this)
	}

	onChange(value) {
		this.props.onChangePulse(this.props.name, value)

		if (this.props.onChange) {
			this.props.onChange(value.toString(this.state.format))
		}
	}

	render () {
		return (
			<div>
				<RichTextEditor
					ref={this.refEditor}
					placeholder="Occertimm....."
					className="Occertimm"
					toolbarClassName="Occertimm-toolbar"
					editorClassName={`Occertimm-editor`}
					value={this.props.value}
					onChange={this.onChange}
					toolbarConfig={toolbarConfig}
				/>
			</div>
		)
	}

}

export default EditorOccertimm
