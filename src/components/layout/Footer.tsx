import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo.jpg"
              alt="Dynamic Refrigeration"
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-primary-foreground/80 mb-4">
              Providing innovative, reliable, and efficient industrial
              refrigeration solutions since inception.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Installation Services</li>
              <li>• Maintenance & Repair</li>
              <li>• Cold Room Solutions</li>
              <li>• Industrial Refrigeration</li>
              <li>• Spare Parts Supply</li>
              <li>• 24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Industrial Area, Business District, City, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@dynamicrefrigeration.in"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@dynamicrefrigeration.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>
            &copy; {currentYear} Dynamic Refrigeration. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
