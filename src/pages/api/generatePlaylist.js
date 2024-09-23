// src/pages/api/generatePlaylist.js

export default function handler(req, res) {
    // Simulez une réponse de playlist
    const playlist = [
        { title: 'Chanson 1', artist: 'Artiste A' },
        { title: 'Chanson 2', artist: 'Artiste B' },
        // Ajoutez d'autres morceaux
    ];

    res.status(200).json({ playlist });
}
