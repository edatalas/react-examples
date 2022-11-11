import React, {useState} from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";


import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const [setIsAuth] = useState(false);
  return (
      <BrowserRouter basename="/react-examples">
          <Routes>
              <Route path={ROUTES.HOME} element={<Home/>}/>
              <Route path={ROUTES.LOGIN} element={<Login setIsAuth={setIsAuth}/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
