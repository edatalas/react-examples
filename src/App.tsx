import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as ROUTES from "../src/contants/routes";

import home from "./pages/home";
function App() {
  return (
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={home}/>
        </Routes>
      </Router>
  );
}

export default App;
