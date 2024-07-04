import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/home/index";

export const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
