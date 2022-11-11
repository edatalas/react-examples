import React from 'react';
//Route
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
//Navigation
import Navbar from "./components/navbar";

function App() {
    return (
        <BrowserRouter basename="/react-examples">
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
