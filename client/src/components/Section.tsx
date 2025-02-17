import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  darker?: boolean;
}

export default function Section({ children, className, darker = false }: SectionProps) {
  return (
    <section className={cn(
      "py-16",
      darker && "bg-muted",
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
