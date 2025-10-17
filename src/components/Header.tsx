'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ZERP365
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/modules" className="text-gray-700 hover:text-blue-600 transition-colors">Modules</Link>
          <Link href="/integrations" className="text-gray-700 hover:text-blue-600 transition-colors">Integrations</Link>
          <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href="/demo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Book a Demo
          </Link>
          <Link href="/pricing" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
            Start Free Trial
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/modules" className="block text-gray-700 hover:text-blue-600 transition-colors">Modules</Link>
            <Link href="/integrations" className="block text-gray-700 hover:text-blue-600 transition-colors">Integrations</Link>
            <Link href="/industries" className="block text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/resources" className="block text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="/demo" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center">Book a Demo</Link>
            <Link href="/pricing" className="block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors text-center">Start Free Trial</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;