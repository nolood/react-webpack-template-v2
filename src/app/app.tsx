import React from "react";
import './styles/globals.scss';
import {Outlet} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default App;