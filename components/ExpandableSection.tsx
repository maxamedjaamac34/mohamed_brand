"use client";

import { cn } from "@/lib/utils";

export default function ExpandableSection({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-600 ease-out",
        open ? "max-h-[600px] opacity-100 mt-48" : "max-h-0 opacity-0"
      )}
    >
      {children}
    </div>
  );
}
