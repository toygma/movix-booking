import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";

const Home = lazy(() => import("../pages/home/Home"));

export const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <NotFound />,
  children: [
    {
      index: true, 
      element: <Home />,
    },
  ],
};