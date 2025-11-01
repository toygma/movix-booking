import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import React from "react";
import { routes } from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <RouterProvider router={routes} />
      <Toaster position="top-center" />
    </React.Fragment>
  );
};

export default App;
