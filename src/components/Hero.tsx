import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 text-center md:pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
                <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm text-zinc-800 backdrop-blur-md">
                    <span className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-indigo-500" />
                        <span>Join the revolution in creator management</span>
                    </span>
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
                    Stop Managing Email. <br />
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Start Recovering Revenue.
                    </span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl">
                    The Central Command Center that turns your chaotic inbox into a deal-closing engine.
                    Designed for creators who mean business.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#waitlist"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-white"
                    >
                        <span className="mr-2">Join the Waitlist</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>

                    <button className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900">
                        Learn how it works →
                    </button>
                </div>
            </div>

            {/* Visual Mockup Placeholder or Abstract UI Element */}
            <div className="mt-16 w-full max-w-5xl rounded-t-2xl border border-zinc-200 bg-white/50 p-2 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-zinc-200 p-4">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="mx-auto h-6 w-96 rounded-md bg-zinc-100"></div>
                </div>
                <div className="grid h-[400px] w-full grid-cols-12 gap-4 p-4">
                    {/* Sidebar */}
                    <div className="col-span-2 hidden rounded-lg bg-zinc-100 md:block"></div>
                    {/* Kanban Board */}
                    <div className="col-span-12 flex gap-4 md:col-span-10">
                        <div className="flex-1 rounded-lg bg-zinc-50 p-3">
                            <div className="mb-3 h-2 w-20 rounded bg-indigo-500/20"></div>
                            <div className="h-24 rounded border border-zinc-200 bg-white shadow-sm"></div>
                        </div>
                        <div className="flex-1 rounded-lg bg-zinc-50 p-3">
                            <div className="mb-3 h-2 w-20 rounded bg-yellow-500/20"></div>
                            <div className="mb-2 h-24 rounded border border-zinc-200 bg-white shadow-sm"></div>
                            <div className="h-24 rounded border border-zinc-200 bg-white shadow-sm"></div>
                        </div>
                        <div className="flex-1 rounded-lg bg-zinc-50 p-3">
                            <div className="mb-3 h-2 w-20 rounded bg-green-500/20"></div>
                            <div className="h-24 rounded border border-zinc-200 bg-white shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
