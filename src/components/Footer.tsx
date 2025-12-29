export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white py-12">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <div className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
                    Pyper
                </div>
                <p className="mb-8 text-zinc-500">
                    The Central Command Center for Creators.
                </p>
                <div className="flex justify-center gap-6 text-sm text-zinc-500">
                    <a href="#" className="hover:text-zinc-900">Terms</a>
                    <a href="#" className="hover:text-zinc-900">Privacy</a>
                    <a href="#" className="hover:text-zinc-900">Twitter</a>
                </div>
                <p className="mt-8 text-xs text-zinc-400">
                    © {new Date().getFullYear()} Pyper. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
