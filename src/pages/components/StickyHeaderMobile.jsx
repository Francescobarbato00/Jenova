import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function StickyHeaderMobile() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full p-4 bg-white text-black flex justify-between items-center md:hidden z-50 shadow-md border-b transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <div className="text-lg font-bold tracking-wide">Junior Jenova Space</div>

      {/* Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-black focus:outline-none z-50"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black z-50 flex flex-col p-6">
          {/* Titolo e Chiudi */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold">Junior Jenova Space</h2>
            <button onClick={() => setMenuOpen(false)} className="text-black">
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 mt-10 px-6 text-lg font-medium">
            <li className="border-b pb-2">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Home</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/solutions" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Per le Aziende</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Chi Siamo</Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">Contatti</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
