import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase-config";
//Navigation
import * as ROUTES from "../../contants/routes"

//Styled
import {Wrapper} from "./Navbar.styled";

const Navbar = () => {
    let navigate = useNavigate();
    const isAuth = localStorage.getItem("isAuth")

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("isAuth");
            navigate("/login");
        })
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
                                    <Link to={ROUTES.LIBCREATEDOC}>Create Lib Doc</Link>
                                    <button onClick={signUserOut}> Log Out</button>
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