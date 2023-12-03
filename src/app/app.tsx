import "./styles/globals.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { type FC } from "react";

const App: FC = () => {
  return (
    <div>
      dasdasd
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
