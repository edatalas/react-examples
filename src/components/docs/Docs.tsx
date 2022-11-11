import React from "react";

//styled
import {Area} from "./Docs.styled";

//components
import DocsTopics from "./Docs.topics";
import DocsContent from "./Docs.content";

type Props = {
    children: JSX.Element;
};


const Docs:React.FC<Props> = (props) => {
    return(
        <Area>
            <div className="container">
                <div className="row">
                    <DocsTopics/>
                    <DocsContent children={props.children}/>
                </div>
            </div>
        </Area>
    )
}

export default Docs;