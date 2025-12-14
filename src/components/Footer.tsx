import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury section-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl mb-4">Yesterday</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Timeless wedding stories captured with artistry and emotion. Based
              in the heart of creativity, available worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-caption text-primary-foreground/50 mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {["Portfolio", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-caption text-primary-foreground/50 mb-6">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@yesterday.studio"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                hello@yesterday.studio
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-caption text-primary-foreground/50 mb-6">
              Follow Along
            </h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              @yesterday.studio
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} Yesterday. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Crafted with love for timeless moments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
