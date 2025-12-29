import { AlertTriangle, CheckCircle2, Inbox, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProblemSolution() {
    return (
        <section className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        The Inbox is Broken for Creators
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        High-stakes opportunities are buried in low-priority noise.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* The Problem */}
                    <div className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50/50 p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="rounded-lg bg-red-100 p-2 text-red-600">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900">The Chaos</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Missed lucrative deadlines due to clutter",
                                "Legal risks hidden in long email threads",
                                "brand deals mixed with spam and fan mail",
                                "Manual follow-ups slipping through cracks"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-700">
                                    <Inbox className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white p-8 shadow-xl">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-500/20 blur-xl"></div>
                        <div className="mb-6 flex items-center gap-3">
                            <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900">The Engine</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "AI auto-detects deals & prioritizes them",
                                "Visual pipeline: Lead → Contract → Paid",
                                "Automatic 'Red Flag' legal highlighting",
                                "One-click branded review links"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-700">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
