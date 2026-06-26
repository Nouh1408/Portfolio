import { Mail } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const GithubIcon = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;


function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 lg:px-24 border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
        NOAH  <span className="text-emerald-400">.</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-emerald-400 transition-colors">
          About
        </Link>
        <Link to="/skills" className="hover:text-emerald-400 transition-colors">
          Skills
        </Link>
        <Link to="/projects" className="hover:text-emerald-400 transition-colors">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-emerald-400 transition-colors">
          Contact
        </Link>
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
        <a className="cursor-pointer" target="blank" href="mailto:[EMAIL_ADDRESS]" >
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
