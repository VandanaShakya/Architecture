import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { navServices, navProjects } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg text-black border-t border-gray-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 00">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">ARCHITECT</h3>
            <p className="text-black text-sm leading-relaxed">
              Creating timeless architectural masterpieces that inspire, endure, and transform the way people live and work.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-black">Services</h4>
            <div className="space-y-2">
              {navServices.slice(0, 5).map((s) => (
                <Link key={s.path} to={s.path} className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-black">Projects</h4>
            <div className="space-y-2">
              {navProjects.map((p) => (
                <Link key={p.path} to={p.path} className="block text-sm text-gray-600 hover:text-primary-foreground transition-colors">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-600" />
                <span className="text-sm text-gray-600">123 Design District, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">info@archstudio.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2024 ArchStudio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-sm text-black hover:text-gray-800 transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-black hover:text-gray-800 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
