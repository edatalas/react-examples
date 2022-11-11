import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase-config";


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
        <div>
            <Link to={'/'}>Home</Link>
            <button onClick={() => console.log(isAuth)} >s</button>
            {isAuth === "false" || isAuth === null ? <Link to={'/login'}>Login</Link> : <button onClick={signUserOut}> Log Out</button>}
        </div>
    )
}

export default Navbar;