import React from 'react';
//Styled
import "bootstrap/dist/css/bootstrap.min.css";
//Routes
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";
//Server Pages
import Index from "./pages/server/login";
import Profile from "./pages/server/profile";
import LibDocsCreate from "./pages/server/docs";
//Client Pages
import Home from "./pages/Home";
import AllLibDocs from "./pages/client/libraries/docs"
import DocFeatureView from "./pages/client/libraries/docs/doc.feature.view";
import DocCategoryView from "./pages/client/libraries/docs/doc.category.view";
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
                <Route path={ROUTES.DOC_CATEGORY_VIEW} element={<DocCategoryView/>}/>
                <Route path={ROUTES.DOC_FEATURES_VIEW} element={<DocFeatureView/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
