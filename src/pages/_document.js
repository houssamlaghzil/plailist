// src/pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta
                    name="description"
                    content="Créez une playlist personnalisée en fonction de votre personnalité grâce à l'intelligence artificielle."
                />
                <meta
                    name="keywords"
                    content="IA, Playlist, Musique, Personnalité, Spotify, YouTube Music, Apple Music"
                />
            </Head>
            <body className="bg-gray-50">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
