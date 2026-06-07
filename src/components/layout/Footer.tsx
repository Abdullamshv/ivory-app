import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { DESTINATIONS, OFFICE_INFO } from "@/data";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Apply Now", href: "/apply-now" },
  { label: "Study Destinations", href: "/study-destinations" },
];

export function Footer() {
  return (
    <footer className="w-full bg-brand-accent text-brand-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-tight font-serif">
              IVORY
            </Link>
            <p className="mt-4 text-sm text-brand-light/80 leading-relaxed max-w-xs">
              Qatar-based education consultancy guiding students to top universities worldwide.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-light/80 hover:text-ivory-accent transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-light/80 hover:text-ivory-accent transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-light/80 hover:text-ivory-accent transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href={`mailto:${OFFICE_INFO.email}`} aria-label="Email" className="text-brand-light/80 hover:text-ivory-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-light/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Destinations
            </h3>
            <ul className="space-y-3">
              {DESTINATIONS.map((destination) => (
                <li key={destination.id}>
                  <Link href={`/study-destinations/${destination.id}`} className="text-sm text-brand-light/80 hover:text-white transition-colors">
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-brand-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-ivory-accent" />
                <span>{OFFICE_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 text-ivory-accent" />
                <a href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {OFFICE_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 shrink-0 text-ivory-accent" />
                <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {OFFICE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 text-ivory-accent" />
                <span>{OFFICE_INFO.timings}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-brand-light/70">
          <p>&copy; {new Date().getFullYear()} IVORY Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about-us" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
