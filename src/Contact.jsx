import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleChange = (e) => {
    if (status !== "idle" && status !== "loading") {
      setStatus("idle");
    }
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handle = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Automatically return to idle after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle2 className="w-4 h-4" />
            <span>Message Sent Successfully!</span>
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle className="w-4 h-4" />
            <span>Failed to Send. Try Again</span>
          </>
        );
      default:
        return (
          <>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span>Send Message</span>
          </>
        );
    }
  };

  const getButtonStyles = () => {
    switch (status) {
      case "loading":
        return "bg-emerald-500/80 text-slate-950 cursor-wait opacity-90";
      case "success":
        return "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.4)]";
      case "error":
        return "bg-rose-500 hover:bg-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]";
      default:
        return "bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] active:scale-[0.99]";
    }
  };

  return (
    <section className="px-8 py-24 lg:px-24 flex flex-col items-center text-center min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Let's Work Together
      </h2>
      <p className="text-slate-400 mb-12 max-w-xl">
        I'm currently available for freelance work or full-time roles. If you
        have a project that needs some creative magic, I'd love to hear about
        it.
      </p>

      <form onSubmit={handle} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500 transition-colors"
        />
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500 transition-colors"
        />
        <textarea
          rows={4}
          value={formData.message}
          onChange={handleChange}
          name="message"
          required
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500 resize-none transition-colors"
        />

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`group flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 mt-2 ${getButtonStyles()}`}
        >
          {getButtonContent()}
        </button>
      </form>
    </section>
  );
}
