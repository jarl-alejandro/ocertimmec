import React from 'react';
import {
    Button,
    ButtonGroup,
    IconButton,
    Tooltip,
    Toolbar,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const EditorToolbar = ({ onBoldClick, onItalicClick, onUnderlineClick, toggleBlockType }) => {
    return (
        <Toolbar>
            <Tooltip title="Bold">
                <IconButton onMouseDown={onBoldClick}>
                    <FormatBoldIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Italic">
                <IconButton onMouseDown={onItalicClick}>
                    <FormatItalicIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Underline">
                <IconButton onMouseDown={onUnderlineClick}>
                    <FormatUnderlinedIcon />
                </IconButton>
            </Tooltip>
            <ButtonGroup variant="contained" aria-label="text formatting">
                <Tooltip title="Bulleted List">
                    <Button onClick={() => toggleBlockType('unordered-list-item')}>
                        <FormatListBulletedIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Numbered List">
                    <Button onClick={() => toggleBlockType('ordered-list-item')}>
                        <FormatListNumberedIcon />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </Toolbar>
    );
};

export default EditorToolbar;
