import { Suspense } from "react";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
import AdminNavbar from "../pages/admin/AdminNavbar";
import AdminSidebar from "../pages/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      
      <div className="flex pt-16 ">
        <AdminSidebar />
        
        <main className="flex-1 ml-64 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;