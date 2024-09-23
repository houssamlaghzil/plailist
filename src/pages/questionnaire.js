// src/pages/questionnaire.js

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function QuestionnairePage() {
    const router = useRouter();
    const [answers, setAnswers] = useState({
        humeur: '',
        genrePreference: '',
        activite: '',
    });

    const handleChange = (e) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Enregistrez les réponses ou envoyez-les à une API
        router.push('/playlist');
    };

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-6">Parlez-nous de vous</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Quelle est votre humeur actuelle ?</label>
                    <input
                        type="text"
                        name="humeur"
                        value={answers.humeur}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Genre musical préféré ?</label>
                    <input
                        type="text"
                        name="genrePreference"
                        value={answers.genrePreference}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Activité préférée en écoutant de la musique ?</label>
                    <input
                        type="text"
                        name="activite"
                        value={answers.activite}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                >
                    Générer la Playlist
                </button>
            </form>
        </section>
    );
}
