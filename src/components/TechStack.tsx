"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL", "PostgreSQL", "HTML", "CSS", "C++"]
  },
  {
    name: "Frameworks & Libs",
    items: [".NET Core", "ASP.NET Core MVC", "Web API", "Entity Framework Core", "Dapper", "Angular", "NgRx", "RxJS"]
  },
  {
    name: "Tools & Platforms",
    items: ["Git", "GitHub", "Sourcetree", "Bitbucket", "Postman", "Swagger", "Visual Studio", "Figma", "IIS", "SignalR"]
  },
  {
    name: "CMS / AI",
    items: ["Umbraco", "PrestaShop", "GPT-5", "GitHub Copilot", "Windsurf", "Cursor"]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative bg-[#0a0a0a]/50 border-y border-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-mono">02. <span className="neon-text">Tech Stack</span></h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, idx) => (
              <motion.div 
                key={idx}
                className="glass p-6 rounded-2xl neon-border hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-md text-gray-300 hover:text-white hover:border-cyan-500/50 transition-colors cursor-default"
                    >
                      {tech}
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
