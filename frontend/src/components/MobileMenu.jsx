import { Link } from "react-router";

const menudata = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/movies",
    title: "Movies",
  },
  {
    id: 3,
    href: "/theaters",
    title: "Theaters",
  },
  {
    id: 4,
    href: "/releases",
    title: "Releases",
  },
  {
    id: 5,
    href: "/favorites",
    title: "Favorites",
  },
];

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
      }`}
    >
      <div className="px-6 py-4 space-y-2 ">
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

        {/* Mobile Login Button */}
        <Link
          to="/login"
          onClick={() => setIsMenuOpen(false)}
          className="block sm:hidden text-center px-4 py-3 bg-linear-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
