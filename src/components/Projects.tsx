"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Zeal Travels",
    description: "B2B travel booking platform.",
    features: ["Developed scalable flight booking APIs supporting multi-city and round-trip searches", "Implemented RBAC-based back-office system for agent operations", "Applied Onion Architecture for maintainable backend design", "Optimized SQL queries and reporting systems for analytics"],
    tags: [".NET", "EF Core", "Angular"]
  },
  {
    title: "SoftClinic GenX",
    description: "Healthcare management system.",
    features: ["Developed APIs to manage patient records, appointments, and medical workflows", "Implemented SOAP notes system for clinical documentation", "Integrated multiple third-party services and improved backend performance"],
    tags: [".NET Core", "SQL", "RxJS"]
  },
  {
    title: "C-Vision International",
    description: "Umbraco CMS platform for events.",
    features: ["Enhanced CMS backend for event and speaker management", "Optimized Agenda Session APIs for improved performance", "Implemented event shopping cart functionality"],
    tags: ["Umbraco CMS", "MVC", "C#"]
  },
  {
    title: "Cooper Black",
    description: "B2B eCommerce platform (PrestaShop).",
    features: ["Maintained and enhanced PrestaShop backend modules", "Built reusable components for dynamic content rendering", "Managed secure B2B transaction flow and API integrations"],
    tags: ["PrestaShop", "PHP", "SQL"]
  },
  {
    title: "Cheder Levi Yetzchok",
    description: "Donation platform.",
    features: ["Built donation functionality with Square payment integration", "Added multi-currency support and optimized payment workflows"],
    tags: [".NET API", "Square Integration"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]/50 border-y border-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-mono">04. <span className="neon-text">Projects</span></h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-2xl p-6 flex flex-col h-full neon-border group relative overflow-hidden hover:-translate-y-2 transition-transform duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                {/* Glowing subtle background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-6 z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 group-hover:text-purple-400 transition-colors">
                     <span className="font-mono text-xl">&lt;/&gt;</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 z-10 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <div className="text-gray-400 mb-6 text-sm flex-grow z-10 flex flex-col">
                  <p className="mb-2">{project.description}</p>
                  <ul className="mt-auto space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-cyan-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto z-10 pt-4 border-t border-white/5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-cyan-500/80 bg-cyan-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
