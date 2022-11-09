import React from 'react';
declare type Button = {
    title: string;
    action: () => void;
};
declare type Props = {
    show: boolean;
    close: () => void;
    title?: string;
    desc?: string;
    buttons: Button[];
    dark: boolean;
};
declare const Popup: React.FC<Props>;
export default Popup;
