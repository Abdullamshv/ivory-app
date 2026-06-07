'use client';

import Link from "next/link";
import { Mail, ChevronDown, Menu, X } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { OFFICE_INFO } from "@/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-ivory-bg/95 backdrop-blur supports-backdrop-filter:bg-ivory-bg/60">
      <div className="flex h-20 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <Link href="/" onClick={closeMenu}>
          <span className="text-2xl font-bold text-ivory-primary tracking-tight font-serif">
            IVORY
          </span>
        </Link>

        {/* Center: Navigation Links & Dropdown (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-ivory-text">
          <Link href="/" className="hover:text-ivory-primary transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-ivory-primary transition-colors">
            About Us
          </Link>
          <Link href="/apply-now" className="hover:text-ivory-primary transition-colors">
            Apply Now
          </Link>

          {/* Study Destinations Hover Dropdown */}
          <div className="group relative">
            <Link href="/study-destinations" className="flex items-center gap-1 hover:text-ivory-primary transition-colors py-8">
              Study Destinations <ChevronDown className="h-4 w-4" />
            </Link>
            <ul className="absolute left-0 top-full mt-0 w-48 flex-col overflow-hidden rounded-md border border-gray-100 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
              <li><Link href="/study-destinations/georgia" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">Georgia</Link></li>
              <li><Link href="/study-destinations/uae" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">UAE</Link></li>
              <li><Link href="/study-destinations/malaysia" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">Malaysia</Link></li>
              <li><Link href="/study-destinations/usa" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">USA</Link></li>
              <li><Link href="/study-destinations/qatar" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">Qatar</Link></li>
              <li><Link href="/study-destinations/uk" className="block px-4 py-3 hover:bg-zinc-50 hover:text-ivory-primary transition-colors">UK</Link></li>
            </ul>
          </div>
        </nav>

        {/* Right: Social Links (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a href={`mailto:${OFFICE_INFO.email}`} className="text-ivory-text hover:text-ivory-secondary transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ivory-text hover:text-ivory-secondary transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ivory-text hover:text-ivory-secondary transition-colors" aria-label="Instagram"><FaInstagram className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ivory-text hover:text-ivory-secondary transition-colors" aria-label="Facebook"><FaFacebook className="w-5 h-5" /></a>
          </div>

          <button 
            className="md:hidden text-ivory-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4 font-medium text-ivory-text">
            <Link href="/" onClick={closeMenu} className="hover:text-ivory-primary transition-colors p-2 rounded-lg hover:bg-gray-50">Home</Link>
            <Link href="/about-us" onClick={closeMenu} className="hover:text-ivory-primary transition-colors p-2 rounded-lg hover:bg-gray-50">About Us</Link>
            <Link href="/apply-now" onClick={closeMenu} className="hover:text-ivory-primary transition-colors p-2 rounded-lg hover:bg-gray-50">Apply Now</Link>
            <div className="p-2">
              <span className="block mb-2 font-semibold">Study Destinations</span>
              <ul className="pl-4 space-y-2 border-l-2 border-brand-light">
                <li><Link href="/study-destinations" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">All Destinations</Link></li>
                <li><Link href="/study-destinations/qatar" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">Qatar</Link></li>
                <li><Link href="/study-destinations/georgia" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">Georgia</Link></li>
                <li><Link href="/study-destinations/uae" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">UAE</Link></li>
                <li><Link href="/study-destinations/malaysia" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">Malaysia</Link></li>
                <li><Link href="/study-destinations/usa" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">USA</Link></li>
                <li><Link href="/study-destinations/uk" onClick={closeMenu} className="block hover:text-ivory-primary text-gray-600">UK</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
