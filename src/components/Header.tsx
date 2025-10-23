"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

// Define the primary color as a constant for easy maintenance
const PRIMARY_COLOR = "#8DC440"; // Your vibrant green
const HOVER_COLOR = "#679F30"; // A slightly darker green for hover

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Modules", href: "/modules" },
  { name: "Integrations", href: "/integrations" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Affiliate", href: "/affiliate" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // FIX 1: Explicitly define the ref type as HTMLDivElement
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);

  // FIX 2: Explicitly type the parameters (href: string, isMobile: boolean)
  const getNavLinkClasses = (href: string, isMobile: boolean = false) => {
    const baseClasses = isMobile
      ? "block px-3 py-2 text-base"
      : "text-sm px-3 py-2";
    const activeClasses = `text-[${PRIMARY_COLOR}] font-bold`;
    const inactiveClasses = `text-gray-700 font-medium hover:text-[${HOVER_COLOR}]`;

    return `${baseClasses} ${
      pathname === href ? activeClasses : inactiveClasses
    } transition-all duration-300 ease-in-out`;
  };

  return (
    <header className="bg-white shadow-lg/5 sticky top-0 z-50 border-b border-gray-100/50">
      <div className="container mx-auto px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <Image
            src="/zerp263-logo.png"
            alt="ZERP263 Logo"
            width={300}
            height={300}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={getNavLinkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3 items-center">
          <Link
            href="/demo"
            className={`bg-[${PRIMARY_COLOR}] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[${HOVER_COLOR}] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
          >
            Book a Demo
          </Link>

          <Link
            href="/pricing"
            className={`border border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[${PRIMARY_COLOR}] hover:text-white transition-all duration-300`}
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content with Smooth Transition */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          // FIX 1 APPLIED: Safe access of scrollHeight with a generous fallback
          maxHeight: isOpen
            ? `${menuRef.current?.scrollHeight ?? 1000}px`
            : "0",
        }}
      >
        <div className="bg-white shadow-inner pt-2 pb-4">
          <nav className="space-y-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getNavLinkClasses(item.href, true)}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col space-y-3 px-4 mt-4 border-t pt-4">
            <Link
              href="/demo"
              className={`text-center bg-[${PRIMARY_COLOR}] text-white font-semibold px-4 py-2 rounded-full hover:bg-[${HOVER_COLOR}] transition-colors`}
              onClick={closeMenu}
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className={`text-center border border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] font-semibold px-4 py-2 rounded-full hover:bg-[${PRIMARY_COLOR}] hover:text-white transition-colors`}
              onClick={closeMenu}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
