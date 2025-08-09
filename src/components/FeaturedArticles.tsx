import React from 'react';

const FeaturedArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      category: "INCLUSIÓN",
      title: "Fútbol Femenino: Rompiendo Estereotipos",
      description: "Cómo el crecimiento del fútbol femenino está cambiando percepciones y creando oportunidades...",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "🏆"
    },
    {
      id: 2,
      category: "COMUNIDAD",
      title: "Canchas que Cambian Barrios",
      description: "Programas deportivos comunitarios que están transformando zonas marginadas en espacios de esperanza...",
      bgGradient: "from-orange-400 to-red-500",
      icon: "🌍"
    },
    {
      id: 3,
      category: "INTEGRACIÓN",
      title: "Fútbol Sin Fronteras",
      description: "Cómo el deporte ayuda a la integración de migrantes y refugiados en nuevas sociedades...",
      bgGradient: "from-purple-400 to-pink-500",
      icon: "🤝"
    }
  ];

  return (
    <section id="articulos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Artículos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reportajes profundos que van más allá del marcador
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                {/* Imagen de fondo completa */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.bgGradient}`}>
                  {/* Placeholder para imagen - aquí irán las imágenes reales */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-8xl">{article.icon}</span>
                  </div>
                </div>
                
                {/* Overlay gradiente para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Contenido superpuesto */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Categoría en la parte superior */}
                  <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-white/30">
                      {article.category}
                    </span>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                      <span className="text-xl">{article.icon}</span>
                    </div>
                  </div>
                  
                  {/* Título y descripción en la parte inferior */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-green-200 transition">
                      {article.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-green-200 font-semibold text-sm flex items-center hover:text-white transition">
                        Leer más 
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;