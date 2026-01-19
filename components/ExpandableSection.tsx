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
        "grid transition-all duration-500 ease-out",
        open ? "grid-rows-[1fr] opacity-100 mt-48" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden"></div>
      {children}
    </div>
  );
}
