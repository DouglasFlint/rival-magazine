import React from 'react';

const SocialImpact: React.FC = () => {
  const stats = [
    { number: "500+", label: "Programas Analizados", bgColor: "bg-green-50", textColor: "text-green-600" },
    { number: "50K", label: "Jóvenes Impactados", bgColor: "bg-blue-50", textColor: "text-blue-600" },
    { number: "25", label: "Países Estudiados", bgColor: "bg-purple-50", textColor: "text-purple-600" },
    { number: "85%", label: "Impacto Positivo", bgColor: "bg-orange-50", textColor: "text-orange-600" }
  ];

  const features = [
    "Investigación basada en evidencia",
    "Historias humanas reales",
    "Análisis de políticas públicas",
    "Perspectiva global y local"
  ];

  return (
    <section id="impacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Midiendo el Impacto Real
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                El fútbol no solo entretiene, transforma. Analizamos datos concretos 
                sobre cómo el deporte genera cambios positivos medibles en la sociedad.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-6 ${stat.bgColor} rounded-lg`}>
                  <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Nuestro Enfoque</h3>
              <ul className="space-y-3 text-gray-700">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">¿Tienes una historia que contar?</h3>
              <p className="mb-4">Comparte proyectos deportivos que estén generando impacto en tu comunidad.</p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Enviar Historia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;