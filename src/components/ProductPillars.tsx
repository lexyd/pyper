"use client";

import { Bot, ShieldCheck, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pillars = [
    {
        title: "The Intelligent Filter",
        description: "Auto-detects inbox archetypes (Inquiry, Negotiation, Spam) and scores opportunities based on keywords like 'Budget' and 'Deadline'.",
        icon: Bot,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Legal & Admin Layer",
        description: "AI 'Redline' tool highlights risky clauses. Use templates for quick contracts if you don't have your own legal docs yet.",
        icon: ShieldCheck,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "The Delivery Portal",
        description: "Generate branded review links for videos and automate follow-ups if brands don't review within 48 hours.",
        icon: Share2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

export default function ProductPillars() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        Restructured for Revenue
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        Three logical layers to protect and power your business.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg"
                        >
                            <div className={cn("mb-6 inline-flex rounded-lg p-3", pillar.bg, pillar.color)}>
                                <pillar.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                                {pillar.title}
                            </h3>
                            <p className="text-zinc-600">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
