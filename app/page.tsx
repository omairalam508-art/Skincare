"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Droplets, Leaf, LucideIcon, Shield, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MagneticButton } from "@/components/MagneticButton";
import { SmoothScroll } from "@/components/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  ["Niacinamide 2%", "Refines uneven tone while supporting a visibly clearer body glow."],
  ["AHA 3.5%", "Glycolic exfoliation helps smooth texture and revive dull skin."],
  ["Tranexamic Acid", "A targeted brightening active for a more even-looking finish."],
  ["Ceramide Complex", "7X ceramide care helps reinforce the moisture barrier."],
  ["8X Hyaluron", "Multi-weight hydration leaves skin looking plump and polished."]
];

const story = [
  ["Brighten", "Niacinamide, Tranexamic Acid, Chromabright, and Hentowhite help improve the look of discoloration."],
  ["Hydrate", "Eight hyaluron weights flood the skin with a cushioned, dewy feel."],
  ["Nourish", "Black pearl, collagen, and Korean black ginseng turn body care into ritual."],
  ["Glow", "AHA, copper peptides, and retinol smooth the path to luminous skin."]
];

const benefits: Array<[string, string, LucideIcon]> = [
  ["Brightening", "A more radiant body glow with modern tone-evening actives.", Sparkles],
  ["Exfoliation", "AHA-powered polish for areas that look rough or dull.", Leaf],
  ["Hydration", "8X Hyaluron helps skin feel fresh, soft, and bouncy.", Droplets],
  ["Barrier Repair", "7X Ceramide support keeps the finish comfortable.", Shield]
];

const reviews = [
  ["The texture feels expensive from the first touch.", "Amira, verified customer"],
  ["My arms look smoother and brighter without feeling stripped.", "Leah, verified customer"],
  ["It turned body care into a weekly ritual I actually keep.", "Nadia, verified customer"]
];

