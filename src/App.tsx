import React from 'react';
//Styled
import "bootstrap/dist/css/bootstrap.min.css";
//Route
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";
//Pages
import Home from "./pages/Home";
import Index from "./pages/server/login";
import LibDocsCreate from "./pages/server/docs";
import AllLibDocs from "./pages/client/libraries/docs"
import DocView from "./pages/client/libraries/docs/doc.view";
import Profile from "./pages/server/profile";
//Navigation
import Navbar from "./components/navbar/Navbar";
function App() {
    return (
        <BrowserRouter basename="/react-examples">
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.LOGIN} element={<Index/>}/>
                <Route path={ROUTES.LIBCREATEDOC} element={<LibDocsCreate/>}/>
                <Route path={ROUTES.ALLLIBDOCS} element={<AllLibDocs/>}/>
                <Route path={ROUTES.DOCVIEW} element={<DocView/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
