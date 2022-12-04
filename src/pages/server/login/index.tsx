import React, {useEffect} from "react";
import {auth,provider} from "../../../lib/firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

//Styled
import {LoginArea} from "./index.styled";

const Index:React.FC = () => {
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
        <LoginArea>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3><strong>FNSDOCS</strong></h3>
                                    <p className="mb-4">
                                        Geliştiriciler için küçük bir kılavuz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-7">
                            <div className="mb-4">
                                <h3>Sign In</h3>
                            </div>
                            <form action="#" method="post">
                                <div className="form-group first">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" readOnly/>
                                </div>
                                <div className="form-group last mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" readOnly/>
                                </div>
                                <input type="submit" value="Log In" className="btn btn-block btn-primary disabled"/>
                            </form>
                        </div>
                        <button type="button" className="login-with-google-btn mt-4" onClick={signInWithGoogle}>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </LoginArea>
    )
}

export default Index;