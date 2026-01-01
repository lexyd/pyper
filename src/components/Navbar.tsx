"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-center px-4 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-indigo-600"
        >
          Pyper
        </Link>
        <div className="hidden gap-8 md:flex items-center">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            FAQ
          </button>
          <Link
            href="https://tally.so/r/KYe9dk"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-white"
          >
            <span className="mr-2">Join the Waitlist</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu could go here, for now keeping it simple as per request */}
        </div>
      </div>
    </motion.nav>
  );
}
