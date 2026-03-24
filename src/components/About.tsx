"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "3+ Years Experience",
    "Full Stack .NET Developer",
    "Experience with enterprise systems",
    "Strong backend architecture skills",
    "AI-accelerated development workflows"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-mono">01. <span className="neon-text">About Me</span></h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>
                Tanishq Sharma is a Full Stack .NET Developer with strong expertise in backend engineering and enterprise system development. He specializes in designing scalable APIs, optimizing database performance, and building maintainable architectures using <strong className="text-white font-medium">.NET Core, ASP.NET, SQL Server, Angular, and modern development practices</strong>.
              </p>
              <p>
                He has experience building complex systems such as <strong className="text-white font-medium">travel booking platforms, healthcare management systems, and B2B eCommerce applications</strong>, focusing on performance, scalability, and clean architecture principles.
              </p>
              <p>
                Tanishq also integrates <strong className="text-white font-medium">AI-assisted engineering workflows</strong> to improve productivity and accelerate development while maintaining high-quality code standards.
              </p>
            </motion.div>

            <motion.div 
              className="glass p-8 rounded-2xl neon-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Key Highlights</h3>
              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
