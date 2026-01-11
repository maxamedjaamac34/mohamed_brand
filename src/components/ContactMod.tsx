//The Opportunity Layer (Logic)

// Purpose: Handles "One-Click" messaging based on the visitor's role.

"use client";

import { cn } from "@/lib/utils";

interface ContactProps {
  role: "recruiter" | "founder" | "student";
  label: string;
}

export default function ContactMod({ role, label }: ContactProps) {
  const sendMessage = async () => {
    // This will connect to your FastAPI /action endpoint
    console.log(`Priority ping sent for: ${role}`);
    alert(`System: Direct message template for ${role} initiated!`);
  };

  return (
    <button 
      onClick={sendMessage}
      className="bg-black/90 text-white border-2 border-black/40 px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-black hover:border-white/50 hover:shadow-xl hover:shadow-black/30 hover:scale-105 transition-all active:scale-95 backdrop-blur-sm whitespace-nowrap"
    >
      {label}
    </button>
  );
}