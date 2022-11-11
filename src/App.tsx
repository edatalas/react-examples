import React, {useState} from 'react';

import {Routes, Route} from "react-router-dom";

import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const [is,setIsAuth] = useState(false);
  return (
              <Routes>
                  <Route path={ROUTES.HOME} element={<Home/>}/>
                  <Route path={ROUTES.LOGIN} element={<Login setIsAuth={setIsAuth}/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
  );
}

export default App;
