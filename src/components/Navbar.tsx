import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const NavBar = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Comparateur", href: "#" },
    { label: "Formation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "A Propos", href: "#" },
  ];

  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full bg-white shadow-md py-3.5 fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            className="h-[74px] object-cover"
            alt="Logo"
            src="/logo.png"
          />
        </div>

        <nav className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-2.5 py-2.5 font-['Source_Sans_Pro',Helvetica] text-2xl leading-9 text-black hover:text-gray-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link to="/login">
          <Button className="bg-[#6cb9c6] hover:bg-[#5ba7b4] h-[67px] w-[232px] text-white font-['Source_Sans_Pro',Helvetica] font-bold text-xl rounded shadow-md px-5 py-2.5">
            Se connecter
          </Button>
        </Link>
      </div>
    </header>
  );
};
