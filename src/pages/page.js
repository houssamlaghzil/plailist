import Link from 'next/link';

export default function HomePage() {
  return (
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Créez Votre Playlist Personnalisée avec l'IA</h1>
        <p className="text-gray-700 mb-6">
          Découvrez de la musique qui correspond à votre personnalité. Obtenez une playlist personnalisée générée par notre IA.
        </p>
        <Link href="/questionnaire" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          Commencer
        </Link>
      </section>
  );
}
