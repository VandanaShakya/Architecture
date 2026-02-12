import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navServices, navProjects } from "@/data/siteData";

interface DropdownItem {
  title: string;
  path: string;
}

const DropdownMenu = ({
  label,
  items,
  isOpen,
  onEnter,
  onLeave,
  onClick,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) => {
  const location = useLocation();
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-64 bg-background border border-border shadow-xl z-50 animate-fade-in">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-5 py-2.5 text-sm transition-colors duration-200 hover:bg-secondary ${
                  location.pathname === item.path ? "text-foreground font-medium bg-secondary" : "text-muted-foreground"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  const handleEnter = (name: string) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
            ARCHSTUDIO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                isActive("/") ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                isActive("/about") ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              About
            </Link>
            <DropdownMenu
              label="Services"
              items={navServices}
              isOpen={openDropdown === "services"}
              onEnter={() => handleEnter("services")}
              onLeave={handleLeave}
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
            />
            <DropdownMenu
              label="Projects"
              items={navProjects}
              isOpen={openDropdown === "projects"}
              onEnter={() => handleEnter("projects")}
              onLeave={handleLeave}
              onClick={() => setOpenDropdown(openDropdown === "projects" ? null : "projects")}
            />
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            <Link to="/" className="block text-sm font-medium tracking-wide uppercase text-foreground">
              Home
            </Link>
            <Link to="/about" className="block text-sm font-medium tracking-wide uppercase text-foreground">
              About
            </Link>
            {/* Services Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                className="flex items-center justify-between w-full text-sm font-medium tracking-wide uppercase text-foreground"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "services" && (
                <div className="mt-2 ml-4 space-y-2">
                  {navServices.map((s) => (
                    <Link key={s.path} to={s.path} className="block text-sm text-muted-foreground hover:text-foreground">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Projects Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "projects" ? null : "projects")}
                className="flex items-center justify-between w-full text-sm font-medium tracking-wide uppercase text-foreground"
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "projects" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "projects" && (
                <div className="mt-2 ml-4 space-y-2">
                  {navProjects.map((p) => (
                    <Link key={p.path} to={p.path} className="block text-sm text-muted-foreground hover:text-foreground">
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
