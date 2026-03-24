"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("All fields are required.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="container-custom max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm md:text-md text-cyan-400 font-mono mb-4 tracking-widest uppercase">05. What&apos;s Next?</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let&apos;s build something amazing together.
          </p>

          <form className="max-w-md mx-auto space-y-4 mb-16 text-left" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400 font-medium">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400 font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-400 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                placeholder="Hello Tanishq..."
              />
            </div>

            {status === "success" ? (
              <p className="w-full py-4 text-center text-cyan-400 font-medium">
                Message sent successfully. I will get back to you soon.
              </p>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {(status === "error" || errorMsg) && (
                  <p className="text-red-400 text-sm text-center mt-2">{errorMsg}</p>
                )}
              </>
            )}
          </form>

          <div className="flex flex-col items-center justify-center gap-6">
            <a href="mailto:emailfortanishq@gmail.com" className="text-gray-400 hover:text-cyan-400 flex items-center gap-2 transition-colors">
              <Mail className="w-5 h-5" /> emailfortanishq@gmail.com
            </a>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
