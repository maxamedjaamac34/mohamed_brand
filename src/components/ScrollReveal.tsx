"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15, margin: "-50px" });
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      // On initial mount, start hidden for smooth entrance
      controls.set("hidden");
      return;
    }
    
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, mounted]);

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  const variants = {
    hidden: {
      ...directionVariants[direction],
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99] as [number, number, number, number],
      },
    },
  };

  // Always render motion.div with same initial state to avoid hydration mismatch
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ height: '100%' }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

