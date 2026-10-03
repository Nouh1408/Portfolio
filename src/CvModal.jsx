import { useEffect } from "react";
import {
  X,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  FileText
} from "lucide-react";

export default function CvModal({ isOpen, onClose }) {
  // Prevent background scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-6 py-4 backdrop-blur-md z-10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h2 id="cv-modal-title" className="text-lg font-bold text-white tracking-tight">
                Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-400">Ahmed Nouh &bull; CV view</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
          

            <button
              onClick={onClose}
              type="button"
              aria-label="Close CV modal"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 space-y-10 text-slate-300 selection:bg-emerald-500/30">
          
          {/* Header & Personal Info */}
          <div className="relative rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-slate-950 p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Available for Hire
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Ahmed Nouh
                </h1>
                <p className="text-base sm:text-lg text-emerald-400 font-medium mt-1">
                  Front-End & Mobile Software Engineer
                </p>
                <p className="text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
                 I build web and mobile apps using React, React Native, Expo, and JavaScript/TypeScript, with a focus on clean code, good performance, and a smooth user experience.
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-4 md:border-t-0 md:pt-0">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Egypt</span>
                </div>
                <a
                  href="https://github.com/Nouh1408"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>github.com/Nouh1408</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-nouh-91882a286/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
                {import.meta.env.VITE_EMAIL_ADDRESS && (
                  <a
                    href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{import.meta.env.VITE_EMAIL_ADDRESS}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Technical Arsenal / Skills */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Code2 className="w-4 h-4" />
              </span>
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  Mobile Development
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React Native", "Expo", "NativeWind", "Mobile UI/UX","Expo Router"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  Front-End Web
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Next.js", "Tailwind CSS", "Bootstrap","Vite"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
<div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
    Back-End Web
  </h4>

  <div className="flex flex-wrap gap-1.5">
    {[
      "Express.js",
      "MongoDB",
      "REST APIs",
      "MySQL",
      "Sequelize",
    ].map((skill) => (
      <span
        key={skill}
        className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 sm:col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  Tools & Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Redux", "Git & GitHub", "Vite", "REST APIs", "Figma", "Notion","Web3Forms"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects & Practical Work */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Briefcase className="w-4 h-4" />
              </span>
              Featured Projects & Experience
            </h3>

            <div className="space-y-4">
              {/* Project 1 */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700/80 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-white">
                    Sal7ly (صلحلي) &bull; Two-Sided Home Maintenance Marketplace
                  </h4>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full w-fit">
                    Sep 2025 – Present
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                  Engineered an Arabic-first mobile marketplace connecting Egyptian households with vetted local
                  technicians for plumbing, carpentry, and electrical services. Implemented real-time booking flows,
                  status tracking, and intuitive user interfaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Expo", "Redux", "NativeWind", "REST API"].map((badge) => (
                    <span key={badge} className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700/80 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-white">
                    E-Commerce Web Application
                  </h4>
                  <span className="text-xs font-medium text-slate-400 bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded-full w-fit">
                    Oct 2024
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                  Developed an interactive online shopping platform during the ITI internship featuring product catalog,
                  instant search & filter, cart state persistence, authentication, and a checkout experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Redux", "Tailwind CSS", "REST APIs", "Vite"].map((badge) => (
                    <span key={badge} className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700/80 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-white">
                    GameLabrynth E-Learning Platform
                  </h4>
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full w-fit">
                    Ongoing
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                  Building a specialized learning platform dedicated to mastering modern game development, interactive
                  curriculum paths, and structured resource sharing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "JavaScript", "UI/UX"].map((badge) => (
                    <span key={badge} className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <GraduationCap className="w-4 h-4" />
              </span>
              Education & Programs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <h4 className="font-bold text-white">Front-End Engineer Program</h4>
                <p className="text-sm text-emerald-400 font-medium">Route Academy</p>
                <p className="text-xs text-slate-400 mt-1">March 2024 – Feb 2025</p>
                <p className="text-xs text-slate-400 mt-2">
                  Intensive track covering modern JavaScript, React ecosystem, web performance, component architecture, and production practices.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <h4 className="font-bold text-white">React JS Summer Internship</h4>
                <p className="text-sm text-emerald-400 font-medium">Information Technology Institute (ITI)</p>
                <p className="text-xs text-slate-400 mt-1">Summer 2024 &bull; Completed Oct 2024</p>
                <p className="text-xs text-slate-400 mt-2">
                  Hands-on industry training on building scalable single-page applications, state management, and real-world workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Milestones */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award className="w-4 h-4" />
              </span>
              Certifications & Milestones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30">
                <span className="text-xs text-amber-400 font-medium">ICPC</span>
                <h5 className="font-semibold text-white text-sm mt-0.5">ECPC 2023 Participant</h5>
                <p className="text-xs text-slate-500 mt-1">Aug 2023 &bull; Problem Solving & Algorithms</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30">
                <span className="text-xs text-amber-400 font-medium">Udemy</span>
                <h5 className="font-semibold text-white text-sm mt-0.5">React Native - The Practical Guide</h5>
                <p className="text-xs text-slate-500 mt-1">2026 &bull; Cross-Platform Mobile Apps</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30">
                <span className="text-xs text-amber-400 font-medium">Huawei ICT Academy</span>
                <h5 className="font-semibold text-white text-sm mt-0.5">Computer Network</h5>
                <p className="text-xs text-slate-500 mt-1">Dec 2024 &bull; Networking Fundamentals</p>
              </div>
            </div>
          </div>

          {/* Modal Footer Banner */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Ahmed Nouh. All rights reserved.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-300 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white transition-all text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
