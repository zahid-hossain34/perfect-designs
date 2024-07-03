import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes/routes";

const App = () => {
  return <RouterProvider router={createRouter}></RouterProvider>;
};

export default App;
