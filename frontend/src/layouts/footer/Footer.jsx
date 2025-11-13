import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Logo } from "../../core/images";

const Footer = () => {
  const quickLinks = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/movies", title: "Movies" },
    { id: 3, href: "/theaters", title: "Theaters" },
    { id: 4, href: "/releases", title: "New Releases" },
  ];

  const legalLinks = [
    { id: 1, href: "/privacy", title: "Privacy Policy" },
    { id: 2, href: "/terms", title: "Terms of Service" },
    { id: 3, href: "/refund", title: "Refund Policy" },
    { id: 4, href: "/faq", title: "FAQ" },
  ];

  const socialLinks = [
    { id: 1, icon: Facebook, href: "#", label: "Facebook" },
    { id: 2, icon: Twitter, href: "#", label: "Twitter" },
    { id: 3, icon: Instagram, href: "#", label: "Instagram" },
    { id: 4, icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-[#09090b] border-t border-white/5">
      {/* Main Footer */}
      <div className="px-6 md:px-16 lg:px-36 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={Logo}
                alt="Movix Logo"
                className="w-12 h-12 rounded-full ring-2 ring-red-500/50 group-hover:ring-red-500 transition-all duration-300"
              />
              <span className="text-2xl font-bold text-white">
                MOV<span className="text-red-500">IX</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for movie booking. Experience cinema like
              never before with the latest releases and comfortable theaters.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/5 hover:bg-red-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>123 Cinema Street, Movie City, MC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span>support@movix.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="px-6 md:px-16 lg:px-36 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Movix. All rights reserved.{" "}
              <a
                href="https://github.com/toygma"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white"
              >
                Toygma
              </a>
            </p>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-xs mr-2">We Accept:</span>
              <div className="flex space-x-2">
                {["VISA", "MC", "AMEX"].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-semibold rounded border border-white/10"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
