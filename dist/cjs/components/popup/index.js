"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
//styled
var index_styled_1 = require("./index.styled");
var index_button_1 = require("./index.button");
var Popup = function (props) {
    if (!props.show)
        return null;
    return (react_1["default"].createElement(index_styled_1.Area, null,
        react_1["default"].createElement(index_styled_1.Background, { onClick: function () { return props.close(); } }),
        react_1["default"].createElement("div", { className: 'content' },
            props.title && react_1["default"].createElement("h3", { className: 'title' }, props.title),
            props.desc && react_1["default"].createElement("p", { className: 'desc' }, props.desc),
            react_1["default"].createElement(react_1["default"].Fragment, null, props.buttons.map(function (button, index) {
                return (react_1["default"].createElement(index_button_1.PopupButton, { primary: true, key: index, onClick: button.action }, button.title));
            })))));
};
exports["default"] = Popup;
//# sourceMappingURL=index.js.map