import React from 'react';
//styled
import { Area, Background } from './index.styled';
import { PopupButton } from './index.button';
var Popup = function (props) {
    if (!props.show)
        return null;
    return (React.createElement(Area, null,
        React.createElement(Background, { onClick: function () { return props.close(); } }),
        React.createElement("div", { className: 'content' },
            props.title && React.createElement("h3", { className: 'title' }, props.title),
            props.desc && React.createElement("p", { className: 'desc' }, props.desc),
            React.createElement(React.Fragment, null, props.buttons.map(function (button, index) {
                return (React.createElement(PopupButton, { primary: true, key: index, onClick: button.action }, button.title));
            })))));
};
export default Popup;
//# sourceMappingURL=index.js.map