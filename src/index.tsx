import { createRoot } from "react-dom/client";
import App from "./app/app";
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./shared/router/router";

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const container = createRoot(root)

container.render(<RouterProvider router={router}/>)