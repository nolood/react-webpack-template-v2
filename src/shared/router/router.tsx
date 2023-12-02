import {createBrowserRouter} from "react-router-dom";
import {MAIN_ROUTE, OTHER_ROUTE} from "./paths";
import {MainPage, OtherPage} from "../../pages";
import {Suspense} from "react";

export const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <Suspense fallback={'Loading'}>
      <MainPage/>
    </Suspense>
  },
  {
    path: OTHER_ROUTE,
    element: <Suspense fallback={'Loading'}>
      <OtherPage/>
    </Suspense>
  }
])