import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation().pathname;
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Package, label: "Add Shows", path: "/admin/add-shows" },
    { icon: ShoppingCart, label: "List Shows", path: "/admin/list-shows" },
    { icon: Users, label: "List Bookings", path: "/admin/list-bookings" },
  ];

  return (
    <div className="w-64 h-[calc(100vh-3rem)] bg-white border-r border-gray-200 fixed left-0 top-16 flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 pt-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = item.path === location;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors group relative ${
                active ? "bg-red-200 hover:bg-red-400" : ""
              }`}
            >
              <Icon
                size={20}
                className="group-hover:text-blue-600 transition-colors"
              />
              <span className="font-medium">{item.label}</span>
              {active && (
                <span className="bg-red-400 h-full w-1 absolute right-0"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-6 border-t border-gray-200 ">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
