import { lazy } from "react";
import AdminLayout from "../layouts/AdminLayout";
import NotFound from "../shared/components/NotFound";

const Dashboard = lazy(() => import("../features/admin/Dashboard"));

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
