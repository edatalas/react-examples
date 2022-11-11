import React from "react";

type Props = {
    children: JSX.Element;
};

const DocsContent:React.FC<Props> = (props) => {
    return(
        <div className="col-md-9">
            <div className="p-lg-0">
                <div className="pt-5">
                    <div className="du__docs-right pt-45">
                        <div className="du__docs-right-title pb-15">
                            <h2>Component</h2>
                        </div>
                        <div className="du__docs-subtitle">
                            <p>Web Components aims to solve such problems. It consists of three main technologies, which
                                can be
                                used together to create versatile custom elements with encapsulated functionality that
                                can be reused
                                wherever you like without fear of code collisions.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="component-wigdets-items pb-5">
                        <ul>
                            {props.children}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DocsContent;