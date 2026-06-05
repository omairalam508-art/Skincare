"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How often should I use the body mask?",
    a: "Use two to three times per week on areas that need visible smoothing and radiance."
  },
  {
    q: "How long should it stay on skin?",
    a: "Apply an even layer, leave for 10 to 15 minutes, then rinse thoroughly."
  },
  {
    q: "Can I use it with other exfoliating products?",
    a: "Because the formula contains AHA and retinol, keep other exfoliants on alternate days and patch test first."
  },
  {
    q: "What makes it feel premium?",
    a: "The formula pairs brightening actives with ceramides, hyaluron, collagen, black pearl, and Korean black ginseng for a silky body-care ritual."
  }
];

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-forest/15">
      {faqs.map((item, index) => (
        <div key={item.q}>
          <button
            className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span className="font-serif text-2xl text-forest md:text-3xl">{item.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === index ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <div className={`${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-500`}>
            <p className="overflow-hidden pb-6 text-base leading-8 text-forest/75 md:text-lg">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
