import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../shared/components/NotFound";
const Home = lazy(() => import("../features/home/Home"));
const Movies = lazy(() => import("../features/movies/Movies"));
const MovieDetails = lazy(() => import("../features/movies/MovieDetails"));
const Seat = lazy(() => import("../features/seat/Seat"));
const MyBookings = lazy(() => import("../features/myBookings/MyBookings"));

export const MainRoutes = {
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
    {
      path: "my-bookings",
      element: <MyBookings />,
    },
  ],
};
