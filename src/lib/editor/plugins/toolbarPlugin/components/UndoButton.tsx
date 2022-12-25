import * as React from 'react';
import { useContext } from 'react';
import ToolbarContext from '../context/toolbarContext';
import { UNDO_COMMAND } from 'lexical';
import editorContext from "../context/editorContext";


const UndoButton = () => {
    return (
        <button
            onClick={() => {
            }}
            className="toolbar-item spaced"
            type="button"
        >
            <i className="format undo" />
        </button>
    );
};

export default UndoButton;