// src/pages/signup.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Head from 'next/head';

export default function SignUpPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (error) {
            console.error("Erreur d'inscription", error);
        }
    };

    return (
        <>
            <Head>
                <title>Inscription - Générateur de Playlist IA</title>
            </Head>
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold mb-6">Inscription</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                    >
                        S'inscrire
                    </button>
                </form>
            </section>
        </>
    );
}
