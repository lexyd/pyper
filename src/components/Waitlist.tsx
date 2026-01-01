"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Waitlist() {
    return (
        <section id="waitlist" className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50"
                >
                    <Mail className="h-8 w-8 text-indigo-600" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl"
                >
                    Ready to reclaim your inbox?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600"
                >
                    Join the waitlist today and be the first to experience the future of creator
                    management. Stop drowning in email and start closing more deals.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-col items-center gap-4"
                >
                    <Link
                        href="https://tally.so/r/KYe9dk"
                        className="group inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-white"
                    >
                        <span className="mr-2">Join the Waitlist</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <p className="text-sm text-zinc-500">
                        Limited spots available for early access.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
