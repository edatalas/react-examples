import React, {useState} from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";

import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const [setIsAuth] = useState(false);
  return (
          <Router>
              <Route exact path={ROUTES.HOME}>
                  <Home/>
              </Route>
              <Route path={ROUTES.LOGIN}>
                  <Login setIsAuth={setIsAuth}/>
              </Route>
                  <Route component={NotFoundPage} />
          </Router>
  );
}

export default App;
