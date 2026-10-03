import { useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Sparkles, ArrowRight, Briefcase, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CvModal from "./CvModal";

export default function About() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const { RiveComponent, rive } = useRive({
    src: "/animated-login-screen.riv",
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

  const handleCharacterClick = () => {
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
    <>
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
              I got into programming during college. Most of my experience is with React and React Native, building web and mobile apps and learning by actually making things.
            </p>
            <p>
              I&apos;m also exploring backend development with Node.js and databases because I want to understand more of what happens behind the UI. I enjoy trying new technologies, working on projects, and constantly finding ways to improve.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-900 bg-emerald-400 border-2 border-emerald-400 rounded-full hover:bg-emerald-300 hover:border-emerald-300 transition-all hover:gap-3 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] group">
              Let's Talk <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-emerald-400 border-2 border-emerald-400/30 rounded-full bg-emerald-400/10 hover:bg-emerald-400 hover:border-emerald-400 hover:text-slate-900 transition-all hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] group cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> View CV
            </button>
            <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-300 border-2 border-slate-700 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-all group">
              <Briefcase className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> View Projects
            </Link>
          </div>
        </div>

      {/* Rive Canvas & Interaction */}
      <div className="flex flex-col items-center w-full lg:w-[550px] mt-12 lg:mt-0 relative">
        <div className="w-full h-[380px] lg:h-[480px] relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
          <RiveComponent className="w-full h-full drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]" />
        </div>

        <button
          type="button"
          onClick={handleCharacterClick}
          className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-sm text-emerald-400 border-2 border-emerald-400/30 rounded-full bg-slate-900/90 hover:bg-emerald-400/10 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(52,211,153,0.15)] group cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>Say Hello!</span>
        </button>
      </div>
    </section>

    {/* Scrollable CV Popup Modal */}
    <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
  </>
  );
}
