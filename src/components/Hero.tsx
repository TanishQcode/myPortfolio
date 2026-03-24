"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Server } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight font-mono text-gray-400"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-white">Tanishq Sharma</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl text-gray-300 font-medium mb-4 neon-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack .NET Developer
          </motion.h2>

          <motion.div
            className="text-xl sm:text-2xl font-medium mb-6 text-gray-400 h-[60px] sm:h-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "I build systems that scale.",
                2000,
                "APIs that perform under pressure.",
                2000,
                "Architectures designed to last.",
                2000,
                "Backend systems built for millions of requests.",
                2000,
                "Clean architecture. High-performance APIs.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/TanishqSharma2025.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg glass neon-border text-white font-medium flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg glass neon-border text-white font-medium flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Illustration */}
        <motion.div
          className="hidden lg:flex relative h-[500px] w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative w-72 h-72 glass rounded-full flex items-center justify-center neon-border shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
              {/* .NET */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform: "rotate(0deg) translateY(-144px) rotate(0deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                    alt=".NET"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* ASP.NET Core */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform: "rotate(45deg) translateY(-144px) rotate(-45deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                    alt="ASP.NET Core"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* C# */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform: "rotate(90deg) translateY(-144px) rotate(-90deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* SQL Server */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    "rotate(135deg) translateY(-144px) rotate(-135deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                    alt="SQL Server"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* Angular */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    "rotate(180deg) translateY(-144px) rotate(-180deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                    alt="Angular"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* Docker */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    "rotate(225deg) translateY(-144px) rotate(-225deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    alt="Docker"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* REST API (Server Icon) */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    "rotate(270deg) translateY(-144px) rotate(-270deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse] text-cyan-400 flex items-center justify-center">
                  <Server className="w-full h-full" />
                </div>
              </div>
              {/* Git */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-[#050505] p-2.5 rounded-full border border-white/10 shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    "rotate(315deg) translateY(-144px) rotate(-315deg)",
                }}
              >
                <div className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-48 h-48 rounded-full bg-[#050505] flex items-center justify-center z-10 border border-white/5 relative">
              <span className="text-4xl font-bold font-mono text-white/80 select-none">
                &lt;/&gt;
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#about" scroll={true}>
          <div className="w-[#30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2 cursor-pointer hover:border-white/50 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 15, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
