import React from 'react';

const AboutRival: React.FC = () => {
  return (
    <section id="sobre-rival" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Imagen lado izquierdo */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Placeholder para la portada de la revista */}
              <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Fondo con diseño de revista */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-900">
                  {/* Diseño simulado de portada */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    {/* Header de la revista */}
                    <div className="text-center space-y-2">
                      <h1 className="text-4xl font-bold tracking-wider">RIVAL</h1>
                      <p className="text-sm uppercase tracking-widest opacity-80">Fútbol Social</p>
                      <div className="w-20 h-px bg-white/50 mx-auto"></div>
                    </div>
                    
                    {/* Contenido central */}
                    <div className="text-center space-y-4">
                      <div className="text-8xl">⚽</div>
                      <h2 className="text-2xl font-bold leading-tight">
                        EL PODER <br/>
                        DEL DEPORTE
                      </h2>
                      <p className="text-sm opacity-90">
                        Transformando comunidades
                      </p>
                    </div>
                    
                    {/* Footer */}
                    <div className="text-center">
                      <p className="text-xs opacity-70">EDICIÓN ESPECIAL #01</p>
                      <p className="text-xs opacity-70">2025</p>
                    </div>
                  </div>
                  
                  {/* Efecto de textura */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                </div>
                
                {/* Sombra y borde */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20"></div>
              </div>
            </div>
          </div>
          
          {/* Contenido de texto lado derecho */}
          <div className="space-y-8">
            {/* Título principal */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Sobre <span className="text-green-600">Rival</span>
              </h2>
              <div className="w-20 h-1 bg-green-600 rounded"></div>
            </div>
            
            {/* Historia y misión */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                <strong className="text-gray-900">Rival</strong> nació de la convicción de que el fútbol es mucho más que 
                un deporte. Es un lenguaje universal que une culturas, rompe barreras y genera 
                transformaciones profundas en las comunidades.
              </p>
              
              <p>
                Fundada en 2025, nuestra revista digital se dedica a explorar las historias humanas 
                detrás del balón. Documentamos cómo el fútbol se convierte en herramienta de cambio 
                social, desde las favelas de Brasil hasta los campos de refugiados, desde las escuelas 
                rurales hasta los proyectos urbanos de inclusión.
              </p>
              
              <p>
                No somos solo espectadores del juego; somos cronistas de su impacto. Cada artículo 
                que publicamos busca revelar cómo el deporte más popular del mundo construye puentes, 
                sana heridas sociales y ofrece esperanza donde más se necesita.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <span className="text-green-600 text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Autenticidad</h4>
                    <p className="text-sm text-gray-600">Historias reales, voces genuinas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <span className="text-blue-600 text-lg">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inclusión</h4>
                    <p className="text-sm text-gray-600">Diversidad en todas sus formas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <span className="text-purple-600 text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rigor</h4>
                    <p className="text-sm text-gray-600">Investigación basada en evidencia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <span className="text-orange-600 text-lg">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovación</h4>
                    <p className="text-sm text-gray-600">Nuevas perspectivas narrativas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Llamada a la acción */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Únete a Nuestra Comunidad</h3>
              <p className="mb-4 text-green-50">
                Forma parte del movimiento que está redefiniendo cómo vemos el fútbol. 
                Suscríbete para recibir nuestras historias más impactantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Suscribirse Gratis
                </button>
                <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
                  Leer Edición Completa
                </button>
              </div>
            </div>
            
            {/* Datos curiosos */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Historias Publicadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                <div className="text-sm text-gray-600">Países Cubiertos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRival;