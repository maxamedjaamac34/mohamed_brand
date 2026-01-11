"use client";

import { Briefcase, GraduationCap, Github, Linkedin, FileText, Code, Rocket, ArrowUpRight } from "lucide-react";
import ContactMod from "@/components/ContactMod";
import AIChat from "@/components/AIChat";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-6 lg:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- IDENTITY SECTION --- */}
        <ScrollReveal direction="down">
          <header className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <div className="space-y-2 flex-shrink-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] break-words">
                Mohamed <span className="text-emerald-500">Ahmed</span>
              </h1>
              <p className="mono-font text-zinc-500 text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase px-1">
                Founder // Maker // Educator
              </p>
            </div>
            <div className="md:text-right max-w-xs text-zinc-400 text-xs md:text-sm mono-font leading-relaxed flex-shrink">
              [SYSTEM_STATUS: ACTIVE]<br />
              Building the future of commerce in Somaliland.
            </div>
          </header>
        </ScrollReveal>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Main Venture: Agabb (Spans 2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="relative group overflow-hidden bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-500 h-full min-h-[380px] md:min-h-[420px]">
                <div className="absolute top-0 right-0 p-4 md:p-6 lg:p-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors pointer-events-none">
                  <Briefcase size={80} strokeWidth={1} className="md:w-[100px] md:h-[100px]" />
                </div>
                <div className="relative z-10 space-y-4 pr-40 md:pr-48 lg:pr-56">
                  <div className="flex items-center gap-2 text-emerald-500 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    
                    Current Project
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase text-white leading-tight">COO @ Agabb</h2>
                  <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm font-medium">
                    Leading East Somaliland's first locally-sourced POS system. Scaling inventory for 10+ businesses.
                  </p>
                </div>
                <a href="https://agabb.com" className="relative z-10 inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black rounded-full text-[10px] md:text-xs font-bold uppercase hover:bg-emerald-500 transition-colors w-fit mt-6">
                  Visit Agabb <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px]" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Outreach Layer: One-Click (Spans 3x1) */}
          <div className="md:col-span-3">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-emerald-500 rounded-3xl border border-zinc-800 p-6 md:p-8 flex flex-col justify-between ai-glow h-full min-h-[180px] md:min-h-[200px]">
                <h3 className="text-black text-xl md:text-2xl font-black uppercase italic leading-tight mb-4">Connect Instantly</h3>
                <div className="flex flex-wrap gap-2">
                  <ContactMod role="recruiter" label="I'm a Recruiter" />
                  <ContactMod role="founder" label="I'm a Founder" />
                  <ContactMod role="student" label="I'm a Student" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Education: Bennington (Spans 1x1) */}
          <div>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-zinc-800/60 transition-colors h-full min-h-[180px] md:min-h-[200px]">
                <GraduationCap className="text-emerald-500 mb-3" size={150} />
                <h4 className="font-bold text-xs md:text-sm tracking-tight">BENNINGTON COLLEGE</h4>
                <p className="mono-font text-[9px] md:text-[10px] text-zinc-500 uppercase mt-1">CS & Math '27</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Traditional Layer: Resume (Spans 1x2) */}
          <div className="md:row-span-2 flex items-center justify-center">
            <ScrollReveal direction="up" delay={0.4}>
              <a href="/resume.pdf" className="block bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-emerald-500 group transition-all h-full min-h-[360px] md:min-h-[380px]">
                <FileText className="text-emerald-500 group-hover:text-black mb-3" size={150} />
                <h4 className="font-bold text-xs md:text-sm group-hover:text-black">RESUME</h4>
                <p className="mono-font text-[9px] md:text-[10px] text-zinc-500 group-hover:text-black uppercase mt-1">Export.PDF</p>
              </a>
            </ScrollReveal>
          </div>

          {/* Experiment Layer: AI Pet (Spans 2x3) */}
          <div className="md:col-span-2 md:row-span-3">
            <ScrollReveal direction="up" delay={0.5}>
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden h-full min-h-[540px] md:min-h-[560px]">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                 <div className="relative z-10 h-full flex flex-col">
                   <AIChat />
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Technical Skills (Spans 1x1) */}
          <div>
            <ScrollReveal direction="up" delay={0.6}>
              <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6 md:p-8 flex flex-col justify-center h-full min-h-[180px] md:min-h-[200px]">
                <div className="flex items-center gap-2 text-zinc-500 mb-4 mono-font text-[9px] md:text-[10px] uppercase">
                  <Code size={12} className="md:w-[14px] md:h-[14px]" />
                  <span>Technical_Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Python", "React", "Next.js", "FastAPI", "AWS"].map((s) => (
                    <span key={s} className="px-2.5 md:px-3 py-1 bg-black/40 border border-zinc-800 rounded-md text-[9px] md:text-[10px] mono-font text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <ScrollReveal direction="up" delay={0.7}>
          <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 mono-font text-[9px] md:text-[10px] uppercase tracking-widest">
            <p className="text-center md:text-left">© 2026 Mohamed Ahmed // System_Online</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors" aria-label="GitHub">
                <Github size={14} className="md:w-4 md:h-4" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} className="md:w-4 md:h-4" />
              </a>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </main>
  );
}