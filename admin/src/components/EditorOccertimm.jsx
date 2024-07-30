import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'draft-js/dist/Draft.css';
import './Editor.css';
import getDefaultKeyBinding from "draft-js/lib/getDefaultKeyBinding.js";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import EditorToolbar from "./EditorToolbar.jsx";

const EditorOccertimm = ({ name, value, onChange, onChangePulse }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (value && isLoading) {
            const contentState = convertHTMLToContentState(value);
            setEditorState(EditorState.createWithContent(contentState));
            setLoading(false);
        }
    }, [value, isLoading]);

    const handleEditorChange = (state) => {
        setEditorState(state);
        const html = stateToHTML(state.getCurrentContent());
        onChangePulse(name, html);
        if (onChange) {
            onChange(html);
        }
    };

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleEditorChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const keyBindingFn = (e) => {
        if (e.keyCode === 9) { // Tab key
            return 'tab';
        }
        return getDefaultKeyBinding(e);
    };

    const onBoldClick = () => {
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const onItalicClick = () => {
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const onUnderlineClick = () => {
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };

    const convertHTMLToContentState = (html) => {
        // Implement a basic HTML to Draft.js conversion
        // This example assumes a simplified conversion
        // For complex HTML, consider using an external library
        const blocksFromHTML = convertHTMLToBlocks(html);
        return convertFromRaw({
            blocks: blocksFromHTML,
            entityMap: {}
        });
    };

    const toggleBlockType = (blockType) => {
        handleEditorChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    const convertHTMLToBlocks = (html) => {
        // Basic implementation for converting HTML to Draft.js blocks
        // More complex cases may require additional parsing
        const div = document.createElement('div');
        div.innerHTML = html;

        const blocks = [];
        Array.from(div.childNodes).forEach((node, index) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const text = node.textContent || '';
                blocks.push({
                    key: `${index}`,
                    text,
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                });
            }
        });
        return blocks;
    };

    return (
        <div>
            <EditorToolbar
                onBoldClick={onBoldClick}
                onItalicClick={onItalicClick}
                onUnderlineClick={onUnderlineClick}
                toggleBlockType={toggleBlockType}
            />
            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={keyBindingFn}
                onChange={handleEditorChange}
                placeholder="Occertimm....."
                className="EditorOccertimm"
            />
        </div>
    );
};

export default EditorOccertimm;




/*
import React, { useState } from 'react';
import ReactQuill from 'react-quill-2';
import 'react-quill-2/dist/quill.snow.css';
import './Editor.css';

const EditorOccertimm = ({ name, value, onChange, onChangePulse }) => {
    const [editorValue, setEditorValue] = useState(value);

    const onChangeHandler = (newValue) => {
        setEditorValue(newValue);
        onChangePulse(name, newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div>
            <ReactQuill
                value={editorValue}
                onChange={onChangeHandler}
                placeholder="Occertimm....."
                className="Occertimm"
            />
        </div>
    );
};

export default EditorOccertimm;


 */