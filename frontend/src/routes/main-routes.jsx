import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";

const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const MovieDetails = lazy(() => import("../pages/detail/MovieDetails"));

export const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <NotFound />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "movies",
      element: <Movies />,
    },
    {
      path: "movie/:id",
      element: <MovieDetails />,
    },
  ],
};
