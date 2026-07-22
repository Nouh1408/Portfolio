export default function Skills() {
  const tools = [
     "JavaScript", "TypeScript", "React", "React Native", "Expo", 
    "Tailwind CSS", "Bootstrap", "Redux", "Vite", "Figma", "Git", "MongoDB", "React JS","Jitter", "Blender","Supabase"
  ];

  return (
    <section className="px-8 py-24 lg:px-24 min-h-[80vh] flex flex-col justify-center relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A combination of modern frameworks, robust languages, and powerful tools that I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center">
          
          {/* Floating Badges Section */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-8 px-4 flex items-center justify-center gap-3">
              <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 px-4">
              {tools.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-3 bg-slate-800/40 border border-slate-700/50 text-slate-300 rounded-2xl cursor-default hover:-translate-y-1 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300"
                >
                  {tool}
                </div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="mt-16 p-8 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors rounded-3xl relative overflow-hidden group max-w-3xl mx-auto">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
              <h4 className="text-xl font-bold text-white relative z-10 mb-3 text-center">Always Learning</h4>
              <p className="text-slate-400 relative z-10 text-sm leading-relaxed text-center">
                The tech landscape evolves rapidly. I spend my free time exploring new libraries, and building side projects to stay at the cutting edge.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
