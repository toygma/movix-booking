import { Link } from "react-router";
import { assets } from "../../assets/assets";

const AdminNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="w-10 h-10 rounded-full object-cover shadow-sm group-hover:shadow-md transition-shadow"
          />
          <span className="text-xl font-semibold text-gray-800 hidden sm:block">
            Admin Panel
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-sm">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;