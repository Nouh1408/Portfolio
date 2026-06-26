import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const { RiveComponent, rive } = useRive({
    src: "https://public.rive.app/community/runtime-files/1298-2487-animated-login-screen.riv",
    stateMachines: "Login Machine",
    autoplay: true,
  });

  const isCheckingInput = useStateMachineInput(rive, "Login Machine", "isChecking");
  const lookInput = useStateMachineInput(rive, "Login Machine", "numLook");
  const successInput = useStateMachineInput(rive, "Login Machine", "trigSuccess");

  const handleMouseEnter = () => {
    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handleMouseLeave = () => {
    if (isCheckingInput) {
      isCheckingInput.value = false;
    }
    if (successInput) {
        successInput.fire();
    }
  };

  const handleMouseMove = (e) => {
    if (lookInput && isCheckingInput && isCheckingInput.value) {
      // Calculate a value between 0 and 100 based on mouse X position relative to window width
      const percentage = (e.clientX / window.innerWidth) * 100;
      lookInput.value = percentage;
    }
  };

  return (
    <section 
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] px-8 lg:px-24"
      onMouseMove={handleMouseMove}
    >
      {/* Text Content */}
      <div 
        className="z-10 flex flex-col items-start max-w-2xl space-y-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium shadow-[0_0_15px_rgba(52,211,153,0.1)]">
          <Sparkles className="w-4 h-4 mr-2" />
          My Journey
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Designing with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Purpose</span>
        </h1>
        
        <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
          <p>
            I discovered programming during college, and what started as coursework quickly became a passion. The more I learned, the more I wanted to explore beyond the classroom—building projects, experimenting with new technologies, and constantly challenging myself to improve.
          </p>
          <p>
            Today, I enjoy creating modern, responsive web and mobile applications with a strong focus on clean code, performance, and user experience. I'm always eager to learn something new, whether it's a different framework, a better development workflow, or a technology I've never worked with before. My goal is to keep growing as a software engineer by building meaningful products and taking on new challenges.
          </p>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all hover:gap-3 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] group">
            Let's Talk <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Rive Canvas */}
      <div className="w-full h-[400px] lg:w-[600px] lg:h-[600px] mt-12 lg:mt-0 relative pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
        <RiveComponent className="w-full h-full drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]" />
      </div>
    </section>
  );
}
