import React from "react";
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login:React.FC = () => {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((result)=>{
          localStorage.setItem("isAuth",String(true));
          navigate("/");
      });
    }

    return(
        <div className="login">
            <p>Sign In With Google to Continue</p>
            <button onClick={signInWithGoogle}>
                Login
            </button>
        </div>
    )
}

export default Login;