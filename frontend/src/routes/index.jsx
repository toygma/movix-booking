import { createBrowserRouter } from "react-router";
import { MainRoutes } from "./MainRoutes";
import { AdminRoutes } from "./AdminRoutes";

export const routes = createBrowserRouter([
    MainRoutes,
    AdminRoutes
])
