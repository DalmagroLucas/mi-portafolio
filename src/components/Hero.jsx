export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">Hola, soy Lucas Dalmagro</h1>
      <p className="text-xl text-gray-400 mb-8">Desarrollador Full-Stack & Game Developer</p>
      <div className="flex gap-4">
        <a href="TU_LINK_GITHUB" className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">GitHub </a>
        <a href="TU_LINK_LINKEDIN" className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">LinkedIn</a>
      </div>
    </section>
  );
}