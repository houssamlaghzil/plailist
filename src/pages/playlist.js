// src/pages/playlist.js

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function PlaylistPage() {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await fetch('/api/generatePlaylist');
                const data = await response.json();
                setPlaylist(data.playlist);
            } catch (error) {
                console.error('Erreur lors de la récupération de la playlist', error);
            }
        };
        fetchPlaylist();
    }, []);

    return (
        <>
            <Head>
                <title>Votre Playlist Personnalisée - Générateur de Playlist IA</title>
                <meta
                    name="description"
                    content="Profitez de votre playlist personnalisée générée en fonction de votre personnalité."
                />
            </Head>
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold mb-6">Votre Playlist Personnalisée</h2>
                {playlist.length > 0 ? (
                    <ul className="space-y-4">
                        {playlist.map((track, index) => (
                            <li key={index} className="border border-gray-300 p-4 rounded-md">
                                <p className="text-lg font-semibold">{track.title}</p>
                                <p className="text-gray-700">{track.artist}</p>
                                {/* Incluez des liens vers Spotify, YouTube Music, Apple Music */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Chargement de votre playlist...</p>
                )}
            </section>
        </>
    );
}
