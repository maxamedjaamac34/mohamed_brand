"use client";

import { Briefcase, GraduationCap, Github, Linkedin, FileText, Code, Rocket } from "lucide-react";
import ContactMod from "@/components/ContactMod";
import AIChat from "@/components/AIChat";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl mx-auto">
      {/* Brand Identity Header */}
      <ScrollReveal direction="down">
        <header className="mb-12 md:mb-16 lg:mb-20 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tight uppercase leading-[0.9] mb-4">
            Mohamed <span className="text-emerald-500 block lg:inline">Ahmed</span>
          </h1>
          
          <p className="mono-font text-zinc-400 text-sm sm:text-base tracking-[0.3em] uppercase">
            Founder // Maker // Educator
          </p>
          <p className="mt-6 text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Building the future of commerce in Somaliland. Computer Science & Mathematics student at Bennington College. 
            Passionate about solving real-world problems through technology.
          </p>
        </header>
      </ScrollReveal>

      {/* Side-by-Side Card Layout */}
      <div className="space-y-6 md:space-y-10 lg:space-y-12">
        
        {/* Career: Agabb - Black Card with White Text */}
        <ScrollReveal delay={0.1}>
          <div className="bg-gradient-to-br from-black to-zinc-950 rounded-3xl p-8 md:p-10 lg:p-12 mx-auto max-w-5xl border border-zinc-800/50 hover:border-emerald-500/40 transition-all duration-300 group shadow-2xl hover:shadow-emerald-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/40 group-hover:bg-emerald-500/30 transition-colors">
                <Briefcase className="text-emerald-400" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2 text-white">COO @ Agabb</h2>
                <p className="text-emerald-400 mono-font text-sm uppercase tracking-wider">2024 - Present</p>
              </div>
            </div>
            <p className="text-zinc-200 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
              Leading Somaliland's first locally-sourced Point of Sale system. Building technology that solves 
              real inventory and financial scaling challenges for local businesses. Combining deep technical 
              expertise with on-the-ground market understanding.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-zinc-900/80 rounded-lg text-sm mono-font border border-zinc-700/50 text-white">POS Systems</span>
              <span className="px-4 py-2 bg-zinc-900/80 rounded-lg text-sm mono-font border border-zinc-700/50 text-white">Inventory Management</span>
              <span className="px-4 py-2 bg-zinc-900/80 rounded-lg text-sm mono-font border border-zinc-700/50 text-white">Financial Tech</span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm uppercase tracking-wider transition-colors group/link">
              View Venture
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Two Column Section: Education & Resume */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Education - Emerald Green Card */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group h-full flex flex-col justify-center items-center text-center shadow-xl hover:shadow-emerald-500/30 text-white">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                <GraduationCap className="text-white" size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 text-white">Bennington College</h3>
              <p className="text-emerald-100 mono-font text-sm uppercase tracking-wider mb-4">Class of 2027</p>
              <div className="space-y-2 text-white">
                <p className="text-lg font-semibold">Computer Science</p>
                <p className="text-lg font-semibold">Mathematics</p>
              </div>
              <p className="mt-6 text-emerald-50 text-sm leading-relaxed max-w-sm opacity-90">
                Pursuing interdisciplinary studies with focus on algorithms, data structures, and mathematical modeling.
              </p>
            </div>
          </ScrollReveal>

          {/* Resume - White/Light Card */}
          <ScrollReveal delay={0.3} direction="left">
            <div className="bg-gradient-to-br from-white to-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-200 hover:border-emerald-400/50 transition-all duration-300 group h-full flex flex-col justify-center items-center text-center cursor-pointer shadow-xl hover:shadow-2xl">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 mb-6 group-hover:scale-110 transition-transform">
                <FileText className="text-emerald-600" size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 text-zinc-900 group-hover:text-emerald-600 transition-colors">Resume</h3>
              <p className="text-emerald-600 mono-font text-sm uppercase tracking-wider mb-4">Download PDF</p>
              <p className="text-zinc-700 text-sm mono-font border border-zinc-300 rounded-lg px-4 py-2 bg-zinc-100">
                LATEX_EXPORT.PDF
              </p>
              <p className="mt-6 text-zinc-600 text-sm leading-relaxed max-w-sm">
                Comprehensive overview of technical skills, work experience, and academic achievements.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* One-Click Outreach - Bright Emerald */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-10 lg:p-12 mx-auto max-w-5xl text-black shadow-2xl hover:shadow-emerald-500/40 transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="text-black/70" size={32} />
              <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight">One-Click Outreach</h3>
            </div>
            <p className="text-black/80 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              Get in touch instantly. Choose your role and I'll send you a personalized message tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <ContactMod role="recruiter" label="Recruiter" />
              <ContactMod role="founder" label="Founder" />
              <ContactMod role="student" label="Student" />
            </div>
          </div>
        </ScrollReveal>

        {/* AI Chat - Dark Zinc with Emerald Accents */}
        <ScrollReveal delay={0.5}>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 md:p-10 lg:p-12 mx-auto max-w-5xl border border-zinc-700/50 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/20 min-h-[400px] flex flex-col">
            <AIChat />
          </div>
        </ScrollReveal>

        {/* Skills Section - Light Zinc with White Text */}
        <ScrollReveal delay={0.6}>
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-10 mx-auto max-w-5xl border border-zinc-700/50 hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-emerald-400" size={32} />
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "C++", "Python", "JavaScript", "TypeScript",
                "React", "Next.js", "Node.js", "FastAPI",
                "PostgreSQL", "MongoDB", "Git", "Docker",
                "Linux", "AWS", "REST APIs", "GraphQL"
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-zinc-700/50 rounded-xl border border-zinc-600/50 hover:border-emerald-500/60 hover:bg-zinc-700/70 transition-all text-center mono-font text-sm font-medium text-white">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Footer System Status */}
      <ScrollReveal delay={0.7}>
        <footer className="mt-16 md:mt-20 lg:mt-24 border-t border-zinc-900 pt-8 md:pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 mono-font text-xs md:text-sm text-zinc-600">
          <p className="uppercase tracking-wider">ST_READY // MOHAMED_OS_V1.0</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Github size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Linkedin size={20} className="hover:scale-110 transition-transform" />
            </a>
          </div>
        </footer>
      </ScrollReveal>
    </main>
  );
}