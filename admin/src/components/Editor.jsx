import React, { useRef, useState } from 'react';
import RichTextEditor from 'react-rte';
import './Editor.css';

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
};

const EditorOccertimm = ({ name, value, onChange, onChangePulse }) => {
	const [format] = useState('html');
	const refEditor = useRef(null);

	const onChangeHandler = (newValue) => {
		onChangePulse(name, newValue);

		if (onChange) {
			onChange(newValue.toString(format));
		}
	};

	return (
		<div>
			<RichTextEditor
				ref={refEditor}
				placeholder="Occertimm....."
				className="Occertimm"
				toolbarClassName="Occertimm-toolbar"
				editorClassName="Occertimm-editor"
				value={value}
				onChange={onChangeHandler}
				toolbarConfig={toolbarConfig}
			/>
		</div>
	);
};

export default EditorOccertimm;
