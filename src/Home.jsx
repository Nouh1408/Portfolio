import { useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import { certificates, projects } from "./data/data";

const tabs = ["Projects", "Certificates", "Tech Stack"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Projects");
  const { RiveComponent, rive } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: true,
  });

  const bumpInput = useStateMachineInput(rive, "bumpy", "bump");

  const handleBump = () => {
    if (bumpInput) {
      bumpInput.fire();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-8 lg:px-24">
        {/* Text Content */}
        <div className="z-10 flex flex-col items-start max-w-2xl space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Building Web & Mobile <br /> Experiences
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a front-end and mobile developer building responsive websites
            and React Native apps. I work with React, Expo, Tailwind, and REST
            APIs to create clean, user-friendly digital products.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.4)]"
            >
              View Projects
            </Link>
            <button
              onClick={handleBump}
              className="px-6 py-3 font-semibold text-emerald-400 border-2 border-emerald-400/30 rounded-full hover:bg-emerald-400/10 transition-all hover:scale-105 active:scale-95"
            >
              Rev the Engine!
            </button>
          </div>
        </div>

        {/* Rive Canvas */}
        <div className="w-full h-[400px] lg:w-[600px] lg:h-[600px] mt-12 lg:mt-0">
          <RiveComponent className="w-full h-full drop-shadow-2xl" />
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="flex flex-col items-center px-8 py-24 lg:px-24 w-full">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 mb-12 text-center max-w-2xl text-lg">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>

        {/* Sub-navbar */}
        <div className="flex bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 w-full max-w-3xl mb-16 relative backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-slate-800 text-white shadow-lg border border-slate-700"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full max-w-6xl min-h-[400px]">
          {activeTab === "Projects" && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 animate-in fade-in zoom-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative rounded-3xl border border-slate-700/50 bg-slate-800/40 p-5 hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] overflow-hidden"
                  >
                    <div className="aspect-[4/3] w-full rounded-2xl bg-slate-900/80 mb-5 overflow-hidden relative border border-slate-700/50 group-hover:border-emerald-500/30 transition-colors">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-emerald-500/60 transition-colors">
                          <svg
                            className="w-10 h-10 mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            Image Placeholder
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.date}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 group/btn"
                      >
                        View
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Certificates" && (
            <div className="w-full animate-in fade-in zoom-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="group relative rounded-3xl border border-slate-700/50 bg-slate-800/40 p-5 hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] overflow-hidden"
                  >
                    <div className="aspect-[4/3] w-full rounded-2xl bg-slate-900/80 mb-5 overflow-hidden relative border border-slate-700/50 group-hover:border-emerald-500/30 transition-colors">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-emerald-500/60 transition-colors">
                          <svg
                            className="w-10 h-10 mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            Image Placeholder
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {cert.date}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 group/btn"
                      >
                        View
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Tech Stack" && (
            <div className="w-full animate-in fade-in zoom-in duration-300">
              <Skills />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
