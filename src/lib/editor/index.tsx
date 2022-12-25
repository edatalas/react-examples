import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";

import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import {$getRoot, EditorState} from "lexical";
import React from "react";
import firebase from "firebase/compat";
import ToolbarPlugin from "./plugins/ToolbarPlugin";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

const theme = {
    // Theme styling goes here
    // ...
    paragraph: "editor-paragraph"
};

function onError(error: Error) {
    console.error(error);
}

function onChange(editorState: EditorState){
    return editorState.read(()=> {
        const root = $getRoot();
        const selection = getSelection();
    })
}

const editorConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ]
};

interface State  {
    onChange(editorState:EditorState): any;
}

const Editor:React.FC<State> = (props) => {
    return(
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin/>
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <OnChangePlugin onChange={props.onChange}/>
                </div>
            </div>
        </LexicalComposer>
    )
}

export default Editor;