import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-8 py-24 lg:px-24 flex flex-col items-center text-center min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Work Together</h2>
      <p className="text-slate-400 mb-12 max-w-xl">
        I'm currently available for freelance work or full-time roles. If you have a project that needs some creative magic, I'd love to hear about it.
      </p>
      
      <form className="w-full max-w-md flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500"
        />
        <textarea 
          rows={4}
          placeholder="Your Message" 
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500 resize-none"
        />
        <button 
          type="button"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors mt-2"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </section>
  );
}
