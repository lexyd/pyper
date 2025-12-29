"use client";

import { useEffect } from "react";

export default function Waitlist() {
    useEffect(() => {
        // Tally script loading
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="waitlist" className="relative overflow-hidden py-24">
            <div className="absolute inset-0 -z-10 bg-indigo-600"></div>
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                    Secure Your Spot in Line
                </h2>
                <p className="mb-12 text-lg text-indigo-100">
                    Join the waitlist to get early access and exclusive updates.
                </p>

                <div className="w-full">
                    {/* Tally Embed */}
                    <iframe
                        data-tally-src="https://tally.so/embed/KYe9dk?alignLeft=1&hideTitle=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="400"
                        title="Pyper Waitlist"
                        className="border-0"
                    >
                    </iframe>
                </div>
                <p className="mt-4 text-sm text-indigo-100 opacity-60">
                    {/* Form ID: KYe9dk */}
                </p>
            </div>
        </section>
    );
}
