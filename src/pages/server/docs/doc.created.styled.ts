import styled from "styled-components";

import iconChevronDown from "../../../lib/editor/plugins/toolbarPlugin/images/icons/chevron-down.svg"
import iconParagraph from "../../../lib/editor/plugins/toolbarPlugin/images/icons/text-paragraph.svg"

import iconBold from "../../../lib/editor/plugins/toolbarPlugin/images/icons/type-bold.svg"
import iconItalic from "../../../lib/editor/plugins/toolbarPlugin/images/icons/type-italic.svg"
import iconUnderline from "../../../lib/editor/plugins/toolbarPlugin/images/icons/type-underline.svg"
import iconStrikethrough from "../../../lib/editor/plugins/toolbarPlugin/images/icons/type-strikethrough.svg"
import iconCode from "../../../lib/editor/plugins/toolbarPlugin/images/icons/code.svg"
import iconLink from "../../../lib/editor/plugins/toolbarPlugin/images/icons/link.svg"
import iconLeftAlign from "../../../lib/editor/plugins/toolbarPlugin/images/icons/text-left.svg"
import iconCenterAlign from "../../../lib/editor/plugins/toolbarPlugin/images/icons/text-center.svg"
import iconRightAlign from "../../../lib/editor/plugins/toolbarPlugin/images/icons/text-right.svg"
import iconJustifyAlign from "../../../lib/editor/plugins/toolbarPlugin/images/icons/justify.svg"
export const DocArea = styled.div`
  .doc-create-from-input {

  }

  .doc-create-from input, textarea, select {
    color: #666;
    font-size: 16px;
    display: block;
    width: 100%;
    height: 55px;
    background: white;
    font-weight: 400;
    outline: none;
    padding: 0px 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #f1f1f1;
  }

  .editor-container {
    margin: 20px auto 20px auto;
    border-radius: 2px;
    max-width: 600px;
    color: #000;
    position: relative;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .editor-container .toolbar {
    display: flex;
    margin-bottom: 1px;
    background: #fff;
    padding: 4px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    vertical-align: middle;
  }

  .editor-container .toolbar button.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    vertical-align: middle;
  }

  .editor-container .toolbar button.toolbar-item:disabled {
    cursor: not-allowed;
  }

  .editor-container .toolbar button.toolbar-item.spaced {
    margin-right: 2px;
  }

  .editor-container .toolbar button.toolbar-item i.format {
    background-size: contain;
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-top: 2px;
    vertical-align: -0.25em;
    display: flex;
    opacity: 0.6;
  }

  .editor-container .toolbar button.toolbar-item:disabled i.format {
    opacity: 0.2;
  }

  .editor-container .toolbar button.toolbar-item.active {
    background-color: rgba(223, 232, 250, 0.3);
  }

  .editor-container .toolbar button.toolbar-item.active i {
    opacity: 1;
  }

  .editor-container .toolbar .toolbar-item:hover:not([disabled]) {
    background-color: #eee;
  }

  .editor-container .toolbar .divider {
    width: 1px;
    background-color: #eee;
    margin: 0 4px;
  }

  .editor-container .toolbar select.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 70px;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
  }

  .editor-container .toolbar select.code-language {
    text-transform: capitalize;
    width: 130px;
  }

  .editor-container .toolbar .toolbar-item .text {
    display: flex;
    line-height: 20px;
    width: 200px;
    vertical-align: middle;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
    width: 70px;
    overflow: hidden;
    height: 20px;
    text-align: left;
  }

  .editor-container .toolbar .toolbar-item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 8px;
    line-height: 16px;
    background-size: contain;
  }

  .editor-container .toolbar i.chevron-down {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    display: flex;
    user-select: none;
  }

  .editor-container .toolbar i.chevron-down.inside {
    width: 16px;
    height: 16px;
    display: flex;
    margin-left: -25px;
    margin-top: 11px;
    margin-right: 10px;
    pointer-events: none;
  }

  .editor-container .toolbar i.chevron-down {
    background-color: transparent;
    background-size: contain;
    display: inline-block;
    height: 8px;
    width: 8px;
    background-image: url(${iconChevronDown});
  }

  .editor-container .toolbar .icon.paragraph {
    background-image: url(${iconParagraph});
  }

  .icon.large-heading,
  .icon.h1 {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/type-h1.svg);
  }

  .icon.small-heading,
  .icon.h2 {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/type-h2.svg);
  }

  .icon.bullet-list,
  .icon.ul {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/list-ul.svg);
  }

  .icon.numbered-list,
  .icon.ol {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/list-ol.svg);
  }

  .icon.quote {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/chat-square-quote.svg);
  }

  .icon.code {
    background-image: url(../../../lib/editor/plugins/toolbarPlugin/images/icons/code.svg);
  }

  i.bold {
    background: url(${iconBold});
  }

  i.italic {
    background-image: url(${iconItalic});
  }

  i.underline {
    background-image: url(${iconUnderline});
  }

  i.strikethrough {
    background-image: url(${iconStrikethrough});
  }

  i.code {
    background-image: url(${iconCode});
  }

  i.link {
    background-image: url(${iconLink});
  }

  i.left-align {
    background-image: url(${iconLeftAlign});
  }

  i.center-align {
    background-image: url(${iconCenterAlign});
  }

  i.right-align {
    background-image: url(${iconRightAlign});
  }

  i.justify-align {
    background-image: url(${iconJustifyAlign});
  }


  .editor-inner {
    background: #fff;
    position: relative;
  }

  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 15px 10px;
    caret-color: #444;
  }

  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 15px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }
`