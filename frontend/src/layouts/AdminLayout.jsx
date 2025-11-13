import { Suspense } from "react";
import { Outlet } from "react-router";
import Loading from "../shared/components/Loading";
import AdminNavbar from "../features/admin/_components/AdminNavbar";
import AdminSidebar from "../features/admin/_components/AdminSidebar";

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