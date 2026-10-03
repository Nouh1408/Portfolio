import { useState, useEffect, useRef } from "react";
import { Mail, Menu, X, ArrowRight } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const GithubIcon = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu on click outside or escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const getDesktopLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `rounded-full px-4 py-2 text-sm font-medium transition-all ${
      isActive
        ? "bg-slate-800 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.1)]"
        : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
    }`;
  };

  const getMobileLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
      isActive
        ? "bg-slate-800/90 text-emerald-400 border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.08)]"
        : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
    }`;
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-xl lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex w-28 items-center text-xl font-bold tracking-tight text-white"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-sm text-emerald-400 transition-all duration-300 group-hover:w-16 group-hover:border-emerald-400/50">
            <span className="absolute transition-opacity duration-300 group-hover:opacity-0">N</span>
            <span className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-emerald-400 font-medium tracking-wide">
              Noah.
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 p-1.5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={getDesktopLinkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[420px] opacity-100 pt-4 pb-2" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClass(link.path)}
            >
              <span>{link.name}</span>
              {location.pathname === link.path ? (
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              ) : (
                <ArrowRight className="h-4 w-4 text-slate-500 opacity-60" />
              )}
            </Link>
          ))}

          {/* Mobile Let's Talk CTA */}
          <div className="pt-2 border-t border-slate-800/80 mt-1">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-400 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all hover:bg-emerald-300"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick Social links on mobile menu */}
          <div className="flex items-center justify-center gap-6 pt-3 pb-1 text-slate-400 border-t border-slate-800/50 mt-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Nouh1408"
              className="p-1.5 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ahmed-nouh-91882a286/"
              className="p-1.5 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS || "ahmedinouh@gmail.com"}`}
              className="p-1.5 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-12 px-8 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 mt-auto">
      <div className="text-slate-400 text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-slate-400">
        <a className="cursor-pointer" target="blank" href="https://github.com/Nouh1408" >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a className="cursor-pointer" target="blank" href="https://www.linkedin.com/in/ahmed-nouh-91882a286/" >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS || "ahmedinouh@gmail.com"}`}
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/30 text-white">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
