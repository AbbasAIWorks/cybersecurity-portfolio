import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel p-6 transition-colors duration-300 hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}
