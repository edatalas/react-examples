import React, {Suspense, useState} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const [setIsAuth] = useState(false);
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Router>
              <Routes>
                  <Route path={ROUTES.HOME} element={<Home/>}/>
                  <Route path={ROUTES.LOGIN} element={<Login setIsAuth={setIsAuth}/>}/>
                  <Route path='*' element={<NotFoundPage/>} />
              </Routes>
          </Router>
      </BrowserRouter>
  );
}

export default App;
