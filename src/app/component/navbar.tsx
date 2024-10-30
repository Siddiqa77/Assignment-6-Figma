
 "use client"
// export default Navbar;
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Using icons for the hamburger and close buttons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Group 11.png" alt="Logo" className="w-15 h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 uppercase text-xs font-normal tracking-widest font-['Roboto']">
       
          <Link href="/"
          
            className=" text-zinc-800 hover:text-blue-600 border-y-2 border-slate-700">Main
          </Link>
          <Link href="/gallery"
             className="text-zinc-800 hover:text-blue-600">Gallery
          </Link>
          <Link href="/project"
          className="text-zinc-800 hover:text-blue-600">Projects
          </Link>
          <Link href="/certification"
             className="text-zinc-800 hover:text-blue-600">Certifications
          </Link>
          <Link href="/contact"
             className="text-zinc-800 hover:text-blue-600">Contacts
          </Link>
        </div>
     
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-zinc-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white py-4 space-y-4 md:hidden uppercase text-sm font-normal tracking-widest font-['Roboto']">
          <Link href="/"
            onClick={() => setIsMenuOpen(false)} className="text-zinc-800 hover:text-blue-600">Main
          </Link>
          <Link href="/gallery"
             onClick={() => setIsMenuOpen(false)} className="text-zinc-800 hover:text-blue-600">Gallery
          </Link>
          <Link href="/project"
            onClick={() => setIsMenuOpen(false)} className="text-zinc-800 hover:text-blue-600">Projects
          </Link>
          <Link href="/certification"
            onClick={() => setIsMenuOpen(false)} className="text-zinc-800 hover:text-blue-600">Certifications
          </Link>
          <Link href="/contact"
            onClick={() => setIsMenuOpen(false)} className="text-zinc-800 hover:text-blue-600">Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
