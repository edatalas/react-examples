import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const [setIsAuth] = useState(false);
  return (
      <Router>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.LOGIN} element={<Login setIsAuth={setIsAuth}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
