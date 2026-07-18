export default function Proyectos() {
  return (
    <section className="py-20 bg-gray-800 text-white px-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Mis Proyectos</h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        
        {/* Tarjeta de Proyecto 1 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400">Sistema de Gestión</h3>
          <p className="mt-2 text-gray-300">Aplicación full-stack para la gestión administrativa.</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">React</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">NestJS</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">PostgreSQL</span>
          </div>
        </div>
        
        {/* Tarjeta de Proyecto 2 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400">Juego Top-Down Stealth</h3>
          <p className="mt-2 text-gray-300">Videojuego 2D con mecánicas de sigilo, visión de enemigos y físicas de proyectiles.</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">Godot 4</span>
            <span className="bg-gray-900 px-3 py-1 rounded text-sm">GDScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}