import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-transparent text-white flex justify-between items-center md:hidden z-50">
      {/* Logo */}
      <div className="text-lg font-bold">Junior Jenova Space</div>

      {/* Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white focus:outline-none z-50"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Overlay */}
      <nav
        className={`fixed top-0 right-0 h-full w-full bg-white text-black transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Titolo e Chiudi */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold">Junior Jenova Space</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 mt-10">
            <li className="border-b pb-2">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Home</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/solutions" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Per le Aziende</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Chi Siamo</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Contatti</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}