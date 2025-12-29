import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Waitlist() {
    return (
        <section id="waitlist" className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="mx-auto max-w-4xl px-4 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                    <Mail className="h-8 w-8 text-indigo-600" />
                </div>

                <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                    Ready to reclaim your inbox?
                </h2>

                <p className="mx-auto mb-20 max-w-2xl text-lg text-zinc-600">
                    Join the waitlist today and be the first to experience the future of creator management.
                    Stop drowning in email and start closing more deals.
                </p>

                <Link
                    href="https://tally.so/r/KYe9dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 hover:ring-offset-white"
                >
                    <span className="mr-2">Join the Waitlist</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>

                <p className="mt-20 text-sm text-zinc-500">
                    Limited spots available for early access.
                </p>
            </div>
        </section>
    );
}
