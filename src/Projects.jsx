export default function Projects() {
  const projects = [
    { title: "E-Commerce Platform", desc: "A full-stack shopping experience." },
    {
      title: "AI Assistant Dashboard",
      desc: "Real-time data visualization with AI.",
    },
    {
      title: "Interactive WebGL Site",
      desc: "Immersive 3D portfolio using Three.js.",
    },
  ];

  return (
    <section className="px-8 py-24 lg:px-24 bg-slate-900/50 min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-12 text-white">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="group p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all cursor-pointer"
          >
            <div className="h-48 mb-6 bg-slate-700/50 rounded-xl group-hover:scale-[1.02] transition-transform duration-300"></div>
            <h3 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
              {p.title}
            </h3>
            <p className="mt-2 text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
