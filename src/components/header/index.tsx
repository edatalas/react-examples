import React from "react";
import {Area, Breadcurms} from "./index.styled";
import {Link} from "react-router-dom";
import * as ROUTES from "../../contants/routes";

interface Props {
    title:string;
    children?: JSX.Element,
}

const Header:React.FC<Props> = (props) => {
    return(
        <Area>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="title">
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Breadcurms>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8 col-md-6">
                            <ul className="items">
                                <li className="item">
                                    <Link to={ROUTES.HOME}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                {props.children}
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">

                        </div>
                    </div>
                </div>
            </Breadcurms>
        </Area>
    )
}

export default Header;