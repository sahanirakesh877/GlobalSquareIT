import React from "react";
import Link from "next/link"; // Import Link from next/link

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-[#1e90ff] shadow-md  sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex text-white space-x-8  font-semibold">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
             
              <li>
                <Link
                  href="/product"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link
              href="/"
              className="bg-[#ff6347] text-white px-6 py-2 rounded-full shadow hover:bg-gray-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
