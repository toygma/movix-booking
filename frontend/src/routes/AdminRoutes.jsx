import { lazy } from "react";
import NotFound from "../components/NotFound";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <NotFound />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
  ],
};
