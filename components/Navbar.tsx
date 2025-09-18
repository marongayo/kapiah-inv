'use client'
import { useState, useEffect, useRef } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // scroll down, hide
      } else {
        setShowNavbar(true); // scroll up, show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const getLinkClasses = (href: string) => {
    const isCurrentLocation = pathname === href;
    let classes = 'regular-16 cursor-pointer transition-all';
    if (isCurrentLocation) {
      classes += ' lg:text-green-500 lg:hover:text-gray-900 text-gray-900';
    } else {
      classes += ' lg:text-gray-900 lg:hover:text-green-500 text-gray-900';
    }
    return classes;
  };

  return (
    <nav
      className={`flexBetween max-container padding-container relative z-30 py-5 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={getLinkClasses(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-green-50 flex flex-col items-center gap-6 py-6 lg:hidden shadow-lg z-40"
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={getLinkClasses(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar