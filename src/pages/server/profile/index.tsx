import React, {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../../lib/firebase-config";
import {Link, useNavigate} from "react-router-dom";
import * as ROUTES from "../../../contants/routes";
import Header from "../../../components/header";
import {ProfileArea} from "./profile.styled";

import DocCreate from "../docs/doc.create";
import DocFeatureCreate from "../docs/doc.feature.create";
import DocCategoryCreate from "../docs/doc.category.create";
enum Components {
    Comments,
    CreateDoc,
    DocCategoryCreate,
    DocFeatureCreate
}

const Profile = () => {
    let navigate = useNavigate();
    const isAuth = localStorage.getItem("isAuth")

    const [getComponent, setComponent] = useState<Components>(Components.Comments);

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("isAuth");
            navigate("/login");
        })
    }

    return(
        <>
        <Header title="Dashboard">
            <li className="item">
                <Link to={ROUTES.PROFILE}>
                    <span>Dashboard</span>
                </Link>
            </li>
        </Header>
        <ProfileArea>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            ( getComponent == Components.CreateDoc ) ?
                                <DocCreate/>
                                : (getComponent == Components.DocCategoryCreate) ?
                                    <DocCategoryCreate/>
                                : (getComponent == Components.DocFeatureCreate) ?
                                    <DocFeatureCreate/>
                                        :
                                        <>Comments</>
                        }
                    </div>
                    <div className="col-lg-4">
                        {isAuth === "false" || isAuth === null ?
                            ( <Link to={ROUTES.LOGIN}>Login</Link> ) : (
                                <>
                                    <button
                                        onClick={() => setComponent(Components.CreateDoc)}
                                        className="create-btn"
                                    >
                                        Create Documentation
                                    </button>
                                    <button
                                        onClick={() => setComponent(Components.DocCategoryCreate)}
                                        className="create-btn"
                                    >
                                        Create Category
                                    </button>
                                    <button
                                        onClick={() => setComponent(Components.DocFeatureCreate)}
                                        className="create-btn">
                                        Create Features
                                    </button>
                                    <button onClick={signUserOut} className="log-out-btn"> Log Out</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </ProfileArea>
        </>
    )
}

export default Profile;