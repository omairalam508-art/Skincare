"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { ArrowRight } from "lucide-react";
import { MouseEvent, ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  href,
  children,
  variant = "primary"
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.14}px, ${y * 0.22}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        variant === "primary"
          ? "bg-gold text-ink shadow-glow"
          : "border border-white/45 bg-white/8 text-white backdrop-blur"
      ].join(" ")}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
