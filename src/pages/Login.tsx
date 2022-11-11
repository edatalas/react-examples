import React, {useEffect} from "react";
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";


const Login:React.FC = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('isAuth') === "true"){
            navigate("/");
        }
    })

    const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((result)=>{
          localStorage.setItem("isAuth",String(true));
          navigate("/");
          console.log("result")
      }).catch((error) => {
          // Handle Errors here.
          //const errorCode = error.code;
          //const errorMessage = error.message;
          // The email of the user's account used.
          //const email = error.customData.email;
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