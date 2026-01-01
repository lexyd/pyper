"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Does Pyper handle payments directly?",
        answer: "Pyper tracks all your payments and invoices in one place, giving you a clear view of who pays on time and who's dragging their feet. We integrate with your existing invoicing tools to keep everything synced (Net 30/60? No problem)."
    },
    {
        question: "Is this only for large creators?",
        answer: "Not at all. Whether you're just landing your first brand deal or managing a multi-platform empire, Pyper scales with you. It's designed to professionalize your workflow from day one."
    },
    {
        question: "Can I invite my manager or agency?",
        answer: "Absolutely. Pyper is built for collaboration. You can invite your talent manager, agency rep, or virtual assistant to manage specific parts of your deal flow."
    },
    {
        question: "What about usage rights and contracts?",
        answer: "We highlight critical contract terms like usage rights, exclusivity, and deliverables automatically. No more accidentally signing away perpetual rights for a one-off post."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                    Common Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50"
                            >
                                <span className="text-lg font-medium text-zinc-900">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-400">
                                    {openIndex === i ? (
                                        <Minus className="h-4 w-4" />
                                    ) : (
                                        <Plus className="h-4 w-4" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="border-t border-zinc-100 px-6 pb-6 pt-2 text-zinc-600">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
