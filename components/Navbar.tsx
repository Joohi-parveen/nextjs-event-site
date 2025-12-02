// // components/Navbar.tsx
// "use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl font-semibold">MyBrand</h1>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Services</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>
    </nav>
  );
}
