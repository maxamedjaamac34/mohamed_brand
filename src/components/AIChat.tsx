// The Experiment Layer (AI UI)

// Purpose: The "Mohamed's Pet" interactive terminal interface.


"use client";

import { useState } from "react";
import { Zap } from "lucide-react";

export default function AIChat() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 text-emerald-400 mb-6">
        <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <Zap size={24} fill="currentColor" className="animate-pulse" />
        </div>
        <div>
          <span className="mono-font text-sm md:text-base uppercase tracking-tighter font-bold block">Experiment Layer</span>
          <span className="mono-font text-xs text-emerald-500/70">Pet_Bot_v1.0</span>
        </div>
      </div>
      <div className="flex-1 bg-black/40 rounded-2xl p-6 md:p-8 mono-font overflow-hidden border border-zinc-700/30 hover:border-emerald-500/20 transition-colors backdrop-blur-sm">
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">[SYSTEM]</span>
            <p className="text-emerald-400 font-semibold">Initialized ✓</p>
          </div>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
            "I'm Mohamed's digital assistant. Ask me about his Agabb POS system, technical skills, or anything else you'd like to know."
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3 border-t border-zinc-700/50 pt-6">
          <span className="text-emerald-500 font-bold text-lg">{">"}</span>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none w-full text-white text-sm md:text-base placeholder:text-zinc-600 focus:text-emerald-400 transition-colors"
            placeholder="Type your question..."
          />
        </div>
      </div>
    </div>
  );
}