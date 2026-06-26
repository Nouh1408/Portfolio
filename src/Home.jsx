import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Link } from "react-router-dom";

export default function Home() {
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
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-8 lg:px-24">
      {/* Text Content */}
      <div className="z-10 flex flex-col items-start max-w-2xl space-y-6">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Building Web & Mobile <br /> Experiences
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          I am a front-end and mobile developer building responsive websites and
          React Native apps. I work with React, Expo, Tailwind, and REST APIs to
          create clean, user-friendly digital products.
        </p>
        
        <div className="flex gap-4 pt-4">
          <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.4)]">
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
  );
}
