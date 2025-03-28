
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-bold font-heading text-mercalo-darkpurple">
            <span className="text-mercalo-purple">Mer</span>calo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors duration-300 ${
                isActive(item.path)
                  ? "text-mercalo-purple"
                  : "text-gray-700 hover:text-mercalo-purple"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button className="hidden md:block btn-primary">Get Started</Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-lg py-2 transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-mercalo-purple"
                    : "text-gray-700 hover:text-mercalo-purple"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button className="btn-primary mt-4 w-full" onClick={closeMenu}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
