import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500"
        />
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500"
        />
        <textarea
          rows={4}
          value={formData.message}
          onChange={handleChange}
          name="message"
          required
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-200 placeholder-slate-500 resize-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "success" && (
            <p className="mb-4 text-emerald-400 font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mb-4 text-rose-400 font-medium">
              ✕ Failed to send message. Please try again.
            </p>
          )}
        </button>
      </form>
    </section>
  );
}
