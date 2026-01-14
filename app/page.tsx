"use client";

import { useState } from "react";
import DisplayCards from "@/components/ui/display-cards";
import ExpandableSection from "@/components/ExpandableSection";
import { Code, Rocket, Brain } from "lucide-react";

type Section = "build" | "ship" | "learn" | null;

export default function Page() {
  const [active, setActive] = useState<Section>(null);

  const cards = [
    // FRONT CARD — BUILD
    {
      icon: <Code className="size-4 text-emerald-300" />,
      title: "Build",
      description: "Engineering & systems",
      date: "Always",
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      descriptionClassName: "absolute left-6 top-1/2 -translate-y-1/2",
      className:
        "[grid-area:stack] hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 cursor-pointer",
      onClick: () => setActive(active === "build" ? null : "build"),
    },

    // MIDDLE CARD — SHIP
    {
      icon: <Rocket className="size-4 text-blue-300" />,
      title: "Ship",
      description: "Startups & execution",
      date: "In progress",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      descriptionClassName: "absolute left-6 top-1/2 -translate-y-1/2",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 cursor-pointer",
      onClick: () => setActive(active === "ship" ? null : "ship"),
    },

    // BACK CARD — LEARN
    {
      icon: <Brain className="size-4 text-purple-300" />,
      title: "Learn",
      description: "Growth & experimentation",
      date: "Ongoing",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      descriptionClassName: "absolute left-6 top-1/2 -translate-y-1/2",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 cursor-pointer",
      onClick: () => setActive(active === "learn" ? null : "learn"),
    },
  ];

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        {/* STACKED CARDS */}
        <DisplayCards cards={cards} />

        {/* EXPANDED CONTENT */}
        <ExpandableSection open={active === "build"}>
          <div className="mt-8 space-y-6 text-sm text-muted-foreground">
            {/* Positioning */}
            <p className="max-w-2xl">
              I focus on building reliable, well-structured software systems — from
              backend APIs and data models to full-stack applications that hold up
              under real usage.
            </p>

            {/* Focus areas */}
            <div className="space-y-2">
              <p className="text-foreground font-medium">Core focus</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Backend systems & API design</li>
                <li>Data modeling & persistence</li>
                <li>System clarity, correctness, and scale</li>
                <li>Bridging product thinking with engineering execution</li>
              </ul>
            </div>

            {/* Tech snapshot */}
            <div className="space-y-2">
              <p className="text-foreground font-medium">Tools & stack</p>
              <p className="max-w-2xl">
                TypeScript, Python, FastAPI, PostgreSQL, MongoDB, Redis, React,
                Next.js, Docker, Git
              </p>
            </div>

            {/* Quiet CTA */}
            <div className = "pt-2">
              <button className = "text-foreground underline underline-offset-4 hover:opacity-80 transition">
              View résumé
              </button>
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection open={active === "ship"}>
          <div className="mt-8 space-y-6 text-sm text-muted-foreground">

            {/* Execution framing */}
            <p className="max-w-2xl">
              I co-found and ship products with a focus on solving real operational
              problems, especially in emerging and under-resourced markets.
            </p>

            {/* Startup highlight */}
            <div className="space-y-2">
              <p className="text-foreground font-medium">Agabb — POS & bookkeeping</p>
              <p className="max-w-2xl">
                Agabb is a bilingual point-of-sale and bookkeeping platform designed
                for small businesses in East Africa. It helps operators track sales,
                inventory, and cash flow in environments where tooling is often absent
                or fragmented.
              </p>
            </div>

            {/* Ownership */}
            <div className="space-y-2">
              <p className="text-foreground font-medium">My role</p>
              <ul className="list-disc list-inside space-y-1">
                <li>System design and backend architecture</li>
                <li>Data modeling for sales, inventory, and reporting</li>
                <li>Product iteration based on real user workflows</li>
                <li>Operational decisions beyond just writing code</li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="space-y-2">
              <p className="text-foreground font-medium">How I think about shipping</p>
              <p className="max-w-2xl">
                Shipping means making tradeoffs — choosing reliability over novelty,
                clarity over complexity, and learning from real usage instead of
                assumptions.
              </p>
            </div>

            {/* Quiet CTA */}
            <div className="pt-2">
              <button className="text-foreground underline underline-offset-4 hover:opacity-80 transition">
                See product work
              </button>
            </div>
          </div>
        </ExpandableSection>


        <ExpandableSection open={active === "learn"}>
          <div className="mt-8 space-y-6">

            {/* Framing */}
            <p className="text-sm text-muted-foreground max-w-2xl">
              I treat learning as an active process — experimenting with ideas,
              tools, and systems to better understand how things work and how
              they might work differently.
            </p>

            {/* AI Chat */}
            <div className="max-w-2xl">
              AIChat
            </div>

            {/* Subtle guidance */}
            <p className="text-xs text-muted-foreground max-w-2xl italic">
              You can ask about my work, experiments, technical decisions, or how I
              think about building and shipping software.
            </p>

          </div>
        </ExpandableSection>

        
      </div>
    </div>
    
  );
}
