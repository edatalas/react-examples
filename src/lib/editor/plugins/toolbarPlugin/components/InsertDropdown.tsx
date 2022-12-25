import React, { useState, useCallback, useContext } from 'react';
import { $getRoot, LexicalEditor, RangeSelection } from 'lexical';

//import DropDown from '../../../ui/DropDown';
//import Button from '../../../ui/Button';
//import TextInput from '../../../ui/TextInput';
//import FileInput from '../../../ui/FileInput';

//import type { InsertImagePayload } from '../../ImagesPlugin';
//import ImagesPlugin, { INSERT_IMAGE_COMMAND } from '../../ImagesPlugin';

import { INSERT_TABLE_COMMAND } from '@lexical/table';
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode';
const YOUTUBE_ID_PARSER =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;


export interface IInsertDropdownProps {
    enableTable?: boolean;
    enableYoutube?: boolean;
    enableTwitter?: boolean;
    enablePoll?: boolean;
    enableImage?: boolean;
    enableEquations?: boolean;
    enableExcalidraw?: boolean;
    enableHorizontalRule?: boolean;
    enableStickyNote?: boolean;
}

const InsertDropdown: React.FC<IInsertDropdownProps> = ({
                                                            enableTable = true,
                                                            enableImage = true,
                                                            enableYoutube = false,
                                                            enableTwitter = false,
                                                            enablePoll = false,
                                                            enableEquations = false,
                                                            enableExcalidraw = false,
                                                            enableHorizontalRule = false,
                                                            enableStickyNote = false,
                                                        }: IInsertDropdownProps) => {
    return(
        <></>
    )
}

export default InsertDropdown;
