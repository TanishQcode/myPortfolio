"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Digiwhiz",
    role: ".NET Full Stack Developer",
    period: "July 2024 – Present",
    points: [
      "Architected backend services for a large-scale B2B travel booking platform",
      "Designed scalable APIs and optimized database queries for high performance",
      "Migrated legacy systems from .NET Framework to .NET 8 improving performance and maintainability",
      "Built RBAC-enabled back-office management systems for travel agents",
      "Implemented microservice-style modular architecture inside the Umbraco ecosystem",
      "Accelerated development using AI-assisted workflows (Copilot, GPT-5, Cursor)"
    ]
  },
  {
    company: "JVS Technologies",
    role: ".NET Full Stack Developer",
    period: "Apr 2023 – May 2024",
    points: [
      "Developed modules for a healthcare management system handling hospital workflows",
      "Designed complex CRUD APIs and optimized SQL queries using stored procedures and CTEs",
      "Implemented RxJS and NgRx state management for scalable frontend architecture",
      "Improved system performance and resolved critical production bugs"
    ]
  },
  {
    company: "smartData Enterprises",
    role: "Full Stack Developer",
    period: "Jul 2022 – Apr 2023",
    points: [
      "Developed backend APIs and integrated third-party services like Twilio and Square",
      "Built robust data handling logic and optimized database interactions",
      "Performed API testing, debugging, and performance optimization"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono">03. <span className="neon-text">Experience</span></h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="md:grid md:grid-cols-4 gap-8 items-start relative group">
                  {/* Timeline Line Desktop */}
                  <div className="hidden md:block absolute left-[23.5%] top-0 bottom-[-3rem] w-[2px] bg-white/10 group-last:bg-transparent" />
                  
                  {/* Timeline Line Mobile */}
                  <div className="md:hidden absolute left-0 top-2 bottom-[-3rem] w-[2px] bg-white/10 group-last:bg-transparent" />

                  {/* Dot */}
                  <div className="absolute left-[-5px] md:left-[23.5%] md:-translate-x-[4.5px] top-2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10" />

                  <div className="md:col-span-1 mb-2 md:mb-0 md:text-right md:pr-12 pt-1 font-mono">
                    <span className="text-sm text-cyan-400">{exp.period}</span>
                  </div>

                  <div className="md:col-span-3 glass p-6 md:p-8 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-purple-400 mb-6 font-medium">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-500 mt-1">▹</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
