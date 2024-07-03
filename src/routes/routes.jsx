import { createBrowserRouter } from "react-router-dom";

import Root from "../components/layout/root";

export const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
