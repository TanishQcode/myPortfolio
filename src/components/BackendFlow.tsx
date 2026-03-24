"use client";

import { motion } from "framer-motion";
import { Network, ShieldCheck, Route, Workflow, BrainCircuit, Database, Zap, Server, Clock, FileJson } from "lucide-react";

const flowSteps = [
  {
    id: "gateway",
    title: "API Gateway / Reverse Proxy",
    description: "Handles incoming traffic routing, SSL termination, request filtering, and load distribution.",
    icon: <Network className="w-6 h-6" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30"
  },
  {
    id: "middleware",
    title: "ASP.NET Core Middleware Pipeline",
    description: "Processes authentication, authorization, request logging, rate limiting, and exception handling.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30"
  },
  {
    id: "controller",
    title: "Controller / Endpoint Layer",
    description: "Receives HTTP requests, validates models, and delegates processing to the application layer.",
    icon: <Route className="w-6 h-6" />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30"
  },
  {
    id: "service",
    title: "Application Service Layer",
    description: "Coordinates application workflows and orchestrates domain operations.",
    icon: <Workflow className="w-6 h-6" />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30"
  },
  {
    id: "domain",
    title: "Domain / Business Logic Engine",
    description: "Executes core business rules, validation logic, and domain decision-making.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/30"
  },
  {
    id: "repository",
    title: "Repository / Data Access Layer",
    description: "Handles database abstraction using Entity Framework Core, Dapper, and optimized queries.",
    icon: <Database className="w-6 h-6" />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30"
  },
  {
    id: "caching",
    title: "Caching Layer (Redis / Distributed Cache)",
    description: "Reduces database load and improves performance for frequently accessed data.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30"
  },
  {
    id: "db",
    title: "SQL Server Database",
    description: "Stores persistent data such as users, bookings, transactions, and system state.",
    icon: <Server className="w-6 h-6" />,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/30"
  },
  {
    id: "async",
    title: "Async Processing / Background Jobs",
    description: "Handles long-running tasks like email notifications, event publishing, and data processing.",
    icon: <Clock className="w-6 h-6" />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30"
  },
  {
    id: "response",
    title: "Response Serialization",
    description: "Formats the final result into JSON and returns the response to the client.",
    icon: <FileJson className="w-6 h-6" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30"
  }
];

export default function BackendFlow() {
  return (
    <section id="backend-flow" className="py-24 relative overflow-hidden">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] bg-white/10 w-12 md:w-24" />
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-center max-w-2xl leading-tight">
              <span className="neon-text">Inside a Modern .NET Backend Request Pipeline</span>
            </h2>
            <div className="h-[1px] bg-white/10 w-12 md:w-24 hidden md:block" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visualization of how a backend request flows through multiple architectural layers inside a scalable .NET system.
          </p>
        </motion.div>

        <div className="relative py-10">
          {/* Central Track / Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-[#1a1a1a] rounded-full -translate-x-1/2" />
          
          {/* Animated Glow Line traveling down the track */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent rounded-full -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 3, ease: "linear" }}
          />

          <div className="space-y-6 md:space-y-12 relative z-10">
            {flowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  className={`flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full group pl-16 md:pl-0`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, delay: index * 0.4 }}
                >
                  {/* Left/Right Container */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="glass p-6 rounded-2xl neon-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute md:relative w-[calc(100%-3rem)] md:w-auto invisible md:visible">
                       <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[28px] md:static md:left-auto md:w-16 md:h-16 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center shadow-lg -translate-x-1/2 md:translate-x-0 z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-cyan-400/50 bg-[#050505]">
                    <div className={`${step.color} group-hover:animate-pulse`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'pl-0 md:pl-12' : 'pr-0 md:pr-12'}`}>
                    <div className={`glass p-4 sm:p-6 rounded-2xl border ${step.border} ${step.bg} backdrop-blur-md relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-shadow`}>
                      <h3 className={`text-lg sm:text-xl font-bold ${step.color} mb-2`}>{step.title}</h3>
                      {/* Mobile description (shown always since no hover on mobile) */}
                      <p className="text-sm text-gray-400 md:hidden">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Indicator */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          {['.NET', 'ASP.NET Core', 'Entity Framework Core', 'Dapper', 'SQL Server', 'Redis', 'SignalR','REST APIs'].map((tech, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full glass border border-white/10 text-cyan-400/80 font-mono text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
