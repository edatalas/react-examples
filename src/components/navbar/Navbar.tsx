import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
//Navigation
import * as ROUTES from "../../contants/routes"

//Styled
import {Wrapper} from "./Navbar.styled";

const Navbar = () => {
    let navigate = useNavigate();
    const isAuth = localStorage.getItem("isAuth")

    const profile = () => {
        navigate("/profile");
    }
    return(
        <Wrapper>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-6">

                    </div>
                    <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                        <div className="nav-items ml-60">
                            <ul>
                                <li className="nav-item">
                                    <Link to={ROUTES.HOME}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={ROUTES.ALLLIBDOCS}>Docs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-6 col-6">
                        {isAuth === "false" || isAuth === null ?
                            ( <Link to={ROUTES.LOGIN}>Login</Link> ) : (
                                <>
                                    <button className="dashboard-btn" onClick={profile}>
                                        Dashboard
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;