export default function Home() {
  const main = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".floating-product", {
        y: -24,
        rotate: 1.5,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%"
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
        gsap.to(item, {
          yPercent: Number(item.dataset.parallax) || -10,
          ease: "none",
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      const track = document.querySelector(".horizontal-track");
      if (track) {
        gsap.to(track, {
          x: () => `-${track.scrollWidth - window.innerWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: ".story-pin",
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true
          }
        });
      }
    },
    { scope: main }
  );

  return (
    <main ref={main} className="overflow-hidden bg-porcelain">
      <SmoothScroll />
      <div className="noise" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-ink/25 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-serif text-2xl italic tracking-normal">
            BLANQUIQ
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
            <a href="#formula">Formula</a>
            <a href="#ritual">Ritual</a>
            <a href="#reviews">Reviews</a>
          </div>
          <a
            href="/shop"
            className="rounded-full border border-gold/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold"
          >
            Shop
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen bg-ink text-white">
        <Image
          src="/images/product-hero.jpg"
          alt="BLANQUIQ Bright and Glow Body Mask with AHA"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-forest/30 to-ink/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,160,23,0.26),transparent_34%)]" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-5 pb-12 pt-28 md:grid-cols-[1fr_0.82fr] md:px-8 md:pb-16">
          <div className="reveal max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-gold">Luxury brightening body mask</p>
            <h1 className="font-serif text-[clamp(4rem,13vw,11rem)] leading-[0.82] text-white">
              Glow Beyond Limits
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-2xl">
              Luxury Brightening Body Care Powered by Science and Nature.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="/shop">Shop Now</MagneticButton>
              <MagneticButton href="#formula" variant="ghost">
                Discover Formula
              </MagneticButton>
            </div>
          </div>
          <motion.div
            className="floating-product reveal hidden justify-self-end rounded-md border border-white/12 bg-white/8 p-3 shadow-glass backdrop-blur md:block"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/box-cream.png"
              alt="BLANQUIQ product and box"
              width={460}
              height={620}
              className="aspect-[4/5] rounded-sm object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="formula" className="bg-porcelain px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Ingredient experience</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-8xl">
              Clinical actives with a ritual finish.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {ingredients.map(([name, copy]) => (
              <article
                key={name}
                className="reveal group min-h-64 rounded-md border border-forest/10 bg-white p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-glass"
              >
                <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-gold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl text-forest">{name}</h3>
                <p className="mt-4 text-sm leading-7 text-forest/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-ink px-5 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,192,108,0.25),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(212,160,23,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.86fr_1fr] md:items-center">
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Formula showcase</p>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-8xl">
              Dark luxury. Bright skin.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A high-performance body mask featuring Niacinamide 2%, AHA 3.5%, Tranexamic Acid, Chromabright,
              Hentowhite, 7X Ceramide, 8X Hyaluron, Copper Peptides, Retinol, Collagen, Black Pearl, and Korean Black
              Ginseng.
            </p>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image
              src="/images/texture-box.png"
              alt="BLANQUIQ cream texture with box"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-parallax="-12"
            />
          </div>
        </div>
      </section>

      <section className="story-pin bg-forest py-24 text-white md:py-0">
        <div className="mb-10 px-5 md:px-8 md:pt-24">
          <div className="mx-auto max-w-7xl">
            <p className="reveal text-xs font-bold uppercase tracking-[0.28em] text-gold">Product story</p>
          </div>
        </div>
        <div className="horizontal-track flex w-max gap-5 px-5 pb-20 md:px-8 md:pb-24">
          {story.map(([title, copy], index) => (
            <article
              key={title}
              className="w-[82vw] max-w-[760px] shrink-0 rounded-md border border-white/15 bg-white/8 p-8 backdrop-blur md:p-12"
            >
              <span className="text-sm font-bold uppercase tracking-[0.26em] text-gold">0{index + 1}</span>
              <h2 className="mt-8 font-serif text-6xl md:text-9xl">{title}</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-porcelain md:grid-cols-2">
        <div className="relative min-h-[640px] overflow-hidden">
          <Image
            src="/images/open-cream.png"
            alt="Silky BLANQUIQ cream texture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-parallax="-9"
          />
        </div>
        <div className="flex min-h-[640px] flex-col justify-center px-5 py-20 md:px-14">
          <p className="reveal text-xs font-bold uppercase tracking-[0.28em] text-gold">Texture experience</p>
          <h2 className="reveal mt-4 font-serif text-[clamp(5rem,12vw,12rem)] leading-[0.8] text-forest">
            Silky.
            <br />
            Lightweight.
            <br />
            Luxurious.
          </h2>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-5xl leading-none text-forest md:text-8xl">Visible benefits.</h2>
            <p className="max-w-md text-base leading-7 text-forest/68">
              A body mask designed for dull, uneven, dehydrated, and rough-feeling skin.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {benefits.map(([title, copy, Icon]) => (
              <article key={title as string} className="reveal rounded-md bg-porcelain p-6">
                <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-8 font-serif text-3xl text-forest">{title as string}</h3>
                <p className="mt-4 text-sm leading-7 text-forest/68">{copy as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ritual" className="relative bg-forest px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1fr] md:items-center">
          <div className="relative min-h-[620px] overflow-hidden rounded-md">
            <Image
              src="/images/ritual.png"
              alt="BLANQUIQ product with natural botanicals"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.28em] text-gold">How to use</p>
            <h2 className="reveal mt-4 font-serif text-5xl leading-none md:text-8xl">A ritual in four moves.</h2>
            <div className="mt-10 space-y-6">
              {["Apply to dull or uneven areas.", "Massage into a smooth, even layer.", "Leave for 10 to 15 minutes.", "Rinse and repeat 2 to 3 times weekly."].map(
                (step, index) => (
                  <div key={step} className="reveal flex gap-5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-xl leading-8 text-white/78">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-ink px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal font-serif text-5xl leading-none md:text-8xl">The glow report.</h2>
          <div className="mask-gradient mt-12 flex gap-5 overflow-x-auto pb-4">
            {reviews.map(([quote, name]) => (
              <article key={name} className="min-w-[310px] rounded-md border border-white/15 bg-white/10 p-6 backdrop-blur md:min-w-[430px]">
                <div className="flex gap-1 text-gold" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-8 font-serif text-3xl leading-tight">{quote}</p>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/54">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Before and after</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-8xl">Compare the ritual.</h2>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal mb-8 font-serif text-5xl leading-none text-forest md:text-8xl">Questions, clarified.</h2>
          <FaqAccordion />
        </div>
      </section>

      <section id="shop" className="relative min-h-screen bg-ink text-white">
        <Image
          src="/images/box-close.jpg"
          alt="BLANQUIQ premium package close-up"
          fill
          className="object-cover opacity-62"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-forest/35 to-ink/90" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 py-16 md:px-8">
          <div className="reveal max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              <Check className="h-4 w-4" aria-hidden="true" />
              0% mineral oil · 0% phthalates
            </p>
            <h2 className="font-serif text-[clamp(4.8rem,13vw,12rem)] leading-[0.82]">Glow Beyond Limits</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              Bright & Glow Body Mask with AHA, Niacinamide 2%, and AHA 3.5%.
            </p>
            <div className="mt-8">
              <MagneticButton href="/shop">Shop BLANQUIQ</MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
