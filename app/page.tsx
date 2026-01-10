import { Terminal, Briefcase, GraduationCap, Zap, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header / Brand Narrative */}
      <header className="mb-12 space-y-2">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic text-white">
          MOHAMED <span className="text-emerald-500">AHMED</span>
        </h1>
        <p className="text-zinc-400 font-mono text-sm md:text-base uppercase tracking-[0.3em]">
          Building the future // Documenting the process // Teaching the shortcuts
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* Bio Card (Founder/COO) */}
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-4">
              <Briefcase size={20} />
              <span className="font-mono text-sm uppercase">Currently Building</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">COO @ Agabb</h2>
            <p className="text-zinc-400 leading-relaxed">
              Leading East Somaliland's first locally-sourced POS system. 
              Scaling web systems for sales and financial records using Python & AWS.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://agabb.com" className="text-xs font-mono underline decoration-emerald-500 underline-offset-4">VISIT AGABB.COM</a>
          </div>
        </div>

        {/* The One-Click Message Station (Recruiter/Founder/Student) */}
        <div className="md:col-span-2 md:row-span-1 bg-emerald-500 text-black rounded-3xl p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold italic">Connect in one click:</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold uppercase hover:invert transition">I'm a Founder</button>
            <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold uppercase hover:invert transition">I'm a Recruiter</button>
            <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold uppercase hover:invert transition">I'm a Student</button>
          </div>
        </div>

        {/* AI Lab / Sandbox */}
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 ai-glow flex flex-col">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Zap size={20} fill="currentColor" />
            <span className="font-mono text-sm">AI_LAB_V1.0</span>
          </div>
          <div className="flex-1 bg-black rounded-2xl border border-zinc-800 p-4 font-mono text-xs overflow-hidden">
            <p className="text-emerald-500 mb-2">{"//"} Ask my "Brand-Bot" anything...</p>
            <div className="text-zinc-500 italic mb-4">System: Initializing Mohamed_OS context...</div>
            <input 
              type="text" 
              placeholder="What's your experience with Low-level computing?" 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Education (Bennington) */}
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <GraduationCap className="text-emerald-500 mb-2" size={32} />
          <h4 className="font-bold">Bennington College</h4>
          <p className="text-[10px] font-mono text-zinc-500">CS & MATH '27</p>
        </div>

        {/* Maker Skills (Stack) */}
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 overflow-hidden">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
             <Terminal size={14} />
             <span className="text-[10px] font-mono uppercase">The Stack</span>
          </div>
          <div className="text-xs font-mono text-zinc-300">
            Python, Java, C++, Next.js, FastAPI, AWS, Docker
          </div>
        </div>
      </div>

      {/* Footer Socials */}
      <footer className="mt-12 flex justify-between items-center border-t border-zinc-800 pt-6">
        <p className="text-zinc-600 font-mono text-[10px]">© 2026 MOHAMED AHMED // SYSTEM_READY</p>
        <div className="flex gap-6 text-zinc-400">
           <Github size={20} className="hover:text-emerald-500 cursor-pointer transition-colors" />
           <Linkedin size={20} className="hover:text-emerald-500 cursor-pointer transition-colors" />
           <Mail size={20} className="hover:text-emerald-500 cursor-pointer transition-colors" />
        </div>
      </footer>
    </main>
  );
}