import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

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

export default MainLayout