"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 text-center md:pt-40">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm text-zinc-800 backdrop-blur-md"
                >
                    <span className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-indigo-500" />
                        <span>Join the revolution in creator management</span>
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl"
                >
                    Stop Managing Email. <br />
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Start Recovering Revenue.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl"
                >
                    The Central Command Center that turns your chaotic inbox into a deal-closing engine.
                    Designed for creators who mean business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="https://tally.so/r/KYe9dk"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-white"
                    >
                        <span className="mr-2">Join the Waitlist</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </motion.div>
            </div>

            {/* Visual Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 w-full max-w-5xl rounded-t-2xl border border-zinc-200 bg-white/50 p-2 shadow-2xl backdrop-blur-xl"
            >
                <div className="flex items-center gap-2 border-b border-zinc-200 p-4">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="mx-auto h-6 w-96 rounded-md bg-zinc-100/50"></div>
                </div>
                <div className="grid h-[400px] w-full grid-cols-12 gap-4 p-4 overflow-hidden">
                    {/* Sidebar */}
                    <div className="col-span-2 hidden rounded-lg bg-zinc-50 border border-zinc-100 md:block p-4 space-y-3">
                        <div className="h-2 w-16 rounded bg-zinc-200"></div>
                        <div className="h-2 w-24 rounded bg-zinc-200"></div>
                        <div className="h-2 w-20 rounded bg-zinc-200"></div>
                    </div>
                    {/* Kanban Board */}
                    <div className="col-span-12 flex gap-4 md:col-span-10 overflow-x-auto">
                        {/* Column 1: Leads */}
                        <div className="flex-1 min-w-[200px] rounded-lg bg-zinc-50/50 border border-zinc-100 p-3">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Inbound Leads</span>
                                <div className="h-4 w-4 rounded bg-zinc-200"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 rounded bg-white shadow-sm border border-zinc-200">
                                    <div className="h-2 w-16 mb-2 rounded bg-indigo-100"></div>
                                    <div className="h-3 w-3/4 rounded bg-zinc-100"></div>
                                </div>
                                <div className="p-3 rounded bg-white shadow-sm border border-zinc-200">
                                    <div className="h-2 w-20 mb-2 rounded bg-indigo-100"></div>
                                    <div className="h-3 w-1/2 rounded bg-zinc-100"></div>
                                </div>
                            </div>
                        </div>
                        {/* Column 2: Negotiation */}
                        <div className="flex-1 min-w-[200px] rounded-lg bg-zinc-50/50 border border-zinc-100 p-3">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Contracting</span>
                                <div className="h-4 w-4 rounded bg-zinc-200"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 rounded bg-white shadow-sm border border-zinc-200 border-l-4 border-l-yellow-400">
                                    <div className="flex justify-between mb-2">
                                        <div className="h-2 w-12 rounded bg-yellow-100"></div>
                                        <div className="h-2 w-2 rounded-full bg-zinc-200"></div>
                                    </div>
                                    <div className="h-3 w-full rounded bg-zinc-100 mb-2"></div>
                                    <div className="h-2 w-1/3 rounded bg-zinc-100"></div>
                                </div>
                            </div>
                        </div>
                        {/* Column 3: Active */}
                        <div className="flex-1 min-w-[200px] rounded-lg bg-zinc-50/50 border border-zinc-100 p-3">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active</span>
                                <div className="h-4 w-4 rounded bg-zinc-200"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 rounded bg-white shadow-sm border border-zinc-200">
                                    <div className="h-2 w-24 mb-2 rounded bg-green-100"></div>
                                    <div className="h-16 w-full rounded bg-zinc-50 mb-2 border border-zinc-100 flex items-center justify-center text-zinc-300 text-xs">Content Draft</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
