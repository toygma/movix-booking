import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";

const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const MovieDetails = lazy(() => import("../pages/detail/MovieDetails"));
const Seat = lazy(() => import("../pages/seat/Seat"));

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
    {
      path: "book/:id",
      element: <Seat />,
    },
  ],
};
