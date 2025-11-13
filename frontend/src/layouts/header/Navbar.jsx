import { Link, useLocation, useNavigate } from "react-router";
import { Search, Menu, X, Ticket } from "lucide-react";
import { useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { menudata } from "./constants/headerConstants";
import { Logo } from "../../core/images";
import MobileMenu from "./_components/MobileMenu";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-36 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={Logo}
            alt="Movix Logo"
            className="w-12 h-12 rounded-full ring-2 ring-red-500/50 group-hover:ring-red-500 transition-all duration-300"
          />
          <span className="text-2xl font-bold text-white hidden sm:block">
            MOV<span className="text-red-500">IX</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-1">
          {menudata.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                } group`}
              >
                {item.title}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-red-500 to-pink-500 transition-all duration-300 ${
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 ">
          {/* Search Button */}
          <button
            className="p-2  text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Button */}
          <div className="lg:block hidden mt-2">
            {!user ? (
              <button
                onClick={openSignIn}
                className="hidden sm:block px-5 py-2 bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105"
              >
                Login
              </button>
            ) : (
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverActionButton: "hover:bg-white/5",
                    userButtonPopoverActionButtonIcon: "w-4 h-4",
                    userButtonPopoverActionButtonText: "text-sm",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Bookings"
                    labelIcon={<Ticket className="w-4 h-4" />}
                    onClick={() => navigate("/my-bookings")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
