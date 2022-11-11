import React from "react";
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";


interface Props  {
    setIsAuth:any;
}

const Login:React.FC<Props> = ({setIsAuth}) => {
    const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((result)=>{
          localStorage.setItem("isAuth",String(true));
          window.location.href = "/";
      })
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