// src/pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {

    // functions/index.js

    const functions = require('firebase-functions');

    exports.api = functions.https.onRequest((req, res) => {
        if (req.path === '/generatePlaylist') {
            // Simulez une réponse de playlist
            const playlist = [
                { title: 'Chanson 1', artist: 'Artiste A' },
                { title: 'Chanson 2', artist: 'Artiste B' },
                // Ajoutez d'autres morceaux
            ];
            res.status(200).json({ playlist });
        } else {
            res.status(404).send('Not Found');
        }
    });


    return (
        <>
            <Head>
                <title>Générateur de Playlist Personnalisée par IA</title>
            </Head>
            <section className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-bold mb-6">
                    Créez Votre Playlist Personnalisée avec l'IA
                </h1>
                <p className="text-gray-700 mb-6">
                    Découvrez de la musique qui correspond à votre personnalité. Obtenez une playlist personnalisée générée par notre IA.
                </p>
                <Link href="/questionnaire">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition cursor-pointer">
            Commencer
          </span>
                </Link>
            </section>
        </>
    );
}
