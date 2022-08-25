import React from "react";
//styled
import {Area, Background} from "./index.styled"
import {Button} from "../button/index.syled";

type PopupButton = {
    title:string;
    action:() => void;
}

type Props = {
    show: boolean;
    close: () => void;
    title?: string;
    desc?:string;
    buttons: PopupButton[];
}


const Popup:React.FC<Props> = (props) => {
    if (!props.show) return null;
    return(
        <Area>
            <Background onClick={() => props.close()}/>
            <div className="content">
                {props.title && <h3 className="title">{props.title}</h3>}
                {props.desc && <p className="desc">{props.desc}</p>}
                <>
                    {props.buttons.map((button, index) => {
                        return(
                            <Button primary key={index} onClick={button.action}>
                                {button.title}
                            </Button>
                        )
                    })}
                </>
            </div>
        </Area>
    )
}

export default Popup;