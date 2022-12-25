import { $isCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $isListNode, ListNode } from '@lexical/list';
import { $isHeadingNode } from '@lexical/rich-text';
import {
    $getSelectionStyleValueForProperty,
    $isParentElementRTL,
    $patchStyleText,
} from '@lexical/selection';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
    $getSelection,
    $isRangeSelection,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    COMMAND_PRIORITY_CRITICAL,
    SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { getSelectedNode } from './toolbarPlugin/utils/node.util';
import editorContext from './toolbarPlugin/context/editorContext';
import ToolbarContext from './toolbarPlugin/context/toolbarContext';
//import AlignDropdown from './components/AlignDropdown';
import InsertDropdown from "./toolbarPlugin/components/InsertDropdown";
//import './ToolbarPlugin.css';
import UndoButton from './toolbarPlugin/components/UndoButton';
//import RedoButton from './components/RedoButton';
//import CodeLanguageDropdown from './components/CodeLanguageDropdown';
//import BlockFormatDropdown from './components/BlockFormatDropdown';
//import Divider from '../../ui/Divider';
import * as React from 'react';
import DropDown from "../../../ui/DropDown";
import useChild from 'use-child';


const supportedBlockTypes = new Set([
    'paragraph',
    'quote',
    'code',
    'h1',
    'h2',
    'h3',
    'bullet',
    'number',
    'check',
]);


const CODE_LANGUAGE_MAP = {
    javascript: 'js',
    md: 'markdown',
    plaintext: 'plain',
    python: 'py',
    text: 'plain',
};

interface IToolbarProps {
    children?: React.ReactElement | React.ReactElement[];
    defaultFontSize?: string /** The default selected font size in the toolbar */;
    defaultFontColor?: string /** The default selected font color in the toolbar */;
    defaultBgColor?: string /** The default selected background color in the toolbar */;
    defaultFontFamily?: string /** The default selected font family in the toolbar */;
}


const ToolbarPlugin = ({
                           children,
                           defaultFontSize = '15px',
                           defaultFontColor = '#000',
                           defaultBgColor = '#fff',
                           defaultFontFamily = 'Arial',
                       }: IToolbarProps) => {
    // @ts-ignore
    const [insertExists, InsertComponent] = useChild(children, InsertDropdown);


    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [isRTL, setIsRTL] = useState(false);
    const [fontSize, setFontSize] = useState<string>(defaultFontSize);
    const [fontColor, setFontColor] = useState<string>(defaultFontColor);
    const [fontFamily, setFontFamily] = useState<string>(defaultFontFamily);
    const [bgColor, setBgColor] = useState<string>(defaultBgColor);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isCode, setIsCode] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [isSubscript, setIsSubscript] = useState(false);
    const [isSuperscript, setIsSuperscript] = useState(false);
    const [selectedElementKey, setSelectedElementKey] =useState<string>('');
    const [codeLanguage, setCodeLanguage] = useState<string>('');
    const [blockType, setBlockType] = useState('paragraph');


    const applyStyleText = useCallback(
        (styles: Record<string, string>) => {
        },
        []
    );

    const insertLink = useCallback(() => {
        if (!isLink) {
        } else {
        }
    }, []);


    return (
        <ToolbarContext.Provider
        value={{
            isRTL,
            canUndo,
            canRedo,
            fontFamily,
            fontSize,
            fontColor,
            bgColor,
            isBold,
            isItalic,
            isUnderline,
            isCode,
            isLink,
            applyStyleText,
            insertLink,
            isStrikethrough,
            isSubscript,
            isSuperscript,
            selectedElementKey,
            codeLanguage,
            blockType,
        }}>
            <div className="toolbar">
                <UndoButton/>
            </div>
        </ToolbarContext.Provider>
    )
}

export default ToolbarPlugin