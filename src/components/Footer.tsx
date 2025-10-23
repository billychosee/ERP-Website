import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/">
                <Image
                  src="/zerp263-logo.png"
                  alt="ZERP263 Logo"
                  width={300}
                  height={300}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              All-in-One Business Management Software for every industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/modules"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/demo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get Support
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@smatechgroup.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@smatechgroup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+263868008361"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +263 86 8800 8361
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ZERP263. All rights reserved. A
            product of Smatech Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;