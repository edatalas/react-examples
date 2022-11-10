import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";

import homepage from "./pages/Home";
import loginpage from "./pages/Login";

function App() {
  return (
      <Router>
        <Routes>
            <Route path={ROUTES.HOME} element={homepage()}/>
            <Route path={ROUTES.LOGIN} element={loginpage()}/>
        </Routes>
      </Router>
  );
}

export default App;
