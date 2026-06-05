"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfterSlider() {
  const [value, setValue] = useState(54);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-4xl overflow-hidden rounded-md bg-forest shadow-glass">
      <Image
        src="/images/product-stack.jpg"
        alt="BLANQUIQ body mask jars with packaging"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 72vw"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <Image
          src="/images/open-cream.png"
          alt="Open BLANQUIQ cream texture and packaging"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 72vw"
        />
      </div>
      <div className="absolute inset-y-0 w-px bg-white shadow-glow" style={{ left: `${value}%` }} />
      <div
        className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-ink/60 text-white backdrop-blur"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      >
        <span className="h-1 w-5 rounded-full bg-gold" />
      </div>
      <input
        aria-label="Compare product texture and finished packaging"
        className="absolute inset-x-6 bottom-6 z-10 accent-gold"
        max="86"
        min="14"
        type="range"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
        Texture
      </div>
      <div className="absolute right-5 top-5 rounded-full bg-ink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
        Finish
      </div>
    </div>
  );
}
