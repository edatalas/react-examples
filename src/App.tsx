import React, {useState} from 'react';

import {Route, HashRouter} from "react-router-dom";


import * as ROUTES from "../src/contants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const [setIsAuth] = useState(false);
  return (
      <HashRouter>
          <Route exact path={ROUTES.HOME}>
              <Home />
          </Route>
          <Route path={ROUTES.LOGIN}>
              <Login setIsAuth={setIsAuth}/>
          </Route>
      </HashRouter>
  );
}

export default App;
