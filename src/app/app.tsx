import React from "react";
import './styles/globals.scss';
import {RouterProvider} from "react-router-dom";
import {router} from "../shared/router/router";
const App = () => {
  return (
    <div>
      dadasdasdas
        <RouterProvider router={router}/>
    </div>
  );
};

export default App;