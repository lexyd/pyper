"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

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
                <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600">
                    Pyper
                </Link>
                <div className="hidden gap-8 md:flex">
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
                    <button
                        onClick={() => scrollToSection("waitlist")}
                        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                        Join Waitlist
                    </button>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu could go here, for now keeping it simple as per request */}
                </div>
            </div>
        </motion.nav>
    );
}
