// src/components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/">
                    <span className="text-gray-800 text-xl font-bold">Générateur de Playlist IA</span>
                </Link>
                <div>
                    <Link href="/login">
                        <span className="text-gray-800 mx-2">Connexion</span>
                    </Link>
                    <Link href="/signup">
                        <span className="text-gray-800 mx-2">Inscription</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
