import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Loading from "../shared/components/Loading";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="min-h-screen bg-gray-900">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
