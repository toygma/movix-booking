import { useClerk, useUser } from "@clerk/clerk-react";
import { Ticket } from "lucide-react";
import { Link } from "react-router";
import { menudata } from "../constants/headerConstants";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { user } = useUser();
  const { openSignIn, signOut } = useClerk();
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
      }`}
    >
      <div className="px-6 py-4 space-y-2">
        {menudata.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all duration-300"
          >
            {item.title}
          </Link>
        ))}

        {/* Mobile Login/User Section */}
        <div className="pt-2 border-t border-white/5">
          {!user ? (
            <button
              onClick={() => {
                openSignIn();
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
            >
              Login
            </button>
          ) : (
            <div className="space-y-2">
              {/* User Info Card */}
              <div className="flex items-center space-x-3 px-4 py-3 bg-white/5 rounded-lg">
                <img
                  src={user.imageUrl}
                  alt={user.fullName || "User"}
                  className="w-10 h-10 rounded-full ring-2 ring-red-500/50"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">
                    {user.fullName || user.username}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </div>

              {/* My Bookings Link */}
              <Link
                to="/my-bookings"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all duration-300"
              >
                <Ticket className="w-5 h-5 text-red-500" />
                <span>My Bookings</span>
              </Link>

              {/* Sign Out Button */}
              <button
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg font-medium transition-all duration-300"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
