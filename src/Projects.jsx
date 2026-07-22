import { projects } from "./data/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="px-8 py-24 lg:px-24 min-h-[80vh] relative overflow-hidden flex-grow flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Works</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A deep dive into some of my most impactful projects, showcasing my journey and expertise in building modern digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-32">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-video rounded-[2rem] overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-slate-800 group-hover:ring-emerald-500/40 transition-all duration-500">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800/40 flex items-center justify-center text-slate-600">
                    <span className="text-lg font-medium">Image coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold self-start tracking-wide">
                  {p.date}
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 tracking-tight">
                  {p.title}
                </h3>
                
                <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
                  {p.description}
                </p>
                
                <div className="pt-2">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors group/link"
                  >
                    View Project 
                    <ArrowUpRight className="w-6 h-6 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
