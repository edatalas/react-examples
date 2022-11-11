import React from 'react';
//Styled
import "bootstrap/dist/css/bootstrap.min.css";
//Route
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
//Navigation
import Navbar from "./components/navbar/Navbar";
import LibDocsCreate from "./pages/dashboard/libraries/docs";
import AllLibDocs from "./pages/client/libraries/docs"
function App() {
    return (
        <BrowserRouter basename="/react-examples">
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
                <Route path={ROUTES.LIBCREATEDOC} element={<LibDocsCreate/>}/>
                <Route path={ROUTES.ALLLIBDOCS} element={<AllLibDocs/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
