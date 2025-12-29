import { User, Users } from "lucide-react";

export default function Persona() {
    return (
        <section className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                        Built for Your Stage of Growth
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        Whether you're a solo powerhouse or scaling up.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Solo Creator */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                            <User className="h-6 w-6 text-zinc-900" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-zinc-900">The Solo Creator</h3>
                        <p className="mb-6 text-zinc-600">
                            You are the talent and the manager. Pyper acts as your AI assistant, filtering noise and highlighting what matters.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                Auto-prioritization of deals
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                One-click contract checks
                            </li>
                        </ul>
                    </div>

                    {/* Small Team */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                            <Users className="h-6 w-6 text-zinc-900" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-zinc-900">The Small Team</h3>
                        <p className="mb-6 text-zinc-600">
                            You have an assistant or manager. Pyper becomes the collaboration hub where they flag items for your approval.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-600">
                            <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                Approval workflows
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                Team comments on contracts
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
