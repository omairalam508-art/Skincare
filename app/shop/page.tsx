"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";

const gallery = [
  { src: "/images/box-cream.png", alt: "BLANQUIQ Bright and Glow Body Mask with product box" },
  { src: "/images/open-cream.png", alt: "Open BLANQUIQ body mask showing silky cream texture" },
  { src: "/images/texture-box.png", alt: "BLANQUIQ cream texture with premium packaging" },
  { src: "/images/product-stack.jpg", alt: "BLANQUIQ product stack with jar and box" }
];

const ingredients = [
  "Niacinamide 2%",
  "AHA 3.5%",
  "Tranexamic Acid",
  "Chromabright",
  "Hentowhite",
  "7X Ceramide",
  "8X Hyaluron",
  "Copper Peptides",
  "Retinol",
  "Collagen",
  "Black Pearl",
  "Korean Black Ginseng"
];

const accordions = [
  {
    title: "Formula",
    copy: "A luxury brightening body mask powered by Niacinamide 2%, AHA 3.5%, Tranexamic Acid, Chromabright, Hentowhite, Ceramides, Hyaluron, Copper Peptides, Retinol, Collagen, Black Pearl, and Korean Black Ginseng."
  },
  {
    title: "How to use",
    copy: "Apply to dull or uneven body areas, leave on for 10 to 15 minutes, rinse thoroughly, and use 2 to 3 times weekly."
  },
  {
    title: "Best for",
    copy: "Uneven-looking tone, dullness, rough texture, dry feel, and skin that needs a polished body-care ritual."
  }
];

export default function ShopPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(0);

  return (
    <main className="min-h-screen bg-porcelain text-forest">
      <SmoothScroll />
      <div className="noise" />

      <header className="sticky top-0 z-50 border-b border-forest/10 bg-porcelain/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Home
          </a>
          <a href="/" className="font-serif text-2xl italic">
            BLANQUIQ
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-forest text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label="Open shopping bag"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-14">
        <div className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.src}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-md border transition ${
                  activeImage === index ? "border-gold" : "border-forest/12"
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`View product image ${index + 1}`}
              >
                <Image src={image.src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>

          <motion.div
            key={gallery[activeImage].src}
            initial={{ opacity: 0.7, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative order-1 aspect-[4/5] overflow-hidden rounded-md bg-white shadow-glass md:order-2"
          >
            <Image
              src={gallery[activeImage].src}
              alt={gallery[activeImage].alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 52vw"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/82 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-forest backdrop-blur">
              New ritual
            </div>
          </motion.div>
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Luxury brightening body mask</p>
          <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Bright & Glow Body Mask with AHA</h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex text-gold" aria-label="Rated five stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-forest/64">4.9 · 128 reviews</span>
          </div>

          <p className="mt-6 text-lg leading-8 text-forest/72">
            Glow Beyond Limits with a silky body mask powered by science-backed brightening actives and nature-led
            nourishment.
          </p>

          <div className="mt-7 flex items-end justify-between border-y border-forest/12 py-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-forest/52">Price</p>
              <p className="mt-1 font-serif text-4xl text-forest">Launch price soon</p>
            </div>
            <p className="rounded-full bg-sage/35 px-4 py-2 text-sm font-semibold text-forest">In stock</p>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em]">Quantity</p>
            <div className="flex h-12 w-36 items-center justify-between rounded-full border border-forest/18 bg-white px-3">
              <button
                aria-label="Decrease quantity"
                className="grid h-8 w-8 place-items-center rounded-full hover:bg-porcelain"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                aria-label="Increase quantity"
                className="grid h-8 w-8 place-items-center rounded-full hover:bg-porcelain"
                onClick={() => setQuantity((value) => Math.min(9, value + 1))}
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-forest px-7 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-glow transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              <ShoppingBag className="h-5 w-5 text-gold" aria-hidden="true" />
              Add to Bag
            </button>
            <button
              className="grid min-h-14 place-items-center rounded-full border border-forest/18 bg-white px-5 text-forest transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-label="Save product"
            >
              <Heart className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <button className="mt-3 min-h-14 w-full rounded-full bg-gold px-7 text-sm font-bold uppercase tracking-[0.18em] text-ink shadow-glow transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
            Buy Now
          </button>

          <div className="mt-7 grid gap-3 text-sm text-forest/72 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-gold" aria-hidden="true" />
              Fast shipping
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" aria-hidden="true" />
              Secure checkout
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
              Luxury ritual
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.82fr_1fr] md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Full active complex</p>
              <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Brightening, smoothing, barrier care.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ingredients.map((ingredient) => (
                <div key={ingredient} className="flex items-center gap-3 rounded-md bg-porcelain p-4">
                  <Check className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-medium">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-forest text-white md:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image
            src="/images/ritual.png"
            alt="BLANQUIQ body mask styled with natural botanicals"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Details</p>
          <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">
            Designed for a body-care ritual that feels visible.
          </h2>
          <div className="mt-8 divide-y divide-white/14">
            {accordions.map((item, index) => (
              <div key={item.title}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  onClick={() => setOpen(open === index ? -1 : index)}
                  aria-expanded={open === index}
                >
                  <span className="font-serif text-3xl">{item.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold transition-transform ${open === index ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-500`}>
                  <p className="overflow-hidden pb-5 leading-8 text-white/72">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
